import {createContext, useState} from 'react';

const FavesContext = createContext({
    faves: [],
    totalFaves: 0,
    addFave: (faveMeetUp) => {},
    removeFav: (meetUpId) => {},
    isFave: (meetUpId) => {}
});

export function FavesContextProvider(props) {
    const [userFaves, setUserFaves] = useState([]);

    function addFaveHandler(faveMeetUp) {
        setUserFaves((prevUserFaves) => {
            return prevUserFaves.concat(faveMeetUp);
        });
    }

    function removeFaveHandler(meetUpId){
        setUserFaves(prevUserFaves => {
            return prevUserFaves.filter(meetUp => meetUp.id !== meetUpId);
        });
    }

    function isFaveHandler(meetUpId){
        return userFaves.some(meetUp => meetUp.id === meetUpId);
    }

    const context = {
        faves: userFaves,
        totalFaves: userFaves.length,
        addFaves: addFaveHandler,
        removeFav: removeFaveHandler,
        isFave: isFaveHandler
    };

    return <FavesContext.Provider value={context}>
        {props.children}
    </FavesContext.Provider>
}

export default FavesContext;