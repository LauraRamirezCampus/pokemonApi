
function buscar(){
    let busca= document.getElementById("buscando").value;
    console.log(busca,"buscando");
    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                console.log(data.sprites.other.home.front_default);
                 document.getElementById("poki").innerHTML=`
                 <div class="col">
                 <article id=""class="pokis">
                 <div class="image-container">
                 <h2>${data.name}</h2>
                 <img src="${data.sprites.other.home.front_default}" id="img2" alt="">
                 </div>
                
                 <div class="col">
                 <h3 class="uno">Tipo: ${data.types[0].type.name}</h3>
                 <h3 class="dos">Habilidad: ${data.abilities[0].ability.name}</h3>
                 <h3 class="uno">Experiencia: ${data.base_experience}</h3>
                 </div>
                 
                 </div>
                 </article>`
    })
}

   
function pokemon() {
    for (let i = 0; i < 31; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(data => {
          document.getElementById("poke").innerHTML += `
            <div class="col">
              <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                <article id="general">
                  <div class="image-container">
                    <h2>${data.name}</h2>
                    <img src="${data.sprites.other.home.front_default}" class="imagen" alt="">
                  </div>
                  <h3></h3>
                  <span></span>
                </article>
              </button>
            </div>
  
            <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${data.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <img src="${data.sprites.other.home.front_default}" class="imagen" alt="">
                  <h3 class="uno">Tipo: ${data.types[0].type.name}</h3>
                 <h3 class="dos">Habilidad: ${data.abilities[0].ability.name}</h3>
                 <h3 class="uno">Experiencia: ${data.base_experience}</h3>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
    }
  }
  

//  function pokemon(){
//      for(let i=0; i< 31; i++){
//             fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//             .then(res=>res.json())
//             .then(data=>{
//                 //console.log(data);
//                 document.getElementById("poke").innerHTML+=`
//                 <div class="col">
                
//                 <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 <article id="general">
  


//                 <div class="image-container">
//                 <h2>${data.name}</h2>
//                 <img src="${data.sprites.other.home.front_default}" class="imagen" alt="">
//                 </div>
//                 <h3></h3>
//             <span></span>
//             </article>
//             </button>
//         </div>
        
//         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">${data.name + i}</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
// `
//     })
// }
// }
pokemon()

 function obtnerPokemon1(){
     let id1=Math.floor(Math.random()*100+1);
     let id2=Math.floor(Math.random()*100+1);
     let p1 , p2;
     const url="https://pokeapi.co/api/v2/pokemon/1";
     fetch(`${url}${id1}`)
     .then(resp => resp.json())
     .then(datos1 =>{
         //console.log(datos1);
         let nombre= datos1.name;
         let img=datos1.sprites.other.home.front_default;
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
         </article>
         `
         p1 = datos1;
         console.log(p1);
     })
     fetch(`${url}${id2}`)
     .then(resp => resp.json())
     .then(datos2 =>{
         //console.log(datos2);
         let nombre= datos2.name;
         let img=datos2.sprites.other.home.front_default;
         //console.log(img);
         //  console.log(nombre);
         document.getElementById("pk2").innerHTML=`
         <article id="batalla1">
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
             document.getElementById("gan").innerHTML=`<h3>El ganador es: ${p1.name}</h3>`;
             console.log(p1);          
         }else {
             console.log(p2.name + "es el ganador ");
             document.getElementById("gan").innerHTML=`<h3>El ganador es: ${p2.name}</h3>`;

             console.log(p2);          
         }
     })  
    
    }
    obtnerPokemon1()

    