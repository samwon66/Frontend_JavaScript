document.querySelector('#button').addEventListener('click', BishBosh);

function BishBosh() {
    let loopEnd = parseInt(document.getElementById('#loopEnd').value);
    let divNumb1 = parseInt(document.getElementById('#divNumb1').value);
    let divNumb2 = parseInt(document.getElementById('#divNumb2').value);
    let result = document.getElementById('#result');

        for ( let i = 1 ; i <= loopEnd; i++)
        {
            var elem = document.createElement('p');
            if (i % divNumb1 === 0 && i % divNumb2 === 0)
            {
                elem.innerHTML = 'Bish-Bosh';
                result.appendChild(elem);
            }
            else if (i % divNumb1 === 0) 
            {
                elem.innerHTML ='Bish';
                result.appendChild(elem);
            }
            else if (i % divNumb2 === 0)
            {
                elem.innerHTML = 'Bosh';
                result.appendChild(elem);
            }
            else 
            {
                elem.innerHTML = `${i},`;
                result.appendChild(elem);
            }
        } 
        
    }