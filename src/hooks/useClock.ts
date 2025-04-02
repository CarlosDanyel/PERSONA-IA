"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export const useClock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = DateTime.now()
                .setZone("America/Sao_Paulo")
                .toFormat("HH:mm:ss");
            setTime(now);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
};
