import { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [openMenu, setOpenMenu] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main className="flex flex-1">
        {slug ? <Video /> : <Home />}
        <Sidebar toggle={openMenu} />
      </main>
      <Footer />
    </div>
  );
}
