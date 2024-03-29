import React from "react";
import styles from "./segmentation.module.scss";
import SimpleSelect from "../SimpleSelect/SimpleSelect";

const SegmentationItem = ({index, removeSegmentationItem}) => {
    const handleRemoveClick = () => {
        removeSegmentationItem(index);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemMain}>
                <SimpleSelect label={""} placeholder={"Был внесен дипозит"} isMulti={false}/>
                <svg onClick={handleRemoveClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25 8.33333H7M13.5455 13.3333V20M18.4545 13.3333V20M23.3636 8.33333V24.1667C23.3636 24.3877 23.2774 24.5996 23.124 24.7559C22.9706 24.9122 22.7624 25 22.5455 25H9.45455C9.23755 25 9.02944 24.9122 8.876 24.7559C8.72256 24.5996 8.63636 24.3877 8.63636 24.1667V8.33333M20.0909 8.33333V6.66667C20.0909 6.22464 19.9185 5.80072 19.6116 5.48816C19.3048 5.17559 18.8885 5 18.4545 5H13.5455C13.1115 5 12.6952 5.17559 12.3884 5.48816C12.0815 5.80072 11.9091 6.22464 11.9091 6.66667V8.33333"
                        stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={styles.itemContent}>
                <SimpleSelect label={""} placeholder={"Был "} isMulti={false}/>
                <SimpleSelect label={""} placeholder={"Был "} isMulti={false}/>
                <input className={styles.numberInput} id="number" type="number"
                       placeholder="Колличество"/>
            </div>
        </div>
    );
};

export default SegmentationItem;