# Wordle take-home challenge

I chose to implement the keyboard typing functionality. ([This issue](https://github.com/joe-dev-public/fac-wordle-take-home-challenge/issues/3) summarises the user story.)

View on desktop at GitHub Pages here: https://joe-dev-public.github.io/fac-wordle-take-home-challenge/

- Try typing something using your keyboard
- Try deleting (using backspace)
- Try submitting your guess using enter/return
- Have a great time! :)

## Notes

This currently doesn't work on mobile, and I assume it won't work on any device without a physical keyboard.

(If there's a way to manually activate the on-screen/software keyboard on your device, it might work.)

An interesting/fun/challenging next step could be to implement each letter tile using an ``<input>``, in the hope that mobiles/tablets will show the on-screen keyboard.

The ``<input>`` elements could have a max length of 1, and some JS would presumably be needed to handle moving the cursor (/focus) between each ``<input>`` as letters were typed/deleted.

Of course, if this was a full Wordle(/similar) implementation, it would have its own keyboard, so we specifically *wouldn't* want to use the native/OS one!
