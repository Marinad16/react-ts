import React, {useState} from "react";
import "./simpleSelect.scss";
import Select, {SingleValue} from "react-select";
import styles from "../TextImput/textInput.module.scss";

interface SelectProps {
    value: string;
    label: string;
}
interface SimpleSelectProps {
    label: string;
    placeholder: string;
}

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

const SimpleSelect: React.FC<SimpleSelectProps> = ({label, placeholder}) => {
    const [selectedOption, setSelectedOption] = useState<SelectProps>();
    const handleSelectChange = (
        option: SelectProps
    ) => {
        setSelectedOption(option);
    };
    console.log(selectedOption)
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.select}>
                {label}
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.875 9.375H10.5V13.75H11.125" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.3438 7.5C10.8615 7.5 11.2812 7.08027 11.2812 6.5625C11.2812 6.04473 10.8615 5.625 10.3438 5.625C9.82598 5.625 9.40625 6.04473 9.40625 6.5625C9.40625 7.08027 9.82598 7.5 10.3438 7.5Z" fill="#F0B11C"/>
            </svg>
            </div>
        <Select
            className="react-select-container"
            classNamePrefix="react-select"
            onChange={(option: SingleValue<any>) => {
                handleSelectChange(option)
            }}
            options={options}
            placeholder={placeholder}
        />
        </div>
    );
};

export default SimpleSelect;