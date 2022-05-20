import React, {useState, forwardRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
interface HeaderSearchProps {
  onSearch?: (value?: string) => void
  name?: string
  title?: string
  disabled?: boolean
  onSubmit: (values: any) => Promise<void>
  children?: React.ReactNode;
}

/*function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(friendID)
    /!*function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }*!/

    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      //ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}*/

function App() {
  const [value, setValue] = useState('1')
  //const isValue = useFriendStatus(value)
  //const isOnline = useFriendStatus('props.friend.id');
  //  console.log(isOnline)

  const onClick = () => {
    setValue('2')
    console.log(value)
    let div = document.createElement('div')
    //let div = document.body
    /*ReactDOM.createRoot(div).render(downPaneHtml)
    document.body.appendChild(div);*/
    //document.body.appendChild(div)
    //ReactDOM.createPortal(downPaneHtml,div)

  }
  const onClick2 = () => {
    console.log(onClick2)
    setValue('3')
    setTimeout(()=>{
      const root=document.body
     // root.unmount();
    },3000)
  }
  const downPaneHtml = (<div>
    <div>value值：{value}</div>
    <div onClick={onClick2}>事件</div>
  </div>)
  return (<div>
    <Link to='/input'>to</Link>
    <div>{value}</div>
    <div onClick={onClick}>onClick</div>
    {ReactDOM.createPortal(downPaneHtml, document.body)}
  </div>)
}

export default App/*
const HeaderSearch = React.forwardRef<HTMLDivElement, HeaderSearchProps>((props, ref) => {
//const HeaderSearch: React.FC<HeaderSearchProps> = forwardRef((props,ref) => {
  return (<div ref={ref}>test2{props.title},{props.name}</div>);
});
HeaderSearch.defaultProps = {
  disabled: true,
};
HeaderSearch.displayName='HeaderSearch'
export default HeaderSearch;*/
