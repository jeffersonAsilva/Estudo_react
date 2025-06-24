import styles from "./Banner.module.css"

function Banner(props) {
    return(
        <div 
        className={styles.banner}
        style={{backgroundImage:`url('/images/${props.img}.jpg')`}}
        >

        </div>
    )
}


export default Banner