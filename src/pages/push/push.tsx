import React, {useState} from "react";
import styles from "./push.module.scss"
import Select, {ActionMeta, SingleValue} from "react-select";

interface PushPage {
}

interface SelectProps {
    value: string;
    label: string;
}

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

const PushPage: React.FC<PushPage> = () => {
    const [selectedOption, setSelectedOption] = useState<SelectProps>();
    const handleSelectChange = (
        option: SelectProps
    ) => {
        setSelectedOption(option);
    };
    console.log(selectedOption)
    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <h1>Пуши</h1>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h2>Создать новое пуш уведомление</h2>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="15.25" stroke="#F0B11C"
                                  strokeWidth="1.5"/>
                            <path
                                d="M14.4304 20.186C14.4304 19.546 14.4688 18.9657 14.5456 18.4452C14.631 17.9161 14.8102 17.4041 15.0832 16.9092C15.3307 16.4313 15.6251 16.0431 15.9664 15.7444C16.3078 15.4372 16.6747 15.1428 17.0672 14.8612C17.4598 14.5796 17.848 14.234 18.232 13.8244C18.5734 13.4404 18.7995 13.0564 18.9104 12.6724C19.0214 12.2799 19.0768 11.866 19.0768 11.4308C19.0768 11.0468 19.0299 10.7012 18.936 10.394C18.8507 10.0783 18.7056 9.80946 18.5008 9.58759C18.1936 9.20359 17.8096 8.93906 17.3488 8.79399C16.8966 8.64892 16.423 8.57639 15.928 8.57639C15.4587 8.57639 15.015 8.64039 14.5968 8.76839C14.1872 8.89639 13.8459 9.09692 13.5728 9.36999C13.2998 9.61746 13.0992 9.92039 12.9712 10.2788C12.8432 10.6287 12.7792 11.0084 12.7792 11.418H10.3984C10.4496 10.6756 10.6246 9.97159 10.9232 9.30599C11.2304 8.63186 11.6528 8.07719 12.1904 7.64199C12.6939 7.21532 13.2699 6.90386 13.9184 6.70759C14.567 6.50279 15.2198 6.40039 15.8768 6.40039C16.7472 6.40039 17.5707 6.53266 18.3472 6.79719C19.1323 7.06172 19.7851 7.50119 20.3056 8.11559C20.7067 8.55079 21.0054 9.04999 21.2016 9.61319C21.3979 10.1764 21.496 10.7695 21.496 11.3924C21.496 12.1519 21.3424 12.8601 21.0352 13.5172C20.7366 14.1743 20.3312 14.7673 19.8192 15.2964C19.5376 15.6036 19.2304 15.8852 18.8976 16.1412C18.5734 16.3972 18.2619 16.6532 17.9632 16.9092C17.6731 17.1652 17.4427 17.4468 17.272 17.754C17.0502 18.1551 16.9222 18.5263 16.888 18.8676C16.8624 19.2004 16.8496 19.6399 16.8496 20.186H14.4304ZM14.4432 25.2036V22.4004H16.8496V25.2036H14.4432Z"
                                fill="#F0B11C"/>
                        </svg>
                    </div>
                    <div className={styles.counter}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="40" height="40" rx="4" fill="#745F27"/>
                            <path
                                d="M20.0004 28.1922C23.1159 28.1922 25.6414 25.6666 25.6414 22.5512C25.6414 19.4357 23.1159 16.9102 20.0004 16.9102C16.8849 16.9102 14.3594 19.4357 14.3594 22.5512C14.3594 25.6666 16.8849 28.1922 20.0004 28.1922Z"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M29.7422 18.9609C30.9367 18.9589 32.1152 19.2361 33.1837 19.7703C34.2521 20.3045 35.1809 21.081 35.896 22.0379"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M4.10156 22.0379C4.81669 21.081 5.74551 20.3045 6.81395 19.7703C7.88238 19.2361 9.06086 18.9589 10.2554 18.9609"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M12.3086 32.294C13.0122 31.0636 14.1062 30.0266 15.4662 29.3013C16.8262 28.576 18.3975 28.1914 20.0009 28.1914C21.6044 28.1914 23.1756 28.576 24.5356 29.3013C25.8956 30.0266 26.9897 31.0636 27.6932 32.294"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M10.8137 18.9612C9.92991 18.9621 9.06408 18.7137 8.3174 18.245C7.57073 17.7763 6.97406 17.1066 6.59711 16.3143C6.22016 15.522 6.07849 14.6397 6.18867 13.7705C6.29885 12.9013 6.65632 12.0812 7.21931 11.4059C7.7823 10.7306 8.52756 10.2281 9.36801 9.95701C10.2085 9.68594 11.1094 9.65752 11.9655 9.87507C12.8217 10.0926 13.5977 10.5472 14.2029 11.1856C14.808 11.8241 15.2174 12.62 15.3831 13.4805"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M24.6172 13.4805C24.7829 12.62 25.1923 11.8241 25.7974 11.1856C26.4026 10.5472 27.1786 10.0926 28.0348 9.87507C28.8909 9.65752 29.7918 9.68594 30.6323 9.95701C31.4727 10.2281 32.218 10.7306 32.781 11.4059C33.344 12.0812 33.7015 12.9013 33.8116 13.7705C33.9218 14.6397 33.7801 15.522 33.4032 16.3143C33.0262 17.1066 32.4296 17.7763 31.6829 18.245C30.9362 18.7137 30.0704 18.9621 29.1866 18.9612"
                                stroke="#F0B11C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div>
                            <h5>Счетчик аудитории</h5>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <form action="">
                <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel} htmlFor="name">Название пуша</label>
                    <input className={styles.input} id="name" type="text" name="name"
                           placeholder="Введите название нового пуша"/>
                </div>
                <div className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <div className={styles.mainForm}>
                            <div className={styles.inputWrapper}>
                                <label className={styles.inputLabel} htmlFor="name">Заголовок сообщения</label>
                                <input className={styles.input} id="name" type="text" name="name"
                                       placeholder="Введите заголовок максимально 50 символов"/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label className={styles.inputLabel} htmlFor="name">Текст сообщения</label>
                                <textarea className={styles.textarea} id="name" name="name"
                                          placeholder="Введите текст максимально 150 символов"/>
                            </div>
                            <Select
                                onChange={(option: SingleValue<any>) => {
                                    handleSelectChange(option)
                                }}
                                options={options}
                                />
                            <div className={styles.group}>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.inputLabel}
                                           htmlFor="name">Иконка <span>(опцильнально)</span> </label>
                                    <input className={styles.input} id="name" type="text" name="name"
                                           placeholder="Введите ссылку на иконку"/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.inputLabel}
                                           htmlFor="name">Изображение <span>(опцильнально)</span> </label>
                                    <input className={styles.input} id="name" type="text" name="name"
                                           placeholder="Введите ссылку на изображение"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.preview}>
                            sdfzsds
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PushPage;