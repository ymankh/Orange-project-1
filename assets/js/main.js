function setActiveAboutTab(id) {
  const tabLinks = document.querySelectorAll("div.tab-link");
  const tabContents = document.querySelectorAll("div.tap-content");

  tabLinks.forEach(function (tab) {
    tab.classList.remove("active");
  });

  tabContents.forEach(function (tab) {
    tab.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  document.getElementById(`${id}-Content`).classList.add("active");
}
