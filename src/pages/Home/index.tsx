import {GeneralSectionModel} from '../../core/models/general.model';
import {environment} from '../../core/environments/environment';
import {HomeModel} from '../../core/models/home.model';
import Section from '../../containers/Section';
import Loader from '../../components/Loader';
import {useEffect, useState} from 'react';
import Testimonials from './Testimonials';
import Numbers from './Numbers';
import Banner from './Banner';
import axios from 'axios';

const Home = (): JSX.Element => {

    const [page, setPage] = useState<HomeModel>(null);

    useEffect(() => {
        axios
            .get(environment.host_api + '/home-page')
            .then(({data}) => setPage(data))
            .catch(console.error);
    }, [])

    if (!page) return <Loader/>;

    return (
        <>
            <Banner banner={page.banner}/>
            {page.sections.map((section: GeneralSectionModel) => <Section section={section} key={section.id}/>)}
            <Testimonials testimonials={page.testimonials}/>
            <Numbers numbers={page.numbers}/>
        </>
    );
};

export default Home;