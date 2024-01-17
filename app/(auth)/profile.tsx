import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { isLoaded, user } = useUser();
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      {isLoaded && user && (
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Hello, {user.firstName} {user.lastName}
          </Text>
          <View>
            <Button
              title="Sign Out"
              onPress={() => {
                signOut();
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 20,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
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
  },
});
