export type TCard = {
  id?: number;
  webp: string;
  name: string;
  description?: string;
  stats?: {
    cost: number;
    attack: number;
  };
  ability?: string;
  source?: 0;
};
