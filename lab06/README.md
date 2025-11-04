# Lab06: PHP

## 1) Explain what each of your classes and methods does, the order in which methods are invoked, and the flow of execution after one of the operation buttons has been clicked.

The Subtraction, Multiplication, and Division classes implement the eponymous arithmetic. 

The operate functions do the actual calculation and the getEquation functions return the string formatting for the answer.

When a user enters values and clicks an operation button, the data is passed in via POST, a new Object is instantiated based off of the button that was pressed, getEquation is called, getEquation executes operate for the answer, and then the returned string is encoded.

## 2) Also explain how the application would differ if you were to use $_GET, and why this may or may not be preferable.

If GET was used, the input variables and the button being pressed would be appended to the URL, which is not preferable because it's insecure and unnecessarily extends the URL.

## 3) Finally, please explain whether or not there might be another (better +/-) way to determine which button has been pressed and take the appropriate action

Instead of doing a bunch of if statements to check what was received via POST, using a map that connects buttons and classes would simplify the code.