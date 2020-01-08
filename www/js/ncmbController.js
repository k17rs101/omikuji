// This is a JavaScript file
var ncmbController = {
    APPLICATION_KEY: appKey,
    CLIENT_KEY: clientKey,

    ncmb: null,
    currentUser: null,  // ログインしたユーザーのオブジェクトを格納
    screenSize: null,    // 画面サイズを格納



    // スコア送信
    sendScore: function(dice) {
      var self = this;

      // [1]Score（クラス）を生成
      var Score = self.ncmb.DataStore("OmikujiClass");

      // [2]インスタンス生成、スコア数値をフィールド名"score"にセット
      var scoreData = new Score({dice: dice});

      // [3]送信処理
      scoreData.save()
          .then(function (saved) {
              alert("運勢送信完了！");
          })
        .catch(function(err){
              console.log(err);
          });
          
  },
      // 初期化
    init: function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    }
}
