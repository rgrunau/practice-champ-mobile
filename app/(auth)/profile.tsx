import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
import { useGetSignedInUser } from "../../hooks/useGetSignedInUser";
import MainAppWrapper from "./components/layout/mainAppWrapper";
import ProfileHeader from "./components/layout/profile/profileHeader";
import InstrumentsSection from "./components/layout/profile/instrumentsSection";

export default function ProfileScreen() {
  const { isLoading, data } = useGetSignedInUser() ?? {};
  const { signOut } = useAuth();
  const { userProfile } = data?.data ?? {};
  console.log("userProfile", userProfile);
  console.log("instrument", userProfile?.instruments);
  return (
    <MainAppWrapper>
      <SafeAreaView style={styles.container}>
        {!isLoading && data?.data && (
          <>
            <ProfileHeader />
            <View style={styles.body}>
              <InstrumentsSection instruments={userProfile?.instruments} />
              <View>
                {data?.data?.userProfile?.bio && (
                  <Text style={styles.bodyText}>
                    {data?.data?.userProfile?.bio}
                  </Text>
                )}
                {!data?.data?.userProfile?.bio && (
                  <View>
                    <Text style={styles.bodyText}>No bio yet!</Text>
                  </View>
                )}
              </View>
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
