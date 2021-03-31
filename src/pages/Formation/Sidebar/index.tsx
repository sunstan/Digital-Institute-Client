import {FormationSidebarModel} from '../../../core/models/formations.model';
import {GeneralRichListItemModel} from '../../../core/models/general.model';

interface Props {
    readonly sidebar: FormationSidebarModel;
}

const Sidebar = ({sidebar}: Props): JSX.Element => {
    return (
        <div className='flex flex-col gap-6 border-t-2 border-orange-500 bg-white shadow p-6 lg:p-10 group rounded'>
            {sidebar.items.map((item: GeneralRichListItemModel) =>
                <div key={item.id}>
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                </div>
            )}
        </div>
    );
};

export default Sidebar;