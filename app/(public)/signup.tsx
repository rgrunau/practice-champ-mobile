import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TextInputComponent from "../../components/inputs/TextInputComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { NewUser } from "../../const/interfaces";
import { useSignUp } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useAddNewUser } from "../(auth)/hooks/useAddNewUser";

export default function SignUpRoute() {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const { mutate } = useAddNewUser();
  const [newUser, setNewUser] = useState<NewUser | null>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    screenName: "",
  });
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const handleInputChange = (name: keyof NewUser, value: string) => {
    // handle input change and update according state
    setNewUser(
      (prevState) =>
        ({
          ...prevState,
          [name]: value || "",
        } as NewUser)
    );
  };
  const handleSignUp = async () => {
    if (!isLoaded) return;
    // handle sign up logic
    if (newUser) {
      try {
        await signUp.create({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          emailAddress: newUser.email,
          password: newUser.password,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        setPendingVerification(true);
      } catch (error) {
        console.error(JSON.stringify(error, null, 2));
      }
    }
  };

  const handleVerification = async () => {
    if (!isLoaded) return;
    try {
      const completedVerification =
        await signUp.attemptEmailAddressVerification({
          code,
        });
      await setActive({ session: completedVerification.createdSessionId });
      if (newUser) {
        const initialUser = {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          screenName: newUser.screenName,
          email: newUser.email,
        };
        await mutate(initialUser);
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <View style={styles.container}>
          {!pendingVerification && (
            <View style={styles.container}>
              <SafeAreaView>
                <Text>Sign Up</Text>
                <TextInputComponent
                  placeholder="First Name"
                  handleChange={(text: string) =>
                    handleInputChange("firstName", text)
                  }
                  keyboardType="default"
                />
                <TextInputComponent
                  placeholder="Last Name"
                  handleChange={(text: string) =>
                    handleInputChange("lastName", text)
                  }
                  keyboardType="default"
                />
                <TextInputComponent
                  placeholder="Screen Name"
                  handleChange={(text) => handleInputChange("screenName", text)}
                  keyboardType="default"
                />
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
                  isSecure={true}
                />
                {/* <TextInputComponent
                  placeholder="Confirm Password"
                  handleChange={(text) => handleInputChange("password", text)}
                  keyboardType="default"
                  isSecure={true}
                /> */}
                <View>
                  <View>
                    <TouchableOpacity
                      onPress={handleSignUp}
                      style={styles.buttonStyle}
                    >
                      <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text>
                      Already have an account?{" "}
                      <Link href="/signin">Sign In!</Link>
                    </Text>
                  </View>
                </View>
              </SafeAreaView>
            </View>
          )}
        </View>
      )}
      {pendingVerification && (
        <View style={styles.container}>
          <Text>Check your email for a verification code</Text>
          <TextInputComponent
            placeholder="Verification Code"
            handleChange={(text) => setCode(text)}
            keyboardType="default"
          />
          <TouchableOpacity
            onPress={handleVerification}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Verify Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    fontSize: 16,
  },
  buttonStyle: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
