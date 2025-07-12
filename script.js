let toastbox = document.getElementById('toastbox');
let succmsg = '<i class="fa-solid fa-check"></i> succesfully Submited';
let errormsg = '<i class="fa-solid fa-xmark"></i> Plese fix the error';
let invalidmsg = '<i class="fa-solid fa-exclamation"></i> Invalid Message';
function showtoast(msg){
    let toast =document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');


    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },3000);
}