import React,{useState} from 'react'

interface HeaderSearchProps {
  onSearch?: (value?: string) => void
  name?: string
  title?: string
  disabled?: boolean
  onSubmit?: (values: any) => Promise<void>;
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  return (<div>test2{props.title},{props.name}</div>)
}
HeaderSearch.defaultProps = {
  disabled: true,
};
export default HeaderSearch;
