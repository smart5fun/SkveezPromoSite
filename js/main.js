$(function() { 
	    var width = $(window).width() - $('.imageipad3image').offset().left;
	    if ($(window).width() >= 1024 && $(window).width() <= 1600) {
	    	$('.imageipad3image').css('width',width);
	    }

	    if ($(window).width() < 1024 ) {
	    	width = 1024 - $('.imageipad3image').offset().left;
		    $('.imageipad3image').css('width',width);		    
		}

	    if ($(window).width() > 1600 ) {
	    	width = 1600 - $('.imageipad3image').offset().left;
		    $('.imageipad3image').css('width',width);		    
		}
	    
    $(window).resize(function () { 
	    var width = $(window).width() - $('.imageipad3image').offset().left;
	    if ($(window).width() >= 1024 && $(window).width() <= 1600) {
		    $('.imageipad3image').css('width',width);	    
	    }
	    

	    if ($(window).width() < 1024 ) {
	    	width = 1024 - $('.imageipad3image').offset().left;
		    $('.imageipad3image').css('width',width);		    
		}

	    if ($(window).width() > 1600 ) {
	    	width = 1600 - $('.imageipad3image').offset().left;
		    $('.imageipad3image').css('width',width);		    
		}		
//	 	 height = $('.imageipad3image').css('height');
//	 	 height = 80 + (parseint(height)-$('.imageipad3image').offset().top);

//	    $('.ipad3').css('top',);
    }); 


		$('.butreg').click(function(e) {
			var sename = $('#sename'),
				name = $('#namename'),
				secname = $('#secname'),
				email = $('#email'),
				phone1 = $('#phone1'),
				phone2 = $('#phone2'),
				senamev = sename.val(),
				namev = name.val(),
				secnamev = secname.val(),
				emailv = email.val(),
				phone1v = phone1.val(),
				phone2v = phone2.val(),
				senamev4 = senamev.length,
				namev4 = namev.length,
				secnamev4 = secnamev.length,
				emailv4 = emailv.length,
				phone1v4 = phone1v.length,
				phone2v4 = phone2v.length,
				check = 0;
										
				
		if (senamev4 == 0) {
			sename.css('background-position','0px -40px');
			$('.chf').html('<img src="image/wr.png"/>');
			$('.wrongname').css('display','block');
			check++;
		} else {
			sename.css('background-position','0px -80px');			
			$('.chf').html('<img src="image/ok.png"/>');
			$('.wrongname').css('display','none');
		}

		if (namev4 == 0) {
			name.css('background-position','0px -40px');
			$('.chn').html('<img src="image/wr.png"/>');			
			$('.wrongname2').css('display','block');
			check++;
		} else {
			name.css('background-position','0px -80px');			
			$('.wrongname2').css('display','none');
			$('.chn').html('<img src="image/ok.png"/>');
		}

		if (secnamev4 == 0) {
			secname.css('background-position','0px -40px');
			$('.cho').html('<img src="image/wr.png"/>');			
			$('.wrongname3').css('display','block');
			check++;
		} else {
			secname.css('background-position','0px -80px');			
			$('.wrongname3').css('display','none');
			$('.cho').html('<img src="image/ok.png"/>');
		}
		
		if (emailv4 == 0) {
			email.css('background-position','0px -40px');
			$('.che').html('<img src="image/wr.png"/>');			
			$('.wrongemail').css('display','block');
			$('.wrongemail2').css('display','none');
			check++;
		} else {
		
		    if (isValidEmailAddress(emailv)) {
				email.css('background-position','0px -80px');			
				$('.wrongemail2').css('display','none');
				$('.wrongemail').css('display','none');
				$('.che').html('<img src="image/ok.png"/>');			    
		    } else {
				email.css('background-position','0px -40px');
				$('.wrongemail').css('display','none');			    
				$('.wrongemail2').css('display','block');
				$('.che').html('<img src="image/wr.png"/>');	
			        check++;		
		    }

		}
		
		if (phone1v4 == 0) {
			phone1.css('background-position','0px -40px');
			$('.chp').html('<img src="image/wr.png"/>');			
			$('.wrongphone').css('display','block');
			check++;
		} else {
			phone1.css('background-position','0px 0px');			
			$('.wrongphone').css('display','none');
			$('.chp').html('<img src="image/ok.png"/>');
		}
		
		if (phone2v4 == 0) {
			phone2.css('background-position','0px -40px');
			$('.chp').html('<img src="image/wr.png"/>');			
			$('.wrongphone').css('display','block');
			check++;
		} else {
			phone2.css('background-position','0px 0px');			
			$('.wrongphone').css('display','none');
			$('.chp').html('<img src="image/ok.png"/>');
		}
				
			if (check == 0) {		
		
			$.post('http://skveez.aqua-host.ru/system.php.html', { senamead: senamev, namenamead: namev, secnamead: secnamev, emailad: emailv, phone1ad: phone1v, phone2ad: phone2v }, function(data) {

			if (data == '0') {
				$('.popopup2').html('<table width="100%" height="100%"><tbody><tr><td width="100%" height="100%" align="center" valign="middle"><div class="number">Такой пользователь уже зарегистрирован</div></td></tr></tbody></table><div class="closetext" style="position:relative;"><a class="closetexta" style="position:absolute;margin-top:-40px;margin-left:-45px;" href="">Закрыть окно</a></div>');
				$('.number').css('font-size','18px');
	$('.closetexta').click(function(e) {
e.preventDefault();
$('.popopup2').fadeOut('slow');
$('.bgpopup').fadeOut('slow');
}); 
			} else {
				$('.number').html(data);				
				$('.number').css('font-size','40px');
			}

			//------------				 
				$('.popopup').fadeOut('slow');
					setTimeout(function() { 
						 $('.popopup2').fadeIn('slow');	
						 		$('#copy').zclip({
								path:'ZeroClipboard.swf',
								copy:$('#number').text()
								});
								
					}, 500); 
			//------------	

			});	
			}
		});
	
	
});

    function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    return pattern.test(emailAddress);
    }