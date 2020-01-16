function HtmlElement() {
    this.click=function() {
        console.log('click');
    }
}

HtmlElement.prototype.focus=function() {
    console.log('focus');
}

function HtmlSelectElement(items=[]) {
    this.items=items;

    this.addItem=function(item) {
        this.items.push(item);
    }

    this.removeItem=function(item) {
        this.items.splice(this.items.indexOf(item),1);
    }
}

//based htmlSelectElement
//HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);//base htmlelement

HtmlSelectElement.prototype=new HtmlElement();//base htmlelement
HtmlSelectElement.prototype.constructor=HtmlSelectElement;