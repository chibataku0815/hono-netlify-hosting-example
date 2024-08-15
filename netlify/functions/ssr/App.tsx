import { useState } from "hono/jsx"

export default function App() {
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>Hono SPA template</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}