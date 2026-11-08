export const homepage = () => {
  const homeTab = document.createElement("div");
  homeTab.className = "homeTab";

  const restaurantName = document.createElement("div");
  restaurantName.className = "restaurantName";
  restaurantName.textContent = "Yum E's";
  homeTab.appendChild(restaurantName);

  const about = document.createElement("div");
  about.className = "about";
  about.textContent =
    "We have such good food! The atmosphere and customer service also make you feel like you're eating in heaven! This is exactly the place you'd want to return to again and again!";
  homeTab.appendChild(about);

  const hours = document.createElement("div");
  hours.className = "hours";
  const hours_list = document.createElement("ol");
  hours.appendChild(hours_list);
  homeTab.appendChild(hours);

  const hours_times = [
    ["Sunday", "8am - 5pm"],
    ["Monday", "8am - 8pm"],
    ["Tuesday", "8am - 8pm"],
    ["Wednesday", "8am - 8pm"],
    ["Thursday", "8am - 8pm"],
    ["Friday", "8am - 10pm"],
    ["Saturday", "8am - 10pm"],
  ];

  hours_times.forEach((element) => {
    let day_container = document.createElement("li");
    day_container.className = element[0].toLowerCase();

    let day_day = document.createElement("div");
    day_day.textContent = element[0];

    let day_hours = document.createElement("div");
    day_hours.textContent = element[1];

    day_container.appendChild(day_day);
    day_container.appendChild(day_hours);
    hours_list.appendChild(day_container);
  });

  return homeTab;
};
