const buscarPokemon=document.querySelector('.btn_search');
const pokemonImg=document.querySelector('#pokeimg');
const pokemonName=document.querySelector('.in_poke');
const pokeName=document.querySelector('.namePoke');
const poketype1=document.querySelector('#type1');
const poketype2=document.querySelector('#type2');
const divpoketype1=document.querySelector('.divtype1');
const divpoketype2=document.querySelector('.divtype2');
const hp=document.querySelector('#hp');
const attack=document.querySelector('#attack');
const defense=document.querySelector('#defense');
const spa=document.querySelector('#spa');
const spd=document.querySelector('#spd');
const speed=document.querySelector('#speed');

const moves=document.querySelector('.moves-section');
const pokenumber=document.querySelector('.numberPoke')

const pokefetch=()=>{
    let name=pokemonName.value.toLowerCase();
    const url='https://pokeapi.co/api/v2/pokemon/'+name;
    console.log(url);
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        pokemonImg.src=data.sprites.front_default;
        pokemonImg.style.width='180px';
        pokemonImg.style.height='180px';
        pokeName.textContent=name;
        pokenumber.textContent='#'+data.id;
        if(data.types.length==1){
            oneTypeCase(data.types[0].type.name);
        }else if(data.types.length==2){
            twoTypeCase(data.types[0].type.name,data.types[1].type.name);
        }

        hp.textContent=data.stats[0].base_stat;
        attack.textContent=data.stats[1].base_stat;
        defense.textContent=data.stats[2].base_stat;
        spa.textContent=data.stats[3].base_stat;
        spd.textContent=data.stats[4].base_stat;
        speed.textContent=data.stats[5].base_stat;

        addMovesToTab(data.moves);

    })
}



buscarPokemon.addEventListener('click',()=>{
    pokefetch();
})

function oneTypeCase(data){
    divpoketype1.style.backgroundColor=chooseTypeColor(data);
    poketype1.textContent=data;
    divpoketype2.style.backgroundColor='transparent';
    poketype2.textContent="";
}

function twoTypeCase(data,data1){
    divpoketype1.style.backgroundColor=chooseTypeColor(data);
    poketype1.textContent=data;
    divpoketype2.style.backgroundColor=chooseTypeColor(data1);;
    poketype2.textContent=data1;
}

function chooseTypeColor(type){
    if(type=='normal'){
        return '#9099a1';
    }else if(type=='fighting'){
        return '#ce4069';
    }else if(type=='bug'){
        return '#90c12c';
    }else if(type=='fire'){
        return '#ff9c54';
    }else if(type=='water'){
        return '#4d90d5';
    }else if(type=='ghost'){
        return '#5269ac';
    }else if(type=='flying'){
        return '#92aade';
    }else if(type=='steel'){
        return '#5a8ea1';
    }else if(type=='psychic'){
        return '#f97176';
    }else if(type=='poison'){
        return '#ab6ac8';
    }else if(type=='ice'){
        return '#74cec0';
    }else if(type=='ground'){
        return '#d97746';
    }else if(type=='rock'){
        return '#c7b78b';
    }else if(type=='dragon'){
        return '#096dc4';
    }else if(type=='grass'){
        return '#63bb5b';
    }else if(type=='dark'){
        return '#5a5366';
    }else if(type=='fairy'){
        return '#ec8fe6';
    }else if(type=='electric'){
        return '#f3d23b';
    }
}

function addMovesToTab(data){
    moves.innerHTML='';
    for(let i=0;i<data.length;i++){
        let p=document.createElement('p');
        let move=document.createTextNode(data[i].move.name);
        p.appendChild(move);
        moves.appendChild(p);
    }
}