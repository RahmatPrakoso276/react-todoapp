import { Link, Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/belajar">Belajar</Link>
        <Link to="/Props">Props</Link>
        <Link to="/Props2">Props2</Link>
        <Link to="/Index">indexes</Link>
        <Link to="/Hooks1">Hooks1</Link>
        <Link to="/EventHandler">Eventhandler</Link>
      </nav>
      <Outlet />
    </>
  );
}
