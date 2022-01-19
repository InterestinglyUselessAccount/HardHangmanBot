# HardHangmanBot
A bot for hangmanwords.com which only works with the "Hard Words" mode.
## Notice
This bot isn't fully accurate! It doesn't win all the time.
## How do I use it?
Copy the contents of either _main.js_ or _newmain.js_, go to hangmanwords.com/play/hard-words and paste it into the Inspect Element console or run it with the javascript: protocol. You should see it attempt to guess the word.

_main.js_ is the regular version: guesses a word then stops.<br>
_newmain.js_ keeps playing the game and tracks stats of how it's going. The only way to stop it is by refreshing.
## Why did you make this?
This is just an experiment.
## How does it work?
First it clicks on the letters AEIOU to see which vowels work and which don't. Then it searches the available words and finds some that have the correct vowels and are the exact length as the expected word. When it finds the possible correct answers, it keeps taking a random word and types it in until the game has ended.
