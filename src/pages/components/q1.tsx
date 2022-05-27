import React, {ReactElement, useCallback, useState, useRef} from "react";

import {Dialog} from '../../packages/dialog'
import {Button} from '../../packages/button'
import {Pagination} from '../../packages/pagination'

function Example() {
  const changePageSizes = (page: number) => {
    alert(page)
  }
  return (<div className='demo-page'>
    <Pagination
      total={5000}
      current={1}
      showJumper={true}
      pageSizes={[10, 20, 30, 50]}
      pageSize={10}
      showTotal={true}
      changePageSizes={changePageSizes} />
  </div>)
}

export default Example

