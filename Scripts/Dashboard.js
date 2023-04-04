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
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.profileUrl + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.department + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td>' + item.startDate + '</td>';
                object += '<td>' + item.notes + '</td>';
                object += '<td><a href="#" class="btn btn-danger" onClick="Delete(' + item.id + ')">Delete</a></td>';
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
           // alert('Data Deleted');
            
        },
        error: function () {
            alert("Data can't Delete");
        }
    })
}