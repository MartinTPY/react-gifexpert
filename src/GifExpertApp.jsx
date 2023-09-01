import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (category)=>{

      if(categories.includes(category)){
        return
      }

      setCategories([category,...categories])


    }
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory 
    onAddCategory = {onAddCategory}
    // categories = {categories} setCategories ={setCategories}
     />

        {categories.map(category => {
            return (
            <GifGrid category={category} key={category} />
            )

        })}
    </>
  )
}
