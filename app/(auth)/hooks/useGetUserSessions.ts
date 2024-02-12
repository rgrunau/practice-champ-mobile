import { useQuery } from "@tanstack/react-query";

const getUserSessions = async (userId: number) => {
  const response = await fetch(
    `http://localhost:3000/api/sessions/get/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to get user sessions");
  }
  return response.json();
};

export const useGetUserSessions = (userId: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userSessions", userId],
    queryFn: () => getUserSessions(userId),
  });

  if (isError) {
    console.log("Error fetching user sessions");
    console.log(error);
  }
  return { userSessions: data?.data, isLoading, isError };
};
