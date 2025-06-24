import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Page404.module.css"
import erro404 from "./erro404.jpg"
function Page404() {
    return(
        <>
        <Header/>
        <section className={styles.container}>

            <h2>ops...Página não localizada.</h2>
            <img src={erro404} alt="logo página não localizada"/>
        </section>
        <Footer/>
        </>
    )
}

export default Page404