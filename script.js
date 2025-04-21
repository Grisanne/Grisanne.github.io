// Sample names for each region (just a placeholder, you can modify these)
const regionNames = {
    region1: {
        male: ["Aelric", "Aenor", "Aeslan", "Aethan", "Albert", "Alester", "Alfred", "Ambrose", "Amory", "Cassius", "Castor", "Elias", "Geoffrey", "Gyles", "Ignys", "Isador", "Leander", "Lucian", "Lysander", "Oberon", "Osric", "Peregryn", "Quentyn", "Reynard", "Sylvester", "Symeon", "Symon", "Theon", "Tobias", "Ulric", "Varron", "Vesper"],
        female: ["Adelyn", "Aelwyn", "Aelyanna", "Aelyra", "Aelyse", "Aeryse", "Alanys", "Alessa", "Alesta", "Alyna", "Alysandra", "Alysanne", "Alyse", "Alyssa", "Annabell", "Annabeth", "Annelyse", "Arwyn", "Aryana", "Ashlyn", "Astra", "Avelyn", "Beatrys", "Belynda", "Bethany", "Bryanna", "Bryanne", "Bryssa", "Calanthe", "Camylla", "Cara", "Caralyn", "Carmella", "Carmyne", "Cassandra", "Cassia", "Catelyn", "Catheryne", "Cathryn", "Cerenna", "Cerys", "Chryssa", "Claryse", "Claryssa", "Corynna", "Cyara", "Cyrenna", "Damya", "Daphne", "Daphyne", "Dayanna", "Dayna", "Delora", "Delphyne", "Denyse", "Desdemona", "Donella", "Drakessa", "Drusylla", "Dyanna", "Edwyna", "Edyna", "Elarya", "Elarys", "Elayne", "Elessa", "Elinor", "Elisabeth", "Elowyn", "Eloyse", "Elyane", "Elysa", "Elyse", "Emera", "Emylynn", "Enys", "Eowyn", "Erycka", "Erynn", "Evelynne", "Felyse", "Fenella", "Feyra", "Florynne", "Freyda", "Fynola", "Fyona", "Gawena", "Gyselle", "Heleyna", "Illyra", "Ilyssa", "Isadora", "Isolde", "Jocella", "Jocelyn", "Kalysta", "Kendra", "Lacey", "Lanessa", "Lavena", "Lenora", "Lenore", "Leona", "Lessa", "Lillyanne", "Lisbeth", "Lorayne", "Lyanna", "Lyanne", "Lyanora", "Lycia", "Lyla", "Lyra", "Lysa", "Lysandra", "Lysanne", "Lyssa", "Madalyn", "Malyna", "Maralyn", "Marcelyne", "Marelle", "Margery", "Marra", "Marysa", "Maryse", "Maryssa", "Mavys", "Maybell", "Maylise", "Mayra", "Mayve", "Melantha", "Melynda", "Melyora", "Melyssa", "Meredyth", "Morgana", "Morwenna", "Morwyn", "Myriah", "Nadya", "Naryssa", "Neryssa", "Nessa", "Nyanna", "Nyara", "Olyvia", "Oryanna", "Oryanne", "Ossia", "Pansy", "Pearle", "Peony", "Petra", "Poppy", "Raelyn", "Ravenna", "Rayne", "Reanna", "Rhea", "Rosalyn", "Rosalynd", "Rosamund", "Rosanna", "Roselyn", "Rosemary", "Roslyn", "Roswenna", "Roswyn", "Rovyna", "Rowenna", "Rowenne", "Rya", "Ryana", "Rykarda", "Ryna", "Sabella", "Sabina", "Sabine", "Sabryna", "Sabyna", "Sanna", "Sarafine", "Saranna", "Sarella", "Seanna", "Selena", "Selessa", "Selyne", "Serylda", "Shae", "Shaelyn", "Sharyse", "Sofya", "Sorelle", "Sybella", "Syena", "Sygrid", "Sylenna", "Sylira", "Sylla", "Sylva", "Sylveyne", "Syra", "Syvanna", "Tamsyn", "Telyssa", "Terysa", "Tessa", "Thalyra", "Thea", "Theana", "Theona", "Theylse", "Tryssa", "Twyla", "Tyana", "Ulyra", "Valery", "Valestra", "Vanessa", "Velessa", "Vella", "Vena", "Verena", "Veryna", "Vespera", "Vessa", "Violet", "Vyra", "Vyrella", "Vyrelle", "Vyvianne", "Wrynne", "Wynna", "Wynne", "Ysara", "Ysolde", "Zinnia"],
        last: ["Thalmorren", "Bytide", "Anchor", "Gullwing", "Drift", "Fisher", "Burgess", "Dunsley", "Harroway", "Loxe", "Bramwell", "Goldyng", "Pearle", "Glimmercrest", "Porter", "Reefe", "Brightharbor", "Westmore", "Westerly", "Wyrmwind", "Sand", "Hawke", "Cliffrock", "Greymist", "Wader", "Salt", "Marlowe", "Ashcombe", "Hargrave", "Wycliffe", "Fairhaven", "Colton", "Bauble", "Highwater", "Wyrmport", "Dawne", "Crabber", "Petrel", "Darkwater", "Tidecall", "Coral", "Windrake"]
    },
    region2: {
        male: ["Adryan", "Aedyn", "Aeslan", "Alvyn", "Alyn", "Arin", "Brannon", "Caelan", "Casemyr", "Casmyr", "Cayn", "Cedrick", "Clyve", "Devyn", "Doryan", "Elian", "Ellys", "Elwyn", "Ervyn", "Erwyn", "Eryk", "Finn", "Jayce", "Jaymes", "Kaden", "Kalen", "Leolyn", "Lorian", "Lorin", "Lyan", "Lyander", "Lyor", "Lyren", "Lyroy", "Lysander", "Mylton", "Neryn", "Neyll", "Olyvar", "Olyver", "Rymon", "Sylas", "Sylvan", "Theryn", "Trystan", "Tyberus", "Tyven", "Vellyn", "Vesryn", "Veryn", "Wynslow", "Wynston"],
        female: ["Aelya", "Aeryn", "Alayna", "Annabell", "Arella", "Aspen", "Callyra", "Camylla", "Claryssa", "Cyrenna", "Dayanna", "Elarya", "Elowyn", "Emera", "Felyse", "Florynne", "Lyanna", "Lya", "Lyanora", "Lysanne", "Madalyn", "Maralyn", "Marra", "Maylise", "Melyssa", "Morwyn", "Naryssa", "Nyanna", "Nyara", "Oryanna", "Pearle", "Peony", "Rosalynd", "Roslyn", "Roswyn", "Rowenna", "Sabina", "Sabryna", "Sabyna", "Sarafine", "Selena", "Selessa", "Shae", "Sofya", "Sorelle", "Sybella", "Sygrid", "Sylira", "Sylla", "Syra", "Syvanna", "Tamsyn", "Telyssa", "Tessa", "Thalyra", "Thea", "Theana", "Theona", "Theylse", "Tryssa", "Twyla", "Tyana", "Ulyra", "Valery", "Valestra", "Vanessa", "Velessa", "Vena", "Verena", "Veryna", "Vespera", "Vessa", "Violet", "Vyra", "Vyrella", "Vyrelle", "Vyvianne", "Zinnia"],
        last: ["Bloodwyne", "Rosehip", "Ferrowine", "Grapeleaf", "Blushvine", "Cress", "Veralle", "Redwyne", "Oxley", "Grainger", "Stonewell", "Hart", "Mutton", "Meadows", "Vintmere-Bloodwyne", "Barrel", "Roselane", "Cask", "Berryburr", "Vintwell", "Trellis", "Redfield", "Dunsworth", "Garland", "Poppyfield", "Lavender", "Marigold", "Foxglove", "Rosewood", "Appleton", "Crabapple", "Orchard", "Pippin", "Harveston", "Cyder", "Whitevine-Bloodwyne", "Summerbottle", "Sunfield", "Honeywyne", "Brightwater", "Silverbrook", "Fair", "Goldswell", "Blake", "Swan", "Dove", "Lark", "Kestrel"]
    },
    region3: {
        male: ["Aden", "Aelgar", "Alden", "Alder", "Aldwyn", "Aleric", "Alric", "Alvar", "Alwyn", "Arthur", "Gareth", "Garrick", "Gawen", "Gregor", "Harold", "Henry", "Jarod", "Markus", "Martyn", "Merrick", "Patrick", "Roderick", "Roland", "Rowan", "Stefan", "Terrel", "Thomas", "Torren", "Warren", "Wendel", "Westley", "Wyllam", "Ywain"],
        female: ["Agatha", "Alanna", "Alena", "Anna", "Annora", "Annys", "Anyse", "Arden", "Ashyra", "Astryd", "Barenna", "Berta", "Beth", "Bettany", "Branna", "Brena", "Briar", "Bridget", "Cadyra", "Calla", "Cassandra", "Clare", "Clea", "Cora", "Corynn", "Cybill", "Dara", "Dora", "Dyanne", "Dyna", "Edda", "Edyth", "Elanna", "Ellyn", "Elsa", "Fawna", "Faye", "Fredda", "Gayle", "Genna", "Genya", "Glenna", "Greta", "Gwen", "Gwenda", "Gwenyth", "Gwyn", "Gwyndolyn", "Gwynna", "Gyna", "Hanna", "Helena", "Hellen", "Hylda", "Ida", "Innys", "Isabel", "Ivy", "Janey", "Janna", "Jayne", "Jeanna", "Jenefer", "Jessalyn", "Jessamyne", "Jessara", "Jessye", "Jeyna", "Jeyne", "Joanna", "Jonna", "Joslyn", "Kaylyn", "Kenna", "Laney", "Laura", "Lena", "Lilly", "Lyda", "Lynda", "Lynesse", "Lynette", "Lynna", "Marys", "Maura", "Megyn", "Mildryth", "Morla", "Morna", "Mya", "Mylla", "Myra", "Myrelle", "Myrna", "Mysie", "Nella", "Netta", "Nora", "Olyve", "Orla", "Owena", "Roberta", "Robynne", "Ruby", "Sara", "Shanna", "Shella", "Stefany", "Susenna", "Sybil", "Tabatha", "Thomasyn", "Thyrla", "Tylda", "Ula", "Ulla", "Ulrica", "Una", "Wylfreda", "Wylla", "Wylma", "Yara"],
        last: ["Duske", "Wyld", "Wulf", "Hare", "Holloway", "Ashwick", "Kindling", "Hearth", "Firelight", "Ardlain", "Corvane", "Sylverbark", "Blackthorne", "Crayden", "Kellen", "Drelwyn", "Duskenbridge-Duske", "Grey", "Fell", "Caldreth", "Stane", "Harwood", "Hart", "Fallow", "Wyrmwood", "Cedar", "Briarwood", "Stagg", "Pine", "Oakes", "Pell", "Fenwell", "Greymead", "Callanwright", "Vecke", "Grymme"]
    },
    region4: {
        male: ["Aulen", "Baldwyn", "Barenn", "Branwyn", "Clyde", "Drakon", "Dunn", "Eamon", "Eldric", "Eldyn", "Elric", "Falk", "Farran", "Feron", "Gawyn", "Gladwyn", "Hadwyn", "Haldyr", "Harald", "Harren", "Holdyn", "Irvyn", "Irwyn", "Meldrick", "Mordred", "Morgen", "Morwen", "Neron", "Ordryn", "Oswyn", "Rhygar", "Swayne", "Thorne", "Ulfrick", "Ulick", "Ullar", "Varrick", "Vergyl", "Warwyck", "Wulfrick", "Wymond", "Wyrd", "Wystan"],
        female: ["Agnys", "Bryony", "Dacey", "Donella", "Drakessa", "Drusylla", "Edanna", "Edda", "Edyth", "Elarys", "Eowyn", "Erycka", "Fenella", "Frea", "Fredda", "Freyda", "Greta", "Hylda", "Illyra", "Isolde", "Morla", "Morna", "Morgana", "Morwenna", "Myrna", "Nadya", "Nella", "Olyve", "Orla", "Ossia", "Owena", "Raymona", "Roberta", "Rosamund", "Rowenna", "Rykarda", "Serylda", "Sygrid", "Sylenna", "Sylva", "Sylveyne", "Thyrla", "Ulrica", "Wylfreda", "Wylla", "Ysolde"],
        last: ["Clyfford", "Stormrest-Clyfford", "Hewn", "Veyric", "Shale", "Highquarry", "Veyne", "Stonewake", "Stormsong", "Payne", "Gravell", "Cairn", "Skelwyn", "Keffard", "Oldknoll", "Dustey", "Foothold", "Holm", "Wyvernrest", "Wyrmforge", "Ironhart", "Blackslag", "Anvilmight", "Emberbright",]
    },
    region5: {
        male: ["Aeron", "Alan", "Artyr", "Ashtyn", "Byrne", "Damian", "Damon", "Darek", "Darwyn", "Daryl", "Deryck", "Desmond", "Domryck", "Doran", "Edgar", "Edryck", "Erek", "Glen", "Glenn", "Heron", "Lyan", "Morley", "Myles", "Nyles", "Ofir", "Osbert", "Osmond", "Raymund", "Roserick", "Rubyn", "Sabin", "Sable", "Selman", "Sheyne", "Sorren", "Stafford", "Thayne", "Thedan", "Theron", "Tobin", "Tolbert", "Trevys", "Tyan", "Tyras", "Tyron", "Zorren"],
        female: ["Drakessa", "Drusylla", "Edda", "Edyth", "Elarys", "Enys", "Fenella", "Frea", "Fredda", "Freyda", "Greta", "Illyra", "Isolde", "Morla", "Morna", "Morgana", "Morwenna", "Nadya", "Nella", "Olyve", "Orla", "Ossia", "Owena", "Raymona", "Rykarda", "Serylda", "Sylenna", "Sylva", "Sylveyne", "Thyrla", "Ulrica", "Wylfreda", "Wylla", "Ysolde"],
        last: ["Drevant", "Weir", "Gloame", "Hallow", "Mourne", "Redclay", "Drakefang", "Wisp", "Bogwarden", "Graven", "Mirelight", "Fenmark", "Morgrave", "Wyrdwell", "Barrowmere", "Feld", "Crypt", "Morwyn", "Vyper", "Gloomlily", "Emberfen", "Vrydan", "Ashe"]
    },
    universal: {
        male: ["Addam", "Ales", "Allard", "Aric", "Arley", "Arn", "Arnold", "Arran", "Aryn", "Barley", "Basil", "Benjemyn", "Bertram", "Braden", "Brandon", "Brennan", "Bryan", "Bryon", "Carbrey", "Cedar", "Colyn", "Corwin", "Cyrus", "Davys", "Dayvn", "Denys", "Derryl", "Dyllon", "Edd", "Edmund", "Edric", "Edwyn", "Edwyrd", "Elan", "Ewan", "Ewen", "Farrel", "Finlay", "Flynn", "Forrest", "Frederick", "Fyran", "Garey", "Garvan", "Howard", "Ian", "Ivan", "Jakob", "Jaspar", "Jasper", "Jeffrey", "Jon", "Jonys", "Kaspar", "Kenryck", "Kevan", "Kyran", "Lennard", "Leon", "Lester", "Lewyn", "Lloyd", "Lucas", "Mace", "Marek", "Mark", "Marlen", "Marvyn", "Melvyn", "Merlyn", "Mervyn", "Myllard", "Nevyn", "Nolan", "Nyall", "Ottis", "Owen", "Oryn", "Quen", "Randall", "Raymon", "Reed", "Reyd", "Robert", "Robyn", "Rolf", "Rollynd", "Roswell", "Royce", "Ryan", "Stannen", "Syd", "Thom", "Todd", "Trey", "Ulyn", "Uwen", "Valen", "Valkar", "Vernon", "Wallys", "Waltyr", "Ward", "Wayne", "Wright", "Wyatt", "Wylf", "Wyll", "Wyllis", "Wylmer", "Wylson", "Wynn"],
        female: ["Alanna", "Anna", "Arden", "Berta", "Beth", "Bridget", "Clare", "Cora", "Dara", "Dora", "Edyth", "Elinor", "Elsa", "Fawna", "Faye", "Genna", "Greta", "Gwen", "Hanna", "Helena", "Hellen", "Ida", "Isabel", "Ivy", "Janey", "Janna", "Jayne", "Jeanna", "Jenefer", "Joanna", "Jonna", "Kaylyn", "Kenna", "Laura", "Lena", "Lilly", "Lyda", "Lynda", "Lynette", "Lynna", "Maura", "Mya", "Myra", "Nora", "Petra", "Pippa", "Poppy", "Reanna", "Rhea", "Roberta", "Ruby", "Sara", "Shanna", "Shella", "Stefany", "Susenna", "Sybil", "Tabatha", "Thomasyn", "Una", "Wylma", "Wynna", "Wynne", "Yara"],
        last: ["Erdborn"]
    }
};

