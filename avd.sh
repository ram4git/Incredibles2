# If you get an error related to "qt" or "x86 not found", you'll need to update your
# .bash_profile file to include the paths to the Android SDK and the Android SDK Emulator.
# Please update the .bash_profile located at the following location:
# ~/Users/YourLoginUserName/.bash_profile
# You're going to need admin privelages to unlock and update this file.
# Update the file and add the following contents if you don't have them already:
#
# export ANDROID_HOME=/Your/Location/To/The/Android/SDK
# export PATH=$ANDROID_HOME/platform-tools:$PATH
# export PATH=$ANDROID_HOME/tools:$PATH
# export PATH=$ANDROID_HOME/emulator:$PATH
# 
# Then restart your Mac.

# USAGE
# 1. To execute this script in a terminal type "bash avd.sh"
# 2. Then type in the number of the emulator you want to execute.

emulator -list-avds | cat -n
printf "Select AVD: "
read index
avd=$(emulator -list-avds | sed "${index}q;d")
echo "Selected $avd"
emulator -netdelay none -netspeed full -avd $avd > /dev/null &
printf "Do you want to run on $avd? (y/n) "
read answer
if [ "$answer" == "y" ]
then
    react-native run-android
fi
