const poke_container = document.getElementById('poke-container');
const pokemon_count = 200;
const colors = {
    fire: '#fd7d24',
    grass: '#9bcc50',
    electric: '#eed535',
    water: '#4592c4',
    ground: '#ab9842',
    rock: '#a38c21',
    fairy: '#fdb9e9',
    poison: '#b97fc9',
    bug: '#729f3f',
    dragon: '#7038f8',
    psychic: '#f366b9',
    flying: '#3dc7ef',
    fighting: '#d56723',
    normal: '#a4acaf',
    ice: '#51c4e7',
    ghost: '#7b62a3',
    dark: '#707070',
    steel: '#9eb7b8'
};

const main_types = Object.keys(colors);
// ["fire", "grass", "electric"]

let allPokemon = [];
let legendaryPokeomon = [];

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        let p = await getPokemon(i);
        if (p.name === "mr-mime"){
            p.name = "Mr. Mime";
        }
        if(p.name === "nidoran-f"){
            p.name = "Nidoran (F)";
        }
        if(p.name === "nidoran-m"){
            p.name = "Nidoran (M)";
        }
        if(p.name === "farfetchd"){
            p.name = "Farfetch'd";
        }
        if(p.name === "ho-oh"){
            p.name = "Ho-Oh";
        }
        if(p.name === "deoxys-normal"){
            p.name = "Deoxys";
        }
        if(p.name === "wormadam-plant"){
            p.name = "Wormadam";
        }
        if(p.name === "mime-jr"){
            p.name = "Mime Jr.";
        }
        if(p.name === "porygon-z"){
            p.name = "Porygon-Z";
        }
        if(p.name === "giratina-altered"){
            p.name = "Giratina";
        }
        if(p.name === "shaymin-land"){
            p.name = "Shaymin";
        }
        if(p.name === "basculin-red-striped"){
            p.name = "Basculin";
        }
        if(p.name === "darmanitan-standard"){
            p.name = "Darmanitan";
        }
        if(p.name === "tornadus-incarnate"){
            p.name = "Tornadus";
        }
        if(p.name === "thundurus-incarnate"){
            p.name = "Thundurus";
        }
        if(p.name === "landorus-incarnate"){
            p.name = "Landorus";
        }
        if(p.name === "keldeo-ordinary"){
            p.name = "Keldeo";
        }
        if(p.name === "meloetta-aria"){
            p.name = "Meloetta";
        }
        if(p.name === "meowstic-male"){
            p.name = "Meowstic";
        }
        if(p.name === "aegislash-shield"){
            p.name = "Aegislash";
        }
        if(p.name === "pumpkaboo-average"){
            p.name = "Pumpkaboo";
        }
        if(p.name === "gourgeist-average"){
            p.name = "Gourgeist";
        }
        if(p.name === "oricorio-baile"){
            p.name = "Oricorio";
        }
        if(p.name === "lycanroc-midday"){
            p.name = "Lycanroc";
        }
        if(p.name === "wishiwashi-solo"){
            p.name = "Wishiwashi";
        }
        if(p.name === "type-null"){
            p.name = "Type: Null";
        }
        if(p.name === "minior-red-meteor"){
            p.name = "Minior";
        }
        if(p.name === "mimikyu-disguised"){
            p.name = "Mimikyu";
        }
        if(p.name === "tapu-koko"){
            p.name = "Tapu Koko";
        }
        if(p.name === "tapu-lele"){
            p.name = "Tapu Lele";
        }
        if(p.name === "tapu-bulu"){
            p.name = "Tapu Bulu";
        }
        if(p.name === "tapu-fini"){
            p.name = "Tapu Fini";
        }
        if(p.name === "toxtricity-amped"){
            p.name = "Toxtricity";
        }
        if(p.name === "sirfetchd"){
            p.name = "Sirfetch'd";
        }
        if(p.name === "mr-rime"){
            p.name = "Mr. Rime";
        }
        if(p.name === "eiscue-ice"){
            p.name = "Eiscue";
        }
        if(p.name === "indeedee-male"){
            p.name = "Indeedee";
        }
        if(p.name === "zacian-hero"){
            p.name = "Zacian";
        }
        if(p.name === "zamazenta-hero"){
            p.name = "Zamazenta";
        }
        if(p.name === "urshifu-single-strike"){
            p.name = "Urshifu";
        }

        p.isFavorite = false;

        allPokemon.push( p );
    }
};


