import Messenger from "./Components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const clientId =
    "33095417932-51vufndabigdin99qt42fjcbhn6v5j9q.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
