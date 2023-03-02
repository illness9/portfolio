//ページ内リンクのスクロール

$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); //スクロール速度の変更
	return false;
});

