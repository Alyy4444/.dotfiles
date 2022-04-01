#!/bin/sh

#wallpapers

#feh --bg-scale ~/Pictures/city.jpg
#feh --bg-scale ~/Pictures/raindrops1.jpg
#feh --bg-scale ~/Pictures/Arch.png
feh --bg-scale ~/Pictures/lifedeath2.jpg

#Applications

picom & disown & # --experimental-backends --vsync should prevent screen tearing on most setups if needed
flameshot &

# Low battery notifier
#~/.config/qtile/scripts/check_battery.sh & disown

# Start welcome
#eos-welcome & disown

#/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 & disown # start polkit agent from GNOME
