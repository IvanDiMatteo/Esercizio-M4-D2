const musicData = (id)=> {
    let promise= new Promise((resolve,reject)=> {
        let request =  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + id, { method: 'GET' });
        setTimeout(()=>{
            resolve(request);
            reject("error");
        },1000);
 });
    return promise;
}

musicData("eminem")
.then((response)=> {response.json().then((data)=> {getAlbum(data, "eminem")})})
.catch((error)=> {console.log(error)});

musicData("metallica")
.then((response)=>{ response.json().then((data)=> {getAlbum(data, "metallica")})})
.catch((error)=>{console.log(error)});

musicData("queen")
.then((response)=>{ response.json().then((data)=> {getAlbum(data, "queen")})})
.catch((error)=>{console.log(error)});

function getAlbum(datas, name) {

    let albums = document.querySelector(`div#${name}Section`);
    let albumsData = datas.data;

    for (let i = 0; i < 4; i++) {

        let dadDiv = document.createElement("div");
        albums.appendChild(dadDiv);

        let albumTitle = document.createElement("h4");
        albumTitle.innerText = albumsData[i].title;
        dadDiv.appendChild(albumTitle);

        let albumImg = document.createElement("img");
        albumImg.src = albumsData[i].album.cover_medium;
        dadDiv.appendChild(albumImg);
        
    }
}