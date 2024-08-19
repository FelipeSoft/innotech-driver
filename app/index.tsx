import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { MainLayout } from "./layouts/main-layout";

const Index = () => {
    return (
        <MainLayout>
            <View className="w-full flex items-center justify-center dark:bg-slate-950 bg-slate-100">
                <Link href="/session-start" asChild>
                    <Pressable className="py-2 px-4 text-xl rounded-md bg-blue-600">
                        <Text className="dark:text-white text-black">Ir para a autenticação.</Text>
                    </Pressable>
                </Link>
            </View>
        </MainLayout>
    )
}

export default Index;