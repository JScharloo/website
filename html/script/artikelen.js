$(document).ready(function() 
{
	$( ".artikelen p" ).hide();
});

$( "#js-hover1,#js-hover2,#js-hover3,#js-hover4,#js-hover5,#js-hover6,#js-hover7,#js-hover8,#js-hover9" ).hover( hover_in, hover_out);

function hover_in()
{
	$( ".artikelen h2" ).css( "top", "0px" );
	$( ".artikelen p" ).show();
	//$( ".artikelen p" ).SlideDown();
}

function hover_out()
{
	$( ".artikelen p" ).hide();
	$( ".artikelen h2" ).css( "top", "210px" );
	//$( ".artikelen p" ).SlideUp();
}
