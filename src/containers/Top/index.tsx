import {ConfigurationState} from '../../core/store/configuration/configuration.selectors';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as Youtube} from '../../assets/icons/youtube.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import Container from '../../components/Container';
import {useSelector} from 'react-redux';
import React from 'react';

const Top = (): JSX.Element => {

    const configurationState = useSelector(ConfigurationState);

    return (
        <div className='hidden lg:block relative z-20 bg-gray-50'>
            <Container className='h-12 flex items-center justify-between'>

                <div className='flex items-center gap-10'>

                    {
                        configurationState.address &&
                        <div className='flex items-center gap-2'>
                            <div className='material-icons text-xl text-orange-500'>location_on</div>
                            <div className='text-xs font-medium text-gray-500'>{configurationState.address}</div>
                        </div>
                    }

                    {
                        configurationState.phone &&
                        <div className='flex items-center gap-2'>
                            <div className='material-icons text-xl text-orange-500'>phone</div>
                            <div className='text-xs font-medium text-gray-500'>{configurationState.phone}</div>
                        </div>
                    }

                </div>

                <div className='flex items-center gap-2'>
                    {
                        configurationState.socials &&
                        Object.entries(configurationState.socials).map(([key, value], i) =>
                            value &&
                            <a key={i} href={value} target='_blank' rel="noreferrer"
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
        </div>
    );
};

export default Top;