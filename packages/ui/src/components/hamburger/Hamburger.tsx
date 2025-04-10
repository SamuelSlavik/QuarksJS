import './hamburger.css';
import { CSSProperties } from 'react';

type HamburgerProps = {
    toggled?: boolean;
    toggle?: () => void;
    className?: string;
    size?: number;
    color?: string;
    accentColor?: string;
};

export function Hamburger({
    toggled = false,
    toggle,
    size = 16,
    color,
    accentColor,
    className = '',
}: HamburgerProps) {
    const height = size;
    const width = size * 1.5;

    const barHeightRaw = height / 6;
    const barHeight = Math.max(3, Math.round(barHeightRaw));

    const diagonal = Math.round(Math.sqrt(height ** 2 + height ** 2));

    const translateY = height / 2 - barHeight / 2;

    console.log(diagonal);

    return (
        <div
            className={`quark-hamburger ${toggled ? 'quark-hamburger--toggled' : ''} ${className}`}
            onClick={toggle}
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
                    width: `${toggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                    top: '0',
                    transform: toggled
                        ? `translateY(${translateY}px) rotate(45deg)`
                        : '',
                }}
            ></span>
            <span
                className={'quark-hamburger__bar quark-hamburger__bar--middle'}
                style={{
                    height: `${barHeight}px`,
                    width: `${toggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                }}
            ></span>
            <span
                className={'quark-hamburger__bar quark-hamburger__bar--bottom'}
                style={{
                    height: `${barHeight}px`,
                    width: `${toggled ? diagonal : width}px`,
                    borderRadius: `${barHeight}px`,
                    transform: toggled
                        ? `translateY(${-translateY}px) rotate(-45deg)`
                        : '',
                }}
            ></span>
        </div>
    );
}
