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


const generatePdfButton = document.getElementById('generatePdfButton');

generatePdfButton.addEventListener('click', () => {
  const doc = new jsPDF();
  const pdfFileName = 'my_resume.pdf'; // 设置PDF文件名

  // 获取页面内容
  const pageContent = document.documentElement;

  // 将页面内容添加到PDF
  doc.html(pageContent, {
    callback: function () {
      // 保存PDF为文件
      doc.save(pdfFileName);
    }
  });
});