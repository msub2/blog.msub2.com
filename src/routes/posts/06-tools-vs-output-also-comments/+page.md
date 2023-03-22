---
slug: "06-testtools-vs-output-also-comments"
date: "2023-03-22"
title: "Tools vs. Output. Also, comments!"
description: "A reposting of some thoughts I had regarding working on tools vs working on games. Also, there are comments now!"
categories:
  - "website"
  - "gamedev"
---

I originally posted this on the WebXR Discord, but I thought it might make good blog material too so I'll repost it here:

**What do you prefer: building out your own tooling to have fuller control over the development process itself, or choosing existing tools (be it a library, framework, engine, etc) and working within them to build out the experiences you want to make?**

As I come close to finishing up the remake of one of my earlier games in A-Frame + PhysX, I've found myself thinking about my next potential project already, where I was thinking of using three.js + PhysX and an ECS like Miniplex to get real nitty gritty with how my whole project is structured and architected, basically building out my own little mini-engine in the process. And then recently I caught myself, thinking *I'm going to spend so long working on the tooling for this that I'll probably never even get to the actual game development part*. And actually making games is supposed to be the whole point! So I've been taking a look at Godot again and am thinking about making an optimized build template for my own needs, that way I can still produce web-friendly bundle sizes while taking advantage of Godot's massive plugin ecosystem, including godot-xr-tools (which have been used in this game [here](https://malcolmnixon.itch.io/vertigo-maze)).

*/repost.* Newer developments now:

Of course, trying to go to Godot wasn't as seamless as I was hoping either. I seem to be having issues utilizing godot-xr-tools in my test project, and there are some odd quirks that didn't exist in prior workflows (issues loading with the preview web server, meaning I have to export every time), so it's not the "quickly get up and get going" cureall I was hoping it might be. At this point now I'm considering two things: either experimenting with react-xr (another option with a rich existing ecosystem) or just going through with my original idea of three.js + PhysX + Miniplex. I haven't decided yet, but I'll probably make an update on that in a future blog post.

And lastly, there are comments on here now! Given that my audience is almost certainly nothing but techy folks and developers I'm using giscus to power the comments, which in the background just connects to discussion threads on the repo for this blog. I figure the auth requirement will likely also help prevent spambots from running rampant in the comment section too. Plus, you can react to posts! That's pretty neat! That's all for now though, talk to y'all again in the near future.
