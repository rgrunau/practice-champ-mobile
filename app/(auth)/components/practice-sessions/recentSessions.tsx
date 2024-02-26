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
                style={styles.sessionCard}
                key={session.id}
                href={{
                  pathname: "/session/[id]",
                  params: {
                    id: session.id,
                  },
                }}
              >
                <View style={styles.sessionCard}>
                  <View style={styles.cardRow}>
                    <Text style={styles.textStyles}>{session.title}</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Text style={styles.textStyles}>{session.createdAt}</Text>
                  </View>
                </View>
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
  sessionCard: {
    width: 390,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f4f4f4",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  cardRow: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyles: {
    fontSize: 20,
  },
});
