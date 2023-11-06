function validation()
{

    let firstname = document.forms["registration"]["firstname"].value;
    

    if(firstname == null || firstname =="")
    {
       alert("Name should not be empty"); 
       return false;
    }

    else if(lastname == null || lastname =="")
    {
        alert("Name should not be empty");
        return false;
    }

    else if(email == "@" && email == "gmail.com")
    {
        alert("Email contain valid information");
        return false;
    }

    
    

}


