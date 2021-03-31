import {ReactNode} from 'react';

interface Props {
    readonly className?: string;
    readonly children: ReactNode;
}

const Container = ({children, className}: Props): JSX.Element =>
    <div className={'container mx-auto px-6 md:px-12 max-w-8xl ' + className}
         children={children}/>;

export default Container;