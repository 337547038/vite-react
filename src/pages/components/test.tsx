import {useState} from 'react';
import Input from "../../packages/input/Input";

interface uploadType {
  name?: string
  title?: string
  disabled?: boolean
}

function App(props: uploadType) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      test{props.title}
    </div>
  );
}

App.defaultProps = {
  disabled: true,
};
App.propTypes = {}
export default App;
