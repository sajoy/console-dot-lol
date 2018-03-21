function clickableLists () {
    const boxes = document.querySelectorAll('input[type="checkbox"]');
    if (!boxes.length) return;
    boxes.forEach(ele => {
        ele.addEventListener('click', event => {
            const step = event.target.nextElementSibling.textContent.substring(0,12);
            clicky.log('/console-dot-lol/download', step);
        });
    });
}