import React from "react";
import Abomination from "../../assets/img/cards/abomination.webp";
import AbsorbingMan from "../../assets/img/cards/absorbing Man.webp";
import AdamWarlock from "../../assets/img/cards/adam-warlock.webp";
import Aero from "../../assets/img/cards/aero.webp";
import AgathaHarkness from "../../assets/img/cards/agatha-harkness.webp";
import Agent13 from "../../assets/img/cards/agent-13.webp";
import AgentCoulson from "../../assets/img/cards/agent-coulson.webp";
import useLocalization from "../../hooks/useLocalizing";
import { TCard } from "../../types/card.type";

export const ability = {
  none: "없음",
  normal: "패시브",
  onReveal: "출현",
  onGoing: "지속",
} as const;

// export const cardData: { [index: string]: number | string | any } = [
// const DummyData = () => {
//   const translation = useLocalization();

//   return <div></div>;
// };

// export default React.memo(DummyData);

export const cardData: TCard[] = [
  {
    id: 1,
    img: Abomination,
    name: "어보미네이션",
    description: "멍청한 놈들! 나한테는 안되지!",
    stats: {
      cost: 5,
      attack: 9,
    },
    ability: ability.none,
    source: "Starter Card",
  },
  {
    id: 2,
    img: AbsorbingMan,
    name: "업소빙맨",
    description:
      "출현: 자신이 마지막으로 낸 카드가 출현 능력을 갖고 있을 경우, 이 카드가 그 능력을 복제합니다.",
    stats: {
      cost: 4,
      attack: 3,
    },
    ability: ability.onReveal,
    source: "3POOL",
  },
  {
    id: 3,
    img: AdamWarlock,
    name: "아담 워록",
    description:
      "턴이 끝날 때마다 이 구역에서 앞서고 있으면 카드 한 장을 뽑습니다.",
    stats: {
      cost: 2,
      attack: 0,
    },
    ability: ability.normal,
    source: "3POOL",
  },
  {
    id: 4,
    img: Aero,
    name: "에어로",
    description:
      "출현: 이번 턴에 상대가 낸 카드를 모두 이 구역으로 이동시킵니다.",
    stats: {
      cost: 5,
      attack: 7,
    },
    ability: ability.onReveal,
    source: "3POOL",
  },
  {
    id: 5,
    img: AgathaHarkness,
    name: "애거사 하크니스",
    description:
      "애거사는 시작 시 내 손에 들어있으며 나를 대신해 카드를 냅니다.",
    stats: {
      cost: 6,
      attack: 14,
    },
    ability: ability.normal,
    source: "3POOL",
  },
  {
    id: 6,
    img: Agent13,
    name: "에이전트 13",
    description: "출현: 임의의 카드 한 장을 내 손에 추가합니다.",
    stats: {
      cost: 1,
      attack: 2,
    },
    ability: ability.onReveal,
    source: "2POOL",
  },
  {
    id: 7,
    img: AgentCoulson,
    name: "에이전트 콜슨",
    description: "내 손에 비용 4 및 5의 카드 한 장씩을 무작위로 추가합니다.",
    stats: {
      cost: 3,
      attack: 4,
    },
    ability: ability.onReveal,
    source: "4POOL",
  },
];
