jQuery(document).ready(function()
{
	jQuery("#menu-responsive").click(function()
	{
		jQuery("nav").fadeToggle(1000);
	});
});

    jQuery(function($) {
            //zresetuj scrolla
            $.scrollTo(0);

            $('#link1').click(function() {
                $.scrollTo($('#oferta'), 500);
            });
            $('#link2').click(function() {
                $.scrollTo($('#design'), 500);
            });
            $('#link3').click(function() {
                $.scrollTo($('#omnie'), 500);
            });
            $('#link5').click(function() {
                $.scrollTo($('#bitcoin'), 500);
            });

            $('.scrollup').click(function() {
                $.scrollTo($('body'), 1000);
            });
        });
