import { View, TextInput, StyleSheet } from "react-native";

interface TextInputProps {
  placeholder: string;
  keyboardType: "email-address" | "default" | "numeric" | "phone-pad";
  isSecure?: boolean;
  autoCap?: "none" | "sentences" | "words" | "characters";
  handleChange: (value: string) => void;
}

const TextInputComponent = ({
  placeholder,
  keyboardType,
  handleChange,
  isSecure,
  autoCap,
}: TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"#000"}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        secureTextEntry={isSecure}
        autoCapitalize={autoCap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 400,
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
});

export default TextInputComponent;
