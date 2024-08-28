import { 属性类型 } from '@/@types/属性'

import { 装备属性信息模型, 装备特效枚举, 装备类型枚举 } from '@/@types/装备'

const 衣服装备数据: 装备属性信息模型[] = [
  {
    id: 98508,
    uid: 215196,
    装备名称: '水川衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 15800,
    装备特效: 装备特效枚举.切糕_英雄,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5689 },
      { 属性: 属性类型.根骨, 值: 1103 },
      { 属性: 属性类型.内功基础攻击, 值: 2148 },
      { 属性: 属性类型.内功破防等级, 值: 5536 },
      { 属性: 属性类型.无双等级, 值: 4921 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98509,
    uid: 215197,
    装备名称: '水泓衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 15800,
    装备特效: 装备特效枚举.切糕_英雄,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5689 },
      { 属性: 属性类型.元气, 值: 1103 },
      { 属性: 属性类型.内功基础攻击, 值: 2148 },
      { 属性: 属性类型.内功破防等级, 值: 5536 },
      { 属性: 属性类型.无双等级, 值: 4921 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 100136,
    uid: 217064,
    装备名称: '陶然意·星雪衣',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 15700,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5653 },
      { 属性: 属性类型.元气, 值: 1028 },
      { 属性: 属性类型.内功基础攻击, 值: 1642 },
      { 属性: 属性类型.内功破防等级, 值: 5501 },
      { 属性: 属性类型.全能等级, 值: 2445 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 100137,
    uid: 217065,
    装备名称: '陶然意·和时衣',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 15700,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5653 },
      { 属性: 属性类型.根骨, 值: 1028 },
      { 属性: 属性类型.内功基础攻击, 值: 1642 },
      { 属性: 属性类型.内功破防等级, 值: 5501 },
      { 属性: 属性类型.全能等级, 值: 2445 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 100120,
    uid: 217048,
    装备名称: '陶然意·兰谷衣',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 15700,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5653 },
      { 属性: 属性类型.元气, 值: 1028 },
      { 属性: 属性类型.内功基础攻击, 值: 1642 },
      { 属性: 属性类型.内功破防等级, 值: 5501 },
      { 属性: 属性类型.全能等级, 值: 2445 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 98400,
    uid: 214904,
    装备名称: '绕城衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.根骨, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.内功破防等级, 值: 5466 },
      { 属性: 属性类型.破招值, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98401,
    uid: 214905,
    装备名称: '宫阙衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.元气, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.内功破防等级, 值: 5466 },
      { 属性: 属性类型.破招值, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 98436,
    uid: 214964,
    装备名称: '情义衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.根骨, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.内功会心等级, 值: 5466 },
      { 属性: 属性类型.破招值, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98437,
    uid: 214965,
    装备名称: '良安衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.元气, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.全会心等级, 值: 5466 },
      { 属性: 属性类型.破招值, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 98610,
    uid: 215371,
    装备名称: '月纤衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.根骨, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.内功会心等级, 值: 5466 },
      { 属性: 属性类型.无双等级, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 98611,
    uid: 215372,
    装备名称: '月迟衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 15600,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5617 },
      { 属性: 属性类型.元气, 值: 1089 },
      { 属性: 属性类型.内功基础攻击, 值: 2121 },
      { 属性: 属性类型.全会心等级, 值: 5466 },
      { 属性: 属性类型.无双等级, 值: 4858 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.全会心等级 }, { 镶嵌类型: 属性类型.全会心效果等级 }],
  },
  {
    id: 98342,
    uid: 214846,
    装备名称: '鸿辉·鹿喧衣',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 15400,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5545 },
      { 属性: 属性类型.元气, 值: 1075 },
      { 属性: 属性类型.内功基础攻击, 值: 2093 },
      { 属性: 属性类型.内功会心等级, 值: 5396 },
      { 属性: 属性类型.无双等级, 值: 4796 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 98366,
    uid: 214870,
    装备名称: '鸿辉·白林衣',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 15400,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5545 },
      { 属性: 属性类型.根骨, 值: 1075 },
      { 属性: 属性类型.内功基础攻击, 值: 2093 },
      { 属性: 属性类型.内功会心等级, 值: 5396 },
      { 属性: 属性类型.无双等级, 值: 4796 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 98365,
    uid: 214869,
    装备名称: '鸿辉·梦辰衣',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 15400,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5545 },
      { 属性: 属性类型.元气, 值: 1075 },
      { 属性: 属性类型.内功基础攻击, 值: 2093 },
      { 属性: 属性类型.内功会心等级, 值: 5396 },
      { 属性: 属性类型.无双等级, 值: 4796 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 96394,
    uid: 212119,
    装备名称: '风轻衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 14150,
    装备特效: 装备特效枚举.切糕_普通,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5095 },
      { 属性: 属性类型.根骨, 值: 988 },
      { 属性: 属性类型.内功基础攻击, 值: 1923 },
      { 属性: 属性类型.内功破防等级, 值: 4958 },
      { 属性: 属性类型.无双等级, 值: 4407 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 96395,
    uid: 212120,
    装备名称: '风绫衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 14150,
    装备特效: 装备特效枚举.切糕_普通,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5095 },
      { 属性: 属性类型.元气, 值: 988 },
      { 属性: 属性类型.内功基础攻击, 值: 1923 },
      { 属性: 属性类型.内功破防等级, 值: 4958 },
      { 属性: 属性类型.无双等级, 值: 4407 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 99994,
    uid: 217048,
    装备名称: '陶然意·兰谷衣',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 14050,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5059 },
      { 属性: 属性类型.元气, 值: 920 },
      { 属性: 属性类型.内功基础攻击, 值: 1469 },
      { 属性: 属性类型.内功破防等级, 值: 4923 },
      { 属性: 属性类型.全能等级, 值: 2188 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 100011,
    uid: 217065,
    装备名称: '陶然意·和时衣',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 14050,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5059 },
      { 属性: 属性类型.根骨, 值: 920 },
      { 属性: 属性类型.内功基础攻击, 值: 1469 },
      { 属性: 属性类型.内功破防等级, 值: 4923 },
      { 属性: 属性类型.全能等级, 值: 2188 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 100010,
    uid: 217064,
    装备名称: '陶然意·星雪衣',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 14050,
    装备类型: 装备类型枚举.PVX,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5059 },
      { 属性: 属性类型.元气, 值: 920 },
      { 属性: 属性类型.内功基础攻击, 值: 1469 },
      { 属性: 属性类型.内功破防等级, 值: 4923 },
      { 属性: 属性类型.全能等级, 值: 2188 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.额外气血上限 }],
  },
  {
    id: 98214,
    uid: 214669,
    装备名称: '危音衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.根骨, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.破招值, 值: 4888 },
      { 属性: 属性类型.无双等级, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.破招值 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98215,
    uid: 214670,
    装备名称: '危影衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.元气, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.破招值, 值: 4888 },
      { 属性: 属性类型.无双等级, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.破招值 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 98706,
    uid: 215568,
    装备名称: '东方日出·所适衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.根骨, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功破防等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98707,
    uid: 215569,
    装备名称: '东方日出·当楼衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.元气, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功破防等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 96504,
    uid: 212308,
    装备名称: '泉合衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.根骨, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功会心等级, 值: 4888 },
      { 属性: 属性类型.无双等级, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 96286,
    uid: 211827,
    装备名称: '扬英衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.根骨, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功破防等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 96287,
    uid: 211828,
    装备名称: '开颐衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.元气, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功破防等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 96322,
    uid: 211887,
    装备名称: '寒绡衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.根骨, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.内功会心等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 96323,
    uid: 211888,
    装备名称: '壑云衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.元气, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.全会心等级, 值: 4888 },
      { 属性: 属性类型.破招值, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 96505,
    uid: 212309,
    装备名称: '泉麓衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13950,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 5023 },
      { 属性: 属性类型.元气, 值: 974 },
      { 属性: 属性类型.内功基础攻击, 值: 1896 },
      { 属性: 属性类型.全会心等级, 值: 4888 },
      { 属性: 属性类型.无双等级, 值: 4344 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.全会心等级 }, { 镶嵌类型: 属性类型.全会心效果等级 }],
  },
  {
    id: 98184,
    uid: 214608,
    装备名称: '寻踪觅宝·折月衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 13750,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4951 },
      { 属性: 属性类型.根骨, 值: 960 },
      { 属性: 属性类型.内功基础攻击, 值: 1869 },
      { 属性: 属性类型.加速等级, 值: 4817 },
      { 属性: 属性类型.破招值, 值: 4282 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98185,
    uid: 214609,
    装备名称: '寻踪觅宝·星辉衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 13750,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4951 },
      { 属性: 属性类型.元气, 值: 960 },
      { 属性: 属性类型.内功基础攻击, 值: 1869 },
      { 属性: 属性类型.加速等级, 值: 4817 },
      { 属性: 属性类型.破招值, 值: 4282 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 96252,
    uid: 211793,
    装备名称: '灵源·采芳衣',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 13750,
    装备特效: 装备特效枚举.门派套装_两件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4951 },
      { 属性: 属性类型.根骨, 值: 960 },
      { 属性: 属性类型.内功基础攻击, 值: 1869 },
      { 属性: 属性类型.内功会心等级, 值: 4817 },
      { 属性: 属性类型.无双等级, 值: 4282 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 96251,
    uid: 211792,
    装备名称: '灵源·沉辉衣',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 13750,
    装备特效: 装备特效枚举.门派套装_两件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4951 },
      { 属性: 属性类型.元气, 值: 960 },
      { 属性: 属性类型.内功基础攻击, 值: 1869 },
      { 属性: 属性类型.内功会心等级, 值: 4817 },
      { 属性: 属性类型.无双等级, 值: 4282 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 96228,
    uid: 211769,
    装备名称: '灵源·月胧衣',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 13750,
    装备特效: 装备特效枚举.门派套装_两件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4951 },
      { 属性: 属性类型.元气, 值: 960 },
      { 属性: 属性类型.内功基础攻击, 值: 1869 },
      { 属性: 属性类型.内功会心等级, 值: 4817 },
      { 属性: 属性类型.无双等级, 值: 4282 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 94492,
    uid: 208186,
    装备名称: '雪洁衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12600,
    装备特效: 装备特效枚举.切糕_普通,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4537 },
      { 属性: 属性类型.元气, 值: 880 },
      { 属性: 属性类型.内功基础攻击, 值: 1713 },
      { 属性: 属性类型.内功破防等级, 值: 4415 },
      { 属性: 属性类型.无双等级, 值: 3924 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 94491,
    uid: 208185,
    装备名称: '雪满衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12600,
    装备特效: 装备特效枚举.切糕_普通,
    装备类型: 装备类型枚举.切糕,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4537 },
      { 属性: 属性类型.根骨, 值: 880 },
      { 属性: 属性类型.内功基础攻击, 值: 1713 },
      { 属性: 属性类型.内功破防等级, 值: 4415 },
      { 属性: 属性类型.无双等级, 值: 3924 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 94594,
    uid: 208360,
    装备名称: '湖烟衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.元气, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.全会心等级, 值: 4362 },
      { 属性: 属性类型.无双等级, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.全会心等级 }, { 镶嵌类型: 属性类型.全会心效果等级 }],
  },
  {
    id: 94593,
    uid: 208359,
    装备名称: '湖寂衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.根骨, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功会心等级, 值: 4362 },
      { 属性: 属性类型.无双等级, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 94432,
    uid: 207972,
    装备名称: '沁渡衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.元气, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.全会心等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 94431,
    uid: 207971,
    装备名称: '朝华衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.根骨, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功会心等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 94396,
    uid: 207912,
    装备名称: '椴微衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.元气, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功破防等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 94395,
    uid: 207911,
    装备名称: '池泓衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.根骨, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功破防等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 96601,
    uid: 212506,
    装备名称: '西风北啸·离声衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.元气, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功破防等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 96600,
    uid: 212505,
    装备名称: '西风北啸·音书衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12450,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4483 },
      { 属性: 属性类型.根骨, 值: 869 },
      { 属性: 属性类型.内功基础攻击, 值: 1692 },
      { 属性: 属性类型.内功破防等级, 值: 4362 },
      { 属性: 属性类型.破招值, 值: 3877 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98153,
    uid: 214346,
    装备名称: '寻龙御厨上衣·火候',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 12300,
    装备特效: 装备特效枚举.冬至套装,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 94361,
    uid: 207877,
    装备名称: '濯心·天尘衣',
    所属门派: '衍天',
    装备主属性: '元气',
    装备品级: 12300,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 94362,
    uid: 207878,
    装备名称: '濯心·采青衣',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 12300,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 96100,
    uid: 211610,
    装备名称: '寻踪觅宝·拂雪衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 96101,
    uid: 211611,
    装备名称: '寻踪觅宝·泻雨衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 90357,
    uid: 188615,
    装备名称: '德襄衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 98154,
    uid: 214347,
    装备名称: '迎新御厨上衣·火候',
    所属门派: '药宗',
    装备主属性: '根骨',
    装备品级: 12300,
    装备特效: 装备特效枚举.冬至套装,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90358,
    uid: 188616,
    装备名称: '烟琐衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.全会心等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 98130,
    uid: 214323,
    装备名称: '翡翠御厨上衣·火候',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 12300,
    装备特效: 装备特效枚举.冬至套装,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90633,
    uid: 189257,
    装备名称: '剪桐衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90598,
    uid: 189168,
    装备名称: '花霭衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.全会心等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 90634,
    uid: 189258,
    装备名称: '故芳衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 90597,
    uid: 189167,
    装备名称: '途南衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.破招值, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功基础攻击 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90562,
    uid: 189078,
    装备名称: '庭澜衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 90561,
    uid: 189077,
    装备名称: '故云衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90430,
    uid: 188796,
    装备名称: '忆惜衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.元气 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 90429,
    uid: 188795,
    装备名称: '忆安衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功破防等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.根骨 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
  {
    id: 90394,
    uid: 188706,
    装备名称: '语阔衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.全会心等级 }, { 镶嵌类型: 属性类型.破招值 }],
  },
  {
    id: 90393,
    uid: 188705,
    装备名称: '擒雨衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.破招值 }],
  },
  {
    id: 90669,
    uid: 189347,
    装备名称: '谨峰衣',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 90670,
    uid: 189348,
    装备名称: '藏峦衣',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.全会心等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.全会心等级 }, { 镶嵌类型: 属性类型.全会心效果等级 }],
  },
  {
    id: 94338,
    uid: 207854,
    装备名称: '濯心·松声衣',
    所属门派: '万花',
    装备主属性: '元气',
    装备品级: 12300,
    装备特效: 装备特效枚举.门派套装_四件套双会,
    装备类型: 装备类型枚举.门派套装,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 859 },
      { 属性: 属性类型.内功基础攻击, 值: 1672 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.无双等级, 值: 3831 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功会心等级 }, { 镶嵌类型: 属性类型.内功会心效果等级 }],
  },
  {
    id: 100363,
    uid: 217838,
    装备名称: '若寓衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 805 },
      { 属性: 属性类型.内功基础攻击, 值: 1286 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.全能等级, 值: 1915 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功破防等级 }, { 镶嵌类型: 属性类型.全能等级 }],
  },
  {
    id: 100362,
    uid: 217837,
    装备名称: '越风衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 805 },
      { 属性: 属性类型.内功基础攻击, 值: 1286 },
      { 属性: 属性类型.加速等级, 值: 4309 },
      { 属性: 属性类型.全能等级, 值: 1915 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.内功破防等级 }, { 镶嵌类型: 属性类型.全能等级 }],
  },
  {
    id: 100327,
    uid: 217747,
    装备名称: '踏江衫',
    所属门派: '通用',
    装备主属性: '元气',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.元气, 值: 805 },
      { 属性: 属性类型.内功基础攻击, 值: 1286 },
      { 属性: 属性类型.全会心等级, 值: 4309 },
      { 属性: 属性类型.全能等级, 值: 1915 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.体质 }, { 镶嵌类型: 属性类型.全会心等级 }],
  },
  {
    id: 100326,
    uid: 217746,
    装备名称: '承康衫',
    所属门派: '通用',
    装备主属性: '根骨',
    装备品级: 12300,
    装备类型: 装备类型枚举.普通,
    装备增益: [
      { 属性: 属性类型.体质, 值: 4429 },
      { 属性: 属性类型.根骨, 值: 805 },
      { 属性: 属性类型.内功基础攻击, 值: 1286 },
      { 属性: 属性类型.内功会心等级, 值: 4309 },
      { 属性: 属性类型.全能等级, 值: 1915 },
    ],
    镶嵌孔数组: [{ 镶嵌类型: 属性类型.体质 }, { 镶嵌类型: 属性类型.内功会心等级 }],
  },
]

export default 衣服装备数据
