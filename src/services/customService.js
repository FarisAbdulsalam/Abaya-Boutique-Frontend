const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/custom-abaya`;


//calling Api
// Uses fetch() to make a GET request to the base URL.

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error('Failed to fetch custom designs');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async(userId, customOptions) => {
    console.log(customOptions)    
    const res = await fetch (`${BASE_URL}/${userId}/add-to-cart`, {
            method: 'POST' ,
            headers :{
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(customOptions),
        })
         if (!res.ok) throw new Error('Failed to create custom design');
         return res.json();

}
export {
    index, create
}



