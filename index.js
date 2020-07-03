n=new Date();
y=n.getFullYear();
m=n.getMonth();
d=n.getDate();
document.getElementById("date").innerHTML="Today's News"+" "+m+"-"+d+"-"+y;
let url="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yuvO5scmvpTLYuCtGnRQLvbOZxrmWTRh"
async function artSection(){
    try{
    var response=await fetch(url);
    var homeData=await response.json();
    console.log(homeData);
    return homeData;
    }
    catch{
        console.log("something went wrong");    
    }
    
}
artSection().then(homeData=>{
  // document.getElementById("copyRight").innerHTML=homeData.copyright;

   //getting all data 
    homeData.results.forEach(element => {
    //column
    var column=document.createElement("div");
    column.setAttribute("class","col-sm-6 col-lg-6");
    column.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-primary">${element.section}</h5>
          <p class="card-text"><h4>${element.title}</h4></p>
          <p class="card-text">${element.abstract}</p>
          <p class="card-text">${element.byline}</p>
          <p class="card-text"><small class="text-muted">${element.created_date}<br>${element.item_type}</small>
          <a href="${element.short_url}" class="text-primary">continue reading</a>
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <img src="${element.multimedia[4].url}" class="card-img cardimage" alt="...">
      </div>
    </div>
    </div>`
   // row.appendChild(column); 
    document.querySelector("#row2").appendChild(column);
    }); 
}).catch(err=>{
  alert(err)
})
   

   
   