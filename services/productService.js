export const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return data;
};

export const getProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();
  const product = await data.find((product) => product.id === id);
  return product;
};

export const createProduct = async (payload) => {
  try {
    const responce = await fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (id, payload) => {
  try {
    const responce = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (id) => {
  try {
    const responce = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
