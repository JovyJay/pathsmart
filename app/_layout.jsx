import { Stack } from "expo-router";
import { SelectionProvider } from "./context/SelectionContext"; // adjust path as needed
import { AuthProvider } from "./context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <SelectionProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SelectionProvider>
    </AuthProvider>
  );
}
