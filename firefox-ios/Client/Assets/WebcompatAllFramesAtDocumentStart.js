(()=>{var e=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled),t=void 0!==HTMLVideoElement.prototype.webkitEnterFullscreen;e||!t||/mobile/i.test(navigator.userAgent)||(HTMLElement.prototype.requestFullscreen=function(){if(void 0!==this.webkitRequestFullscreen)return this.webkitRequestFullscreen(),!0;if(void 0!==this.webkitEnterFullscreen)return this.webkitEnterFullscreen(),!0;var e=this.querySelector("video");return void 0!==e&&(e.webkitEnterFullscreen(),!0)},Object.defineProperty(document,"fullscreenEnabled",{get:function(){return!0}}),Object.defineProperty(document.documentElement,"fullscreenEnabled",{get:function(){return!0}}))})();