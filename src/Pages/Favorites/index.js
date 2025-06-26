import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Favorites(params) {
    
    return(
        <>
        <Header/>
        <Container>
           
            <section className={styles.favorites}>
                 <h2>Meus Favoritos</h2>
                lista de favoritos...
            </section>
        </Container>

        <Footer/>
        
        
        </>
    )
}


export default Favorites;