import { useState, useEffect } from "react"

function Component() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev);

    return (
        <div>
            {showing ? <Hello></Hello> : null}
            <button
                onClick={onClick}
            >{showing ? `Hide` : `Show`}</button>
        </div>
    )
}

function Hello() {
    useEffect(() => {
        console.log(`created :)`)
        return () => console.log(`destroyed :(`)
    }, [])
    return <h1>Hello</h1>
}

export default Component