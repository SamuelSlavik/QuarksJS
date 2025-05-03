import { Navigation } from '@quarks-js/layout';
import { Link, NavLink } from 'react-router';

export function NavigationWrapper() {
    return (
        <Navigation
            logo={[
                <Link key={'logo'} to={'/'}>
                    QuarksJS
                </Link>,
            ]}
            menu={[
                <NavLink to={'/docs'} key={'docs'}>
                    Docs
                </NavLink>,
                <NavLink to={'/donate'} key={'donate'}>
                    Donate
                </NavLink>,
            ]}
        />
    );
}
