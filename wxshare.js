function Wxshare(img) {
    this.previewImage = img;
    this.shareUrl = 'https://www.yinshida.com.cn/Sharing/Index/' + '?code=ysd&srcImage=' + encodeURIComponent(this.previewImage);
    this.shareQr = 'https://yinshida.com.cn/SQP/GetQrcode/?url=' + encodeURIComponent(this.shareUrl);
    this.isWechatBrowser = function () {
        return /micromessenger/.test(navigator.userAgent.toLowerCase());
    };
    if (this.isWechatBrowser()) {
        this.load();
    }
};

Wxshare.prototype.load = function () {
    var currentUrl = window.location.href;
    var that = this;
    $.post('https://www.yinshida.com.cn/Sharing/GetSharingConfig/?requestUrl=' + encodeURIComponent(currentUrl)).then(function (response) {
        var jsApi = response;
        var wxConfig = {
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        };
        $.extend(wxConfig, jsApi);
        wx.config(wxConfig);

        // Wechat only accepts share links from same JS safety domains now so we have to config two domains in same public account
        var share_config = {
            title: '接力|我想将这份创意传递下去',
            desc: '创意强袭，分享给你一个酷炫的设计！让你发现平凡生活的更多可能。现在轮到你了！',
            link: that.shareUrl,
            imgUrl: 'https://www.yinshida.com.cn/img/ysdlogo.png',
            success: function () {
                $('.we-share').hide();
            },
            cancel: function () {
                $('.we-share').hide();
            }
        };
        wx.ready(function () {
            wx.onMenuShareTimeline(share_config);
            wx.onMenuShareAppMessage(share_config);
        });
    });
};

Wxshare.prototype.init = function ($btn) {
    var shareOverlay = '<div class="we-share"><div class="weui-mask"></div><img class="share-tip" src="/img/Shared/sharetip.png" alt="share-tip" /></div>';
    var shareModal = '<div class="modal modal-flex fade" id="shareQr" tabindex="-1" role="dialog" aria-labelledby="shareQr" aria-hidden="true">'
        + '<div class="modal-dialog modal-sm">'
            + '<div class="modal-content">'
                + '<div class="modal-header">'
                    + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
                    + '<h4>分享给朋友</h4>'
                + '</div>'
                + '<div class="modal-body">'
                    + '<img class="img-responsive center-block" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />'
                + '</div>'
            + '</div>'
        + '</div>'
    + '</div>';
    var closeParentModal = function (el) {
        var parentModal = el.parents('.modal');
        if (parentModal.length) {
            parentModal.modal('hide');
        }
    };
    var that = this;
    if (that.isWechatBrowser()) {
        $('body').append(shareOverlay);
        $('.we-share').on('click', function () {
            $(this).hide();
        });
        $btn.click(function () {
            closeParentModal($(this));
            $('.we-share').show();
        });
    } else {
        $('body').append(shareModal);
        $btn.click(function () {
            closeParentModal($(this));
            var container = $('#shareQr img');
            container.attr('src', that.shareQr);
            $('#shareQr').modal('show');
        });
    }
};
