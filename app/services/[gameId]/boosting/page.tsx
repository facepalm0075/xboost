
import "./styles.css";
import BgFix from "./BgFix";
import Image from "next/image";
import { BoostingPage } from "./svgs";
import Link from "next/link";
import Benefits from "@/app/components/Benefits";
import "@/app/components/benefits.css";
import Faqs from "@/app/components/faqs/Faqs";
import "@/app/components/faqs/styles.css";
import faqs_data from "@/public/faqs_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import { titleCase } from "@/app/components/TitleCase";
import TypeCard from "./TypeCard";

type props = {
  params: { gameId: string };
};
function page({ params }: props) {
  const gameId = titleCase(params.gameId);
  
  return (
    <>
      <BgFix />
      <div className="container">
        <div className="flex mt-10">
          <div>
            <div className="h1-icon">
              <BoostingPage />
            </div>
          </div>
          <div>
            <div className="mx-5">
              <h1>{gameId} Boosting</h1>
              <p>Best game boosting service on market</p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-left">Choose {gameId} Boosting Service</h2>
          <p>select one of our many boosting services you need</p>
        </div>
        <div>
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <div className="clear-both"></div>
        </div>
        <Benefits />

        <div style={{ marginTop: "180px" }}>
          <h2>
            FAQs About <span>{gameId} Boosting</span>
          </h2>
          <div className="mt-10 w-1/2 m-auto">
            <Faqs faqs={faqs_data.Apex} />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
