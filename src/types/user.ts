
// const FETCH_USERS = "FETCH_USERS";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}


//интерфейсы для каждого action редюсера

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS

}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}



interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

//
 export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// interface UserAction {
//     type: string,
//     payload?: any,
// }

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction;