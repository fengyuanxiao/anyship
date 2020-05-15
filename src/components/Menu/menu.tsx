import React, { FC, useState, createContext } from 'react'
import classNames from 'classnames'

type Mode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

interface MenuProps {
  className?: string;
  mode?: Mode;
  style?: React.CSSProperties;
  defaultIndex?: number;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: FC<MenuProps> = (props) => {

  const { children, className, mode, style, defaultIndex, onSelect } = props
  const [ currentActive, setActive ] = useState(defaultIndex)

  const classes = classNames('any-menu', className, {
    'menu-vertical': mode === "vertical"
  })
  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }

  return(
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: "vertical",
  defaultIndex: 0,
}

export default Menu