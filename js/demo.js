// graBg(230, 180, 0.9);
(function(){
 let $face = $('.face');
 let $faceBox = $('.facebox');
 let $Tz_showBox = $('#Tz_showbox');
 let $txt = $('#text');
 let $btn = $('#Tz_box a.btn');
 let faceTxt = '';
 let content = '';
 init();
 let $img = $('.facebox ul li');

 //点击打开表情
 $face.click(function(e){
     e = e || window.event;
     e.stopPropagation();
     pars('')
     $faceBox.slideToggle(200);
 });

 //添加表情
 $img.click(function(e){
    e = e || window.event;
     e.stopPropagation();
     $txt.focus();
     var imgs = '<img src="./img/' + ($(this).index()+1) + '.gif">';
     pars(imgs)

 })

 //鼠标离开表情框，表情框收缩
 $faceBox.mouseleave(function(){
     $faceBox.slideUp(100);
 });
 //点击发表
 $btn.click(function () {
    content = $txt.html();
    if ($txt.html().length != 0 && $txt.html() != '') {
        $Tz_showBox.append(' <div class="showcont"> <div class="title"><img src="./img/toux.jpg" width="40" height="40" alt="">diolt博客</div> <div class="edit">' + content + '<span>' + '------来自dloit博客' + '</span>' + '</div> </div>')
        $Tz_showBox.slideDown();
        $txt.html('')
    } else {
        $Tz_showBox.hide();
    }
});

 //初始化
 function init(){
     for(i = 0; i < 60; i++){
         //通过循环创建60个表情
         faceTxt += '<li><img src="./img/' + (i + 1) + '.gif" /></li>';
     };
     $txt.focus()
     $('.facebox ul').append(faceTxt);
     $faceBox.hide();
 };
 function pars(str){

    let selection = window.getSelection ? window.getSelection() : document.selection;
    let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
    if(!window.getSelection){
        //让text获得焦点
        $txt.focus();
        //重新校对焦点选取
        let selection = window.getSelection ? window.getSelection() : document.selection;
        let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        range.pasteHTML(str);
        range.collapse(true);
        range.select();
    }else{
        $txt.focus();
        range.collapse(true);
        let hasRs = range.createContextualFragment(str);
        let hasR = hasRs.lastChild;
        
        while(hasR && hasR.nodeName.toLowerCase() == 'br' && hasR.previousSibling && hasR.previousSibling.nodeName.toLowerCase() == 'br'){
            let clearR = hasR;
            hasR = hasR.previousSibling;
            hasRs.removeChild(clearR)
        };

        
        range.insertNode(hasRs);
        if(hasR){
            range.setEndAfter(hasR);
            range.setStartAfter(hasR)
        };
        selection.removeAllRanges();
        selection.addRange(range);
    };
 };

 //光标置于末尾
 function moveEnd(obj){
     obj.focus();
     let len = obj.value.length;
     if(document.selection){
         let sel = obj.createTextRange();
         sel.moveStart('charcter',len);
         sel.collapse();
         sel.select();
     } else if(typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number'){
         obj.selectionStart = obj.selectionEnd = len;
     }
 }

})()