// @ts-expect-error No module file
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-expect-error No module file
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactNode } from 'react';

type SyntaxHighlighterWrapperProps = {
    children: ReactNode;
    language?: string;
};

export function SyntaxHighlighterWrapper({
    language = 'jsx',
    children,
}: SyntaxHighlighterWrapperProps) {
    return (
        <SyntaxHighlighter language={language} style={nord}>
            {children}
        </SyntaxHighlighter>
    );
}
