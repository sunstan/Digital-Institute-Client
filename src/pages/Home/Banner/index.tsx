import {HomeBannerModel} from '../../../core/models/home.model';
import Container from '../../../components/Container';
import Particles from '../../../components/Particles';
import Button from '../../../components/Button';
import React, {useEffect, useState} from 'react';

interface Props {
    readonly banner: HomeBannerModel;
}

const Banner = ({banner}: Props): JSX.Element => {

    const [top, setTop] = useState<string>('0');

    useEffect(() => {
        const onScroll = () => {setTop(-(window.scrollY / 2) + 'px');};
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    })

    return (
        <div className='relative -mt-14 lg:-mt-32 h-screen flex items-center justify-center relative z-10 bg-gray-50' style={{clipPath: 'inset(0 0 0 0)'}}>
            <Container className='z-10 flex flex-col items-center'>
                <h1 className='text-center pointer-events-none'>{banner.title}</h1>
                <p className='max-w-3xl text-lg text-center mt-4 mb-10 pointer-events-none'>{banner.content}</p>
                <Button link={banner.link}>{banner.action}</Button>
            </Container>
            <div className='fixed left-0 w-full h-screen' style={{top}}>
                <Particles/>
            </div>
        </div>
    );
};

export default Banner;