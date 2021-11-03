import {useContext} from 'react';

import FavesContext from '../store/favorites-context';
import MeetUpList from '../components/meetups/MeetUpList';

function FavoritesPage(){
    const favesCtx = useContext(FavesContext);

    let content;

    if (favesCtx.totalFaves === 0) {
        content = <p>You have no faves yet. Add some!</p>
    }
    else{
        content = <MeetUpList meetups={favesCtx.faves} />
    }

    return <section>
        <h1>My Faves</h1>
        {content}
    </section>;
}

 export default FavoritesPage;