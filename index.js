// enum枚举
var player;
(function (player) {
    player["X"] = "x";
    player["O"] = "o";
})(player || (player = {}));
// 判赢数组
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // 斜
];
// 记录步数
var setps = 0;
// 1获取单元格数组
// 2遍历数组使用函数声明 注册点击事件
// 3点击当前 单元格 添加类名x 使用{once:true}防止重复触发
var cells = document.querySelectorAll('.cell');
// 当前玩家
var current = player.X;
// 获取重新开始
var message = document.querySelector('#message');
// 获取显示输赢或者平局展示
var winner = document.querySelector('#winner');
// 重新开始
var restart = document.querySelector('#restart');
// 每个单元格注册点击事件函数
function for_rach(item) {
    var cell = item;
    // 事件监听
    cell.addEventListener('click', clickCell, { once: true });
}
// 点击事件函数
function clickCell(e) {
    // 类型断言
    var target = e.target;
    // 点击添加类名
    target.classList.add(current);
    // 步数加1 点击到9 还没有触发true平局
    setps++;
    // 调用函数获取true判断依据
    var is = checkWin(current);
    if (is) {
        // 显示获胜信息
        message.style.display = 'block';
        // 展示获胜信息
        winner.innerText = current + '赢啦';
        // 停止运行
        return;
    }
    // 平局展示
    if (setps === 9) {
        message.style.display = 'block';
        winner.innerText = '平局';
        return;
    }
    // 三元表达式判断下一步添加哪位玩家的类名
    current = current === player.X ? player.O : player.X;
    var body = document.querySelector('#bord');
    // 面板鼠标移动hover添加类名效果清空所有的类名 
    body.classList.remove(player.X, player.O);
    // 添加当前玩家的显示类名
    body.classList.add(current);
}
// 判断输赢函数 返回true或者false
function checkWin(player) {
    // 使用some方法返回true使停止运行 并返回结果
    return winsArr.some(function (item) {
        var cellindex1 = item[0];
        var cellindex2 = item[1];
        var cellindex3 = item[2];
        if (cells[cellindex1].classList.contains(player) &&
            cells[cellindex2].classList.contains(player) &&
            cells[cellindex3].classList.contains(player)) {
            return true;
        }
        else {
            return false;
        }
    });
}
// 封装函数 判断是否存在类名 不想使用
function isCalss(el, name) {
    return el.classList.contains(name);
}
// 重新开始声明函数1
// restart.addEventListener('click',()=> {
//   location.reload()
// })
// 重新开始声明函数2
restart.addEventListener('click', function () {
    // 隐藏获胜信息
    message.style.display = 'none';
    cells.forEach(function (item) {
        var cell = item;
        // 移除类名
        cell.classList.remove(player.X, player.O);
        // 移除点击事件 绑定点击事件
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell);
    });
    // 清空
    setps = 0;
});
// 循环调用函数
cells.forEach(for_rach);
// 类型断言 as HTMLDivElement
// once 防止重复点击
//使用函数声明形式事件 处理函数 结构更加清晰
