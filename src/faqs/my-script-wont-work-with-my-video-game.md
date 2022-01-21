---
question: My script wont work with my video game
index: 2
---

Tools:

Window Spy: This is a basic standard, reveals system names, pixel colors, coordinates... Usually the only tool needed.


Send and Click Tester: https://autohotkey.com/board/topic/95653-send-and-click-tool-v32/

This tool will help you determine which click and send modes work with your game. Very useful!


Easy Steps:

First basic steps to get AHK working with the average game.

1) Make sure the script is running with Admin privilege(Right-Click on script, Run As Administrator)

-Explanation: Some games run at admin level and AHK does not typically run with this privilege set.


2) Switch the game settings from 'Full Screen' mode to 'Windowed' or (I prefer) 'Borderless Windowed' mode.

-Explanation: DirectX draws the screen in a manner different from Windows, this can cause things like colors

being reported wrong, mouse jumping to the 'wrong' coords, and it can just plain prevent the game from

registering the input at all.


3) A lot of times Keypresses need to be held down longer than normal for the game to fully register it.

-Explanation: Usually caused by DirectX(DirectInput). It 'polls' the keyboard every 15ms(varies slightly) and

records the keys that are down, then 15ms later it takes another 'snapshot' and compares the two. This

is how games allow you to hold two(or more) keys at the same time, but very fast(sub 10-15ms) inputs

can fall between snapshots and the game never sees the keypress. If your script is very twitchy and seems

to skip over some keypresses then this is likely the problem. Some games can require large delays, 50-100ms

or more in some select cases.


-Example: (Holds key down for 20ms)


Code: Select all - Toggle Line numbers

Send, {a down}
Sleep 20
Send, {a up}


4) Some games do not allow their keybinds to be 'hijacked'.

-Explanation: Many games, especially DirectX driven, use driver level keyboard interaction and cannot be

changed via AHK. You need to choose keybindings that the game is NOT using, some people have had

success by changing the in-game keybinds so that those keys are 'free' for AHK to use. Sometimes this

can be overcome by constantly rehooking the keyboard and mouse. An indicator that this is the case is

that the keys work once or 'for a while' and then stop working completely.


Intermediate Steps:

If you are at this point and the script still doesn't work it is likely that you are dealing with some sort of cheat

prevention software. Don't give up hope, there are a couple fairly simple things that can still be done.


1) Compile the script to .exe form and rename the program to something non-threatening to the game.

-Explanation: Look here in the docs for how to compile, it is very well written and I will not be re-creating

the wheel here. This method is a fairly simple workaround for most 'hackshield' type softwares.

-Examples: Rename to something generic or the same as something legit(setup.exe, skype.exe) possibly

just random garbage(alksjdu.exe).


2) Set up a second user account and run scripts as that user. Here is a link to the post with full explanation.

-Explanation: Games run as one user do not have access to the processes run by a second user. In

this scenario, some cheat prevention softwares lack the access level to prevent the keystrokes sent

by the second 'user'(our AHK script)



Expert Steps: (These well assume a high level of knowledge)

These will be very difficult in comparison to the above steps and will require in-depth knowledge to implement.

Typically this level of workaround is only necessary when trying to bypass a cheat detection system.


1a) Download and setup a VM(Virtual Machine), install and run the game INSIDE the VM. Run AHK on

the OUTSIDE OS. This should prevent the game from interacting directly with AHK or 'seeing' it while

still allowing AHK to move the mouse and click.

1b) Use a second computer to 'Remote Desktop' to the primary gaming PC, run AHK on 'outside' PC.


2) Simulating DirectInput. This is difficult and not supported natively in AHK in any way. Look here for a

thread describing a couple ways to simulate DirectInput. This is theoretical and untested. Requires

knowledge of DLL interaction.


3) Altering Autohotkeys mutex names. This requires downloading the Autohotkey C++ source code and altering certain names

that specific anti-cheat softwares look for. Namely XignCode and AhnLab. You will have to ask further about this in the forum

or on Reddit as this step basically requires a custom compiled version of Autohotkey.


Following these steps should get scripts working in the majority of games. I have found a few that I cannot

make work so far but they are few and far between. If you have some tips to add to this please let me know!