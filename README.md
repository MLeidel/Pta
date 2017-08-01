# Programming TextArea

## enhancing textarea with Javascript 
### A JS Library

Programming Textarea makes a textarea into a simple code editor. This project builds some useful code writing enhancements into standard HTML textarea, using only pure Javascript (library). currently < 7K.

__Programming Textarea:__
* Keyboard Event Handlers to insert markup
* join lines
* ins line nbrs
* implement tabs - single or selected lines
  * Really a minimal expectation for any text editor, but very useful when writing code.
* auto indentation “sticky tabs” 
  * Indentation plays a crucial role in writing readable code.
* search and replace 
  * Pts has FIND, REPLACE and REPLACE ALL
* brace and paren matching 
  * Most programming languages work with braces { } to define blocks of code. Alt-q attempts to match the brace next to the cursor, which will select the block of code between the open and closing symbol.
* simplified Zen coding capabilities 
  * By selecting text and pressing Alt-z the text acts as a key to find and insert text (markup or code) from a JSON file. The clips array can be modified and greatly expanded in the tags.js file. Alternatively Alt-z will wrap the any word in <word></word> braces.
  * Alt-a will prompt for a tag name and then surround selected text. "ucase", "lcase", ',",${},<!,/*, are additional options

key | action
----|-------
alt-d |	Duplicate Character
alt-t | Join Lines
alt-q |	Match Brace
alt-n |	Toggle Line Nbr Insert
alt-z |	Zen Insert at Keyword
alt-a |	Zen wrap with tag
alt-w |	Repeat Last Tag Wrap
Tab |	Find selected Next
