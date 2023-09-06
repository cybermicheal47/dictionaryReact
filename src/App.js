import React from 'react'
import Header from './components/Header'
import Meaning from './components/Meaning'
import { DictionaryProvider } from './context/Dictionarycontext'
import Results from './components/Results'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notfound from './components/Notfound'

function App() {
  return (
    <DictionaryProvider>
      <Router>
        <div>
          <Routes>
        
            <Route path="/" element={<Results />} />
            {/* Add other routes as needed */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </Router>
    </DictionaryProvider>
  )
}

export default App
