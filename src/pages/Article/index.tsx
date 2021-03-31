import {environment} from '../../core/environments/environment';
import {ArticleModel} from '../../core/models/articles.model';
import Container from '../../components/Container';
import React, {useEffect, useState} from 'react';
import Markdown from '../../components/Markdown';
import Loader from '../../components/Loader';
import Break from '../../components/Break';
import Image from '../../components/Image';
import {useParams} from 'react-router-dom';
import Badge from '../../components/Badge';
import Share from './Share';
import dayjs from 'dayjs';
import axios from 'axios';

const Article = (): JSX.Element => {

    const {id} = useParams<any>();
    const url = window.location.href;
    const [page, setPage] = useState<ArticleModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/articles/' + id)
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, [id]);

    if (!page) return <Loader/>;

    return (
        <>
            <Container className='flex flex-col items-center gap-4'>
                <Break/>
                <Badge children={dayjs(page.published_at).locale('fr').format('DD MMMM YYYY')}/>
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
                <Markdown markdown={page.content}/>
                <Break sm/>
                <Share url={url} title={page.title} summary={page.summary} image={page.image}/>
                <Break/>
            </Container>
        </>
    );
};

export default Article;