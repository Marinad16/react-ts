import React from "react";
import styles from "./textInput.module.scss";

const TextInput = ({label, name, placeholder, option}) => {

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.inputLabel} htmlFor={name}>{label}<span>{option}</span></label>
            <input className={styles.input} id={name} type="text" name={name}
                   placeholder={placeholder}/>
        </div>
    );
};

export default TextInput;