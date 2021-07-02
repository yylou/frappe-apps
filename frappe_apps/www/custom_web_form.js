/**
 *	@Author	:	Yuan-Yao Lou (Mike) <yylou@purdue.edu | yuanyao.lou@gmail.com>
 *	@Title	:	PhD in ECE at Purdue University
 *	@Date	:	2021/06/08
 */


frappe.ready(function() {

	$('.btn-block').off( 'click' ).on( 'click', function() {
		/*  ---  Retrieve Input Data via 'name' HTML attritube  ---  */
		var first_name 	= $('[name="first_name"]').val();
		var last_name 	= $('[name="last_name"]').val();
		var email 		= $('[name="email"]').val();
        var phone		= $('[name="phone"]').val();
		var company		= $('[name="company"]').val();
        var job_title	= $('[name="job_title"]').val();
		var comments	= $('[name="comments"]').val();

		/*  ---  Debug Usage  ---  */
		console.log( first_name, ' | ', last_name, ' | ', email, ' | ', phone, ' | ', company, ' | ', job_title, ' | ', comments );

		frappe.call({
			method: 'frappe_apps.www.custom_web_form.get_response',
			args: {
				first_name:		first_name,
				last_name:		last_name,
				email:			email,
                phone:			phone,
				company:		company,
                job_title:		job_title,
				comments:		comments,
			},
			callback: function(r) {
				if ( r.message === 'COMPLETE_DATA' ) {
					/*  ---  Pop Up Message  ---  */
					frappe.msgprint( 'Thanks for your message.' );
					
					/*  ---  EMPTY all input fields  ---  */
					$(':input').val('');
				} else {
					frappe.msgprint( r.message );
				}
			}
		})
	})

});