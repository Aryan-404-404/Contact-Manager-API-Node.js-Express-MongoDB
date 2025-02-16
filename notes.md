When a request is made to /api/contacts, it is routed through contactRouter.js, which then calls the appropriate controller function from contactController.js. If an error occurs, errorHandler.js handles it based on the status code. The server listens on the specified port and logs a message when it starts.


npm i express-async-handler -------->

bcrypt and hashed password ------------------------------->
    What is bcrypt?
        bcrypt is a password-hashing library that makes passwords secure by converting them into an encrypted format.

Why hash passwords?
        Security → If a database gets hacked, plain text passwords can be stolen.
        Irreversible → Hashed passwords can't be reversed to get the original password.
        Salting → bcrypt adds a random "salt" to make each hash unique, even if two users have the same password.

Let's say the user enters:
🔹 Password: Aryan
🔹 Generated Salt: #*& (Randomly generated, just an example)
then let Aryan + #*&  = a1b2c3d4e5
✅ Stored in DB: "a1b2c3d4e5" (Hashed password with salt included)

2️⃣ Verifying the Password (During Login)
User enters the password "Aryan" again.

bcrypt retrieves the stored hash: "a1b2c3d4e5"
It extracts the salt ("#*&") from the stored hash.
It hashes the entered password with the same salt if it matches the hashed password then Correct!!!!!!!!!!




json web token --------------------------------->>>>>>>>>>>>>>
        Every time you try to access a protected page (like orders, profile, or dashboard), the server checks your JWT token to verify if you're logged in.
-
        If the token is valid: You can access the page.
        If the token is missing or invalid: You get an error or are redirected to the login page.