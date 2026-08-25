// ==========================================
// VENOM // ERICK
// SISTEMA INTERATIVO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. CARDS - ABRIR UM POR VEZ
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
    // 2. EFEITO DE ABERTURA
    // ==========================================

    cards.forEach(card => {

        const conteudo = card.querySelector(".conteudo");

        if (!conteudo) return;

        card.addEventListener("toggle", () => {

            if (card.open) {

                conteudo.style.animation = "entradaConteudo .35s ease";

            }

        });

    });


    // ==========================================
    // 3. BOTÃO DO CURRÍCULO
    // ==========================================

    const botaoCurriculo = document.querySelector(".botao-curriculo");

    if (botaoCurriculo) {

        botaoCurriculo.addEventListener("click", () => {

            alert(
                "📄 CURRÍCULO DO ERICK\n\n" +
                "O currículo ainda está sendo preparado.\n\n" +
                "Em breve esta área estará disponível."
            );

        });

    }


    // ==========================================
    // 4. EFEITO DE DIGITAÇÃO NO STATUS
    // ==========================================

    const status = document.querySelector(".status");

    if (status) {

        const textoOriginal = status.textContent.trim();

        status.textContent = "";

        let indice = 0;

        function escreverStatus() {

            if (indice < textoOriginal.length) {

                status.textContent += textoOriginal.charAt(indice);

                indice++;

                setTimeout(escreverStatus, 45);

            }

        }

        escreverStatus();

    }


    // ==========================================
    // 5. EFEITO NO PERFIL
    // ==========================================

    const perfil = document.querySelector(".perfil");

    if (perfil) {

        perfil.addEventListener("mousemove", (evento) => {

            const rect = perfil.getBoundingClientRect();

            const x = evento.clientX - rect.left;
            const y = evento.clientY - rect.top;

            const centroX = rect.width / 2;
            const centroY = rect.height / 2;

            const movimentoX = (x - centroX) / 35;
            const movimentoY = (y - centroY) / 35;

            perfil.style.transform =
                `perspective(700px) rotateY(${movimentoX}deg) rotateX(${-movimentoY}deg)`;

        });

        perfil.addEventListener("mouseleave", () => {

            perfil.style.transform =
                "perspective(700px) rotateY(0deg) rotateX(0deg)";

        });

    }


    // ==========================================
    // 6. CLIQUE NOS CARDS
    // ==========================================

    cards.forEach(card => {

        const summary = card.querySelector("summary");

        summary.addEventListener("click", () => {

            setTimeout(() => {

                if (card.open) {

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });

                }

            }, 100);

        });

    });


    // ==========================================
    // 7. MENSAGEM NO CONSOLE
    // ==========================================

    console.log(
        "%c🕷 VENOM // LIFE SYSTEM",
        "color:#b7ff00;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cERICK // SYSTEM ONLINE",
        "color:white;font-size:12px;"
    );

});
// ==========================================
// LIFE SYSTEM // PAINEL INTERATIVO
// ==========================================

const lifeToggle = document.getElementById("lifeToggle");
const lifePanel = document.getElementById("lifePanel");
const lifeClose = document.getElementById("lifeClose");


// ABRIR

lifeToggle.addEventListener("click", () => {

    lifePanel.classList.add("ativo");

});


// FECHAR

lifeClose.addEventListener("click", () => {

    lifePanel.classList.remove("ativo");

});


// ==========================================
// MISSÕES
// ==========================================

const missionButtons =
    document.querySelectorAll(".mission-btn");

const systemMessage =
    document.getElementById("systemMessage");


missionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const missao =
            button.querySelector("span").textContent;

        systemMessage.textContent =
            `MISSÃO SELECIONADA: ${missao}. Continue avançando.`;

    });

});
