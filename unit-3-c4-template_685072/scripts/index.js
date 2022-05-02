// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from '../components/header.js'
console.log(navbar);
document.getElementById('navbar').innerHTML=navbar();
import {getapi,append} from '../components/fetch.js'
   console.log(getapi);

   const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
   let respone = await getapi(url);
   console.log("respone",respone);

  let res = document.getElementById('results');

  append(respone.articles,res);



  //india
  const india= async()=>{
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
   let respone = await getapi(url);
  //  console.log("respone",respone);

  let res = document.getElementById('results');

  append(respone.articles,res);
  }

  //china
  const china= async()=>{
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`
   let respone = await getapi(url);

  let res = document.getElementById('results');

  append(respone.articles,res);
  }

  //usa
  const usa= async()=>{
    
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`
   let respone = await getapi(url);

  let res = document.getElementById('results');

  append(respone.articles,res);
  }

  //uk
  const uk= async()=>{
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`
   let respone = await getapi(url);
  let res = document.getElementById('results');

  append(respone.articles,res);
  }

  //event
  document.getElementById('ch').addEventListener('click',()=>{
    china();
  })
  document.getElementById('us').addEventListener('click',()=>{
    usa();
  })
  document.getElementById('uk').addEventListener('click',()=>{
    uk();
  })

  document.getElementById('in').addEventListener('click',()=>{
    india();
  })


  //searching

  let search =async (e)=>{
      
      let search1 = document.getElementById('search_input').value;
      const url = `https://masai-mock-api.herokuapp.com/news?q=${search1}`
      if(e.key ==="Enter"){
        localStorage.setItem('news',JSON.stringify(url));
          window.location.href="search.html"
      }
  }
  document.getElementById('search_input').addEventListener('keydown',search);

