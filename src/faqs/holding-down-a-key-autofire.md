---
question: Holding Down a Key / Autofire
index: 3
---

Holding Down a Key / Autofire

How to make a key "autofire" when a key is held down.

Edit: Don't use loops/while-loops for auto-fire. The original method posted here was how I first learned. While it does work, I later learned it can cause problems in a script. Especially when 2 loops try to run at the same time.
The more appropriate way of doing this is to use SetTimer.

This example shows how to make the 'a' key fire the 'b' key repeatedly.

```
; The hook $ hotkey modifier prevents a hotkey from firing itself.

; If 'a' is the hotkey, and it sends 'a', it would keep looping

$a::

    ; Run the label AutoFireA

    GoSub, AutoFireA

return


; Label auto firing

AutoFireA:

    ; Send a key. We're using 'b'

    Send, b

    ; Check to see if 'a' is still being held down

    if GetKeyState("a", "P")

        ; If yes, set a timer to run this label again. Time is in ms

        ; Using a negative number fires the timer once instead of repeatedly.

        SetTimer, AutoFireA, -100

return

```



Hotkey Symbols

Gosub

Label

SetTimer

GetKeyState

Send