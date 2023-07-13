function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
} 

function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

ativacaoMenu()

function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li')
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li')


    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    education[0].classList.add('ativo')
    botaoEducation[0].classList.add('ativo')

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }

    function slideShow2(index){
        education.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducation.forEach((item)=>{
            item.classList.remove('ativo')
        });
        education[index].classList.add('ativo')
        botaoEducation[index].classList.add('ativo')
    }


    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    botaoEducation.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
}
sobreMim();




const listaALL = document.querySelectorAll('.projects_armazenamento ul li');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})