let img = document.querySelector("#sprite");
let pokname = document.querySelector("#name");
let genus = document.querySelector("#genus");
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let leftBtn = document.querySelector(".middle-row .left");
let rightBtn = document.querySelector(".middle-row .right");
let description = document.querySelector("#description");
let id = document.querySelector("#id");
let pokemonId;
let pokemonName;
let pokemonGenus;
let genusSlice;
let pokemonCounter;
let nameLowercase;

//if ready state condition twice because errors in the console

//POKEMON FUNCTION FOR INFO PT 1
function getPokemonData(pokemon) {
    //clearing out old data before fetching new data
    weight.textContent = "";
    height.textContent = "";
    description.textContent = "";
    pokname.textContent = "";
    genus.textContent = "";
    img.src = "";

    //GETTING DATA FROM AJAX
    const xhr = new XMLHttpRequest(); //STEP 1
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`); //STEP 2

    //STEP 4
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            //all the code
            const pokemon = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));

            //get the image and ID
            pokemonId = pokemon.id;
            id.textContent = pokemonId;
            pokemonCounter = pokemonId;
            img.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
            if (pokemonId >= 650 && pokemonId <= 1010) {
                img.src = pokemon.sprites.front_default;
            }

            //finding POKEMON NAME
            pokemonName = pokemon.species.name;
            pokname.textContent = pokemonName;

            //divided the height and wieght by 10;
            pokeHeight = pokemon.height;
            height.textContent = pokeHeight / 10;
            pokeWeight = pokemon.weight;
            weight.textContent = pokeWeight / 10;
        } else if (xhr.readyState === xhr.DONE) {
            //error handling
            description.textContent = "Error! That Pokemon doesn't exist.";
        }
    });

    xhr.send(null); //STEP 3
}

//POKEMON FUNCTION PT 2
function getPokemonData2(pokemon) {
    const xhr = new XMLHttpRequest(); //STEP 1

    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`); //STEP 2

    //STEP 4 PT 2
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const pokemonInfo = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));

            //pokemon id (will have to count);

            for (let generaNew of pokemonInfo.genera) {
                if (generaNew.language.name === "en") {
                    genus.textContent = generaNew.genus.slice(0, -7);
                    break;
                }
            }
            for (let flavor of pokemonInfo.flavor_text_entries) {
                if (flavor.language.name === "en") {
                    description.textContent = flavor.flavor_text;
                    break;
                }
            }
        } else if (xhr.readyState === xhr.DONE) {
            //error handling
            description.textContent = "Error! That Pokemon doesn't exist.";
        }
    });
    xhr.send(null); //STEP 3
}
//don't increment if 1011
//dont increment if less than
leftBtn.addEventListener("click", function () {
    getPokemonData(pokemonCounter - 1);
    getPokemonData2(pokemonCounter - 1);
});
rightBtn.addEventListener("click", function () {
    getPokemonData(pokemonCounter + 1);
    getPokemonData2(pokemonCounter + 1);
});

nameInput.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        pokemonName = nameInput.value;
        nameLowercase = pokemonName.toLowerCase();
        getPokemonData(nameLowercase);
        getPokemonData2(nameLowercase);
        nameInput.value = "";
    }
});
getPokemonData(1);
getPokemonData2(1);
