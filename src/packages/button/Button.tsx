import React,{useState} from 'react'

interface HeaderSearchProps {
  onSearch?: (value?: string) => void
  name?: string
  title?: string
  disabled?: boolean
  onSubmit: (values: any) => Promise<void>
  children?: React.ReactNode;
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  return (<div>{props.children}</div>)
}
HeaderSearch.defaultProps = {
  disabled: true,
};
export default HeaderSearch;
