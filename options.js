$(document).ready(function () {

	if (localStorage["url"] !== undefined){
		$('#txtUrl').val(localStorage["url"]);
	}

	$('#btnSave').click(function () {

		var url = $('#txtUrl').val();

		if (url !== "") {
			localStorage["url"] = url;
			ShowSavedMessage();
		}

	});

	$('#btnClear').click(function () {

		localStorage.removeItem("url");
		$('#txtUrl').val('');
		ShowSavedMessage();

	});	
});


function ShowSavedMessage(){

	$('#saved').fadeIn(150, function () {
		setTimeout(function(){
			$('#saved').fadeOut(700);
		}, 2000);	
	});

}