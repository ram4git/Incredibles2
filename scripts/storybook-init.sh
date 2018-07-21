#!/bin/bash
BLUE=`tput setaf 4`
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
BACKGROUND=`tput setab 7`

print() {
    case "$1" in
    "INFO")
        echo "${GREEN}[STORYBOOK] ${BACKGROUND}${2}${RESET}"
        ;;
    "WARN")
        echo "${RED}[STORYBOOK] ${BACKGROUND}${2}${RESET}"
        ;;
    "LOG")
        echo "${BLUE}[STORYBOOK] ${BACKGROUND}${2}${RESET}"
        ;;
    *)
        echo "${BLUE}[STORYBOOK] ${BACKGROUND}${2}${RESET}"
        ;;
    esac
}



print INFO "Starting simulator in ${1} platform..."
RAM=storybook&& yarn ${1}

print INFO "Starting Storybook on browser..."
open http://localhost:7007/ && storybook start -p 7007 &

if [ "${1}" != "ios" ]
    then
        print INFO "✅ ADB reverse proxy started as this is for android"
        adb reverse tcp:7007 tcp:7007
fi

if [ $? = 0 ]
    then
        print INFO "✅ Storybook service is started"
    else
        print WARN "✅ Storybook is already running"
fi

print INFO "👍 Storybook is ready"
print LOG "👉 Select a story to see it on the device/emulator"
