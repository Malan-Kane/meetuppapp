import {useContext} from 'react';

import Card from '../ui/Card';
import styles from '../../styles/meetups/MeetUpItem.module.css';
import FavesContext from '../../store/favorites-context';

function MeetUpItem(props){
    const favesCtx = useContext(FavesContext);
    const isFave = favesCtx.isFave(props.id);

    function toggleFaveStatusBar(){
        if (isFave){
            favesCtx.removeFav(props.id);
        }
        else{
            favesCtx.addFaves({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

    return <li className={styles.item}>
        <Card>
            <div className={styles.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.content }>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={toggleFaveStatusBar}>{isFave ? 'Remove from Fave' : 'Fave'}</button>
            </div>
        </Card>
    </li>
}

export default MeetUpItem;