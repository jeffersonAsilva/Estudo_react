
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Page404 from "./Pages/Page404";

function AppRoutes() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/watch/:id" element={<Watch/>}></Route>
                  <Route path="*" element={<Page404/>}></Route>
                
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes