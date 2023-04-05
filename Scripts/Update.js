
$(document).ready(function (){
    var id=localStorage.getItem("employeedata")

    $.ajax({
        url: 'http://localhost:3000/employees/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (responce) {
            
            $('#id').val(responce.id);
            $('#name').val(responce.name);
            $('input[name="profile"][value="' + responce.profileUrl + '"]').prop('checked', true);
            $('input[name="gender"][value="' + responce.gender + '"]').prop('checked', true);
            $('input[name="department"][value="' + responce.department + '"]').prop('checked', true);
            $('#salary').val(responce.salary);
            var startDate = new Date(responce.startDate) 
            $('#day').val(startDate.getDate());
            $('#month').val(startDate.getMonth());
            $('#year').val(startDate.getFullYear());
            $('#notes').val(responce.notes);
           console.log(responce)
            
        },
        error: function () {
            alert("Data Not found")
        }
    });
});
    const updateemp=(id)=>{
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
        url: 'http://localhost:3000/employees/' + localStorage.getItem('employeedata'),
        type: 'PUT',
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

