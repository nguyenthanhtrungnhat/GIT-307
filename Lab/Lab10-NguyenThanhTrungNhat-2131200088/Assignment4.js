$(document).ready(function () {
    let studentArray = new Array();
    let classArray = new Array();
    $.get(
        'http://139.180.213.49/getdata-student.php',
        {
            Type: 'Student'
        },
        function (data) {
            console.log(data)
            data.sort((a, b) => {
                return a.Class.localeCompare(b.Class);
            })
            let element = '';
            let unique = '';
            for (let each of data) {
                if (each.Class != unique)
                    element += `<li class='class-name' data-class='${each.Class}'>${each.Class}</li>`
                unique = `${each.Class}`;
            }

            $('.myClass').append(element);
        }, 'json'

    )
    function sorttt(data) {
        data.sort((a, b) => {
            return a.Name.localeCompare(b.Name);
        });
    }
    $.get(
        'http://139.180.213.49/getdata-student.php', { Type: "Student" },
        function (data) {
            console.log(data);
            sorttt(data);
            studentArray = data;

            let element = "";
            for (let i = 0; i < data.length; i++) {
                element = "";
                element += `<tr>
                                        <td>${i}</td>
                                        <td>${data[i].Name}</td>
                                        <td>${data[i].ID}</td>
                                        <td><button class='edit' data-id='${data[i].ID}'>Edit</button>
                                     <Button class="delete" id = '${data[i].ID}' >Delete</Button></td>
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
                                        <td><button class='edit' data-id='${studentArray[i].ID}'>Edit</button>
                                        <Button class="delete" id = '${studentArray[i].ID}' >Delete</Button></td>
                                    </tr>`;
            $('.tableBody').append(element);
        }
    });
    // $(document).on('click', '.delete', function () {

    //     let idToDelete = $(this).attr('class').match(/deleteid(\d+)/)[1];

    //     studentArray = studentArray.filter(student => student.ID !== idToDelete);

    //     $('.tableBody').empty();

    //     let element = "";
    //     for (let i = 0; i < studentArray.length; i++) {
    //         element = '';
    //         element += `<tr>
    //                         <td>${i}</td>
    //                         <td>${studentArray[i].Name}</td>
    //                         <td>${studentArray[i].ID}</td>
    //                         <td><button class='edit' data-id='${studentArray[i].ID}'>Edit</button>
    //                         <Button class="delete deleteid${studentArray[i].ID}">Delete</Button></td>
    //                     </tr>`;
    //         $('.tableBody').append(element);
    //     }
    // });
    $(document).on('click', '.delete', function () {

        let idToDelete = $(this).attr('id');

        $('.tableBody').empty();

        let element = "";
        for (let i = 0; i < studentArray.length; i++) {
            if (studentArray[i].ID === idToDelete) {
                studentArray.splice(i, 1)
            }
            element += `<tr>
                            <td>${i}</td>
                            <td>${studentArray[i].Name}</td>
                            <td>${studentArray[i].ID}</td>
                            <td><button class='edit' data-id='${studentArray[i].ID}'>Edit</button>
                           <Button class="delete" id = '${studentArray[i].ID}' >Delete</Button></td>
                        </tr>`;

        }
        $('.tableBody').append(element);
    });



    $('#searchBtn').click(function () {
        let searchName = $('.searchName').val().trim().toLowerCase();

        if (searchName === '') {
            alert('Please enter a name to search.');
            return;
        }

        let filteredStudents = studentArray.filter(student =>
            student.Name.toLowerCase().includes(searchName)
        );

        $('.tableBody').empty();

        let element = "";
        for (let i = 0; i < filteredStudents.length; i++) {
            element = '';
            element += `<tr>
                                    <td>${i}</td>
                                    <td>${filteredStudents[i].Name}</td>
                                    <td>${filteredStudents[i].ID}</td>
                                    <td><button class='edit' data-id='${filteredStudents[i].ID}'>Edit</button>
                                    <Button class="delete" id = '${filteredStudents[i].ID}' >Delete</Button></td>
                                </tr>`;
            $('.tableBody').append(element);
        }

    });

    $(document).on('click', '.class-name', function () {
        let selectedClass = $(this).data('class');

        let filteredStudents = studentArray.filter(student => student.Class === selectedClass);

        $('.tableBody').empty();


        let element = "";
        for (let i = 0; i < filteredStudents.length; i++) {
            element = '';
            element += `<tr>
                                <td>${i}</td>
                                <td>${filteredStudents[i].Name}</td>
                                <td>${filteredStudents[i].ID}</td>
                                <td><button class='edit' data-id='${filteredStudents[i].ID}'>Edit</button>
                               <Button class="delete" id = '${filteredStudents[i].ID}' >Delete</Button></td>
                            </tr>`;
            $('.tableBody').append(element);
        }


    });
});
