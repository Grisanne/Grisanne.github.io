// script.js 

const maleFirstNames = [
  "Adam", "Alarick", "Albert", "Alden", "Alderyk", "Aleric", "Aleron", "Alesander", "Alester", "Alfred", "Allen", "Alric", "Alvin", "Alwin", "Alyn", "Alystan", "Ambrose", "Amon", "Andar", "Ansel", "Bernard", "Brannon", "Brannor", "Caden", "Callan", "Calric", "Cassian", "Cassius", "Caylan", "Cedryck", "Clement", "Corin", "Cyril", "Cyrus", "Darian", "Denys", "Desmond", "Dorian", "Duncan", "Edgar", "Edric", "Edywn", "Elandor", "Eldric", "Elias", "Ellys", "Elrick", "Esmond", "Everett", "Ewan", "Feron", "Feyric", "Finn", "Galen", "Gareth", "Garran", "Garrett", "Garrick", "Gawen", "Gerold", "Gideon", "Gilbert", "Glen", "Gregory", "Greyrick", "Gryff", "Gyles", "Harald", "Harold", "Harren", "Henric", "Henry", "Jaspar", "Jasper", "Jeffrey", "Joffrey", "Jon", "Joran", "Jowan", "Julian", "Kalen", "Keylor", "Lorian", "Lucian", "Lyander", "Lysander", "Maddoc", "Malric", "Malwyn", "Marwyn", "Matthias", "Merrick", "Morryk", "Norman", "Olyvar", "Oren", "Oric", "Orlan", "Orwyn", "Osbert", "Osgood", "Osmond", "Osric", "Oswald", "Oswell", "Oswyn", "Otho", "Patrik", "Perryn", "Reynold", "Rhys", "Roderic", "Roland", "Rowan", "Rowell", "Silas", "Simeon", "Sorren", "Steffan", "Swain", "Sylas", "Sylvester", "Symon", "Theo", "Theodore", "Theon", "Theron", "Theryn", "Tobias", "Tobin", "Torren", "Trystan", "Ulric", "Varic", "Varric", "Varron", "Velric", "Vyktor", "Walden", "Warren", "Wendel", "Wesley", "Weston", "Weymar", "Willem", "William", "Winston", "Wylan", "Wyll"
];

const femaleFirstNames = [
  "Adeline", "Agatha", "Alayna", "Alena", "Alesanne", "Alessa", "Alesta", "Alina", "Alisandre", "Alys", "Alysanne", "Alyssa", "Anna", "Annelora", "Annelyse", "Arabelle", "Asteria", "Aurelia", "Ava", "Aveline", "Beatrice", "Bethany", "Bridget", "Brienne", "Calessa", "Calysta", "Cara", "Carmen", "Cassandra", "Cassanna", "Cassantha", "Cassia", "Catelyn", "Catherine", "Catryn", "Catryna", "Cecelia", "Celena", "Celeste", "Cerenna", "Clarissa", "Clementia", "Cyrene", "Cyrenna", "Denyse", "Diantha", "Edda", "Elanna", "Elayne", "Elenna", "Elenor", "Elinor", "Elinora", "Elisabeth", "Elora", "Elowyn", "Elyanna", "Elyne", "Elynor", "Elyra", "Elyse", "Emmeline", "Enys", "Evelyne", "Fiora", "Gawena", "Gillian", "Gwendolyn", "Gwyn", "Gwyneth", "Helena", "Heleyne", "Ida", "Illyra", "Isabel", "Isadora", "Isolde", "Jasmyne", "Jenefer", "Jessalyn", "Joanna", "Jocella", "Jocelyn", "Joslyn", "Lenora", "Lenore", "Leona", "Liora", "Lira", "Lucienne", "Lucinda", "Lyanna", "Lysa", "Lysandra", "Lysanna", "Lysara", "Malora", "Marcella", "Margaret", "Margery", "Maris", "Marta", "Marya", "Maylis", "Meliora", "Melusine", "Mildred", "Millicent", "Mirelle", "Morwenna", "Myra", "Nerissa", "Nora", "Olyva", "Ravena", "Reyna", "Rhea", "Rheanna", "Rhiannon", "Rosaline", "Rosalyn", "Rosamund", "Rosanna", "Rose", "Roslyn", "Roswen", "Roswenna", "Roswyn", "Roswynne", "Rowena", "Rowenne", "Sabina", "Sabine", "Sanna", "Sara", "Sarafine", "Sarella", "Selena", "Selene", "Selessa", "Selyne", "Sybil", "Sylenna", "Sylva", "Sylveyne", "Thalyra", "Thea", "Theda", "Thelma", "Theodora", "Theona", "Ursula", "Verena", "Vessa", "Vivienne", "Winifred", "Wylma", "Wynne", "Ysolde"
];

