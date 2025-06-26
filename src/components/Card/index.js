import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorito from "./favorite.png";
import iconNaoFavorito from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";


function Card(props) {
    const {favorite,addFavorite}=useFavoriteContext()
    return(
        <section className={styles.card}>
            <Link to={`/watch/${props.id}`} >
            <img src={`https://img.youtube.com/vi/${props.id}/mqdefault.jpg`} 
            alt="capa" className={styles.capa}/>
           
            </Link>
            <figure className={styles.icon}>
                <img 
                src={iconFavorito} 
                alt='icone'
                onClick={()=>addFavorite({id})}
                />
            </figure>
        </section>
    )
}

export default Card