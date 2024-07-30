import style from './CustomInput.module.scss';

import { useState } from 'react';

import { IMaskInput } from 'react-imask';


type CustomInputProps = {
    initialData: string;
    inputName: string;
    date?: boolean;
    phone?: boolean;
}

function CustomInput( { initialData, inputName, date, phone }: CustomInputProps ) {
    const [dataInput, setDataInput] = useState<string>(initialData)
    const [phoneMask, setPhoneMask] = useState<string>('')

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        if (phone) {
            const phoneNumber = e.target.value;
            
            const unmaskedPhoneNumber = phoneNumber.replace(/[()\s-]/g, ''); // Remove espaços, parênteses e traços
            
            if (unmaskedPhoneNumber.length >= 3) {
                unmaskedPhoneNumber[2] === "9" ? setPhoneMask('(00) 00000-0000') : setPhoneMask('(00) 0000-0000')
            }
        }

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

    if (phone === true) return <IMaskInput 
                                    id={inputName}
                                    name={inputName}
                                    className={style.customInput}
                                    mask={phoneMask}
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