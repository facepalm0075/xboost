"use client";
import SelectWins from "./SelectWins";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import {
  gameDefiendCheck,
  unrankWinsChanged,
} from "@/app/redux/Features/extraOptions/gameDetailsSlice";
import { useEffect } from "react";

type props = {
  gameN: string;
};
function SelectWinsUnranked({ gameN }: props) {
  const mainNameer = useAppSelector((state) => state.gameDetails);
  const nameer = mainNameer.gameDetails;
  const dispatch = useAppDispatch();
  let number = 0;
  nameer.map((item) => {
    if (item.gameName === gameN) {
      number = item.gameUnrankedWins!;
    }
  });
  const winHandler = (num: number) => {
    dispatch(unrankWinsChanged({ game: gameN, win: num }));
  };

  const initValue = 1;
  useEffect(() => {
    nameer.map((item) => {
      if (item.gameName === gameN) {
        if (!item.gameUnrankedWins) {
          dispatch(unrankWinsChanged({ game: gameN, win: initValue }));
        }
      }
    });
  });
  return (
    <SelectWins
      maxNum={15}
      cNum={number}
      name={gameN}
      numberChanged={winHandler}
    />
  );
}

export default SelectWinsUnranked;
