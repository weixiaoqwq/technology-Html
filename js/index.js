//侧边栏
var is_ce=false;
var ce_an=$('.ce_an');
var ce=$('.ce');


ce_an.click(function(){
	// alert('123')
	if(!is_ce){
		ce.css({
			'left':'0',
			'opacity':'1'
		})
		is_ce=true;
	}else{
		ce.css({
			'left':'-300px',
			'opacity':'1'
		})
		is_ce=false;
	}
})

//加载
var load=$('.load');
setTimeout(function(){
	load.css({
		'opacity':'0'
	})
	setTimeout(function(){
		load.css({
			'display':'none'
			})
		},1000)
		
},3000)