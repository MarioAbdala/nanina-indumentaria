import { useEffect, useState } from "react";

export const useShowButton = () => {
    const [showButton, setShowButton] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return {
    showButton
  };
};