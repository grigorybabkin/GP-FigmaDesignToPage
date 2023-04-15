import React from "react";
import styles from "./WideTopicCard.module.scss";
import { CircularProgressBar } from "../CircularProgressBar";

interface TopicCardProps {
    title: string;
    tags: string[];
    content: string;
    btn_title: string;
    num: number;
    out_of: number;
    text: string;
    text_info_shown: boolean;
}

function WideTopicCard(props: TopicCardProps) {
    return (
        <div className={styles.topic__info_card}>
            <div className={styles.topic__progress_info}>
                <CircularProgressBar
                    num={(props.num || 0)}
                    out_of={(props.out_of || 1)}
                    text={(props.text || "")}
                    text_info_shown={(props.text_info_shown)}
                />
            </div>
            <div className={styles.topic__main_info}>
                <div className={styles.topic__main_info__title}><h1>{props.title || ""}</h1></div>
                <div className={styles.topic__main_info__tags}>
                    <ul>
                        {props.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.topic__main_info__content}>{props.content || " "}</div>
                <button
                    className={styles.topic__main_info__btn + " " + styles.btn__primary}>{props.btn_title || " "}
                </button>
            </div>
        </div>
    )
}

export { WideTopicCard }