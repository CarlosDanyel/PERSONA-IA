/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from ".";
import FieldWrapper from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
    containerClassName?: string;
    error?: boolean;
    errorMessage?: string;
};

const InputField = ({
    label,
    name,
    required,
    containerClassName,
    ...props
}: InputFieldProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FieldWrapper label={label} className={containerClassName}>
            <Input
                {...props}
                {...register(name, {
                    required: required && "Campo obrigatório*",
                })}
            />

            {errors[name] && (
                <p className=" text-sm text-red-500 top-16">
                    {(errors[name] as any).message}
                </p>
            )}
        </FieldWrapper>
    );
};

export default InputField;
