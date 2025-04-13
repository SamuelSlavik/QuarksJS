import { useState, useCallback } from 'react';

export function useToggleMenu(defaultState = false) {
    const [isOpen, setIsOpen] = useState(defaultState);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return {
        isOpen,
        toggle,
        open,
        close,
        set: setIsOpen,
    };
}
