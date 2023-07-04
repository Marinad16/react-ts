import React, {useState} from "react";
import styles from "./segmentation.module.scss";
import SegmentationItem from "./SegmentationItem";

const Segmentation = () => {
    const [segmentationOpen, setSegmentationOpen] = useState(false);
    const [segmentationItems, setSegmentationItems] = useState([]);

    const handleSegmentation = () => {
        setSegmentationOpen(!segmentationOpen)
        addSegmentationItem()
    }

    // Function to add a SegmentationItem
    const addSegmentationItem = () => {
        setSegmentationItems([...segmentationItems, {}]);
    };

    // Function to remove a SegmentationItem
    const removeSegmentationItem = (index) => {
        const updatedItems = segmentationItems.filter((item, i) => i !== index);
        if (segmentationItems.length === 1) {
            setSegmentationOpen(false)
        }
        setSegmentationItems(updatedItems);
    };

    // Function to remove all segmentations
    const removeAllSegmentations = () => {
        setSegmentationItems([]);
        setSegmentationOpen(false)
    };

    return (
        <div className={styles.container}>
            {!segmentationOpen ?
                <div className={styles.addSeg} onClick={handleSegmentation}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M12 6V18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    Добавить сегментацию
                </div>
                : <div>
                    <h3 className={styles.opened}>
                        Сегментация
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.375 9.375H10V13.75H10.625" stroke="#F0B11C" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M9.84375 7.5C10.3615 7.5 10.7812 7.08027 10.7812 6.5625C10.7812 6.04473 10.3615 5.625 9.84375 5.625C9.32598 5.625 8.90625 6.04473 8.90625 6.5625C8.90625 7.08027 9.32598 7.5 9.84375 7.5Z"
                                fill="#F0B11C"/>
                        </svg>
                    </h3>
                    <div className={styles.segmentationWrapper}>
                        {segmentationItems.map((item, index) => (
                            <SegmentationItem
                                key={index}
                                index={index}
                                removeSegmentationItem={removeSegmentationItem}
                            />
                        ))}
                        <div className={styles.actions}>
                            <div className={styles.add} onClick={addSegmentationItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 6V18" stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Добавить сегментацию
                            </div>
                            <div className={styles.remove} onClick={removeAllSegmentations}>
                                Очистить
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Segmentation;