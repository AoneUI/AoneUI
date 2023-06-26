import { AppBar, AButton, AIcon } from 'aone-ui';
import React from 'react';

const ButtonDemo = () => {
  return (
    <>
      <AppBar title="主题色按钮">
        <AButton>默认按钮</AButton>
        <AButton type="primary">主要按钮</AButton>
        <AButton type="info">信息按钮</AButton>
        <AButton type="success">成功按钮</AButton>
        <AButton type="warning">警告按钮</AButton>
        <AButton type="danger">危险按钮</AButton>
      </AppBar>

      <AppBar title="文字按钮">
        <AButton text outline type="primary">
          外边框按钮
        </AButton>
        <AButton text type="primary">
          纯文字按钮
        </AButton>
      </AppBar>

      <AppBar title="按钮尺寸">
        <AButton type="primary">常规按钮</AButton>
        <AButton type="success" size="small">
          小型按钮
        </AButton>
        <AButton type="warning" size="mini">
          迷你按钮
        </AButton>
        <AButton type="danger" size="large">
          大型按钮
        </AButton>
      </AppBar>

      <AppBar title="块级按钮">
        <AButton block type="primary">
          常规按钮
        </AButton>
      </AppBar>

      <AppBar title="自定义颜色">
        <AButton color="#66bb6a" text-color="#fff">
          背景/文字
        </AButton>
        <AButton
          color="linear-gradient(to right, #69dbaa, #3a7afe)"
          text-color="#fff"
        >
          使用渐变
        </AButton>
      </AppBar>

      <AppBar title="圆形按钮">
        <AButton type="primary" round>
          <AIcon name="ab-testing" color="red" />
        </AButton>
        <AButton type="info" round>
          <AIcon name="abacus" />
        </AButton>
      </AppBar>
    </>
  );
};

export default ButtonDemo;
