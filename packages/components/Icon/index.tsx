import React, { ReactElement } from "react";
import { iconProps } from './props';

const AIcon = (props: iconProps): ReactElement => {
  const { iconName, customClassName, onIconClick } = props;
  const handleIcon = () => onIconClick?.();
  return (
    <span className={customClassName}>
      <i className={`iconfont icon-${iconName}`} onClick={handleIcon}></i>
    </span>
  );
}

export default AIcon;
