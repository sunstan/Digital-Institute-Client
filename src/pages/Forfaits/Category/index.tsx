import {ForfaitModel, ForfaitsCategoryModel, ForfaitsPlanModel} from '../../../core/models/forfaits.model';
import Container from '../../../components/Container';
import Break from '../../../components/Break';
import Grid from '../../../components/Grid';
import Card from '../Card';

interface Props {
    readonly selectedPlan: ForfaitsPlanModel;
    readonly category: ForfaitsCategoryModel;
}

const Category = ({category, selectedPlan}: Props): JSX.Element => {
    return (
        <Container>
            <Break/>
            <h3>{category.title}</h3>
            <Break sm/>
            <Grid>
                {category.items.map((forfait: ForfaitModel) => <Card forfait={forfait} key={forfait.id} selectedPlan={selectedPlan}/>)}
            </Grid>
        </Container>
    );
};

export default Category;