import { useEffect, useState } from "react";

function useNumberAndLog(initialCount) {
    const [count, setCount] = useState(initialCount)
    const increment = ()=> setCount(count + 1);

    useEffect(()=> {
        console.log(count);
    }, [count]);

    return {
        count,
        increment,
    }
}

export default useNumberAndLog;