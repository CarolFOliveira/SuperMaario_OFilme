const btTrailler = document.querySelector(".bt-trailler");
const modal = document.querySelector(".modal");
const btFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("trailler-video");
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

btTrailler.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src",linkVideo);
});

btFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src","");
 });

