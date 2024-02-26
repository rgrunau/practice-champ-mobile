import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

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
        <TouchableOpacity onPress={() => router.replace("/home")}>
          <Text style={styles.appBarText}>
            <FontAwesomeIcon icon={faHome} size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/new-session")}>
          <FontAwesomeIcon icon={faPlus} size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/profile")}>
          <Text style={styles.appBarText}>
            <FontAwesomeIcon icon={faUser} size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    backgroundColor: "#3f51b5",
    justifyContent: "space-around",
    alignItems: "center",
  },
  appBarText: {
    color: "#fff",
    fontSize: 22,
  },
});
