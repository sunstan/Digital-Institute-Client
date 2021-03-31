import {environment} from '../../core/environments/environment';
import {ContactModel} from '../../core/models/contact.model';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import Break from '../../components/Break';
import {useEffect, useState} from 'react';
import Card from './Card';
import Form from './Form';
import axios from 'axios';
import Map from './Map';

const Contact = (): JSX.Element => {

    const [page, setPage] = useState<ContactModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/contact-page')
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, []);

    if (!page) return <Loader/>;

    return (
        <>
            <Map lat={page.lat} lng={page.lng} gray={page.gray}/>
            <Container>
                <Break/>
                <div className='flex flex-col md:flex-row md:justify-between gap-6'>
                    <Card {...page}/>
                    <Form/>
                </div>
                <Break/>
            </Container>
        </>
    );
};

export default Contact;