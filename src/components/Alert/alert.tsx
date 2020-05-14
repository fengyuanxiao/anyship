import React, { FC, useState } from 'react'
import classNames from 'classnames'

// 定义type四种主题色
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  // alert标题
  title: string;
  type?: AlertType;
  closable?: boolean;
  detailstion?: string;
  onClose?: () => void;
}

const Alert: FC<AlertProps> = (props) => {
  // 触发Alert 组件关闭事件
  const [ hide, setHide ] = useState(true)

  // 展开获取父集传入的props值
  const {
    title,
    type,
    closable,
    detailstion,
    onClose,
  } = props

  // Alert组件整体大的 div 样式判断
  const classname = classNames('any-alert', {
    [`any-alert-${type}`]: type
  })
  // title判断样式
  const titleClass = classNames('any-alert-desc', {
    ['bold-title']: detailstion
  })
  // 关闭alert事件
  const handleClose = () => {
    console.log(onClose)
    setHide(false)
  }

  return(
    hide ?
      <div className={classname}>
        <span className={titleClass}>{title}</span>
        <div>
          {detailstion && <p className="any-alert-desc">{detailstion}</p>}
        </div>
        {/* closable为 true 就显示关闭，默认是为 true */}
        {closable && <span onClick={handleClose} className="any-alert-close">关闭</span>}
      </div>
      :
      <></>
  )
}

// 给Alert 组件添加默认值 
Alert.defaultProps = {
  closable: false,
  type: 'default'
}

export default Alert