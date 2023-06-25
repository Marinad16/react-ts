import React from "react";
import styles from "./sidebar.module.scss"
import {Link} from "react-router-dom";

interface Sidebar {
}

const data = [
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.625 5.25H4.375C3.89175 5.25 3.5 5.64175 3.5 6.125V19.25C3.5 19.7332 3.89175 20.125 4.375 20.125H23.625C24.1082 20.125 24.5 19.7332 24.5 19.25V6.125C24.5 5.64175 24.1082 5.25 23.625 5.25Z"
                stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 20.125L21 24.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M10.5 20.125L7 24.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M10.5 13.125V15.75" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M14 11.375V15.75" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M17.5 9.625V15.75" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M14 5.25V2.625" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
        ,
        title: 'Дашборд',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.625 17.5C12.7661 17.5 15.3125 14.9536 15.3125 11.8125C15.3125 8.67138 12.7661 6.125 9.625 6.125C6.48388 6.125 3.9375 8.67138 3.9375 11.8125C3.9375 14.9536 6.48388 17.5 9.625 17.5Z" stroke="#DA4649" strokeWidth="1.5" strokeMiterlimit="10"/>
            <path d="M16.9976 6.33281C17.5003 6.19645 18.0188 6.12659 18.5397 6.125C20.0482 6.125 21.4948 6.72422 22.5614 7.79083C23.628 8.85744 24.2272 10.3041 24.2272 11.8125C24.2272 13.3209 23.628 14.7676 22.5614 15.8342C21.4948 16.9008 20.0482 17.5 18.5397 17.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.75 21.591C2.63807 20.3273 3.81723 19.2958 5.18788 18.5838C6.55854 17.8717 8.08043 17.5 9.625 17.5C11.1696 17.5 12.6915 17.8717 14.0621 18.5838C15.4328 19.2958 16.6119 20.3273 17.5 21.591" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5391 17.5C20.0838 17.499 21.606 17.8703 22.9768 18.5824C24.3476 19.2944 25.5266 20.3263 26.4141 21.5906" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ,
        title: 'Аудитория',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.96592 19.3595C3.66314 17.1615 3.20744 14.5635 3.68438 12.0534C4.16132 9.54321 5.53809 7.29345 7.55623 5.72644C9.57437 4.15944 12.0951 3.38295 14.6452 3.54277C17.1952 3.70258 19.5993 4.7877 21.406 6.5944C23.2127 8.40111 24.2978 10.8052 24.4576 13.3552C24.6174 15.9053 23.8409 18.426 22.2739 20.4442C20.7069 22.4623 18.4572 23.8391 15.947 24.316C13.4368 24.7929 10.8389 24.3372 8.64092 23.0345V23.0345L5.00967 24.0626C4.8609 24.1061 4.70316 24.1088 4.55298 24.0704C4.40281 24.032 4.26574 23.9539 4.15613 23.8443C4.04652 23.7346 3.96842 23.5976 3.93001 23.4474C3.89159 23.2972 3.89428 23.1395 3.9378 22.9907L4.96592 19.3595Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 15.3125C14.7249 15.3125 15.3125 14.7249 15.3125 14C15.3125 13.2751 14.7249 12.6875 14 12.6875C13.2751 12.6875 12.6875 13.2751 12.6875 14C12.6875 14.7249 13.2751 15.3125 14 15.3125Z" fill="white"/>
            <path d="M8.75 15.3125C9.47487 15.3125 10.0625 14.7249 10.0625 14C10.0625 13.2751 9.47487 12.6875 8.75 12.6875C8.02513 12.6875 7.4375 13.2751 7.4375 14C7.4375 14.7249 8.02513 15.3125 8.75 15.3125Z" fill="white"/>
            <path d="M19.25 15.3125C19.9749 15.3125 20.5625 14.7249 20.5625 14C20.5625 13.2751 19.9749 12.6875 19.25 12.6875C18.5251 12.6875 17.9375 13.2751 17.9375 14C17.9375 14.7249 18.5251 15.3125 19.25 15.3125Z" fill="white"/>
        </svg>
        ,
        title: 'Пуши',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7.875V9.625" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 18.375V20.125" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.375 18.375H15.3125C15.8927 18.375 16.4491 18.1445 16.8593 17.7343C17.2695 17.3241 17.5 16.7677 17.5 16.1875C17.5 15.6073 17.2695 15.0509 16.8593 14.6407C16.4491 14.2305 15.8927 14 15.3125 14H12.6875C12.1073 14 11.5509 13.7695 11.1407 13.3593C10.7305 12.9491 10.5 12.3927 10.5 11.8125C10.5 11.2323 10.7305 10.6759 11.1407 10.2657C11.5509 9.85547 12.1073 9.625 12.6875 9.625H16.625" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ,
        title: 'Офферы',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 23.625V4.375C21 3.4085 20.2165 2.625 19.25 2.625L8.75 2.625C7.7835 2.625 7 3.4085 7 4.375L7 23.625C7 24.5915 7.7835 25.375 8.75 25.375H19.25C20.2165 25.375 21 24.5915 21 23.625Z" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 7.875C14.7249 7.875 15.3125 7.28737 15.3125 6.5625C15.3125 5.83763 14.7249 5.25 14 5.25C13.2751 5.25 12.6875 5.83763 12.6875 6.5625C12.6875 7.28737 13.2751 7.875 14 7.875Z" fill="#DA4649"/>
        </svg>
        ,
        title: 'Устройства',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 16.625H17.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 13.125H17.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 4.375H21.875C22.1071 4.375 22.3296 4.46719 22.4937 4.63128C22.6578 4.79538 22.75 5.01794 22.75 5.25V23.625C22.75 23.8571 22.6578 24.0796 22.4937 24.2437C22.3296 24.4078 22.1071 24.5 21.875 24.5H6.125C5.89294 24.5 5.67038 24.4078 5.50628 24.2437C5.34219 24.0796 5.25 23.8571 5.25 23.625V5.25C5.25 5.01794 5.34219 4.79538 5.50628 4.63128C5.67038 4.46719 5.89294 4.375 6.125 4.375H10.5" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.625 7.875V7C9.625 5.83968 10.0859 4.72688 10.9064 3.90641C11.7269 3.08594 12.8397 2.625 14 2.625C15.1603 2.625 16.2731 3.08594 17.0936 3.90641C17.9141 4.72688 18.375 5.83968 18.375 7V7.875H9.625Z" stroke="#DA4649" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ,
        title: 'Метрики',
    },
]

