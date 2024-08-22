import React, { useContext, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./components/button";
import { Link, useRouter } from "expo-router";
import { AuthenticationContext } from "./context/authentication-context";

const SessionStartSchema = z.object({
    email: z.string().email({ message: 'E-mail inválido!' }),
    password: z.string().min(1, { message: 'Este campo é obrigatório!' }),
});

type SessionStartInputs = z.infer<typeof SessionStartSchema>;

const SessionStart: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<SessionStartInputs>({
        resolver: zodResolver(SessionStartSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const authenticationContext = useContext(AuthenticationContext);
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = (data: SessionStartInputs) => {
        if (authenticationContext?.credentials) {
            const correctEmail = authenticationContext.credentials.email;
            const correctPassword = authenticationContext.credentials.password;

            if (correctEmail === data.email && correctPassword === data.password) {
                authenticationContext.setConnected(true);
                router.push("/");
                return;
            }
            
            authenticationContext.setConnected(false);
            setErrorMessage("E-mail e/ou senha incorretos. Tente novamente!");
        }
    };

    return (
        <View className="w-full h-full items-center justify-center dark:bg-slate-950 bg-slate-100">
            <View className="w-full flex flex-col px-8">
                <View className="flex flex-row gap-2 items-center mb-10">
                    <Image source={require("../assets/images/only-logo.png")} className="w-[60px] h-[60px]" alt="InnoTech" />
                    <Text className="text-3xl font-semibold text-black dark:text-white">InnoTech Driver</Text>
                </View>
                {errorMessage !== "" && (
                    <View className="py-2 px-4 bg-red-500/50 text-red-500 mb-4">
                        <Text>{errorMessage}</Text>
                    </View>
                )}
                <View className="flex flex-col gap-2">
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="mb-4 flex flex-col gap-2">
                                <Text className="text-lg font-medium text-slate-500">E-mail</Text>
                                <TextInput
                                    style={[errors.email && { borderColor: '#ef4444' }]}
                                    onChangeText={onChange}
                                    className="py-2 px-4 rounded-md border text-black dark:text-white dark:border-slate-800 border-slate-500"
                                    onBlur={onBlur}
                                    value={value}
                                    keyboardType="email-address"
                                    placeholder="Digite seu e-mail"
                                />
                                {errors.email && <Text className="text-red-500 text-sm mt-1">{errors.email.message}</Text>}
                            </View>
                        )}
                    />
                </View>
                <View className="flex flex-col gap-2 mb-10 mt-6">
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View className="flex flex-col gap-2">
                                <Text className="text-lg font-medium text-slate-500">Senha</Text>
                                <TextInput
                                    style={[errors.password && { borderColor: '#ef4444' }]}
                                    onChangeText={onChange}
                                    className="py-2 px-4 rounded-md border text-black dark:text-white dark:border-slate-800 border-slate-500"
                                    onBlur={onBlur}
                                    value={value}
                                    secureTextEntry
                                    placeholder="Digite sua senha"
                                />
                                {errors.password && <Text className="text-red-500 text-sm mt-1">{errors.password.message}</Text>}
                            </View>
                        )}
                    />
                    <Link href="/" className="text-blue-600">Esqueceu a senha?</Link>
                </View>
                <Button onPress={handleSubmit(onSubmit)} variant="blue">
                    Entrar
                </Button>
            </View>
        </View>
    );
};

export default SessionStart;
