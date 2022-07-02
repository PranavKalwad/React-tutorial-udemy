//ES functionality
import React from 'react'
import ReactDom from 'react-dom'

//CSS
// ./ --> Same level
import './index.css';

import {books} from './books'
import Book from './Book'

//Stateless functional components
//Always return JSX


//Setting up vars









function BookList(){
    return(
        <section className='booklist'>
            {books.map((book,index)=>{
                return(
                    <Book key={index} {...book}></Book>
                );
            })}
        </section>
    );
}






ReactDom.render(<BookList/>,document.getElementById('root'));



//JSx rules

//return single element
// div/section/article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting


// const Greeting=()=>{
//     return React.createElement('div',{},React.createElement('h1',{},'hello world!!'))
// }






// ReactDom.render(<Greeting></Greeting>,document.getElementById('root'));


