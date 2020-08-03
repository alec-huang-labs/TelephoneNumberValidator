# Telephone Number Validator

Function returns whether if input is in the format of a valid US telephone Number<br><br>
Permitted Formats:<br>
555-555-5555 <br>
(555)555-5555 <br>
(555) 555-5555 <br>
555 555 5555 <br>
5555555555 <br>
1 555 555 5555 <br><br>
telephoneCheck("1 555)555-5555") returns false <br>
telephoneCheck("1 456 789 4444") returns true <br>
telephoneCheck("123**&!!asdf#") returns false<br>

Test the function here: https://repl.it/@alechuang/TelephoneNumberValidator


