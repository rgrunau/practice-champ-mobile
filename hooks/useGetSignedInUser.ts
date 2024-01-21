import { useUser } from "@clerk/clerk-expo";
import { useQuery } from "@tanstack/react-query";

export const getSignedInUser = async (userEmail: string, clerkId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/user/get-user?email=${userEmail}&clerkId=${clerkId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get signed in user");
  }
  return response.json();
};

export const useGetSignedInUser = () => {
  const { user } = useUser();
  const userEmail = user?.emailAddresses[0].emailAddress ?? "";
  const clerkId = user?.id ?? "";
  const { isLoading, data } = useQuery({
    queryKey: ["signedInUser"],
    queryFn: () => getSignedInUser(userEmail, clerkId),
  });
  return { isLoading, data };
};
