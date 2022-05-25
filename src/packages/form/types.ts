export interface getValueRef {
  getValue: () => void
}
export interface RulesObject {
  type: string
  msg: string
  rule?: string
  validator?: (val: string) => boolean
  len?:number
}