const lastNames = [
  "Thalmorren", "Bytide", "Anchor", "Gullwing", "Drift", "Fisher", "Burgess", "Dunsley", "Harroway", "Loxe", "Bramwell", "Goldyng", "Pearle", "Glimmercrest", "Porter", "Reefe", "Brightharbor", "Westmore", "Westerly", "Wyrmwind", "Sand", "Hawke", "Cliffrock", "Greymist", "Wader", "Salt", "Marlowe", "Ashcombe", "Hargrave", "Wycliffe", "Fairhaven", "Colton", "Bauble", "Highwater", "Wyrmport", "Dawne", "Crabber", "Petrel", "Darkwater", "Tidecall", "Coral", "Windrake", 
"Drevant", "Weir", "Gloame", "Hallow", "Mourne", "Redclay", "Drakefang", "Wisp", "Bogwarden", "Graven", "Mirelight", "Fenmark", "Morgrave", "Wyrdwell", "Barrowmere", "Feld", "Crypt", "Morwyn", "Vyper", "Gloomlily", "Emberfen", "Vrydan", "Ashe",
"Duske", "Wyld", "Wulf", "Hare", "Holloway", "Ashwick", "Kindling", "Hearth", "Firelight", "Ardlain", "Corvane", "Sylverbark", "Blackthorne", "Crayden", "Kellen", "Drelwyn", "Duskenbridge-Duske", "Grey", "Fell", "Caldreth", "Stane", "Harwood", "Hart", "Fallow", "Wyrmwood", "Cedar", "Briarwood", "Stagg", "Pine", "Oakes", "Pell", "Fenwell", "Greymead", "Callanwright", "Vecke", "Grymme", 
"Bloodwyne", "Rosehip", "Ferrowine", "Grapeleaf", "Blushvine", "Cress", "Veralle", "Redwyne", "Oxley", "Grainger", "Stonewell", "Hart", "Mutton", "Meadows", "Vintmere-Bloodwyne", "Barrel", "Roselane", "Cask", "Berryburr", "Vintwell", "Trellis", "Redfield", "Dunsworth", "Garland", "Poppyfield", "Lavender", "Marigold", "Foxglove", "Rosewood", "Appleton", "Crabapple", "Orchard", "Pippin", "Harveston", "Cyder", "Whitevine-Bloodwyne", "Summerbottle", "Sunfield", "Honeywyne", "Brightwater", "Silverbrook", "Fair", "Goldswell", "Blake", "Swan", "Dove", "Lark", "Kestrel", 
"Clyfford", "Stormrest-Clyfford", "Hewn", "Veyric", "Shale", "Highquarry", "Veyne", "Stonewake", "Stormsong", "Payne", "Gravell", "Cairn", "Skelwyn", "Keffard", "Oldknoll", "Dustey", "Foothold", "Holm", "Wyvernrest", "Wyrmforge", "Ironhart", "Blackslag", "Anvilmight", "Emberbright",
"Erdborn"
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
const houseNames = {
  erdwing: [
    "Thalmorren", "Bytide", "Anchor", "Gullwing", "Drift", "Fisher", "Burgess", "Dunsley", "Harroway", "Loxe", "Bramwell", "Goldyng", "Pearle", "Glimmercrest", "Porter", "Reefe", "Brightharbor", "Westmore", "Westerly", "Wyrmwind", "Sand", "Hawke", "Cliffrock", "Greymist", "Wader", "Salt", "Marlowe", "Ashcombe", "Hargrave", "Wycliffe", "Fairhaven", "Colton", "Bauble", "Highwater", "Wyrmport", "Dawne", "Crabber", "Petrel", "Darkwater", "Tidecall", "Coral", "Windrake", "Erdborn"
  ],
  bloodmire: [
    "Drevant", "Weir", "Gloame", "Hallow", "Mourne", "Redclay", "Drakefang", "Wisp", "Bogwarden", "Graven", "Mirelight", "Fenmark", "Morgrave", "Wyrdwell", "Barrowmere", "Feld", "Crypt", "Morwyn", "Vyper", "Gloomlily", "Emberfen", "Vrydan", "Ashe", "Erdborn"
  ],
  wyrmspine: [
    "Clyfford", "Stormrest-Clyfford", "Hewn", "Veyric", "Shale", "Highquarry", "Veyne", "Stonewake", "Stormsong", "Payne", "Gravell", "Cairn", "Skelwyn", "Keffard", "Oldknoll", "Dustey", "Foothold", "Holm", "Wyvernrest", "Wyrmforge", "Ironhart", "Blackslag", "Anvilmight", "Emberbright", "Erdborn"
  ],
  dragonfell: [
    "Duske", "Wyld", "Wulf", "Hare", "Holloway", "Ashwick", "Kindling", "Hearth", "Firelight", "Ardlain", "Corvane", "Sylverbark", "Blackthorne", "Crayden", "Kellen", "Drelwyn", "Duskenbridge-Duske", "Grey", "Fell", "Caldreth", "Stane", "Harwood", "Hart", "Fallow", "Wyrmwood", "Cedar", "Briarwood", "Stagg", "Pine", "Oakes", "Pell", "Fenwell", "Greymead", "Callanwright", "Vecke", "Grymme", "Erdborn"
  ],
  reach: [
    "Bloodwyne", "Rosehip", "Ferrowine", "Grapeleaf", "Blushvine", "Cress", "Veralle", "Redwyne", "Oxley", "Grainger", "Stonewell", "Hart", "Mutton", "Meadows", "Vintmere-Bloodwyne", "Barrel", "Roselane", "Cask", "Berryburr", "Vintwell", "Trellis", "Redfield", "Dunsworth", "Garland", "Poppyfield", "Lavender", "Marigold", "Foxglove", "Rosewood", "Appleton", "Crabapple", "Orchard", "Pippin", "Harveston", "Cyder", "Whitevine-Bloodwyne", "Summerbottle", "Sunfield", "Honeywyne", "Brightwater", "Silverbrook", "Fair", "Goldswell", "Blake", "Swan", "Dove", "Lark", "Kestrel", "Erdborn"
  ]
};

function generateHouses(region) {
  const resultArea = document.getElementById("house-name-result");
  resultArea.innerHTML = ""; // Clear previous results
  const names = houseNames[region];
  const chosen = [];

  while (chosen.length < 10 && names.length > 0) {
    const name = names[Math.floor(Math.random() * names.length)];
    if (!chosen.includes(name)) chosen.push(name);
  }

  chosen.forEach(name => {
    const li = document.createElement("li");
    li.textContent = "House " + name;
    resultArea.appendChild(li);
  });
}
