from libqtile import bar
from .widgets import *
from libqtile.config import Screen
import os

screens = [
    Screen(

        #LEFT Bar

        left=bar.Bar([
            
            widget.Sep(padding=3, linewidth=0, background="#000000", this_screen_border="#5294e2"), 
            widget.Sep(padding=3, linewidth=0, background="#000000"), 
            widget.Sep(padding=3, linewidth=0, background="#000000"), 
            widget.Sep(padding=3, linewidth=0, background="#000000"), 


            widget.Image(filename='~/.icons/default/firefox.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn("firefox")}),
            widget.Image(filename='~/.icons/default/terminal.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn("kitty")}),
            widget.Image(filename='~/.icons/default/vscode.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn("code-oss")}),
            widget.Image(filename='~/.icons/default/discord2.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn("discord")}),
            
            widget.TextBox(text="                                           すべてが大丈夫になります                         ", foreground="#ffffff",fontsize=18),

            #pavucontrol
            widget.Image(filename='~/.icons/default/speaker.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn("pavucontrol")}),
            widget.Image(filename='~/.icons/default/power.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn(os.path.expanduser('~/.config/rofi/powermenu/powermenu.sh'))}),
            ], 27),
        


        #Top bar

        top=bar.Bar(
            
            [   #widget.Sep(padding=3, linewidth=20, foreground="#000000",background="#000000"),
                #widget.Sep(padding=3, linewidth=0, background="#000000"), 
                widget.Image(filename='~/.icons/default/arch.png', margin=3, background="#000000", mouse_callbacks={'Button1': lambda: qtile.cmd_spawn(".config/rofi/launchers/colorful/launcher.sh")}),
                widget.Sep(padding=3, linewidth=0, background="#000000"), 
                widget.GroupBox(
                                highlight_method='line',
                                this_screen_border="#ffffff",
                                this_current_screen_border="#ffffff",
                                active="#ffffff",
                                inactive="#848e96",
                                background="#000000"),
                       #1 
                       widget.TextBox(
                       text = '',
                       #text = '',
                       padding = 0,
                       fontsize = 26,
                       foreground='#000000',
                       ),
                widget.Prompt(),
                widget.Spacer(length=5),
                widget.WindowName(foreground='#1e1e1e',fmt='{}'),
                widget.Chord(
                    chords_colors={
                        'launch': ("#ff0000", "#ffffff"),
                    },
                    name_transform=lambda name: name.upper(),
                ),
                widget.CurrentLayoutIcon(scale=0.75),
                widget.CheckUpdates(
                    update_interval=1800,
                    distro="Arch_yay",
                    display_format="{updates} Updates",
                    foreground="#ffffff",
                    mouse_callbacks={
                        'Button1':
                        lambda: qtile.cmd_spawn(terminal + ' -e yay -Syu')
                    },
                    background="#000000"),
                widget.Systray(icon_size = 20),
                
                widget.Sep(padding=3, linewidth=0, background="#1e1e1e"), 
                widget.Sep(padding=3, linewidth=0, background="#1e1e1e"), 

                widget.TextBox(
                       text = '',
                       #text = '',
                       padding = 0,
                       fontsize = 26,
                       foreground='#000000',
                       background = '#1e1e1e' ##575757
                       ),    
                widget.Clock(format=' %Y/%m/%d %a %I:%M %p ',
                             background="#000000",
                             foreground='#ffffff'),
                
            ],
            26,  # height in px
            background="#1e1e1e"  # background color
            #088f8f
        ), ),
]
