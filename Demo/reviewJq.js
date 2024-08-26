$(document).on('click', '.delete', function () {

    let idToDelete = $(this).attr('class');

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
                        <Button class="delete deleteid${studentArray[i].ID}">Delete</Button></td>
                    </tr>`;

    }
    $('.tableBody').append(element);
});
