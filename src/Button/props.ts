import { ReactNode, CSSProperties } from 'react';

type ISize = "small" | "medium" | "large";
type IColor =
  | ""
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "white";
type IIcon =
  | ""
  | "juzhongduiqi"
  | "zuuoduiqi"
  | "yiwen"
  | "xuanzewendnag"
  | "youduiqi"
  | "xunhuan"
  | "bianji"
  | "xiugai"
  | "xinhao"
  | "xiaoxi"
  | "xiazai2"
  | "tianjiawenjian"
  | "tianjiawendang"
  | "tianjia2"
  | "tianjia1"
  | "tixing"
  | "tishi"
  | "suoxiao"
  | "gongzuotai"
  | "zhichuhetong";

type IType = 'primary' | 'danger' | 'warning' | 'text' | 'message';

interface ButtonProps {
  /**
   * @description 按钮主题
   * @default primary
   */
  type?: IType;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  color?: IColor;
  /**
   * @description 图标按钮
   */
  icon?: IIcon;
  /**
   * @description 类名
   */
  className?: string;
  size?: ISize;
  round?: false | true;
  plain?: false | true;
  children?: ReactNode;
}

export {
    ISize,
    IColor,
    IIcon,
    ButtonProps
}