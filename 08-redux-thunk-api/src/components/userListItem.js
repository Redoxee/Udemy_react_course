import {GoTrashcan} from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import useThunk from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import { Fragment } from 'react';
import AlbumList from './AlbumList';

function UserListItem({user}) {
    const [isDeleting, errorDeleting, doDeleteUser] = useThunk(deleteUser);

    const handleDeleteClick = ()=> {
        doDeleteUser(user);
    }

    const header = (
        <Fragment>
            <Button loading={isDeleting} onClick={handleDeleteClick} danger className='mr-3'><GoTrashcan/></Button>
            {errorDeleting && <div>Error deleting user </div>}
            {user.name}
        </Fragment>
    );

    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user} />
        </ExpandablePanel>
    );
}

export default UserListItem;