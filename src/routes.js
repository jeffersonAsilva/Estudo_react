
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Page404 from "./Pages/Page404";
import Search from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";

function AppRoutes() {
    
    return(
        <BrowserRouter>
        <FavoritesProvider>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/watch/:id" element={<Watch/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                 <Route path="/favorites" element={<Favorites/>}></Route>
                  <Route path="*" element={<Page404/>}></Route>
                
                
            </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes