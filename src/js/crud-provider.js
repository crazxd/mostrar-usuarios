
const urlCRUD = 'https://reqres.in/api/users/'

const getUsuario = async(id) => {


    const resp = await fetch( `${ urlCRUD }/${ id }`);
    const data = await resp.json();

    return data;

};


export{

    getUsuario
};

