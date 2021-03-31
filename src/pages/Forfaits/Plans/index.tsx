import {ForfaitsPlanModel} from '../../../core/models/forfaits.model';
import Container from '../../../components/Container';

interface Props {
    readonly plans: ForfaitsPlanModel[];
    readonly selectedPlan: ForfaitsPlanModel;
    readonly setSelectedPlan: (plan: ForfaitsPlanModel) => void;
}

const Plans = ({plans, selectedPlan, setSelectedPlan}: Props): JSX.Element => {
    return (
        <div className='sticky z-40 top-14 h-14 flex items-center shadow-sm bg-gray-50 lg:h-20 lg:top-20'>
            <Container className='flex justify-between md:justify-start md:gap-10'>
                {plans.map((plan: ForfaitsPlanModel) =>
                    <div
                        key={plan.planId}
                        onClick={() => setSelectedPlan(plan)}
                        className={'font-semibold cursor-pointer ' + (plan.planId === selectedPlan.planId ? 'text-orange-500' : 'text-gray-400')}>
                        {plan.title}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Plans;