// Explanations:

// This time we've written two functions for a cleaner code: one function that draws a filled rectangle ' +
// 'with a given color, and one function that draws a filled circle, with a given color.

// The values for x, y, width, height, radius, color can be passed as parameters to these functions.

// When a function changes anything to the "global context": filled or stroke color, line width, or the position of
// the coordinate system (located by default in 0, 0, at the top left of the canvas),
// then it is good practice to save this context at the beginning of the function, with a call to ctx.save(),
// and to restore it at the end of the function, with a call to ctx.restore().
// In this way, any change to the "global context" won't have any effect outside of the function.

// We used also ctx.translate(x, y) in order to move the rectangle and the circle (look, they have been drawn at
// x=0, y=0, but as we translate the origin of the coordinate system with ctx.translate, the shapes are located in
// x, y on in the canvas). This is also a good practice: indeed, if we add more shapes (like eyes in the rectangle,
// in order to draw a monster), using coordinates relative to 0, 0, the whole set of shapes will be translated
// by the call to ctx.translate(x, y).
// This will make it easier to draw characters, monsters, etc. as we will see in a third example.