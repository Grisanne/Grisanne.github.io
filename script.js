// script.js

const maleFirstNames = [
  "Aiden", "Rowan", "Thorne", "Elias", "Gareth", "Lucan", "Kaelen", "Darian", "Jarek", "Fenric"
];

const femaleFirstNames = [
  "Cassandra", "Jocelyn", "Kaela", "Liora", "Mira", "Seren", "Alira", "Nyra", "Vessa", "Talia"
];

const lastNames = [
  "Duske", "Thalmorren", "Westerly", "Stormfell", "Brightmoor", "Nightsong", "Holloway", "Ravenshade", "Virell", "Emberlain"
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNames(type) {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";

  const usedNames = new Set();

  while (usedNames.size < 10) {
    let first;
    if (type === 'male') {
      first = getRandomElement(maleFirstNames);
    } else if (type === 'female') {
      first = getRandomElement(femaleFirstNames);
    } else {
      // mixed
      const combined = [...maleFirstNames, ...femaleFirstNames];
      first = getRandomElement(combined);
    }

    const last = getRandomElement(lastNames);
    const fullName = `${first} ${last}`;
    usedNames.add(fullName);
  }

  usedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}
