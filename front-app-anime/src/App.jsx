
import './App.css'
import { Navbar } from './components/Navbar'
import { Carusel } from './components/Carusel'
import { Searchbar } from './components/Searchbar'
import { useState } from 'react'

function App() {

  const [anime, setAnime] = useState('');

  const onChangeAnime = (newAnime) => {
    setAnime(newAnime)
  }
  console.log(anime)

  return (
    <>
      <Navbar/>
      <Searchbar
        onNewAnime={ (value) => onChangeAnime(value)}
      />
      <Carusel
        anime={anime}
      />
    </>
  )
}

export default App
