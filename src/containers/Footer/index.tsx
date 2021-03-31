import {ConfigurationState} from '../../core/store/configuration/configuration.selectors';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as Youtube} from '../../assets/icons/youtube.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {environment} from '../../core/environments/environment';
import Container from '../../components/Container';
import Break from '../../components/Break';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';


const Footer = (): JSX.Element => {

    const configurationState = useSelector(ConfigurationState);

    return (
        <div className='bg-white border-t border-gray-200 relative z-10'>

            <Break sm/>

            <Container className='flex flex-col justify-center gap-4 md:flex-row items-center md:justify-between'>

                <Link to='/'>
                    <ReactSVG beforeInjection={(svg) => svg.classList.add('w-44')}
                              className='object-cover w-full h-full fill-current text-gray-400'
                              src={environment.host_api + configurationState.logo?.url}/>
                </Link>

                <div className='text-sm text-gray-400'>{configurationState.legals}</div>

                <div className='flex items-center gap-2'>
                    {
                        configurationState.socials &&
                        Object.entries(configurationState.socials).map(([key, value], i) =>
                            value &&
                            <a key={i} href={value} target='_blank' rel='noreferrer'
                               className='text-gray-300 hover:text-blue-500 transition-colors'>

                                {key === 'facebook' && <Facebook className='w-8 h-8 fill-current'/>}
                                {key === 'linkedin' && <Linkedin className='w-8 h-8 fill-current'/>}
                                {key === 'instagram' && <Instagram className='w-8 h-8 fill-current'/>}
                                {key === 'youtube' && <Youtube className='w-8 h-8 fill-current'/>}
                                {key === 'twitter' && <Twitter className='w-8 h-8 fill-current'/>}
                            </a>
                        )
                    }
                </div>

            </Container>

            <Break sm/>
        </div>
    );
};

export default Footer;