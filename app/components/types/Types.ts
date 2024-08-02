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
