import { View, Text, TextInput, TouchableHighlight } from "react-native";

type Props = {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <>
            <View className="w-full h-full flex flex-col dark:bg-slate-950 bg-slate-100">
                <View className="pt-12 pb-6 px-6 flex flex-col justify-start bg-blue-600">
                    <Text className="font-light text-md text-white">Segunda-feira, Agosto de 2024</Text>
                    <Text className="font-semibold text-2xl text-white">Acompanhamento de Entregas</Text>
                </View>
                <View className="px-6">{children}</View>
                <View className="px-6 flex flex-row items-center justify-between h-[80px] bg-white dark:bg-slate-950 absolute bottom-0 w-full">
                    <TouchableHighlight>
                        <Text className="bg-blue-600 h-12 w-12 rounded-md text-white flex items-center justify-center">I</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text className="bg-blue-600 h-12 w-12 rounded-md text-white flex items-center justify-center">I</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text className="bg-blue-600 h-12 w-12 rounded-md text-white flex items-center justify-center">I</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text className="bg-blue-600 h-12 w-12 rounded-md text-white flex items-center justify-center">I</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    )
}
