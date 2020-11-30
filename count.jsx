import React,{useState} from react;

function counter(){
    const [count, setCount] = useState(0);

    const incr =()=>{
        setCount(count+1);
    }

    const decr =()=>{
        setCount(count-1)
    }

    return(
        <>
            <button onClick={incr}>incr</button>
                {count}
            <button onClick={decr}>decr</button>
        </>
        )
}