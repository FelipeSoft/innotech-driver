import Ionicons from "@expo/vector-icons/Ionicons"
import { Link } from "expo-router"
import { Pressable, View, Text } from "react-native"

type Props = {
    code: string;
    address: string;
    status: "executing" | "stopped" | "finished" | "canceled";
}

const variants = {
    executing: "text-emerald-700 dark:bg-emerald-700 bg-emerald-700/30 dark:text-white dark:bg-emerald-700/70",
    stopped: "text-[#f00] dark:bg-yellow-600 bg-yellow-600/30 dark:text-white dark:bg-yellow-600/70",
    finished: "text-blue-600 dark:bg-blue-600 bg-blue-600/30 dark:text-white dark:bg-blue-600/70",
    canceled: "text-red-500 dark:bg-red-600 bg-red-600/30 dark:text-white dark:bg-red-500/70"
}

export const Tracking = ({ address, code, status }: Props) => {
    return (
        <Link href="/session-start" asChild>
            <Pressable className="w-full p-6 mt-6 text-xl rounded-md bg-white shadow-xl shadow-slate-500 dark:bg-slate-900">
                <View className="w-full flex justify-between">
                    <View className="flex flex-row items-center justify-between">
                        <View className="flex flex-row items-center gap-1">
                            <Ionicons name="caret-back-circle-outline" size={26} color="#2563eb" />
                            <Text className="text-blue-600 text-2xl font-medium">{code}</Text>
                        </View>
                        <Text className={`${variants[status]} rounded-md px-2 py-1 font-medium`}>
                            {status === "canceled" && "Cancelada"}
                            {status === "executing" && "Em Rota"}
                            {status === "stopped" && "Pausada"}
                            {status === "finished" && "Finalizada"}
                        </Text>
                    </View>
                    <Text className="dark:text-white text-black">{address}</Text>
                </View>
            </Pressable>
        </Link>
    )
}