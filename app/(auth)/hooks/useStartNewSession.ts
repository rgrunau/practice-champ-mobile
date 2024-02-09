import { useMutation } from "@tanstack/react-query";
import { useStore } from "../../../store/store";

const startNewSession = async (id: number) => {
  console.log(`creating new session` + id);
  const response = await fetch("http://localhost:3000/api/sessions/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) {
    throw new Error("Failed to start new session");
  }
  return response.json();
};

export const useStartNewSession = () => {
  const { setSessionActive, setActiveSessionId } = useStore();
  return useMutation({
    mutationFn: startNewSession,
    onSuccess: (data) => {
      console.log(data);
      setSessionActive(true);
      setActiveSessionId(data.data.id);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
