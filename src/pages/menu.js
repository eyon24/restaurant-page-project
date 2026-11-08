export const menu = () => {
  const menuItemsList = [
    [
      "Honey Lavender Latte",
      "Espresso with steamed milk, house-made lavender syrup, and a touch of local wildflower honey.",
      "$4.75",
    ],
    [
      "Maple Cardamom Cold Brew",
      "Slow-steeped cold brew coffee infused with pure maple syrup and a hint of warm cardamom.",
      "$5.00",
    ],
    [
      "Smoked Turkey Panini",
      "Lean smoked turkey, swiss cheese, applewood-smoked bacon, and brown mustard grilled on wheatberry bread.",
      "$9.50",
    ],
    [
      "Avocado Burrata Toast",
      "Smashed Hass avocado, creamy burrata cheese, cherry tomatoes, and basil oil on thick-cut sourdough.",
      "$8.75",
    ],
    [
      "Blueberry Lemon Scone",
      "Fresh-baked flaky butter scone loaded with wild blueberries and a bright lemon glaze.",
      "$3.50",
    ],
  ];

  const contentDiv = document.querySelector("#content");

  const menuTab = document.createElement("div");
  menuTab.className = "menu-container";

  const menuTitle = document.createElement("div");
  menuTitle.className = "menuTitle";
  menuTitle.textContent = "Menu";
  menuTab.appendChild(menuTitle);

  const menu_ul = document.createElement("ul");
  menu_ul.className = "menu_ul";

  menuItemsList.forEach((menuItemElement, index) => {
    let menuItem_container = document.createElement("li");

    let menuItemName = document.createElement("div");
    menuItemName.className = "menuItemName";
    menuItemName.textContent = menuItemElement[0];
    menuItem_container.appendChild(menuItemName);
    let menuItemDesc = document.createElement("div");
    menuItemDesc.className = "menuItemDesc";
    menuItemDesc.textContent = menuItemElement[1];
    menuItem_container.appendChild(menuItemDesc);
    let menuItemPrice = document.createElement("div");
    menuItemPrice.className = "menuItemPrice";
    menuItemPrice.textContent = menuItemElement[2];
    menuItem_container.appendChild(menuItemPrice);

    menu_ul.appendChild(menuItem_container);
  });

  menuTab.appendChild(menu_ul);

  contentDiv.appendChild(menuTab);
};
