var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetCurrentDate(){
var d=new Date();
var nDay=d.getDay();
var nmonth=d.getMonth();
var ndate=d.getDate();

document.getElementById('daybox').innerHTML=""+tday[nDay];
document.getElementById('datebox').innerHTML=""+tmonth[nmonth]+" "+ndate+""+GetSuffix();
}

function GetSuffix(nDay) {
var result = 'th';
if (nDay !== 11 && nDay % 10 === 1) {
    result = 'st';
} else if (nDay !== 12 && nDay % 10 === 2) {
    result = 'nd';
} else if (nDay !== 13 && nDay % 10 === 3) {
    result = 'rd';
}
return result;
}

window.onload=function(){
GetCurrentDate();
GetSuffix();
GetCurrentTime();
setInterval(GetCurrentDate,1000);
setInterval(GetCurrentTime,1000);
}

function GetCurrentTime(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
};







