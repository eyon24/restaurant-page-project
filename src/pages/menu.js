export const menu = () => {
  const menuTab = document.createElement("div");

  const menuItemsList = document.createElement("div");
  menuItemsList.textContent = "Testing";

  menuTab.appendChild(menuItemsList);

  return menuTab;
};
