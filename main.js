var name_of_student_array = []
function submit(){
    var displaynamearray = [] 
    for(var j = 1; j<= 4; j++)
    {
        var name = document.getElementById("name_of_the_student_"+j).value
        name_of_student_array.push(name)

    }
    for(var k = 0; k< 4; k++)    
        {
            displaynamearray.push("<h4>NAME -"+ name_of_student_array[k]+"</h4>")
        }
    document.getElementById("display_name_with_commas").innerHTML=displaynamearray
    var removecomma = displaynamearray.join(" ")
    document.getElementById("display_name_without_commas").innerHTML= removecomma
    document.getElementById()
}
