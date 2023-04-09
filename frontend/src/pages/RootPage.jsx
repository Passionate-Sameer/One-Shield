import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/navigation/Footer";
import Header from "../components/organisms/navigation/Header";


function Root() {
    return (
        <>
          <Header/>
            <Outlet/>
          <Footer/>
        </>
    )
  }

  export default Root;