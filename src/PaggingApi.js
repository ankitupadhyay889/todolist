import React, { useEffect, useState } from 'react';
import Pagging from './Pagging';
import Post from './Post';

const PaggingApi = () => {

    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [page, setpage] = useState(1)
    const [postpage] = useState(20)

    const gethu = async() => {
        setload(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const dat = await res.json();
        console.log(dat);
        setdata(dat);
        setload(false);
    }

    useEffect(() => {
        gethu();
    }, [])

    const indOfLasPo = page * postpage;
    const indOfFirPo = indOfLasPo - postpage;
    const currPos = data.slice(indOfFirPo , indOfLasPo);

    const paginate = pagNum => setpage(pagNum);

    return (
        <div>
            <Post data={currPos} load={load} />
            <Pagging postpage={postpage} totpos={data.length} paginate={paginate}/>
        </div>
    );
};

export default PaggingApi;