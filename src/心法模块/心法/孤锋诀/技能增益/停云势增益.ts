import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'
import 通用增益 from './通用增益/通用增益'

const 停云势增益: 技能增益列表类型[] = [
  ...通用增益,
  {
    增益名称: '雨积',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 154 / 1024 }],
    // 秘籍ID 3013
  },
  {
    增益名称: '5%伤害',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [
      {
        属性: 属性类型.通用增伤,
        值: 51 / 1024,
      },
    ],
  },
  {
    增益名称: '4%伤害',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [
      {
        属性: 属性类型.通用增伤,
        值: 41 / 1024,
      },
    ],
  },
]

export default 停云势增益
