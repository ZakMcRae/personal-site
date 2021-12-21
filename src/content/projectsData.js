import {
  Bootstrap,
  CSS,
  Express,
  FastAPI,
  Flask,
  HTML,
  Javascript,
  MongoDB,
  Nodejs,
  Python,
  React,
  SQL,
  SwaggerUI,
  Nginx,
  Git,
  Pug,
  Redux,
  SocketIO,
  ReactNative,
} from "../content/svg/";

export const projectsData = [
  {
    name: "IndiEats Landing",
    summary:
      "A landing page I made from a design mockup for a local independent food delivery service.",
    tech: [Nodejs, Express, Pug, Bootstrap],
    projectImage: "https://i.imgur.com/LoCpHYR.png",
    repoUrl: "",
    siteUrl: "https://indieats.ca/",
  },
  {
    name: "IndiEats Driver App",
    summary:
      "A prototype delivery driver app for a local independent food delivery service.",
    tech: [Javascript, ReactNative, Redux, SocketIO],
    projectImage: "https://i.imgur.com/42vXbX3.png",
    repoUrl: "",
    siteUrl: "",
  },
  {
    name: "Whisky Warehouse",
    summary:
      "A fake whisky store/catalogue in which you can create, edit, update and delete products.",
    tech: [Nodejs, Express, CSS, MongoDB],
    projectImage: "https://i.imgur.com/pXsK5b3.jpg",
    repoUrl: "https://github.com/ZakMcRae/inventory-application",
    siteUrl: "https://young-eyrie-64675.herokuapp.com/",
  },
  {
    name: "The Tool Store",
    summary: "Small E-Commerce page with functional shopping cart.",
    tech: [Javascript, React, CSS, Git],
    projectImage: "https://i.imgur.com/j5go8SC.jpg",
    repoUrl: "https://github.com/ZakMcRae/shopping-cart",
    siteUrl: "https://zakmcrae.github.io/shopping-cart/",
  },
  {
    name: "The Blog",
    summary: "A blog website. Frontend MVC and Backend API.",
    tech: [Python, FastAPI, SQL, HTML, Bootstrap, SwaggerUI],
    projectImage: "https://i.imgur.com/h95mM8l.jpg",
    repoUrl: "https://github.com/ZakMcRae/psts-api",
    siteUrl: "https://psts.xyz/",
  },
  {
    name: "Simple Lists",
    summary: "A list website. Useful for keeping track of tasks and todos.",
    tech: [Python, Flask, HTML, Bootstrap, SQL, Nginx],
    projectImage: "https://i.imgur.com/0pxD7ml.jpg",
    repoUrl: "https://github.com/ZakMcRae/lsts",
    siteUrl: "https://lsts.xyz/",
  },
];
