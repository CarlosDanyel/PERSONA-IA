import { api } from "@/lib/axios";

const saveUser = async (name: string, email: string) => {
    const { data } = await api.post("/users/submit", { name, email });

    return data;
};

export const ApiServices = {
    saveUser,
};
