import { Text, View, StyleSheet } from "react-native";
import TextInputComponent from "../../components/inputs/TextInputComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { NewUser } from "../../const/interfaces";
export default function SignUpRoute() {
  const [newUser, setNewUser] = useState<NewUser | null>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    screenName: "",
  });
  const handleInputChange = (name: keyof NewUser, value: string) => {
    // handle input change and update according state
    setNewUser(
      (prevState) =>
        ({
          ...prevState,
          [name]: value || "",
        } as NewUser)
    );
    console.log(newUser);
    console.log("input changed");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Sign Up</Text>
        <TextInputComponent
          placeholder="First Name"
          handleChange={(text: string) => handleInputChange("firstName", text)}
          keyboardType="default"
        />
        <TextInputComponent
          placeholder="Last Name"
          handleChange={(text: string) => handleInputChange("lastName", text)}
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
        />
        <TextInputComponent
          placeholder="Password"
          handleChange={(text) => handleInputChange("password", text)}
          keyboardType="default"
          isSecure={true}
        />
      </SafeAreaView>
    </View>
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
});
