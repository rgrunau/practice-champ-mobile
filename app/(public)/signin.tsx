import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextInputComponent from "../../components/inputs/TextInputComponent";
import { useSignIn } from "@clerk/clerk-expo";

export type NewUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export default function signIn() {
  const [credentials, setCredentials] = useState<Credentials | null>({
    email: "",
    password: "",
  });
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const handleInputChange = (name: keyof Credentials, value: string) => {
    // handle input change and update according state
    setCredentials(
      (prevState) =>
        ({
          ...prevState,
          [name]: value || "",
        }) as Credentials,
    );
  };
  const handleSignIn = async () => {
    if (!isLoaded) return;

    try {
      if (credentials) {
        const completedSignIn = await signIn.create({
          identifier: credentials.email,
          password: credentials.password,
        });
        await setActive({ session: completedSignIn.createdSessionId });
        router.replace("/home");
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Sign In</Text>
        <TextInputComponent
          placeholder="Email"
          handleChange={(text) => handleInputChange("email", text)}
          keyboardType="email-address"
          autoCap="none"
        />
        <TextInputComponent
          placeholder="Password"
          handleChange={(text) => handleInputChange("password", text)}
          keyboardType="default"
          isSecure
          autoCap="none"
        />
        <View>
          <View>
            <TouchableOpacity onPress={handleSignIn} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: "100%",
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
