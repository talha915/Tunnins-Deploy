// Constants
import { user_logout, upcoming_session, upcoming_client_sessions, past_sessions, agora_key, get_profile, pages } from '../constants/constants';

const initialState = {

}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_logout:
            return {
                ...state,
                logout: actions.payload
            }
        case upcoming_session:
            return {
                ...state,
                upcomingSession: actions.payload
            }
        case past_sessions:
            return {
                ...state,
                pastSession: actions.payload
            }
        case upcoming_client_sessions:
            return {
                ...state,
                upcomingSession: actions.payload
            }        
        case agora_key:
            return {
                ...state,
                agoraObj: actions.payload
            }
        case get_profile:
            return {
                ...state,
                userProfile: actions.payload
            }
        case pages:
            let pageData = JSON.parse(JSON.stringify(actions.payload));
            let parsedPage = {};
            for (let i = 0; i < pageData.length; i++) {
                if (pageData[i].title === "Terms & Conditions") {
                    parsedPage.terms = pageData[i];
                }
                if (pageData[i].title === "Privacy Policy") {
                    parsedPage.privacy = pageData[i];
                }
                if (pageData[i].title === "About Us") {
                    parsedPage.about = pageData[i];
                }
            }
            return {
                ...state,
                pagesData: parsedPage
            }
        default:
            return state;    
    }
}