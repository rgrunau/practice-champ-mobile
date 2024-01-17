import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/profile")}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>You are home</Text>
      </View>
    </SafeAreaView>
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
