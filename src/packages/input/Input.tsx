import React,{forwardRef} from 'react'
//import type { InputRef } from 'rc-input';
interface Props{
  value:any
}
// HTMLInputElement
interface InputRef{
  focus: (options?: any) => void;
  blur: () => void;
  setSelectionRange: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => void;
  select: () => void;
  input: HTMLInputElement | null;
}
const Input = forwardRef<InputRef, Props>((props, ref) => {
  return(
    <input ref={ref}/>
  )

})
Input.displayName = 'Input'
export default Input
