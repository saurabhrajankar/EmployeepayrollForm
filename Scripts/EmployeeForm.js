const addemp=()=>{
    //console.log("calling emp function")

   // const Name=document.getElementById('name').value
   //For Name
    const Name=$('#name').val();       
    const radioButtons1 = $('input[name="profile"]:checked').val();      
    const radioButtons2 = $('input[name="gender"]:checked').val();
    const checkbox=$('input[type="checkbox"]:checked').val();
    const dropdown1=$('#salary').val();
    const Day=$('#day').val();
    const Moth=$('#month').val();
    const Year=$('#year').val();
    const fNote=$('#notes').val()
   
    console.log('Name = ',Name);
    console.log('Profile =',radioButtons1);
    console.log('Gender =',radioButtons2);
    console.log('Department =',checkbox);
    console.log('Salary =',dropdown1);
    console.log('Date =',Day,Moth,Year);
    console.log('Note =',fNote);

    //Add Employee
    let reqData = {
        "name" : Name,
        "profileUrl" : radioButtons1,
        "gender" : radioButtons2,
        "department" : checkbox,
        "salary" : dropdown1,
        "startDate" : Day + ' ' + Moth + ' ' + Year,
        "notes" : fNote,
    }
     //console.log(reqData);

    $.ajax({
    url: 'http://localhost:3000/employees',
    type: 'POST',
    dataType: 'json',
    data: reqData,
    success: function(data, textStatus, xhr){
        console.log(data)
        alert('Data saved');
        showemployeedata();
    },
    error: function(xhr, textStatus, errorThrown){
        console.log('Operation failed');
    }
}) 
};
   


