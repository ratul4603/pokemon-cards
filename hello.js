
const generateBtn = document.querySelector("button");
const url =" https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector(".card");

const typeColors = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
}

const loadCard = ()=>{
    let id = Math.floor(Math.random() * 150) + 1;
    finalUrl = url + id; 
    fetch(finalUrl)
    .then((response)=>response.json())
    .then((data)=>{
        card.innerHTML = `
            <h4 id="hp">HP ${data.stats[0].base_stat}</h4>
            <img src="${data.sprites.other.dream_world.front_default}" alt="">
            <h2 id="name">${data.name.toUpperCase()}</h2>
            <div class="type-box">

            </div>
            <div class="power">
                <div>
                    <p>${data.stats[1].base_stat}</p>
                    <h3>Attack</h3>
                </div>
                <div>
                    <p>${data.stats[2].base_stat}</p>
                    <h3>Defense</h3>
                </div>
                <div>
                    <p>${data.stats[5].base_stat}</p>
                    <h3>Speed</h3>
                </div>
            </div>
        `;

        const color = typeColors[data.types[0].type.name];

        generateType(data.types, color);
        colorType(color);
    })
}

const colorType = (color)=>{
    card.style.backgroundImage = `radial-gradient(circle at 50% 0%, ${color} 36%, rgb(255, 255, 255, .0001) 36%)`;
}

const generateType =(types,color)=>{
    types.forEach((type)=>{
        let span = document.createElement("span");
        span.innerHTML = type.type.name;
        span.style.backgroundColor = `${color}`;
        document.querySelector(".type-box").appendChild(span);
    })
}

generateBtn.addEventListener("click", loadCard);
window.addEventListener("load", loadCard);