import {
  import_react_router_dom
} from "/build/_shared/chunk-2EHQF7PW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/joshie/repo/remix/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var links = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: "https://example.com/some/styles.css"
    },
    { page: "/users/123" },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image"
    }
  ];
};
var Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Index Page"), ";", /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
};
var routes_default = Home;
export {
  routes_default as default,
  links
};
//# sourceMappingURL=/build/routes/index-IWWTTQHM.js.map
