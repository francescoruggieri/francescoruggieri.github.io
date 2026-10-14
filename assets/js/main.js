/* Responsive navigation and abstract toggles for this website. */
window.visib = id => {
  const abstract = document.getElementById(id);
  abstract.style.display = abstract.style.display === "block" ? "none" : "block";
};

(() => {
  const nav = document.querySelector("#site-nav");
  const button = nav.querySelector("button");
  const visible = nav.querySelector(".visible-links");
  const hidden = nav.querySelector(".hidden-links");
  const breaks = [];

  // Match the content widths used by the original navigation.
  const contentWidth = element => {
    const style = getComputedStyle(element);
    let width = parseFloat(style.width);
    if (style.boxSizing === "border-box") {
      width -= ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
        .reduce((sum, property) => sum + (parseFloat(style[property]) || 0), 0);
    }
    return width;
  };
  const availableSpace = () => contentWidth(nav) -
    (button.classList.contains("hidden") ? 0 : contentWidth(button) + 30);

  function updateNav() {
    while (contentWidth(visible) > availableSpace() && visible.children.length > 1) {
      breaks.push(contentWidth(visible));
      hidden.prepend(visible.lastElementChild);
      button.classList.remove("hidden");
    }
    while (breaks.length && availableSpace() > breaks[breaks.length - 1]) {
      visible.append(hidden.firstElementChild);
      breaks.pop();
    }
    if (!breaks.length) {
      button.classList.add("hidden");
      button.classList.remove("close");
      hidden.classList.add("hidden");
    }
    button.setAttribute("count", breaks.length);
    button.setAttribute("aria-expanded", !hidden.classList.contains("hidden"));

  }

  button.setAttribute("aria-label", "Menu");
  button.addEventListener("click", () => {
    hidden.classList.toggle("hidden");
    button.classList.toggle("close");
    button.setAttribute("aria-expanded", !hidden.classList.contains("hidden"));
  });
  window.addEventListener("resize", updateNav);
  window.addEventListener("load", updateNav);
  updateNav();
})();
