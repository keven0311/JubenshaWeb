import React, { useState } from 'react'

interface Type{
    name:string;
    value:string;
}

interface SortProps{
    typeName:string;
    typeNameCN:string;
    types:Type[];
    setCriteria: React.Dispatch<React.SetStateAction<Record<string,string[]>>>;
}

const Sorting:React.FC<SortProps> = ({typeName,typeNameCN, types, setCriteria}) => {
    const [isVisible, setIsVisible] = useState(false);
    
    function toggleVisible(){
        setIsVisible(!isVisible)
    }

    const handleCheckboxChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = e.target;

        setCriteria(prevCriteria => {
            const newCriteria = { ...prevCriteria};
            if(checked){
                if(!newCriteria[name]?.includes(value)){
                    newCriteria[name] = [...(newCriteria[name] || []), value]
                }
            }else{
                newCriteria[name] = (newCriteria[name] || []).filter(v => v !== value);
            }
            return newCriteria
        })
    }

  return (
    <div className='sorting-types'>
                <div className='sorting-fixed'>
                    <span>{typeNameCN}</span>
                    <button onClick={toggleVisible}>{isVisible ? '-' : '+'}</button>
                </div>
                <div className={`sorting ${isVisible ? '' : 'hidden' }`}>
                    {types.map(type => (
                        <div key={type.name} className='checkbox-container'>
                        <input type='checkbox' 
                                name={typeName} 
                                value={type.value}
                                onChange={handleCheckboxChnage}/>
                        <label htmlFor={type.name}>{type.name}</label>
                    </div>
                    ))}
                </div>
            
    </div>
  )
}

export default Sorting