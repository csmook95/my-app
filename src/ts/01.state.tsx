import { useState } from "react"

function Component() {
    const [index, setIndex] = useState(0)
    const fnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIndex(parseFloat(event.target.value))
    }

    return (
        <div>
            <h1>Super Converter</h1>
            <select
                onChange={fnChange}>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr />
            {index === 0
                ? <MinutesToHours></MinutesToHours>
                : <KmToMiles></KmToMiles>}
        </div>
    )
}

function MinutesToHours() {
    const [time, setTime] = useState(0);
    const [flip, setFlip] = useState(true);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.isNaN(event.target.value)
            || parseFloat(event.target.value) === 0) {
            setTime(0)
        }
        else setTime(parseFloat(event.target.value))
    }
    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (parseFloat(event.target.value) === 0) {
            event.target.value = ``
        }
    }
    const fnReset = () => setTime(0)
    const fnFlip = () => {
        setTime(0)
        setFlip(current => !current)
    }
    const validTime = (value: number) => {
        if (Number.isNaN(time)) return ``
        else return value
    }

    return (
        <div>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input
                    value={validTime(flip ? time : time * 60)}
                    id="minutes"
                    type="number"
                    placeholder="Minutes"
                    onChange={onChange}
                    onFocus={onFocus}
                    disabled={!flip}></input>
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input
                    value={validTime(flip ? Math.round(time / 60) : time)}
                    id="hours"
                    type="number"
                    placeholder="Hours"
                    onChange={onChange}
                    onFocus={onFocus}
                    disabled={flip}></input>
            </div>
            <button onClick={fnReset}>Reset</button>
            <button onClick={fnFlip}>Flip</button>
        </div>
    );
}

function KmToMiles() {
    return (
        <div>hi</div>
    )
}

export default Component