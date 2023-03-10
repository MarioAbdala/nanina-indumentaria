import { Navbar, ReturnButton } from "../components";
import { useShowButton } from "../hooks";

export const MainLayout = () => {
    const { showButton } = useShowButton();
    return (
    <>
        {showButton && (<ReturnButton />)}
        <Navbar />
    </>
    )
};