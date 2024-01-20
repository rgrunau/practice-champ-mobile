import { NewUser } from "../../../const/interfaces";

export const addNewUser = async (newUser: NewUser) => {
  const response = await fetch("http://localhost:3000/api/user/create", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to add new user");
  }
  return response.json();
};