const getPokemon = async function(id) {
    // get pokemon data from pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
    //createPokemonCard( data );
};

const renderPokemon = async function( pokemonArray ) {
    pokemonArray.forEach( pokemon => createPokemonCard(pokemon));
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    //const type = main_types.find(type => poke_types.indexOf(type) > -1);
    let type1 = pokemon.types[0].type.name;
    let type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : null;
    let color = colors[type1];
    let color2 = colors[type2];


    function getTypeString(pokemon) {
        let typeString = ""
            if (type2 != null) {
                typeString = `Type: ${type1}/${type2}`;
            }

            else {
                typeString = `Type: ${type1}`;

            }
            return typeString;
    };

   
    function setBackgroundColor(pokemon) {
        if(type2 != null) {
            pokemonEl.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0) 0%, ${color} 1%, ${color2} 100%)`
        }

        else{
            color = colors[type1];
            pokemonEl.style.backgroundColor = color;
        }
    };


    setBackgroundColor(pokemon);

    pokemonEl.style.backgroundColor = color;

    const officialArtwork = pokemon.sprites.other["official-artwork"].front_default;

    const pokemonInnerHTML = `
    <div><a class = "favorite" href="#"><style="margin-left: 0.5em; color: #EEEEEE;"  id = ${pokemon.id} onclick = change(${pokemon.id}) class="bi bi-star"></style></a></div>
    <div class="img-container">
        <!--<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">-->
        <img src="${officialArtwork}" />
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type"> <span>${getTypeString(pokemon.types)}</span> </small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
};


function change (iconID){
    if(document.getElementById(iconID).className == "bi bi-star") {
      document.getElementById(iconID).className = "bi bi-star-fill";
    }
    else{
      document.getElementById(iconID).className = "bi bi-star";
    }
  }


function getFavorites() {
const f =  document.getElementsByClassName('bi bi-star-fill');


    clearPokemon()

    
}



async function loadAllPokemon() {
    await fetchPokemon();
    renderPokemon(allPokemon);
}

function clearPokemon() {
    poke_container.innerHTML = "";
}

loadAllPokemon();

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

function updateSearchResults() {
    const searchQuery = searchInput.value;

    // search by name
    let searchResults = allPokemon.filter( pokemon => {
        return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // search by id
    let searchIdResults = allPokemon.filter( pokemon => {
        return pokemon.id.toString().includes(searchQuery.toString());
    });
    

    clearPokemon();

    renderPokemon( searchResults );
    renderPokemon( searchIdResults );
}



searchButton.addEventListener('click', () => {
    updateSearchResults();
});

searchInput.addEventListener( "keyup", () => updateSearchResults() );

document.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        updateSearchResults();
    }
});

const fireButton = document.getElementById("fire_btn");
const grassButton = document.getElementById("grass_btn");
const electricButton = document.getElementById("electric_btn");
const waterButton = document.getElementById("water_btn");
const groundButton = document.getElementById("ground_btn");
const rockButton = document.getElementById("rock_btn");
const fairyButton = document.getElementById("fairy_btn");
const poisonButton = document.getElementById("poison_btn");
const bugButton = document.getElementById("bug_btn");
const dragonButton = document.getElementById("dragon_btn");
const psychicButton = document.getElementById("psychic_btn");
const flyingButton = document.getElementById("flying_btn");
const fightingButton = document.getElementById("fighting_btn");
const normalButton = document.getElementById("normal_btn");
const iceButton = document.getElementById("ice_btn");
const ghostButton = document.getElementById("ghost_btn");
const darkButton = document.getElementById("dark_btn");
const steelButton = document.getElementById("steel_btn");
const favoriteButton = document.getElementById("favorite_btn");
const noFilterButton = document.getElementById("nf_btn");
const legendaryButton = document.getElementById("legendary_btn");


