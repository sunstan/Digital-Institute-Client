import {ReactComponent as Icon} from '../../assets/images/loader.svg';

interface Props {
    readonly className?: string;
}

const Loader = ({className}: Props): JSX.Element =>
    <Icon className={'fill-current text-gray-400 animate-spin self-center my-auto ' + className}/>;

export default Loader;