import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { listed_notification } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

function Sidebar(props) {

    const dispatch = useDispatch();
    const getNotification = useSelector(state => state.notification);

    useEffect(() => {
        dispatchNotification();
    }, []);

    const dispatchNotification=()=> {
        dispatch(ListNotification(listed_notification));
    }

    const routeTo=(location, data)=> {
        let lists = getNotification.data.sideList;
        for(let i=0; i<lists.length; i++) {
            console.log("List: ", lists[i]);
            lists[i].active = false;
            console.log("Data: ", data);
            if(lists[i].name === data.name) {
                lists[i].active = true;
            }
        }
        props.history.push(location);
    }

    const getSidebar=()=> {
        if(getNotification.hasOwnProperty('data')) {
            let lists = getNotification.data.sideList;
            let sidebar = lists.map((data, index)=> {
                return(
                    <li key={index} className={data.active ? "list active": "list"} onClick={()=>routeTo(data.route, data)}>
                        <i className={data.icon}></i>{data.name}
                    </li>
                )
            })
            return sidebar;
        }       
    }

    return(
        <ul>
            {getSidebar()}
        </ul>
    )

}

export default withRouter(Sidebar);