---
question: Making Certain Things Only Work in Specified Programs (WindowSpy!)
index: 7
---

If you want your hotkeys/hotstrings/any other part to only work in a specific program, you'll need the #IfWinActive command.

To make a hotkey that only works in Chrome, we can use the following:

```
; Everything following #IfWinActive will only work for the program specified.
#IfWinActive, ahk_exe chrome.exe

; Opens a new tab and searches for "autohotkey tutorial"
F1::
    Send, ^t
    Sleep, 100
    Send, autohotkey tutorial{enter}
return
```

; The second #IfWinActive is to indicate anything past this

; point will work in any program.

#IfWinActive

If you're confused about the ahk_exe part, don't be. It's just one of many ways to identify a window.

You can use the title, but this can cause problems as titles can change. If you feel you NEED to use the title of the program, you can set HOW it searches for titles by using SetTitleMatchMode.

Most of the time you should use either the ahk_exe or the ahk_class.

To find a program's class or exe, you can use a powerful tool called "WindowSpy" that was installed along with AutoHotkey. To open window spy, run a script, right-click on the script icon in your system tray and click "Window Spy".

There's also a button for it in SciTE4AutoHotkey. Look on the bottom toolbar, right side.

SetTitleMatchMode

#IfWinActive

WinTitle (Covers ahk_exe, ahk_class, ahk_id , ahk_pid, ahk_exe, ahk_group)