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
        label: '課程項目',
        url: '/service.html',
        navShow: true
      },
      {
        label: '人才招募',
        url: '/careers.html',
        navShow: true
      },
      {
        label: '教練團隊',
        url: '/ourteam.html',
        navShow: true
      },
      {
        label: '預約諮詢',
        url: '/contact.html',
        navShow: true
      },
      {
        label: '交通資訊',
        url: '/information.html',
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
      url: 'https://www.facebook.com/tpfc.fit',
    },
    {
      icon: 'logo_ig',
      label: 'Instagram',
      url: 'https://www.instagram.com/tpfc.fit/',
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
      alt: '9999 包月一對一教練活動',
      link: 'https://www.instagram.com/p/C0tQ-ubPsrp',
      cnt: '想要密集訓練成大隻佬卻因為荷包受限沒辦法瘋狂約教練課訓練嗎?或是終於看不下去團結一塊的腹肌想要拼命甩肉但擔心自己撐不完那麼多堂教練課而卻步嗎?<br>頭等倉機長聽到你們的心聲了!<br>這次我們要給你一個全新的訓練模式——30天不限堂數、不指定教練的1對1重訓課程💪<br>來吧!讓我們燃燒我們對健身的熱情，認真投入在這30天中吧🔥🔥🔥<br>月票頭等倉乘客：NT$9999（課堂數不限）<br><br>活動時間:2023/12/12～2024/02/28'
    },
    {
      img: require('index/ig_post_promote.jpg'),
      alt: '新生五堂 4000 元方案',
      link: 'https://www.instagram.com/p/Cqe_ge7BCGw',
      cnt: '隨著疫情的解封，大家都開始踏出家門，往戶外活動。<br/>在緊接著來到的夏天，<br/>如果你想要雕刻自己的身材、少走一點冤望路、少花一些冤枉錢...<br>歡迎你來到頭等倉運動空間!<br/>每個你下定決心要踏出家門飛行的時刻，都是最好的時刻。<br/>原價：5堂NT$7500<br/>首次頭等艙乘客：5堂NT$4000（一人限一次）<br/>點擊IG首頁連結報名成為我們的首飛乘客'
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
      cnt: '1V1.1V2專屬健身教學課程，針對您的體能狀況量身訂做適合您的訓練模式、課表，在安全的範圍內做最有效的訓練。'
    },
    {
      title: '運動矯正與評估',
      cnt: '使用動作評估確認肌肉失衡，找出過度使用及使用不足的肌肉，協助判斷該放鬆的肌群與該加強的部位，提供您最適合的運動方向。'
    },
    {
      title: '團體課程',
      cnt: 'First Class 提供各種肌力為取向的團體課程，為運動增添多元性，團體訓練也可以透過互相激勵養成持續運動的好習慣。'
    },
  ],
  careers: [
    '對First Class Fitness 有高度認同，能長期投入為志向',
    '能獨立上課，有教學觀念',
    'Sense！不將就醜的事物',
    '喜歡團隊溝通，喜歡一起幹大事的港覺',
    '如有幾張健身相關證照很加分'
  ],
  jobs: [
    {
      title: '健身顧問',
      cnt: [
        '健身方案介紹，協助客戶參觀場館環境',
        '招募學員，推廣最新的健身專業資訊',
        '追蹤潛在客戶，瞭解客戶需求'
      ]
    },
    {
      title: '健身教練',
      cnt: [
        '提供會員一對一專業健身諮詢服務',
        '規劃並教授會員專屬課程',
        '指導會員正確使用健身器材'
      ]
    },
    {
      title: '櫃檯客服專員',
      cnt: [
        '學員接待服務、合約諮詢、審核應收帳務',
        '學員資料庫系統使用、管理',
        '販售商品及內部備品之進銷存管理'
      ]
    },
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
      img: require('ourteam/coach_benson.jpg'),
    },
    {
      name: 'Travis',
      job: '營運長/體能教練',
      img: require('ourteam/coach_travis.jpg'),
    },
    {
      name: 'Allen',
      job: '體能教練',
      img: require('ourteam/coach_allen.jpg'),
    },
    {
      name: 'Alex',
      job: '體能教練',
      img: require('ourteam/coach_alex.jpg'),
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
