import React, {useState} from "react";
import styles from "./dateAndTime.module.scss";
import DateAndTime from "./DateAndTime";
import SegmentationItem from "../Segmentation/SegmentationItem";
import SimpleSelect from "../SimpleSelect/SimpleSelect";

const DateAndTimeList = () => {
    const [dateOpen, setDateOpen] = useState(false);
    const [dateItems, setDateItems] = useState([]);

    const handleDate = () => {
        setDateOpen(!dateOpen)
        addDateItem()
    }

    // Function to add a DateItem
    const addDateItem = () => {
        setDateItems([...dateItems, {}]);
    };

    // Function to remove a DateItem
    const removeDateItem = (index) => {
        const updatedItems = dateItems.filter((item, i) => i !== index);
        if (dateItems.length === 1) {
            setDateOpen(false)
        }
        setDateItems(updatedItems);
    };

    // Function to remove all dates
    const removeAllDates = () => {
        setDateItems([]);
        setDateOpen(false)
    };
    return (
        <div>
            <SimpleSelect label={"Выберите тип рассылки"} placeholder={"Выберите пункт"}
                          isMulti={false} onClick={handleDate}/>
            {dateOpen ?
                <div className={styles.dateWrapper}>
                    {dateItems.map((item, index) => (
                        <DateAndTime
                            key={index}
                            index={index}
                            removeDateItem={removeDateItem}
                        />
                    ))}
                    <div className={styles.actions}>
                        <div className={styles.add} onClick={addDateItem}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12H18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6V18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Добавить дату
                        </div>
                        <div className={styles.remove} onClick={removeAllDates}>
                            Очистить
                        </div>
                    </div>
                </div>
            : null}
        </div>

    );
};

export default DateAndTimeList;