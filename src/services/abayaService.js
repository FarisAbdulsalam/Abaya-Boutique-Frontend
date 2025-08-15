const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/abayas`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (formData) => {
  console.log(formData);
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });
  console.log(res);
  return res.json();
};

const update = async (formData, abayaId) => {
  const res = await fetch(`${BASE_URL}/${abayaId}`, {
    method: "PUT",
    body: formData,
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
};

const deleteAbaya = async (abayaId) => {
  const res = await fetch(`${BASE_URL}/${abayaId}`, {
    method: "DELETE",
  });
  return res.json();
};
export { index, create, update, deleteAbaya };
