/** 取得できない */
const nodeList1 = document.querySelectorAll('tbody tr td');
console.log(nodeList1);


/** MutationObserverを使う */
function AttachClass(mutationList) {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      /** 対象のタグがあるか確かめる */
      const nodeList2 = document.querySelectorAll('tbody tr td');
      if (nodeList2.length) {
        console.log(nodeList2);
        for (const element of nodeList2) {
          /** 数回呼ばれるので、1回だけ実行されるようにする */
          if (element.textContent === 'santa' && !element.classList.contains('bgc-yellow')) {
            element.classList.add('bgc-yellow');
            console.log('Call Once');
          }
        }
      }
    }
  } 
};

const observer = new MutationObserver(AttachClass);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});