
const getapi = async(url)=>{

    let res = await fetch(url);
    let data = res.json();

    return data;
}

// url title description  // articles

const append = (data,parent)=>{
 parent.innerHTML=null;

 data.forEach(({urlToImage, title,description}) => {
     let div = document.createElement('div');
     div.id="div"

     let div1 = document.createElement('div');
     let img = document.createElement('img');
     img.src =urlToImage;

     let div2 = document.createElement('div');
     let ArticleName = document.createElement('h3');
     ArticleName.innerHTML=title;

     let des = document.createElement('p');
     des.innerHTML=description

     div1.append(img)

     div2.append(ArticleName,des);

     div.append(div1,div2);

     parent.append(div);

     div.addEventListener('click',()=>{
        addToLocal({urlToImage, title,description})
     })
 });
}
let arr =[];
const addToLocal = ({urlToImage, title,description})=>{
    arr.push({urlToImage, title,description});
    // console.log(arr);
    window.location.href="news.html"
    localStorage.setItem('news',JSON.stringify(arr));
}
export {getapi, append};