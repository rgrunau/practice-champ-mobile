import { Text, View } from "react-native";
import EndButton from "../../../../components/buttons/endButton";
import { useStore } from "../../../../store/store";
import { useEndPracticeBlock } from "../../hooks/useEndPracticeBlock";
import { useEffect, useState } from "react";

export default function ActiveSession() {
  const [sessionDuration, setSessionDuration] = useState<number>(0);
  const [timeInterval, setTimeInterval] = useState<string>("seconds");
  const { activeSessionId } = useStore();
  const { mutate } = useEndPracticeBlock();
  const handleEndSession = () => {
    if (activeSessionId != null) {
      mutate(activeSessionId);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //start a timer if the session is active
      setSessionDuration((prev) => prev + 1);
      // if seconds is 60 then add 1 to minutes and reset seconds to 0
      // if minutes is 60 then add 1 to hours and reset minutes to 0
      if (sessionDuration % 60 === 0) {
        setSessionDuration(0);
        setTimeInterval("minutes");
      } else if (sessionDuration % 3600 === 0) {
        setSessionDuration(0);
        setTimeInterval("hours");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Session Active</Text>
      <Text>Duration: {sessionDuration}</Text>
      {timeInterval === "minutes" && <Text>Time Interval: {timeInterval}</Text>}
      {timeInterval === "hours" && <Text>Time Interval: {timeInterval}</Text>}
      <Text>Time Interval: {timeInterval}</Text>
      <EndButton onPress={handleEndSession} title="End Session" />
    </View>
  );
}
