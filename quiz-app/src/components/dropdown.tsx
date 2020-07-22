import React from 'react';
import { Wrapper } from '../App.styles';

type props = {
    name:string
    dropdowndata: Array<{option:string, value:string}>            
    handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    currentValue:string;
}

const DropDown: React.FC<props> = ({name, dropdowndata, handleChange, currentValue}) => (
    <>
     <Wrapper>
        <select className="category"
            value={currentValue}
            onChange={handleChange} 
            name={name}
            aria-label="Select a category"
        >
        {dropdowndata.map((data)=>{
           return  <option value={data['value']}>{data['option']}</option>
        })}     
        </select>
     </Wrapper>  
    </>
)

export default DropDown