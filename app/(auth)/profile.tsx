import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import ProfileHeader from "./components/layout/profile/profileHeader";

export default function ProfileScreen() {
  const { isLoading, data } = useGetSignedInUser() ?? {};
  const { signOut } = useAuth();
  return (
    <MainAppWrapper>
      <SafeAreaView style={styles.container}>
        {!isLoading && data?.data && (
          <>
            <ProfileHeader />
            <View style={styles.body}>
              <View></View>
              <Button
                title="Sign Out"
                onPress={() => {
                  signOut();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </MainAppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 20,
    fontWeight: "light",
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  body: {
    fontSize: 20,
    marginTop: 20,
    padding: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bodyText: {
    fontSize: 20,
    color: "#000",
  },
});
