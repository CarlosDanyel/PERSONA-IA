import { api } from "@/lib/axios";

export type SendMessageProps = {
  chatId: string;
  chatInput: string;
};

export type ResponseMessageProps = {
  output: string;
  chatInput: string;
};

const saveUser = async (name: string, email: string) => {
    const { data } = await api.post("/user/submit", { name, email });

    return data;
};

const sendMessage = async ({ chatId, chatInput}: SendMessageProps) => {
  const { data } = await api.post("/agent/message", {
    chatId,
    chatInput,
  });

  return data;
};


const responseMessage = async () => {
  const res = await api.get("/agent/response")
  return res.data;
};

export const ApiServices = {
  saveUser,
  sendMessage,
  responseMessage,
};