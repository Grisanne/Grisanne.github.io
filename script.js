// script.js

const firstNames = [
  "Aiden", "Cassandra", "Jocelyn", "Rowan", "Thorne", "Kaela", "Elias", "Liora", "Gareth", "Mira"
];

const lastNames = [
  "Duske", "Thalmorren", "Westerly", "Stormfell", "Brightmoor", "Nightsong", "Holloway", "Ravenshade", "Virell", "Emberlain"
];

function getRandomName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function generateNames() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = ""; // Clear existing names

  const usedNames = new Set();

  while (usedNames.size < 10) {
    const name = getRandomName();
    usedNames.add(name);
  }

  usedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}
