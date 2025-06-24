import styles from "./Category.module.css"
import videos from "../../json/videos.json"

export const categories=[
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia Meteorologia Vegetação",
    "Geologia e Hidrografia"
]

export function filterCategory(id) {
    
        return  videos.filter(video=>video.category===categories[id])
        }

function Category(props) {
    
    return (
        <section className={styles.category}>
         <h2>{props.category}</h2>
       <div>
        {props.children}
       </div>
       </section>
    )
}

export default Category;