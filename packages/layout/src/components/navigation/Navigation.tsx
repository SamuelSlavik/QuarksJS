import { ReactNode, useState } from 'react';
import { Hamburger } from '@quarks-js/ui';
import './navigation.css';

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
                    <div
                        className={
                            !menu
                                ? 'quark-navigation__hamburger-only-responsive'
                                : 'quark-navigation__hamburger'
                        }
                    >
                        <Hamburger
                            toggle={() => setDisplayMenu(!displayMenu)}
                            toggled={displayMenu}
                            size={20}
                        />
                    </div>
                </div>
            </div>
            {displayMenu && (
                <div className={`quark-navigation__menu`}>
                    {content} {menu}
                </div>
            )}
        </nav>
    );
}
