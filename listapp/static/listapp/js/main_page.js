$(document).ready(function () {
	console.log('Working...');

	function getCookie(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie != '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = jQuery.trim(cookies[i]);
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return cookieValue;
	}

	$('.list-item-content').on('click', '.close', function () {
		var current = $(this);
		var parent = current.parent();
		var parent_sibling = parent.prev();
		parent_sibling.css('display', 'none');
		parent.css('display', 'none');

		var list_item_id = parseInt(current.attr('id'));
		var data = {};
		data = {
			'list_item_id' : list_item_id
		}

		$.ajax({
			url : 'erase_item_from_list/',
			type : 'POST',
			data : data,
			headers : {
				'X-CSRFToken' : getCookie('csrftoken')
			},
			success : function (response) {
				console.log('something did get deleted...')
			}
		})

		// var list_div = parent_sibling
	})

	$('#button-add').on('click', function () {
		var val = $('#input-item-id').val().trim();
		if (val != '') {
			console.log('we have some data');
			$('#input-item-id').val('');

			var temp_id = 0;
			var data = {};
			data = {
				'list_item' : val
			}
			// debugger;
			$.ajax({
				url : 'add_item_to_list/',
				type : 'POST',
				data : data,
				headers : {
					'X-CSRFToken' : getCookie('csrftoken')
				},
				success : function (response) {
					// debugger;
					console.log(response);
					// temp_id = response;
					$('ul').append(
						'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" style="padding-left : 0px"><li style="word-wrap: break-word"><h3>' + 
						val + 
						'</h3></li></div>' + 
						'<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><button type="button" id="' + 
						response +
						'" class="close" style="margin-top : 21px">delete</button></div>'
					);
				}
			})
		}
		else {
			console.log('stop it, you dummy !! input something first !!');
			$('#input-item-id').val('');
		}
	});
	// debugger;
});