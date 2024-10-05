fetch('http://localhost:7142/api/ControllerEstudiantes')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.text();  // Lee la respuesta como texto primero
    })
    .then(text => {
        try {
            const clientes = JSON.parse(text);  // Intenta analizar el texto como JSON
            const tableBody = document.querySelector('#tabla tbody');
            tableBody.innerHTML = '';

            clientes.forEach(cliente => {
                const row = document.createElement('tr');

                const idCell = document.createElement('td');
                idCell.textContent = cliente.id;
                row.appendChild(idCell);

                const firstNameCell = document.createElement('td');
                firstNameCell.textContent = cliente.firstname;
                row.appendChild(firstNameCell);

                const lastNameCell = document.createElement('td');
                lastNameCell.textContent = cliente.lastname;
                row.appendChild(lastNameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = cliente.email;
                row.appendChild(emailCell);

                const stateCell = document.createElement('td');
                stateCell.textContent = cliente.state;
                row.appendChild(stateCell);

                const courseEndDateCell = document.createElement('td');
                courseEndDateCell.textContent = cliente.courseenddate;
                row.appendChild(courseEndDateCell);

                const courseTypeCell = document.createElement('td');
                courseTypeCell.textContent = cliente.coursetype;
                row.appendChild(courseTypeCell);

                tableBody.appendChild(row);
            });
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
