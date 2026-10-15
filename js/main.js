document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. ALTERNADOR DE IDIOMA (i18n) - SOBRE MIM & EXPERIÊNCIAS
       =================================================== */
    const langBtnPt = document.getElementById('btn-lang-pt');
    const langBtnEn = document.getElementById('btn-lang-en');

    const translations = {
        pt: {
            // Página Sobre Mim
            title: "Sobre mim.",
            tag: "06 / POR TRÁS DOS PIXELS",
            p1: "Acredito que a tecnologia é uma forma de transformar ideias em soluções que fazem a diferença. Sou estudante de Engenharia de Software na PUC Minas e gosto de explorar a criatividade e a lógica por trás do desenvolvimento de aplicações.",
            p2: "Tenho interesse em criar produtos digitais que combinem funcionalidade, identidade visual e uma boa experiência para o usuário. Gosto de tirar ideias do papel, experimentar possibilidades e aprender durante o processo de construção, seja em projetos acadêmicos ou pessoais.",
            p3: "Fora do aprendizado teórico, busco desenvolver minha capacidade de resolver problemas, explorar novas tecnologias e compreender como diferentes soluções podem atender às necessidades das pessoas.",
            p4: "Estou construindo minha trajetória na tecnologia com curiosidade, dedicação e vontade de evoluir constantemente, transformando cada desafio em uma oportunidade de aprendizado.",
            
            // Página Experiências
            exp_tag: "05 / TRAJETÓRIA & VIVÊNCIA",
            exp_title: "Experiências",
            exp_p1: "Minha trajetória reúne formação acadêmica, experiência profissional e desenvolvimento de projetos próprios.",
            exp_p2: "Atualmente, curso Engenharia de Software na PUC Minas, onde desenvolvo conhecimentos em programação, lógica computacional e construção de sistemas. A graduação tem ampliado minha compreensão sobre as etapas envolvidas no desenvolvimento de soluções tecnológicas.",
            exp_p3: "Também possuo dois anos de experiência profissional com carteira assinada, uma vivência que complementa minha formação acadêmica e faz parte da minha trajetória no mercado de trabalho.",
            exp_p4: "Paralelamente aos estudos, venho colocando meus conhecimentos em prática por meio de projetos como o Battle of Wits (BOW), uma plataforma de jogos com foco em xadrez; um site de vinhos e produtos gourmet; e o OnRise, uma proposta de aprendizado interativo sobre educação financeira.",
            exp_p5: "Essas experiências representam etapas importantes do meu desenvolvimento, permitindo conectar teoria e prática, experimentar ideias e ampliar meus conhecimentos sobre a criação de produtos digitais."
        },
        en: {
            // Página Sobre Mim
            title: "About me.",
            tag: "06 / BEHIND THE PIXELS",
            p1: "I believe technology is a way to transform ideas into solutions that make a difference. I am a Software Engineering student at PUC Minas and I love exploring creativity and logic behind application development.",
            p2: "I am interested in creating digital products that combine functionality, visual identity, and a great user experience. I enjoy bringing ideas to life, experimenting with possibilities, and learning throughout the process, whether in academic or personal projects.",
            p3: "Beyond theoretical learning, I seek to develop my problem-solving skills, explore new technologies, and understand how different solutions can serve people's needs.",
            p4: "I am building my career in tech with curiosity, dedication, and a drive to constantly evolve, turning every challenge into a learning opportunity.",
            
            // Página Experiências
            exp_tag: "05 / PATHWAY & EXPERIENCE",
            exp_title: "Experiences",
            exp_p1: "My trajectory combines academic background, professional experience, and the development of my own projects.",
            exp_p2: "Currently, I am studying Software Engineering at PUC Minas, developing knowledge in programming, computational logic, and systems construction. The degree has broadened my understanding of the steps involved in developing technological solutions.",
            exp_p3: "I also have two years of formal work experience, an experience that complements my academic background and is part of my trajectory in the job market.",
            exp_p4: "Alongside my studies, I have been putting my knowledge into practice through projects such as Battle of Wits (BOW), a chess-focused gaming platform; a website for wines and gourmet products; and OnRise, an interactive learning proposal for financial education.",
            exp_p5: "These experiences represent important milestones in my development, allowing me to connect theory and practice, experiment with ideas, and expand my knowledge about digital product creation."
        }
    };

    function changeLanguage(lang) {
        const textNodes = document.querySelectorAll('[data-i18n]');
        textNodes.forEach(node => {
            const key = node.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                node.textContent = translations[lang][key];
            }
        });

        if (langBtnPt && langBtnEn) {
            if (lang === 'pt') {
                langBtnPt.classList.add('active-lang');
                langBtnEn.classList.remove('active-lang');
            } else {
                langBtnEn.classList.add('active-lang');
                langBtnPt.classList.remove('active-lang');
            }
        }
    }

    if (langBtnPt && langBtnEn) {
        langBtnPt.addEventListener('click', () => changeLanguage('pt'));
        langBtnEn.addEventListener('click', () => changeLanguage('en'));
    }

    /* ===================================================
       2. FORMULÁRIO DE CONTATO (VALIDAÇÃO & ENVIO)
       =================================================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            const mailtoLink = `mailto:raiany.morais@sga.pucminas.br?subject=Contato de ${encodeURIComponent(name)}&body=Nome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(email)}%0AMensagem: ${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
            alert('Mensagem validada! Abrindo seu aplicativo de e-mail para envio.');
            contactForm.reset();
        });
    }

    /* ===================================================
       3. BOTÃO VOLTAR AO TOPO
       =================================================== */
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});