import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, View } from "react-native";

const LoadingSpinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <FontAwesomeIcon icon={faSpinner} size={40} />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
