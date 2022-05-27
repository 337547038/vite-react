import React, {ReactElement, useCallback, useState, useRef} from "react";

import {Dialog} from '../../packages/dialog'
import {Button} from '../../packages/button'
import {Pagination} from '../../packages/pagination'
import { TransitionGroup,CSSTransition } from 'react-transition-group';
function Example() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={20000} classNames="my-node">
        <div className='CSSTransition'>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
}

export default Example

