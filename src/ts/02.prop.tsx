import React from "react"

function Component() {
    const [value, setValue] = React.useState(`Save Changes`)
    const changeValue = () => setValue(`Revert Changes`)

    return (
        <div>
            <MemorizedBtn text={value} changeValue={changeValue}></MemorizedBtn>
            <MemorizedBtn text="confirm"></MemorizedBtn>
        </div>
    )
}

type props = {
    text: string,
    changeValue?(): void
}

function Btn({ text, changeValue }: props) {
    return (
        <button
            style={{
                backgroundColor: `tomato`,
                color: `white`,
                padding: `10px 20px`,
                border: 0,
                borderRadius: 10,
                fontSize: 16
            }}
            onClick={changeValue}>
            {text}
        </button>
    )
}

const MemorizedBtn = React.memo(Btn);

export default Component