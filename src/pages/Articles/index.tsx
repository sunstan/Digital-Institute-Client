import {environment} from '../../core/environments/environment';
import Loader from '../../components/Loader';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ArticlesModel} from '../../core/models/articles.model';
import Section from '../../containers/Section';
import Break from '../../components/Break';
import Items from './Items';

const Articles = (): JSX.Element => {

    const [page, setPage] = useState<ArticlesModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/articles-page')
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, []);

    if (!page) return <Loader/>;

    return (
        <>
            <Section section={page.head}/>
            <Break/>
            <Items/>
            <Break/>
        </>
    );
};

export default Articles;