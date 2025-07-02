import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { FolderTree } from "./components/FolderTree";

function App() {


  return (
    <>
    <h2>Tree Structure UI React Examples</h2>
      <div style={{ padding: 20 }}>
        <FolderTree />
      </div>
    </>
  )
}

export default App
