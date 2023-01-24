import { useState, useEffect } from "react"
import styles from "../css/03.button.module.css"

type prop = {
    text: string
}

function Component({ text }: prop) {
    const [counter, setCounter] = useState(0)
    const [keyword, setKeyword] = useState(``)
    const onClick = () => setCounter(prev => ++prev);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }
    console.log(`i run all the time`);
    const iRunOnlyOnce = () => console.log(`i run only once.`)
    const iRunWhenCounter = () => console.log(`i run when 'counter' changes.`)
    const iRunWhenKeyword = () => console.log(`i run when 'keyword' changes.`)
    const iRunWhenCounterAndKeyword = () => console.log(`i run when 'counter' and 'keyword' changes.`)
    useEffect(iRunOnlyOnce, [])
    useEffect(iRunWhenCounter, [counter])
    useEffect(iRunWhenKeyword, [keyword])
    useEffect(iRunWhenCounterAndKeyword, [counter, keyword])

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."></input>
            <h1>{counter}</h1>
            <button
                className={styles.btn}
                onClick={onClick} >
                {text}
            </button>
        </div>
    )
}

export default Component