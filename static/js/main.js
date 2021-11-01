function verificaData() {
    var dataNasc = document.getElementById("dataNasc");
    var masc = document.getElementById("masc");
    var fem = document.getElementById("fem");
    var resultado = document.getElementById("resultado");


    var data = dataNasc.value;
    data = new Date(data);

    var diaNasc = data.getDate() + 1;
    var mesNasc = data.getMonth() + 1;
    var anoNasc = data.getFullYear();

    var dataAtual = new Date();

    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    var anoAtual = dataAtual.getFullYear();

    var idade = (anoAtual - anoNasc);


    if (isNaN(idade)) {
        alert("Data inválida! Escolha uma data coerente.");
    } else {
        if (diaNasc == 32 && mesNasc == 12) {
            diaNasc = 1;
            mesNasc = 1;
            anoNasc = anoNasc + 1;
            idade = idade - 1;
        }

        if (mesNasc > mesAtual || mesNasc == mesAtual && diaNasc > diaAtual) {
            idade = idade - 1;
            verificaOpcao();
        } else {
            verificaOpcao();
        }
    }


    function verificaOpcao() {
        if (masc.checked) {
            verificaIdadeMasc();
        } else if (fem.checked) {
            verificaIdadeFem();
        } else {
            alert("Selecione uma opção!");
        }
    }


    function verificaIdadeMasc() {
        if (idade < 0) {
            alert("Idade mínima atingida! Escolha uma data menor");
        }

        if (idade > -1 && idade < 5) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma criança.`;
            document.body.style.background = "#0d2527";
            imagem.src = "images/masc/baby.jpg";
            imagem.style.display = "block";
        }
        if (idade > 4 && idade < 10) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um garoto.`;
            document.body.style.background = "#9abb76";
            imagem.src = "images/masc/boy.jpg";
            imagem.style.display = "block";
        }
        if (idade > 9 && idade < 15) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um adolescente.`;
            document.body.style.background = "#4b505b";
            imagem.src = "images/masc/teen.jpg";
            imagem.style.display = "block";
        }
        if (idade > 14 && idade < 20) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um jovem gafanhoto.`;
            document.body.style.background = "#aaaca3";
            imagem.src = "images/masc/youngMan.jpg";
            imagem.style.display = "block";
        }
        if (idade > 19 && idade < 30) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um homem.`;
            document.body.style.background = "#33373d";
            imagem.src = "images/masc/man.jpg";
            imagem.style.display = "block";
        }
        if (idade > 29 && idade < 40) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um homem.`;
            document.body.style.background = "#304165";
            imagem.src = "images/masc/man2.jpg";
            imagem.style.display = "block";
        }
        if (idade > 39 && idade < 50) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um homem.`;
            document.body.style.background = "#004252";
            imagem.src = "images/masc/man3.jpg";
            imagem.style.display = "block";
        }
        if (idade > 49 && idade < 60) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um homem.`;
            document.body.style.background = "#6e7973";
            imagem.src = "images/masc/man4.jpg";
            imagem.style.display = "block";
        }
        if (idade > 59 && idade < 70) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um senhor.`;
            document.body.style.background = "#1e1e1e";
            imagem.src = "images/masc/oldMan.jpg";
            imagem.style.display = "block";
        }
        if (idade > 69 && idade < 80) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um senhor.`;
            document.body.style.background = "#838b74";
            imagem.src = "images/masc/oldMan2.jpg";
            imagem.style.display = "block";
        }
        if (idade > 79 && idade < 90) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um senhor.`;
            document.body.style.background = "#1a2417";
            imagem.src = "images/masc/oldMan3.jpg";
            imagem.style.display = "block";
        }
        if (idade > 89 && idade < 101) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Um senhor.`;
            document.body.style.background = "#030303";
            imagem.src = "images/masc/oldMan4.jpg";
            imagem.style.display = "block";
        }

        if (idade > 100) {
            alert("Idade máxima excedida! Escolha uma data maior.");
        }
    }


    function verificaIdadeFem() {
        if (idade < 0) {
            alert("Idade mínima atingida! Escolha uma data menor");
        }

        if (idade > -1 && idade < 5) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma criança.`;
            document.body.style.background = "#dfc1c5";
            imagem.src = "images/fem/baby.jpg";
            imagem.style.display = "block";
        }
        if (idade > 4 && idade < 10) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma garota.`;
            document.body.style.background = "#c7d1d0";
            imagem.src = "images/fem/girl.jpg";
            imagem.style.display = "block";
        }
        if (idade > 9 && idade < 15) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma adolescente.`;
            document.body.style.background = "#732e3f";
            imagem.src = "images/fem/teen.jpg";
            imagem.style.display = "block";
        }
        if (idade > 14 && idade < 20) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma jovem libélula.`;
            document.body.style.background = "#07211f";
            imagem.src = "images/fem/youngWoman.jpg";
            imagem.style.display = "block";
        }
        if (idade > 19 && idade < 30) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma mulher.`;
            document.body.style.background = "#385030";
            imagem.src = "images/fem/woman.jpg";
            imagem.style.display = "block";
        }
        if (idade > 29 && idade < 40) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma mulher.`;
            document.body.style.background = "#3c3936";
            imagem.src = "images/fem/woman2.jpg";
            imagem.style.display = "block";
        }
        if (idade > 39 && idade < 50) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma mulher.`;
            document.body.style.background = "#3c3936";
            imagem.src = "images/fem/woman3.jpg";
            imagem.style.display = "block";
        }
        if (idade > 49 && idade < 60) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma mulher.`;
            document.body.style.background = "#a88460";
            imagem.src = "images/fem/woman4.jpg";
            imagem.style.display = "block";
        }
        if (idade > 59 && idade < 70) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma senhora.`;
            document.body.style.background = "#512524";
            imagem.src = "images/fem/oldWoman.jpg";
            imagem.style.display = "block";
        }
        if (idade > 69 && idade < 80) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma senhora.`;
            document.body.style.background = "#795ca1";
            imagem.src = "images/fem/oldWoman2.jpg";
            imagem.style.display = "block";
        }
        if (idade > 79 && idade < 90) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma senhora.`;
            document.body.style.background = "#c18c5f";
            imagem.src = "images/fem/oldWoman3.jpg";
            imagem.style.display = "block";
        }
        if (idade > 89 && idade < 101) {
            var imagem = document.getElementById("imagem");
            resultado.innerHTML = `Você tem ${idade} anos! Uma senhora.`;
            document.body.style.background = "#334224";
            imagem.src = "images/fem/oldWoman4.jpg";
            imagem.style.display = "block";
        }

        if (idade > 100) {
            alert("Idade máxima excedida! Escolha uma data maior.");
        }
    }
}