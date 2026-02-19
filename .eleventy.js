const { DateTime } = require("luxon");
const fs = require("fs");
const path = require("path");
const sass = require("sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItSup = require("markdown-it-sup");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy",
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addPassthroughCopy("./src/img");
  
  // Compile SCSS files
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compileOptions: {
      permalink: "raw",
    },
    compile: async function(inputContent, inputPath) {
      // Only process files in src/css directory
      const parsedPath = path.parse(inputPath);
      if (parsedPath.dir.indexOf(path.join("src", "css")) === -1) {
        return;
      }
      
      return async (data) => {
        const result = sass.compile(inputPath, {
          style: "expanded",
        });
        return result.css;
      };
    },
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAttrs)
    .use(require("markdown-it-sup"));
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

function extractExcerpt(article) {
  // In Eleventy v3, templateContent may not be available when shortcode runs (e.g. in list views).
  // Use rawInput (raw template source) when templateContent is not yet ready.
  let content = null;
  try {
    if (Object.prototype.hasOwnProperty.call(article, "templateContent")) {
      content = article.templateContent;
    }
  } catch (_) {
    // templateContent not ready yet (TemplateContentPrematureUseError in v3)
  }
  if (!content && article.rawInput) {
    content = article.rawInput;
  }
  if (!content) {
    return null;
  }

  const isHtml = content.includes("<p>");
  // 1. Explicit summary comment (works in both HTML and markdown)
  const summaryStart = content.indexOf("<!-- summary -->");
  const summaryEnd = content.indexOf("<!-- /summary -->");
  if (summaryStart !== -1 && summaryEnd !== -1) {
    return content
      .substring(summaryStart + "<!-- summary -->".length, summaryEnd)
      .trim();
  }
  // 2. First HTML paragraph
  if (isHtml) {
    const pStart = content.indexOf("<p>");
    const pEnd = content.indexOf("</p>", pStart);
    if (pStart !== -1 && pEnd !== -1) {
      return content.substring(pStart + 3, pEnd).trim();
    }
  }
  // 3. First paragraph in raw markdown (text before double newline)
  const firstParaEnd = content.indexOf("\n\n");
  if (firstParaEnd !== -1) {
    return content.substring(0, firstParaEnd).trim();
  }
  return content.trim() || null;
}
