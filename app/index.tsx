import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { MainLayout } from "./layouts/main-layout";

const Index = () => {
    return (
        <MainLayout sectionTitle="Home">
            <View className="w-full flex items-center justify-center">
                <Link href="/session-start" asChild>
                    <Pressable className="w-full py-2 px-4 text-xl rounded-md bg-white dark:bg-slate-900">
                        <View className="w-full flex items-center justify-between">
                            <View className="flex items-center">
                                <Text>1234 5678 9101</Text>
                            </View>
                            <Text className="dark:text-white text-black">Ir para a autenticação.</Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
        </MainLayout>
    )
}

export default Index;