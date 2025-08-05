const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/abaya`;


//calling Api
// Uses fetch() to make a GET request to the base URL.

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
// console.log(await index ());

const create = async(formData) => {
    console.log(formData)    
    const res = await fetch (BASE_URL, {
            method: 'POST' ,
            headers :{
                    'Content-Type': 'application/json'
            },
            body :JSON.stringify(formData) //convert from json to js
        })
        console.log(res)
        return res.json();

}

const update = async(formData, abayaId) => {
        const res = await fetch (`${BASE_URL}/${abayaId}`, {
            method: 'PUT' ,
            headers :{
                    'Content-Type': 'application/json'
            },
            body :JSON.stringify(formData) //convert from json to js
        })
return res.json();

}

const deleteAbaya = async(abayaId) => {
        const res = await fetch (`${BASE_URL}/${abayaId}`, {
            method: 'DELETE' ,
        })
return res.json();

}
export {
    index, create, update, deleteAbaya
}

