import { useEffect, useState } from "react";

export const useDisplaySize = () => {
    const [displaySmall, setDisplaySmall] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setDisplaySmall(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return displaySmall;
};