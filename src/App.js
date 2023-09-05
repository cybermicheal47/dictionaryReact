import React from 'react'
import Header from './components/Header'
import Meaning from './components/Meaning'
import { DictionaryProvider } from './context/Dictionarycontext'
import Results from './components/Results'
function App() {
  return (
	<DictionaryProvider>
	<div>

	<Header />  
	<Results />
	</div>
	</DictionaryProvider>
  )
}

export default App
