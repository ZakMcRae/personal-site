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
} from "../content/svg/";

export const projectsData = [
  {
    name: "Inventory Application",
    summary:
      "A fake whisky store/catalogue in which you can interact with products. A CRUD app (create, read, update and delete).",
    tech: [Nodejs, Express, CSS, MongoDB],
    projectImage: "https://i.imgur.com/pXsK5b3.jpg",
    repoUrl: "https://github.com/ZakMcRae/inventory-application",
    siteUrl: "https://young-eyrie-64675.herokuapp.com/",
  },
  {
    name: "Shopping Cart",
    summary: "Small E-Commerce page with functional shopping cart.",
    tech: [Javascript, React, CSS],
    projectImage: "https://i.imgur.com/NhByvEM.jpg",
    repoUrl: "https://github.com/ZakMcRae/shopping-cart",
    siteUrl: "https://zakmcrae.github.io/shopping-cart/",
  },
  {
    name: "psts (Blog)",
    summary: "A blog website. Frontend MVC and Backend API.",
    tech: [Python, FastAPI, SQL, HTML, Bootstrap, SwaggerUI],
    projectImage: "https://i.imgur.com/h95mM8l.jpg",
    repoUrl: "https://github.com/ZakMcRae/psts-api",
    siteUrl: "https://psts.xyz/",
  },
  {
    name: "lsts (Todo list)",
    summary: "A todo list website.",
    tech: [Python, Flask, HTML, Bootstrap, SQL, SwaggerUI],
    projectImage: "https://i.imgur.com/0pxD7ml.jpg",
    repoUrl: "https://github.com/ZakMcRae/lsts",
    siteUrl: "https://lsts.xyz/",
  },
];
