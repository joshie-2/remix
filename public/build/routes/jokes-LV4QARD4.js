import {
  Link,
  import_react_router_dom
} from "/build/_shared/chunk-W2XPKET5.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/joshie/repo/remix/app/routes/jokes.tsx?browser
init_react();

// app/routes/jokes.tsx
init_react();

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-GRYEAEBM.css";

// app/routes/jokes.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: jokes_default
    }
  ];
};
var Jokes = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)))));
};
var jokes_default2 = Jokes;
export {
  jokes_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-LV4QARD4.js.map