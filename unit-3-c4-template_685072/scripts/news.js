// Ude Import export (MANDATORY)
import {navbar} from '../components/header.js'
document.getElementById('navbar').innerHTML=navbar();


import {getapi,append} from '../components/fetch.js'

const data =JSON.parse(localStorage.getItem('news'));
console.log(data);

let detailed_news = document.getElementById('detailed_news');

append(data,detailed_news);


// let arr = []


let search = (e)=>{    
    let search1 = document.getElementById('search_input').value;
    const url = `https://masai-mock-api.herokuapp.com/news?q=${search1}`;
    if(e.key ==="Enter"){
        // arr.push(url);
      localStorage.setItem('Sec',JSON.stringify(url));
        window.location.href="search.html"
    }
}
document.getElementById('search_input').addEventListener('keydown',search);
