/**
 * @name 心法模块-太虚剑意
 * 模块写入者：XX
 */
import type { 心法配置类型 } from '@/心法模块/interface'

import 背景图 from './资源/背景图'
import 默认数据 from './默认数据'
import 计算循环 from './计算循环'
import 奇穴数据 from './奇穴'
import 技能系数, { 技能增益 } from './技能系数'

const 心法配置: 心法配置类型 = {
  名称: '太虚剑意',
  简写: 'jc',
  数据提供: '数据：考拉 作者：松间 (框架来自唐宋开源项目 致谢)',
  所属门派: '纯阳',
  主属性: '身法',
  功法: '外功',
  基础属性: { 基础攻击: 3277, 会心等级: 2929 },
  主属性额外加成: { 面板攻击: 1485 / 1024, 会心等级: 594 / 1024 },
  基础气血加成: 235,
  奇穴数据: 奇穴数据,
  技能系数: 技能系数,
  技能增益: 技能增益,
  计算循环: 计算循环,
  默认数据: 默认数据,
  覆盖率: { 套装会心会效: 0.7 },
  系统配置: {
    主题色: '#365E9F',
    收益柱形图颜色: '#4159b4',
    心法图标: 'https://icon.jx3box.com/icon/619.png',
    背景图: 背景图,
    背景色渐变: `linear-gradient(to right, rgba(0,0,0,0.6) 5%, rgba(54,94,159, 0.25) 70%)`,
    背景色: 'rgba(8, 18, 43, 0.5)',
  },
}

export default 心法配置
