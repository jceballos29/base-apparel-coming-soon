import "./App.css";
import ComingSoon from "./components/ComingSoon";
import ComingSoonMobile from "./components/ComingSoonMobile";

function App() {
    const mobile = window.innerWidth <= 1024;

    return (
        <main className="App">
            {mobile ? <ComingSoonMobile /> : <ComingSoon />}
        </main>
    );
}

export default App;
