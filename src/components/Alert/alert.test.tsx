import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertProps } from './alert'

// 默认Alert 
const DefaultAlertProps: AlertProps = {
  title: 'default alert',
  closable: false
}

const TypeAlertProps: AlertProps = {
  title: 'success alert',
  type: 'success',
}



describe('test Alert component', () => {

  it('default alert', () => {
    // 渲染，并得到节点对象
    const wrapper = render(<Alert {...DefaultAlertProps} />)
    const element = wrapper.getByText('default alert')
    // 获取父元素
    const domDiv = element.parentElement as HTMLElement
    expect(element).toBeInTheDocument()
    expect(domDiv.tagName).toEqual('DIV')
    expect(element.tagName).toEqual('SPAN')
    expect(domDiv).toHaveClass('any-alert any-alert-default')
    expect(element).toHaveClass('any-alert-desc')
  })

  // 根据不同给的类名渲染不同的组件
  it('redner different components according to different class names', () => {
    const wrapper = render(<Alert {...TypeAlertProps} />)
    const element = wrapper.getByText('success alert')
    const divElem = element.parentElement as HTMLElement
    expect(divElem).toHaveClass('any-alert any-alert-success')
  })
})