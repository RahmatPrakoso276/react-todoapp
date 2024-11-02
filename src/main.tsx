import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Belajar from "./Belajar.tsx";
import Props from "./Props.tsx";
import Props2 from "./Props2.tsx";
import Indexes from "./pages/index.tsx";
import Profile from "./pages/Profile.tsx";
import Hooks1 from "./Hooks1.tsx";
import EventHandler from "./EventHandler.tsx";
// file entrypoint pertama kali diakses!

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EventHandler />
    <br />
    <Hooks1 />
    <br />

    <Profile />
    <br />
    <Belajar />
    <br />
    <Props name="Rahmat" stacks={["React", "Javascript", "python"]} />
    <br />
    <Props2 title="Belajar React" childern={<div>Props</div>} />
    <br />
    <Indexes />
    <br />
    <App />
  </StrictMode>
);
