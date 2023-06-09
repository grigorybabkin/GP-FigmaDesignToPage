import React from "react";
import styles from "./NavBar.module.scss";
import profile_pic from "../../assets/profile_pic.png";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.nav__brand}>Портал Разработчика</a>
            <ul className={styles.nav__menu}>
                <li className={styles.nav__item__active}><a href="#" className={styles.nav__link}>Моё обучение</a></li>
                <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Задачи</a></li>
            </ul>
            <div className={styles.info_panel}>
                <div className={styles.info_panel__controls}>
                    <button>
                        <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 0C4.44772 0 4 0.447715 4 1C4 1.04201 4.00259 1.08342 4.00762 1.12406C2.27853
                                1.56545 1 3.13342 1 5V8C0.447715 8 0 8.44772 0 9C0 9.55228 0.447716 10 1 10H9C9.55229
                                10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8V5C9 3.13342 7.72147 1.56545 5.99238
                                1.12406C5.99741 1.08342 6 1.04201 6 1C6 0.447715 5.55228 0 5 0Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path d="M7 11C7 12.1046 6.10457 13 5 13C3.89543 13 3 12.1046 3 11H7Z" fill="#00395C"
                                  fillOpacity="0.8"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0
                                  10.866 3.13401 14 7 14ZM5.69199 5H4C4 3.2 5.28325 2 7.2 2C8.98564 2 10.2 3.14549
                                  10.2 4.7C10.2 5.70942 9.78033 6.44145 8.9 7C8.06962 7.51817 7.74 7.74697 7.74
                                  8.393L7.79 9H6.14L6.07 8.37954C5.98883 7.30283 6.4384 6.74509 7.3 6.2C8.10541 5.68183
                                  8.3 5.42584 8.3 4.8C8.3 4.10584 7.79193 3.61507 7 3.61507C6.20807 3.61507 5.72945
                                  4.25976 5.69199 5ZM8.10822 11.0472C8.10822 11.7538 7.67742 12.1913 6.97815
                                  12.1913C6.27888 12.1913 5.84183 11.7538 5.84183 11.0472C5.84183 10.3339 6.27888
                                  9.8965 6.97815 9.8965C7.67742 9.8965 8.10822 10.3339 8.10822 11.0472Z"
                                  fill="#00395C" fillOpacity="0.8"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V2C7 2.55228 7.44772 3 8
                                3C8.55228 3 9 2.55228 9 2V1Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M13.6569 3.75736C14.0474 3.36683 14.0474 2.73367 13.6569 2.34314C13.2663 1.95262
                                12.6332 1.95262 12.2426 2.34315L11.5355 3.05025C11.145 3.44078 11.145 4.07394 11.5355
                                4.46447C11.9261 4.85499 12.5592 4.85499 12.9497 4.46447L13.6569 3.75736Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M3.75739 2.34317C3.36686 1.95265 2.7337 1.95265 2.34317 2.34317C1.95265 2.7337
                                1.95265 3.36686 2.34317 3.75739L3.05022 4.46443C3.44074 4.85495 4.0739 4.85495 4.46443
                                4.46443C4.85495 4.0739 4.85495 3.44074 4.46443 3.05022L3.75739 2.34317Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8C3
                                7.44772 2.55228 7 2 7H1Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M14 7C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9H15C15.5523 9 16 8.55228
                                16 8C16 7.44772 15.5523 7 15 7H14Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M12.9497 11.5355C12.5592 11.145 11.926 11.145 11.5355 11.5355C11.145 11.926 11.145
                                12.5592 11.5355 12.9497L12.2427 13.6569C12.6332 14.0474 13.2664 14.0474 13.6569
                                13.6569C14.0474 13.2664 14.0474 12.6332 13.6569 12.2427L12.9497 11.5355Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M4.46447 11.5355C4.07394 11.145 3.44078 11.145 3.05025 11.5355L2.34315 12.2426C1.95262
                                12.6332 1.95262 13.2663 2.34315 13.6569C2.73367 14.0474 3.36683 14.0474 3.75736
                                13.6569L4.46447 12.9497C4.85499 12.5592 4.85499 11.9261 4.46447 11.5355Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path
                                d="M9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14V15C7 15.5523 7.44772 16 8
                                16C8.55228 16 9 15.5523 9 15V14Z"
                                fill="#00395C" fillOpacity="0.8"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12
                                  8C12 5.79086 10.2091 4 8 4Z"
                                  fill="#00395C" fillOpacity="0.8"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.info_panel__profile}>
                    <div className={styles.info_panel__profile__pic_frame}>
                        <img src={profile_pic} alt="profile pic" className={styles.info_panel__profile__pic}/>
                    </div>
                    <div className={styles.info_panel__profile__name}>Михаил Романов</div>
                </div>
            </div>
        </nav>
    )
}

export { NavBar }