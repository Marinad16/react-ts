import React from "react";
import styles from "./sidebar.module.scss"

interface Sidebar {
}

const Sidebar: React.FC<Sidebar> = () => {
    return (
        <aside className={styles.container}>

        </aside>
    );
}

export default Sidebar;