import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface Credential {
    email: string;
    password: string;
};

interface UserCredentials {
    credentials: Credential;
    setCredentials: Dispatch<SetStateAction<Credential>>;
}

export const AuthenticationContext = createContext<UserCredentials | null>(null);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
    const [credentials, setCredentials] = useState<Credential>({email: "felipedecastrolima2@gmail.com", password: "felipe123"});
    const [userInputCredentials, setUserInputCredentials] = useState<Credential>({email: "", password: ""});

    return (
        <AuthenticationContext.Provider value={{ credentials, setCredentials }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
