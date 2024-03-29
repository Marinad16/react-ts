import React from "react";
import styles from "./dateAndTime.module.scss";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {renderTimeViewClock} from "@mui/x-date-pickers/timeViewRenderers";

const DateAndTime = ({index, removeDateItem, setDateAndTime, dateAndTime}) => {
    const handleRemoveClick = () => {
        removeDateItem(index);
    };

    return (
        <div className={styles.item}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker className={styles.datePicker} onChange={(newValue) =>setDateAndTime({...dateAndTime, date: newValue.$d})}/>
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker className={styles.datePicker}
                                onChange={(newValue) => setDateAndTime({...dateAndTime, time: newValue.$d})}
                                viewRenderers={{
                                    hours: renderTimeViewClock,
                                    minutes: renderTimeViewClock,
                                    seconds: renderTimeViewClock,
                                }}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <svg onClick={handleRemoveClick} className={styles.deleteIcon} width="32" height="32" viewBox="0 0 32 32"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25 8.33333H7M13.5455 13.3333V20M18.4545 13.3333V20M23.3636 8.33333V24.1667C23.3636 24.3877 23.2774 24.5996 23.124 24.7559C22.9706 24.9122 22.7624 25 22.5455 25H9.45455C9.23755 25 9.02944 24.9122 8.876 24.7559C8.72256 24.5996 8.63636 24.3877 8.63636 24.1667V8.33333M20.0909 8.33333V6.66667C20.0909 6.22464 19.9185 5.80072 19.6116 5.48816C19.3048 5.17559 18.8885 5 18.4545 5H13.5455C13.1115 5 12.6952 5.17559 12.3884 5.48816C12.0815 5.80072 11.9091 6.22464 11.9091 6.66667V8.33333"
                    stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default DateAndTime;