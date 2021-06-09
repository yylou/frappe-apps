/**
 *	@Author	:	Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
 *	@Title	:	PhD in ECE at Purdue University
 *	@Date	:	2021/06/09
 */


 frappe.query_reports["Script Report"] = {
	"filters": [
        {
            'fieldname':    'from_date',
            'label':        __( 'From' ),
            'fieldtype':    'Date',
	        'default':      frappe.datetime.year_start()
        },
        {
            'fieldname':    'to_date',
            'label':        __( 'To' ),
            'fieldtype':    'Date',
	        'default':      frappe.datetime.year_end()
        },
        {
            'fieldname':    'first_name',
            'label':        __( 'First Name' ),
            'fieldtype':    'Data',
	        'default':      '*'
        }
    ]
};
