import {useState} from 'react'

interface uploadType {
  name?: string
  title?: String
  disabled?: Boolean
}

function App(props: uploadType) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      test{props.title}
    </div>
  )
}

App.defaultProps = {
  disabled: true,
};
export default App
