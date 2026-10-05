// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Step 1에서 확인한 발급받은 Firebase 설정 정보 입력
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

// 화면이 꺼져 있거나 백그라운드 상태일 때 푸시 수신 처리
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || "📚 공부할 시간이에요!";
    const notificationOptions = {
        body: payload.notification.body || "오늘의 할 일을 확인하고 달성률을 올려보세요! 🔥",
        icon: "icon.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
