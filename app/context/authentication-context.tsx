import { useRouter } from "expo-router";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface Credential {
    email: string;
    password: string;
};

interface UserCredentials {
    credentials: Credential;
    setCredentials: Dispatch<SetStateAction<Credential>>;
    connected: boolean;
    setConnected: Dispatch<SetStateAction<boolean>>;
}

export const AuthenticationContext = createContext<UserCredentials | null>(null);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
    const [credentials, setCredentials] = useState<Credential>({email: "felipedecastrolima2@gmail.com", password: "felipe123"});
    const [connected, setConnected] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (!connected) {
            router.push("/session-start");
        } 
    }, [router])

    return (
        <AuthenticationContext.Provider value={{ credentials, setCredentials, connected, setConnected }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
