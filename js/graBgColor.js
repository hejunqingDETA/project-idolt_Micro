function graBg(max,min,op) {
    var max=max;  //控制色表最大值
    var min=min; //控制色表最小值
    //初始化rgb三基色
    var arr = [max, min, min];
    //角度
    var angle = 0;
    //透明度 a
    // var a=0;
    //获取窗口高度
    var height = $(window).height();

    //获取body
    var $Tz_box = $('#Tz_gra');
    var _height=$Tz_box.offset().top;
    //初始化HEX颜色1 HEX颜色2
    var colorH1 = '', colorH2 = '';
    //将窗口高度赋给body高度  使body不需要外部css就能铺满页面
    $Tz_box.css({
        height: height-_height + 'px'
    });
    //定时器 定时器里执行包括 运算rgb颜色 透明度:a 变化 角度:angle 变化
    var timer = setInterval(color, 20);
    //color:算法函数----颜色和透明度和角度的算法
    function color() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == max) {
                i+1>2?( arr[i-2]==min?(i-1<0?arr[i+2]++:arr[i-1]++):('')):(arr[i+1]==min?(i-1<0?arr[i+2]++:arr[i-1]++):(''))
            } else if (arr[i] == min) {
                i+1>2?( arr[i-2]==max?(i-1<0?arr[i+2]--:arr[i-1]--):('')):(arr[i+1]==max?(i-1<0?arr[i+2]--:arr[i-1]--):(''))
            };
        };
        angle += 0.2;
        if (angle >= 360) {
            angle = 0;
        }
        /* 可选透明度
         a+=0.002;
         if(a>=1){
         a=1-a;
         }*/

        //将获取到的rgb颜色 用convert函数转换成对应的16进制HEX颜色表
        colorH1 = "#" + convert(arr[1]) + convert(arr[2]) + convert(arr[0]);
        colorH2 = "#" + convert(arr[2]) + convert(arr[0]) + convert(arr[1]);

        //change函数 可选传入 r, g ,b ,角度, HEX颜色1 ,HEX颜色2
        change(arr[0], arr[1], arr[2], angle, colorH1, colorH2)
    };

    //convert函数是 将一个rgb数值转换成16进制HEX对应数值的函数
    function convert(x) {
        var sRgb = x;
        var sHex = sRgb.toString(16);
        if (sHex.length < 2) {
            sHex = '0' + sHex;
        }
        return sHex;
    };

    //change:主函数---利用css3的颜色渐变和ie的 filter滤镜 全浏览器兼容写法
    // function change(r, g, b, angle, colorH1, colorH2) {

    //     $Tz_box.css({// Webkit: Safari 4-5, Chrome 1-9
    //         background: "-webkit-gradient(linear, left top, right bottom, from(" + colorH1 + "), to(" + colorH2 + "))",
    //         opacity:op
    //     }).css({// Firefox 3.6+
    //         background: "-moz-linear-gradient(left top, right bottom, " + colorH1 + " 0%, " + colorH2 + " 100%)",

    //     }).css({// Webkit: Safari 5.1+, Chrome 10+
    //         background: "-webkit-linear-gradient(left top, right bottom," + colorH1 + ", " + colorH2 + ")",

    //     }).css({  //opera
    //         background: "-o-linear-gradient(left top, right bottom," + colorH1 + ", " + colorH2 + ")",

    //     }).css({//IE 10+
    //         background: "-ms-linear-gradient(left top, right bottom," + colorH1 + ", " + colorH2 + ")",

    //     }).css({
    //         filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr=" + colorH1 + ", endColorstr=" + colorH2 + ",GradientType=0 )"
    //     });
    // };
};
//  console.log(colorH1 + "\t" + colorH2)
/*   var R= b,G= r,B= g;
 var color1= "rgb("+g+","+b+","+r+")";
 var color2= "rgb("+R+","+G+","+B+")";
 "+angle+"deg
 */
/**
 * Created by Administrator on 2016/12/16 0016.
 */
