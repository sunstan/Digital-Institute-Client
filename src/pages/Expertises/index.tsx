import {environment} from '../../core/environments/environment';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import {ExpertiseModel, ExpertisesModel} from '../../core/models/expertises.model';
import Section from '../../containers/Section';
import Container from '../../components/Container';
import Break from '../../components/Break';
import Grid from '../../components/Grid';
import Card from './Card/index.model';

const Expertises = (): JSX.Element => {

    const [page, setPage] = useState<ExpertisesModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/expertises-page')
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, []);

    if (!page) return <Loader/>;

    return (
        <>
            <Section section={page.head}/>
            <Container>
                <Break/>
                <Grid>
                    {page.items.map((expertise: ExpertiseModel) => <Card expertise={expertise} key={expertise.id}/>)}
                </Grid>
                <Break/>
            </Container>
        </>
    );
};

export default Expertises;