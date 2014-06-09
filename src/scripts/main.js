require('./hogan.mustache');


var html = QTMPL.hogan.render({
    list: [
        [
            {
                name: 'Tom'
            }
        ],
        [
            {
                name: 'Jack'
            }
        ]
    ],
    name: '',
    hasName: function(){
        alert(this.name)
    }
});


document.getElementById("test").innerHTML = html;
