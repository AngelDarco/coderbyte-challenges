/* 
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

export default function CodelandUsernameValidation(str: string) {
  const rgx = new RegExp("^[a-zA-Z][a-zA-Z0-9]{4,25}(?<!_)$", "u");
  return rgx.test(str);
}

console.log(CodelandUsernameValidation("eqwqw")); // true
