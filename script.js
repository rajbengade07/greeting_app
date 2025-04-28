function greet()
		{
			event.preventDefault();
			let name=document.getElementById("name");
			let msg=document.getElementById("msg");
			
			if(name.value==="")
			{
				alert("enter your name");
				msg.innerHTML="";
				name.focus();
				return;
			}
			let d=new Date();
			let hr=d.getHours();
			let result="";
			if(hr<12)
				result= "Good Morning " + name.value;
			else if(hr<16)
				result="Good Afternoon " + name.value;
			else
				result="Good Evening " + name.value;
			msg.innerHTML=result;
		}
