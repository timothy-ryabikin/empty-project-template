import React, {SyntheticEvent} from 'react';
import styles from  './style.scss';

interface IParams {
    a: number;
    b: string;
}

const onClickEvent = (e: SyntheticEvent) => {
    e.preventDefault();
    const params: IParams = {
        a: 1,
        b: "2"
    }
    alert('You Clicked Me!');
}

const App = () => {
    return (
        <div className={styles.content}>
            <div className={styles.label}>
               Initial
            </div>
            <button className={styles.btn} onClick={onClickEvent}>Button</button>
        </div>
    )
}

export default App