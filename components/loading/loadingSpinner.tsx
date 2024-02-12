import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";

const LoadingSpinner = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faSpinner} size={40} />
    </View>
  );
};

export default LoadingSpinner;
