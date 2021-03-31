interface Props {
    readonly sm?: boolean;
}

const Break = ({sm}: Props): JSX.Element => <div className={sm
    ? 'h-6 md:h-8 lg:h-12'
    : 'h-6 md:h-12 lg:h-20'
}/>;

export default Break;