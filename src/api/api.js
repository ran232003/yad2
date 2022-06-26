export const addUser = async (user) => {
  const response = await fetch("http://localhost:5000/api/user/newUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};
