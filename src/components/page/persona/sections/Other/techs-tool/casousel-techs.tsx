"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

interface CustomSwiperProps {
    items: {
        label: string;
        icon: React.ComponentType<{ className?: string }>;
    }[];
    className?: string;
}

export const CustomSwiper = ({ items, className }: CustomSwiperProps) => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className={`w-full flex flex-1 basis-[10%] !flex-col justify-start gap-3  !ml-0 overflow-hidden ${className}`}
        >
            {items.map((item) => (
                <SwiperSlide key={item.label} className="!w-fit ml-1">
                    <div className="w-fit flex gap-3 py-6 px-8 border rounded-xl cursor-pointer bg-sidebar">
                        <item.icon className="text-xl" />
                        <span className="text-base whitespace-nowrap">
                            {item.label}
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
