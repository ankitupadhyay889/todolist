import React from 'react';

const Pagging = ({postpage , totpos , paginate}) => {
    const pageNum = [];
    for(let i = 1; i<=Math.ceil(totpos / postpage); i++){
        pageNum.push(i)
    }
    return (
        <nav>
            <ul>
                {
                    pageNum.map(number => {
                        <li key={number} className="page-item">
                            <a href="!#" className="page-link" onClick={() => paginate(number)}> {number} </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    );
};

export default Pagging;