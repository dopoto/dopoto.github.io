---
title: Deploying a .NET 6 web application to Azure from Visual Studio 2022
date: "2021-09-21T23:46:37.121Z"
---

# Prerequisites

- Set up a .NET 6 app and ensure that it’s running locally — see https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022
- Set up a free Azure account at https://azure.microsoft.com/en-us/free/

# Steps

Right-click your backend project, hit Publish…
![](./1.png)

Choose Azure in the Target step
![](./2.png)

Let’s go with Azure App Service here
![](./3.png)

Create a Resource Group and a Hosting Plan here, if you don’t have them already.
![](./4.png)

Let’s just skip the API Management part
![](./5.png)

Choose the first option here — Publish.
![](./6.png)

Almost there… Change Deployment Mode from “Framework-dependent” to “Self-contained”
![](./7.png)

Now hit Publish, and wait for it to do its thing:
![](./8.png)

Good, let’s see if that worked. Open your browser and check that the /weatherforecast endpoint is working. You should see something like this:
![](./9.png)

Yay! Your backend is now up and running in Azure!