import localData from '../Data/Data.json';

// Constants
import { listed_notification, past_session_notification } from '../constants/constants';

export const ListNotification=(notification_type)=> {
    if(notification_type === past_session_notification) {
        let pastData = JSON.parse(JSON.stringify(localData.notification));
        let cards = pastData.cards;
        for(let i=0; i<cards.length; i++) {
            console.log("Cards: ", cards[i])
            let btns = cards[i].btns;
            for(let j=0; j<btns.length; j++) {
                btns[j].flag = !btns[j].flag
            }
        }
        console.log("PastData: ", pastData);
        return {
            type: notification_type,
            payload: pastData,
        }
    }
    else {
        return {
            type: notification_type,
            payload: localData.notification,
        }
    }
}

