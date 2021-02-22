// https://cloud.tencent.com/developer/article/1368237
const parent = document.getElementById("parent")
const child = document.getElementById("child")
let {
    x: leftP,
    y: topP,
    width: widthP,
    height: heightP
} = parent.getBoundingClientRect()
console.log(leftP, topP, heightP, widthP);
child.onmousedown = function(e) {
    let left = e.pageX - child.offsetLeft
    let top = e.pageY - child.offsetTop
    document.onmousemove = function(e) {
        let leftW = e.pageX - left;
        let topH = e.pageY - top;
        if ((e.pageX > leftP && e.pageX < leftP + widthP) && (e.pageY > topP && e.pageY < topP + heightP)) {
            child.style.left = leftW + 'px';
            child.style.top = topH + 'px';
        }
    }

    document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// 滚轮事件
child.onmousewheel = function(e) {
    console.log("mouse wheel e", e);
}