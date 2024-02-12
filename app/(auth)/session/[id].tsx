import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import MainAppWrapper from "../components/layout/mainAppWrapper";

export default function IndividualSession() {
  const { id } = useLocalSearchParams();

  return (
    <MainAppWrapper>
      <SafeAreaView style={styles.sessionView}>
        <View style={styles.sessionHeader}>
          <Link
            href={{
              pathname: "/session",
            }}
            style={{ padding: 10, backgroundColor: "lightblue" }}
          >
            <Text>Back</Text>
          </Link>
        </View>
        <View>
          <Text>Individual Session</Text>
          <Text>Session ID: {id}</Text>
        </View>
      </SafeAreaView>
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({
  sessionHeader: {
    width: "100%",
    padding: 10,
    backgroundColor: "lightblue",
  },
  sessionView: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