// Add event listeners for gender selection
document.getElementById('maleButton').addEventListener('click', () => selectGender('male'));
document.getElementById('femaleButton').addEventListener('click', () => selectGender('female'));

let selectedGender = 'male';
let selectedRegions = [];

// Update selected gender
function selectGender(gender) {
    selectedGender = gender;
    // Highlight selected gender
    document.getElementById('maleButton').style.backgroundColor = gender === 'male' ? '#45a049' : '#5c6bc0';
    document.getElementById('femaleButton').style.backgroundColor = gender === 'female' ? '#45a049' : '#5c6bc0';
    
    generateNames();  // Automatically generate names upon gender selection
}

// Get selected regions
function getSelectedRegions() {
    selectedRegions = [];
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedRegions.push(checkbox.value);
    });
}

// Generate names based on selected gender and regions
function generateNames() {
    getSelectedRegions();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear previous results

    if (selectedRegions.length === 0) {
        resultsContainer.innerHTML = 'Please select at least one region.';
        return;
    }

    const nameCount = 10; // Generate 10 names
    let namesGenerated = 0;

    // Generate names
    while (namesGenerated < nameCount) {
        selectedRegions.forEach(region => {
            const regionData = regionNames[region];
            const firstNames = regionData[selectedGender] || regionNames.universal[selectedGender];
            const lastNames = regionData.last || regionNames.universal.last;

            const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

            const name = `${randomFirstName} ${randomLastName}`;
            const nameItem = document.createElement('p');
            nameItem.textContent = name;
            resultsContainer.appendChild(nameItem);

            namesGenerated++;
            if (namesGenerated >= nameCount) return;
        });
    }
}
