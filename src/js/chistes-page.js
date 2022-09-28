import { obtenerChiste } from "./http-provider";



const body = document.body;
let btnOtro, olList;

const crearChistesHtml = ()=>{

    const html = `
    
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro Chiste</button>

    <ol class="mt-2 list-group">

    </ol>
    
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML= html;

    body.append(divChistes);

}

const eventos = () =>{

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async()=> {
        btnOtro.disabled = true;
        
        dibujarChiste(await obtenerChiste());

        btnOtro.disabled = false;

    });


}

// { id, value }
export const dibujarChiste = async( chiste ) => {


    try{
    const valuePrueba = `https://api.mymemory.translated.net/get?q=${chiste.value}&langpair=en|es`;

    const traduccion = await fetch( valuePrueba );

        

    
    if( !traduccion.ok ) throw 'No se pudo realizar la peticion';

    const {responseData} = await traduccion.json();
    const olItemEs = document.createElement('li');
    olItemEs.innerHTML = `<li><b>${ chiste.id }</b>: ${ chiste.value }<br><b>Traduccion al Español</b>: ${ responseData.translatedText } </li>`;
    olItemEs.classList.add ("list-group-item");

    olList.append(olItemEs);

}catch(err) {

    throw err;


}


    // const olItem = document.createElement('li');
    // olItem.innerHTML = `<li><b>${ chiste.id }</b>: ${ chiste.value }</li>`;
    // olItem.classList.add ("list-group-item");

    // olList.append(olItem);


    
    




}


export const init = () =>{

    crearChistesHtml();
    eventos();
};

