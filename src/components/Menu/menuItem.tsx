import React, { FC, useContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

interface MenuItemProps {
  className?: string;
  style?: CSSProperties;
  index: number;
  disabled?: boolean;
}

const MenuItem: FC<MenuItemProps> = (props) => {

  const { className, style, index, disabled, children } = props
  const context = useContext(MenuContext)
  console.log(context)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-acitve': context.index === index,
  })
  const handleClick = () => {
    if(context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return(
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem