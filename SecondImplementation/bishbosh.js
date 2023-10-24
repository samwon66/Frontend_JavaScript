document.querySelector('#button').addEventListener('click', BishBosh);

function BishBosh() {
    let numb1 = parseInt(document.getElementById('divNumb1').value);
    let numb2 = parseInt(document.getElementById('divNumb2').value);
    let end = parseInt(document.getElementById('loopEnd').value);
    let output = document.getElementById('result');

        for ( let i = 1 ; i <= end; i++)
        {
            var elem = document.createElement('p');
            if (i % numb1 === 0 && i % numb2 === 0)
            {
                elem.innerHTML = 'Bish-Bosh';
                output.appendChild(elem);
            }
            else if (i % numb1 === 0) 
            {
                elem.innerHTML ='Bish';
                output.appendChild(elem);
            }
            else if (i % numb2 === 0)
            {
                elem.innerHTML = 'Bosh';
                output.appendChild(elem);
            }
            else 
            {
                elem.innerHTML = `${i},`;
                output.appendChild(elem);
            }
        } 
        
    }