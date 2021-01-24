// --------------------Worker介绍--------------------
// // Worker 线程内部需要有一个监听函数，监听message事件。self代表子线程自身，即子线程的全局对象
// // way1
// self.addEventListener('message', function (e) {
//     self.postMessage('You said: ' + e.data);
// }, false);
// // way2
// this.addEventListener('message', function (e) {
//     this.postMessage('You said: ' + e.data);
// }, false);
// // way3
// addEventListener('message', function (e) {
//     postMessage('You said: ' + e.data);
// }, false);
// // way4
// onmessage = function (e) {
//     // ...
// }

// // 向 Worker 发消息
// self.postMessage()


// // Worker 内部如果要加载其他脚本，有一个专门的方法importScripts()
// // importScripts('script1.js');

// // 在 Worker 内部关闭自身
// self.close()


// // --------------------Worker 线程内部还能再新建 Worker 线程（目前只有 Firefox 浏览器支持）--------------------
// // 下面的例子是将一个计算密集的任务，分配到10个 Worker
// var num_workers = 10;
// var items_per_worker = 1000000;

// // start the workers
// var result = 0;
// var pending_workers = num_workers;
// for (var i = 0; i < num_workers; i += 1) {
//   var worker = new Worker('core.js');
//   worker.postMessage(i * items_per_worker);
//   worker.postMessage((i + 1) * items_per_worker);
//   worker.onmessage = storeResult;
// }

// // handle the results
// function storeResult(event) {
//   result += event.data;
//   pending_workers -= 1;
//   if (pending_workers <= 0)
//     postMessage(result); // finished!
// }


// --------------------Worker的简单使用--------------------
// 主线程创建worker实例的时候就会执行worker.js里面的代码
console.log("子线程打印");
self.postMessage({ name: '子线程' })
self.addEventListener('message', function(e) {
    console.log('worker e.data.name', e.data.name);
})