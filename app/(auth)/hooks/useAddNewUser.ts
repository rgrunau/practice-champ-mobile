import { NewUser } from "../../../const/interfaces";

export const addNewUser = async (newUser: NewUser) => {
  const response = await fetch("http://localhost:3000/api/user/create", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
