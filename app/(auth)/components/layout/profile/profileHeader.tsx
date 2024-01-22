import { useGetSignedInUser } from "../../../../../hooks/useGetSignedInUser";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHeader() {
  const { isLoading, data } = useGetSignedInUser() ?? {};
  const { screenName } = data?.data ?? {};
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCamera} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>{screenName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
