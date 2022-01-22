---
question: One Key Activates Two Others
index: 4
---

### Option 1 - To a Text File:

```
; Numpad+ to add 1 to the counter
NumpadAdd::
  counter++
    ; There's no delete line for file append so you have to delete the whole file
    ; Then re-create it again to update the counter.
    ; %A_Temp% is a built in variable that points to your profile's temp folder
    FileDelete, %A_Temp%\counter.txt
    FileAppend, %counter%, %A_Temp%\counter.txt
return

; Numpad- to subtract 1 from the counter
NumpadSub::
    counter--
    FileDelete, %A_Temp%\counter.txt
    FileAppend, %counter%, %A_Temp%\counter.txt
return
```


FileDelete
FileAppend
Built-In Variables

### Option 2 - To a .ini File:

```
; Numpad+ adds 1 to the counter stored in the .ini file.
NumpadAdd::
    counter++
    ; There's no delete line for file append so you have to delete the whole file
    ; Then recrecreate it again to update the counter.
    IniWrite, %counter%, %A_Temp%\counter.ini, Counter Section, Counter
return
```

```
; Numpad- to subtract 1 from the counter stored in the ini file.
NumpadSub::
    counter--
    IniWrite, %counter%, %A_Temp%\counter.ini, Counter Section, Counter
return
```


IniRead
IniWrite
IniDelete
Built-In Variables


### Option 3 - To a .ini section inside the script:

Note: This will not work for scripts compiled into executables.

```
;============================== Start Auto-Execution Section ==============================
; When the script starts, it reads the counter key of the SavedVariables section
; stored in this script. This helps "remember" the value of counter.
IniRead, counter, %A_ScriptFullPath%, SavedVariables, counter
return

;============================== Main Script ==============================
; Numpad+ adds 1 to the counter stored in the ini section at the end of this script.
NumpadAdd::
    counter++
    ; This will write the current counter to the counter key in the SavedVariables section
    ; of this script.
    IniWrite, %counter%, %A_ScriptFullPath%, SavedVariables, counter
return

; You can put your ini section inside of a multi-line comment.
; Start with a /* and end with a */

/*
This is an ini saved variable section.
You can write whatever you want here because AHK sees it as a comment.
Anything [insideBrackets] starts a new section. This is what the script looks for when dealing with ini files.
[SavedVariables]
counter=0
*/

;======= End Script =======
```

IniRead

IniWrite

IniDelete

Built-In Variables