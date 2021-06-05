import { trainer_user_type } from '../constants//constants';


const initialState = {
    sideBar: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case trainer_user_type:
            return {
                ...state.sideBar,
                data: actions.payload
            }
        default:
            return state;    
    }
}