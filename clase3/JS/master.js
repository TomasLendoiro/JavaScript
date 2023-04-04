/* este archivo se puede encontrar como main.js o index.js o app.js o master.js*/
/*alert ('hola como vamos');
/*clase 3 modulo 2
//estructuras de control
//condicionales -if*/
var valor1=10;
var valor2='10';
if(valor1 === valor2){
    console.log(typeof(valor1));
    console.log(typeof(valor2));
    console.log('si son iguales');
    console.log(valor1+valor2);
}else{
    console.log(typeof(valor1));
    console.log(typeof(valor2));
    console.log('no son iguales');
    console.log(Number(valor1)+Number(valor2));
        
    
}
var nombre = prompt('indique su nombre');
var edad = Number(prompt('indique su edad'));

if(edad >= 18){
    alert ('bienvenido '+nombre);
    
var fruta = prompt('indique su fruta favorita de la lista ===> (fresa- cambur - pera - manzana)');
//switch
/*switch (fruta) {
    case fruta == 'Fresa' || fruta == 'fresa' || fruta == 'FRESA':
        alert('veo que te gusta la ' +fruta);
        break;
        case fruta == 'Cambur' || fruta == 'cambur' || fruta == 'CAMBUR':
            alert('veo que te gusta la ' +fruta);
            break;
            case fruta == 'Pera' || fruta == 'pera' || fruta == 'PERA':
                alert ('veo que te gusta la '+fruta);
                break;
                case fruta == 'Manzana' || fruta == 'manzana' || fruta == 'MANZANA':
                    alert ('veo que te gusta la rica y dulce '+fruta);
                    break;

    default:
        alert('Veo que no te gusta las frutas indicadas');
        break;
}*/

if(fruta == 'Fresa' || fruta == 'fresa' || fruta == 'FRESA'){
    alert ('veo que te gusta la '+fruta);
}else if(fruta == 'Cambur' || fruta == 'cambur' || fruta == 'CAMBUR'){
    alert ('veo que te gusta la '+fruta);   
}else if(fruta == 'Pera' || fruta == 'pera' || fruta == 'PERA'){
    alert ('veo que te gusta la '+fruta);
}else if(fruta == 'Manzana' || fruta == 'manzana' || fruta == 'MANZANA'){
    alert ('veo que te gusta la rica y dulce '+fruta); 
}else{
    alert('veo que no te gusta nuestra seleccion de frutas');
}

document.write('<h1>'+'bienvenido '+ nombre +' estas aprendiendo '+'</h1>');
if(fruta==''){
    document.write('<h2>'+ 'veo que no te gusta: fresa - cambur - pera - manzana ' + fruta + '</h2>');

}else{
    document.write('<h2>'+ 'tu fruta favorita es ' + fruta + '</h2>');

}

} else{
    alert('acceso no autorizado');
}