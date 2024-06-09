import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css'
import { useState } from 'react';

function PostsList(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredHeader, setEnteredHeader] = useState('');

    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeHeaderHandler(event){
        setEnteredHeader(event.target.value);
    }

    return (
        <>
            <NewPost onChangeBody={changeBodyHandler} onChangeHeader={changeHeaderHandler} />
            <ul className={classes.posts}>
                <Post author={enteredHeader} body={enteredBody}/>
                <Post author="Feri" body="Hello Guys"/>
            </ul>
        </>
    )
}

export default PostsList;