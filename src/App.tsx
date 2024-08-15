import { useState } from "hono/jsx";

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Hono SPA template test</h1>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</>
	);
}
