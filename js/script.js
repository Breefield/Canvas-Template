$(document).ready(function() {
                    
    var canvas = document.getElementById('display');
    var ctx = canvas.getContext('2d');
    canvas.width = $(window).width();
    canvas.height = $(window).height();
                    
    var m_event = {clientX: 0, clientY: 0};
    window.onmousemove = function(e) { m_event = e; };
                    
    frame = function(frame_c) {
        canvas.width = canvas.width;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        drawCursor();
        setTimeout(function() { frame(frame_c++); }, 10);
    };              
    frame();        
                    
    function drawCursor() {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
        ctx.moveTo(m_event.clientX - 10, m_event.clientY - 10);
        ctx.lineTo(m_event.clientX + 10, m_event.clientY + 10);
        ctx.moveTo(m_event.clientX + 10, m_event.clientY - 10);
        ctx.lineTo(m_event.clientX - 10, m_event.clientY + 10);
        ctx.stroke();
        ctx.closePath();
    }                
    
    window.onresize = function(e) {
        canvas.width = $(window).width();
        canvas.height = $(window).height();
    };              
});                 