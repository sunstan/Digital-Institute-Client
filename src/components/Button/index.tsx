import {Link} from 'react-router-dom';
import {ReactNode} from 'react';

interface Props {
    readonly sm?: boolean;
    readonly link?: string;
    readonly white?: boolean;
    readonly onClick?: () => any;
    readonly className?: string;
    readonly secondary?: boolean;
    readonly disabled?: boolean;
    readonly children: ReactNode;
}

const Button = ({sm, link, className, white, secondary, disabled, onClick, children}: Props): JSX.Element => {

    const classes = ['flex items-center w-auto justify-center transition-colors font-medium rounded disabled:bg-gray-200'];

    classes.push(className);

    classes.push(secondary
        ? white
            ? 'border border-white text-white bg-transparent opacity-50 hover:opacity-100'
            : 'border border-gray-200 text-gray-400 bg-transparent hover:text-blue-500 hover:border-blue-500'
        : white
            ? 'bg-white text-gray-400 hover:bg-orange-500'
            : 'bg-orange-500 text-white hover:bg-orange-600');

    classes.push(sm
        ? ' h-10 px-6'
        : ' h-14 px-8');

    return link
        ? <Link to={link} onClick={onClick} className={classes.join(' ')} children={children}/>
        : <button onClick={onClick} disabled={disabled} className={classes.join(' ')} children={children}/>;
};

export default Button;