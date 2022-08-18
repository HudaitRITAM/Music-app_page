//song list
let All_song = [
    {
      name: "Believer",
      path: "assets/music/Believer.mp3",
      img: "assets/img/beliver.jpg",
      singer: "Imagine Dragon"
    },
    {
      name: "Despacito ft",
      path: "assets/music/Despacito ft.mp3",
      img: "assets/img/despacito.jpg",
      singer: "Luis Fonsi"
    },
    {
      name: "Enemy",
      path: "assets/music/Enemy.mp3",
      img: "assets/img/Enemy.jpg",
      singer: "Imagine dragons"
    },
    {
      name: "Hymn For The Weekend",
      path: "assets/music/Hymn For The Weekend.mp3",
      img: "assets/img/Hymn For The Weekend.jpg",
      singer: "Coldplay"
    },
    {
      name: "Im an Albatroz",
      path: "assets/music/Im an Albatraoz.mp3",
      img: "assets/img/Im an Albatraoz.jpg",
      singer: "AronChupa, Little Sis Nora"
    },
    {
      name: "Let Me Down Slowly",
      path: "assets/music/Let me Down Slowly.mp3",
      img: "assets/img/let me down slowly.jpg",
      singer: "Alec Benjamin"
    },
    {
      name: "Let Me Love You",
      path: "assets/music/Let Me Love You.mp3",
      img: "assets/img/Let Me Love You.jpg",
      singer: "Justin Bieber & DJ Snake"
    },
    {
      name: "Magenta Riddim",
      path: "assets/music/Magenta Riddim.mp3",
      img: "assets/img/Magenta Riddim.jpg",
      singer: "DJ Snake"
    },
    {
      name: "Mi Gente",
      path: "assets/music/Mi Gente.mp3",
      img: "assets/img/Mi Gente.jpg",
      singer: "J Balvin, Willy William"
    },
    {
      name: "See You Again ft",
      path: "assets/music/See You Again ft.mp3",
      img: "assets/img/see you again.jpg",
      singer: "Wiz Khalifa"
    },
    {
        name: "Senorita",
        path: "assets/music/Senorita.mp3",
        img: "assets/img/Senorita.jpg",
        singer: "Shawn Mendes, Camila Cabello"
    },
    {
        name: "Sofia Rayes 1 2 3",
        path: "assets/music/Sofia Reyes  1 2 3.mp3",
        img: "assets/img/Sofia Reyes 1 2 3.jpg",
        singer: "feat. Jason Derulo & De La Ghetto"
    },
    {
     name: "Thunder",
     path: "assets/music/Thunder.mp3",
     img: "assets/img/thunder.jpg",
     singer: "Imagine Dragon"
    },
    {
     name: "Waka Waka",
     path: "assets/music/Waka Waka.mp3",
     img: "assets/img/waka waka.jpg",
     singer: "Shakira"
    }
 ];
 

 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/