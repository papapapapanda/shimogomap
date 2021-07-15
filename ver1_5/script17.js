//効果音
    function click_se() {document.getElementById("se").play();}
    function click_se_jarn() {document.getElementById("se_2").play();}


//ヘッダーのメニュー     
    $(function(){
    $('.dropdown-menu').children('a').on('click', function(event){
        event.preventDefault();  event.stopPropagation();
		var $this = $(this);
  
		$this.parent().siblings('li').children('a').removeClass('open').next().hide(200);
       
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
