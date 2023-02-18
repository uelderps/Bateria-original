function tocarSom(event){
  

    if(event.code==='KeyQ'){
        let audio= document.querySelector("#s_keyq");
        let div =document.querySelector('.keyq');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyE'){
        let audio= document.querySelector("#s_keye")
        let div =document.querySelector('.keye');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyW'){
        let audio= document.querySelector("#s_keyw")
        let div =document.querySelector('.keyw');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyA'){
        let audio= document.querySelector("#s_keya")
        let div =document.querySelector('.keya');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyS'){
        let audio= document.querySelector("#s_keys")
        let div =document.querySelector('.keys');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyD'){
        let audio= document.querySelector("#s_keyd")
        let div =document.querySelector('.keyd');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyZ'){
        let audio= document.querySelector("#s_keyz")
        let div =document.querySelector('.keyz');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyX'){
        let audio= document.querySelector("#s_keyx")
        let div =document.querySelector('.keyx');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    if(event.code==='KeyC'){
        let audio= document.querySelector("#s_keyc")
        let div =document.querySelector('.keyc');
        div.classList.add('active');        
        audio.currentTime=0;
        audio.play();
    }
    
}
function limpar(){
    let div=document.querySelector('.active');
    setTimeout(() => {       

    div.classList.remove('active');
}, 300);
}


document.body.addEventListener('keydown',tocarSom);
document.body.addEventListener('keyup',limpar);
