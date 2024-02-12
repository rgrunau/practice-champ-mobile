import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import { useGetUserSessions } from "../../hooks/useGetUserSessions";

interface RecentSessionsProps {
  id: number;
}
export default function RecentSessions({ id }: RecentSessionsProps) {
  const { userSessions, isLoading } = useGetUserSessions(id);
  console.log(userSessions);
  return (
    <ScrollView>
      {isLoading && <Text>Loading...</Text>}
      <View>
        <Text>Recent Sessions</Text>
      </View>
    </ScrollView>
  );
}
