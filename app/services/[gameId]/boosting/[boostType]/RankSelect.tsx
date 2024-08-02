import Image from "next/image";
import { ToolTipEO } from "@/app/components/CostumToolTip";
import { useAppSelector } from "@/app/redux/hooks";
import { rnkDet, md, mdn } from "@/app/components/types/Types";
import { ExtraOptionsState } from "@/app/redux/Features/extraOptions/gameDetailsSlice";

type props = {
  name: string;
  type: "current" | "desired";
  data: md[];
  mmrEnabled: boolean;
  currentChanged: (item: rnkDet) => void;
  desiredChanged?: (item: rnkDet) => void;
  disables?: number;
  lastRank:boolean
  usage?: "single";
  mainNameer:ExtraOptionsState
};
export default function RankSelect({
  name,
  type,
  data,
  mmrEnabled,
  currentChanged,
  desiredChanged,
  disables,
  usage,
  mainNameer,
  lastRank
}: props) {
  const nameer = mainNameer.gameDetails;
  const maxCurrent = data.length;
  const maxRank =
    data[data.length - 1].rankNums[data[data.length - 1].rankNums.length - 1]
      .mmr;
  let maxCurrentC = 0;
  if (type == "current" && lastRank === false) {
    maxCurrentC = 1;
  }
  let rank = 0;
  let rankMain = "";
  let rankImage = "";
  let rankStar = "";
  let rankColor = "";
  let rankStars: mdn[] = [];
  nameer.map((item) => {
    if (item.gameName === name) {
      rank =
        type === "current"
          ? item.gameRanks?.currentRank?.rankNumber!
          : item.gameRanks?.desiredRank?.rankNumber!;
      if (usage) {
        rank = item.gameRankWins?.currentRank?.rankNumber!;
      }
    }
  });

  const handleChange = (event: any) => {
    starClickHandler(Number(event.target.value));
  };

  const handleChange2 = (event: any) => {
    starClickHandler(Number(event.target.value) + maxRank);
  };

  data.map((item) => {
    item.rankNums.map((item2) => {
      if (item2.mmr !== undefined) {
        if (item2.mmr <= rank) {
          rankStar = item2.content;
          rankMain = item.rankName;
          rankStars = item.rankNums;
          rankImage = item2.img;
          rankColor = item.rankColor;
        }
      }
    });
  });

  const mainClickHandler = (item: mdn[]) => {
    if (type === "current") {
      if (item[0].mmr !== undefined) {
        const mm = item[0]!.mmr!;
        currentChanged({
          rankNumber: mm,
          rankImage: rankImage,
          rankName: rankMain,
          rankStar: rankStar,
        });
      }
    } else if (type === "desired") {
      if (item[0].mmr !== undefined) {
        const mm = item[0]!.mmr!;
        desiredChanged!({
          rankNumber: mm,
          rankImage: rankImage,
          rankName: rankMain,
          rankStar: rankStar,
        });
      }
    }
  };
  const starClickHandler = (item: number) => {
    if (type === "current") {
      currentChanged({
        rankNumber: item,
        rankImage: rankImage,
        rankName: rankMain,
        rankStar: rankStar,
      });
    } else if (type === "desired") {
      desiredChanged!({
        rankNumber: item,
        rankImage: rankImage,
        rankName: rankMain,
        rankStar: rankStar,
      });
    }
  };
  return (
    <div className="gameType-base selectRank-main">
      <div
        style={{ backgroundColor: rankColor }}
        className="selectRank-BgColor"
      ></div>
      <div className="flex selectRank-head">
        <Image width={70} height={70} src={"/" + rankImage} alt="archon 5" />
        <div className="ml-4 mt-2">
          <h4>Current Rank</h4>
          <span>{rankMain + " " + rankStar}</span>
        </div>
      </div>
      <div className="m-auto border-solid border-y border-stone-700 my-3"></div>
      <div className="flex justify-center justify-items-center flex-wrap">
        {data.map((item, key) => {
          let dis = "";
          if (disables) {
            const lent = item.rankNums.length;

            if (item.rankNums[lent - 1].mmr <= disables) {
              dis = "selectRank-btn-disable";
            }
          }
          if (maxCurrentC < maxCurrent) {
            maxCurrentC++;
            return (
              <ToolTipEO key={key} title={item.rankName}>
                <div
                  className={`selectRank-btn ${dis} ${item.rankName === rankMain && "selectRank-btn-active"}`}
                  onClick={() => mainClickHandler(item.rankNums)}
                >
                  <Image
                    width={40}
                    height={40}
                    src={"/" + item.rankImg}
                    alt={item.rankImg}
                  />
                </div>
              </ToolTipEO>
            );
          }

          return "";
        })}
      </div>
      <div className="flex selectRank-num-main mt-6 justify-center">
        {rankStars.map((item, key) => {
          if (item.content === "MMR") {
            return (
              <div
                key={key}
                className="flex justify-center mt-3 selectRank-input"
              >
                <button>
                  <span
                    onClick={() => {
                      if (rank > maxRank) {
                        starClickHandler(rank - 1);
                      }
                    }}
                  >
                    -
                  </span>
                </button>
                <input
                  type="number"
                  value={rank - maxRank}
                  onChange={handleChange2}
                  min={0}
                />
                <button>
                  <span
                    onClick={() => {
                      starClickHandler(rank + 1);
                    }}
                  >
                    +
                  </span>
                </button>
              </div>
            );
          } else if (item.content === "") {
            return "";
          } else {
            let dis = "";
            if (disables) {
              if (item.mmr <= disables) {
                dis = "selectRank-btn-disable";
              }
            }
            return (
              <div
                key={key}
                className={`selectRank-btn selectRank-btn-e ${dis} ${item.content === rankStar && "selectRank-btn-active"}`}
                onClick={() => {
                  starClickHandler(item.mmr!);
                }}
              >
                {item.content}
              </div>
            );
          }
        })}
      </div>
      {mmrEnabled && (
        <div className="flex justify-center mt-3 selectRank-input">
          <button>
            <span
              onClick={() => {
                if (rank > 0) {
                  starClickHandler(rank - 1);
                }
              }}
            >
              -
            </span>
          </button>
          <input type="number" value={rank} onChange={handleChange} min={0} />
          <button>
            <span
              onClick={() => {
                starClickHandler(rank + 1);
              }}
            >
              +
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
