export const getAllCategories = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/categories`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};
export const getCrossSells = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/cross_sells`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getAllProductsAdmin = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/products`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    return response.json();
  }

  return response.json();
};

export const removeProduct = async (id) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/products/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const getAllCards = async ({ queryKey }) => {
  let response;
  /*eslint-disable no-unused-vars*/
  const [_key, { category }] = queryKey;

  response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/categories/${category}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getProductCard = async ({ queryKey }) => {
  let response;
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;

  response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getAllCrossSellsAdmin = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/cross_sells`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    return response.json();
  }

  return response.json();
};

export const removeCrossSell = async (id) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/cross_sells/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    return { error: response.text };
  }

  return true;
};

export const getProductAdmin = async ({ queryKey }) => {
  let response;
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;

  response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/products/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getAllReviews = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/comments`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    return response.json();
  }

  return response.json();
};

export const removeReview = async (id) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/comments/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    return { error: response.text };
  }

  return true;
};

export const getAllCategoriesAdmin = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/categories`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    return response.json();
  }

  return response.json();
};

export const removeCategory = async (id) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/categories/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    return { error: response.text };
  }

  return true;
};

export const signIn = async (data) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return response.json();
  }

  return response.json();
};

export const signUp = async (data) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return { error: true };
  }

  return response.json();
};

export const addReview = async (data) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return { error: true };
  }

  return response.json();
};

export const addCategory = async (data) => {
  const response = await fetch(
    "http://willdimr.beget.tech/restaurant1/public/api/auth/admin/categories",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }
  );

  console.log(data);

  if (!response.ok) {
    return { error: response.statusText };
  }

  return response.json();
};

export const AddCrossSells = async (data) => {
  const response = await fetch(
    "http://willdimr.beget.tech/restaurant1/public/api/auth/admin/cross_sells",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }
  );

  console.log(data);

  if (!response.ok) {
    return { error: response.statusText };
  }

  return response.json();
};

export const addProduct = async (data) => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/auth/admin/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "form-data",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }
  );
  console.log(data);

  if (!response.ok) {
    return { error: response.statusText };
  }

  return response.json();
};
