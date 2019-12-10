var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(),
    s = n(0),
    a = i(s),
    l = n(49),
    u = i(l),
    c = function() {
        function t(e) {
            r(this, t), this.constants = e;
            this.bindEvents()
        }
        return o(t, [{
                        key: "bindEvents",
                        value: function() {
                            var t = this;
                            (0, a.default)(document).on("click", this.constants.catalogProductGalleryZoom.ZOOM_TOGGLE, function(e) {
                                var n = (0, a.default)(e.currentTarget).attr("data-zoom"),
                                    i = (0, a.default)(e.currentTarget).attr("data-counter"),
                                    r = (0, a.default)(e.currentTarget).parent(".image-item").siblings(":visible").addBack().index((0, a.default)(e.currentTarget).parent(".image-item")) + 1;
                                Detection.isTouchDevice() ? t._fullscreenImageZoomTouchDevice() : ((0, a.default)(t.constants.catalogProductGalleryZoom.ZOOM_OVERLAY).modal("show"), t._fullscreenImageZoom(n), (0, a.default)(t.constants.catalogProductGalleryZoom.ZOOM_DISPLAY_THUMB) && t._createThumb(i), (0, a.default)(t.constants.catalogProductGalleryZoom.ZOOM_DISPLAY_ARROWS) && t._addArrowEvent(i, r))
                            }), (0, a.default)(document).on("keyup", function(e) {
                                39 == e.keyCode && (0, a.default)(t.constants.catalogProductGalleryZoom.ZOOM_ARROWS).find(".next").click(), 37 == e.keyCode && (0, a.default)(t.constants.catalogProductGalleryZoom.ZOOM_ARROWS).find(".prev").click(), 27 == e.keyCode && (0, a.default)(".modal").each(function() {
                                    (0, a.default)(this).find(".close").trigger("click")
                                })
                            })
                        }
                    }, {
                        key: "_fullscreenImageZoom",
                        value: function(t) {
                            var e = this,
                                n = (0, a.default)(window).height();
                            (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_MODAL).css({
                                top: 0,
                                height: n
                            }), (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_MODAL_LOADING).show(), (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img:not(.loader)").attr("src", ""), (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img:not(.loader)").hide(), (0, a.default)('<img src="' + t + '">').on("load", function(n) {
                                n.currentTarget.complete && ((0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_MODAL_LOADING).hide(), (0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img:not(.loader)").attr("src", t), (0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img:not(.loader)").fadeIn("slow", function() {
                                    var t = parseInt((0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img").height()),
                                        n = -(t - (0, a.default)(window).height()) / 2;
                                    (0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_MODAL_CONTENT).find("img:not(.loader)").css("transform", "translateY(" + n + "px)")
                                }), (0, a.default)(e.constants.catalogProductGalleryZoom.ZOOM_OVERLAY).fadeIn("slow"), e._createZoom())
                            })
                        }
                    }, {
                        key: "_fullscreenImageZoomTouchDevice",
                        value: function() {
                            var t, e = document.querySelectorAll(".pswp")[0],
                                n = [];
                            (0, a.default)("#product-wrapper .images-wrapper .image-item").each(function() {
                                t = {
                                    src: (0, a.default)(this).children().attr("data-zoom-touch"),
                                    w: 1400,
                                    h: 1785
                                }, n.push(t)
                            });
                            var i = {
                                index: 0
                            };
                            new PhotoSwipe(e, PhotoSwipeUI_Default, n, i).init()
                        }
                    }, {
                        key: "_addArrowEvent",
                        value: function(t, e) {
                            var n = this,
                                i = parseInt(t),
                                r = (0, a.default)(".col-images .image-item:visible").length;
                            i > r && Math.abs(r - i);
                            var o = [];
                            (0, a.default)(".col-images .image-item:visible").each(function() {
                                o.push((0, a.default)(this).html())
                            });
                            var s = o.length;
                            (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_COUNTER).find("span").text(e + "/" + s).attr("data-current", e), (0, a.default)(this.constants.catalogProductGalleryZoom.ZOOM_ARROWS).find("i").on("click", function(t) {
                                t.stopImmediatePropagation();
                                var e = [];
                                (0, a.default)(".col-images .image-item:visible").each(function() {
                                    e.push((0, a.default)(this).html())
                                });
                                var i, r, o, s = e.length,
                                    l = (0, a.default)(t.currentTarget).attr("data-dir");
                                r = parseInt((0, a.default)(n.constants.catalogProductGalleryZoom.ZOOM_COUNTER).find("span").attr("data-current")), "next" == l && (void 0 !== e[r] ? (i = (0, a.default)(e[r]), o = i.attr("data-zoom"), r += 1) : (i = (0, a.default)(e[0]), o = i.attr("data-zoom"), r = 1)), "prev" == l && (void 0 !== e[r - 2] ? (i = (0, a.default)(e[r - 2]), o = i.attr("data-zoom"), r -= 1) : (i = (0, a.default)(e[s - 1]), o = i.attr("data-zoom"), r = s)), (0, a.default)(n.constants.catalogProductGalleryZoom.ZOOM_COUNTER).find("span").text(r + "/" + s).attr("data-current", r), n._fullscreenImageZoom(o)
                            })
                        }
                    }
