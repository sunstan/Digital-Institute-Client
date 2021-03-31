import {ReactNode, useEffect, useRef, useState} from 'react';

enum State {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
    ENTERING = 'ENTERING',
    LEAVING = 'LEAVING'
}

interface Props {
    readonly className?: string;
    readonly visible: boolean;
    readonly children: ReactNode;
}

const Fade = ({visible, children, className}: Props): JSX.Element => {

    const [state, setState] = useState<State>(visible ? State.VISIBLE : State.HIDDEN);
    const classState = state === State.VISIBLE ? 'opacity-100' : 'opacity-0';
    const childRef = useRef(children);

    if (visible) childRef.current = children;

    useEffect(() => {
        setState(state => !visible
            ? state !== State.HIDDEN ? State.LEAVING : state
            : state !== State.HIDDEN ? State.VISIBLE : State.ENTERING
        );
    }, [visible]);

    useEffect(() => {
        if (state === State.LEAVING) {
            const timer = setTimeout(() => setState(State.HIDDEN), 150);
            return () => clearTimeout(timer);
        } else if (state === State.ENTERING) {
            // eslint-disable-next-line
            document.body.offsetHeight;
            setState(State.VISIBLE);
        }
    }, [state]);

    if (state === State.HIDDEN) return null;

    const classes = ['transition-opacity', className, classState];

    return <div className={classes.join(' ')}>{childRef.current}</div> ;
};

export default Fade;