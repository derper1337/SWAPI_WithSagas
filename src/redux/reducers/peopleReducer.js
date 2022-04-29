export const LOAD_USERS="LOAD_USERS";
export const LOAD_USERS_FINISHED="LOAD_USERS_FINISHED";

const init={
    page: 1,
    search:"",
    loading:false,
    data: {},
}

export default function peopleReducer(state = init, action){
    switch (action.type){
        case LOAD_USERS:{
            const {page, search} = action.payload
            return{
                ...state,
                page,
                search,
                loading: true,
            }
        }
        case LOAD_USERS_FINISHED:{
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        default:
            return state;
    }
}

