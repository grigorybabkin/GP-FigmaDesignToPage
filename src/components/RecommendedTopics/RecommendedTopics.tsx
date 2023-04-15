import React from "react";
import styles from "./RecommendedTopics.module.scss";
import { WideTopicCard } from "../WideTopicCard";

function RecommendedTopics() {
    return (
        <div className={styles.recommended_topics}>
            <h2 className={styles.recommended_topics__header}>Рекомендуемые темы</h2>
            <div className={styles.recommended_topics__stack}>
                <WideTopicCard
                    title={"Начало работы"}
                    tags={["Для новичка", "Основы работы"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    btn_title={"Продолжить тему"}
                    num={8}
                    out_of={10}
                    text={"заданий"}
                    text_info_shown={true}
                />
            </div>
            <div className={styles.recommended_topics__more}>
                <hr/>
                <button className={styles.btn__ghost}>
                    Показать ещё
                    <div>
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.89818 8.18756L1.25177 5.54115L0.544666 6.24826L4.39822
                                10.1018L8.25177 6.24826L7.54467 5.54115L4.89818 8.18764V0.898254H3.89818V8.18756Z"
                                fill="#00395C" fillOpacity="0.8"/>
                        </svg>
                    </div>
                </button>
                <hr/>
            </div>
        </div>
    )
}

export { RecommendedTopics }