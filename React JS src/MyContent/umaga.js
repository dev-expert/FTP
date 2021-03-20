import React,{useState} from 'react'

function MyEvent(){

    let [page, setPage] = useState(1);

    return (
        <div>
            {page == 1 ? <div> ONE </div> : <div> TWO </div>}
        </div>
    )
}

export default MyEvent;