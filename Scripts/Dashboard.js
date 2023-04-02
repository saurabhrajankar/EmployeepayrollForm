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
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.profileUrl + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.department + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td>' + item.startDate + '</td>';
                object +=   '<td>' + item.notes + '</td>';
                object += '<td><a href="#"  class="btn btn-primary" onclick="Edit(' + item.id + ')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.id + ')">Delete</a></td>';
                object += '</tr>';
            });
            $('#displaydata').html(object);
        },
        error: function () {
            alert("Data can't get");
        }
    });
};
/*AddEmployee*/
function addemp() {
    var objdata = {
        "name" : Name,
        "profileUrl" : radioButtons1,
        "gender" : radioButtons2,
        "department" : checkbox,
        "salary" : dropdown1,
        "startDate" : Day + ' ' + Moth + ' ' + Year,
        "notes" : fNote,
    }
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'POST',    
        dataType: 'json',
        data: objdata,
        success: function () {
            alert('Data saved');
            showemployeedata();
        },
        error: function () {
            alert("Data can't saved");
        }
    });
};