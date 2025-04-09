import { api } from "@/lib/axios";

type SendMessageProps = {
  chatId: string;
  action: string;
  chatInput: string;
};

const saveUser = async (name: string, email: string) => {
    const { data } = await api.post("/user/submit", { name, email });

    return data;
};

const sendMessage = async ({action, chatId, chatInput}: SendMessageProps) => {
  const { data } = await api.post("/agent/send-n8n", {
    chatId,
    action,
    chatInput,
  });

  return data;
};

export const ApiServices = {
  saveUser,
  sendMessage,
};