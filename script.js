fetch('info.json')
    .then(response => response.json())
    .then(personalInfo => {
        // 设置标题和基本信息
        document.getElementById('resume-title').innerText = personalInfo.name;
        const basicInfoContainer = document.getElementById('resume-basic-info');
        basicInfoContainer.innerHTML = `
            <div class="basic-info-item">电话：${personalInfo.phone}</div>
            <div class="basic-info-item">邮箱：${personalInfo.email}</div>
            <div class="basic-info-item">个人网站：${personalInfo.website}</div>
        `;

        // 获取Markdown内容并转换为HTML
        fetch('cv-template.md') // 需要修改为具体的文件路径
            .then(response => response.text())
            .then(md => {
                const mdParser = new window.markdownit();
                const html = mdParser.render(md);
                document.getElementById('resume-content').innerHTML = html;
            });
    })
    .catch(error => console.error('Error fetching personal info:', error));


const printButton = document.getElementById('printButton');

printButton.addEventListener('click', () => {
    window.print(); // 调用浏览器的打印功能
});




// 更新页面缩放
function updateZoom() {
    var pageWidth = window.innerWidth;
    var initialZoom;

    根据页面宽度设置缩放比例
    if (pageWidth < 1000 && pageWidth >= 800) {
        initialZoom = 0.8;
    } else if (pageWidth < 800 && pageWidth >= 700) {
        initialZoom = 0.7;
    } else if (pageWidth < 700 && pageWidth >= 600) {
        initialZoom = 0.6;
    } else if (pageWidth < 500 && pageWidth >= 400) {
        initialZoom = 0.5;
    } else if (pageWidth < 400) {
        initialZoom = 0.1;
    } else {
        initialZoom = 0.1;
    }

    //initialZoom=pageWidth

    // 设置缩放
    document.body.style.zoom = initialZoom;

}

// 初始加载时执行一次
updateZoom();

// 监听窗口大小变化，触发更新缩放
window.addEventListener('resize', updateZoom);