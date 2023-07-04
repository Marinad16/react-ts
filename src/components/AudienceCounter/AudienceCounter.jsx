import React from "react";
import styles from "./audienceCounter.module.scss";

const AudienceCounter = () => {

    return (
        <div className={styles.counter}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="40" height="40" rx="4" fill="#745F27"/>
                <path
                    d="M20.0004 28.1922C23.1159 28.1922 25.6414 25.6666 25.6414 22.5512C25.6414 19.4357 23.1159 16.9102 20.0004 16.9102C16.8849 16.9102 14.3594 19.4357 14.3594 22.5512C14.3594 25.6666 16.8849 28.1922 20.0004 28.1922Z"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M29.7422 18.9609C30.9367 18.9589 32.1152 19.2361 33.1837 19.7703C34.2521 20.3045 35.1809 21.081 35.896 22.0379"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M4.10156 22.0379C4.81669 21.081 5.74551 20.3045 6.81395 19.7703C7.88238 19.2361 9.06086 18.9589 10.2554 18.9609"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M12.3086 32.294C13.0122 31.0636 14.1062 30.0266 15.4662 29.3013C16.8262 28.576 18.3975 28.1914 20.0009 28.1914C21.6044 28.1914 23.1756 28.576 24.5356 29.3013C25.8956 30.0266 26.9897 31.0636 27.6932 32.294"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M10.8137 18.9612C9.92991 18.9621 9.06408 18.7137 8.3174 18.245C7.57073 17.7763 6.97406 17.1066 6.59711 16.3143C6.22016 15.522 6.07849 14.6397 6.18867 13.7705C6.29885 12.9013 6.65632 12.0812 7.21931 11.4059C7.7823 10.7306 8.52756 10.2281 9.36801 9.95701C10.2085 9.68594 11.1094 9.65752 11.9655 9.87507C12.8217 10.0926 13.5977 10.5472 14.2029 11.1856C14.808 11.8241 15.2174 12.62 15.3831 13.4805"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M24.6172 13.4805C24.7829 12.62 25.1923 11.8241 25.7974 11.1856C26.4026 10.5472 27.1786 10.0926 28.0348 9.87507C28.8909 9.65752 29.7918 9.68594 30.6323 9.95701C31.4727 10.2281 32.218 10.7306 32.781 11.4059C33.344 12.0812 33.7015 12.9013 33.8116 13.7705C33.9218 14.6397 33.7801 15.522 33.4032 16.3143C33.0262 17.1066 32.4296 17.7763 31.6829 18.245C30.9362 18.7137 30.0704 18.9621 29.1866 18.9612"
                    stroke="#F0B11C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
                <h5>Счетчик аудитории</h5>
                <span>0</span>
            </div>
        </div>
    );
};

export default AudienceCounter;