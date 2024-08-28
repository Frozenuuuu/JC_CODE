// 这个文件不会随着导入文件的变动而变动。如果导入遗漏了这里就会报错。
import 外功帽子 from './外功/帽子'
import 外功衣服 from './外功/衣服'
import 外功腰带 from './外功/腰带'
import 外功护腕 from './外功/护腕'
import 外功下装 from './外功/下装'
import 外功鞋子 from './外功/鞋子'
import 外功项链 from './外功/项链'
import 外功腰坠 from './外功/腰坠'
import 外功戒指 from './外功/戒指'
import 外功暗器 from './外功/暗器'
import 外功武器 from './外功/武器'

import 内功帽子 from './内功/帽子'
import 内功衣服 from './内功/衣服'
import 内功腰带 from './内功/腰带'
import 内功护腕 from './内功/护腕'
import 内功下装 from './内功/下装'
import 内功鞋子 from './内功/鞋子'
import 内功项链 from './内功/项链'
import 内功腰坠 from './内功/腰坠'
import 内功戒指 from './内功/戒指'
import 内功暗器 from './内功/暗器'
import 内功武器 from './内功/武器'
import { 心法配置类型 } from '@/心法模块/interface'
import { 装备属性信息模型 } from '@/@types/装备'

const 装备数据 = {
  外功: {
    帽子: 外功帽子,
    衣服: 外功衣服,
    腰带: 外功腰带,
    护腕: 外功护腕,
    下装: 外功下装,
    鞋子: 外功鞋子,
    项链: 外功项链,
    腰坠: 外功腰坠,
    戒指: 外功戒指,
    暗器: 外功暗器,
    武器: 外功武器,
  },
  内功: {
    帽子: 内功帽子,
    衣服: 内功衣服,
    腰带: 内功腰带,
    护腕: 内功护腕,
    下装: 内功下装,
    鞋子: 内功鞋子,
    项链: 内功项链,
    腰坠: 内功腰坠,
    戒指: 内功戒指,
    暗器: 内功暗器,
    武器: 内功武器,
  },
}

export const 获取当前心法对应的装备数据 = (功法, 心法数据: 心法配置类型) => {
  const 该功法数据 = 装备数据?.[功法]

  const 结果数据 = {}

  Object.keys(该功法数据).forEach((部位) => {
    const 该部位装备数据 = (该功法数据?.[部位] || []).filter((装备: 装备属性信息模型) => {
      if (装备?.所属门派 === 心法数据?.所属门派) {
        return true
      }
      if (装备?.所属门派 !== '通用' && 装备?.所属门派 !== 心法数据?.所属门派) {
        return false
      }
      if (装备?.装备主属性 !== '通用' && 装备?.装备主属性 !== 心法数据?.主属性) {
        return false
      }
      return true
    })
    结果数据[部位] = 该部位装备数据
  })

  return 结果数据
}

export default 装备数据
