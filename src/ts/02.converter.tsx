import React from "react"

function Converter() {
    const [time, setTime] = React.useState(0);
    const [flip, setFlip] = React.useState(true);
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
            <h3>Super Converter</h3>
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

export default Converter