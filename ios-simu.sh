# This scripts uses the ios-sim package to launch an iOS emulator
# https://github.com/ios-control/ios-sim
#
# USAGE
# 1. In the terminal type in "bash ios-simu.sh"
# 2. This will list all simulators that are installed. Now type in the number of the simulator you want to launch
# 3. Press Enter

node_modules/ios-sim/bin/ios-sim showdevicetypes | cat -n
printf "Select iOS Simulator: "
read index
iossim=$(node_modules/ios-sim/bin/ios-sim showdevicetypes | sed "${index}q;d")
echo "Selected $iossim"
node_modules/ios-sim/bin/ios-sim start --devicetypeid $iossim
