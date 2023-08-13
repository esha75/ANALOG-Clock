//window.alert("hii");
function clock(){
	d=new Date();
	h=d.getHours();
	//console.log(h);
	m=d.getMinutes();
	//console.log(m);
	s=d.getSeconds();
	console.log(h,m,s) ;
	hr_angle=30*h+m/2;
	min_angle=6*m;
	sec_angle=6*s;
	hour.style.transform=`rotate(${hr_angle}deg)`;
	min.style.transform=`rotate(${min_angle}deg)`;
	sec.style.transform=`rotate(${sec_angle}deg)`;
}
setInterval(()=>
{clock();},1000);