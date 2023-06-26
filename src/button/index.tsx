import React , { type FC } from 'react';
import { createNameSpace } from '../utils/create';
import { ButtonProps, buttonDefaultProps } from './props';
import '../styles/common.less';
import './index.less';

const Button: FC<ButtonProps> = (p) => {
    const { n, classes } = createNameSpace('cell');
    const props = { ...buttonDefaultProps, ...p };

    return (
        <button 
            ref={ref}
            type={props.nativeType}
            disabled={props.disabled}
            style={{
                color: props.textColor,
                background: props.color
            }}
            onClick={props.onClick}
            className={classes(
                n(),
                n('$--box'),
                n(`--${props.size}`),
                [props.block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
                [props.disabled, n('--disabled')],
                [
                    props.text,
                    `${n(`--text-${props.type}`)} ${n('--text')}`,
                    `${n(`--${props.type}`)} ${n('$-elevation--2')}`,
                ],
                [props.text && props.disabled, n('--text-disabled')],
                [props.round, n('--round')],
                [props.outline, n('--outline')],
            )}
        >
            {props.children}
        </button>
    );
};

export default Button;