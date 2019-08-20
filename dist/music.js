const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "小城故事",
        artist: '邓丽君',
        url: 'http://www.ytmp3.cn/down/56704.mp3',
        cover: 'http://pic.xiami.net/images/album/img83/1483/4591621365228685.jpg',
      },
      {
        name: '我只在乎你',
        artist: '邓丽君',
        url: 'http://www.ytmp3.cn/down/56793.mp3',
        cover: 'http://pic.xiami.net/images/album/img83/1483/4357371367303231.jpg',
      },
      {
        name: '甜蜜蜜',
        artist: '邓丽君',
        url: 'http://www.ytmp3.cn/down/50116.mp3',
        cover: 'http://pic.xiami.net/images/album/imgs/629/203/a606b0fd_488629_1533301420651.jpg',
      }
    ]
});