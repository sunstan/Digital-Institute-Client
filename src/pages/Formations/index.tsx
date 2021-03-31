import {FormationsModel} from '../../core/models/formations.model';
import {environment} from '../../core/environments/environment';
import Section from '../../containers/Section';
import Loader from '../../components/Loader';
import {useEffect, useState} from 'react';
import Items from './Items';
import axios from 'axios';
import Break from '../../components/Break';

const Formations = (): JSX.Element => {

    const [page, setPage] = useState<FormationsModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/formations-page')
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

export default Formations;