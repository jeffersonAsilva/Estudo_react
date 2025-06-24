import { Link } from "react-router-dom"
import styles from "./Card.module.css"


function Card(props) {
    return(
        <section className={styles.card}>
            <Link to={`/watch/${props.id}`} >
            <img src={`https://img.youtube.com/vi/${props.id}/mqdefault.jpg`} alt="capa"/>
           
            </Link>
        </section>
    )
}

export default Card