import { Text, View } from "react-native";
import EndButton from "../../../../components/buttons/endButton";
import { useStore } from "../../../../store/store";
import { useEndPracticeBlock } from "../../hooks/useEndPracticeBlock";

export default function ActiveSession() {
  const { activeSessionId } = useStore();
  const { mutate } = useEndPracticeBlock();
  const handleEndSession = () => {
    if (activeSessionId != null) {
      mutate(activeSessionId);
    }

    console.log("pressed");
  };
  return (
    <View>
      <Text>Session Active</Text>
      <EndButton onPress={handleEndSession} title="End Session" />
    </View>
  );
}
