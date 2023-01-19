import styles from "../css/03.button.module.css"

type prop = {
    text: string
}

function Component({ text }: prop) {
    return (
        <div>
            <button
                className={styles.btn} >
                {text}
            </button>
        </div>
    )
}

export default Component