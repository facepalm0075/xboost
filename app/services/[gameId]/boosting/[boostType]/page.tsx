import { titleCase } from "@/app/components/TitleCase";
import "./styles.css";
import DesiredRank from "./DesiredRank";
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
import Checkout from "./Checkout";
import OrderDetails from "./OrderDetails";


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
          </div>
          <div style={{ width: "30%" }} className="mt-7 relative">
            <Checkout gameN="Apex"/>
          </div>
        </div>
      </StoreProvider>
      <div className="flex">
        <div className="mr-3 pr-4 w-3/4">
          <OrderDetails/>
        </div>
        <div style={{ width: "30%" }}></div>
      </div>
    </>
  );
}

export default page;
