/**
 *	@Author	:	Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
 *	@Title	:	PhD in ECE at Purdue University
 *	@Date	:	2021/06/09
 */

 
frappe.query_reports['Query Report'] = {
    "filters": [
        {
            'fieldname':    'from_date',
            'label':        __( 'From' ),
            'fieldtype':    'Date',
	        'default':      '2021-01-01',
            'reqd':         1
        },
        {
            'fieldname':    'to_date',
            'label':        __( 'To' ),
            'fieldtype':    'Date',
	        'default':      get_today(),
            'reqd':         1
        },
        {
            'fieldname':    'first_name',
            'label':        __( 'First Name' ),
            'fieldtype':    'Data',
	        'default':      '%',
            'reqd':         1
        },
    ]
}