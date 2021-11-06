import React from 'react';
import {Link} from "react-router-dom";

const Page = ({page,setPage}) => {
    return (
        <div className="pagination">
            <Link onClick={() => setPage(--page)}>&laquo;</Link>
            <Link className={`${page === 1 ? 'active': ""}`} onClick={() => setPage(1)}>1</Link>
            <Link className={`${page === 2 ? 'active': ""}`} onClick={() => setPage(2)}>2</Link>
            <Link className={`${page === 3 ? 'active': ""}`} onClick={() => setPage(3)}>3</Link>
            <Link onClick={() => setPage(++page)}>&raquo;</Link>
        </div>
    );
};

export default Page;