import React from 'react';
import './loader.css';

export interface LoaderProps {
    loading?: boolean;
    type?: string;
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    position?: string;
    children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({
    loading = false,
    type = 'spinner',
    primaryColor = '#000000',
    secondaryColor = '#ffffff',
    tertiaryColor = '#ecf0f1',
    position = '',
    children,
}) => {
    return (
        <div>
            {loading ? (
                <div
                    className={
                        'loader-quark ' +
                        'loader-quark--' +
                        type +
                        ' ' +
                        'loader-quark--' +
                        (position || '')
                    }
                    style={
                        {
                            '--primaryColor': primaryColor,
                            '--secondaryColor': secondaryColor,
                            '--tertiaryColor': tertiaryColor,
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
