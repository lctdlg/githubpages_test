var dmList = document.getElementById('dmList')

let data = ['美女'];

let set = setInterval('danmu()',500);

function danmu() {
    var sum = document.querySelector('#dmList').children;
    console.log(sum.length);
    data.forEach(item=>{
        let div = document.createElement('div');
        div.innerText = item;
        div.setAttribute('class','msg')
        var h = Math.random()*240;
        div.style.top = h + "px"
        var color = document.getElementById("textColor").value
        div.style.color = color;
        dmList.appendChild(div)
    })
    if(sum.length > 500) {
        clearInterval(set);
    }
}
function sendDanmu(){
    // 获取输入框的值
    var text = document.getElementById("text").value;
    // 创建元素
    var p = document.createElement("p")
    // 设置p标签的内容
    p.innerText = text;

    //给p标签添加msg类
    p.setAttribute("class","msg") 

    // 设置弹幕的随机高度
    var h = Math.random()*240;
    p.style.top = h + "px"

    // 获得颜色选择器的值
    var color = document.getElementById("textColor").value
    p.style.color = color;

    // 把弹幕添加到页面上
    dmList.appendChild(p)

    // 设置输入框为空
    document.getElementById("text").value = "";
}