document.addEventListener("DOMContentLoaded", () => {


    // ==========================================
    // CARDS
    // ==========================================

    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {

        card.addEventListener("toggle", () => {

            if (card.open) {

                cards.forEach(outroCard => {

                    if (outroCard !== card) {
                        outroCard.removeAttribute("open");
                    }

                });

            }

        });

    });


    // ==========================================
    // EFEITO DE ABERTURA
    // ==========================================

    cards.forEach(card => {

        const conteudo =
            card.querySelector(".conteudo");

        if (!conteudo) return;


        card.addEventListener("toggle", () => {

            if (card.open) {

                conteudo.style.animation =
                    "entradaConteudo .35s ease";

            }

        });

    });


    // ==========================================
    // CURRÍCULO
    // ==========================================

    const botaoCurriculo =
        document.getElementById("botaoCurriculo");

    const curriculoCompleto =
        document.getElementById("curriculoCompleto");


    if (
        botaoCurriculo &&
        curriculoCompleto
    ) {

        botaoCurriculo.addEventListener(
            "click",
            () => {

                const aberto =
                    curriculoCompleto.classList
                        .contains("ativo");


                if (aberto) {

                    curriculoCompleto.classList
                        .remove("ativo");

                    botaoCurriculo.innerHTML =
                        "📄 ABRIR CURRÍCULO";

                } else {

                    curriculoCompleto.classList
                        .add("ativo");

                    botaoCurriculo.innerHTML =
                        "📄 FECHAR CURRÍCULO";


                    setTimeout(() => {

                        curriculoCompleto.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        });

                    }, 100);

                }

            }
        );

    }


    // ==========================================
    // PAINEL LIFE SYSTEM
    // ==========================================

    const lifeToggle =
        document.getElementById("lifeToggle");

    const lifePanel =
        document.getElementById("lifePanel");

    const lifeClose =
        document.getElementById("lifeClose");


    if (
        lifeToggle &&
        lifePanel &&
        lifeClose
    ) {

        lifeToggle.addEventListener(
            "click",
            () => {

                lifePanel.classList
                    .add("ativo");

            }
        );


        lifeClose.addEventListener(
            "click",
            () => {

                lifePanel.classList
                    .remove("ativo");

            }
        );

    }


    // ==========================================
    // MISSÕES DO LIFE SYSTEM
    // ==========================================

    const missionButtons =
        document.querySelectorAll(".mission-btn");

    const systemMessage =
        document.getElementById("systemMessage");


    const mensagens = {

        "ESTUDOS":
            "MISSÃO: preparar-se para o ENEM e conquistar uma ótima nota.",

        "CARREIRA":
            "MISSÃO: construir uma carreira sólida em Ciências Contábeis.",

        "FINANÇAS":
            "MISSÃO: organizar o dinheiro e construir estabilidade financeira.",

        "SONHOS":
            "MISSÃO: transformar planos em conquistas reais."

    };


    missionButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const missao =
                    button.querySelector("span")
                        .textContent
                        .trim();


                if (systemMessage) {

                    systemMessage.textContent =
                        mensagens[missao] ||
                        "Continue construindo seu futuro.";

                }

            }
        );

    });


    // ==========================================
    // EFEITO 3D DO PERFIL
    // ==========================================

    const perfil =
        document.querySelector(".perfil");


    if (perfil) {

        perfil.addEventListener(
            "mousemove",
            evento => {

                const rect =
                    perfil.getBoundingClientRect();


                const x =
                    evento.clientX - rect.left;

                const y =
                    evento.clientY - rect.top;


                const centroX =
                    rect.width / 2;

                const centroY =
                    rect.height / 2;


                const movimentoX =
                    (x - centroX) / 45;

                const movimentoY =
                    (y - centroY) / 45;


                perfil.style.transform =
                    `perspective(700px)
                     rotateY(${movimentoX}deg)
                     rotateX(${-movimentoY}deg)`;

            }
        );


        perfil.addEventListener(
            "mouseleave",
            () => {

                perfil.style.transform =
                    "perspective(700px) rotateY(0deg) rotateX(0deg)";

            }
        );

    }


    // ==========================================
    // STATUS
    // ==========================================

    const status =
        document.querySelector(".status");


    if (status) {

        const textoOriginal =
            status.textContent.trim();


        status.textContent = "";


        let indice = 0;


        function escreverStatus() {

            if (
                indice <
                textoOriginal.length
            ) {

                status.textContent +=
                    textoOriginal.charAt(indice);

                indice++;

                setTimeout(
                    escreverStatus,
                    40
                );

            }

        }


        escreverStatus();

    }


    // ==========================================
    // CONSOLE
    // ==========================================

    console.log(
        "%c🕷 VENOM // LIFE SYSTEM",
        "color:#b7ff00;font-size:22px;font-weight:bold;"
    );

    console.log(
        "%cERICK // SYSTEM ONLINE",
        "color:white;font-size:13px;"
    );

});
