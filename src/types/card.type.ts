export type TCard = {
  id?: number;
  img: string;
  name: string;
  description?: string;
  stats?: {
    cost: number;
    attack: number;
  };
  ability?: string;
  source?: string;
};
