// タブ切り替え機能
function showTab(tabId) {
  // すべてのタブコンテンツを非表示
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.classList.add('hidden');
  });
  
  // すべてのナビゲーションアイテムから active クラスを削除
  const allNavItems = document.querySelectorAll('.nav-item, .nav-item-mobile');
  allNavItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // 選択されたタブを表示
  const selectedTab = document.getElementById('tab-' + tabId);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
  }
  
  // 対応するナビゲーションアイテムに active クラスを追加
  const navItems = document.querySelectorAll(`[data-tab="${tabId}"]`);
  navItems.forEach(item => {
    item.classList.add('active');
  });
  
  // モバイルメニューを閉じる
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
  
  // メニューアイコンを元に戻す
  document.getElementById('menu-open').classList.remove('hidden');
  document.getElementById('menu-close').classList.add('hidden');
  
  // ページトップにスクロール
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// モバイルメニューのトグル
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');
  
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    menuOpen.classList.add('hidden');
    menuClose.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
  }
}

// イベント検索フィルター
function filterEvents() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.toLowerCase();
  const events = document.querySelectorAll('.event-item');
  const noResults = document.getElementById('no-results');
  let visibleCount = 0;
  
  events.forEach(event => {
    const searchText = event.getAttribute('data-search').toLowerCase();
    
    if (searchText.includes(query)) {
      event.style.display = '';
      visibleCount++;
    } else {
      event.style.display = 'none';
    }
  });
  
  // 結果が0件の場合、メッセージを表示
  if (visibleCount === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }
}

// フォーム送信処理
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // フォームデータの取得
  const name = form.querySelector('input[type="text"]').value;
  const school = form.querySelector('select').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  // 送信成功のメッセージ
  alert(`お問い合わせありがとうございます！\n\nお名前: ${name}\nご興味のある流派: ${school}\nメールアドレス: ${email}\n\n内容を確認の上、ご連絡させていただきます。`);
  
  // フォームをリセット
  form.reset();
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
  // デフォルトでホームタブを表示
  showTab('home');
  
  // スムーズスクロールの実装
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // スクロールアニメーション（オプション）
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // アニメーション対象の要素
  const animateElements = document.querySelectorAll('.feature-card, .school-card, .event-item');
  
  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
  
  // ページトップに戻るボタンを作成
  createBackToTopButton();
});

// ページトップに戻るボタン
function createBackToTopButton() {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.setAttribute('aria-label', 'ページトップへ戻る');
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #1c1917;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  `;
  
  button.addEventListener('mouseenter', function() {
    this.style.background = '#292524';
    this.style.transform = 'scale(1.1)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.background = '#1c1917';
    this.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // スクロールイベントでボタンの表示/非表示を切り替え
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  document.body.appendChild(button);
}

// ウィンドウリサイズ時の処理
window.addEventListener('resize', function() {
  // モバイルメニューが開いている状態でデスクトップサイズに変更された場合、メニューを閉じる
  if (window.innerWidth > 768) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      document.getElementById('menu-open').classList.remove('hidden');
      document.getElementById('menu-close').classList.add('hidden');
    }
  }
});
