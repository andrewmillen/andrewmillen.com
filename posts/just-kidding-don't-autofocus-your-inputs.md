---
title: "Just Kidding, Don't Autofocus Your Inputs"
date: '2022-06-14'
blurb: "TFW a thing you've been recommending for years is actually an accessibility problem."
---

I was designing a modal experience this week, and out of habit, left a note for the developer that the first input on the form within the modal should be set to autofocus when the modal opens. (And then I [tweeted](https://twitter.com/andrewsmillen/status/1534179484911411200) about it, like a moron.)

It's a tip I received from a former boss, and one that I passed onto others. You know the user will want/need to fill out the form, so why not take them straight to it? It saves a click. Keyboard users will love you. It doesn't hurt anybody.

Well, except that it does.

[Gavyn McKenzie](https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109) beat me to this realization by a cool 4 years. I'm sure several others did too.

> Autofocus can dump screenreader users into your form with zero context, leaving them lost and confused on your page.

Of course, screen readers will skip over any contextual information that may be before your form in the DOM. Whoops.

> Autofocus can also confuse regular users, especially on mobile. So keep it simple, let people click in to your inputs when they are ready.

Well said, Gavyn. Lesson learned.
