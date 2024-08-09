import NavBar from "@/app/NavBar";
import GameNavbar from "./GameNavbar";
import "./styles.css";
import Script from "next/script";
type props = {
  params: { gameId: string };
  children: Readonly<{ children: React.ReactNode }>;
};

export default function Layout({ children, params }: props) {
  return (
    <>
      <GameNavbar params={params} />
      {children}
    </>
  );
}
