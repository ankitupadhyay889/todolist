import React from 'react';

const Post = ({data , load}) => {
    if(load){
        return <h2>Loading...</h2>
    }
    return (
        <>
        <ul className="list-group mb-4">
            {
                data.map((item , id) => {
                    return(
                        <li key={id}> {item.title} </li>
                    )
                })
            }
        </ul>
        </>
    );
};

export default Post;