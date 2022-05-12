# Button 按钮

默认情况下输出 a 标签

### 基础用法
```jsx
import {Tag} from './index'
const Example = () => {
  const [nums, setNums] = useState(1);
  return (
    <div className="demo-button">
      <div className="row">
        <Tag>默认按钮</Tag>
        
      </div>
    </div>
  );
};
export default Example;
```

