import React, { FC } from 'react'
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  /**标题 */
  title?: string;
  // 描述
  description?: string;
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType;
}

const Alert: FC<AlertProps> = (props) => {
  const {
    description,
    type,
    title,
  } = props
  console.log(props);
  
  const classes = classNames('any-alert', {
    [`any-alert-${type}`]: type,
  })
  const titleClass = classNames('any-alert-title', {
    'bold-title': description
  })
  return(
    <div className = {classes}>
      <span className={titleClass}>{title}</span>
      {/* {description && <p className="any-alert-desc">{description}</p>} */}
      {description && <p className="any-alert-desc">{description}</p>}
    </div>
  )
}

Alert.defaultProps = {
  type: 'default',
}

export default Alert

