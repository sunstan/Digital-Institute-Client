import {ForfaitModel, ForfaitsPlanModel, ForfaitsPriceModel} from '../../../core/models/forfaits.model';
import Button from '../../../components/Button';
import List from '../../../components/List';
import {useEffect, useState} from 'react';

interface Props {
    readonly forfait: ForfaitModel;
    readonly selectedPlan: ForfaitsPlanModel;
}

const Card = ({forfait, selectedPlan}: Props): JSX.Element => {

    const [price, setPrice] = useState<ForfaitsPriceModel>();

    useEffect(() => {
        setPrice(forfait.prices.find((price: ForfaitsPriceModel) => price.planId === selectedPlan.planId));
    }, [selectedPlan, forfait.prices])

    return (
        <div className='flex flex-col gap-6 border-t-2 border-orange-500 bg-white shadow p-6 lg:p-10 group rounded'>
            <div className='flex justify-between items-center'>
                <h4>{forfait.title}</h4>
                <h6>{selectedPlan.title}</h6>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center border-t border-b border-gray-200 py-6'>
                <div className='text-5xl font-semibold text-orange-500'>{price?.amount} €</div>
                <p>{selectedPlan.payment}</p>
            </div>
            <List items={forfait.items} className='flex-grow'/>
            <Button sm className='mt-6' link={forfait.link}>{forfait.action}</Button>
        </div>
    );
};

export default Card;