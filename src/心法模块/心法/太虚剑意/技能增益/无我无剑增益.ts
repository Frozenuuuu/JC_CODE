import {技能增益列表类型} from '@/@types/技能'
// import 通用增益 from './通用增益/通用增益'
import 通用增益 from './通用增益/通用增益'
import {属性类型} from '@/@types/属性'
import 门派套装增益 from "@/心法模块/心法/太虚剑意/技能增益/通用增益/门派套装增益";
import 大橙武技能增益 from "@/心法模块/心法/太虚剑意/技能增益/通用增益/大橙武技能增益";
import 小橙武技能增益 from "@/心法模块/心法/太虚剑意/技能增益/通用增益/小橙武技能增益";

const 无我无剑增益: 技能增益列表类型[] = [
    ...通用增益,
    ...门派套装增益,
    ...大橙武技能增益,
    ...小橙武技能增益,
    {
        增益名称: '5%伤害',
        增益所在位置: '秘籍',
        增益类型: '全局启用',
        增益集合: [{属性: 属性类型.通用增伤, 值: 51 / 1024}],
    },
    {
        增益名称: '4%伤害',
        增益所在位置: '秘籍',
        增益类型: '全局启用',
        增益集合: [{属性: 属性类型.通用增伤, 值: 41 / 1024}],
    },
    {
        增益名称: '4%会心',
        增益所在位置: '秘籍',
        增益类型: '全局启用',
        增益集合: [{属性: 属性类型.外功会心百分比, 值: 0.04}],
    },
    {
        增益名称: '无意',
        增益所在位置: '奇穴',
        增益类型: '全局启用',
        增益集合: [
            {属性: 属性类型.外功会心百分比, 值: 0.1},
            {属性: 属性类型.郭氏外功会心效果等级, 值: 307},
        ],
    },
    {
        增益名称: '风逝',
        增益所在位置: '奇穴',
        增益类型: '部分启用',
        增益集合: [{属性: 属性类型.通用增伤, 值: 307 / 1024}],
    },
]

export default 无我无剑增益
