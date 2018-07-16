#Dependencies

1) Install android studio from ubuntu center software
2) install OpenJDK 8 sudo apt-get install openjdk-8-jre
3) accept all SDK's licensens using this command:  navigate to android's directory ```cd /home/{user}//Android/Sdk/tools/bin``` after execute this command: ```./sdkmanager --licenses```
4) set paths with these commands: open bashrc with ```nano ~/.bashrc``` and add these lines at the bottom of the file:

    '#Android SDK
    export ANDROID_HOME=/home/{user}/Android/Sdk
    export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

5) ```sudo apt install npm```
6) ```sudo npm install -g ionic cordova```

#useful commands:

to list installed platforms: ```ionic cordova platform list```

to remove installed plaform: ```ionic cordova rm <name_platform>```

to add installed plaform: ```ionic cordova add <name_platform>```

to stablish platforms: 

to serve app: ```ionic serve```

to compile android version: ```ionic cordova build android --prod --release```