import { useState } from "react"

export default ({uniData, updateList}) => {
    const [value, setValue] = useState('')
    return (
        <section id="searchbar">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
            onClick={()=>{
               const filteredUniData = uniData.filter(dataObj=>{
                    return dataObj.name.toLowerCase().includes(value.toLowerCase())
                })
                updateList(filteredUniData);
                console.log(filteredUniData);
            }}
            >Search</button>
        </section>
    )
}