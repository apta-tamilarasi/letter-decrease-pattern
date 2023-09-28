let a=parseInt(prompt("enter the start value"))


for(let i=0;i<a; i++){

	for(let j=a;j>i; j--){
		document.write(String.fromCharCode((j-i)+65)+"&nbsp")
	}
	document.write("<br>")

	for(let k=0; k<i+1; k++){
		document.write("&nbsp&nbsp&nbsp" +"&nbsp")
	}
	
}
