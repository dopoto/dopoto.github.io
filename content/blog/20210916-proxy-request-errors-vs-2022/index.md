---
title: A workaround for ‘proxy request’ errors in the Visual Studio 2022 Standalone Angular Template
date: "2021-09-16T22:12:03.284Z"
description: "A workaround for ‘proxy request’ errors in the Visual Studio 2022 Standalone Angular Template"
---

# Error

I was playing with the Standalone Angular Template that comes with Visual Studio 2022 (https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022). It looks like the current version of this template will throw an error at runtime when you go with the default settings:


    [HPM] Error occurred while trying to proxy request 
    /weatherforecast from localhost:4210 to https://localhost:5063 
    (EPROTO) 
    (https://nodejs.org/api/errors.html#errors_common_system_errors)

# Workaround

Change the target in proxy.conf.js to from ‘https://…’ to ‘http://…’.

```js
const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "http://localhost:5063",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
```