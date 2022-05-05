window.addEventListener('scroll', reveal);

function show_chat_bot() {
    document.getElementById('chat-bot-container').classList.toggle('show-chat-bot-menu');
}

function container_10() {
    document.getElementById('container_10').classList.toggle("show_this");
}

function showNav() {
    document.getElementById('nav').classList.toggle("show_nav");
}

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var revealsImgl = document.querySelectorAll('.reveal-imgl');
    var revealsImgr = document.querySelectorAll('.reveal-imgr');
    for(var i=0; i<reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        
        var revealpoint = -1;

        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
    for(var i=0; i<revealsImgl.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = revealsImgl[i].getBoundingClientRect().top;
        
        var revealpoint = -1;

        if(revealtop < windowheight-revealpoint){
            revealsImgl[i].classList.add('active-imgl');
        }
        else{
            revealsImgl[i].classList.remove('active-imgl');
        }
    } 
    for(var i=0; i<revealsImgr.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = revealsImgr[i].getBoundingClientRect().top;
        
        var revealpoint = -1;

        if(revealtop < windowheight-revealpoint){
            revealsImgr[i].classList.add('active-imgr');
        }
        else{
            revealsImgr[i].classList.remove('active-imgr');
        }
    }        
}

// onclick="window.location.hash='top';"
