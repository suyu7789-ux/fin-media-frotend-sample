// 自动加载导航栏函数
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerEl = document.getElementById('global-header');
            if (headerEl) {
                headerEl.innerHTML = data;
                
                // 加载完成后，重新绑定搜索框的回车事件
                const searchInput = document.getElementById('globalSearchInput');
                if (searchInput) {
                    searchInput.addEventListener('keypress', function(e) {
                        if (e.key === 'Enter') window.location.href = 'search.html';
                    });
                }
                
                // 自动高亮当前页面的导航项
                const currentPage = window.location.pathname.split("/").pop() || 'index.html';
                const navLinks = headerEl.querySelectorAll('nav a');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.style.color = 'var(--accent-gold)';
                    }
                });
            }
        })
        .catch(err => console.error('加载导航栏失败:', err));
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', loadHeader);