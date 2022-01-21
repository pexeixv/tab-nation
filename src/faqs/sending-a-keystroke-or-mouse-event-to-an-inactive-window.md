---
question: Sending a Keystroke or Mouse Event to an Inactive Window
index: 8
---

Sometimes you need to send a keystroke or mouse click to a program that's not active. Like playing/pausing your music player when you're in the middle of a game. Or maybe you need to pause the movie that's playing on your second monitor.
To do that, you'll need to use ControlSend or ControlClick.

Here's my own personal script I use to control WinAmp (a music player) regardless of what program is active.

```
;============================== Winamp ==============================


#IfWinExist, ahk_exe winamp.exe


; Previous Song

#z::

    ControlSend, ahk_parent, z, ahk_class Winamp v1.x

return


; Play

#x::

    ControlSend, ahk_parent, x, ahk_class Winamp v1.x

return


; Pause

#v::

    ControlSend, ahk_parent, c, ahk_class Winamp v1.x

return


; Next Song

#b::

    ControlSend, ahk_parent, b, ahk_class Winamp v1.x

return
```

#IfWinExist

It should be noted that the ahk_parent part (called the control parameter) is not usually needed. Winamp is one of the rare cases where it's required. Normally you'll leave it blank like this:

```
    ControlSend, , a, ahk_exe notepad.exe
```

ControlSend

ControlClick