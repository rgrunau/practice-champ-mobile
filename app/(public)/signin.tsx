import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export type NewUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export default function signIn() {
  const [newUser, setNewUser] = useState<NewUser | null>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          style={styles.input}
          placeholderTextColor={"#000"}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={"#000"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>
          Don't have an account? <Link href="/signup">Sign Up!</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
});
