import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault()
        if(inputValue.trim().length < 1){
            return
        }
        onAddCategory(inputValue.trim())
        setInputValue('')


        // setCategories([...categories,inputValue])
        // setInputValue('')
        // setCategories(categories => [...categories,inputValue])



    }
  return (
    <>
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
    />

    </form>


    </>
  )
}
