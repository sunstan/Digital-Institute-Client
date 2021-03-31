import ReactParticles from 'react-tsparticles';
import Params from './particles.json';

interface Props {
    readonly style?: any;
    readonly className?: string;
}

const Particles = ({className, style}: Props): JSX.Element =>
    <ReactParticles className={'w-full h-full ' + className} options={Params as any} style={style}/>

export default Particles;