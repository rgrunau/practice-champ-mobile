import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";

export default function home() {
  const router = useRouter();
  const { isLoading, data } = useGetSignedInUser() ?? {};
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <MainAppWrapper>
      <SafeAreaView>
        <View style={styles.header}></View>
      </SafeAreaView>
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 20,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
