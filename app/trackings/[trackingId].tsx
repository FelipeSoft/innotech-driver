import { MainLayout } from "../layouts/main-layout";
import { View, Text, Pressable } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect } from "react";

const trackingId = () => {
    const { trackingId } = useLocalSearchParams();

    useEffect(() => {
        console.log(trackingId);
    }, []);

    return (
        <>
            <MainLayout sectionTitle="Entrega">
                <View>
                    <Text>Olá!</Text>
                </View>
            </MainLayout>
        </>
    )
}

export default trackingId;