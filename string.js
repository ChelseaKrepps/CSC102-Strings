
//form validation
function validate()
{
    var FirstName = document.getElementById("FirstName").value;
    var SecondName = document.getElementById("SecondName").value;
    var ZipCode = document.getElementById("ZipCode").value;

//ID creation 
    var FullName = FirstName+SecondName+ZipCode;
    document.getElementById("InputStatus").innerHTML = FullName;

//Error codes    
    if (ZipCode.length !=5)
    {
        document.getElementById("InputStatus").innerHTML = "Zip must be 5 digits";
    }
    if (FirstName.length + SecondName.length + ZipCode.length >=20)
        document.getElementById("InputStatus").innerHTML = "The ID created is greater than 20 characters"
    
       
}
//Palindrome Checker
function palindromeValidate()
{
//variable for form
    var Palindrome = document.getElementById("Palindrome").value;
//splitting word entered
    var splitstr = Palindrome.split("")
 //reversing word entered   
    var reverse = splitstr.reverse();
 //joining word entered   
    var joinstr = reverse.join("");
  
//Palindrome yes or no notification
    if (Palindrome == joinstr)
        document.getElementById("palindromeStatus").innerHTML = "YES IT IS!"

     if (Palindrome != joinstr)
        document.getElementById("palindromeStatus").innerHTML = "No..it's not ); "

}