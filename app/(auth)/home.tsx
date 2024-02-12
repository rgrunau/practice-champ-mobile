import { View, Text, StyleSheet } from "react-native";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import RecentSessions from "./components/practice-sessions/recentSessions";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";

export default function home() {
  const { isLoading, data } = useGetSignedInUser();
  console.log(data);
  return (
    <MainAppWrapper>
      {isLoading && (
        <View style={styles.container}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      )}
      {!isLoading && <RecentSessions id={data?.userId} />}
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
