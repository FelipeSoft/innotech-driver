import { Slot } from "expo-router";
import "./globals.css";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
}

export default Slot;
