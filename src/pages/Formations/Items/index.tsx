import {useEffect, useState} from 'react';
import {FormationModel} from '../../../core/models/formations.model';
import Loader from '../../../components/Loader';
import axios from 'axios';
import {environment} from '../../../core/environments/environment';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import Card from '../Card';

const Items = (): JSX.Element => {

    const [pending, setPending] = useState(true);
    const [formations, setFormations] = useState<FormationModel[]>([])

    useEffect(() => {
        axios
            .get(environment.host_api + '/formations')
            .then(({data}) => setFormations(data))
            .catch(console.error)
            .finally(() => setPending(false));
    }, [])

    if (pending) return <Loader/>;

    return (
        <Container>
            <Grid children={formations.map((formation: FormationModel) => <Card key={formation.id} formation={formation}/>)}/>
        </Container>
    );
};

export default Items;