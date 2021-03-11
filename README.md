# Requirements
Download nodejs and install
https://nodejs.org/en/

Download notepad ++ 
https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v7.8.8/npp.7.8.8.Installer.x64.exe

Download GIT
https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.1/Git-2.30.0-64-bit.exe

# Command to update after 1st time clone
goto the project root (i.e. workplace/medibot-web/httpclient-test ) on command prompt then run below

1) npm install -g @angular/cli

2) npm install

# Command to start
ng serve --host 0.0.0.0 --proxy-config proxy.conf.json

# Command to start ng serve faster
ng serve --watch=true --sourceMap=false  --optimization=false 

# Command to start ng serve to test on mobile
ng serve --host 0.0.0.0 --watch=true --sourceMap=false  --optimization=false 

