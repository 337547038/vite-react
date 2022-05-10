import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
    <header className="App-header">
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </header>
  </div>
  )
}

export default App
