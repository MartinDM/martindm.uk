---
layout: post
title: >
  AI Adoption; the cost of skipping the hard part
tags:
  - AI
  - software development
---

<!-- summary -->

**As someone interested in the ripple effects of change, I wanted to explore my evolving thoughts on this existential issue facing us as developers in what feels like a _moment_ in software, and creative work in general.**

Leadership in established organisations is increasingly following the trend of **imposing** AI into workflows...

While the impulse is understandable, as developers, we must ensure we don't lose sight of what truly **keeps us valuable**: our hard-earned skills in good design, thoughtful scaling of systems, and now, preserving our human agency over them.

<!-- /summary -->

Adoption of LLMs in software teams, especially at non-tech-native firms, has been tentative so far; often even suspect, following the familiar stages of new idea adoption from [ridicule to acceptance](https://jeffhester.net/2008/06/25/schopenhauer-and-the-lifecycle-of-a-new-idea/#:~:text=German%20philosopher%20Arthur%20Schopenhauer%20did,accepted%20as%20self%2Devident.%E2%80%9D). Typically, only then a 'safe' selection of tools can be used, despite an ever-growing range of use-case-specific AI products to transform how we work as creative knowledge workers.

Meanwhile, in tech, there remains a contentious [gap in the perception of AI adoption success](https://www.axios.com/2025/03/18/enterprise-ai-tension-workers-execs) between Makers and Leadership. The latter pushing for specific outcomes from of AI, heralding the success of a one-and-done rollout, while Engineers remain skeptical; perhaps each with their own idea of _what it is actually for._

As I wrote previously, a more meaningful and intentional value of AI exists beyond quicker output. If we’re not also using it to deepen user insights, collaborate more efficiently, and ship _the right things,_ then optimising for mere productivity is a mid-play.

> What is productivity if teams are still operating on the same information and feedback? The goal is still to write code _which generates value_ for users, and be able to retain our ability to do it.

After all, the one thing we know about the thing we **are** building is that **it is wrong.** Our goal as builders of useful software is to find out **where,** and how we can make it **less wrong** as soon and as often as possible.

All the agile ceremonies, words, and artefacts are mere performance if they do not **assist** us in that endeavour.

---

### **Getting from 0–60**

That said, I’m a realist. AI can, and **does** alleviate much toil in code generation: upgrading libraries, prototypes, releases, suggesting bug sources, maybe even writing tests.

It gets us (and even non-technical people) from ‘**0–60’** much quicker, allowing savvy Product Managers to quickly **pilot a hypothesis** and, with Product Engineers, get real feedback sooner; data with which to decide the **bets worth pursuing**.

> That’s what we’re doing with Products: making a bet; a hypothesis and testing it often. AI allows us to tighten that cycle.

If we do not, competitors' ability to find leverage in AI will. The baseline of being able to quickly learn and iterate has increased for all of us. AI just helps us get there sooner.

Unsurprising then, that some orgs are [mandating](https://leaddev.com/culture/ai-coding-mandates-are-driving-developers-to-the-brink) and even [ranking their people](https://newsletter.eng-leadership.com/p/enforcing-the-use-of-ai-in-engineering) on AI adoption; a practice we know will lead to [maladaptive behaviours](https://axify.io/blog/goodhart-law), undermining the original intentions if we don't define what outcomes we expect it to produce in our contexts. Else it becomes about mere rate of output.

**Decrease costs; less hiring, maybe even cutting headcount**, putting a lot of faith in being able to do more with less, or more specifically, have better user and business _outcomes_ from it, which is quite a different thing.

However, such measures this can create unintended cultural consequences where incentives become misaligned with product quality. Organisations may lose a valuable cultural advantage: the craft and consideration that go into a great product experience.

---

### **Fitness of AI Assistance**

> My experience using AI suggestions is that the **fitness** of the solutions diminishes the less proximal the problem space is.

That is to say, AI is often largely indifferent to technical and architectural considerations outside of the immediate scope, particularly those that support long-term maintainability.

At best, the quality of its solutions is limited by the quality of our _intentionality_ — our thinking - in our prompts.

What I’m saying is: you gotta know what you’re doing. Often from bitter experience, to know when it’s helping and when it’s luring you and your product down a shady path of expediency.

AI code generation, as technical people and leaders know, exposes teams and Products to second-order effects: skill atrophy, reduced autonomy, and the many ways AI can introduce wrong solutions, arbitrary tech choices, and unnecessary coupling into the codebase.

See [this article](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html) from Martin Fowler’s blog where the author evaluates LLM impact on developer skills and the risks of AI-generated code to the codebase.

In fact, in the short term, AI may actually _add latency_ to delivery as we learn how to use it effectively And that’s before we consider how maintainable any of it will be.

Personally, I anticipate a coming wave of poor-quality software and frustrating user experiences becoming the norm.

---

### **The Cost of Software is the Cost of Change**

Given that the [cost of software is roughly equivalent to the cost of change](https://www.youtube.com/watch?v=ZHpQs46xizQ) (Kent Beck), we should aim to preserve **optionality**; the ease of change in software design. Something AI in my experience, is **bad at** and can easily become an accelerant to tech debt.

AI code is a potential trap for those not previously acquainted with the challenges of code maintainability and complexity management and at best, can prevent newer developers learning those outcomes first hand. Unless they are deliberate and critical in their approach. For example, AI may suggest suppressing errors, adding unnecessary libraries, or creating premature abstractions; themselves a function of the _quality and intentionality_ of the prompts.

Unless we draw on our experience to _identify_ where starry-eyed expediency is replacing good design, we risk letting AI compromise our Products and with it, our own development and agency over the codebase. Delivery grinds to a halt the moment we need to debug or change the code, and we slowly create less intentional user experiences we won’t realise are broken until it’s too late.

---

### **What to Do? Devs Against Entropy**

As developers in this shifting technical and internal-political landscape, we must guard against our own hard-earned skills being undermined. That means knowing what decoupled design looks like, **advocating** for it and being vocal across our orgs and with peers to preserve the foundations of long-term product success.

> A team losing its grasp on changeability is a team losing agency. On a long enough timeline, that’s how a product dies.

---

### **It’s Fun to Be Competent**

Vibe coding is having its moment and it's uncler tome if it's going to take its place as a legitimate part of established software delivery, but for mature codebases I don’t think the productivity gains we get from AI will be that transformational...

We still need to solve problems ourselves, only now with the added overhead of reviewing and second-guessing AI’s potentially ruinous output.

<blockquote>
It may give us a head start in the greenfield arena, but will still be limited by the quality and foresight of our prompts.
</blockquote>

While human nature seeks the easy path, there are no shortcuts to becoming **competent** at software design.  
That competence will be even more important, not less, for working effectively **with** AI—acting as studious **Lead Developers** reviewing its output to serve our own ends.

That is, until the organisation is fully weaned off humans altogether.

---

### The Call of Autocomplete\*\*

Pause here. Are we **in this moment** choosing to forego learning? The pressure of urgency is getting the better of us.

Will we or our colleagues need to pay for that later or try to make sense of it? If so, are we happy with that cost?

It’s been unsettling to notice this in myself: reflexively **expecting** a solution to (often incorrectly) appear, and having to stay diligent to resist the temptation.

Here’s a thought: turn it off.

The outcomes we _want_ come from intentionality. Consider what we **want** a solution to look like and the user to experience, before using the assistant to help create it.

We have a responsibility **to ourselves** not to become dependent. Otherwise, we’re choosing learned helplessness. Not expediency, pace, or valuable _output_.

We must remember that the organisation’s goals are impersonal: to capture a first-mover advantage; a shot at any potential benefit in the name of **speeding up** delivery **for the business**.

That’s fine; it’s in their DNA, and it’s their obligation.

But **we**, as makers and professionals, have a responsibility to ourselves, to maintain technical fitness and effectiveness with debugging skills; to retain the self-mastery to learn hard things and solve problems **ourselves,** using tools in **support** of that goal.

---

### The Humanity!

The current thinking appears to be: once the hype of "vibe coding" fades and reveals its limits in any scaled product, we’ll be left with the lesson of why AI should be used with caution. Always in service of our _own_ vision of good software design.

In the end, AI is most powerful when wielded intentionally having _earned_ the right through (mis)adventures of software development and _maintenance;_ when we can choose _when_ and _how_ to use it—in support of, not as a replacement for, our human judgment.
