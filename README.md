## Table of Contents

 * [Introduction](#introduction)
 * [Installation](#installation)
 * [Configuration ](#configuration )
 * [Supported Environments](#supported-environments)
 * [Sample Code](#Sample-Code)
 * [License](#license)
 
 
## Introduction
    HMS Video Kit Codelab code encapsulates APIs of the HUAWEI Video Kit SDK. It provides many sample programs for your reference or usage.
    Before you use this codelab, it's assumed that you already have a HUAWEI developer account and have already created an app to implement the HMS Video Kit. If you haven't,    please refer to https://developer.huawei.com/consumer/en/doc/start/introduction-0000001053446472 and https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-introduction.
    
    model:       The package name which refers to a video object.
    ui:          The package name which shows the interface of the app to the user.
    utils:       The Package which helps the video duration and current time values shown in the ui.

## Installation
    Before using HMS Video Kit Codelab code, check whether the Android Studio environment has been installed. 
    Download the HMS Video Kit Codelab project by zip or clone in Github.
    Wait for the gradle build in your project.
    
## Supported Environments
	•	Android Studio 3.x or later version
	•	Java JDK 1.8 or later version
	•	EMUI 3.0 or later version
	•	HMS Core (APK) 5.0.0.300 or later version

## Configuration 
    1. Register and sign in to HUAWEI Developers.
    2. Create a project and then create an app in the project, enter the project package name.
    3. Go to Project Settings > Manage APIs, find the Video Kit API, and enable it.
    4. Go to Project Settings > General information, click Set next to Data storage location under Project information, and select a data storage location in the displayed dialog box.
    5. Download the agconnect-services.json file and place it to the app's root directory of the project.
    6. Add the Maven repository address maven {url 'https://developer.huawei.com/repo/'} and plug-in class path 'com.huawei.agconnect:agcp:1.4.1.300' to the project-level build.gradle file.
    7. Add apply plugin: 'com.huawei.agconnect' to the last line of the app-level build.gradle file.
    8. Configure the dependency com.huawei.hms:videokit-player:1.0.1.300 in the app-level buildle.gradle file.
    9. Synchronize the project.
	
## Sample Code
    HMS Video Kit Codelab code uses the Client structure in the project.The following describes methods in the Client structure.

    1) Initiliaze WisePlayerFactory instance.
    You can obtain the initialized WisePlayerFactory instance using the initialize method in the WisePlayerInit object.
    Code location src/main/java/com.dtse.videokitcodelab/WisePlayerInit.kt
    
    2) Create WisePlayer instance
    You can obtain the initialized Wise Player instance using the createPlayer method in the WisePlayerInit object.
    Code location  src/main/java/com.dtse.videokitcodelab/WisePlayerInit.kt
    
    3) Playing Single Video Url
    You can play a video by specfying a video Url.
    Code location src/main/java/com.dtse.videokitcodelab/ui/main/MainActivity.kt
    
    4) Playing Multiple Video Urls
    You can play a video by specfying multiple video Urls.
    Code location src/main/java/com.dtse.videokitcodelab/ui/main/MainActivity.kt
    
    5) Using FrameLayout in the UI
    Videos can only be displayed if the FrameLayout is created in the xml.
    Code location src/main/res/layout/activity_player.xml
    
    6) Using Only Audio Mode
    Only audio can be listened by adjusting the Wise Player's play mode settings.
    Code location src/main/java/com.dtse.videokitcodelab/ui/player/PlayerActivity.kt
    
    7) Video Rewinding and Forwarding Options
    Displaying videos can be rewound or forwarded with the Wise Player's seek feature.
    Code location src/main/java/com.dtse.videokitcodelab/ui/player/PlayerActivity.kt

##  License
    HMS Video Kit Codelab is licensed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
