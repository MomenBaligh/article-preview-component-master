function toggleBtn(){
    const btn = document.getElementById('hideMenu');

    if(btn.style.display !== 'block'){
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}