import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound.js";
import Rigister from "./pages/Rigister.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/login", view: Login },
    { path: "/register", view: Rigister },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

  if (!match) {
    match = {
      route: location.pathname,
      isMatch: true,
    };
    const page = new NotFound();
    RenderMatchedHtml(page);
  } else {
    const page = new match.route.view();
    RenderMatchedHtml(page);
  }
};

const RenderMatchedHtml = async (page) => {
  document.querySelector("main").innerHTML = await page.getHtml();
};

// 뒤로가기 또는 앞으로 가기시 데이터 출력
window.addEventListener("popstate", () => {
  router();
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link-spa]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});
