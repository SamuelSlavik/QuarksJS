import './hamburger.css';
import { CSSProperties, useState } from 'react';

type HamburgerProps = {
    toggled?: boolean;
    toggle?: () => void;
    size?: number;
    color?: string;
    accentColor?: string;
    className?: string;
};

export function Hamburger({
    toggled = false,
    toggle,
    size = 16,
    color,
    accentColor,
    className = '',
}: HamburgerProps) {
    const [internalToggled, setInternalToggled] = useState(false);

    const isControlled = toggled !== undefined && toggle !== undefined;
    const isToggled = isControlled ? toggled : internalToggled;

    const handleClick = () => {
        if (isControlled) {
            toggle?.();
        } else {
            setInternalToggled((prev) => !prev);
        }
    };

    const height = size;
    const width = size * 1.5;

    const barHeightRaw = height / 6;
    const barHeight = Math.max(3, Math.round(barHeightRaw));

    const diagonal = Math.round(Math.sqrt(height ** 2 + height ** 2));

    const translateY = height / 2 - barHeight / 2;

    return (
        <div
            className={`quark-hamburger ${isToggled ? 'quark-hamburger--toggled' : ''} ${className}`}
            onClick={handleClick}
            style={
                {
                    position: 'relative',
                    height: height,
                    width: width,
                    '--color': color ? color : '',
                    '--accentColor': accentColor ? accentColor : '',
                } as CSSProperties
            }
        >
            <span
                className={'quark-hamburger__bar quark-hamburger__bar--top'}
                style={{
                    height: `${barHeight}px`,
                    width: `${isToggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                    top: '0',
                    transform: isToggled
                        ? `translateY(${translateY}px) rotate(45deg)`
                        : '',
                }}
            ></span>
            <span
                className={'quark-hamburger__bar quark-hamburger__bar--middle'}
                style={{
                    height: `${barHeight}px`,
                    width: `${isToggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                }}
            ></span>
            <span
                className={'quark-hamburger__bar quark-hamburger__bar--bottom'}
                style={{
                    height: `${barHeight}px`,
                    width: `${isToggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                    transform: isToggled
                        ? `translateY(${-translateY}px) rotate(-45deg)`
                        : '',
                }}
            ></span>
        </div>
    );
}
