---
layout: post
title: >
  AI Adoption; the cost of skipping the hard part
---

<!-- summary -->

**As someone interested in the ripple effects of change, I wanted to explore my evolving thoughts on this existential issue facing us as developers in what feels like a _moment_ in software, and creative work in general.**

Leadership in established organisations is increasingly following the trend of **imposing** AI into workflows...

While the impulse is understandable, as developers, we must ensure we don't lose sight of what truly **keeps us valuable**: our hard-earned skills in good design, thoughtful scaling of systems, and now, preserving our human agency over them.

<!-- /summary -->

Adoption of LLMs in software teams, especially at non-tech-native firms, has been tentative so far; often even suspect. Typically, only pre-approved tools can be used, despite an ever-growing range of use-case-specific AI-assist products.

Some orgs are [mandating](https://leaddev.com/culture/ai-coding-mandates-are-driving-developers-to-the-brink) and even [stack-ranking their people](https://newsletter.eng-leadership.com/p/enforcing-the-use-of-ai-in-engineering) on AI adoption, a practice we know will lead to [maladaptive behaviours](https://axify.io/blog/goodhart-law), undermining the original intentions.

Meanwhile, there remains a contentious [gap in the perception of AI adoption success](https://www.axios.com/2025/03/18/enterprise-ai-tension-workers-execs) between Makers and Leadership. The latter pushes for specific applications of AI, heralding the success of a one-and-done rollout, while Engineers remain skeptical—perhaps each with their own idea of _what it is actually for._

As I wrote previously, a more meaningful and intentional value of AI exists beyond quicker output. If we’re not also using it to deepen user insights, collaborate more efficiently, and ship _the right things,_ then optimising for productivity is only a mid-play.

> What is this, if teams are still operating on the same information and feedback? The goal is still to write code _which generates value_ for users.

After all, the one thing we know about the thing we **are** building is that **it is wrong.** Our goal as builders of useful software is to find out **where,** and how we can make it **less wrong** as soon and as often as possible.

All the agile ceremonies, words, and artefacts are mere performance if they do not **assist** us in that endeavour.

---

### **Getting from 0–60**

That said, I’m a realist. AI can, and **does** alleviate much toil in rote code generation: upgrading libraries, prototypes, releases, suggesting bug sources, maybe even writing tests.

It gets us (and even non-technical people) from ‘**0–60’** much quicker, allowing savvy Product Managers to quickly **pilot a hypothesis** and, with the Product Engineers, get real feedback sooner—data with which to decide the **bets worth pursuing**. But it must end there.

> That’s what we’re doing with Products: making a bet; a hypothesis and testing it often. AI allows us to tighten that cycle.

If we do not, competitors will. The baseline of being able to quickly learn and iterate has increased for all of us. AI just helps us get there sooner.

It’s unsurprising, then, that AI is being increasingly mandated—perhaps without proper analysis of what we actually expect it to do. Perhaps:

**Decrease costs; less hiring, maybe even cutting headcount** on the assumption of elevating or maintaining value... Surely a net-win for businesses.

However, this can create unintended cultural consequences where incentives become misaligned with product quality. Organisations may lose a valuable cultural advantage: the craft and consideration that go into a great product experience.

---

### **Fitness of AI Assistance**

That said, Product Engineers may rightly view AI **contributions to the codebase** with skepticism...

> My experience using AI suggestions is that the **fitness** of the solutions diminishes the less proximal the problem space is.

That is to say, AI is often largely indifferent to technical and architectural considerations outside of the immediate scope—particularly those that affect long-term maintainability.

At best, the quality of its solutions is limited by the quality of our _intentionality_—our thinking—when prompting.

Therefore, the solutions it presents can be an easy trap for those not previously exposed to the challenges of code maintainability and complexity management. It may suggest suppressing errors, adding unnecessary libraries, or creating premature abstractions—all symptoms of weak prompts or inexperience.

What I’m saying is: you gotta know what you’re doing—often from bitter experience—to know when it’s helping and when it’s luring you and your product down a shady path of expediency.

AI code generation, as should be obvious to technical leaders, exposes teams and Products to second-order effects: skill atrophy, reduced autonomy, and the many ways AI can introduce wrong solutions, arbitrary tech choices, and unnecessary coupling into the codebase.

See [this article](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html) from Martin Fowler’s blog on evaluating LLM impact on developer skills and the risks of AI-generated code.

In fact, in the short term, AI may actually _add latency_ to delivery as we learn how to use it effectively—and that’s before we consider how maintainable any of it will be.

Personally, I anticipate a coming wave of poor-quality software and frustrating user experiences becoming the norm.

---

### **The Cost of Software is the Cost of Change**

Given that the [cost of software is roughly equivalent to the cost of change](https://www.youtube.com/watch?v=ZHpQs46xizQ) (Kent Beck), we should aim to preserve **optionality**—the ease of change in software design. AI, in my experience, is **bad at** this and often an accelerant to tech debt.

Unless we draw on our experience to identify where starry-eyed expediency is replacing good design, we risk letting AI compromise our codebases—and with it, our understanding and agency. Delivery grinds to a halt the moment we need to debug or change the code, and we slowly create less intentional user experiences we won’t realise are broken until it’s too late.

---

### **What to Do? Devs Against Entropy**

As developers in this shifting technical and internal-political landscape, we must guard against our own hard-earned skills being undermined. That means knowing what decoupled design looks like—and **advocating** for it—collaborating across our orgs to preserve the foundations of long-term product success.

> A team losing its grasp on changeability is a team losing agency. On a long enough timeline, that’s how a product dies.

---

### **It’s Fun to Be Competent**

I don’t think the productivity gains we get from AI will be that transformational when maintaining a mature codebase. We still need to solve problems ourselves—only now with the added overhead of reviewing and second-guessing AI’s potentially ruinous output. We don’t get off that easy.

While human nature seeks the easy path, there are no shortcuts to becoming **competent** at software design. That competence will be even more important, not less, for working effectively **with** AI—acting as studious **Lead Developers** reviewing its output to serve our own ends.

That is, until the organisation is fully weaned off humans altogether.

We have a responsibility **to ourselves** not to become dependent. Otherwise, we’re choosing learned helplessness—not expediency, pace, or productivity. Those are lesser goals.

Real productivity starts with intentionality: knowing what is valuable. Consider what we **want** a solution to look like and the user to experience, before using the assistant to help create it.

---

### **The Call of Autocomplete**

Pause here. Are we **in this moment** choosing to forego learning?

Will we—or our colleagues—need to pay for that later or try to make sense of it? If so, are we happy with that cost?

It’s been personally unsettling—amusing, even—to notice this creeping in. Reflexively **expecting** a solution to (often incorrectly) appear, and having to stay diligent to resist the temptation.

Here’s a thought: turn it off.

We may need to hold our nerve—just for a moment—against the background noise of urgency.

We must remember that, in that choice point, the organisation’s goals are impersonal: to maximise productivity and efficiency by any means necessary. An attempt to capture a first-mover advantage; a shot at any potential benefit in the name of **speeding up** delivery (or, more palatably, ‘increasing pace’) **for the business**.

That’s fine—it’s in their DNA, and it’s their responsibility.

But **we**, as makers, have a responsibility to ourselves to maintain technical fitness and effectiveness with debugging skills; to retain the self-mastery to learn hard things and solve problems **ourselves,** using tools in **support** of that goal.

---

### **The Humanity!**

The current thinking appears to be: once the hype of "vibe coding" fades and reveals its limits in any scaled product, we’ll be left with the lesson of why AI should be used with caution—always in service of our _own_ vision of good software design.

In the end, AI is most powerful when wielded by those who have _earned_ that right through the (mis)adventures of software development and _maintenance;_ those who can choose _when_ and _how_ to use it—in support of, not as a replacement for, their judgment.

---

Let me know if you'd like this exported as a formatted file or published as a blog post!
