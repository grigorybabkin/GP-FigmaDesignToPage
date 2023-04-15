import React from "react";
import styles from "./BasicTopicCard.module.scss";
import { CircularProgressBar } from "../CircularProgressBar";

interface BasicTopicCardProps {
    title: string;
    tags: string[];
    content: string;
    num: number;
    out_of: number;
    text: string;
}

function BasicTopicCard(props: BasicTopicCardProps) {
    const num_out_of: number = props.num / props.out_of
    return (
        <div className={styles.basic_card}>
            <div className={styles.basic_card__container}>
                <div className={styles.basic_card__title}>
                    <h2>{props.title || ""}</h2>
                </div>
                <div className={styles.basic_card__tags}>
                    <ul>
                        {props.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.basic_card__content}>{props.content || " "}</div>
                <div className={styles.basic_card__btn_n_info}>
                    {num_out_of >= 1
                        ? <button className={styles.btn__primary__outline + " " + styles.basic_card__icon_btn}>
                            <div>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.85314 2.36057L1.5 0.5L0 6H5.5L4.02931 3.97781C4.8599 3.36333 5.88754
                                        2.99999 7.00004 2.99999C9.419 2.99999 11.4368 4.71776 11.9 7H13.9283C13.7711
                                        5.91148 13.3587 4.8686 12.7165 3.95999C11.8091 2.67595 10.4957 1.73483 8.98815
                                        1.28826C7.48057 0.841697 5.86654 0.915695 4.40614 1.49833C3.85028 1.7201 3.32899
                                        2.01064 2.85314 2.36057Z"
                                        fill="#0078D2"/>
                                    <path
                                        d="M1.2835 12.04C0.641349 11.1314 0.228902 10.0885 0.0717773 9H2.10001C2.56327
                                        11.2822 4.58103 13 6.99999 13C8.11249 13 9.14013 12.6367 9.97072 12.0222L8.50004
                                        10H14L12.5 15.5L11.1469 13.6394C10.671 13.9894 10.1498 14.2799 9.59389
                                        14.5017C8.13349 15.0843 6.51946 15.1583 5.01188 14.7117C3.5043 14.2652 2.19096
                                        13.3241 1.2835 12.04Z"
                                        fill="#0078D2"/>
                                </svg>
                            </div>
                            Пройти заново
                        </button>
                        : <button className={styles.btn__primary}>
                            {num_out_of != 0
                                ? "Продолжить"
                                : "Начать"
                            }
                        </button>
                    }
                    <div className={styles.basic_card__progress}>
                        {num_out_of < 1 &&
                            <>
                                <div className={styles.basic_card__progress__value}>
                                    {num_out_of != 0 &&
                                        <>{props.num}/</>
                                    }
                                    {props.out_of}
                                </div>
                                <div className={styles.basic_card__progress__text}>{props.text}</div>
                            </>
                        }
                        {num_out_of != 0 &&
                            <div className={styles.basic_card__progress__bar}>
                                <CircularProgressBar
                                    num={(props.num || 0)}
                                    out_of={(props.out_of || 1)}
                                    text={(props.text || "")}
                                    text_info_shown={false}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { BasicTopicCard }