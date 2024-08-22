import { View, Text, TouchableHighlight } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from "react";
import { Link } from "expo-router";

type Props = {
    children: React.ReactNode;
    sectionTitle: string;
}

export const MainLayout = ({ children, sectionTitle }: Props) => {
    const [today, setToday] = useState("");

    useEffect(() => {
        const today = new Date();
        const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const weekDay = today.getDay();
        const monthDay = today.getDate();
        const year = today.getFullYear();
        const month = today.getMonth();
        setToday(`${weekDays[weekDay]}, ${monthDay} de ${months[month]} de ${year}.`);
    }, []);

    return (
        <>
            <View className="w-full h-full flex flex-col dark:bg-slate-950">
                <View className="pt-16 pb-6 px-6 flex flex-col justify-start bg-blue-600">
                    <Text className="font-light text-md text-white">{today}</Text>
                    <Text className="font-semibold text-2xl text-white">{sectionTitle}</Text>
                </View>
                <View className="px-6 bg-slate-100 h-full dark:bg-slate-950">{children}</View>
                <View className="px-10 flex flex-row items-center justify-between h-[80px] bg-blue-600 absolute bottom-0 w-full">
                    <Link href="/" asChild>
                        <TouchableHighlight>
                            <View className="flex flex-col items-center justify-center">
                                <Ionicons name="home-outline" size={26} color="white" />
                            </View>
                        </TouchableHighlight>
                    </Link>
                    <TouchableHighlight>
                        <View className="flex flex-col items-center justify-center">
                            <Ionicons name="map-outline" size={26} color="white" />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View className="flex flex-col items-center justify-center">
                            <Ionicons name="cube-outline" size={26} color="white" />
                        </View>
                    </TouchableHighlight>
                    <Link href="/session-start" asChild>
                        <TouchableHighlight>
                            <View className="flex flex-col items-center justify-center">
                                <Ionicons name="settings-outline" size={26} color="white" />
                            </View>
                        </TouchableHighlight>
                    </Link>
                </View>
            </View>
        </>
    )
}
