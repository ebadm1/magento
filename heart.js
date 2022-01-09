        if(window.attachEvent) {
    window.attachEvent('onload', addCode());
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            addCode()(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = addCode();
    }
}
		
		function addCode() {
            document.getElementsByClassName("action towishlist")[0].insertAdjacentHTML("afterbegin",
                '<i class="icon-line-heart"></i>');
        }