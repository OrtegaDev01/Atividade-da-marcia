flatpickr("input[type='data-nascimento']", {
    dateFormat: "d/m/Y",
    "locale": "pt",
    maxDate: "today",
    minDate: "01/01/1900",
    onChange: (selectedDates) => {
        let data = selectedDates[0];
        const hoje = new Date()
        let idade = hoje.getFullYear() - data.getFullYear();
        if (idade != 0 && idade != undefined) {
            document.getElementById("idade_cadastro").value = idade
            document.getElementById("idade_cadastro_novo").value = idade
        }
        else {
            document.getElementById("idade_cadastro").value = "Ta morto"
            document.getElementById("idade_cadastro_novo").value = "Ta morto"
          }
    }

})
