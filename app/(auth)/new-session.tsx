import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import CreateButton from "../../components/buttons/createButton";
import { useStartNewSession } from "./hooks/useStartNewSession";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";
import { useStore } from "../../store/store";

export default function NewSession() {
  const { sessionActive } = useStore();
  const { data } = useGetSignedInUser();
  console.log(data.id);
  const { mutate } = useStartNewSession();
  const handlePress = () => {
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
      {sessionActive && (
        <View>
          <Text>Session Active</Text>
          <TouchableOpacity>
            <Text>End Session</Text>
          </TouchableOpacity>
        </View>
      )}
      {!sessionActive && (
        <View>
          <CreateButton handlePress={handlePress} text="Start Block" />
        </View>
      )}
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({});
