# Programming TextArea

## enhancing textarea with Javascript 
### A JS Library

Programming Textarea makes a textarea into a simple code editor. This project builds some useful code writing enhancements into standard HTML textarea, using only pure Javascript (library). currently < 7K.

__Programming Textarea:__
* Keyboard Event Handlers (hot-keys)
* Join Lines
* Toggle Line Numbers
* Tab Key - single line or selected lines
* Auto Indentation
* Search and Replace 
  * Pts has FIND, REPLACE and REPLACE ALL
* Brace{} and Paren() Matching
  * Alt-q attempts to match the symbol next to the cursor, and select the block of code between the open and closing symbol.
* Zen Coding Capabilities (non-standard) 
  * By selecting text and pressing *alt-z* the text acts as a key to find and insert text from a JSON file. The json file (tags.js) can be modified and greatly expanded. Alternatively *alt-z* will wrap the any word in <word></word> angle braces.
  * Alt-a will prompt for a tag name and then surround selected text. "ucase", "lcase", ',",${},<!,/\*, are additional options
  * Alt-w will repeat the last *alt-a* function.

key | action
----|-------
alt-d |	Duplicate Character
alt-t | Join Lines
alt-q |	Match Brace
alt-n |	Toggle Line Nbr Insert
alt-z |	Zen Insert at Keyword
alt-a |	Zen wrap with tag
alt-w |	Repeat Last Tag Wrap (alt-a)
Tab |	Find selected Next
