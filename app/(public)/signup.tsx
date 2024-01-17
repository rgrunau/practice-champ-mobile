import { Text, View, StyleSheet } from "react-native";
import TextInputComponent from "../../components/inputs/TextInputComponent";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SignUpRoute() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Sign Up</Text>
        <TextInputComponent placeholder="Email" />
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
