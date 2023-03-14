import { Footer, Navbar, ReturnButton } from "../components";
import { useShowButton } from "../hooks";
import { MainLayoutProps } from "../interfaces";
import './MainLayout.css';

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { showButton } = useShowButton();
    return (
    <>
        {showButton && (<ReturnButton />)}
        <Navbar />
        {children}
        <Footer />
    </>
    )
};