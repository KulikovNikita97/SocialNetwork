import React, { useState } from 'react';
import s from './Paginator.module.css';
import cn from "classnames";

let Paginator = ({ totalItemsCount, pageSize, selectedPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        <div className={s.btn_pr}>
            {portionNumber > 1 &&
                <button className={s.btn_pr_nx_active}
                    onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>}
        </div>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [s.selectedPage]: selectedPage === p
                }, s.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>
            })}
        <div className={s.btn_nx}>
            {portionCount > portionNumber &&
                <button className={s.btn_pr_nx}
                    onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>}
        </div>
    </div>
}

export default Paginator;