<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="renderer" content="webkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="keywords" content="Editor.md,editor,Markdown Editor,Markdown" />
    <meta name="description" content="Skills Network Author IDE" />
    <title>Skills Network Editor</title>
    <link rel="stylesheet" href="/editormd/examples/css/style.css?version=3.9.3" />
    <link rel="stylesheet" href="/editormd/css/editormd.css?version=3.9.3" />
    <link rel="stylesheet" href="/public/css/custom.css?version=3.9.3" />
    <link rel="stylesheet" href="/public/css/custom_popover.css?version=3.9.3" />
    <link rel="shortcut icon" href="/public/images/SN_favicon.png" type="image/x-icon" />

    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css?version=3.9.3">
    <script src="/public/js/comms.js?version=3.9.3"></script>
    <script defer src="/node_modules/alpinejs/dist/cdn.min.js?version=3.9.3"></script>
</head>

<body>
    <div id="layout">
    <div id="test-editormd">
        <textarea style="display:none;">::page{title&#x3D;&quot;Lab: Backup and Restore Automation&quot;}

&lt;img src&#x3D;&quot;https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/assets/logos/SN_web_lightmode.png&quot; width&#x3D;&quot;300&quot;&gt;

&lt;hr&gt;

#### Estimated time: 60 mins

## Scenario
As a critical component of data security, the backup and restore processes are expected to be executed automatically. Your employer has asked you to schedule the backup creation process to run every three minutes and retain backups for ten days before deleting them.

## Learning objectives
In this lab, you will:

 - Configure the interface for automated connections
 
 - Create a Bash script for the backup operation

- Schedule the backup operation script to run every three minutes

- Simulate a data loss scenario and create a Bash script to restore the data from the latest backup

## Software used in this lab

In this lab, you will use &lt;a href&#x3D;&quot;https://www.mysql.com/?utm_medium&#x3D;Exinfluencer&amp;utm_source&#x3D;Exinfluencer&amp;utm_content&#x3D;000026UJ&amp;utm_term&#x3D;10006555&amp;utm_id&#x3D;NA-SkillsNetwork-Channel-SkillsNetworkCoursesIBMDB0110ENSkillsNetwork24601058-2021-01-01&quot; target&#x3D;&quot;_blank&quot;&gt;MySQL&lt;/a&gt;, a relational database management system (RDBMS), designed for efficient data storage, manipulation, and retrieval.

&lt;img src&#x3D;&quot;https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-DB0110EN-SkillsNetwork/labs/Lab%20-%20Create%20Tables%20and%20Load%20Data%20in%20MySQL%20using%20phpMyAdmin/images/mysql.png&quot; width&#x3D;&quot;100&quot; height&#x3D;&quot;100&quot;&gt;
&lt;p&gt;&lt;/p&gt;

To complete this lab, you will use the MySQL relational database service available in the IBM Skills Network Labs (SN Labs) Cloud IDE.


::page{title&#x3D;&quot;About the dataset&quot;}

The dataset used here is not a real life dataset, but has been synthetically created for this lab.

## Prepare the lab environment

Before you proceed with the lab, complete the following steps:

1. Start the MySQL server.

2. Use the link below to download the &#x60;database_create_load.sql&#x60; file using the MySQL terminal.

&#x60;&#x60;&#x60;
https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/e5knO3aPawlYYRCObCOKKg/database-create-load.sql
&#x60;&#x60;&#x60;


3. Use the MySQL CLI or terminal to create a new database &#x60;sales&#x60;.

4. Use the &#x60;.sql&#x60; file to create the tables and populate them with data.

::page{title&#x3D;&quot;Assignment tasks&quot;}

## Task 1: Configure the Server with connection password

Edit the configuration file of Cloud IDE interface with the relevant client information to establish connections automatically, without requiring manual entry of passwords.

Save the code entered here as a separate text file for answering graded quizzes.

## Task 2: Creating the backup operation bash script

Create a bash script &#x60;backup_automation.sh&#x60; that has the following features.

1. Create the database backup as a zip file. The nomenclature of the saved backup should be &#x60;backup_sales_&lt;timestamp&gt;.gz&#x60;.

2. If the database doesn\&#x27;t exist, it should display an appropriate message. If the backup directory doesn\&#x27;t exist, it should create one.

3. Set the backup retention period to 10 days. The script should also clean up old backups.

4. Save the script in a separate document and take a screenshot of its contents. Name this image &#x60;backup_automation.jpg&#x60;.

5. Make the script executable.

## Task 3: Schedule the CRON job

1. Using Crontab, add a command to execute the &#x60;backup_automation&#x60; script every 3 minutes. Save the command in a separate text document.

2. Start the Cron service.

3. After waiting for 3 minutes, print the contents of the backup directory and take a screenshot of the output. Save this image as &#x60;cron_job_output.jpg&#x60;.

4. Stop the Cron service once done.

## Task 4: Simulate data loss and restore the database

1. Write a bash script, named &#x60;truncate_tables.sh&#x60; to truncate all tables in the database. Make sure to disable the foriegn key checks before truncation and enabling them after. Save a copy of the code used in a separate text document.

2. Make the bash script executable and run it. 

2. Execute a data pull query on the DimDate table. Take a screenshot of the output and save it as &#x60;data_truncate_code.jpg&#x60;.

3. Unzip the latest backup file and restore the database. Save all the commands used in this process in a separate text document.

4. To demonstrate the restoration, query the top 10 entries from the &#x60;DimDate&#x60; table in the dataset. Take a screenshot of this output and save it as &#x60;restored_data_automation.jpg&#x60;.

::page{title&#x3D;&quot;Conclusion&quot;}

Congratulations on completing this lab!

You automated the database backup and restore process to enhance data security and ensure recovery in case of data loss. You created a Bash script to back up the database, scheduled it to run every three minutes using a CRON job, and implemented a retention policy to manage old backups. Additionally, you simulated a data loss scenario by truncating the tables and successfully restored the database from the latest backup. 

## Author(s)
[Abhishek Gagneja](https://www.linkedin.com/in/abhishek-gagneja-23051987/) 

### Other Contributor(s) 
Rav Ahuja

## &lt;h3 align&#x3D;&quot;center&quot;&gt; © IBM Corporation. All rights reserved. &lt;h3/&gt;
&lt;!--
## Changelog
| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 2025-02-10 | 0.1 | Abhishek Gagneja | Initial version created |
| 2025-02-10 | 0.2 | Jojy John | ID Reviewed |
| 2025-02-10 | 0.2 | Praveen Thapliyal  | QA reviewed  |
|   |   |   |   |
</textarea>
    </div>
</div>

<script src="/node_modules/@popperjs/core/dist/umd/popper.min.js?version=3.9.3"></script>
<script src="/node_modules/tippy.js/dist/tippy-bundle.umd.min.js?version=3.9.3"></script>

<script src="/node_modules/he/he.js?version=3.9.3"></script>
<script type="text/javascript" src="/node_modules/iframe-resizer/js/iframeResizer.contentWindow.min.js?version=3.9.3"></script>
 
<script src="/node_modules/plyr/dist/plyr.polyfilled.js?version=3.9.3"></script>
<link rel="stylesheet" href="/node_modules/plyr/dist/plyr.css?version=3.9.3" />
<link rel="stylesheet" href="public/css/custom_plyr.css?version=3.9.3" />

<script src="editormd/examples/js/jquery.min.js"></script>
<script src="editormd/editormd.js?version=3.9.3"></script>

<script src="editormd/languages/en.js"></script>

<script src="public/js/common.js?version=3.9.3"></script>
<script src="public/js/render.js?version=3.9.3"></script>

<script type="text/javascript">
    var authorEditor = $(function () {
        let metadata = he.decode('{&quot;markdown-version&quot;:&quot;v1&quot;,&quot;tool-type&quot;:&quot;theiadocker&quot;,&quot;locales-url&quot;:&quot;https://cf-courses-data.static.labs.skills.network/deAzgUWE-neTJM4QdKVmQA/automation-v1-locales.json&quot;}')
        injectMetadata(metadata)

        let token = findGetParameter("token");
        let LABS_BASE_URL = 'https://labs.cognitiveclass.ai';
        let asset_library_prefix_url = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Jm3jhGc8fktUMoLtyg50QA';
        let tool_type = "theiadocker";
        let filename = `automation-v1.md`;
        let audioFileUrl = ``
        let localesUrl = `https://cf-courses-data.static.labs.skills.network/deAzgUWE-neTJM4QdKVmQA/automation-v1-locales.json`;
        let launch_presentation_locale = ``;
        let currentTheme = localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "default");

        return authorEditor = editormd("test-editormd", "3.9.3", {
            tool_type,
            filename,
            audioFileUrl,
            localesUrl,
            width: "100%",
            //height: "100%",
            autoHeight: true,
            // mode: 'markdown',
            theme: currentTheme,
            previewTheme: currentTheme,
            editorTheme: currentTheme === "dark" ? "pastel-on-dark" : "default",
            readOnly: true,
            pluginPath: 'plugins/',
            syncScrolling: false,
            htmlDecode: 'img',
            path: 'editormd/lib/',
            watch: false,
            // markdown,
            toolbar: false,
            atLink: false,
            toc: true,
            tocm: true,
            tocDropdown: false,
            tocTitle: "Table of Contents For your lab!",
            tex: true,
            flowChart: true,
            sequenceDiagram: true,
            codeFold: true, // Doesn't do anything?
            taskList: true,
            emoji: true,
            saveMarkdownToTextarea: true,

            onresize: function () {
                $("html,body").css("overflow", "hidden");

                this.preview.css({
                    width: $(window).width(),
                    height: $(window).height()
                })

                adjustProgressBarWidth()
            },
            fixCodeBlocks: function () {
                adjustCodeBlocks(this);
            },
            onchange: function () { // called after marked finsihed its rendering
                fixEncoding(this);

                if (this.settings.tool_type != "instructional-lab") {
                    fixCustomPlugins(this, 'https://reward.skills.network/claim');
                }
            },
            onload: function () {
                $(".markdown-body").addClass("hidden")
                $("[type=\"file\"]").bind("change", function () {
                    alert($(this).val());
                    authorEditor.cm.replaceSelection($(this).val());
                    console.log($(this).val(), authorEditor);
                });

                this.fullscreen();
                this.previewing();

                setPreviewWatchToolbar(this);

                if (tool_type != "instructional-lab") {
                    fixCustomPlugins(this, 'https://reward.skills.network/claim');
                }
                else {
                    if(audioFileUrl) {
                        addAudioWidget(this, audioFileUrl);
                    }
                }

                let langParam = findGetParameter("lang");

                function determineLanguage() {
                    if (langParam) {
                        return bcp47ToISO6391(langParam) || langParam.toUpperCase();
                    } else if (launch_presentation_locale) {
                        return bcp47ToISO6391(launch_presentation_locale);
                    } else if (localStorage.getItem("preferredLanguage")) {
                        return localStorage.getItem("preferredLanguage").toUpperCase();
                    } else {
                        return null;
                    }
                }

                const preferredLanguage = determineLanguage();

                setTranslationContent(preferredLanguage).finally(() => {
                    this.setMarkdown(this.getMarkdown());
                    this.previewing();
                    $(".markdown-body").removeClass("hidden")
                });

                setAssetLibraryPrefixUrl(asset_library_prefix_url);
                //comms with UI
                setParentUrl(LABS_BASE_URL);
                establishCommsWithUI(this);
                //let the UI know that the author-ide has loaded
                requestToUI({ type: "frame_loaded" });
            }
        });
    });
</script>
</body>

<script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js?version=3.9.3"></script>

</html>
