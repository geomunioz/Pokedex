/*Url inicial */
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const appNode = document.querySelector('.Pokedex');
/*let id = 1; */
const btnSearch = document.querySelector('button');

btnSearch.onclick =  function obtenPokemon(){
    let id = document.querySelector('.text-search').value;
    if(id<899 && id>0){
        window
        .fetch(`${baseUrl}/${id}`)
        //procesar la respuesta y convertirla en JSON
        .then(respuesta => respuesta.json())
        //JSON -♠2data ->renderizar informacion
        .then(responseJson =>{
            //Crear Nombre
            const nombre = document.querySelector('.card-title');
            nombre.textContent = responseJson.name.toUpperCase();
    
            //crear imagen
            const imagen = document.querySelector('img');
            imagen.src = responseJson.sprites.front_default;//URL DE IMAGEN //` comila alt +96
        });
    }else{
        alert("id es de 1 a 898");
    }
    
}
