# Frappe Apps Development
[Basic Usage (Frappe Bench)](#basic-usage)  
[Web Form and DocType](#web-form)


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

<a name="web-form"/>

## Web Form and DocType
(Related settings could be referred to this repository)
1. Create **Module** under your Frapp app
2. Create **DocType** to store web form data under the related module
3. Create **Web Form** linked with the created DocType and Module above