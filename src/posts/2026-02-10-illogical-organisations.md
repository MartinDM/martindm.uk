---
title: "Safety Over Alchemy: How the Engineering Organisation becomes Irrational"
layout: post
tags:
  - Culture
  - Tech
  - Organisations
---

<!-- summary -->

We might assume that all we need for right principles to be adopted is that they are _correct_ and logical. As we’ll see, when in a culture that promotes it, smart people create suboptimal systems. Correct prescriptions and judgements are sidelined if it means preservation of a prevailing system of incentives.

<!-- /summary -->

### Alchemy; The Limitation of Rational Optimisation

I picked up Rory Sutherlands’ new book ‘Alchemy’ [<sup>2</sup>](#ref-2) this week and loving it. It’s an explore into the real ‘why’ behind consumer trends, and the absurdities in our consumer and work cultures, such as:

- Red Bull, despite being a huge brand is regarded by consumers as outright ‘disgusting’ (in no uncertain terms) which is _why_ it’s so appealing
- We don’t like delays, but not because of the delay itself; rather because of the anxiety caused by ambiguous, un-actionable information
- The opposite of a ‘good idea’, is also a good idea

I cite Sutherland because his book clarified a conclusion I had been circling: when non-technical organisations attempt to become _engineering_ or _product-led_, they often dismiss the second-order, psychological dimensions of change.

We might assume that all we need for right principles to be adopted is that they are _correct_ and logical. Yet, in cultures that reward safety and legibility, smart people routinely create suboptimal systems. Correct prescriptions are sidelined when they threaten prevailing incentives; if a culture does not believe in Alchemy, it designs systems that cannot accommodate emergence.

I want to show how orgs, in maturing their understanding of the _nature_ of software delivery, can move beyond attempts to apply _reductionist_ methods to software delivery, and toward a model that embraces the trust, learning and emergence necessary in building novel and valuable software.Idoes mark

### The Real Incentive: Safety Over Effectiveness

Dave Farley, Kent Beck, Martin Fowler and many in the canon have written about how to address the challenges of managing software delivery (notably in _Accelerate, Tidy First?_), often through establishing a culture around habits of excellence, feedback and accountability rather than heavy process and inspection.

_High performing_ engineering teams are enabled and autonomous to do so. Adopting truly generative habits, devolved product decision-making based on learning, XP and Trunk Based Development, which, while less ‘visible’ in the sense the org has learned to value it it, _are_ the ways to create a high performing team [<sup>3</sup>](#ref-3)

They instead operate although not explicitly, on established, locally-optimised _incentives_, power structures, and risk containment. These are dynamics engineers - myself included - often underestimate, or don’t recognise and find so uncomfortably incompatible with our intuition of software in its [pure sense](https://www.seangoedecke.com/pure-and-impure-engineering/).

In Alchemy, Sutherland points out the mechanic at work: It’s hard to get fired for an initiative failing that was all-together sensible and not at all counter-intuitive in the current culture. And so many large organisations tend toward the mean; the defensible. High performing software teams are outliers in these cultures.

For example Trunk Based Development, TDD, and XP/pair programming which have associations of being an affront to the organisation’s evaluation of what risk is become high emotional effort to promote in a culture incentivised around visibility and governance of predictable output. These practices _do_ lead to better outcomes. [<sup>5</sup>](#ref-5)

Yet, technical orgs miss the chance to _invert;_ _embracing_ emergence instead of expensive attempts to mitigate against it.

But I’m coming to an understanding - and about time! - that maybe the high cost and waste of optimising for visibility and inspection, and a lagging view on what is _even valuable_, is revealed as something the org would rather absorb. [<sup>6</sup>](#ref-6) [<sup>3</sup>](#ref-3)

### Incentives for the Desert and the Forest - Illogic as safety

This idea is captured so eloquently by Kent Beck in an entertaining talk on the two universes of software as _[Desert and Forest](https://www.youtube.com/watch?v=W7XL_LZgvKI)_

The same terms we might encounter in each world, mean different things (think accountability, metrics, observability), and the incentives at work are vastly different, such that organisations with a Desert mindset - scarcity, fear of unpredictability - are incentivised to adopt behaviours that make sense _in_ the Desert. [<sup>8</sup>](#ref-8)

So the system behaves accordingly: the cultural biases decide what risk _is_ not _what is actually_ risky if we follow the logic to its second-order.

The organisation, then, is _logical_ in its own way. But not quite as logical as any individual within it. A kind of _psycho-logic_.

But by repeatedly _patching_ with first-order, symptomatic solutions: meetings, gates, hand-offs, inspection - organisations lock-in the symptoms while the underlying culture of passivity that led to the system in the first place, becomes normalised. [<sup>9</sup>](#ref-9)

What’s needed is a culture of ownership at the team level: feeling empowered to drive change we as engineers _know_ is right, supported by strong leadership signals of trust and decentralised command from the organisation.

### Knowing the Limits of our Influence

We take on our role implicitly knowing that for the most part, we are unable to singularly influence an optimal workflow if it violates the organisation’s need for visibility, reporting and predictability.

Nevertheless, it causes me some unrest when I’m embedded in the inertia of an irrationally inefficient system in large tech.

It is psychologically costly for many Engineers to apply _too much_ of ourselves onto a system; to try to redeem it, without considering _what_ is _actually_ being optimised.

As engineers we’re particularly vulnerable to this. We’re beings driven by making the world coherent to us, applying rationality at work; impulses to which our environment can feel consistently resistive, which _we_ absorb. We forget this is actually a feature.

To re-appropriate Pascal, “~~the heart~~ systems _have a reasons of their own of which reason knows nothing.”_

So while we as engineers should apply critical systems-thinking at the local level, we should be **careful to consider the cost to ourselves and why the environment favours what it does.**

I don’t think this is being passive, but realistic and self-sustaining to be effective at what we _can do within_ the system without needing to redeem it.

Perhaps the _suboptimal_ — the crumbs from the table, as it were — _is entirely acceptable_ by the org all-told, and doesn’t preclude _sufficient_ market success at all.

It is, after all, just fine by them.

Just.

But that’s enough.

<div class='post-script'>

### Footnotes

**First class activities:**

The extent to which high-performing engineering habits are first-order activities in a company, serves as a strong signal of how that org regards their Technology division. ie. Whether it’s a primary driver of value or a _cost centre_: its members fungible, without incurring any switching costs, and linearly scalable. This in my experience is a reliable signal on the experience you might have as engineer there.

<hr />

<a name="ref-1"></a>[1] https://www.youtube.com/watch?v=lhlS-Wds02M

<a name="ref-2"></a>[2] Rory Sutherland, 'Alchemy' (book, cited in text)

<a name="ref-3"></a>[3] There are many failure modes and beliefs stemming from this reductive worldview: Long-lived teams aren't inherently essential, people are fungible cogs, switching costs don’t exist, extra bodies makes work faster, software can be accurately planned, quality can be handed off and inspected-in…

<a name="ref-5"></a>[5] https://dora.dev/capabilities/trunk-based-development/#how-to-implement-trunk-based-development

<a name="ref-6"></a>[6] _This was covered in_ [Illegible Perception](https://blog.julik.nl/2025/09/illegible-perception)_, a response to Sean’s brilliant_ [Seeing like a Software Company](https://www.seangoedecke.com/seeing-like-a-software-company/)’, which describes this optimisation for visibility, even at the expense of executing on the supposedly critical function of delivering software.

<a name="ref-7"></a>[7] https://www.youtube.com/watch?v=W7XL_LZgvKI

<a name="ref-8"></a>[8] This behaviour is effectively _incentivised_ in the way large orgs regard risk, and respond to failures punitively, implied if not explicit. This is a sufficiently commonplace effect that it is captured in the cuttingly-accurate [_Larman’s Law_](https://www.craiglarman.com/wiki/index.php?title=Larman%27s_Laws_of_Organizational_Behavior)

<a name="ref-9"></a>[9] There is an idea in manufacturing - **Theory of Constraints (TOC) -** my favourite go-to for software analogies, that bottlenecks can not not eliminated, only moved to the next slowest part of the system.

</div>
