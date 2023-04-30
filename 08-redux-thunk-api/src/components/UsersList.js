import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Skeleton from './Skeleton';
import Button from './Button';
import useThunk from '../hooks/useThunk';
import UserListItem from './userListItem';

import { 
    fetchUsers,
    addUser 
} from '../store';

function UsersList(){

    const [isLoadingUser, loadingUserError, fetchUserThunk] = useThunk(fetchUsers);
    useEffect(()=>fetchUserThunk(), [fetchUserThunk]);

    const [isAddingUser, errorAddingUser, addUserThunk] = useThunk(addUser);

    const {data} = useSelector((state=>{
        return state.users;
    }))

    let content;
    if(isLoadingUser)
    {
        content = <Skeleton times={3} className="h-10 w-full"/>
    }
    else if(loadingUserError){
        content = <div><div>Error fetching data...</div> {loadingUserError.message}</div>
    }
    else {
        content = data.map((user)=>{
            return <UserListItem user={user} key={user.id}/>
        });
    }
    
    const handleAddUser = ()=>{
        if (isAddingUser) {
            return;
        }

        addUserThunk();
    };

    return <div>
        <div className='flex flex-rox justify-between m-3 items-center'>
            <h1 className='m-2 text-xl'>Users</h1>
            {
                <Button loading={isAddingUser} onClick={handleAddUser} primary>+ Add User</Button>
            }

            {errorAddingUser && 'Adding user error...'}
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default UsersList;