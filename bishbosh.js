const end = 100;
        let numbers = [];
        
        for (i = 0; i < end; i++){
               numbers[i] = i + 1;
               if (numbers[i] % 3 === 0 && numbers[i] % 4 === 0){
                console.log('Bish-Bosh');
               }
               else if (numbers[i] % 3 === 0) {
                console.log('Bish');
               }
               else if (numbers[i] % 4 === 0) {
                console.log('Bosh');
               }
               else {
                   console.log(numbers[i]);
               }
        }