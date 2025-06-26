import {createContext,useState,useContext} from 'react';

export const FavoritesContext=createContext()
FavoritesContext.displayName="MyFavorites";

export default function FavoritesProvider({children}){
    const [favorite,setFavorite]=useState([]);

    return(
        <FavoritesContext.Provider value={{favorite,setFavorite}}>
            
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoriteContext(){
 
    const [favorite,setFavorite]=useContext(FavoritesContext)

    function addFavorite(newFavorite){

        //verificar se o item é repetido
        const repeatedFavorite=favorite.some((item)=>item.id===newFavorite.id)

        //nova lista 
        let newList=[...favorite]

        //verificar se não tem repetido e adicionar a lista de favorito.
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }
        // se for repetido ele vai ser tirado
        newList=favorite.filter((fav)=>fav.id!== newFavorite.id)

        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }
}
