---
title: Visual Studio Code — finding all files that *do not* contain a certain string
date: "2021-12-04T22:40:32.169Z"
description: Visual Studio Code — finding all files that *do not* contain a certain string
---


I was running a Karma test suite containing a few hundred unit tests, when I got into this error:

```js
Can’t bind to ‘some-property’ since it isn’t a 
known property of ‘some-component’
```

Now, I happen to know that this is caused by a missing [NO_ERRORS_SCHEMA] in one or more of the spec files. 

But — the Karma tests runner does not provide any info about the actual names of the files having this issue.

So — how to solve this problem then: “get a list of all *.spec.ts files in my project that do not contain the ‘NO_ERRORS_SCHEMA’ string”?

Luckily, there’s a Visual Studio Code extension for that:
[ReverseSearch](https://marketplace.visualstudio.com/items?itemName=DanishSarwar.reverse-search). 
Once installed, you can simply:
- enter a string
- choose files to include in the ‘reverse search’ (optional)
- choose files to exclude from the ‘reverse search’ (optional)

The files not containing the string will be neatly displayed in a reverse-search output window:

Cool, right?