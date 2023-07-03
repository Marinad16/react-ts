import React from "react";
import styles from "./dateAndTime.module.scss";
import DateAndTime from "./DateAndTime";

const DateAndTimeList = () => {

    return (
        <div className={styles.dateWrapper}>
            <DateAndTime/>
            <div className={styles.actions}>
                <div className={styles.add}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Добавить дату
                </div>
                <div className={styles.remove}>
                    Очистить
                </div>
            </div>
        </div>
    );
};

export default DateAndTimeList;