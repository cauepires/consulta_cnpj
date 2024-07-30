import style from './CustomInput.module.scss';

import { useState } from 'react';

import { IMaskInput } from 'react-imask';


type CustomInputProps = {
    initialData: string;
    inputName: string;
    date?: boolean;
}

function CustomInput( { initialData, inputName, date }: CustomInputProps ) {
    const [dataInput, setDataInput] = useState<string>(initialData)

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
       setDataInput(e.target.value)
    }


    if (date === true) return <IMaskInput 
                                    id={inputName}
                                    name={inputName}
                                    className={style.customInput}
                                    mask="00/00/0000"
                                    placeholder={initialData}
                                    value={dataInput}
                                    onChange={handleInput}
                                />
           

    return (
        <input
            id={inputName}
            name={inputName}
            className={style.customInput}
            placeholder={initialData}
            value={dataInput}
            onChange={handleInput}
        />
    )
}

export { CustomInput }