import { View, Text, TextInput, StyleSheet } from "react-native";
import { useStartNewSession } from "./hooks/useStartNewSession";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";
import { useStore } from "../../store/store";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import CreateButton from "../../components/buttons/createButton";
import ActiveSession from "./components/practice-sessions/activeSession";

export default function NewSession() {
  const { sessionActive } = useStore();
  const { data } = useGetSignedInUser();
  const { mutate } = useStartNewSession();
  const handleStartSession = () => {
    mutate(data?.id);
  };

  return (
    <MainAppWrapper>
      <Text>New Session</Text>
      <View>
        <Text>Session Name</Text>
        <TextInput />
      </View>
      {sessionActive && <ActiveSession />}
      {!sessionActive && (
        <View>
          <CreateButton handlePress={handleStartSession} text="Start Block" />
        </View>
      )}
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({});
