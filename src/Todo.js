import React, { useState } from 'react';

const Todo = () => {

    const [inputData, setinputData] = useState('');
    const [item, setitem] = useState([]);
    const [togg, settogg] = useState(true);
    const [isedit, setisedit] = useState(null)

    const addIt = () => {
        if(!inputData){
            alert("Data fill")
        }else if(inputData && !togg){
            setitem(
                item.map((ele) => {
                    if(ele.id === isedit){
                        return({ ...ele , name:inputData})
                    }
                    return ele;
                })
            )
            settogg(true)
            setinputData("")
            setisedit(null)
        }else{
            const alldata = { id: new Date().getTime().toString() , name: inputData}
            setitem([...item , alldata]);
            setinputData("");
        }
    }

    const del = (ind) => {
        console.log(ind);
        const updateOne = item.filter((ele) => {
            return ind !== ele.id;
        })
        setitem(updateOne);
    }

    const edl = (index) => {
        const editOne = item.find((ele) => {
            return index !== ele.id
        })
        console.log(editOne);
        settogg(false)
        setinputData(editOne.name)
        setisedit(index)
    }
    
    const remo = () => {
        setitem([]);
    }

    return (
        <div className="mt-5">
            <div>
                <input type="text" placeholder="Add Item" value={inputData} onChange={(e) => setinputData(e.target.value)} />
                {
                    togg ? <button onClick={addIt}>Add</button> : <button onClick={addIt}>Edit</button>
                }
            </div>
            <div className="mt-5">
                {
                    item.map((ele) => {
                        return(
                            <>
                                <div key={ele.id}>
                                    <p> {ele.name}
                                    <button onClick={() => edl(ele.id)}>Edit</button> <button onClick={() => del(ele.id)}>Delete</button>
                                    </p>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div>
                <button onClick={remo}> Remove All </button>
            </div>
        </div>
    );
};

export default Todo;