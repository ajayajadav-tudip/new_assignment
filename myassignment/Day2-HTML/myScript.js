function changeImage()
		{
			var myimg = document.getElementById('image');
			
			if(myimg.src.match("bulb_On"))
			{
				myimg.src="light_bulb_off.png";
			}
			else
			{
				myimg.src="light_bulb_On.png";
			}
		}