const addemp=()=>{
    //console.log("calling emp function")

   // const Name=document.getElementById('name').value
   //For Name
    const Name=$('#name').val();       
    const Profile = $('input[name="profile"]:checked').val();      
    const Gender = $('input[name="gender"]:checked').val();
    const Department=$('input[type="checkbox"]:checked').val();
    const Salary=$('#salary').val();
    const Day=$('#day').val();
    const Moth=$('#month').val();
    const Year=$('#year').val();
    const fNote=$('#notes').val()
   
    console.log('Name = ',Name);
    console.log('Profile =',Profile);
    console.log('Gender =',Gender);
    console.log('Department =',Department);
    console.log('Salary =',Salary);
    console.log('Date =',Day,Moth,Year);
    console.log('Note =',fNote);

    //Add Employee
    let reqData = {
        "name" : Name,
        "profileUrl" : Profile,
        "gender" : Gender,
        "department" : Department,
        "salary" : Salary,
        "startDate" : Day + ' ' + Moth + ' ' + Year,
        "notes" : fNote,
    }
     //console.log(reqData);

    $.ajax({
    url: 'http://localhost:3000/employees',
    type: 'POST',
    dataType: 'json',
    data: reqData,
    success: function(data){
        console.log(data)
        window.location.href='/Templet/Dashboard.html'
        console.log('Data saved');
    },
    error: function(){
        console.log('Operation failed');
    }
}) 
};
