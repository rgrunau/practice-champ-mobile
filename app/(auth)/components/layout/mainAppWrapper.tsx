import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function MainAppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView>{children}</SafeAreaView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace("/profile")}>
          <Text style={styles.appBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
  },
  appBarText: {
    color: "#fff",
    fontSize: 22,
  },
});
