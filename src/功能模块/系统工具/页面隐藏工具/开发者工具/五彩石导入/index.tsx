import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { 五彩石导入函数 } from './utils'
import './index.css'

function WucaishiDaoru() {
  const [inputValue, setInputValue] = useState<string>()
  const [shuju, setShuju] = useState<any>()

  const getDetail = () => {
    if (inputValue) {
      try {
        const data = JSON.parse(inputValue)
        const i = 五彩石导入函数(data?.list)
        const strI = JSON.stringify(i)
        setShuju(strI)
      } catch (e) {
        message.error(`转化失败e${e}`)
      }
    } else {
      message.warning('请输入接口数据')
    }
  }

  const copy = () => {
    const res = document.getElementById('tools-daoru-wucaishi-result')
    if (res) {
      const text = res?.innerHTML
      if (text) {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', text)
        input.select()
        document.execCommand('copy') // 执行浏览器复制命令
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          message.success('复制成功')
        }
        if (text?.includes('未匹配')) {
          message.warning('存在未匹配装备')
        }
        document.body.removeChild(input)
      }
    }
  }

  return (
    <div>
      <Input.TextArea
        className={'tools-daoru-input'}
        placeholder='输入接口数据'
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
      />
      <div className={'tools-daoru-btns'}>
        <Button type='primary' disabled={!shuju} className='tools-daoru-btn' onClick={copy}>
          复制
        </Button>
        <Button onClick={getDetail}>转换</Button>
      </div>
      {shuju && (
        <div id='tools-daoru-wucaishi-result' className={'tools-daoru-result'}>
          {shuju}
        </div>
      )}
    </div>
  )
}

export default WucaishiDaoru
