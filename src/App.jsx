import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero'
import './App.css'
import Customer from './components/Customer'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Hero />
<Customer />
</React.StrictMode>,
)