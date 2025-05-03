import { Route, Routes } from 'react-router';
import { Homepage } from './pages/homepage/Homepage';
import { Footer } from '@quarks-js/layout';
import { NavigationWrapper } from './components/components/navigation/NavigationWrapper';

export default function App() {
    return (
        <div className="App">
            <NavigationWrapper />

            <Routes>
                <Route path={'/'} element={<Homepage />} />
            </Routes>

            <Footer>
                <p>
                    All rights reserved by{' '}
                    <a
                        href={
                            'https://www.linkedin.com/in/samuel-sl%C3%A1vik-93404316a/'
                        }
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        Samuel Slávik
                    </a>
                </p>
            </Footer>
        </div>
    );
}
