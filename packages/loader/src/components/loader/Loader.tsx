import React from 'react';
import './loader.css';

export interface LoaderProps {
    loading?: boolean;
    type?: string;
    color?: string;
    children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({
    loading = false,
    type = 'spinner',
    color,
    children,
}) => {
    const style: React.CSSProperties = color
        ? ({ '--color': color } as React.CSSProperties)
        : {};

    return (
        <div>
            {loading ? (
                <div
                    className={'quark-loader ' + 'quark-loader--' + type}
                    style={style}
                ></div>
            ) : (
                children
            )}
        </div>
    );
};

export default Loader;
