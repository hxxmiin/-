// 백그라운드 서비스 워커 (앱이 꺼져 있어도 알림 전송 지원)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// 백그라운드 알림 수신 이벤트
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "📚 공부할 시간이에요!";
    const options = {
        body: data.body || "오늘의 할 일을 확인하고 달성률을 올려보세요! 🔥",
        icon: "icon.png"
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
