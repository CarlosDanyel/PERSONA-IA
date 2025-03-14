"use client";

import { ChatArea } from "@/components/page/chat/chat/chat-area";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Chat() {
    const methods = useForm();
    const [stateValue, setStateValue] = useState("");
    return (
        <>
            <FormProvider {...methods}>
                <ChatArea setStateValue={setStateValue} />
            </FormProvider>
        </>
    );
}
