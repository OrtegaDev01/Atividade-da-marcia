flatpickr("input[type='data-nascimento']",{

    dateFormat: "d/m/Y",
    "locale": "pt",
    onChange: (selectedDates) =>{
        let data = selectedDates[0];
        const hoje = new Date()
        let idade = hoje.getFullYear() - data.getFullYear();
        document.getElementById("idade_cadastro").value = idade
    }
})
