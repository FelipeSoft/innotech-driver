import { Pressable, Text, TouchableHighlight, TouchableOpacity } from "react-native"

type Props = {
    children: React.ReactNode;
    variant: "blue" | "default" | "destructive";
    onPress: () => void;
    className?: string;
}

const variants = {
    blue: "bg-blue-600 text-white",
    default: "bg-black dark:bg-white text-white dark:text-black",
    destructive: "bg-red-500 text-white"
}

export const Button = ({ children, variant, className, onPress }: Props) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <Text className={`${variants[variant]} ${className} py-3 px-4 rounded-md text-center text-lg`}>{children}</Text>
        </TouchableHighlight>
    )
}