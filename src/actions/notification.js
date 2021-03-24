import localData from '../Data/Data.json';

// Constants
import { listed_notification, trainer_user_type } from '../constants/constants';

export const ListNotification=(type, userType)=> {
    if(type == "past") {
        let cards;
        let data = JSON.parse(JSON.stringify(localData.notification));
        if(userType === trainer_user_type) {
            cards = data.cards;
            for(let i=0; i<cards.length; i++) {
                cards[i].golive = cards[i].past;
            }
        }
        else {
            cards = data.userCards;
            console.log("Cards: ", data);
            let btns = data.btns;
            for(let i=0; i<btns.length; i++) {
                if(!btns[i].sessionType) {
                    btns[i].flag = false;
                }
            }
            for(let i=0; i<cards.length; i++) {
                cards[i].golive = cards[i].past;
            }
            data.cards = data.userCards;
        }
        return {
            type: listed_notification,
            payload: data,
        }
    }
    else {
        let data = JSON.parse(JSON.stringify(localData.notification));
        console.log("Type: ", userType);
        if(userType != trainer_user_type) {
            let btns = data.btns;
            console.log("Need to update btn", btns);
            for(let i=0; i<btns.length; i++) {
                if(!btns[i].sessionType) {
                    btns[i].flag = false;
                }
            }
        }
        console.log("Data: ", data.btns);
        return {
            type: listed_notification,
            payload: data,
        }
    }
}

