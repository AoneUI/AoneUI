import React from 'react'
import ReactDOM from 'react-dom/client'
import AButton from './Button'
import './index.css';
// import {AButton} from '../dist/react-ui-teaching.esm'
// import "../public/iconfont/iconfont.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div>
            <AButton color='red' size='small'>红色按钮</AButton>
            <AButton color='green' size='small'>绿色按钮</AButton>
            <AButton color='blue' size='small'>蓝色按钮</AButton>
            <AButton color='red' size='small'>红色按钮</AButton>
            <AButton color='green' size='small'>绿色按钮</AButton>
            <AButton color='blue' size='small'>蓝色按钮</AButton>
        </div>
        <br />
        <div>
        <AButton color="red" size="small" round>红色按钮</AButton>
        <AButton color="green" size="medium" round>绿色按钮</AButton>
        <AButton color="blue" size="large" round>蓝色按钮</AButton>
        <AButton color="red" size="small" plain round>红色按钮</AButton>
        <AButton color="green" size="medium" plain round>绿色按钮</AButton>
        <AButton color="blue" size="large" plain round>蓝色按钮</AButton>
        </div>
        <br />
        <div>
            <AButton color='red' size='small' icon='bianji'></AButton>
            <AButton color='green' size='medium' icon='xiaoxi'></AButton>
            <AButton color='blue' size='large' icon='gongzuotai'></AButton>
            <AButton color='red' size='small' plain icon='bianji'></AButton>
            <AButton color='green' size='medium' plain icon='xiaoxi'></AButton>
            <AButton color='blue' size='large' plain icon='gongzuotai'></AButton>
        </div>
        <br />
        <div>
            <AButton color='red' size='small' icon='bianji'>红色按钮</AButton>
            <AButton color='green' size='medium' icon='xiaoxi'>绿色按钮</AButton>
            <AButton color='blue' size='large' icon='gongzuotai'>蓝色按钮</AButton>
            <AButton color='red' size='small' icon='bianji'>红色按钮</AButton>
            <AButton color='green' size='medium' icon='xiaoxi'>绿色按钮</AButton>
            <AButton color='blue' size='large' icon='gongzuotai'>蓝色按钮</AButton>
        </div>
    </React.StrictMode>
)