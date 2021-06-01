import React, { useState } from 'react';
import {IState as Props} from '../App';

interface IProps{
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople})=>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note:"",
        url:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = ()=>{
        if(
            !input.name ||
            !input.age ||
            !input.url
        ){
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                note: input.note,
                url: input.url
            }
        ])

        setInput({
            name: "",
        age: "",
        note:"",
        url:""
        })
    }
    return(
        <div className="AddToList">
            <input
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            name="name"
            className="AddToList-input"/>
             <input
            type="number"
            value={input.age}
            placeholder="Age"
            onChange={handleChange}
            name="age"
            className="AddToList-input"/>
             <input
            type="text"
            value={input.url}
            placeholder="Image url"
            name="url"
            onChange={handleChange}
            className="AddToList-input"/>
             <textarea
            placeholder="note"
            value={input.note}
            onChange={handleChange} 
            name="note"
            className="AddToList-input"/>

            <button 
            className="AddToList-btn"
            onClick={handleClick}>Add</button>
        </div>
        )
}

export default AddToList