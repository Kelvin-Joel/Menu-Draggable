const btn=document.getElementById('btn')
const container=document.getElementById('container')
const times=document.getElementById('times')
let state = false;

times.addEventListener('click',()=>{
    container.classList.toggle('animate')
    times.classList.toggle('rotar')
})

addEventListener("mousedown", (e) => {
    state = true;
});

addEventListener("mousemove", (e) => {
  if (state) {
    container.style.left = `${e.clientX}px`;
    container.style.top = `${e.clientY}px`;
  }
});

window.addEventListener("mouseup", () => {
  state = false;
});
