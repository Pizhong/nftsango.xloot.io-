

var kingContractName = "xkingbattle1";

$(function() {
  console.log("启动了哈.......");
  connectEOS();
  console.log("连接钱包成功，eos节点登录.......");
  eosLogin();
})

// 时间格式化
function getTime(time){
      var YY=new Date(time).getFullYear()
      var MM=new Date(time).getMonth()+ 1
      if(MM < 10){ MM = '0' + MM }
      var DD=new Date(time).getDay()
      if(DD < 10){ DD = '0' + DD }
      var hh=new Date(time).getHours()
      if(hh < 10){ hh = '0' + hh }
      var mm=new Date(time).getMinutes()
      if(mm < 10){ mm = '0' + mm }
      var ss=new Date(time).getSeconds()
      if(ss < 10){ ss = '0' + ss }
      var Time=YY+"-"+MM+"-"+"-"+DD+" "+hh+":"+mm+":"+ss
      return Time
}
//时间戳格式化
function formatTime(obj){
    var time = new Date(parseInt(obj));
    var YY = time.getFullYear();  //年
    var MM = time.getMonth() + 1;  //月
    if(MM < 10){ MM = '0' + MM }
    var DD = time.getDate();  //日
    if(DD < 10){ DD = '0' + DD }
    var hh = time.getHours();  //时
    if(hh < 10){ hh = '0' + hh }
    var mm = time.getMinutes();  //分
    if(mm < 10){ mm = '0' + mm }
    var ss = time.getSeconds();  //秒
    if(ss < 10){ s = '0' + ss }
    var timeStr = YY+"-"+MM+"-"+DD+" "+hh+":"+mm+":"+ss;
    return timeStr;
}


function storychape(data){
  console.log(data,'storychape');
  var html2='';
  var backgroundMap = {
    13:'./image/label1.png',
    14:'./image/label2.png',
    15:'./image/label3.png',
  }
  var countryIconMap = {
    1:'./image/country-wei.png',
    2:'./image/country-shu.png',
    3:'./image/country-wu.png'
  }
  if(data.length>0){
    for(let i =0;i<data.length;i++){
      var startTime=getTime(data[i]["start"])
      var endTime=data[i]["period"]+(new Date(data[i]["start"]).getTime())
      endTime = formatTime(endTime)
      console.log(endTime,'endTime');
      html2 += '<li class="main-first" id="id-main" style="background-image:url(' + backgroundMap[data[i]["id"]] + ')">';
      html2 +=    '<div class="huihe">'
      html2 +=    '<span>第'+data[i]["id"]+'回 '+ data[i]["name"]+'</span>'
      html2 +=    '</div>' 
      html2 +=    '<div class="country"><img src="'+countryIconMap[data[i]["kingdomid"]] +'" alt=""></div>'
      html2 +=    '<div class="jianli">'
      html2 +=    '<img src="./image/eos.png" alt="" class="jianli-eos">'
      html2 +=    '<span class="eos-text">>'+data[i]["eosass"]+'</span>'
      html2 +=    '<img src="./image/time.png" alt="" class="jianli-eos">'
      html2 +=    '<span class="time-text">>'+data[i]["timeass"]+'</span>'
      html2 +=     '</div>'
      html2 +=     '<div class="status">'
      html2 +=     '<img src="./image/end.png" alt="">'
      html2 +=     '</div>'
      html2 +=     '<div class="time">'
      html2 +=     ' <p>开始时间：&nbsp;'+startTime+'-'+ endTime +'</p>'
      html2 +=      '</div>'
      html2 += '</li>'
      $('#main-huihe').html(html2);
      
    }
  }
}