export type rnkDet = {
  rankNumber: number;
  rankImage: string;
  rankName: string;
  rankStar: string;
};

export type mdn = {
  content: string;
  mmr: number;
  img: string;
};

export type md = {
  rankName: string;
  rankImg: string;
  rankColor: string;
  rankNums: mdn[];
};

export type boostingOrderJson = {
  maxWins: number;
  ranksData: md[];
};



export type extraOptionsType = {
  id: string;
  name: string;
  value: string;
  tooltip: string;
}[];

export type options2Type = {
  title: string;
  items: { value: string, content: string }[];
}[];
