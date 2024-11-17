# 👾Youtube Ads Skip And APIs👾
嗨 你好  
這是chrome插件跟api介紹  
這是一個跟以往跳過ads不同的跳過youtube ads :>  
(我知道這聽起來很繞口 hahaa)  

## 介紹
以往跳過youtube ads，大家的做法是加速ads影片，  
但現在這個方法會被youtube偵測，而且已經不再有用了。  
所以我把youtube js，可調用的 介面/互動/調整/狀態 api挖出來了 😎  
此方法比以往跳過速度都還要快(跟premium一樣)
你可以打開f12到console觀察💪💪👍👍


## 使用方法
1.下載此倉庫  
2.解壓縮後把資料夾塞到你喜歡的地方  
3.到chrome 開啟管理擴充功能  
4.把開發人員模式開啟  
5.點擊 「載入未封裝項目」  
6.選擇你剛剛解壓縮好的資料夾  
7.就這樣 沒有了:>

# 如果你想自己開發一些酷東西

## api的使用前置方法
```js
const player = document.getElementById("movie_player");
player.以下方法();
```

## Youtube js api
1. 播放控制  
`playVideo`：開始播放影片  
`pauseVideo`：暫停影片播放  
`stopVideo`：停止影片播放(播放介面黑屏)  
`seekTo`：將播放頭移動到指定時間  
`seekBy`：根據當前時間偏移播放頭  
`getCurrentTime`：獲取影片的當前播放時間  
`getDuration`：取得影片的總時長  
`setPlaybackRate` / `getPlaybackRate`：設定/獲取播放速度
    
1. 音量控制  
`getVolume`：獲取當前音量大小  
`setVolume`：設定音量大小  
`isMuted`：檢查影片是否為靜音  
`mute` / `unMute`：靜音/取消靜音  
`syncVolume`: 暫不確定功能  
  
1. 畫面與字幕  
`toggleFullscreen` / `isFullscreen`：切換/檢查是否為全螢幕  
`setSize` / `getSize`：設定/獲得播放器大小  
`toggleSubtitles` / `isSubtitlesOn`：切換字幕顯示狀態  
`setSphericalProperties`：設定360°影片的屬性  
`getVideoAspectRatio`：獲取影片比例  
  
1. 播放清單與隊列  
`loadPlaylist`：載入播放清單  
`cuePlaylist`：設定播放清單的隊列  
`nextVideo` / `previousVideo`：播放下一部/上一部影片  
`getPlaylist`：獲得當前播放清單  
`getPlaylistIndex`：獲得當前影片在清單中的位置  
`clearQueue`：清空播放清單  
  
1. 影片資訊  
`getVideoData`：取得影片的詳細數據  
`getVideoUrl`：取得影片的網址  
`getVideoBytesLoaded` / `getVideoBytesTotal`：獲取影片已載入的大小/總大小  
`getPlayerState`：檢查播放器當前狀態  
  
1. 品質與網路相關  
`getPlaybackQuality` / `setPlaybackQuality`：獲取/設定播放品質  
`getAvailableQualityLevels`：取得可用的畫質選項  
`getVideoLoadedFraction`：取得已載入影片的比例  
`getAvailableQualityLabels`: 暫不確定功能  
  
1. 廣告相關  
`getAdState`：檢查廣告的當前狀態  
`onAdUxClicked`：暫不確定功能  
`logApiCall`: 暫不確定功能  
  
1. 用戶互動  
`addEventListener` / `removeEventListener`：暫不確定功能  
`togglePictureInPicture`：切換畫中畫模式  
`setLoopVideo` / `getLoopVideo`：設定/檢查是否循環播放  
  
1. 設定與環境  
`setOption` / `getOption`：暫不確定功能  
`updateEnvironmentData`：更新環境資料  
`setSafetyMode`：暫不確定功能  
  
1. 測試與除錯  
`getDebugText`：取得除錯資料  
`getStatsForNerds`：取得「觀看詳細資訊」  
`logImaAdEvent`：暫不確定功能  
