const getApi = async () => {
    try{
        const response = await fetch('https://api-football-standings.azharimm.site/leagues');
        const payload = await response.json();        
        let list = payload.data;

        list = list.map(item => ({
          name: item.name,
          image: item.logos.light,
        }));
        return list;
    
    }catch(error){
      console.log(error)
    }
};

const template = document.querySelector('#article');

const pintarRender = (article, item) =>{
  const clone = template.content.cloneNode(true);
  (clone.querySelector('img')).src = item.image;
  console.log(item.image)
  article.appendChild(clone)
}

const renderData = (article, items) => {
  items.forEach((item) => {
      pintarRender(article,item)
  })
}

document.getElementById('button').addEventListener('click', (event) => {
    const data = getApi();
    data.then(array => {
        array.forEach((item) => {
            //console.log(item.name + " ---- " + item.image);
            
        })
        renderData(document.getElementById('show-items'),array);
      })
    
  })


   
  
  
