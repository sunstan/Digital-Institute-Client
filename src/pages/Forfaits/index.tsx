import {ForfaitsCategoryModel, ForfaitsModel, ForfaitsPlanModel} from '../../core/models/forfaits.model';
import {environment} from '../../core/environments/environment';
import Section from '../../containers/Section';
import Loader from '../../components/Loader';
import Break from '../../components/Break';
import {useEffect, useState} from 'react';
import Category from './Category';
import axios from 'axios';
import Extras from './Extras';
import Plans from './Plans';

const Forfaits = (): JSX.Element => {

    const [page, setPage] = useState<ForfaitsModel>(null);
    const [selectedPlan, setSelectedPlan] = useState<ForfaitsPlanModel>();

    useEffect(() => {
        axios
            .get(environment.host_api + '/forfaits-page')
            .then(({data}) => {
                setSelectedPlan(data.plans[0]);
                setPage(data);
            })
            .catch(console.error);
    }, []);

    if (!page) return <Loader/>;

    return (
        <>
            <Section section={page.head}/>
            <Plans plans={page.plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
            {page.categories.map((category: ForfaitsCategoryModel) => <Category selectedPlan={selectedPlan} category={category} key={category.id}/>)}
            <Break/>
            <Extras extras={page.extras}/>
        </>
    );
};

export default Forfaits;