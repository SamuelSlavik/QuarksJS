import { Container } from '../../components/container/Container';
import React from 'react';
import './LayoutBasic';

type LayoutBasicProps = {
    children?: React.ReactNode;
    className?: string;
    isPageLayout?: boolean;
};

export function LayoutBasic({ children, className, isPageLayout }: LayoutBasicProps) {
    return (
        <div className={`quark-layout-basic ${className}`}>
            <Container>{children}</Container>
        </div>
    );
}
