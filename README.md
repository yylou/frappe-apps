# Frappe Apps Development
[Basic Usage (Frappe Bench)](#basic-usage)  
[WebForm and DocType](#web-form)  
[Custom WebForm](#custom-web-form)  
[Custom Page to Retrieve DocType Data](#custom-page)  
[Report: Query Report](#query-report)  
[Report: Script Report](#script-report)  


<br>
<br>

<a name="basic-usage"/>

## Basic Usage (Frappe Bench)
```shell
# Create New Frappe App / Get Existing Frappe App
bench new-app     <APP_NAME>
bench get-app     <GIT_URL>

# Install Frapp App to Frapp Site
bench --site      <SITE_NAME>           \
      install-app <APP_NAME>
      
# Frappe DB Backup / Restore
bench --site      <SITE_NAME>           \
      backup  --backup-path <ABS_PATH>  \

bench --site      <SITE_NAME>           \
      restore     <BACKUP_DB_GZ_FILE>
```

<br>
<br>

<a name="web-form"/>

## WebForm and DocType
```INI
# ==================================================================================
#  General Settings                        (refer to JSON file for more details)   =
# ==================================================================================

# Folder Structure: APP_NAME/MODULE_NAME/TYPE/NAME
[Module] web-form            (Folder: frappe_apps/web_form)

[Type]
DocType = Web Form Data      (Folder: frappe_apps/web_form/doctype/web_form_data)
WebForm = Web Form           (Folder: frappe_apps/web_form/web_form/web_form)

[Permission]
DocType = Guest: Read, Write, Create
```
1. Create **'Module'** under your Frapp app
2. Create **'DocType'** to store web form data under the related module
3. Create **'WebForm'** linked with the created DocType and Module above
4. Input data via WebForm web page or via REST API (Guest is allowed due to permission settings)
```shell
# URL Format: <DOMAIN>/api/resource/<DOCTYPE>
curl -X POST https://<DOMAIN>/api/resource/Web%20Form%20Data    \
     -H 'Content-Type: application/json'                       \
     -H 'Accept: application/json'                             \
     -d '{"first_name":"Guest", "last_name":"Test", "email":"guest.test@example.com", "comments":"Hello World"}'
```

<br>
<br>

<a name="custom-web-form"/>

## Custom WebForm
```INI
[File] 
HTML       = custom-web-form.html   (Folder: frappe_apps/www)
Python     = custom_web_form.py     (Folder: frappe_apps/www)
Javascript = custom_web_form.js     (Folder: frappe_apps/www)
```
1. Create HTML, Javascript (client-side), and Python (server-side) files under **'www'** folder
2. Design 'Form' in HTML, Front-end reactions in Javascript, and Back-end response in Python

<br>
<br>

<a name="custom-page"/>

## Custom Page to Retrieve DocType Data
```INI
[File] 
HTML       = retrieve-data.html     (Folder: frappe_apps/www)
Python     = retrieve_data.py       (Folder: frappe_apps/www)
```
1. Create HTML and Python (server-side) files under **'www'** folder
2. Design 'Table' in HTML and Back-end response in Python (here we get Frappe data by **'frappe.get_list'**)

<br>
<br>

<a name="query-report"/>

## Report: Query Report
```INI
# ==================================================================================
#  General Settings                        (refer to JSON file for more details)   =
# ==================================================================================

# Folder Structure: APP_NAME/MODULE_NAME/TYPE/NAME
[Doctype] Web Form Data      (Folder: frappe_apps/web_form/doctype/web_form_data)
[Module]  report             (Folder: frappe_apps/report)

[Type]
Report  = Query Report       (Folder: frappe_apps/report/report/query_report)
```
1. Create **'Module'** under your Frapp app
2. Create **'Report'** linked with DocType and Module above
3. Add required information in the **'Filters'** and **'Columns'** sections (referred to following table content)
```INI
[columns]
/-------------------------------------------------\
|    Fieldname    |    Label    |    Fieldtype    |
|-------------------------------------------------|
|  id             |  ID         |  Data           |
|  first_name     |  First Name |  Data           |
|  last_name      |  Last Name  |  Data           |
|  email          |  Email      |  Data           |
|  phone          |  Phone      |  Data           |
|  creation       |  Creation   |  Data           |
\-------------------------------------------------/

[filters]
/-------------------------------------------------\
|    Fieldname    |    Label    |    Fieldtype    |
|-------------------------------------------------|
|  from_date      |  From       |  Date           |
|  to_date        |  To         |  Date           |
|  first_name     |  First Name |  Data           |
\-------------------------------------------------/
```
4. Create Javascript, for filtering purpose
```Javascript
/*
 *  @path      frappe_apps/report/report/query_report
 *  @filename  query_report.js
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
```

<br>
<br>

<a name="script-report"/>

## Report: Script Report
```INI
# ==================================================================================
#  General Settings                        (refer to JSON file for more details)   =
# ==================================================================================

# Folder Structure: APP_NAME/MODULE_NAME/TYPE/NAME
[Doctype] Web Form Data      (Folder: frappe_apps/web_form/doctype/web_form_data)
[Module]  report             (Folder: frappe_apps/report)

[Type]
Report  = Script Report      (Folder: frappe_apps/report/report/script_report)
```