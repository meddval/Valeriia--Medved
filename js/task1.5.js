
function task3(n, k) {
    for (let i = k; i <= n; i++) {
        if (i % k === 0) {
            console.log(i);
            i += k;
        }
    }
     task3(90,20)


     1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
     // 2. Вывести в консоль простые числа от 1 до n.
     // 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home
     // 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
     // 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
     // 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home
     // 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.
     
     function task1(n) {
         for (let i = 1; i <= n; i = i + 1) {
             console.log(i);
         }
     }
     
     function isSimple(x) {
         for (let i = 2; i < x; i += 1) {
             if (x % i === 0) {
                 return false;
             }
         }
     
         return true;
     }
     
     function task2(n) {
         // for (let i = 1; i <= n; i = i + 1) {
         //     if (isSimple(i)) {
         //         console.log(i);
         //     }
         // }
     
         let i = 1;
     
         while (i <= n) {
             if (isSimple(i)) {
                 console.log(i);
             }
     
             ++i;
         }
     }
     
     let i = 5;
     
     // console.log(1 + i++ + 4, i); // 10
     
     i = 5;
     
     // console.log(1 + ++i + 4, i); // 11
     
     function task3(n, k) {
         let i=k;
         // let counter = 0;
     
         while (i <= n) {
             // counter++;
             if (i % k === 0) {
                 console.log(i);
                 i += k;
             }
         }
     
         // console.log('task 3 counter: ', counter);
     }
     
     // task3(90, 20);
     
     function task4() {
         alert('Задача: Вывести в консоль числа от 1 до n');
     
         const userData = prompt('Введите произвольное целое число большее 1', '2');
     
         if ( userData === null) {
             alert('До свидания');
     
             return ;
         }
     
         const n = Number(userData);
     
         console.log(n, typeof n);
     
         if (isNaN(n) || n <= 0 || n !== Math.floor(n)) {
             alert('Число не корректно');
             throw new Error('Число не корректно');
         }
     
         task1(n);
     }
     
     // task4();
     
     function task5() {
         let i = 1;
         let userData;
     
         do {
             if (isSimple(i)) {
                 console.log(i);
     
                 userData = confirm('Продолжить?');
             }
     
             i++;
         } while (userData);
     }
     
    function task5() {
        alert('Задача:2. Вывести в консоль простые числа от 1 до n.')
        
    }


    Find Your Villain Name https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript
    
    Take a Ten Minute Walk https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

    Add property to every object in array https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript

    Return the Missing Element https://www.codewars.com/kata/5299413901337c637e000004/train/javascript
