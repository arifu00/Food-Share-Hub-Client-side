import { Outlet } from "react-router-dom";
import Nav from "../Shared_Components/Nav";
import Footer from "../Shared_Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;