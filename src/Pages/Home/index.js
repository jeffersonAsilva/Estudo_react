import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category,{filterCategory,categories} from "../../components/Category";
import Container from "../../components/Container";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {useState} from "react"


function Home() {



  return (
    <>
    <Header/>
   <Banner img="Home"/>
    <Container>
     
      {
        categories.map((category,index)=>
        <Category category={category}>

        {filterCategory(index).map((video)=><Card id={video.id} 
        key={video.id}
        />)}

        </Category>

       

       )}
       
    </Container>
    <Footer/>
    </>
  );
}

export default Home;
