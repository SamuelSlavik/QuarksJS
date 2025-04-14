import { useState, useCallback } from 'react';

export function useToggleMenu(defaultState = false) {
    const [isOpen, setIsOpen] = useState(defaultState);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const open = useCallback(() => {
        setIsOpen(true);
        console.log(isOpen)
    }, []);
    const close = useCallback(() => {
        setIsOpen(false)
        console.log(isOpen)
    }, []);

    return {
        isOpen,
        toggle,
        open,
        close,
        set: setIsOpen,
    };
}
