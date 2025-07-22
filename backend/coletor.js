const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');


const salvarJSON = (nomeArquivo, dados) => {
  const pasta = path.join(__dirname, 'dados');
  if (!fs.existsSync(pasta)) fs.mkdirSync(pasta);
  const caminhoCompleto = path.join(pasta, nomeArquivo); 
  fs.writeFileSync(caminhoCompleto, JSON.stringify(dados, null, 2), 'utf-8');
};


async function coletarPokemons() {
    const pokemons = [];
    for(let i = 1; i <= 150; i++){
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await resp.json();
        pokemons.push({     
         name: data.name,
         height: data.height,
         weight: data.weight,
         sprite: data.sprites.front_default,
         types: data.types.map(t => t.type.name)
        });
    }
    salvarJSON('pokemons.json', pokemons)
}

async function coletarHabilidades() {
    const habilidades = []
    for (let i = 1; i <= 20; i++){
        const resp = await fetch(`https://pokeapi.co/api/v2/ability/${i}`);
        const data = await resp.json();
    habilidades.push({
      name: data.name,
      effect: data.effect_entries.find(e => e.language.name === "en")?.effect || "",
      short_effect: data.effect_entries.find(e => e.language.name === "en")?.short_effect || ""
    });
  } 
    salvarJSON('habilidades.json', habilidades) 
}

async function coletarFrutinhas() {
  const frutinhas = [];
  for (let i = 1; i <= 20; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/berry/${i}`);
    const data = await resp.json();
    const itemResp = await fetch(data.item.url);
    const itemData = await itemResp.json();

    frutinhas.push({
      name: data.name,
      sprite: itemData.sprites.default,
      spicy: data.flavors.find(f => f.flavor.name === "spicy")?.potency || 0,
      dry: data.flavors.find(f => f.flavor.name === "dry")?.potency || 0,
      sweet: data.flavors.find(f => f.flavor.name === "sweet")?.potency || 0,
      bitter: data.flavors.find(f => f.flavor.name === "bitter")?.potency || 0,
      sour: data.flavors.find(f => f.flavor.name === "sour")?.potency || 0,
    });
  }
  salvarJSON('frutinhas.json', frutinhas);
}

async function coletarItens() {
  const itens = [];
  for (let i = 1; i <= 20; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/item/${i}`);
    const data = await resp.json();
    itens.push({
      name: data.name,
      sprite: data.sprites.default,
      effect: data.effect_entries.find(e => e.language.name === "en")?.effect || "",
      short_effect: data.effect_entries.find(e => e.language.name === "en")?.short_effect || ""
    });
  }
  salvarJSON('itens.json', itens);
}

async function executarColeta() {
  try {
    console.log(" Iniciando coleta");
    await coletarPokemons();
    console.log("Pokémons coletados");
    await coletarHabilidades();
    console.log("Habilidades coletadas");
    await coletarFrutinhas();
    console.log("Frutinhas coletadas");
    await coletarItens();
    console.log("Itens coletados");
    console.log(" Coleta finalizada com sucesso");
  } catch (erro) {
    console.error(" Erro durante a coleta:", erro.message);
  }
}


executarColeta();