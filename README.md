# Programming TextArea

## enhancing textarea with Javascript 
### A JS Library
_level: novice to intermediate, some exposure to Javascript is necessary_

This project is not about online html (WYSIWYG) editors. Although there are many of those available, Programming Textarea is about how to make a textarea into a simple programming text editor using Javascript. HTML editors generally do not include features that simplify coding, with the keyboard. As is, the HTML textarea has minimal capabilities. This project builds many effective code writing enhancements into the standard HTML textarea using only pure Javascript. In fact, at the end of the project you will have a new JS library to implement your own supercharged programming textarea. 

A complete understanding of this project may provide you with additional insight into Javascript programming. You may even see better ways of implementing the ideas presented here. At any rate if you are new to Javascript you may gain a better understanding of how Javascript works in the areas of event driven applications and string handling. The format does assume that you have written web pages (you know HTML) and have used Javascript in them, at a beginners level, at least. 

Functionality of	straight HTML textarea:
* multiple lines of text
* select, delete, copy & paste lines, words or characters
* control of word wrapping
* Tabs, but not by default 

Programming Textarea:
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
  * Most web browsers have a search function that works inside textarea, but not replace.
* brace and paren matching 
  * Most programming languages work with braces { } to define blocks of code. Alt-q attempts to match the brace next to the cursor,       which will select the block of code between the open and closing symbol.
* simplified Zen coding capabilities 
  * By selecting text and pressing Alt-z the text acts as a key to find and insert text (markup or code) from a JSON table.
  * Alt-a will prompt for a tag name and then surround selected text

key | action
----|-------
alt-Enter |	HTML Line Break
ctrl-Space |	HTML Non-Blanking-Space
alt-c |	HTML comment
alt-d |	Duplicate Character
alt-q |	Match Brace
alt-l |	Toggle Line Nbr Insert
alt-z |	Zen Insert at Keyword
alt-a |	Zen wrap with tag
alt-w |	Repeat Last Tag Wrap
Tab sel. |	Find Next
