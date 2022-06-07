export interface getValueRef {
  getValue: () => any
}
export interface RulesObject {
  type: string
  msg: string
  rule?: string
  validator?: (val: string) => boolean
  len?:number
}
