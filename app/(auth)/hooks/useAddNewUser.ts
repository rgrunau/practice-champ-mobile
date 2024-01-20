import { useRouter } from "expo-router";
import { NewUser } from "../../../const/interfaces";
import { useMutation } from "@tanstack/react-query";
const addNewUser = async (newUser: NewUser) => {
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

export const useAddNewUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: addNewUser,
    onSuccess: () => {
      // Invalidate and refetch
      router.replace("/home");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
