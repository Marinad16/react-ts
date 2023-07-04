import React, {useState} from "react";
import styles from "./push.module.scss"
import AudienceCounter from "../../components/AudienceCounter/AudienceCounter";
import TextInput from "../../components/TextImput/TextInput";
import SimpleSelect from "../../components/SimpleSelect/SimpleSelect";
import DateAndTimeList from "../../components/DateAndTime/DateAndTimeList";
import Segmentation from "../../components/Segmentation/Segmentation";
import {FormSchema} from "../../utils/pushSchema";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {updatePushes} from "../../store/pushDataSlice";


const PushPage = () => {
    const dispatch = useDispatch();

    const [push, setPush] = useState({
        title: "",
        push_title: "",
        push_text: "",
        push_icon: "",
        push_image: "",
        push_lang: "",
        push_type: [
            {
                date: null,
                time: null,
            }
        ],
        aud: [
            {
                name: null,
                value: null,
            }
        ],
        segmentation: [
            {
                name: "",
                action1: "",
                action2: "",
                amount: null,
            }
        ]
    });
    const [formErrors, setFormErrors] = useState();
    console.log(push)

    const onClickHandler = (e) => {
        e.preventDefault();
        FormSchema.validate(push)
            .then((valid) => {
                if (valid) {
                    // addPush(push);
                    console.log("zsdg")
                    dispatch(updatePushes(push));
                }
            })
            .catch((e) => {
                let errors = {};
                e.inner.map((el) => {
                    console.log(errors)
                    errors = {
                        ...errors,
                        [el.path]: el.message,
                    };
                });
                setFormErrors({...formErrors, ...errors});
            });
    };
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
                    <AudienceCounter/>
                </div>
            </div>
            <form action="">
                <TextInput name={"title"} placeholder={"Введите название нового пуша"} label={"Название пуша"}
                           option={""} push={push} setPush={setPush}/>
                <div className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <div className={styles.mainForm}>
                            <TextInput name={"push_title"} placeholder={"Введите заголовок максимально 50 символов"}
                                       label={"Заголовок сообщения"} option={""} push={push} setPush={setPush}/>
                            <div className={styles.inputWrapper}>
                                <label className={styles.inputLabel} htmlFor="name">Текст сообщения</label>
                                <textarea className={styles.textarea} id="name" name="name"
                                          placeholder="Введите текст максимально 150 символов"
                                          onChange={(e) => setPush({...push, push_text: e.target.value})}/>
                            </div>
                            <SimpleSelect label={"Исходный язык"} placeholder={"Выберите пункт"} isMulti={false}/>
                            <div className={styles.group}>
                                <TextInput name={"push_icon"} placeholder={"Введите ссылку на иконку"} label={"Иконка"}
                                           option={"(опцильнально)"} push={push} setPush={setPush}/>
                                <TextInput name={"push_image"} placeholder={"Введите ссылку на изображение"}
                                           label={"Изображение"} option={"(опцильнально)"} push={push}
                                           setPush={setPush}/>
                            </div>
                        </div>
                        <div className={styles.preview}>
                            <DateAndTimeList/>
                            <SimpleSelect label={"Аудитория"} placeholder={"Выберите пункт"} isMulti={true}/>
                            <Segmentation/>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Отмена</button>
                        <button className={styles.buttonBg} onClick={(e) => onClickHandler(e)}>Создать Пуш</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PushPage;