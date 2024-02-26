import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../../store/store";

const endPracticeBlock = async (id: number) => {
  const response = await fetch("http://localhost:3000/api/sessions/end", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) {
    throw new Error("Failed to end practice block");
  }
  return response.json();
};

export const useEndPracticeBlock = () => {
  const setSessionActive = useStore((state) => state.setSessionActive);
  const setActiveSessionId = useStore((state) => state.setActiveSessionId);
  return useMutation({
    mutationFn: endPracticeBlock,
    onSuccess: () => {
      setSessionActive(false);
      setActiveSessionId(null);
      useQueryClient().invalidateQueries({ queryKey: ["sessions"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
