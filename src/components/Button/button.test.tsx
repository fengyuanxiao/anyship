import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}


describe('test button component', () => {
  // 应该渲染默认按钮
  it('render default button', () => {
    const wrapper = render(<Button {...defaultProps}>btn</Button>)
    const element = wrapper.getByText('btn') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  // 应该根据不同的 类名 渲染正确的组件
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>btn</Button>)
    const element = wrapper.getByText('btn')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  // 应该渲染是否是a标签和链接
  it('should render a link when btntype qeuals link and href is provided', () => {
    const wrapper = render(<Button btnType="link" href="www.baidu.com">a link</Button>)
    const element = wrapper.getByText('a link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  // 当禁用设置为true时，应该呈现禁用按钮
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled or true?</Button>)
    const element = wrapper.getByText('disabled or true?') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})