import React from 'react';
// import {AButton} from 'aone-ui';
import { AButton } from '../../../src/entry';
import '../../styles/darkStyle.less';

export default function AButtonDemo1() {
    const AButtonStyle = { margin: '7px' };
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <AButton type="primary" style={AButtonStyle}>
            基础按钮
        </AButton>
        <AButton type="danger" style={AButtonStyle}>
            危险按钮
        </AButton>
        <AButton type="warning" style={AButtonStyle}>
            警告按钮
        </AButton>
        <AButton type="message" style={AButtonStyle}>
            信息按钮
        </AButton>
        <AButton type="text" style={AButtonStyle}>
            文本按钮
        </AButton>
        </div>
    );
}