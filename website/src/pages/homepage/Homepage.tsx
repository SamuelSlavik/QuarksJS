import { LayoutBasic } from '@quarks-js/layout';

export function Homepage() {
    // useEffect(() => {
    //     fetch('/docs/test.md')
    //         .then((res) => res.text())
    //         .then((text) => setMarkdown(text));
    // }, []);

    return (
        <LayoutBasic className={'homepage'}>
            <div className={'homepage__headline'}>
                <h1>
                    Simple javascript <br />{' '}
                    <span className={'gradient'}>plugins</span> and{' '}
                    <span className={'gradient'}>components</span>.
                </h1>
                <p>
                    Elevate development of your javascript web applications with
                    our easy to use and highly customizable components!
                </p>
            </div>
            <div className={'homepage__buttons'}>

            </div>
        </LayoutBasic>
    );
}
