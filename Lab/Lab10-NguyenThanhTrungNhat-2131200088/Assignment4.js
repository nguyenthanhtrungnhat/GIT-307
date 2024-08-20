$(document).ready(function () {
    let studentArray = new Array();
    let classArray = new Array();
    $.get(
        'http://139.180.213.49/getdata-student.php', { Type: "Student" },
        function (data) {
            console.log(data);
            studentArray = studentArray.concat(data)

            data.sort((a, b) => {
                return a.Name.localeCompare(b.Name);
            });
            let element = "";
            for (let i = 0; i < data.length; i++) {
                element = "";
                element += `<tr>
                                        <td>${i}</td>
                                        <td>${data[i].Name}</td>
                                        <td>${data[i].ID}</td>
                                        <td><button>Edit</button>
                                       <Button class="deleteid${data[i].ID}">Delete</Button></td>
                                    </tr>`;
                $('.tableBody').append(element);
            }
        }, 'JSON'
    )

    $(".add").click(function () {
       
        let newID = $('.2230').val();
        let newName = $('.2231').val();
        let newClass = $('.2233').val();
        let newStudent = {
            ID: newID,
            Name: newName,
            Class: newClass,
        };

        if (newID.trim() === '' || newName.trim() === '' || newClass.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }
        $('.tableBody').empty();
        studentArray.unshift(newStudent);

        $('.2230').val('');
        $('.2231').val('');
        $('.2232').val('');
        $('.2233').val('Lớp 1');
        let element = "";
        for (let i = 0; i < studentArray.length; i++) {
            element = '';
            element += `<tr>
                                        <td>${i}</td>
                                        <td>${studentArray[i].Name}</td>
                                        <td>${studentArray[i].ID}</td>
                                        <td><button>Edit</button>
                                         <Button class="deleteid${studentArray[i].ID}">Delete</Button></td>
                                    </tr>`;
            $('.tableBody').append(element);
        }

    });




});