"use client";

import { ChatProvider } from "@/contexts/chat";
import { SidebarProvider } from "../ui/sidebar";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { useTanStackQuery } from "@/lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";

type ClientProvidersProps = {
  children: ReactNode;
};

export const ClientProvider = ({ children }: ClientProvidersProps) => {
  const queryClient = useTanStackQuery();
  return (
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <SidebarProvider className="flex">
          <Toaster position="top-right" theme="dark" richColors />
          {children}
        </SidebarProvider>
      </ChatProvider>
    </QueryClientProvider>
  );
};
