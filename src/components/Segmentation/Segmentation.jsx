import React from "react";
import styles from "./segmentation.module.scss";
import SimpleSelect from "../SimpleSelect/SimpleSelect";

const Segmentation = () => {

    return (
        <div className={styles.container}>
            <div className={styles.addSeg}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M12 6V18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                Добавить сегментацию
            </div>
            <div className={styles.segmentationWrapper}>
                <div className={styles.item}>
                    <SimpleSelect label={""} placeholder={"Был внесен дипозит"} isMulti={false}/>
                </div>
            </div>
        </div>
    );
};

export default Segmentation;