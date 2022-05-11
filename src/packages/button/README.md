# Button 按钮

### 函数组件

支持函数组件写法。注意：如果要渲染 React Components 组件，导出组件名称必须是 `Example`，否则只会进行代码高亮处理。

```jsx
import { Button } from "./index";

const Example = () => {
  const [nums, setNums] = useState(1);
  return (
    <div className="demo-button">
      <Button onClick={() => setNums(10)}>默认按钮{nums}</Button>
    </div>
  );
};
export default Example;
```
### 类组件

支持类组件写法。注意：如果要渲染 React Components 组件，导出组件名称必须是 `Example`，否则只会进行代码高亮处理。

```jsx
import { Button } from "./index";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: 10,
    };
  }
  render() {
    return (
      <div className="demo-button">
        <Button onClick={() => this.setState({ nums: 100 })}>
          默认按钮 {this.state.nums}
        </Button>
      </div>
    );
  }
}
export default Example;
```
## API

### Props

| 参数         | 说明                                               | 类型     | 默认值    |
| ------------ | -------------------------------------------------- | ------ | --------- |
| type         | 类型，可选值为 `primary` `info` `warning` `danger` | string | `default` |
| size         | 尺寸，可选值为 `large` `small` `mini`              | _string_ | `normal`  |
| color        | 按钮颜色，支持传入 `linear-gradient` 渐变色        | _string_ | -         |
| icon         | 图标名称                                           | _string_ | -         |
| iconSize     | 加载图标大小                                       | _string_ | `16px`    |
| iconPosition | 图标展示位置，可选值为 `right`                     | _string_ | `left`    |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
