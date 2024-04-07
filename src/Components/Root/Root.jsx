import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponents/NavBar/NavBar";
import Footer from "../SharedComponents/Footer/Footer";
const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;