favoriteButton.addEventListener('click', () => {
    getFavorites();
});

fireButton.addEventListener('click', () => {
    let fireResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'fire';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'fire';
        }
        return r;
        
    });
    
    clearPokemon();
    renderPokemon(fireResults);
    
});

grassButton.addEventListener('click', () => {
    let grassResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'grass';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'grass';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(grassResults);
});

electricButton.addEventListener('click', () => {
    let electricResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'electric';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'electric';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(electricResults);
    
});

waterButton.addEventListener('click', () => {
    let waterResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'water';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'water';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(waterResults);
    
});

groundButton.addEventListener('click', () => {

    let groundResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'ground';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'ground';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(groundResults);
    
});

fairyButton.addEventListener('click', () => {

    let fairyResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'fairy';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'fairy';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(fairyResults);
    
});


rockButton.addEventListener('click', () => {

    let rockResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'rock';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'rock';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(rockResults);
});

poisonButton.addEventListener('click', () => {
    let poisonResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'poison';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'poison';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(poisonResults);
    
});

bugButton.addEventListener('click', () => {
    let bugResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'bug';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'bug';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(bugResults);
    
});

dragonButton.addEventListener('click', () => {

    let dragonResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'dragon';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'dragon';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(dragonResults);
    
});

psychicButton.addEventListener('click', () => {
    let psychicResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'psychic';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'psychic';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(psychicResults);
    
});

flyingButton.addEventListener('click', () => {
    let flyingResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'flying';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'flying';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(flyingResults);
    
});

fightingButton.addEventListener('click', () => {

    let fightingResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'fighting';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'fighting';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(fightingResults);
    
});

normalButton.addEventListener('click', () => {
let normalResults = allPokemon.filter( pokemon => {
    r = pokemon.types[0].type.name === 'normal';
    if (pokemon.types[1] != null) {
        r += pokemon.types[1].type.name === 'normal';
    }
    return r;
});
clearPokemon();
renderPokemon(normalResults);

});

iceButton.addEventListener('click', () => {
    let iceResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'ice';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'ice';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(iceResults);
    
});

ghostButton.addEventListener('click', () => {
    let ghostResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'ghost';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'ghost';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(ghostResults);
    
});

darkButton.addEventListener('click', () => {
    let darkResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'dark';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'dark';
        }
        return r;
    });
    clearPokemon();
    renderPokemon(darkResults);
    
});

steelButton.addEventListener('click', () => {
    let steelResults = allPokemon.filter( pokemon => {
        r = pokemon.types[0].type.name === 'steel';
        if (pokemon.types[1] != null) {
            r += pokemon.types[1].type.name === 'steel';
        }
        return r;
    });

    clearPokemon();
    renderPokemon(steelResults);
    
});

noFilterButton.addEventListener('click', () => {
    clearPokemon();
    renderPokemon(allPokemon);

});



legendaryButton.addEventListener('click', () => {
    let legResults = allPokemon.filter((pokemon) => {
        results = pokemon.name === "articuno";
        results += pokemon.name === "zapdos";
        results += pokemon.name === "moltres";
        results += pokemon.name === "mewtwo";
        results += pokemon.name === "raikou";
        results += pokemon.name === "entei";
        results += pokemon.name === "suicune";
        results += pokemon.name === "lugia";
        results += pokemon.name === "ho-oh";
    
    return results;
    });
clearPokemon();
renderPokemon(legResults);

} );

