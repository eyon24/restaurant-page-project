export const contact = () => {
  const contentDiv = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact_container";
  contentDiv.appendChild(contactDiv);

  const contactTitle = document.createElement("div");
  contactTitle.textContent = "Contact Us";
  contactTitle.className = "contact_title";
  contactDiv.appendChild(contactTitle);

  const contactList = [
    ["Owner", "555-555-5555", "owner@email.com"],
    ["Manager", "444-444-4444", "manager@email.com"],
    ["Assistant Mangaer", "333-333-3333", "am@email.com"],
  ];

  contactList.forEach((person) => {
    const personDiv = document.createElement("div");
    personDiv.className = "contactPerson";

    const personName = document.createElement("div");
    personName.textContent = person[0];
    personName.className = "personName";
    personDiv.appendChild(personName);

    const personNumber = document.createElement("div");
    personNumber.textContent = person[1];
    personName.className = "personNumber";
    personDiv.appendChild(personNumber);

    const personEmail = document.createElement("div");
    personEmail.textContent = person[2];
    personName.className = "personEmail";
    personDiv.appendChild(personEmail);

    contactDiv.append(personDiv);
  });
};
