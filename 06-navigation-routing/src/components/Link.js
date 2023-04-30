import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName, ...rest }) {
    const { navigate, currentPath } = useNavigation();
    const handleClick = (event) => {
        if(event.ctrlKey || event.metaKey)
        {
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    const classes = classNames('text-blue-500', className , 
    currentPath === to && activeClassName);

    return <a className={classes} onClick={handleClick} href={to} {...rest}>{children}</a>
}

export default Link;