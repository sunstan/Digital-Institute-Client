import {FormationModel} from '../../core/models/formations.model';
import {environment} from '../../core/environments/environment';
import Container from '../../components/Container';
import React, {useEffect, useState} from 'react';
import Markdown from '../../components/Markdown';
import Loader from '../../components/Loader';
import Break from '../../components/Break';
import Badge from '../../components/Badge';
import Image from '../../components/Image';
import {useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';

const Formation = (): JSX.Element => {

    const {id} = useParams<any>();
    const [page, setPage] = useState<FormationModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/formations/' + id)
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, [id]);

    if (!page) return <Loader/>;

    return (
        <>
            <Container className='flex flex-col items-center gap-4'>
                <Break/>
                <Badge children={page.badge}/>
                <h1 className='text-center max-w-4xl mx-auto'>{page.title}</h1>
                <Break/>
            </Container>
            <Container>
                <div className='relative flex aspect-w-16 aspect-h-7'>
                    <Image media={page.image} className='object-cover w-full h-full md:rounded'/>
                </div>
            </Container>
            <Container>
                <Break/>
                <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-10'>
                    <div className='flex flex-col items-stretch lg:w-2/3'>
                        <Markdown markdown={page.content}/>
                    </div>
                    <div className='lg:w-1/3'>
                        <Sidebar sidebar={page.sidebar}/>
                    </div>
                </div>
                <Break/>
            </Container>
        </>
    );
};

export default Formation;