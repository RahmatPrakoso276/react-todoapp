
import { GlobalContext, User } from "./context";
import {router} from './routers'
import { RouterProvider } from "react-router-dom";
export default function App() {
  //deklarasi state hooks?
  const user: User = {
    username: "Rahmat Prakoso",
    age: 20,
  };
  return (
    <div>
      {/* menggunakan usecontext */}
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}
