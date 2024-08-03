import { titleCase } from "@/app/components/TitleCase";
import "./styles.css";
import { ArrowBlue } from "../svgs";
import Image from "next/image";
import DesiredRank from "./DesiredRank";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import faqs_data from "@/public/faqs_data.json";
import Faqs from "@/app/components/faqs/Faqs";
import { OptionToggle } from "./OptionToggle";
import StoreProvider from "@/app/redux/Provider";
import DesiredWins from "./DesiredWins";
import selectRankData from "@/public/orders_data.json";
import DesiredWinsUnranked from "./DesiredWinsUnranked";
import OptionDropdown from "./OptionDropdown";
import prisma from "@/src/lib/db";
import {
  boostingOrderJson,
  extraOptionsType,
  options2Type,
} from "@/app/components/types/Types";

const data = selectRankData.games[0].orders.boosting[0].content.data;
const data2 = [
  {
    title: "Server",
    items: ["africa", "europe", "usa", "me"],
  },
  {
    title: "RR Gain",
    items: ["10+ RR", "20+ RR", "30+ RR", "45+ RR"],
  },
  {
    title: "RR Amount",
    items: ["0-20 RR", "21-40 RR", "41-60 RR", "61-80 RR", "81-99 RR"],
  },
  {
    title: "Platform",
    items: ["PC", "XBOX", "Play Station"],
  },
];
type props = {
  params: { gameId: string; boostType: string };
};

async function page({ params }: props) {
  // const games = await prisma.boostingOrders.create({
  //   data: {
  //     name:"unrank-wins",
  //     orderedInId:"28920728-bf2a-4b77-b970-92b039843de5",
  //     Data:{"max-wins":20},
  //     details:"Challenger player will Boost you to your desired unrank wins.",
  //     extraOptions:data["extra-options"],
  //     extraOptions2:data2,
  //     img:"",
  //     pageImg:"",
  //   },
  // });
  // console.log(games);

  const dbitems = await prisma.boostingOrders.findFirst({
    where: {
      orderedIn: {
        game: {
          name: params.gameId,
        },
      },
      name: params.boostType,
    },
  });
  let result = [dbitems];
  let res = (result = result.filter((item3) => item3 != null));
  if (res.length === 0) {
    return (
      <>
        <div>bakhtim</div>
      </>
    );
  }
  const mainRes = res[0];
  const mainResData = res[0].Data as boostingOrderJson;
  const mainResEP = res[0].extraOptions as extraOptionsType;
  const mainResO2 = res[0].extraOptions2 as options2Type;
  return (
    <>
      <StoreProvider>
        <div className="gameType-main flex">
          <div className="mt-7 mr-3 pr-4 w-3/4">
            {mainRes.name === "rank-boost" ? (
              <>
                <DesiredRank gameN="Apex" data={mainResData.ranksData} />
                <div className="gameTypeSpace"></div>
              </>
            ) : (
              ""
            )}
            {mainRes.name === "rank-wins" ? (
              <>
                <DesiredWins gameN="Apex" data={mainResData.ranksData} />
                <div className="gameTypeSpace"></div>
              </>
            ) : (
              ""
            )}
            {mainRes.name === "unrank-wins" ? (
              <>
                <DesiredWinsUnranked gameN="Apex" />
                <div className="gameTypeSpace"></div>
              </>
            ) : (
              ""
            )}

            <div className="gameType-cont">
              <h2>Extra Options</h2>
              <div className="">
                <div className="">
                  <OptionToggle game="Apex" data={mainResEP} />
                </div>
                <div className="mt-4">
                  <div className="gameType-base eomain">
                    <OptionDropdown gameN="Apex" data={mainResO2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="gameTypeSpace"></div>
            <div className="gameType-cont">
              <h2>FAQs</h2>
              <Faqs faqs={faqs_data.Apex} />
            </div>
          </div>
          <div style={{ width: "30%" }} className="mt-7">
            <div className="gameType-base checkout">
              <h4 className="text-center text-white text-lg mt-3 font-bold">
                Checkout
              </h4>
              <div style={{ marginBottom: "30px" }} className="det-base w-t-w">
                <Image
                  src="/ArchonRank.png"
                  alt="archon rank"
                  width={35}
                  height={45}
                  className=""
                />
                <span>Archon V</span>
                <ArrowBlue />
                <Image
                  src="/ImmortalRank.png"
                  alt="archon rank"
                  width={35}
                  height={45}
                  className=""
                />
                <span>Immortal I</span>
              </div>
              <div>
                <div className="checkoutDetails">
                  <span>Play Offline</span>
                  <span className="checkoutDetails-label">FREE</span>
                </div>
                <div className="checkoutDetails">
                  <span>Express Delivery</span>
                  <span className="checkoutDetails-label">20%</span>
                </div>
                <div className="checkoutDetails">
                  <span>Play with Booster</span>
                  <span className="checkoutDetails-label">30%</span>
                </div>
              </div>
              <div
                style={{ marginTop: "30px" }}
                className="det-base checkout-time"
              >
                <FontAwesomeIcon icon={faClock} className="t-icon" />
                <span>Completion Time :</span>
                <strong>~ 12 day, 10hrs</strong>
              </div>
              <div className="promo">
                <input
                  placeholder="Promo Code"
                  className="promo-txt"
                  type="text"
                />
                <input className="promo-btn" type="submit" value="Apply" />
              </div>
              <div className="discount">
                <div>
                  <span>Discount :</span>
                  <strong>10%</strong>
                </div>
                <div>
                  <span>Promo Code :</span>
                  <strong>15%</strong>
                </div>
              </div>
              <div className="total">
                <span>Total Price :</span>
                <div className="price">
                  <span>$250.50</span>
                  <strong>$190.99</strong>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="checkout-final">
                  <span>Checkout ($190.99)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoreProvider>
    </>
  );
}

export default page;
