import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="d-flex vh-100 bg-light">
      <SideBar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <main className="flex-grow-1 overflow-auto p-4">
          <Outlet /> {/* This renders nested routes! */}
        </main>
      </div>
    </div>
  );
}
