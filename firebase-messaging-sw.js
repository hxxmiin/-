importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// index.html과 동일한 본인의 Firebase 설정값 입력
const firebaseConfig = {
    apiKey: "AIzaSyB-L-gxBlvpYc30kRnTXs_TVtwdFnUE0o8",
    authDomain: "study-helper-2b9f6.firebaseapp.com",
    projectId: "study-helper-2b9f6",
    storageBucket: "study-helper-2b9f6.firebasestorage.app",
    messagingSenderId: "285779147936",
    appId: "1:285779147936:web:a92a3a8e0cb0d60d549dc5"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 백그라운드 상태(탭이 닫혀있거나 다른 창을 보고 있을 때) 알림 수신
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);
    
    const notificationTitle = payload.notification?.title || "📚 공부할 시간입니다!";
    const notificationOptions = {
        body: payload.notification?.body || "오늘의 할 일을 확인해 보세요!",
        icon: "icon.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
