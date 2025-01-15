---
layout: layouts/base.njk
title: Apps
templateClass: tmpl-page
eleventyNavigation:
  key: Apps
  order: 0
---

## Url:jam - URL Shortener

🚀 [View online →](https://url-jam.vercel.app)

💻[Repo](https://github.com/MartinDM/url-jam)

[![URL Shortener](/img/url-jam-app.png)](https://url-jam.vercel.app)

Building a URl Shotener is a great learning exercise in how to architect such an app and saw me working with the nuances of validating and correcting URL inputs, the `URL` API, `zod` library and Next14's new Server Components.

It was a fun little project to do some high-contrast, bold styling in the UI too just using Tailwind, following a design I did in Figma.

Built with Next14 (TypeScript, Server Components), Prisma ORM, MongoDB, Zod validations, and Tailwind for styling.

## JS / Typescript Calculator

🚀 [View online on StackBlitz →](https://stackblitz.com/edit/martin-js-calculator?file=src%2Fmain.ts)

💻[Repo](https://github.com/MartinDM/Vanilla-JS-Calculator)

This project was a refreshing return to JavaScript fundamentals. I built my own patterns for managing state and manipulating the DOM, which encouraged me to think methodically about each step—especially when handling the quirks of calculator operations!

It was eye-opening to see just how crucial clear naming and a clean separation of behaviors are, even for my future self to make sense of the code. Plus, it was a great excuse to experiment with some retro styling. A fun and insightful little project!

[![JS Calculator](/img/js-calculator-app.jpeg)](https://stackblitz.com/edit/martin-js-calculator?file=src%2Fmain.ts)

## iTunes Music Artwork searcher

🚀 [View online →](https://mdm-itunes-search.surge.sh/)

💻[Repo](https://github.com/MartinDM/iTunes-Artwork-Searcher)

[![Album posters](/img/album-artwork-search.png)](https://mdm-itunes-search.surge.sh/)

I was playing recently with the album and artist info available via the Apple iTunes database using their API, so thought it would be a fun idea to turn it into an app.

I started with some Figma wireframes and a spec I'd set for myself such as the entity type and sizes I wanted to make available.

Built with React and Vite with Chakra UI components.

## Resource tracker

🚀 [View online →](https://martin-asset-list.surge.sh/)

💻 [Repo →](https://github.com/MartinDM/asset-list)

[![Asset tracker](/img/asset-tracker.png)](https://martin-asset-list.surge.sh/)

This was a fun coding exercise to add hardware items to a list with some business rules I set myself, such as implementing unique IDs per asset, and an undo function.

The state of the list also persists between refresh using local storage.
