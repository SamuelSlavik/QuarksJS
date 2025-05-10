import { Button } from '@quarks-js/button';
import { LayoutBasic } from '@quarks-js/layout';
import { useNavigate } from 'react-router';
import { Hr } from '@quarks-js/hr';

export function Homepage() {
    // useEffect(() => {
    //     fetch('/docs/test.md')
    //         .then((res) => res.text())
    //         .then((text) => setMarkdown(text));
    // }, []);

    const navigate = useNavigate();

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
            <br />
            <div className={'homepage__buttons'}>
                <Button onClick={() => navigate('/docs')} accent>
                    See the Docs
                </Button>
                <Button onClick={() => navigate('/project')}>
                    Know the Project
                </Button>
                <Button onClick={() => navigate('/donate')}>Donate</Button>
            </div>
            <Hr />
            <div className={'homepage__columns'}>

            </div>
        </LayoutBasic>
    );
}
