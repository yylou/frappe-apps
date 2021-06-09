#:  Author  : Yuan-Yao Lou (Mike) <yylou@purdue.edu | yuanyao.lou@gmail.com>
#:  Title   : PhD in ECE at Purdue University
#:  Date    : 2021/06/08


from __future__ import unicode_literals

import frappe
from frappe.utils import now


@frappe.whitelist( allow_guest=True )
def get_response( first_name='', last_name='', email='', phone='', company='', job_title='', comments='' ):
    data = {
        'first name':   first_name,
        'last name':    last_name,
        'email':        email,
        'comments':     comments
    }

    #:  (for incomplete data, reply ERROR message)
    for key in data:
        if not data[key]: 
            frappe.response["message"] = 'Please provide your {0}, thanks.'.format( key )
            return frappe.response["message"]

    #:  (cyber attack protection)
    MAX_DATA_IN_AN_HOUR = 10000
    if frappe.db.sql("""select count(*) from `tabContact Data` where TIMEDIFF(%s, modified) < '01:00:00'""", now())[0][0] > MAX_DATA_IN_AN_HOUR:
        frappe.response["message"] = "Sorry, we believe we have received an unreasonably high number of requests of this kind. Please try later."
        return

    #:  TODO - (send an email to the consumer)
    # frappe.sendmail( recipients=forward_to_email, sender=sender, content='We have received your message and we will get back to you ASAP.', subject='[System Message] Reply Email from IoT Eye Inc.' )

    #:  (insert DocType data)
    frappe.get_doc( dict(
		doctype     = 'Web Form Data',
		first_name  = first_name,
        last_name   = last_name,
        email       = email,
        phone       = phone,
        company     = company,
        job_title   = job_title,
        comments    = comments,
	)).insert( ignore_permissions = True )

    return 'COMPLETE_DATA'
    