module.exports = window.PetiteVue.reactive({
  nowPage: window.location.pathname,
  nav: {
    active: null,
    items: [
      {
        label: '首頁',
        url: '/index.html',
        navShow: false
      },
      {
        label: '免費體驗',
        url: '/contact.html',
        navShow: true
      },
      {
        label: '關於我們',
        url: '/about.html',
        navShow: true
      },
      {
        label: '課程項目',
        url: '/service.html',
        navShow: true
      },
      {
        label: '教練團隊',
        url: '/ourteam.html',
        navShow: true
      },
      {
        label: '交通與環境',
        url: '/information.html',
        navShow: true
      },
      {
        label: '人才招募',
        url: '/careers.html',
        navShow: true
      },
    ],
    onClick(e) {
      const vm = this;

      vm.active = !vm.active;
      console.log(e);
    },
  },
  social: [
    {
      icon: 'logo_fb',
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61558998428490',
    },
    {
      icon: 'logo_ig',
      label: 'Instagram',
      url: 'https://www.instagram.com/tpfc.fitness/',
    },
    {
      icon: 'logo_tiktok',
      label: 'TikTok',
      url: 'http://www.tiktok.com/@tpcf.fit',
    },
  ],
  comment: [
    {
      name: 'Yichun Yeh',
      cnt: '教室器材很齊全，教練指導很專業，會針對你的身體狀況設計課程，課後會拉伸，運動完不會有奇怪的疼痛點～真的推推👍'
    },
    {
      name: 'Mozi R',
      cnt: '無論新手或已有重訓經驗都適合加入<br>乾淨整潔、設備齊全、交通便利<br>運動氛圍很好<br><br>推薦！'
    },
    {
      name: 'passion Cheng',
      cnt: '雖然空間比較小，但麻雀雖小五臟俱全，平常在練的動作這邊都可以做<br>只要有買教練課都可以自由使用器材很划算！<br>教練很專業，自主訓練的時候還會過來關心<br>有興趣的朋朋真的可以來試試!!!!'
    },
  ],
  post: [
    {
      img: require('index/ig_post_campaign.jpg'),
      alt: '限時免費專業教練體驗課都在幹嘛?',
      link: 'https://www.instagram.com/p/C9Ho822v99i/?img_index=1',
      cnt: '認真想要改變卻不知道該怎麼開始❓<br/>健身一陣子身材卻沒什麼改變❓<br/>訓練都不確定動作對不對、心裡不踏實❓<br/><br/>那就來頭等倉的免費體驗課💪<br/>讓專業的教練幫助你：<br/>✅身體狀況評估<br/>✅客製化訓練安排<br/>✅動作姿態矯正<br/>✅建立正確健身觀念<br/>體驗課裡的1小時只有滿滿知識 沒有推銷、沒有廢話💪<br/>只需花1小時就能讓你的健身之路少走幾個彎路<br/><br/>免費體驗數量有限<br/>📝快到主頁填寫體驗表單<br/>💬或私訊小盒子搶先預約🔥🔥🔥'
    },
    {
      img: require('index/ig_post_promote.jpg'),
      alt: '新生優惠 10 堂 8000 方案',
      link: 'https://www.instagram.com/p/C5f63_0PYkb/',
      cnt: '我只是個健身小白，不需要買到那麼貴的教練課...<br/>一週只練 1~2 次，要買會籍又要買教練課實在負擔不起...<br/>教練...！我只是想健身啊....！！<br/>三井壽同學！頭等倉都聽到啦！！<br/><br/>🔥現正推出前 10 堂課體驗價 8000 元活動🔥<br/>不綁會籍、不強迫推銷，只想要你愛上運動！<br/>❓不確定自己能不能愛上健身的同學<br/>❓只是想買幾堂課調整動作的同學<br/>❓想要把基礎打好，未來自己上健身房的同學<br/>這個方案就是為了你們誕生的！！！<br/><br/>想要和bro、好閨蜜一起健身？<br/>沒問題！我們也有一對二的教練課喔🙌<br/>👉快到主頁連結🔗填寫免費體驗表單 每日預約數量有限，快手刀報名🔥🔥🔥'
    },
    {
      img: require('index/ig_post_rent.jpg'),
      alt: '場租教練招募',
      link: 'https://www.instagram.com/p/Czc3d1_P1yS',
      cnt: '頭等倉要來擴大招募場租教練囉~~~<br/><br/>想要有一個舒適又自由、交通還很便利、機車好停、附近又有汽車停車場的教學空間嗎?<br/><br/>不止如此還希望能依照自己的需求提供各種單堂、包月方案嗎?<br/>頭等倉機長聽到你們的心聲了!<br/>不論是剛起步的自由教練或是經營品牌許久的專業教練，我們都有適合你的場租方案!<br/><br/>心動不如馬上行動，快私訊或來電詢問加入我們的運動大家庭吧💪'
    },
    {
      img: require('index/ig_post_trial_class.jpg'),
      alt: '體驗課內容說明',
      link: 'https://www.instagram.com/p/CuguEK1voF0',
      cnt: '體驗課到底都在做些什麼?📓<br/><br/>1️⃣填寫體驗表單<br/>2️⃣諮詢與介紹<br/>3️⃣inbody 測量<br/>4️⃣熱身及訓練<br/>5️⃣問答與交流<br/><br/>擔心自己意志力不足嗎?<br/>放心! 頭等倉的教練們最會激勵學生，培養學生的運動興趣! 還是擔心自己可能付了錢最後又不來嗎? 頭等倉不用付會費即可健身!<br/>歡迎報名免費體驗!'
    },
  ],
  load: {
    isDone: false,
    init() {
      const vm = this;

      vm.isDone = false;
    },
    finish() {
      const vm = this;

      vm.isDone = true;
    },
  },
  service: [
    {
      title: '私人教練課程',
      cnt: '1V1、1V2專屬健身教學課程，針對您的體能狀況與期望目標量身訂製適合您的訓練模式與課表，在安全的範圍內做到最有效的訓練。'
    },
    {
      title: '運動矯正與評估',
      cnt: '使用動作評估確認肌肉失衡，找出過度使用及使用不足的肌肉，協助判斷該放鬆的肌群與該加強的部位，提供您最適合的運動方向。'
    },
    {
      title: '場地租借',
      cnt: 'First Class 提供重訓空間與按摩床予自由教練，可依照個人狀況選擇單堂或月租模式，有需要請至 <a href="https://www.instagram.com/tpfc.fitness/" target="_blank" class="underline font-bold">instagram</a> 或 <a href="https://line.me/R/ti/p/@936ccniz" class="underline font-bold">Line 官方</a>私訊預約。'
    },
  ],
  careers: [
    '對First Class Fitness 有高度認同，能長期投入為志向',
    '能獨立上課，有教學觀念',
    '喜歡團隊溝通，有責任心，喜歡一起幹大事的感覺',
    '如有幾張健身相關證照很加分',
    '有點潔癖更好',
  ],
  jobs: [
    // {
    //   title: '健身顧問',
    //   cnt: [
    //     '健身方案介紹，協助客戶參觀場館環境',
    //     '招募學員，推廣最新的健身專業資訊',
    //     '追蹤潛在客戶，瞭解客戶需求'
    //   ]
    // },
    {
      title: '健身教練',
      cnt: [
        '提供會員一對一專業健身諮詢服務',
        '規劃並教授會員專屬課程',
        '指導會員正確使用健身器材'
      ]
    },
    // {
    //   title: '櫃檯客服專員',
    //   cnt: [
    //     '學員接待服務、合約諮詢、審核應收帳務',
    //     '學員資料庫系統使用、管理',
    //     '販售商品及內部備品之進銷存管理'
    //   ]
    // },
  ],
  traning: [
    {
      title: '專業諮詢評估',
      cnt: '透過初步的諮詢了解您的運動目標與動機，<br/>制定您的訓練目標。'
    },
    {
      title: '規劃專屬課程',
      cnt: '根據您的目標，規劃專屬於您的訓練。'
    },
    {
      title: '安全性把關',
      cnt: '根據您在執行訓練計畫的過程中，會依據您的訓練品質<br class="tm:hidden"/>去調整您的課表，在安全的狀態下把關每一次的訓練。'
    },
  ],
  coach: [
    {
      name: 'Benson',
      job: '創辦人/體能教練',
      certificate: ['NASM Certified Personal Trainer', '美國國家運動醫學會認證私人教練', '體適能C級證照', '運動按摩技術員研習證書', '壺鈴教學技巧KTS1研習證書', 'CPR+AED心肺復甦術'],
      skill: ['重量訓練指導', '體態評估調整', '健力式訓練', '個人運動週期規劃', '肌肉筋膜放鬆', '功能性訓練', '銀髮族肌力訓練', '身體活動度改善', '動作控制', 'OPT模組週期課表規劃', '運動表現強化'],
      img: require('ourteam/coach_benson.jpg'),
    },
    {
      name: 'Allen',
      job: '儲備經理/體能教練',
      certificate: ['NASM Certified Personal Trainer', '美國國家運動醫學會認證私人教練', '體適能C級證照', 'CPR+AED心肺復甦術'],
      skill: ['重量訓練指導', '體態評估及雕塑', '健美式訓練', '減脂規劃', '體態雕塑規劃', '個人週期化肌力訓練', '肌力與肌耐力訓練', '客製化週期訓練'],
      img: require('ourteam/coach_allen.jpg'),
    },
    {
      name: 'Alex',
      job: '體能教練',
      certificate: ['體適能C級證照', 'CPR+AED心肺復甦術'],
      skill: ['重量訓練指導', '增肌減脂客製化訓練', '肌肥大週期性訓練', '體態評估調整', '健美式訓練', '超負荷肌力訓練', '肌力與肌耐力訓練'],
      img: require('ourteam/coach_alex.jpg'),
    },
    {
      name: 'Roy',
      job: '體能教練',
      certificate: ['NASM Certified Personal Trainer', '美國國家運動醫學會認證私人教練', '體適能C級證照', 'CPR+AED心肺復甦術'],
      skill: ['一對一阻力訓練', '體態評估調整', '肌肉筋膜放鬆', '身體活動度改善', '核心訓練', '個人運動規劃課程', '徒手肌力訓練', '肌力訓練規劃'],
      img: require('ourteam/coach_roy.jpg'),
    },
  ],
  information: [
    {
      title: '場館位置',
      cnt: '台北市中山區中山北路二段128巷32號1樓'
    },
    {
      title: 'PARKING 鄰近停車資訊',
      cnt: '城市車旅停車場 (捷運民權西路站停車場) 步行至場館約 3 分鐘<br/>成淵高中地下停車場步行至場館約 5 分鐘'
    },
    {
      title: 'MRT 大眾運輸交通資訊',
      cnt: '捷運民權西路站一號出口 步行約3分鐘'
    },
    {
      title: '營業時間: <br class="p:hidden"/>週一至週六 下午 01:00 至 晚上 10:00',
      cnt: 'EMAIL: <a href="mailto:tpfc.fit@gmail.com" class="underline font-bold">tpfc.fit@gmail.com</a><br/>聯絡電話：<a class="underline font-bold" href="tel:+886-2-25222330">02-2522-2330</a>'
    },
  ]
});
