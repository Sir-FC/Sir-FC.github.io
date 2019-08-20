const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "小城故事",
        artist: '邓丽君',
        url: 'https://5.9.115.214/h5ai/zyzzbai2011/user.root/qbittorrent/04.flac',
        cover: 'https://pic.xiami.net/images/album/img83/1483/4591621365228685.jpg',
      },
      {
        name: '我只在乎你',
        artist: '邓丽君',
        url: 'https://5.9.115.214/h5ai/zyzzbai2011/user.root/qbittorrent/05.flac',
        cover: 'https://pic.xiami.net/images/album/img83/1483/4357371367303231.jpg',
      },
      {
        name: '甜蜜蜜',
        artist: '邓丽君',
        url: 'https://5.9.115.214/h5ai/zyzzbai2011/user.root/qbittorrent/06.flac',
        cover: 'https://pic.xiami.net/images/album/imgs/629/203/a606b0fd_488629_1533301420651.jpg',
      }
    ]
});

