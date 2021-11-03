import { useContext } from 'react';
import {Link} from 'react-router-dom';

import styles from '../../styles/layout/MainNav.module.css';
import FavesContext from '../../store/favorites-context';

function MainNav(){
    const favesCtx = useContext(FavesContext);

    return <header className={styles.header}>
        <div className={styles.logo}>Meet Ups Ya Bantwana</div>
        <nav>
            <ul>
                <li ><Link to='/'>All Meetups</Link></li>
                <li ><Link to='/new-mu'>New Meetups</Link></li>
                <li ><Link to='/favs'>Faves 
                <span className={styles.badge}>{favesCtx.totalFaves}</span>
                </Link></li>
            </ul>
        </nav>
    </header>;
}

export default MainNav;