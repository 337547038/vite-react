import React,{useState,forwardRef} from 'react';
import App from "../index";

interface HeaderSearchProps {
  onSearch?: (value?: string) => void
  name?: string
  title?: string
  disabled?: boolean
  onSubmit: (values: any) => Promise<void>
  children?: React.ReactNode;
}
const HeaderSearch = React.forwardRef<HTMLDivElement, HeaderSearchProps>((props, ref) => {
//const HeaderSearch: React.FC<HeaderSearchProps> = forwardRef((props,ref) => {
  return (<div ref={ref}>test2{props.title},{props.name}</div>);
});
HeaderSearch.defaultProps = {
  disabled: true,
};
HeaderSearch.displayName='HeaderSearch'
export default HeaderSearch;
