import { View, Text, TextInput, StyleSheet } from "react-native";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import CreateButton from "../../components/buttons/createButton";
import { useStartNewSession } from "./hooks/useStartNewSession";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";
import { useStore } from "../../store/store";
import ActiveSession from "./components/practice-sessions/activeSession";

export default function NewSession() {
  const { sessionActive } = useStore();
  const { data } = useGetSignedInUser();
  console.log(data.id);
  const { mutate } = useStartNewSession();
  const handleStartSession = () => {
    console.log("pressed");
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
