import {
  Links,
  LiveReload,
  import_react_router_dom
} from "/build/_shared/chunk-2EHQF7PW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/joshie/repo/remix/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-TCTZ3JID.css";

// app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Love Remix"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-HVISCD6K.js.map
