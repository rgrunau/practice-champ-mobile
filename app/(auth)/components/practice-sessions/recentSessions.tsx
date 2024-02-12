import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useGetUserSessions } from "../../hooks/useGetUserSessions";
import LoadingSpinner from "../../../../components/loading/loadingSpinner";

interface RecentSessionsProps {
  id: number;
}
export default function RecentSessions({ id }: RecentSessionsProps) {
  const { userSessions, isLoading } = useGetUserSessions(id);
  console.log(userSessions);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <ScrollView style={styles.scrollView}>
          <View>
            <Text>Recent Sessions</Text>
          </View>
          <View>
            {userSessions.map((session) => (
              <Link
                key={session.id}
                href={{
                  pathname: "/session/[id]",
                  params: {
                    id: session.id,
                  },
                }}
              >
                <Text>{session.createdAt}</Text>
                <Text>{session.title}</Text>
              </Link>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});
