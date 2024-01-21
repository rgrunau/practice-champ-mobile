import { useUser } from "@clerk/clerk-expo";
import { useQuery } from "@tanstack/react-query";

const getSignedInUser = async (userEmail: string) => {
  console.log("from api call", userEmail);
  const response = await fetch("http://localhost:3000/api/user/get-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userEmail }),
  });

  if (!response.ok) {
    throw new Error("Failed to get signed in user");
  }
  return response.json();
};

export const useGetSignedInUser = () => {
  const { user } = useUser();
  const userEmail = user?.emailAddresses[0].emailAddress ?? "";
  const { isLoading, data } = useQuery({
    queryKey: ["signedInUser"],
    queryFn: () => getSignedInUser(userEmail),
  });
  console.log(data);
  return { isLoading, data };
};
