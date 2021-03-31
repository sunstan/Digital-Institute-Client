import React, {ReactNode, useEffect, useRef} from 'react';

interface Props {
    readonly children: ReactNode;
    readonly className?: string;
    readonly onClickOut: () => any;
}

const ClickOut = ({onClickOut, className, children}: Props): JSX.Element => {

    const ref = useRef(null);

    useEffect(() => {
        const onEvent = (e: PointerEvent) => {
            const inside = e.target === ref?.current || ref?.current?.contains(e.target);
            if (!inside) onClickOut();
        }
        document.addEventListener('pointerdown', onEvent)
        return () => document.removeEventListener('pointerdown', onEvent);
    }, [onClickOut]);

    return <div className={className} ref={ref} children={children}/>
}

export default ClickOut;