"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
            } else {
                alert('Error')
            }

        } else {
            console.log('Error', error)
            alert('All forms are required')
        }

    }

    function formValidate(form) {
        let error = 0;
        const formReq = form.querySelectorAll('._req');

        formReq.forEach((input) => {
            formRemoveError(input);

            if (input.classList.contains('_name')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_email')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_message')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        })
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});