const Sidebar: React.FC<Sidebar> = () => {

    return (
        <aside className={styles.container}>
            <Link to="/" className={styles.logo}>
                <svg width="68" height="28" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_607)">
                        <path
                            d="M67.9881 28L61.573 0H57.5759L61.721 17.4553H55.5895L54.6641 21.3357H62.634L64.2129 27.9754L67.9881 28Z"
                            fill="#FF0000"/>
                        <path
                            d="M53.5667 0L48.9649 19.4017L44.0056 0L40.2305 0.0369541L35.6412 19.3894L30.6695 0L26.8944 0.0369541L22.3051 19.4017L17.3456 0L13.5705 0.0246348L8.98123 19.4017L4.00948 0H0L7.16773 28L10.9428 27.963L15.5321 8.59834L20.4915 28L24.2666 27.9754V27.963L28.8683 8.59834L33.8277 28L37.6028 27.9754V27.963L42.1921 8.59834L47.1517 28L50.9265 27.9754L52.5057 21.3357H52.5182L52.8633 19.8328L57.5639 0H53.5667Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_607">
                            <rect width="68" height="28" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </Link>
            <nav className={styles.nav}>
                <ul>
                    {data.map(item => (
                        <li key={item.title}>
                            <Link to="/" className={`${styles.link} ${item.title === 'Пуши' ? styles.active : ''}`}>
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;