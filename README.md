# Programming TextArea

## enhancing textarea with Javascript 
### A JS Library

Programming Textarea is about how to make a textarea into a hack-able code editor. HTML editors generally do not include features that simplify coding, with the keyboard. As is, the HTML textarea has minimal capabilities. This project builds many useful code writing enhancements into standard HTML textarea, using only pure Javascript. currently 7K.

__Functionality of	straight HTML textarea:__
* multiple lines of text
* select, delete, copy & paste lines, words or characters
* control of word wrapping
* Tabs, but not by default 

__Programming Textarea:__
* Keyboard Event Handlers to insert markup
* line break
* non-blanking space
* comments
* join lines
* ins line nbrs
* implement tabs - single or selected lines
  * Really a minimal expectation for any text editor, but very useful when writing code.
* auto indentation “sticky tabs” 
  * Indentation plays a crucial role in writing readable code.
* search and replace 
  * Most web browsers have a search function but not replace. Pts has FIND, REPLACE and REPLACE ALL
* brace and paren matching 
  * Most programming languages work with braces { } to define blocks of code. Alt-q attempts to match the brace next to the cursor,       which will select the block of code between the open and closing symbol.
* simplified Zen coding capabilities 
  * By selecting text and pressing Alt-z the text acts as a key to find and insert text (markup or code) from a JSON file. The snip-its array can be modified and greatly expanded in the tags.js file.
  * Alt-a will prompt for a tag name and then surround selected text

key | action
----|-------
alt-Enter |	HTML Line Break
ctrl-Space |	HTML Non-Blanking-Space
alt-c |	HTML comment
alt-d |	Duplicate Character
alt-j | Join Lines
alt-q |	Match Brace
alt-l |	Toggle Line Nbr Insert
alt-z |	Zen Insert at Keyword
alt-a |	Zen wrap with tag
alt-w |	Repeat Last Tag Wrap
Tab |	Find selected Next
