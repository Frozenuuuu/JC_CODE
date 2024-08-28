import { 技能基础数据模型 } from '@/@types/技能'
import { 获取破招实际系数 } from '@/数据/数据工具/获取技能系数'
import 翼绝云天增益 from './技能增益/翼绝云天'
import 木落雁归增益 from './技能增益/木落雁归'
import 飘遥伞击增益 from './技能增益/飘遥伞击'
import 振翅图南增益 from './技能增益/振翅图南'
import 击水三千增益 from './技能增益/击水三千'
import 浮游天地增益 from './技能增益/浮游天地'
import 海运南冥增益 from './技能增益/海运南冥'
import 通用增益 from './技能增益/通用增益/通用'
import 溟海御波增益 from './技能增益/溟海御波'
import 逐波灵游增益 from './技能增益/逐波灵游'
import { 计算公式计算类型 } from '@/@types/伤害计算'
import { 属性类型 } from '@/@types/属性'

const 技能基础数据: 技能基础数据模型[] = [
  {
    // 20016
    技能名称: '翼绝云天',
    基础伤害_基础值: 417,
    基础伤害_浮动值: 15,
    技能伤害系数: 100 * 0.9 * 2 * 0.85,
    技能增益列表: 翼绝云天增益,
  },
  {
    // 32815
    技能名称: '破',
    统计名称: '破',
    技能伤害系数: 获取破招实际系数(1048576 * (1 - 1)),
    技能增益列表: 通用增益,
    技能等级数据: {
      1: { 技能伤害系数: 获取破招实际系数(1048576 * (0.7 - 1)) },
      2: { 技能伤害系数: 获取破招实际系数(1048576 * (0.875 - 1)) },
      3: { 技能伤害系数: 获取破招实际系数(1048576 * (1.4 - 1)) },
      4: { 技能伤害系数: 获取破招实际系数(1048576 * (1.54 - 1)) },
      5: { 技能伤害系数: 获取破招实际系数(1048576 * (1 - 1)) },
    },
  },
  {
    // 32815
    技能名称: '破',
    技能伤害系数: 获取破招实际系数(1048576 * (1 - 1)),
    技能增益列表: 通用增益,
    技能等级数据: {
      1: { 技能伤害系数: 获取破招实际系数(1048576 * (0.7 - 1)) },
      2: { 技能伤害系数: 获取破招实际系数(1048576 * (0.875 - 1)) },
      3: { 技能伤害系数: 获取破招实际系数(1048576 * (1.4 - 1)) },
      4: { 技能伤害系数: 获取破招实际系数(1048576 * (1.54 - 1)) },
      5: { 技能伤害系数: 获取破招实际系数(1048576 * (1 - 1)) },
    },
  },
  {
    // 19712
    技能名称: '飘遥伞击',
    技能伤害系数: 16,
    武器伤害系数: 1,
    技能增益列表: 飘遥伞击增益,
  },
  {
    // 31250
    技能名称: '振翅图南',
    基础伤害_基础值: 458,
    基础伤害_浮动值: 10,
    技能伤害系数: 110 * 0.9 * 0.885 * 1.1,
    技能增益列表: 振翅图南增益,
  },
  {
    // 20054
    技能名称: '跃潮斩波',
    基础伤害_基础值: 1625,
    基础伤害_浮动值: 10,
    技能伤害系数: 390 * 1.07 * 0.9 * 0.9,
    技能增益列表: 通用增益,
  },
  {
    // 20322
    技能名称: '溟海御波',
    基础伤害_基础值: 1625,
    基础伤害_浮动值: 15,
    技能伤害系数: 390 * 0.9 * 1.065 * 0.9 * 0.8 * 1.1 * 1.15,
    技能增益列表: 溟海御波增益,
  },
  {
    // 20684
    技能名称: '海运南冥·远',
    统计名称: '海运南冥',
    秘籍依赖技能: '海运南冥',
    基础伤害_基础值: 1562,
    基础伤害_浮动值: 15,
    技能伤害系数: 250 * 1.8 * 0.8 * 1.1 * 0.9 * 0.85 * 1.1 * 1.15,
    技能增益列表: 海运南冥增益,
  },
  {
    // 20685
    技能名称: '海运南冥·近',
    统计名称: '海运南冥',
    秘籍依赖技能: '海运南冥',
    基础伤害_基础值: 2083,
    基础伤害_浮动值: 15,
    技能伤害系数: 250 * 2 * 0.8 * 1.1 * 0.9 * 0.85 * 1.1 * 1.15,
    技能增益列表: 海运南冥增益,
  },
  {
    // 20323
    技能名称: '逐波灵游',
    基础伤害_基础值: 833,
    基础伤害_浮动值: 10,
    技能伤害系数: 200 * 0.9 * 1.06 * 0.9 * 1.15,
    技能增益列表: 逐波灵游增益,
  },
  {
    // 36282
    技能名称: '定波砥澜',
    统计名称: '定波砥澜',
    基础伤害_基础值: 86,
    基础伤害_浮动值: 5,
    技能伤害系数: 200 * 1.1,
    武器伤害系数: 1,
    技能增益列表: 通用增益,
  },
  {
    // 20734
    技能名称: '定波砥澜·怅归',
    统计名称: '定波砥澜',
    技能伤害系数: 500 * 1.3,
    基础伤害_基础值: 250,
    武器伤害系数: 100 / 1024,
    技能增益列表: 通用增益,
    技能等级数据: {
      1: { 技能伤害系数: 75 * 1.3, 基础伤害_基础值: 100 },
      2: { 技能伤害系数: 150 * 1.3, 基础伤害_基础值: 150 },
      3: { 技能伤害系数: 300 * 1.3, 基础伤害_基础值: 200 },
      4: { 技能伤害系数: 500 * 1.3, 基础伤害_基础值: 250 },
    },
  },
  {
    // 32478
    技能名称: '风驰',
    技能伤害系数: 540,
    基础伤害_基础值: 130,
    基础伤害_浮动值: 5,
    技能增益列表: 通用增益,
  },
  {
    // 19819
    技能名称: '木落雁归',
    基础伤害_基础值: 1083,
    基础伤害_浮动值: 15,
    技能伤害系数: 260 * 1.1 * 1.15,
    武器伤害系数: 2,
    技能增益列表: 木落雁归增益,
  },
  {
    // 19766
    技能名称: '击水三千·一',
    统计名称: '击水三千',
    秘籍依赖技能: '击水三千',
    基础伤害_基础值: 500,
    基础伤害_浮动值: 15,
    技能伤害系数: 120 * 1.2 * 1.1,
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 19767
    技能名称: '击水三千·二',
    统计名称: '击水三千',
    秘籍依赖技能: '击水三千',
    基础伤害_基础值: 500,
    基础伤害_浮动值: 15,
    技能伤害系数: 135 * 1.2 * 1.1,
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 19768
    技能名称: '击水三千·三',
    统计名称: '击水三千',
    秘籍依赖技能: '击水三千',
    基础伤害_基础值: 500,
    基础伤害_浮动值: 15,
    技能伤害系数: 150 * 1.2 * 1.1,
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 20052
    技能名称: '浮游天地',
    基础伤害_基础值: 833,
    基础伤害_浮动值: 10,
    技能伤害系数: 200 * 0.7,
    武器伤害系数: 2,
    技能增益列表: 浮游天地增益,
  },
  {
    // 25273
    技能名称: '青冥',
    基础伤害_基础值: 133,
    基础伤害_浮动值: 10,
    技能伤害系数: (130 + 16) * 1.15 * 0.7,
    技能增益列表: 通用增益,
  },
  {
    // 18386
    技能名称: '青冥(DOT)·六',
    统计名称: '青冥(DOT)',
    基础伤害_基础值: 50,
    DOT生效间隔: 32,
    DOT跳数: 6,
    技能伤害系数: 550,
    伤害计算次数: 6,
    技能增益列表: 通用增益,
  },
  {
    // 25783
    技能名称: '木落雁归·神兵',
    基础伤害_基础值: 20,
    基础伤害_浮动值: 2,
    技能伤害系数: 50,
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·一',
    统计名称: '御波驾澜(DOT)',
    基础伤害_基础值: 25,
    DOT生效间隔: 48,
    DOT跳数: 6,
    技能伤害系数: 680,
    伤害计算次数: 1,
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·二',
    统计名称: '御波驾澜(DOT)',
    基础伤害_基础值: 25,
    DOT生效间隔: 48,
    DOT跳数: 6,
    技能伤害系数: 680,
    伤害计算次数: 2,
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·三',
    统计名称: '御波驾澜(DOT)',
    基础伤害_基础值: 25,
    DOT生效间隔: 48,
    DOT跳数: 6,
    技能伤害系数: 680,
    伤害计算次数: 3,
    技能增益列表: 通用增益,
  },
  {
    // 伤腕
    技能名称: '昆吾·弦刃',
    真实伤害: 145300, // 雾海寻龙版本改为固定伤害，只吃秋肃和等级减伤
    伤害计算类型标记: [计算公式计算类型.真实伤害, 计算公式计算类型.等级减伤, 计算公式计算类型.易伤],
  },
  {
    // 伤鞋
    技能名称: '刃凌',
    真实伤害: 96900, // 雾海寻龙版本改为固定伤害，只吃秋肃和等级减伤
    伤害计算类型标记: [计算公式计算类型.真实伤害, 计算公式计算类型.等级减伤, 计算公式计算类型.易伤],
  },
  {
    技能名称: '逐云寒蕊',
    技能伤害系数: 384,
    基础伤害_基础值: 40,
    基础伤害_浮动值: 17,
    伤害计算次数: 1,
    技能增益列表: [
      ...通用增益,
      {
        增益名称: '飘黄',
        增益所在位置: '技能',
        增益类型: '全局启用',
        增益启用: true,
        增益集合: [{ 属性: 属性类型.郭氏外功基础防御, 值: -1024 }],
      },
    ],
  },
  {
    // 龙门武器
    技能名称: '剑风',
    基础伤害_基础值: 3950,
    技能增益列表: 通用增益,
  },
]

const 技能增益 = {}

export { 技能增益 }
export default 技能基础数据
