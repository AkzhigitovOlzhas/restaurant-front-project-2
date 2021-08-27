export const getAllCategories = async () => {
  const response = await fetch(
    `http://willdimr.beget.tech/restaurant1/public/api/categories`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
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
