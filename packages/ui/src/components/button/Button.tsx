import './button.css';
import React from 'react';

type ButtonProps = {
    className?: string;
    accent?: boolean;
    onClick?: () => void;
    color?: string;
    background?: string;
    children?: React.ReactNode;
};

export function Button({
    className = '',
    children,
    color,
    background,
    onClick,
    accent,
}: ButtonProps) {
    // TODO - badge, loading, elevated from MUI

    const style: React.CSSProperties = {
        ...(color && ({ '--color': color } as React.CSSProperties)),
        ...(background &&
            ({ '--background': background } as React.CSSProperties)),
    };

    return (
        <button
            style={style}
            onClick={onClick}
            className={`quark-button ${className} ${accent ? 'quark-button--accent' : ''}`}
        >
            {children}
        </button>
    );
}
