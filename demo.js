// 准备html字符串
let htmlStr = ''
// 遍历数据拼接html字符串
persons.forEach(p => {
    htmlStr += `<li>${p.id} - ${p.name} - ${p.age}</li>`
});
// 获取list元素
let list = document.getElementById('list')
// 修改内容（亲自操作DOM）
list.innerHTML = htmlStr
