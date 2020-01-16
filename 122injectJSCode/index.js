function SplitTwice(text,Element1, Element2) {
    
    const a=text.split(Element1)[1];
    console.log(a);
    const b=a.split(Element2)[1];
    console.log(b);
    
}

let str='hola, como estas si hola, como estas si hola, como estas';
let Element1='hola';
let Element2='como';


SplitTwice(str,Element1,Element2);

