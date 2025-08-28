// 定义翻译对照组件（不使用shadow dom，确保选择器能正常工作）
class TranslationBlock extends HTMLElement {
    constructor() {
        super();
        // 获取属性值
        const originalText = this.getAttribute('original') || '';
        const translationText = this.getAttribute('translation') || '';

        // 组件内容
        this.innerHTML = `
            <div class="text-block">
                <div class="original-text">
                    <i class="fa fa-file-text-o text-icon"></i>
                    <p class="text-content">${originalText}</p>
                </div>
                
                <div class="translated-text" data-translation="true">
                    <i class="fa fa-language text-icon"></i>
                    <p class="text-content">${translationText}</p>
                </div>
            </div>
        `;
    }
}

// 视频链接组件定义
class VideoLink extends HTMLElement {
    constructor() {
        super();
        // 获取属性值
        const title = this.getAttribute('title') || '视频链接';
        const url = this.getAttribute('url') || '#';

        // 组件内容
        this.innerHTML = `
                    <div class="video-block">
                        <i class="fa fa-film video-icon"></i>
                        <div class="video-content">
                            <div class="video-title">${title}</div>
                            <a href="${url}" target="_blank" class="video-link">
                                <i class="fa fa-link mr-1"></i>${url}
                            </a>
                        </div>
                    </div>
                `;
    }
}

// 注册自定义组件
customElements.define('translation-block', TranslationBlock);
// 注册视频链接组件
customElements.define('video-link', VideoLink);

/**
 * 初始化翻译切换功能
 * @param {string} contentWrapperId - 内容包装器的ID
 * @param {string} toggleBtnId - 切换按钮的ID
 */
function initTranslationToggle(contentWrapperId = 'contentWrapper', toggleBtnId = 'toggleBtn') {
    const toggleBtn = document.getElementById(toggleBtnId);
    let translationsVisible = true;

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        // 切换显示状态
        translationsVisible = !translationsVisible;

        // 查找所有翻译元素并更新显示状态
        document.querySelectorAll('[data-translation="true"]').forEach(elem => {
            elem.style.display = translationsVisible ? 'flex' : 'none';
        });

        // 更新内容区域紧凑模式
        const contentWrapper = document.getElementById(contentWrapperId);
        if (contentWrapper) {
            if (translationsVisible) {
                contentWrapper.classList.remove('compact');
                toggleBtn.innerHTML = '<i class="fa fa-eye"></i><span>隐藏</span>';
                toggleBtn.classList.remove('hide');
                toggleBtn.classList.add('show');
            } else {
                contentWrapper.classList.add('compact');
                toggleBtn.innerHTML = '<i class="fa fa-eye-slash"></i><span>显示</span>';
                toggleBtn.classList.remove('show');
                toggleBtn.classList.add('hide');
            }
        }
    });
}

// 导出函数，以便在模块化环境中使用
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { TranslationBlock, initTranslationToggle };
}

// 在全局作用域中暴露函数
window.initTranslationToggle = initTranslationToggle;