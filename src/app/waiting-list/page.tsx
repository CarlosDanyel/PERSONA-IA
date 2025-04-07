"use client";

import { BackPage } from "@/components/ui/BackPage";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/input/field";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { inputErrorNumber } from "@/utils/regex";
import { toast } from "sonner";
import { ApiServices } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queyKeys } from "@/constants/querys-keys";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter no mínimo 2 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .refine((val) => inputErrorNumber.test(val), {
      message: "O nome não pode conter números ou caracteres inválidos",
    }),
  email: z.string().email("Digite um email válido"),
});

export type FormValues = z.infer<typeof formSchema>;

export default function PersonaAI() {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const queryClient = useQueryClient();

  const { mutate: handleMutationSubmit, isPending } = useMutation({
    mutationFn: ({ name, email }: FormValues) =>
      ApiServices.saveUser(name, email),
    onSuccess: () => {
      toast.success("Obrigado por se inscrever!", {
        description:
          "Você receberá um email assim que a Persona IA estiver disponível.",
        style: { marginRight: "50px" },
        closeButton: true,
        duration: 9000,
      });

      queryClient.invalidateQueries({ queryKey: queyKeys.submit });

      methods.reset();
    },
  });

  const onSubmit = async (data: FormValues) => {
    handleMutationSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <main className="h-full w-full flex flex-col justify-center items-center">
        <section
          className={cn(
            "relative w-full max-w-[600px] mx-auto mt-[-150px]",
            "[@media(max-height:735px)]:mt-[-0px]"
          )}
        >
          <BackPage className="absolute top-[-40px]" />
          <h1
            className={cn(
              "font-title text-[45px] text-center font-medium normal-case leading-[76px] tracking-[-1px] text-glow pb-4",
              "max-xl:text-[38px]",
              "max-lg:!leading-[36px] max-lg:text-[33px] max-lg:py-4",
              "max-sm:text-[30px]"
            )}
          >
            Lista de Espera - Persona IA
          </h1>
          <p className="font-title text-base text-[#7E7E7E] font-medium text-center">
            A Persona AI ainda não foi liberada, mas você pode ser um dos
            primeiros a acessar.
            <span className="text-white"> Fique por dentro das novidades</span>
          </p>
          <Separator className="my-8" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div
              className={cn(
                "w-full flex justify-between gap-7",
                "max-sm:flex-col"
              )}
            >
              <InputField
                containerClassName="w-full"
                className="rounded-[.3rem]"
                label="Nome"
                type="text"
                name="name"
                placeholder="Persona IA"
              />
              <InputField
                containerClassName="w-full"
                className="rounded-[.3rem]"
                label="Email"
                type="text"
                name="email"
                placeholder="persona@gmail.com"
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="default"
                className="w-full rounded-[.3rem]"
                disabled={isPending}
              >
                Garantir Acesso
              </Button>
            </div>
          </form>
        </section>
      </main>
    </FormProvider>
  );
}
