"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import {
  gameDefiendCheck,
  op2,
  option2Changed,
} from "@/app/redux/Features/extraOptions/gameDetailsSlice";

const data = [
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
type mainProps = {
  gameN: string;
};

function OptionDropdown({ gameN }: mainProps) {
  const mainNameer = useAppSelector((state) => state.gameDetails);
  const nameer = mainNameer.gameDetails;  
  const dispatch = useAppDispatch();   
  const initValue = data.map((item) => {
    return {
      optionName: item.title,
      optionValue: item.items[0],
    };
  })
  console.log(nameer)
  useEffect(() => {    
    nameer.map((item) => {
      if (item.gameName === gameN) {
        if (item.gameOptions2!.length === 0) {
          dispatch(option2Changed({ game: gameN, items: initValue }));          
        }
      }
    });
  });
  const handleItem = (item: string[]) => {
    const [value,title]=item
    const result ={
      optionName: title,
      optionValue: value,
    }
    let mainResult:op2[]=[]
    let final:(op2 | undefined)[]=[]
    nameer.map((item)=>{
      if (item.gameName === gameN) {
         final = item.gameOptions2!.map((item2)=>{
          if(item2?.optionName !== result.optionName){            
            return item2
          }
        })         
        
      }
    })
    let removed = final.filter(
      (item3) => item3 != undefined
    );
    mainResult = [...removed,result]
    dispatch(option2Changed({ game: gameN, items: mainResult }));
  };
  
  
  const getVal=(title:string)=>{
    let value:any
    nameer.map((item)=>{
      if (item.gameName === gameN) {
        item.gameOptions2!.map((item2)=>{
          if(item2?.optionName === title){
            value= item2?.optionValue
          }
        })   
        
      }
    })
    return value
  }
  return (
    <>
      <div className="flex py-3 pb-1">
        {data.map((item, key) => {
          return (
            <div key={key} className="w-full px-2 drop-down-cont">
              <h4 className="ml-2 drop-down-h4">{item.title}</h4>
              <DropDownSlider
                items={item.items}
                value={getVal(item.title)}
                getItem={handleItem}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

type props = {
  value: string;
  items: string[];
  getItem: (item: string[]) => void;
  title:string
};

export function DropDownSlider({ items, value, getItem, title }: props) {
  const handleClick = () => {
    setTimeout(() => {
      ref.current?.classList.add("drop-down-active");
      ref2.current?.classList.add("drop-down-field-active");
    }, 10);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      ref.current?.classList.remove("drop-down-active");
      ref2.current?.classList.remove("drop-down-field-active");
    });
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="drop-down-main relative">
        <div ref={ref2} onClick={handleClick} className="drop-down-field">
          <span>{value}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            width={19}
            className="svg-inline--fa fa-github fa-w-16 fa-lg ml-2 -mt-1.5 float-right"
          />
        </div>
        <div ref={ref} className="drop-down-items">
          {items.map((item, key) => {
            return item !== value ? (
              <div
                key={key}
                onClick={(e) => {
                  getItem([e.currentTarget.textContent!,title]);
                }}
              >
                {item}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OptionDropdown;
