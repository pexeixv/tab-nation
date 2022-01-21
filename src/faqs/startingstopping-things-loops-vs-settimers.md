---
question: Starting/Stopping Things (Loops vs SetTimers)
index: 5
---

Loops are great when you know you want something to run infinitely or want it to run a set number of times. But for starting and stopping a script, SetTimer is a much better choice over Loops with breaks.

With SetTimer, you can make very easy On/Off hotkeys, and you have control over how often the loop happens.

This script makes a message box that says "Hello!" pop up every 20 seconds.
F1 starts it. F2 stops it.

```
; Start timer. It'll run the helloPopUp label every 20 seconds.

F1::

    SetTimer, helloPopUp, 20000

return


; Stop the popup timer.

F2::

    SetTimer, helloPopUp, Off

return


helloPopUp:

    MsgBox Hello!

return
```

SetTimer
Label

Here's an example of the same script using a loop with an if-break statement. It works the same, but it's bulky and sometimes the breaks don't quite work like you want them to. That's why I advise people to use SetTimers unless the loop needs to run forever or run a certain amount of times.

```
F1::

    breaker := false

    Loop

    {

        if (breaker = true){

            break

        }

        Sleep, 20000

        MsgBox Hello!

    }

return


F2::

    breaker    := true

return
```

Loop

Break