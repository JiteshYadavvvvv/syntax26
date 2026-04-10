import { Home } from "./pages/Home";
import Crosshair from "./components/ui/Crosshair";
import ClickSpark from "./components/ui/ClickSpark";

function App() {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={450}
    >
      <Crosshair color="#ffffff" />
      <Home />
    </ClickSpark>
  );
}

export default App;
