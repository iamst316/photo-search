import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/HomePage.css';
import Bookmark from './Bookmark';

export default function(){
    // let navigate = useNavigate();
    let [click, setClick] = useState(0);
    let [images,setImages] = useState([]);
    let [searchstring, setString] = useState("");
    let [bookmarked,setBookmark] = useState([]);
    let [isBookmarkShow, setBookmarkShow] = useState(false);


    // useEffect(()=>{
        
    //     fetch("https://api.unsplash.com/photos/?client_id=2okYQy8YpnTlTfs3geDDlVtjNahyRxQKV76DddGvg-k").then(res=>res.json()).then(data=>setImages(data));

    // },[])

    function Search(){
        setClick(click = click+1);

        fetch(`https://api.unsplash.com/search/photos/?client_id=2okYQy8YpnTlTfs3geDDlVtjNahyRxQKV76DddGvg-k&query=${searchstring}&per_page=30`).then(res=>res.json()).then(data=>setImages(data.results));
        
    }
    console.log(images)

    return(<>
        <div id='main'>
            <h1 id='main-title'>
                React Photo Search
            </h1>
            <button onClick={()=>{
                setBookmarkShow(!isBookmarkShow)
            }}  id='go-to-bookmark'>Bookmarks</button>
            <div id='work-area'>
                <input type='text' id='search-bar' placeholder='Search free high resolution images' onChange={(e)=>{
                    setString(e.target.value);
                }}/>
                <button onClick={Search} id='search-btn'>Search</button>
            </div>
            <div id='images-display'>
                {images.length>0 ? images.map((img)=>{
                    return <div id='child'><button id='bookmark-it' onClick={()=>{
                        setBookmark([
                            ...bookmarked,
                            img.urls.full
                        ])
                    }}><img id='img' src={img.urls.full} alt='img' /></button></div>
                }):
                <h1 id='no-img'>No Images Found... Yet</h1>}
            </div>
            <div id='bookmarks'>
                {isBookmarkShow && 
                    <Bookmark id='bookmark-div' bookmarked={bookmarked}/>
                }
            </div>
        </div>
    </>)
}