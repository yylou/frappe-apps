#:  Author  : Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
#:  Title   : PhD in ECE at Purdue University
#:  Date    : 2021/06/09


import frappe


def get_context(context):
    MAX_DATA = 50
    context.data = frappe.get_list( 
        "Web Form Data", 
        fields=["modified", 
                "name", 
                "first_name", 
                "last_name", 
                "email", 
                "company"], 
        page_length=MAX_DATA 
    )
    
    #:  (sort data) deprecated -> 'page_length' option in 'get_list' API seems work natively and properly
    # context.data.sort( key=lambda x: x['modified'], reverse=True )
    