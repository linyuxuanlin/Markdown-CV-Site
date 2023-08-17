# Markdown-CV-Site

用 Markdown 撰写一份方便预览、可打印的简历。

**预览网址**：[**cv-template.wiki-power.com**](https://cv-template.wiki-power.com/)

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/202307312227028.png)

特点：

- 页面简单明了，点击网址即刻呈现。
- 使用静态部署，可一键部署至 Vercel，无惧隐私泄露。
- 右下角一键打印简历，亦可输出 PDF 格式，方便打印纸质版。
- 页面比例保持不变，网页所见与打印样式完全相同，方便排版。
- 提供默认的简历模板，可供从零撰写参考。

## 使用说明

- 初次使用，可直接点击 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linyuxuanlin/Markdown-CV-Site)，填入新建仓库的名字，一键部署后即可预览。（也可点击右上角的绿色按钮 `Use this template`，创建一个自己的仓库）
- 打开 `info.json` 文件，修改其中的个人信息。
- 可直接在 `cv-template.md` 文件中修改自己的简历内容；也可在根目录下单独创建多个简历文件例如 `cv-1.md` `cv-2.md` 等，存放你的简历内容。如果自定义简历文件的路径，请记得在 `script.js` 中将 `cv-template.md` 替换为你自定义的路径。
- 修改后，推送到 GitHub 仓库后，可自动触发 Vercel 构建。
- 如需导出 PDF 格式的简历，请点击简历页面右下角的 `打印`，选择打印机为 `Microsoft Print to PDF`，点击 `打印` 即可获得 PDF 文件。

## 参考与致谢

- 界面 UI 参考：[**BigLiao/markCV**](https://github.com/BigLiao/markCV)
- 简历模板参考：[**冷熊简历**](https://cv.ftqq.com/)
- 本项目使用 ChatGPT 开发。
