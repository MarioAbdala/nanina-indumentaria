import { MainLayout } from "./layouts";
import { Navigation } from "./routes";

const App = () => {
    return (
    <>
        <Navigation>
          <MainLayout />
        </Navigation>
    </>
    )
};

export default App;