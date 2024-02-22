import { useState } from "react"

export const Searchbar = ({onNewAnime}) => {
  

  const [inputValue, setInputValue] = useState('')
 

  const onInputChange = ({target}) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    
    event.preventDefault();
    console.log(inputValue)
    if(inputValue.trim().length-1) return;
    onNewAnime(inputValue.trim());
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar Anime"
        value={ inputValue }
        onChange={onInputChange}
      />
    </form>
  )
}
