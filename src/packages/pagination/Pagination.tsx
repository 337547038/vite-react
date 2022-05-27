import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import {Select} from '../select'

import {prefixCls} from '../prefix'

interface Props {
  current?: number
  total: number
  pageSize?: number
  showJumper?: boolean // 显示快速切换到某一页
  pagerCount?: number // 点击折叠向前或向后跳多少页
  pageSizes?: number[]
  showTotal?: boolean
  hideSinglePage?: boolean // 当只有一页时，是否隐藏分页
  format?: boolean // 总记录数值转成千分制
  onChange?: (page: number) => void
  changePageSizes?: (page: number) => void
}

interface StateType {
  active: number
  goToPage: number
  pageSizes: number[]
  selectOptions: { label: string; value: string }[]
  pagesTotal: string[]
  pageStart: number
  pageEnd: number
}

const Pagination: React.FC<Props> = (props) => {
  const {
    pageSize = 20,
    pagerCount = 5,
    hideSinglePage = false
  } = props
  const [state, setstate] = useState<StateType>({
    active: props.current || 1, // 当前页
    goToPage: props.current || 1, // 快速跳到第几页
    pageSizes: props.pageSizes || [],
    selectOptions: [],
    pagesTotal: [],
    pageStart: 0,
    pageEnd: 0
  })
  const pageCount = Math.ceil(props.total / pageSize)
  const hidePage = hideSinglePage && pageCount <= 1
  let formatValue = props.total.toString()
  if (props.format) {
    formatValue = props.total
      .toString()
      .replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
  }
  useEffect(() => {
    const selectOption: { label: string; value: string }[] = []
    state.pageSizes.forEach((item) => {
      selectOption.push({label: `每页${item}条`, value: item + ''})
    })
    const pages = getPages()
    const pageStart = parseInt(pages.start?.toString(), 10)
    const pageEnd = parseInt(pages.end?.toString(), 10)
    setstate({
      ...state,
      pagesTotal: pages.showPages,
      selectOptions: selectOption,
      pageStart: pageStart,
      pageEnd: pageEnd
    })
  }, [state.active])
  const getPages = () => {
    let start = 0
    let end = pageCount - 1
    const pagerCount2 = parseInt((pagerCount / 2).toString(), 10)
    if (state.active + pagerCount2 < pageCount) {
      end = state.active + pagerCount2
    }

    if (state.active >= pagerCount) {
      start = state.active - pagerCount2
    } else {
      // 当前页小于pagerCount时
      end = pagerCount > pageCount ? pageCount : pagerCount
    }
    // 接近尾页时
    if (pageCount - state.active < pagerCount) {
      const fixedStart = pageCount - pagerCount + 1
      start = fixedStart > start ? start : fixedStart
    }
    if (start < 2) {
      start = 2
    }
    if (end >= pageCount - 1) {
      end = pageCount - 1
    }
    // 如果只有一页时
    const showPages = []
    let forStart = start
    while (forStart <= end) {
      showPages.push(forStart.toString())
      forStart++
    }
    //return [showPages, start, end]
    return {
      showPages, start, end
    }
  }
  const goTo = (page: number, disabled?: boolean) => {
    if (disabled) {
      return
    }
    console.log(page)
    let goToPage = page
    if (page > pageCount) {
      goToPage = pageCount
    }
    if (page < 1) {
      goToPage = 1
    }
    setstate({...state, active: goToPage, goToPage: goToPage})
    props.onChange && props.onChange(goToPage)
  }
  const selectOnChange = (page: string | string[]) => {
    props.changePageSizes && props.changePageSizes(parseInt(page as string, 10))
  }
  const Html = (
    <div className={`${prefixCls}-page`}>
      {props.showTotal ?
        <div className="total">共<span>{formatValue}</span>条</div> : ''}
      {state.pageSizes.length > 0 ?
        <Select
          defaultValue={pageSize + ''}
          options={state.selectOptions}
          onChange={selectOnChange}
        /> : ''}
      <div className="page-list">
        <ul>
          <>
            <li>
              <a
                title="上一页"
                className={classNames('prev', {disabled: state.active === 1})}
                onClick={() => goTo(state.active - 1, state.active === 1)}>&lt;</a>
            </li>
            <li>
              <a title="1" className={classNames({active: state.active === 1})}
                 onClick={() => goTo(1, state.active === 1)}>1</a>
            </li>
            {state.pageStart > 2 ?
              <li>
                <a
                  title={`向前${pagerCount}页`}
                  className="jump-prev"
                  onClick={() => goTo(state.active - pagerCount)} />
              </li> : ''}
            {state.pagesTotal.map((page: string, index: number) =>
              <li key={index}>
                <a
                  title={page.toString()}
                  className={classNames({active: page === state.active.toString()})}
                  onClick={() => goTo(parseInt(page, 10))}>{page}</a>
              </li>)}
            {pageCount > state.pageEnd + 1 ?
              <li>
                <a
                  title={`向后${pagerCount}页`}
                  className="jump-next"
                  onClick={() => goTo(state.active + pagerCount)}
                />
              </li> : ''}
            {pageCount > 1 ?
              <li>
                <a
                  title={pageCount + ''}
                  className={classNames({active: state.active === pageCount})}
                  onClick={() => goTo(pageCount, state.active === pageCount)}>{pageCount}</a>
              </li> : ''}
            <li>
              <a
                title="下一页"
                className={classNames('next', {disabled: pageCount <= state.active})}
                onClick={() => goTo(state.active + 1, pageCount <= state.active)}>&gt;</a>
            </li>
          </>
        </ul>
      </div>
    </div>)
  return hidePage ? null : Html
}
export default Pagination
