/*function pow(x,n)  // нет пробел между аргументами ф-ии
{  // открывающая скобка пишется на той же строке
  let result=1;   // нет пробелов до и после знака равно
  for(let i=0;i<n;i++) {result*=x;}   // нет пробелов, содержимое фигурных скобок лучше вынести на отдельную строкую открывающая скобка на той же строке что и цикл. Закрывающая на отдельной
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // нет пробелов и ;, переменные лучше объявлять каждую отдельно, а не через запятую
if (n<=0)  // нет пробелов
{  // фигурная скобка надолжна быть на той же строке что и условие
  
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`); // лучше разбить строку через ,
} // см ниже
else // можно на одной строке
{ // смотри выше
  alert(pow(x,n))  // нет пробелов и точки с запятойб фложенный вызов функции
}
*/

// исправленный вариант:

/*

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Степень ${n} не поддерживается,
    введите целую степень, большую 0`);
} else {
  alert( pow(x, n) );
}
*/
