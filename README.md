#Dependencies

1) Install android studio from ubuntu software center

2) install Oracle JDK 

    ```sudo add-apt-repository ppa:webupd8team/java```
    
    ```sudo apt-get update```
    
    ```sudo apt-get install oracle-java8-installer```
    
3) accept all SDK's licensens using this command:  navigate to android's directory ```cd /home/{user}//Android/Sdk/tools/bin``` after execute this command: ```./sdkmanager --licenses```

4) set paths with these commands: open bashrc with ```nano ~/.bashrc``` and add these lines at the bottom of the file:
    '#JAVA_HOME
    export JAVA_HOME="/usr/lib/jvm/java-8-oracle"
    '#Android SDK
    export ANDROID_HOME=/home/{user}/Android/Sdk
    export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
    
5) install Gradle: ```sudo apt install gradle```

6) install npm ```sudo apt install npm```

7) install ionic and cordova globally ```sudo npm install -g ionic cordova```

#useful commands:

to list installed platforms: ```ionic cordova platform list```

to remove installed plaform: ```ionic cordova rm <name_platform>```

to add installed plaform: ```ionic cordova add <name_platform>```

to serve app: ```ionic serve```

to compile android version: ```ionic cordova build android --prod --release```