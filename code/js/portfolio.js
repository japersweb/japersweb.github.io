// slider tab
const tabsBox = document.querySelector(".tabs-box");
const allTabs = tabsBox.querySelectorAll(".tab");

let isDragging = false;
let touchStartX = 0;
let touchMoveX = 0;

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => {
  isDragging = true;
});

tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

tabsBox.addEventListener("touchstart", (e) => {
  isDragging = true;
  touchStartX = e.touches[0].clientX;
});

tabsBox.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  touchMoveX = e.touches[0].clientX;
  const movementX = touchMoveX - touchStartX;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= movementX;
  touchStartX = touchMoveX;
});

tabsBox.addEventListener("touchend", () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
});

// Konten Tab
const myTabs = document.querySelectorAll(".tabs-box > .tab");
const myTabClicks = (e) => {
  e.preventDefault();
  myTabs.forEach((tab) => {
    tab.classList.remove("aktif");
  });
  const clickedTab = e.currentTarget;
  clickedTab.classList.add("aktif");

  const tabPanel = document.querySelectorAll(".tab-panel");
  tabPanel.forEach((panel) => {
    panel.classList.remove("aktif");
  });

  const activePanelId = e.target.getAttribute("href");
  const panelAktif = document.querySelector(activePanelId);
  panelAktif.classList.add("aktif");
};

window.addEventListener("load", () => {
  myTabs.forEach((tab) => {
    tab.addEventListener("click", myTabClicks);
  });
});