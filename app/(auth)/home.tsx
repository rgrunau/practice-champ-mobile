import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";

export default function home() {
  const router = useRouter();
  const { isLoading, data } = useGetSignedInUser() ?? {};
  const { screenName, userProfile } = data?.data ?? {};

  return (
    <MainAppWrapper>
      {isLoading && (
        <View style={styles.container}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      )}
      {!isLoading && data?.data && (
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to practice champ, {userProfile.screenName}!
          </Text>
        </View>
      )}
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
