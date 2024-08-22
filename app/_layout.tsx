  import { Slot } from "expo-router";
import "./globals.css";
import { AuthenticationProvider } from "./context/authentication-context";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
}

const RootLayout = () => {
  return (
    <AuthenticationProvider>
      <Slot />
    </AuthenticationProvider>
  )
}

export default RootLayout;
