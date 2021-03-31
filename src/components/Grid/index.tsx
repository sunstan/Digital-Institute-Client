import React, {ReactNode} from 'react';

interface Props {
    readonly className?: string;
    readonly children: ReactNode;
}

const Grid = ({children, className}: Props): JSX.Element =>
    <div className={'grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 ' + className}
         children={children}/>;


export default Grid;