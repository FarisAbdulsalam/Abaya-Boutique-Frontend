const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/abayas`;


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

const create = async (formData) => {
  console.log(formData)
  const res = await fetch(BASE_URL, {
    method: 'POST',
    // headers :{
    //         'Content-Type': 'application/json'
    // },
    body: formData, //do not convert here coz the image
  })
  console.log(res)
  return res.json();

}

const update = async (formData, abayaId) => {
  const res = await fetch(`${BASE_URL}/${abayaId}`, {
    method: 'PUT',
    body: formData,
  })
  if (!res.ok) {
    console.log(res)
  }
  return res.json();
}

const deleteAbaya = async (abayaId) => {
  const res = await fetch(`${BASE_URL}/${abayaId}`, {
    method: 'DELETE',
  })
  return res.json();

}
export {
  index, create, update, deleteAbaya
}

