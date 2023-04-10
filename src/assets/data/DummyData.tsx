import { TCard } from '../../types/card.type';

export const ability = {
  none: '없음',
  normal: '패시브',
  onReveal: '출현',
  onGoing: '지속',
} as const;

export const cardData: TCard[] = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/img/abomination.webp`,
    name: '어보미네이션',
    description: '멍청한 놈들! 나한테는 안되지!',
    stats: {
      cost: 5,
      attack: 9,
    },
    ability: ability.none,
    source: 'Starter Card',
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/img/absorbing Man.webp`,
    name: '업소빙맨',
    description:
      '출현: 자신이 마지막으로 낸 카드가 출현 능력을 갖고 있을 경우, 이 카드가 그 능력을 복제합니다.',
    stats: {
      cost: 4,
      attack: 3,
    },
    ability: ability.onReveal,
    source: '3POOL',
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/img/adam-warlock.webp`,
    name: '아담 워록',
    description:
      '턴이 끝날 때마다 이 구역에서 앞서고 있으면 카드 한 장을 뽑습니다.',
    stats: {
      cost: 2,
      attack: 0,
    },
    ability: ability.normal,
    source: '3POOL',
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/img/aero.webp`,
    name: '에어로',
    description:
      '출현: 이번 턴에 상대가 낸 카드를 모두 이 구역으로 이동시킵니다.',
    stats: {
      cost: 5,
      attack: 7,
    },
    ability: ability.onReveal,
    source: '3POOL',
  },
  {
    id: 5,
    img: `${process.env.PUBLIC_URL}/img/agatha-harkness.webp`,
    name: '애거사 하크니스',
    description:
      '애거사는 시작 시 내 손에 들어있으며 나를 대신해 카드를 냅니다.',
    stats: {
      cost: 6,
      attack: 14,
    },
    ability: ability.normal,
    source: '3POOL',
  },
  {
    id: 6,
    img: `${process.env.PUBLIC_URL}/img/agent-13.webp`,
    name: '에이전트 13',
    description: '출현: 임의의 카드 한 장을 내 손에 추가합니다.',
    stats: {
      cost: 1,
      attack: 2,
    },
    ability: ability.onReveal,
    source: '2POOL',
  },
  {
    id: 7,
    img: `${process.env.PUBLIC_URL}/img/agent-coulson.webp`,
    name: '에이전트 콜슨',
    description: '내 손에 비용 4 및 5의 카드 한 장씩을 무작위로 추가합니다.',
    stats: {
      cost: 3,
      attack: 4,
    },
    ability: ability.onReveal,
    source: '4POOL',
  },
  {
    id: 8,
    img: `${process.env.PUBLIC_URL}/img/america-chavez.webp`,
    name: '아메리카 차베즈',
    description: '6턴에 반드시 이 카드를 뽑습니다. 그전에는 뽑을 수 없습니다.',
    stats: {
      cost: 6,
      attack: 9,
    },
    ability: ability.normal,
    source: '1POOL',
  },
  {
    id: 9,
    img: `${process.env.PUBLIC_URL}/img/angel.webp`,
    name: '엔젤',
    description:
      '내 카드 한 장이 파괴되면, 이 카드가 덱에서 날아와 파괴된 카드를 대체합니다.',
    stats: {
      cost: 1,
      attack: 2,
    },
    ability: ability.normal,
    source: '1POOL',
  },
  {
    id: 10,
    img: `${process.env.PUBLIC_URL}/img/angela.webp`,
    name: '안젤라',
    description: '이 구영에 카드를 내면 +2파워를 부여합니다.',
    stats: {
      cost: 2,
      attack: 0,
    },
    ability: ability.normal,
    source: '1POOL',
  },
  {
    id: 11,
    img: `${process.env.PUBLIC_URL}/img/ant-man.webp`,
    name: '앤트맨',
    description:
      '이 구역에 내 다른 카드가 3장 배치되어 있을 경우, +3파워를 부여합니다.',
    stats: {
      cost: 1,
      attack: 2,
    },
    ability: ability.onGoing,
    source: 'Recruit Season',
  },
];
