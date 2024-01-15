import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signin"></Stack.Screen>
      <Stack.Screen name="sign-up"></Stack.Screen>
    </Stack>
  );
}
