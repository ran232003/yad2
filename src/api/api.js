export const addUser = async (user) => {
  const response = await fetch("http://localhost:5000/api/user/newUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log(data);
  let msg = data.message;
  return msg;
};
export const login = async (user) => {
  const response = await fetch("http://localhost:5000/api/user/newUser", {
    method: "POST",
  });
};
