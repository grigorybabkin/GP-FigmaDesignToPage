import React from "react";
import styles from "./DeveloperWay.module.scss";
import { BasicTopicCard } from "../BasicTopicCard";

function DeveloperWay() {
    return (
        <div className={styles.dev_way}>
            <div className={styles.dev_way__control_panel}>
                <div className={styles.dew_way__header}><h2>Путь Front End Developer</h2></div>
                <button className={styles.btn_hide + " " + styles.btn__ghost}>Скрыть пройденные</button>
                <div className={styles.slider_control_group}>
                    <button className={styles.btn__control_circular}>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.40717 5.00002L7.70427 1.70291L6.29006 0.288696L0.578735 6.00002L6.29006
                                11.7113L7.70427 10.2971L4.40716 7.00002H13V5.00002H4.40717Z"
                                fill="#00395C" fillOpacity="0.8"/>
                        </svg>
                    </button>
                    <button className={styles.btn__control_circular}>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.5942 5.00002L5.29709 1.70291L6.7113 0.288696L12.4226 6.00002L6.7113 11.7113L5.29709
                                10.2971L8.59421 7.00002H0V5.00002H8.5942Z"
                                fill="#00395C" fillOpacity="0.8"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.dev_way__slider}>
                <div className={styles.dev_way__slider__card}>
                    <BasicTopicCard
                        title={"Добро пожаловать!"}
                        tags={["Для новичка", "Основы работы"]}
                        content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                        num={10}
                        out_of={10}
                        text={"заданий"}
                    />
                </div>
                <div className={styles.dev_way__slider__card}>
                    <BasicTopicCard
                        title={"Начало работы"}
                        tags={["Для новичка", "Основы работы"]}
                        content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                        num={8}
                        out_of={10}
                        text={"заданий"}
                    />
                </div>
                <div className={styles.dev_way__slider__card}>
                    <BasicTopicCard
                        title={"Введение в рабочую среду"}
                        tags={["Для новичка", "Основы работы"]}
                        content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                        num={0}
                        out_of={10}
                        text={"заданий"}
                    />
                </div>
            </div>
        </div>
    )
}

export { DeveloperWay }