const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Home") },
    { path: "/login", view: () => console.log("Sign In") },
    { path: "/register", view: () => console.log("Sign Up") },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
  match.route.view();
};

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
