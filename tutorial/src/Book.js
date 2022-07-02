import React from 'react'

const Book=({img,title,author})=>{
    //attribute,eventHandler
    //onClick,onMouseOver
    const clickHandler=(e)=>{
        console.log(e);
        console.log(e.target);
        alert("Hello World!!");
    }
    const complexExample=(author)=>{
        console.log(author);
    }
    return (
    <article className="book" onMouseOver={()=>{
        console.log(title)
    }}>
        <img src={img} alt="book_pic" />

        <h1 onClick={()=>console.log(title)}>{title}</h1>

        <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h4>
        <button onClick={clickHandler}>Reference Example</button>
        <button onClick={()=>complexExample(author)}>More complex example</button>
    </article>
    );
}

export default Book