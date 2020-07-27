var element = document.documentElement;
//scrollHeight→paddingを含んだ画面上に表示されていないコンテンツを含む高さ
//clientHeigh→paddingを含んだ高さ
var bottom = element.scrollHeight - element.clientHeight;
//ウィンドウを文書内の特定の位置までスクロール
window.scroll(0, bottom);
