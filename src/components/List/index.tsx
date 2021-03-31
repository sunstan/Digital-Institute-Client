import {GeneralListItemModel} from '../../core/models/general.model';
import React from 'react';

interface Props {
    readonly className?: string;
    readonly items: GeneralListItemModel[];
}

const List = ({items, className}: Props): JSX.Element =>
    <div className={className}>
        {
            items?.length > 0 &&
            items.map((i: GeneralListItemModel) =>
                <div key={i.id} className='text-sm text-gray-900 font-medium py-1'>{i.title}</div>)
        }
    </div>;

export default List;