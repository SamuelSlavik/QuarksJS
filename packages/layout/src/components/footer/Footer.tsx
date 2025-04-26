import './footer.css';
import { Container } from '../container/Container';
import { ReactNode } from 'react';

type FooterProps = {
    className?: string;
    children?: ReactNode;
};

export function Footer({ className = '', children }: FooterProps) {
    return (
        <div className={`quark-footer ${className}`}>
            <Container>{children}</Container>
        </div>
    );
}
