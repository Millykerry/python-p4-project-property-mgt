import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Properties from "./pages/Properties"
import Tenants from "./pages/Tenants"

function App(){

return(

<BrowserRouter>

<Navbar/>

<div className="container mt-4">

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/properties" element={<Properties/>}/>
<Route path="/tenants" element={<Tenants/>}/>

</Routes>

</div>

</BrowserRouter>

)

}

export default App