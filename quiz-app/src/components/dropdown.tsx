import React from 'react';

type props = {
    name:string
    dropdowndata: Array<{option:string, value:string}>            
    handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    currentValue:string;
}

const DropDown: React.FC<props> = ({name, dropdowndata, handleChange, currentValue}) => (
    <>
        <select
            value={currentValue}
            onChange={handleChange} 
            name={name}
        >
        {dropdowndata.map((data)=>{
           return  <option value={data['value']}>{data['option']}</option>
        })}     
        </select>
    </>
)

export default DropDown