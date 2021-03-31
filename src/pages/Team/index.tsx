import {TeamModel, TeamPersonModel} from '../../core/models/team.model';
import {environment} from '../../core/environments/environment';
import Container from '../../components/Container';
import Section from '../../containers/Section';
import Loader from '../../components/Loader';
import Break from '../../components/Break';
import {useEffect, useState} from 'react';
import Grid from '../../components/Grid';
import Card from './Card';
import axios from 'axios';

const Team = (): JSX.Element => {

    const [page, setPage] = useState<TeamModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/team-page')
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
                    {page.persons.map((person: TeamPersonModel) => <Card person={person} key={person.id}/>)}
                </Grid>
                <Break/>
            </Container>
        </>
    );
};

export default Team;