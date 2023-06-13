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
interface ButtonProps {
  color?: IColor;
  icon?: IIcon;
  size?: ISize;
  round?: false | true;
  plain?: false | true;
  children?: string;
}

export {
    ISize,
    IColor,
    IIcon,
    ButtonProps
}