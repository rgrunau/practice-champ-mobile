import { Slot, useRouter, useSegments } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const ClerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log("ClerkKey", ClerkKey);
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (e) {
      console.error(e);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (e) {
      console.error(e);
      return;
    }
  },
};

function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) {
      console.log("isLoaded", isLoaded);
      console.log("not loaded");
      console.log("is signed in", isSignedIn);
      return;
    }
    const inTabGroup = segments[0] === "(auth)";
    if (isSignedIn && !inTabGroup) {
      router.replace("/home");
    } else if (!isSignedIn && inTabGroup) {
      console.log("redirecting to signin");
      router.replace("/signin");
    }
  }, [isSignedIn]);
  if (!isLoaded) {
    return null;
  }
  return <Slot />;
}

export default function MainLayout() {
  return (
    <ClerkProvider publishableKey={ClerkKey!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}
