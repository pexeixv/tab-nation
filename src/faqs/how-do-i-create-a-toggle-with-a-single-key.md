---
question: How do I create a toggle with a single key?
index: 9
---

If you're looking for a way to toggle things on and off, here's how you make a toggle using a variable.

```
; While you don't have to declare the toggle,
; by doing so you know what the initial start value is
toggle:= 0
return

F1::
; This is where the toggling occurs. You're setting the toggle to the opposite of itself.
; 1 becomes 0. True becomes False. You can use either. toggle := !toggle
    if (toggle = 0){ 
        ; If the toggle is off (0 or false),
        ; do the stuff in here MsgBox, The toggle is turned off. 
    } 
    else{ 
        ; If the toggle is on (1 or true),
        ; do the stuff in here MsgBox, The toggle is turned on. 
    }
return
```
Variables

If (expression)

Boolean

Operators