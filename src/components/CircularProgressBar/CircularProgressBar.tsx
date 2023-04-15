import React, { CSSProperties } from "react";
import styles from "./CircularProgressBar.module.scss";

export interface MyCustomCSS extends CSSProperties {
    '--progress_center': string;
}

interface CircularProgressBarProps {
    num: number;
    out_of: number;
    text: string;
    text_info_shown: boolean;
}

function CircularProgressBar(props: CircularProgressBarProps) {
    const done_percentage_deg: number = ((props.num || 0) / (props.out_of || 1)) * 100 * 3.6
    const progress_center: string = done_percentage_deg < 360 ? "visible" : "hidden"
    return (
        <div className={styles.container}>
            <div className={styles.circular_progress} style={{
                background: " conic-gradient(var(--bg-success) " + done_percentage_deg + "deg, var(--bg-ghost) 0deg)",
                '--progress_center': progress_center } as MyCustomCSS}>
                <div className={styles.progress_value}>
                    {done_percentage_deg < 360
                        ? (props.text_info_shown) &&
                        <>
                            <div className={styles.progress_value__numbers}><h2>{props.num}/{props.out_of}</h2></div>
                            <div className={styles.progress_value__text}>{props.text}</div>
                        </>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2.5 18 13.6">
                            <path
                                d="M5.79876 8.41721L2.12386 5.07923L0.779144 6.55968L5.99379 11.2962L13.733 2.07302L12.2009
                                0.787449L5.79876 8.41721Z"
                                fill="var(--control-primary-typo)"/>
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export { CircularProgressBar }