import useLocalStorage from "../CustomHooks/useLocalStorage";
import Login from "./Login";
import DashBoard from "./DashBoard";
import { ContactProvider } from "../Contexts/ContactProvider";
import { ConversationsProvider } from "../Contexts/ConversationsProvider";

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashBoard = (
    <ContactProvider>
      <ConversationsProvider>
        <DashBoard id={id}/>
      </ConversationsProvider>
    </ContactProvider>
  )

  return (
      id ? dashBoard : <Login onIdSubmit={setId}/> 
  );
}

export default App;
