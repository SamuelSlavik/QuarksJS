import './hr.css';

type HrProps = {
    className?: string;
};

export function Hr({ className = '' }: HrProps) {
    return <div className={`quark-hr ${className}`}></div>;
}
