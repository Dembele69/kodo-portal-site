// 流派の詳細データ
const schoolDetails = {
  oie: {
    name: '御家流 (Oie-ryu)',
    tag: '公家流',
    image: 'https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=800',
    history: '室町時代中期、三条西実隆（さんじょうにし さねたか）によって確立された香道の流派です。三条西家は代々和歌や古典文学に造詣が深い公家であり、その教養が香道の作法にも深く反映されています。源氏物語や古今和歌集などの古典文学の世界観を香りを通じて表現することを重視し、雅で優美な所作が特徴です。',
    features: [
      '和歌や古典文学との深い結びつき：組香には源氏物語や和歌の題材が多く用いられます',
      '優美で典雅な所作：公家の礼法に基づいた洗練された動作',
      '精神性の重視：香りを通じて古典の世界に思いを馳せる瞑想的な姿勢',
      '格式高い作法：伝統的な公家文化を色濃く残した厳格な礼儀作法'
    ],
    philosophy: '御家流は、香りを単なる嗅覚の楽しみではなく、文学や歴史、季節感を感じ取る総合芸術として捉えています。一炷の香に平安時代の雅な世界を感じ、心を清らかにすることを目指します。'
  },
  shino: {
    name: '志野流 (Shino-ryu)',
    tag: '武家流',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=800',
    history: '戦国時代末期から江戸時代初期にかけて、志野宗信（しの そうしん）によって創始された流派です。武家社会に広く受け入れられ、現在でも最も門弟数の多い流派として知られています。武士の精神修養の一環として発展したため、禅の思想や茶道との関わりも深く、簡潔で力強い所作が特徴です。',
    features: [
      '精神修養の重視：香道を通じて心を鍛え、精神を統一することを目的とする',
      '厳格な作法：武家の礼儀作法に基づいた規律正しい動作',
      '禅の思想：無駄を省いた簡潔で力強い所作',
      '広範な普及：全国各地に教場があり、初心者から上級者まで学べる体制が整っている'
    ],
    philosophy: '志野流は、香道を通じて「一期一会」の精神を大切にします。その瞬間の香りに集中し、心を無にして香と向き合うことで、真の自己と出会うことを目指します。武士道の精神を香道に活かした、凛とした気品が流派の魅力です。'
  },
  jikishin: {
    name: '直心流 (Jikishin-ryu)',
    tag: '茶人流',
    image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80&w=800',
    history: '江戸時代後期、松江藩主・松平治郷（まつだいら はるさと、号：不昧）によって創始された流派です。不昧公は茶道の大家としても知られ、その茶の湯の精神を香道にも取り入れました。「直心」とは、飾り気のない純粋な心を意味し、素直な心で香と向き合うことを大切にしています。',
    features: [
      '茶道との融合：茶の湯の精神を香道に活かした独自のスタイル',
      '自然体の所作：形式にとらわれず、自然で素直な動作を重視',
      '季節感の表現：四季の移ろいを香りで感じ取る感性を育む',
      '侘び寂びの美学：簡素でありながら深い味わいのある香道の世界'
    ],
    philosophy: '直心流は、「直心是道場」（じきしんこれどうじょう）という禅語を大切にしています。飾らない素直な心こそが、香道を学ぶ最良の場であるという教えです。茶道と香道を通じて、自然と調和し、心豊かに生きることを目指します。'
  }
};

// 流派詳細モーダルを表示
function showSchoolDetail(schoolId) {
  const school = schoolDetails[schoolId];
  if (!school) return;
  
  const modal = document.getElementById('school-modal');
  const modalBody = document.getElementById('modal-body');
  
  // モーダルの内容を生成
  let featuresHTML = '';
  school.features.forEach(feature => {
    featuresHTML += `<li>${feature}</li>`;
  });
  
  modalBody.innerHTML = `
    <h2 class="modal-school-title">${school.name}</h2>
    <span class="modal-school-tag">${school.tag}</span>
    <img src="${school.image}" alt="${school.name}" class="modal-school-image">
    
    <div class="modal-section">
      <h3>歴史と成り立ち</h3>
      <p>${school.history}</p>
    </div>
    
    <div class="modal-section">
      <h3>特徴</h3>
      <ul>${featuresHTML}</ul>
    </div>
    
    <div class="modal-section">
      <h3>流派の理念</h3>
      <p>${school.philosophy}</p>
    </div>
  `;
  
  // モーダルを表示
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // 背景のスクロールを無効化
}

// 流派詳細モーダルを閉じる
function closeSchoolModal() {
  const modal = document.getElementById('school-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // 背景のスクロールを有効化
}

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
  // デフォルトのフォーム送信を許可（mailtoリンクで開く）
  const form = event.target;
  
  // フォームデータの取得
  const name = form.querySelector('input[type="text"]').value;
  const school = form.querySelector('select').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  // メールクライアントが開くことを通知
  alert(`お問い合わせありがとうございます！\n\nメールクライアントが開きます。\n送信先: greatamil6@gmail.com\n\nお名前: ${name}\nご興味のある流派: ${school}\nメールアドレス: ${email}\n\nメールを送信してください。`);
  
  // mailtoリンクでメールクライアントを開く
  return true;
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
  // デフォルトでホームタブを表示
  showTab('home');
  
  // モーダルを確実に非表示にする
  const modal = document.getElementById('school-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  
  // モーダルのESCキーで閉じる機能
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSchoolModal();
    }
  });
  
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
