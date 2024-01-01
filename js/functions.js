function updateScore(){
    let total = document.getElementById('total');
    let sum = 0;
    let fallen = document.getElementById('fallen').checked ? 1 : 0;

    for (let i = 1;i < 4; i++){
        for (let j = 1;j < 6; j++){
            let name = "R" + i + "C" + j;
            sum += Math.max(parseInt(document.querySelector( 'input[name=' + name + ']:checked').value) - parseInt(fallen),0);
        }
    }

    total.value = sum;
}

function reset(){
    document.getElementById('total').value = 0;
    document.getElementById('fallen').checked = false;
    
    for (let i = 1;i < 4; i++){
        for (let j = 1;j < 6; j++){
            document.getElementById('commentR' + i + "C" + j).value = "";
            document.getElementById('_R' + i + 'C' + j).checked = true;
        }
    }
}
