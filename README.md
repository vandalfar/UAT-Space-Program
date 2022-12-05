# UAT-Space-Program

This is a website that is being built in CSC102 - introduction to programming. The initial commit is meant to parody the first-archived NASA website. I hope you enjoy!
This version of the website has an operator login. The badge number must be three digits, and you must enter your first and last name. This information will persist through sessionStorage and will show up in the login box of the operator page. The countdown has been moved to the operator's page as well. Assignment dates are in the "Mission Launch Date" table, and I feel that it really adds to the website by including them. 

The logic of trying to get the badge number to only be three digits proved elusive until I remembered that I could use an or statement inside of the code to compare if it was less than or greater than 3 digits. I didn't want to manually check the value against 1-1000, as badge numbers may eventually include letter if kept at 3 digits, and it's better to compare length in that use case.

The easter egg is still on the timer.

*Note. This website will produce an error if everything goes correctly. Pay attention to that error, and look beyond it!

-Michael
