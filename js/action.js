document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.brokerbutton');
    let btnidx = 0;
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if(button.classList[1] === 'clicked'){
                button.classList.remove('clicked');
                btnidx--;
            }
            else{
                if(btnidx < 4){
                    button.classList.add('clicked');
                    btnidx++;
                }
                else {
                    alert("最大で4つまで選択できます。");
                }
            }
        });
    });
});

function showDropdownMultiple() {
    // Get the selected value from the dropdown
    var dischange = document.getElementById("broker_name");
    dischange.style.display="block";
}
