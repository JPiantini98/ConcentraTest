export default function Exercises() {
    //EXERCISE #1
    let a = 10;
    let b = 25;

    console.log("SUM: ", a + b);
    
    //EXERCISE #2
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    console.log("MONTH: ", months[3]);

    //EXERCISE #3
    let fibonacciNum = 0, prevNum1 = 0, prevNum2 = 1;  
    
    for (let i = 0; i < 20; i++) {
        console.log(fibonacciNum);
        fibonacciNum = prevNum1 + prevNum2;
        prevNum1 = prevNum2;
        prevNum2 = fibonacciNum;
    }
}