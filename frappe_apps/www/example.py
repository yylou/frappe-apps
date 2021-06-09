#:  Author  : Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
#:  Title   : PhD in ECE at Purdue University
#:  Date    : 2021/06/09


import frappe
from frappe.utils.response import build_response


def get_context( context ):
    #:  (debug usage)
    frappe.logger().debug( '\n\n    o [ User     Information ]  User Name : {0}\n'.format( frappe.session.user ) )

    if frappe.session.user != 'Guesst':
        context.data_length_accounts  = 100
        context.data_length_consumers = 200
        context.data_length_sites     = 300
        context.data_length_vehicles  = 400