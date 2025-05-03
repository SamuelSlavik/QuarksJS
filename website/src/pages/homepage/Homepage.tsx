import { LayoutBasic } from '@quarks-js/layout';

import { useEffect, useState } from 'react';
import { SyntaxHighlighterWrapper } from '../../components/components/syntaxHighlighterWrapper/SyntaxHighlighterWrapper';

export function Homepage() {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        fetch('/docs/test.md')
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <LayoutBasic className={'homepage'}>
            <h1>
                Simple javascript <br />{' '}
                <span className={'gradient'}>plugins</span> and{' '}
                <span className={'gradient'}>components</span>.
            </h1>
            <div>
                <SyntaxHighlighterWrapper>{markdown}</SyntaxHighlighterWrapper>
            </div>
        </LayoutBasic>
    );
}
