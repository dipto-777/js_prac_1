const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let m = friends[0];
friends.forEach(Element=> {
    if(Element.length>m.length){
        m=Element;
    }
})
console.log(m);