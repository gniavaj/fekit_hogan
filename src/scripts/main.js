require('./hogan.mustache');


var html = QTMPL.hogan.render({
    persons: [
        {
            name: "mike",
            sex: 0
        } ,
        {
            name: "jason",
            sex: 1
        }
    ],
    isMale: function(){
        return this.sex === 0;
    },
    isFemale: function(){
        return this.sex === 1;
    },
    lambda: function(){

        console.log('lambda');
        return function(text, render){
            console.log(text);
            console.log(render);
            return render(test);
        }
    }
});


document.getElementById("test").innerHTML = html;
