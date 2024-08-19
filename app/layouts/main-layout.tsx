import { StyleSheet, View, Text } from "react-native";

type Props = {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <View className="w-full h-full flex flex-col dark:bg-slate-950 bg-slate-100">
            <View style={styles.top} className="bg-blue-600">
                <Text className="py-4 h-20 ">Testando...</Text>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        height: 300
    }
});