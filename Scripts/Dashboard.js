$(document).ready(function () {
    showemployeedata();
});
function showemployeedata() {
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'GET',    
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var object = '';
            localStorage.setItem("id","item.id");
            $.each(result, function (index, item) {
                object += '<tr>';
                // object += '<td>' + item.id + '</ td>';
                object += '<td><img class=profileimgcol src="' + item.profileUrl + '" ></td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.department + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td>' + item.startDate + '</td>';
                // object += '<td>' + item.notes + '</td>';
                object += '<td><a href="#" class="btn btn-danger" onClick="Delete(' + item.id + ')">Delete</a><a href="#" class="btn btn-danger" onClick="Edit(' + item.id + ')">Edit</a> </td>';
            });
            $('#displaydata').html(object);
        },
        error: function () {
            alert("Data can't get");
        }
    });
    
   
};
function Delete(id) {
    $.ajax({
        url: 'http://localhost:3000/employees/' + id,
        type: 'DELETE',
        success: function () {
            object.remove();
            console.log("Data Deleted")
             alert('Data Deleted');
            
        },
        error: function () {
            alert("Data can't Delete");
        }
    })
};
function Edit(id) {
    $.ajax({
        url: 'http://localhost:3000/employees/' + id,
        type: 'Get',
        dataType: 'json',
        success: function (responce) {
             $('#EmpMadal').modal('show');
            //$('#id').val(responce.id);
            $('#name').val(responce.name);
            $('#gender').val(responce.gender);
            $('#Department').val(responce.department);
            $('#Salary').val(responce.salary);
            $('#StartDate').val(responce.startDate);
            $('#Notes').val(responce.notes);
           // $('#btnUpdateemp').show();
           // $('#Heading').text('Update Details');
        },
        error: function () {
            alert("Data Not found")
        }
    });
};
function addEmployee(){
    window.location.href="/Templet/EmployeeForm.html"
}