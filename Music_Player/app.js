const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

        const heading = $('header h2')
        const cdThumb = $('.cd-thumb')
        const audio = $('#audio')
        const cd = $('.cd')
        const playBtn = $('.btn-toggle-play')
        const player = $('.player')
        const progress = $('#progress')
        const nextBtn = $('.btn-next')
        const prevBtn = $('.btn-prev')
        const randomBtn = $('.btn-random')   
        const repeatBtn = $('.btn-repeat')
        const playlist = $('.playlist')
        const bg = $('.btn-mode')
        const body = $("body")

const app = {
    
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
     isBg : false,
    songs: [
        {
            name: "Bạn Đời",
            singer: "Karik,GDucky",
            path :'/Music_Player/music/song1.mp3',
            image:'/Music_Player/img/song1.png'
        },
         {
            name: "NoLoveNoLife",
            singer: "HIEUTHUHAI",
            path :'/Music_Player/music/song2.mp3',
            image:'/Music_Player/img/song2.png'
        },
          {
            name: "Don't côi",
            singer: "Ronzboong",
            path :'/Music_Player/music/song3.mp3',
            image:'/Music_Player/img/song3.png'
        },
          {
            name: "Anh đã ổn hơn",
            singer: "MCK",
            path :'/Music_Player/music/song4.mp3',
            image:'/Music_Player/img/song4.png'
        },
          {
            name: "Không thể say",
            singer: "HIEUTHUHAI",
            path :'/Music_Player/music/song5.mp3',
            image:'/Music_Player/img/song5.png'
        },
         {
            name: "À Lôi",
            singer: "Double2T",
            path :'/Music_Player/music/song6.mp3',
            image:'/Music_Player/img/song6.png'
        },
         {
            name: "Rồi tới luôn",
            singer: "Nal",
            path :'/Music_Player/music/song7.mp3',
            image:'/Music_Player/img/song7.png'
        },
         {
            name: "Chưa quên người yêu cũ",
            singer: "Hà Nhi",
            path :'/Music_Player/music/song8.mp3',
            image:'/Music_Player/img/song8.png'
        },
         {
            name: "Chỉ là không cùng nhau",
            singer: "Tăng Phúc, Thảo Nhi",
            path :'/Music_Player/music/song9.mp3',
            image:'/Music_Player/img/song9.png'
        },
         {
            name: "Người con gái ta thương",
            singer: "Thỏ xỏ khuyên",
            path :'/Music_Player/music/song10.mp3',
            image:'/Music_Player/img/song10.png'
        },
         {
            name: "Thằng điên",
            singer: "Justatee x Phương Ly",
            path :'/Music_Player/music/song11.mp3',
            image:'/Music_Player/img/song11.png'
        },
    ],
    render : function () {
        const htmls = this.songs.map((song , index) => {
            return `
             <div class="song ${index === this.currentIndex ? 'active' : '' }"data-index = "${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        })

       playlist.innerHTML = htmls.join('')
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function(){
        const _this = this
        const cdWidth = cd.offsetWidth

          bg.onclick = function(){
                _this.isBg = !_this.isBg
                if(_this.isBg){
                    player.classList.add('bg')
                    body.classList.add('bg')
                    
                } else {
                    player.classList.remove('bg')
                    body.classList.remove('bg')
                }
            
             
            }
        // xử lý CD quay và dừng
       const cdThumbAnimate = cdThumb.animate([
            { transform : 'rotate(360deg)'}
            
        ], {
            duration: 10000,
            iterations: Infinity,
        })
        cdThumbAnimate.pause()
        
        // xử lý phóng to thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop


            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
            cd.style.opacity = newCdWidth / cdWidth
        }
        //Xử lý khi click play
        playBtn.onclick = function() {
          if(_this.isPlaying){     
            audio.pause()

          }  else {        
            audio.play()
            
        }
        }
        //Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
         //Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }
        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }


        }
        // Xử lý khi tour song 
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value 
            audio.currentTime = seekTime
        }
        
        //khi next song
        nextBtn.onclick = function() {
            _this.nextSong()
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //khi prev song 
        prevBtn.onclick = function() {
            _this.prevSong()
            audio.play()
            _this.render()
        }
        // xử lý khi random song
        randomBtn.onclick = function() {
            
            _this.playRandomSong()
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //xử lý phát lại song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }

       //xử lý next song khi audio ended
       audio.onended = function() {
        if(_this.isRepeat){
            audio.play()
        }else {
            _this.nextSong()
            audio.play()
        }
       }
       // Lắng nghe click hành vi vào playlist
       playlist.onclick = function (e) {
            // xử lý khi click vào song
            if(e.target.closest('.song:not(.active)') || e.target.closest('.optionn')) {
                const index = e.target.closest('.song').getAttribute('data-index')
                _this.currentIndex = Number(index)
                _this.loadCurrentSong()
                audio.play()
                _this.render()
                _this.scrollToActiveSong()
            }
            

       }



    },
    scrollToActiveSong : function () {
        setTimeout(()=> {
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block: 'center',
                inline: 'center'
            })
        },300)
    },
    loadCurrentSong : function(){
       
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
        audio.src = this.currentSong.path
    },
    nextSong : function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong : function () {
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
   
    },
      playedSongs : [],
playRandomSong : function () {
    let newIndex
    if (this.playedSongs.length === this.songs.length) {
        this.playedSongs = [];
    }
         do{
        newIndex = Math.floor(Math.random() * this.songs.length)
    } while( newIndex ===this.currentIndex );
       
     this.playedSongs.push(newIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
    console.log(newIndex)
    
         
         
    

    },
    start : function ( ) {
        //định nghỉa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe/ xử lý các sự kiện ( DOM event)
        this.handleEvents()
        //tải thong tin bài hát đàu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()
        // render playlist
        this.render();
    }

}
app.start()
