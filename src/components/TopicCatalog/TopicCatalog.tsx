import React from "react";
import styles from "./TopicCatalog.module.scss";
import { BasicTopicCard } from "../BasicTopicCard";

function TopicCatalog() {
    return (
        <div>
            <h2 className={styles.topic_catalog__header}>Каталог тем</h2>

            <div className={styles.topic_catalog__category}>
                <button className={styles.active}>Все</button>
                <button>Рабочая среда</button>
                <button>Библиотеки</button>
                <button>Пройденные</button>
                <button>Не пройденные</button>
            </div>
            <div className={styles.topic_catalog__grid_view}>
                <BasicTopicCard
                    title={"Начало работы"}
                    tags={["Для новичка", "Основы работы"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={8}
                    out_of={10}
                    text={"заданий"}
                />
                <BasicTopicCard
                    title={"Работа с библиотеками GPN"}
                    tags={["Профессионалу", "Библиотеки"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={0}
                    out_of={255}
                    text={"заданий"}
                />
                <BasicTopicCard
                    title={"Введение в рабочую среду"}
                    tags={["Профессионалу", "Библиотеки"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={0}
                    out_of={10}
                    text={"заданий"}
                />
                <BasicTopicCard
                    title={"Начало работы"}
                    tags={["Для новичка", "Основы работы"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={3}
                    out_of={10}
                    text={"заданий"}
                />
                <BasicTopicCard
                    title={"Работа с библиотеками GPN"}
                    tags={["Профессионалу", "Библиотеки"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={0}
                    out_of={255}
                    text={"заданий"}
                />
                <BasicTopicCard
                    title={"Введение в рабочую среду"}
                    tags={["Профессионалу", "Библиотеки"]}
                    content={"Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}
                    num={0}
                    out_of={10}
                    text={"заданий"}
                />
            </div>
        </div>
    )
}

export { TopicCatalog }