---
slug: "07-explorations-and-integrations"
date: "2023-8-05"
title: "Explorations and Integrations"
description: "Making more open source contributions and doing some fun game audio integrations."
categories:
  - "webxr"
  - "gamedev"
---

Hello again. Back with some updates on some goings-on in the past few months. I made a couple of forays into the wider open-source sphere again, most notably to SerenityOS and Servo, and worked on (probably the first-ever) integrations of FMOD and Wwise into a WebXR project!

Serenity is a project I've been aware of for some time now since watching the browser hacking videos from Andreas Kling, and it felt pretty neat to finally add my name to the list of contributors. I stubbed a bit more of the Web Audio API and fixed a bug where the `no-store` cache control directive wasn't being respected, fixing the random button on XKCD. Aside from that I just did some small string fixes and changes to WebIDL bindings, but overall it was also good practice with writing C++.

Servo was another big one for me, as the changes I made were directly related to its WebXR implementation in the `servo/webxr` crate. As of writing the only WebXR implementation I have yet to make a patch to is Chromium (and I've got my eyes on a potential candidate issue). The changes to Servo were geared around getting WebXR to work on Windows (most Windows-related XR code was related to Hololens), which I did eventually manage to get working with some controller support:

![A screenshot of a WebXR session running in Servo](/img/servo-webxr.jpg)

An exciting project for me the last week or so has been getting these [FMOD](https://www.msub2.com/demos/fmod-webxr-test) and [Wwise](https://www.msub2.com/demos/wwise-webxr-test) + WebXR integrations working, as it's been forever since I had an excuse to open up anything game audio related. I'd say for the most part that working with FMOD was pretty enjoyable, in part because they officially target the Web as a platform and have the necessary resources easily available to access. Wwise was the much trickier one, but also the one I especially wanted to get working, as I did a lot with Wwise back in college and have a particular fondness for it. The biggest hurdle (after getting access to their Web platform, which is currently behind a technical preview) was writing the necessary bindings for their SDK to be able to generate a standalone WASM blob that I could then use in the WebXR project from JavaScript. I honestly wasn't sure I was going to be able to pull it off, but thankfully I made the necessary breakthroughs and got it up and running, with a public repo sharing progress/instructions [here](https://github.com/msub2/wwise.js). There's still some more work to do on it of course, but as it is right now I think it provides most of what you'd need for basic Wwise integration.

So what's next? Well for one thing I have a big move coming up within the next month, assuming everything goes to plan, so I expect some interruptions to any *big* projects I decide to start in the next couple weeks, but short-term I'm probably going to try and tackle that previously mentioned Chromium bug and do a bit more updating of the Wwise bindings (I promised I'd chat with their web platform folks over at Audiokinetic after my demo was finished too, so I'm looking forward to that). I'll also ideally get back to my escape room game that I began a while ago but got repeatedly sidetracked on (mostly by the things you've read about in this blog post!).

Anyways, that's all from me for now, will (hopefully) post again before 2024.
