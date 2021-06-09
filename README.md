# Frappe Apps Development
[Basic Usage (Frappe Bench)](#basic-usage)  
[WebForm and DocType](#web-form)  
[Custom WebForm](#custom-web-form)


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
(Related settings could be referred to this repository)
```INI
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
Python     = custom-web-form.py     (Folder: frappe_apps/www)
Javascript = custom-web-form.js     (Folder: frappe_apps/www)
```
1. Create HTML, Javascript (client-side), and Python (server-side) files under **'www'** folder
2. Design 'Form' in HTML, Front-end reactions in Javascript, and Back-end response in Python