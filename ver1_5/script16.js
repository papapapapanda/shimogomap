//効果音
    function click_se() {document.getElementById("se").play();}
    function click_se_jarn() {document.getElementById("se_2").play();}


//ヘッダーのメニュー     
    $(function(){
    $('.dropdown-menu').children('a').on('click', function(event){
        event.preventDefault();  event.stopPropagation();
		var $this = $(this);
         /*複数メニューの処理用*/$this.parent().siblings('li').children('a').removeClass('open').next().hide(200);
       
    if($this.hasClass('open')) {
                $this.removeClass('open').next().hide(200);
                $('html').off('click', closeItems);} 
        else { $this.addClass('open').next().show(400);
                $('html').on('click', closeItems);}
        function closeItems() {$this.removeClass('open').next().hide(200);}  
    }); });

  
//マップアイコンをクリックしたらアニメーション停止＆少し薄くなる
$(function(){
    $('.map_icon').on("click",function(){
        $(this).addClass('map_icon_active').removeClass('map_icon');
    });
});

//リスト一覧をクリックしたら色が変わる
$(function(){
    $('.map_icon_link').on("click",function(){
        $(this).addClass('map_icon_link_visited').removeClass('.map_icon_link');
    });
});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	//アニメーション効果  easing: 'easeInOut',           linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '40%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'40px',
			color: 'gray',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//*アニメーションスタート 
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
