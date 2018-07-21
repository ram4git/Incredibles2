
# Tools Used
- Visual Studio Code
- Node
- Android Studio
- XCode

# Installation Procedure
1. Install the latest team supported version of XCode. Ask a team member for the current version of XCode that the teams supports/uses.
2. Install the latest team supported version of Android Studio.  Ask a team member for the current version of XCode that the team uses.
3. Install Home Brew from https://brew.sh/
4. Install the latest version of Visual Studio Code for Mac from https://code.visualstudio.com/

# Install Yarn
1. Open a terminal window.
2. Type in the following command: `brew install yarn`

# Setting Up The Mobile App For Development
1. Clone this repository to a local directory.
2. Open a terminal session and navigate to the `code` directory from where you cloned the mobile project source code.
3. Type in the following command: `yarn`

# Debugging The Android App
1. Start Android Studio and open the following project `/code/android/`
2. Open a terminal session and navigate to the `/code/` directory.
3. Type in the following command: `yarn start`
4. From Android Studio, start a debug session of the app as normal.
5. Use Visual Studio Code to update *.tsx files.
6. Use Android Studio, if necessary, to write native code. Use Kotlin and not Java.

# Debugging The iOS App
1. Start XCode and open the following project: `?`
2. Open a terminal session and navigate to the `/code/` directory.
3. Type in the following command: `yarn start`
4. From XCode, start a debug session of the app as normal.
5. Use Visual Studio Code to update *.tsx files.
6. Use XCode, if necessary,, to write native code.  Use Swift and not Objective-C


# Debugging using Reactotron
Its difficult to investigate especially network calls made by react-native applications.
1. Install Reactotron from [this link](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
2. Restart your packager (ex: yarn ios)
3. Reactotron desktop app automatically connects
for more details: https://github.com/infinitered/reactotron

# Instructions for storybook (as of **Jun/26/2018**)
1. Open Mobile/code/index.js and change SHOW_STORY_BOOK to true
`const SHOW_STORY_BOOK = true`
![carbon.png](.attachments/carbon-fa5b3b39-ee80-46c8-a503-b4fcf78a174e.png)
2. Run any one of the following based on your platform
`yarn storybook ios`  for iOS
`yarn storybook and` for Android
`yarn storybook android` for Android

3. It opens up the browser and click on the stories on the left to see them on the device/simulator
![Screen Shot 2018-06-26 at 2.28.37 PM.png](.attachments/Screen%20Shot%202018-06-26%20at%202.28.37%20PM-f22b12ec-1312-4a30-89ec-5fb1a4f05610.png)

