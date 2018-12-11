function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function handleRemove(evt) {
            socket.emit("delete message");
            input.value = "";
        
    }
    button.onclick = handleSubmit;
    del.onclick = handleRemove;
 
    
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    } 
    function deletefromDOM(){
        var ptag = document.getElementsByTagName("p");
        for(var i in ptag){
            if(ptag.length > 0){
                chatDiv.removeChild(ptag[0]);
            }
        }
    }  

socket.on('display message', handleMessage);
socket.on('delete all messages', deletefromDOM);
} // main closing bracket

window.onload = main;



