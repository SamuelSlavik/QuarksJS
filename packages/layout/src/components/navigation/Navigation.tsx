import { ReactNode, useState } from 'react';

type NavigationProps = {
    className?: string;
    logo?: ReactNode;
    content?: ReactNode[];
    menu?: ReactNode;
};

export function Navigation({
    logo,
    menu,
    content,
    className,
}: NavigationProps) {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <nav className={`quark-navigation ${className}`}>
            <div className={`quark-navigation__wrapper`}>
                <div className={`quark-navigation__logo-wrapper`}>{logo}</div>
                <div className={`quark-navigation__content-wrapper`}>
                    <div className={'quark-navigation__content'}>{content}</div>
                    <a className={'quark-navigation__hamburger-icon'}>MENU</a>
                    <a className={'quark-navigation__hamburger-icon'}>CLOS</a>
                </div>
            </div>
        </nav>
    );
}
