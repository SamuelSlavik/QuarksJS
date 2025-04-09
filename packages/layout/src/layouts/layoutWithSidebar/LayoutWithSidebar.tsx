import './layoutWithSidebar.css';
import { CSSProperties, ReactNode, useState } from 'react';

type LayoutWithSidebarProps = {
    className?: string;
    sidebar: ReactNode;
    content: ReactNode;
    maxWidth?: string;
    isPageLayout?: boolean;
};

export function LayoutWithSidebar({
    className = '',
    sidebar,
    content,
    maxWidth,
    isPageLayout = false,
}: LayoutWithSidebarProps) {
    const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

    const style: CSSProperties = maxWidth
        ? ({ '--max-width': maxWidth } as CSSProperties)
        : {};

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div
            className={`quark-layout-with-sidebar ${isPageLayout ? 'quark-layout-with-sidebar--page-layout' : ''} ${className}`}
            style={style}
        >
            <div className={'quark-layout-with-sidebar__sidebar-expand'}>
                <a onClick={toggleSidebar}>{'>>'}</a>
            </div>
            {isSidebarExpanded && (
                <div
                    className={`quark-layout-with-sidebar__overlay ${isSidebarExpanded ? 'quark-layout-with-sidebar__overlay--active' : ''}`}
                    onClick={toggleSidebar}
                />
            )}

            <div
                className={`quark-layout-with-sidebar__sidebar ${isSidebarExpanded ? 'quark-layout-with-sidebar__sidebar--expanded' : ''}`}
            >
                <div className={`quark-layout-with-sidebar__sidebar-inner`}>
                    {sidebar}
                </div>
            </div>
            <div className={'quark-layout-with-sidebar__content'}>
                <div className={`quark-layout-with-sidebar__content-inner`}>
                    {content}
                </div>
            </div>
        </div>
    );
}
