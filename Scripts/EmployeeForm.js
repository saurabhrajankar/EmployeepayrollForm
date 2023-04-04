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

// /*EditEmployee*/
// function Edit() {
//     var id=localStorage.getItem("id");
//     $.ajax({
//         url: 'http://localhost:3000/employees' + id,
//         type: 'Get',
//         dataType: 'json',
//         success: function (responce) {
//             //$('#EmpMadal').modal('show');
//             $('#id').val(responce.id);
//             $('#Name').val(responce.name);
//             $('#Gender').val(responce.gender);
//             $('#Department').val(responce.department);
//             $('#Salary').val(responce.salary);
//             $('#StartDate').val(responce.startDate);
//             $('#Note').val(responce.note);
//             //$('#btnUpdateemp').show();
//             $('#Heading').text('Update Details');
//         },
//         error: function () {
//             alert("Data Not found")
//         }
//     });
// }

// //UpdateEmployee
// function Updateemp() {
//     var objdata = {
//         id: $('#id').val(),
//         EmpName: $('#EmpName').val(),
//         Gender: $('#Gender').val(),
//         Department: $('#Department').val(),
//         Salary: $('#Salary').val(),
//         StartDate: $('#StartDate').val(),
//         Note: $('#Note').val()
//     }
//     $.ajax({
//         url: '/EMP/Update',
//         type: 'Post',
//         data: objdata,
//         contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
//         dataType: 'json',
//         success: function () {
//             alert('Data Updated');
//             cleartextbox();
//             showemployeedata();   
//         },
//         error: function () {
//             alert("Data can't saved");
//         }
//     });
// };
   


