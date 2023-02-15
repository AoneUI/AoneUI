import React from 'react'
import ReactDOM from 'react-dom/client'
// import AButton from './Button'
import {AButton} from '../dist/react-ui-teaching.esm'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AButton>hello vite1</AButton>
    </React.StrictMode>
)