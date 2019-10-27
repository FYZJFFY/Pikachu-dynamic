let content = `
/*
 * 大家好，今天给大家画一只皮卡丘
 * 首先，需要准备皮卡丘的皮
 */
.pikachu-wrapper{
	background: #ffe600
} 
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
    border: 14px solid black;
    width: 31px;
    height: 0;
    border-bottom: 14px solid transparent;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-radius: 44px;
    position: absolute;
    left: 50%;
    margin-left: -13px;
    top: 35px;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
	width: 48px;
	height: 48px;
	border: 3px solid black;
	background: #2e2e2e;
	border-radius: 50%;
	position: absolute;
}
/*
 * 眼睛里面的珠子
 */
.eye:before{
	width: 22px;
	height: 22px;
	background: #fff;
	border: 3px solid black;
	position: relative;
	left: 5px;
	display: block;
	content: "";
	border-radius: 50%;
}
/*
 * 左眼在左边（废话）
 */
.eye.left{
	left: 50%;			
	margin-left: -24px;
	transform: translateX(-90px);
}
/*
 * 右眼在右边（废话）
 */
.eye.right{
	right : 50%;		
	margin-right: -24px;	
	transform: translateX(90px);
}
/*
 * 接下来，画皮卡丘的嘴巴
 */
.mouth{
	width: 80px;
	height: 25px;
	border: 3px solid black;
	position: absolute;
	margin-top: 50px;
	background: #ffe600;
}
/*
 * 这是左嘴巴
 */
.mouth.left{
	border-top:none;
	border-right: none;
	border-bottom-left-radius: 127px 70px;
	transform: rotate(-20deg);
	left: 50%;			
	margin-left: -78px;
}
/*
 * 这是右嘴巴
 */
.mouth.right{
	border-top:none;
	border-left: none;
	border-bottom-right-radius: 127px 70px;
	transform: rotate(20deg);
	right: 50%;			
	margin-right: -83px;
}
/*
 * 然后，画皮卡丘的舌头
 */
.tongue-wraper{
	height: 105px;
	position: absolute;
	left: 50%;
	margin-left: -58px;
	overflow: hidden;
	width: 127px;
	bottom: 0;
}
/*
 * 将舌头放到正确的位置
 */
.tongue{
	height: 450px;
	width: 126px;
	border: 3px solid #000;
	border-radius: 60%;
	background: #9b000a;
	position: absolute;
	bottom: 0;
	margin-top: -286px;
	overflow: hidden;
}
.tongue:before{
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	background: #ff485f;
	margin-top:365px;
	border-radius: 80px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face{
	width: 66px;
	height: 66px;
	background: #ff0000;
	border-radius: 50%;
	border:3px solid #000;
	position: absolute;
	margin-top: 82px;
}
/*
 * 然后，把左脸放到左边
 */
.face.left{
	left: 50%;			
	margin-left: -159px;
}
/*
 * 然后，把右脸放到右边
 */
.face.right{
	right: 50%;			
	margin-right: -159px;
}
/*
 * 画好了，谢谢观看
 */
`


function writeContent1(prefix,content,fn){
	let domCode = document.getElementById("code");
	let styleTag = document.getElementById("styleTag");
	let n = 0;
	// let id = setInterval(function(){
	// 	domCode.innerHTML = Prism.highlight(prefix+content.substring(0, n), Prism.languages.css);
	// 	styleTag.innerHTML = prefix+content.substring(0,n);
	// 	domCode.scrollTop = domCode.scrollHeight
	// 	n++;
	// 	if(n >= content.length){
	// 		clearInterval(id);
	// 		fn&& fn.call();
	// 	}
	// },0);	
	let id = setTimeout(function run(){
		domCode.innerHTML = Prism.highlight(prefix+content.substring(0, n), Prism.languages.css);
		styleTag.innerHTML = prefix+content.substring(0,n);
		domCode.scrollTop = domCode.scrollHeight
		n++;
		if(n >= content.length){
			clearInterval(id);
			fn&& fn.call();
		}else{
			id = setTimeout(run,duration);
		}
	},duration);	
}

var duration = 50;

$(".actions").on("click","button",function(e){
	console.log("点击");
	    let $button = $(e.currentTarget) // button
	let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
})

writeContent1("",content);