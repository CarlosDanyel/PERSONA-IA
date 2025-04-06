import { PrismaClient } from "@prisma/client";

export const addUser = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const prisma = new PrismaClient();

    try {
        await prisma.user.create({
            data: {
                name: name,
                email: email,
            },
        });
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
