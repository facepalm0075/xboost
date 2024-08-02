"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

type props = {
  currentGame: string;
};

function GameClick({ currentGame }: props) {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setTimeout(() => {
      ref.current?.classList.add("game-active");
    }, 10);
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      ref.current?.classList.remove("game-active");
    });
  }, []);
  const gameImage = "/" + currentGame.split(" ").join("-") + ".png";
  return (
    <>
      <div className="select-game">
        <div className="game-main">
          <div onClick={handleClick} className="game-btn cursor-pointer pl-5">
            <Image src={gameImage} width={27} height={27} alt="cs2 icon" />
            <div className="pl-3 mt-1">
              <span className="text-base font-semibold">{currentGame}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                width={19}
                className="svg-inline--fa fa-github fa-w-16 fa-lg ml-2 -mt-1.5"
              />
            </div>
          </div>
          <div></div>
          <div ref={ref} className="game-items-main inline-block">
            <Link href="../apex-legends">
              <div className="game-items flex">
                <Image
                  src="/Apex-Legends.png"
                  width={27}
                  height={27}
                  alt="cs2 icon"
                />
                <div className="pl-3">
                  <span className="text-lg">Apex Legends</span>
                </div>
              </div>
            </Link>
            <Link href="../counter-strike-2">
              <div className="game-items flex">
                <Image
                  src="/Counter-Strike-2.png"
                  width={27}
                  height={27}
                  alt="cs2 icon"
                />
                <div className="pl-3">
                  <span className="text-lg">Counter Strike: 2</span>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="game-items flex">
                <Image
                  src="/cs2iconSelect.png"
                  width={27}
                  height={27}
                  alt="cs2 icon"
                />
                <div className="pl-3">
                  <span className="text-lg">Counter Strike: 2</span>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="game-items flex">
                <Image
                  src="/cs2iconSelect.png"
                  width={27}
                  height={27}
                  alt="cs2 icon"
                />
                <div className="pl-3">
                  <span className="text-lg">Counter Strike: 2</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameClick;
