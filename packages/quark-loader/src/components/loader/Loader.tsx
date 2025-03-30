import React from 'react';
import './loader.css';

export interface LoaderProps {
    loading?: boolean;
    type?: string;
    primaryColor?: string;
    secondaryColor?: string;
    children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({
    loading = false,
    type = 'spinner',
    primaryColor = '#000000',
    secondaryColor = '#ffffff',
    children,
}) => {
    return (
        <div>
            {loading ? (
                <div
                    className={'quark-loader ' + 'quark-loader--' + type}
                    style={
                        {
                            '--primaryColor': primaryColor,
                            '--secondaryColor': secondaryColor,
                        } as React.CSSProperties
                    }
                ></div>
            ) : (
                children
            )}
        </div>
    );
};

export default Loader;
