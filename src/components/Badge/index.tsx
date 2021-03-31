import {ReactNode} from 'react';

interface Props {
    readonly className?: string;
    readonly children: ReactNode;
}

const Badge = ({className, children}: Props): JSX.Element =>
    <div className={'max-w-min whitespace-nowrap py-1 px-3 bg-orange-500 text-xs text-white uppercase font-medium rounded-full ' + className}
         children={children}/>;

export default Badge;