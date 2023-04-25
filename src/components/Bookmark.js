import { useNavigate } from "react-router-dom"


export default function(props){
    // let navigate = useNavigate();


    return(<div id='bookmark-list'>
        {props.bookmarked.length==0 ?
            <h1>You have no Bookmarked Images!!!</h1>:
            <h1>Your Bookmarks!!!</h1>
        }
        <div id='grid'>
            {props.bookmarked.map((i)=>{
                return <img id='grid-img' src={i} alt='bookmark' />
            })}
        </div>
    </div>)


}