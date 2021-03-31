import {ConfigurationState} from '../../core/store/configuration/configuration.selectors';
import Image from '../../components/Image';
import Container from '../../components/Container';
import Button from '../../components/Button';
import {useSelector} from 'react-redux';
import React from 'react';

const NotFound = (): JSX.Element => {

    const configurationState = useSelector(ConfigurationState);

    return (
        <Container className='py-10 self-center my-auto flex flex-col items-center gap-10  max-w-3xl'>
            <Image media={configurationState.notFound.image}/>
            <h3 className='text-center' children={configurationState.notFound.title}/>
            <p className='text-center' children={configurationState.notFound.content}/>
            <Button link={configurationState.notFound.link} children={configurationState.notFound.action}/>
        </Container>
    );
};

export default NotFound;