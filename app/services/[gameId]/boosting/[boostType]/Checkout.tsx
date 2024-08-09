"use client";

import { ArrowBlue } from "../svgs";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { titleCase } from "@/app/components/TitleCase";
type props = {
  gameN: string;
};
function Checkout({ gameN }: props) {
  const [loading, setLoading] = useState(1);
  if (loading === 2) {
    const resize_ob = new ResizeObserver(function (entries) {
      const item = document.getElementById("gtcont")!;
      const item2 = document.getElementById("checkout-c1i")!;
      if (item2) {
        let height =
          item.clientHeight -
          (item2.getBoundingClientRect().top -
            item.getBoundingClientRect().top);

        item2.style.height = `${height}px`;
      }
    });
    setLoading(3);
    resize_ob.observe(document.querySelector("#gtcont")!);
  }

  useEffect(() => {
    setLoading(2);
  }, []);

  const mainNameer = useAppSelector((state) => state.gameDetails);
  const nameer = mainNameer.gameDetails;
  const data = nameer.map((item) => {
    if (item.gameName === gameN) {
      return item;
    }
  });
  const result = data[0];
  return (
    <div id="checkout-c1i" className="checkout-c1">
      <div className="checkout-c2">
        <div className="gameType-base checkout">
          <h4 className="text-center text-white text-lg mt-3 font-bold">
            Checkout
          </h4>
          <div style={{ marginBottom: "30px" }} className="det-base w-t-w">
            <Image
              src={`/${result?.gameRanks?.currentRank?.rankImage}`}
              alt="archon rank"
              width={35}
              height={45}
              className=""
            />
            <span>{`${result?.gameRanks?.currentRank?.rankName} ${result?.gameRanks?.currentRank?.rankStar}`}</span>
            <ArrowBlue />
            <Image
              src={`/${result?.gameRanks?.desiredRank?.rankImage}`}
              alt="archon rank"
              width={35}
              height={45}
              className=""
            />
            <span>{`${result?.gameRanks?.desiredRank?.rankName} ${result?.gameRanks?.desiredRank?.rankStar}`}</span>
          </div>
          <div>
            {result?.gameOptions2?.map((item, key) => {
              return (
                <div key={key} className="checkoutDetails">
                  <span><span className="checkoutDetails-label-t">{`${item.optionName}: `}</span>{item.optionContent}</span>
                  <span className="checkoutDetails-label">
                    {item.optionValue}
                  </span>
                </div>
              );
            })}
            {result?.gameOptions?.map((item, key) => {
              return (
                <div key={key} className="checkoutDetails">
                  <span>{titleCase(item.optionName)}</span>
                  <span className="checkoutDetails-label">{item.value}</span>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: "30px" }} className="det-base checkout-time">
            <FontAwesomeIcon icon={faClock} className="t-icon" />
            <span>Completion Time :</span>
            <strong>~ 12 day, 10hrs</strong>
          </div>
          <div className="promo">
            <input placeholder="Promo Code" className="promo-txt" type="text" />
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
  );
}

export default Checkout;
