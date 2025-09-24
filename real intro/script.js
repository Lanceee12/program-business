function openTab(evt, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.classList.remove("active"));

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  evt.currentTarget.classList.add("active");
}
