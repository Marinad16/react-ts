import React from "react";
import styles from "./header.module.scss"
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface Header {

}

const Header: React.FC<Header> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.language}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.5L0.803847 0.500001L11.1962 0.5L6 9.5Z" fill="white"/>
                </svg>
                EN
            </div>
            <ThemeToggle/>
            <svg className={styles.user} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DA4648"/>
                <path d="M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M11.875 35C13.1037 32.8714 14.871 31.1038 16.9994 29.8749C19.1278 28.6459 21.5423 27.9989 24 27.9989C26.4577 27.9989 28.8722 28.6459 31.0006 29.8749C33.129 31.1038 34.8963 32.8714 36.125 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </header>
    );
}

export default Header;