const cityTabs = document.querySelectorAll(".city-tab");
const cityPanels = document.querySelectorAll(".collection-panel");

cityTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetCity = tab.dataset.city;

    cityTabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    cityPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const activePanel = document.querySelector(`[data-city-panel="${targetCity}"]`);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});
