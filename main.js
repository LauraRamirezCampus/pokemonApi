 function buscar(){
     fetch(`https://pokeapi.co/api/v2/pokemon`)
     .then(res=>res.json())
     .then(data=>{
         console.log(data,"p")});
         let nombre= data.name;

 }
 function pokemon(){
     for(let i=0; i< 11; i++){
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                document.getElementById("poke").innerHTML+=`
                <div class="col">
                <article id="general">
                <div class="image-container">
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="">
                </div>
                <h3></h3>
            <span></span>
        </article>
        </div>`
    })
}
}
pokemon()

function obtnerPokemon1(){
    let id1=Math.floor(Math.random()*1200+1);
    let id2=Math.floor(Math.random()*1200+1);
    let p1 , p2;
    const url="https://pokeapi.co/api/v2/pokemon/1";
    fetch(`${url}${id1}`)
    .then(resp => resp.json())
    .then(datos1 =>{
        //console.log(datos1);
        let nombre= datos1.name;
        let img=datos1.sprites.front_default;
        //console.log(nombre);
        //console.log(img);
        document.getElementById("pk").innerHTML=`
        <article id="batalla">
        <div class="image-container">
        <h2>${nombre}</h2>
        <img src="${img}" alt="">
        </div>
        <h3></h3>
        <span></span>
        </article>`
        p1 = datos1;
        console.log(p1);
    })
    fetch(`${url}${id2}`)
    .then(resp => resp.json())
    .then(datos2 =>{
        //console.log(datos2);
        let nombre= datos2.name;
        let img=datos2.sprites.back_default;
        //console.log(img);
        //  console.log(nombre);
        document.getElementById("pk2").innerHTML=`
        <article id="batalla">
        <div class="image-container">
        <h2>${nombre}</h2>
        <img src="${img}" alt="">
        </div>
        <h3></h3>
        <span></span>
        </article>`
        p2 = datos2;
        
        if (p1.base_experience > p2.base_experience) {
            console.log(p1.name + "es el ganador ");
            console.log(p1);
            
        }else {
            console.log(p2.name + "es el ganador ");
            console.log(p2);
            
        }
    })
    
    
}

let busca= document.getElementById("buscando")
 busca.addEventListener("input",(e)=>{
    
    buscar()
     	console.log(busca.value,"busca");
     })





    obtnerPokemon1()
    