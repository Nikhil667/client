import useLocalStorage from "../CustomHooks/useLocalStorage";
import Login from "./Login";
import DashBoard from "./DashBoard";

function App() {

  const [id, setId] = useLocalStorage('id')

  return (
      id ? <DashBoard id={id} /> : <Login onIdSubmit={setId}/> 
  );
}

export default App;
