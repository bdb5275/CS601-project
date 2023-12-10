const app = new Vue({
    el: '#app',
    data: {
      showVideo: true
    },
    methods: {
      hide() {
        this.showVideo = !this.showVideo;
      },
    },
  });