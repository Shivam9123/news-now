// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from '../components/header.js'
console.log(navbar);
document.getElementById('navbar').innerHTML=navbar();


import {getapi,append} from '../components/fetch.js'

let show = document.getElementById('results');


const newSearch =JSON.parse(localStorage.getItem('Sec'));
console.log("err",newSearch);

let res = await getapi(newSearch);
append(res.articles,show);

const searchApi =JSON.parse(localStorage.getItem('news'));
console.log(searchApi);

let respone = await getapi(searchApi);
console.log(respone);
 append(respone.articles,show);

 //new html
// let res = await getapi(newSearch);
// console.log('res',res);

// search
let search =async (e)=>{
      
            let search1 = document.getElementById('search_input').value;
            const url = `https://masai-mock-api.herokuapp.com/news?q=${search1}`
            if(e.key ==="Enter"){
                let respone = await getapi(url);
                append(respone.articles,show);
            }
        }
document.getElementById('search_input').addEventListener('keydown',search);




// let newSearchResponse = await getapi(newSearchApi);
// console.log(newSearchResponse);

// append(newSearchResponse,show)
