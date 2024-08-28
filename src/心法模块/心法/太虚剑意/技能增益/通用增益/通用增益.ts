import {属性类型} from '@/@types/属性'
import {技能增益列表类型} from '@/@types/技能'
import 获取快照增益 from '@/心法模块/统一数据/快照增益'
//裂云1 非侠1 剑鸣1 故长1 紫气1 碎1 玄门
const 通用增益: 技能增益列表类型[] = [
    ...获取快照增益('外攻'),
    {
        增益名称: '非侠',
        增益所在位置: '职业',
        增益启用: true,
        增益类型: '全局启用',
        增益集合: [{属性: 属性类型.非侠增伤, 值: 154 / 1024}],
    },
    // 套装双会特效
    {
        增益名称: '剑鸣',
        增益所在位置: '装备',
        增益类型: '部分启用',
        快照类型: '套装会心会效',
        依赖装备增益: '套装会心会效',
        增益集合: [
            {属性: 属性类型.外功会心百分比, 值: 0.04},
            {属性: 属性类型.郭氏外功会心效果等级, 值: 41},
        ],
    },
    {
        增益名称: '裂云',
        增益所在位置: '奇穴',
        增益类型: '部分启用',
        增益集合: [{属性: 属性类型.郭氏外功会心效果等级, 值: 150}],
    },
    {
        增益名称: '紫气东来',
        增益所在位置: '技能',
        增益启用: true,
        增益类型: '部分启用',
        增益集合: [
            {属性: 属性类型.外功会心百分比, 值: 0.25},
            {属性: 属性类型.郭氏外功会心效果等级, 值: 250},
            {属性: 属性类型.郭氏外功基础攻击, 值: 256},
        ],
    },
    // {
    //     增益名称: '故长',
    //     增益所在位置: '奇穴',
    //     增益类型: '全局启用',
    //     增益集合: [{属性: 属性类型.郭氏全无视防御, 值: 614}],
    // },
    {
        增益名称: '碎星辰',
        增益所在位置: '技能',
        增益类型: '部分启用',
        增益集合: [
            {属性: 属性类型.外功会心百分比, 值: 0.05},
            {属性: 属性类型.郭氏外功会心效果等级, 值: 102},
            {属性: 属性类型.郭氏全无视防御, 值: 614}
        ],
    },
    {
        增益名称: '玄门',
        增益所在位置: '奇穴',
        增益类型: '部分启用',
        增益集合: [
            {属性: 属性类型.郭氏外功破防等级, 值: 614},
            {属性: 属性类型.外功会心百分比, 值: 0.03*3},
        ],
    },
    // 给dot用的快照增益
    {
        增益名称: '紫气东来_双会攻击',
        增益所在位置: '技能',
        增益启用: true,
        增益类型: '部分启用',
        增益集合: [
            {属性: 属性类型.外功会心百分比, 值: 0.25},
            {属性: 属性类型.郭氏外功会心效果等级, 值: 250},
            {属性: 属性类型.郭氏外功基础攻击, 值: 256},
        ],
    },
    {
        增益名称: '裂云_单会效',
        增益所在位置: '奇穴',
        增益启用: true,
        增益类型: '部分启用',
        增益集合: [
            {属性: 属性类型.郭氏外功会心效果等级, 值: 150},
        ],
    },
]

export default 通用增益
