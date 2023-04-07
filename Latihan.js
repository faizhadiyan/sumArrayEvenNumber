let saveinput = function () {
    let a = document.getElementById('inputInt').value;
    
    let fungsi2 = (newArray) => {        
        var sum = 0;
        for(var i=0; i < newArray.length; i++){
            if (i % 2 === 0) {
                var j = i;
                sum += parseInt(newArray[j]);
            } else {
            }
        }
        return sum;
    }
    
    let fungsi1 = (integer)=> {
        let newArray = Array.from({ length: parseInt(integer)+1 }, (value, index) => index);

        // for(var i=0; i < newArray.length; i++){
        //     if (i % 2 === 0) {
        //         var j = i;
        //         sum += parseInt(newArray[j]);
        //     } else {
        //     }
        // }

        let jumlah = fungsi2(newArray);

        document.getElementById("commenthasil").innerHTML = "Maka Hasilnya Adalah: " + jumlah;A
    }

    

    fungsi1(a);
}

