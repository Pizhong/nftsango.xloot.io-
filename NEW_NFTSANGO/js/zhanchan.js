function getActionPotint(){
  if ($('#action-point').length == 0) {
    
    var html = '';
   
    html += '<div class="alert-publicly" id="action-point" style="display: none;">';
    html += '<div class="alert-box">';
    html +=  '<div class="action-content flex">';
    html +=  '<p>我可领取的行动点:<span>99999.99999999</span></p>'
    html +=  '<img src="../image/action-point-button.png" style="cursor: pointer;">'
    html +=  '<img src="../image/action-point-close.png" class="close"  onclick="$(\'#action-point\').hide()">'
    html +=  '</div>';
    html += '</div>';
    html += '</div>';
    

    $('body').append(html);
  }else{

  }
  $("#action-point").show();
}

function showWarReport(){
  if ($('#war-report').length == 0) {
    
    var html = '';
   
    html += '<div class="alert-publicly" id="war-report" style="display: none;">';
    html += '<div class="alert-box">';
    html +=  '<div class="war-report-content" >';
    html +=  '<img src="../image/war-report-close.png" class="close" onclick="$(\'#war-report\').hide()"></img>'
    html +=   '<div class="top">'
    html +=   '<p>这里是城市正中心,一个很宽阔的广场 ，中央有颗大榕树 ，据传已经有千年大树龄 ，是这座城市大历史 见证，树干大底部有个很大大树洞 </p>'
    html +=   '</div>'
    html +=    '<div class="middle">'
    html +=     '<ul>'
    html +=     '<li>安知水:百花秘术 > 阿贝尔.布鲁斯帝恩 ：<span>HP:5463/ </span><span> 3455</span></li>'
    html +=     '<li>安知水:百花秘术 > 阿贝尔.布鲁斯帝恩 ：<span>HP:5463/ </span><span>3455</span></li>'
    html +=     '<li>安知水:百花秘术 > 阿贝尔.布鲁斯帝恩 ：<span>HP:5463/ </span><span>3455</span></li>'
    html +=     '<li>安知水:百花秘术 > 阿贝尔.布鲁斯帝恩 ：<span>HP:5463/ </span><span>3455</span></li>'
    html +=     '<li>安知水:百花秘术 > 阿贝尔.布鲁斯帝恩 ：<span>HP:5463/ </span><span>3455</span></li>'
    html +=     '</ul>'
    html +=    '</div>'
    html +=    '<div class="btn-group">'
    html +=     '<img src="../image/war-report-back.png">'
    html +=     '<img src="../image/war-report-next.png">'
    html +=    '</div>'
    html +=  '</div>';
    html += '</div>';
    html += '</div>';
    

    $('body').append(html);
  }else{

  }
  $("#war-report").show();
}

function showActionMessage(){
  if ($('#action-message').length == 0) {
    
    var html = '';
   
    html += '<div class="alert-publicly" id="action-message" style="display: none;">';
    html += '<div class="alert-box">';
    html +=  '<div class="action-message-content" >';
    html +=  '<img src="../image/war-report-close.png" class="close" onclick="$(\'#action-message\').hide()"></img>'
    html +=  '<div class="action-message-box1">';
    html +=   '<p>行动信息</p>'
    html +=   '<div class="action-message-icon-box">'
    html +=   '<img src="../image/gongji.png">'
    html +=   '<img src="../image/fanyu.png">'
    html +=   '<img src="../image/jiaxue.png">'
    html +=   '<img src="../image/qianqi.png">'
    html +=   '</div>'
    html += '</div>';
    html +=  '<div class="action-message-box2">';
    html +=   '<p>目标势力</p>'
    html +=   '<div class="action-message-icon-box">'
    html +=   '<img src="../image/action-message-icon-wei .png">'
    html +=   '<img src="../image/action-message-icon-shu .png">'
    html +=   '<img src="../image/action-message-icon-wu .png">'
    html +=   '</div>'
    html += '</div>';
    html += '<div class="action-message-box3">'
    html += '<p>现在可以使用行动点 : <span>999</span>，总算力 : <span>9999</span>，您准备使用：</p>'
    html += '<form>'
    html += '<input type="text" placeholder="输入行动点数">'
    html += '</form>'
    html += '<p>预估效果：造成魏国 <span>9999999999</span> 点伤害</p>'
    html += '</div>'
    html += '<img src="../image/action-message-sure-btn.png" class="sure-btn">'
    html += '</div>';
    html += '</div>';
    html += '</div>';
    

    $('body').append(html);
  }else{

  }
  $("#action-message").show();
}