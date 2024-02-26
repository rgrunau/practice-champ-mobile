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

export interface UserSession {
  id: number;
  createdAt: string;
  title: string;
  isPublic: boolean;
  startTime: string;
  endTime: string;
  notes: string;
  userId: number;
  uploadedFile: string | null;
}

interface GetUserSessionReturn {
  isError: boolean;
  isLoading: boolean;
  userSessions: UserSession[] | undefined;
}

export const useGetUserSessions = (userId: number): GetUserSessionReturn => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userSessions", userId],
    queryFn: () => getUserSessions(userId),
  });

  if (isError) {
    console.log("Error fetching user sessions");
    console.log(error);
  }
  const userSessions = data?.data?.map((session: UserSession) => {
    const formattedDate = new Date(session.createdAt).toLocaleDateString();
    // Format the date to be more readable
    // update the session.createdAt to be the formatted date
    // return the session
    return { ...session, createdAt: formattedDate };
  });
  return { userSessions, isLoading, isError };
};
