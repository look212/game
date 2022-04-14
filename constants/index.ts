import { IMainInfo } from '~/types';

export const mainInfos: IMainInfo[] = [
  {
    type: 0,
    title: '게임을 선택해주세요😉',
    description: ''
  },
  {
    type: 1,
    title: '이어말하기',
    description: `
    1. 주제를 고르세요.<br>
    2. 문제를 보고 문장 또는 단어를 완성하세요.
    `
  },
  {
    type: 2,
    title: '몸으로 말해요',
    description: `
    1. 주제를 고르세요.<br>
    2. 문제를 보고 몸으로 설명하세요.<br>
    3. 답을 맞추세요.
    `
  },
  {
    type: 3,
    title: '라이어게임',
    description: `
    1. 주제를 고르세요.<br>
    2. 모드를 고르세요.(일반, 스파이, 바보)<br>
    3. 라이어게임을 즐기세요.
    `
  },
  {
    type: 4,
    title: '맞추기',
    description: `
    1. 주제를 고르세요.<br>
    2. 사진 또는 그림을 보거나 노래를 듣고 문제를 맞추세요<br>
    `
  },
]
