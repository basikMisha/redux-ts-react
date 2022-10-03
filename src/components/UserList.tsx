import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useActios } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";


export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    // const dispatch: Dispatch<any> = useDispatch();
    const {fetchUsers} = useActios();

    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers()
    }, []);

    if(loading) {
        return <h1>Loading users...</h1>
    }
    if(error) {
        return <h1>Error: {error}</h1>
    }


    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>    
            )}
        </div>
    )
};

export default UserList;