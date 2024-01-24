import { useGetSignedInUser } from "../../../../../hooks/useGetSignedInUser";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHeader() {
  const { data } = useGetSignedInUser() ?? {};
  const { userProfile } = data?.data ?? {};
  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <View style={styles.profileAvatar}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faCamera} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>{userProfile.screenName}</Text>
        </View>
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
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileSection: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileAvatar: {
    width: 75,
    height: 75,
    borderRadius: 8,
    backgroundColor: "#d2cccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
