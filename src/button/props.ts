import React from 'react';

export type ButtonProps = {
  block?: boolean;
  text?: boolean;
  outline?: boolean;
  color?: string;
  textColor?: string;
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  nativeType?: 'button' | 'reset' | 'submit';
  size?: 'normal' | 'mini' | 'small' | 'large';
  loading?: boolean;
  round?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  autoLoading?: boolean;
  children?: React.ReactNode;
  onTouchstart?: (event: React.MouseEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
};

export const buttonDefaultProps: ButtonProps = {
  type: 'default',
  nativeType: 'button',
  size: 'normal',
  loading: false,
  round: false,
  block: false,
  text: false,
  outline: false,
  disabled: false,
  ripple: false
};