const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/custom-abayas`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch custom designs");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (userId, customOptions) => {
  const url = `${BASE_URL}/${userId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customOptions),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Failed to create custom design`);
  return data;
};

export { index, create };
