import { 技能增益列表类型 } from '@/@types/技能'
import { 属性类型 } from '@/@types/属性'
import 通用增益 from './通用增益/通用'
import 小橙武技能增益 from './通用增益/小橙武技能增益'
import 碧海飘渺掌增益 from './通用增益/碧海飘渺掌增益'
import 门派套装增益 from './通用增益/门派套装增益'

const 海运南冥增益: 技能增益列表类型[] = [
  ...通用增益,
  ...小橙武技能增益,
  ...碧海飘渺掌增益,
  ...门派套装增益,
  {
    增益名称: '2%伤害',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 21 / 1024 }],
  },
  {
    增益名称: '3%伤害',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 31 / 1024 }],
  },
  {
    增益名称: '4%伤害',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 41 / 1024 }],
  },
  {
    增益名称: '2%会心',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.外功会心百分比, 值: 0.02 }],
  },
  {
    增益名称: '3%会心',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.外功会心百分比, 值: 0.03 }],
  },
  {
    增益名称: '4%会心',
    增益所在位置: '秘籍',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.外功会心百分比, 值: 0.04 }],
  },
]

export default 海运南冥增益
