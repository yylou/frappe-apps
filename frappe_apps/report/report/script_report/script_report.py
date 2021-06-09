#:  Author  : Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
#:  Title   : PhD in ECE at Purdue University
#:  Date    : 2021/06/09


from __future__ import unicode_literals

import frappe
import datetime
import re


def procFilterDate( data, filters ):
	dataReturn = []

	if 'from_date' in filters and 'to_date' in filters:
		from_year, from_month, from_day = map( int, filters['from_date'].split( '-' ) )
		to_year, to_month, to_day = map( int, filters['to_date'].split( '-' ) )
		
		for entry in data:
			if datetime.date( from_year, from_month, from_day) <= entry['creation'].date() <= datetime.date( to_year, to_month, to_day ):
				dataReturn.append( entry )
		dataReturn.reverse()

	elif 'from_date' in filters and not 'to_date' in filters:
		from_year, from_month, from_day = map( int, filters['from_date'].split( '-' ) )
		
		for entry in data:
			if datetime.date( from_year, from_month, from_day) <= entry['creation'].date():
				dataReturn.append( entry )
		dataReturn.reverse()

	elif not 'from_date' in filters and 'to_date' in filters:
		to_year, to_month, to_day = map( int, filters['to_date'].split( '-' ) )
		
		for entry in data:
			if entry['creation'].date() <= datetime.date( to_year, to_month, to_day ):
				dataReturn.append( entry )
		dataReturn.reverse()

	elif not 'from_date' in filters and not 'to_date' in filters:
		dataReturn = data

	return dataReturn

def procFilterName( data, filters ):
	dataReturn = []

	if 'first_name' in filters:
		key = filters['first_name'].replace( '*', '(.*)' )
		
		frappe.logger().debug( ' |  [ FILTERS - Name ] ' + key )

		for entry in data:
			if re.match( key, entry['first_name'] ): dataReturn.append( entry)
		dataReturn.reverse()

	else:
		dataReturn = data

	return dataReturn

def execute( filters=None ):
	columns = [
		{
			"fieldname":	"name",
			"fieldtype":	"Data",
			"label":		"ID",
			"width":		315
		},
		{
			"fieldname":	"first_name",
			"fieldtype":	"Data",
			"label":		"First Name",
			"width":		100
		},
		{
			"fieldname":	"last_name",
			"fieldtype":	"Data",
			"label":		"Last Name",
			"width": 		100
		},
		{
			"fieldname":	"company",
			"fieldtype":	"Data",
			"label":		"Company",
			"width":		200
		},
		{
			"fieldname": 	"email",
			"fieldtype": 	"Data",
			"label": 		"Email",
			"width":	 	300
		},
		{
			"fieldname": 	"creation",
			"fieldtype": 	"Date",
			"label": 		"Creation",
			"width": 		200
		}
 	]
	
	dataDB = frappe.db.get_all( 'Web Form Data', ['name', 'first_name', 'last_name', 'company', 'email', 'creation'] )

	#:  (filters handling)
	data = procFilterDate( dataDB, filters )
	data = procFilterName( data,   filters )

	#:  (debug usage)
	# frappe.logger().debug( ' |  [ FILTERS ]  ' + str( filters ) )


	return columns, data

