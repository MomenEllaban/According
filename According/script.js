const acc_btns = document.querySelectorAll(".accordion-header");
const acc_body = document.querySelectorAll(".accordion-body");
acc_btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        acc_body.forEach((acc)=>{
            if (e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
                acc.classList.remove('active');
                acc_btns.forEach(btn =>{
                    btn.classList.remove('active');
                })
            }
        });
        const panel = btn.nextElementSibling;
        panel.classList.toggle('active');
        btn.classList.toggle('active');
    })
});

window.onclick = (e)=>{

    if (!e.target.matches('.accordion-header')) {
        acc_btns.forEach(btn =>{
            btn.classList.remove('active');
        })
        acc_body.forEach(acc =>{
            acc.classList.remove('active');
        })
    }
}