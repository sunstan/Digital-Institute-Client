import {environment} from '../../../core/environments/environment';
import {ArticleModel} from '../../../core/models/articles.model';
import Container from '../../../components/Container';
import Loader from '../../../components/Loader';
import Button from '../../../components/Button';
import Grid from '../../../components/Grid';
import {useEffect, useState} from 'react';
import Card from '../Card';
import axios from 'axios';

const LIMIT = 12;

const Items = (): JSX.Element => {

    const [total, setTotal] = useState(0);
    const [pending, setPending] = useState(true);
    const [articles, setArticles] = useState<ArticleModel[]>([])

    useEffect(() => {
        axios
            .get(environment.host_api + '/articles/count')
            .then(({data}) => setTotal(data))
            .catch(console.error);

        axios
            .get(environment.host_api + '/articles?_sort=id:DESC&_limit=' + LIMIT)
            .then(({data}) => setArticles(data))
            .catch(console.error)
            .finally(() => setPending(false));
    }, [])

    const showMore = () => {
        setPending(true);
        axios
            .get(environment.host_api + '/articles?_sort=id:DESC&_limit=' + LIMIT + '&_start=' + articles.length)
            .then(({data}) => setArticles(articles => [...articles, ...data]))
            .catch(console.error)
            .finally(() => setPending(false));
    }

    return (
        <Container>
            <Grid children={articles.map((article: ArticleModel) => <Card key={article.id} article={article}/>)}/>
            {pending && <Loader className='mx-auto mt-6 md:mt-10'/>}
            {!pending && total > articles.length &&
            <Button secondary onClick={showMore} className='w-full block mx-auto mt-6 md:w-auto md:mt-10' children="Afficher plus d'actualité"/>}
        </Container>
    );
};

export default Items;