import React from 'react'
import ReactDOM from 'react-dom/client'
// import AButton from './Button'
import './index.css';
import {AButton} from '../dist/react-ui-teaching.esm'
import "../public/iconfont/iconfont.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AButton>hello vite1</AButton>
    </React.StrictMode>
)