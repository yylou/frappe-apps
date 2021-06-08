# Frappe Apps Development
[Basic Usage (Frappe Bench)](#basic-usage)  
[WebForm and DocType](#web-form)  
[Custom WebForm](#custom-web-form)


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
DocType = Guest: Read, Write
```
1. Create **Module** under your Frapp app
2. Create **DocType** to store web form data under the related module
3. Create **WebForm** linked with the created DocType and Module above

<br>

<a name="custom-web-form"/>

## Custom WebForm
