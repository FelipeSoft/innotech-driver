import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { MainLayout } from "./layouts/main-layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tracking } from "./components/tracking";

const Index = () => {
    return (
        <>
            <MainLayout sectionTitle="Home">
                <View className="w-full flex justify-center">
                    <Link href={{
                        pathname: "/trackings/[trackingId]",
                        params: {trackingId: "1"}
                    }} asChild>
                        <Pressable className="w-full p-6 mt-6 text-xl rounded-lg bg-white shadow-xl shadow-slate-500 dark:bg-slate-900">
                            <View className="w-full flex justify-between">
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-1">
                                        <Ionicons name="caret-back-circle-outline" size={26} color="#2563eb" />
                                        <Text className="text-blue-600 text-2xl font-medium">1234 5678 9101</Text>
                                    </View>
                                    <Text className="text-emerald-700 rounded-md px-2 py-1 font-medium bg-emerald-700/30 dark:bg-emerald-700/70 dark:text-white">Em Rota</Text>
                                </View>
                                <View className="flex flex-row items-center justify-between mt-6">
                                    <View className="flex flex-row items-center gap-1">
                                        <Ionicons name="locate-outline" size={20} color="#2563eb" />
                                        <Text className="text-blue-600 text-xl font-medium">Localidade</Text>
                                    </View>
                                </View>
                                <Text className="dark:text-white text-black text-md">Endereço da Localidade</Text>
                            </View>
                        </Pressable>
                    </Link>
                    <Text className="text-2xl font-semibold text-left mt-6">Últimas Entregas</Text>
                    <View className="flex flex-col w-full">
                        <Tracking address="Endereço de Teste 1" code="1234" status="executing" />
                        <Tracking address="Endereço de Teste 2" code="5678" status="canceled" />
                        <Tracking address="Endereço de Teste 3" code="9210" status="stopped" />
                        <Tracking address="Endereço de Teste 4" code="1112" status="finished" />
                    </View>
                </View>
            </MainLayout>
        </>
    )
}

export default Index;