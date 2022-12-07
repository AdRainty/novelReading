if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {
      showBookDetail() {
        uni.navigateTo({
          url: "/pages/book/book"
        });
      },
      showBookStore() {
        uni.navigateTo({
          url: "/pages/index/index"
        });
      },
      showBookShelf() {
        uni.navigateTo({
          url: "/pages/bookshelf/bookshelf"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("section", { class: "aui-flexView" }, [
        vue.createElementVNode("header", { class: "aui-navBar aui-navBar-fixed" }, [
          vue.createElementVNode("div", { class: "aui-center" }, [
            vue.createElementVNode("div", { class: "aui-search-box" }, [
              vue.createElementVNode("i", { class: "icon icon-search" }),
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "\u7CFB\u7EDF"
              })
            ])
          ])
        ]),
        vue.createElementVNode("section", { class: "aui-scrollView" }, [
          vue.createElementVNode("div", { class: "aui-flex aui-flex-head" }, [
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex-box active"
            }, "\u7CBE\u9009"),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex-box"
            }, "\u4E13\u533A"),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex-box"
            }, "\u7537\u9891"),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex-box"
            }, "\u5973\u9891"),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex-box"
            }, "\u7206\u6B3E")
          ]),
          vue.createElementVNode("div", {
            class: "m-slider",
            "data-ydui-slider": ""
          }, [
            vue.createElementVNode("div", { class: "slider-wrapper" }, [
              vue.createElementVNode("div", { class: "slider-item" }, [
                vue.createElementVNode("a", { href: "javascript:;" }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/bookStore/images/banner.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createElementVNode("div", { class: "slider-item" }, [
                vue.createElementVNode("a", { href: "javascript:;" }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/bookStore/images/banner.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createElementVNode("div", { class: "slider-item" }, [
                vue.createElementVNode("a", { href: "javascript:;" }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/bookStore/images/banner.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createElementVNode("div", { class: "slider-item" }, [
                vue.createElementVNode("a", { href: "javascript:;" }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/bookStore/images/banner.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createElementVNode("div", { class: "slider-item" }, [
                vue.createElementVNode("a", { href: "javascript:;" }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/bookStore/images/banner.png",
                    alt: ""
                  })
                ])
              ])
            ]),
            vue.createElementVNode("div", { class: "slider-pagination" })
          ]),
          vue.createElementVNode("div", { class: "aui-palace aui-palace-one" }, [
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-palace-grid"
            }, [
              vue.createElementVNode("div", { class: "aui-palace-grid-icon" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/nav-001.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
                vue.createElementVNode("h2", null, "\u6392\u884C")
              ])
            ]),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-palace-grid"
            }, [
              vue.createElementVNode("div", { class: "aui-palace-grid-icon" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/nav-002.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
                vue.createElementVNode("h2", null, "\u5206\u7C7B")
              ])
            ]),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-palace-grid"
            }, [
              vue.createElementVNode("div", { class: "aui-palace-grid-icon" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/nav-003.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
                vue.createElementVNode("h2", null, "\u65B0\u4E66")
              ])
            ]),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-palace-grid"
            }, [
              vue.createElementVNode("div", { class: "aui-palace-grid-icon" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/nav-004.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
                vue.createElementVNode("h2", null, "\u5B8C\u7ED3")
              ])
            ]),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-palace-grid"
            }, [
              vue.createElementVNode("div", { class: "aui-palace-grid-icon" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/nav-005.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
                vue.createElementVNode("h2", null, "\u4E66\u5355")
              ])
            ])
          ]),
          vue.createElementVNode("div", { class: "aui-flex aui-flex-pt-pb" }, [
            vue.createElementVNode("div", { class: "aui-flex-box" }, [
              vue.createElementVNode("h1", null, "\u672C\u671F\u4E3B\u6253")
            ])
          ]),
          vue.createElementVNode("div", { class: "aui-book-list" }, [
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.showBookDetail && $options.showBookDetail(...args))
            }, [
              vue.createElementVNode("div", { class: "aui-book-img" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/book1.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-flex-box" }, [
                vue.createElementVNode("h2", null, [
                  vue.createTextVNode("\u6587\u5316\u82E6\u65C5 "),
                  vue.createElementVNode("em", null, "9.9\u5206")
                ]),
                vue.createElementVNode("p", null, "\u300A\u6587\u5316\u82E6\u65C5\u300B\u662F\u4E8E\u79CB\u751F\u7684\u7B2C\u4E00\u4E2A\u6563\u6587\u96C6\u6240\u6709\u7684\u4F5C\u54C1\u4E3B\u8981\u5305\u62EC\u4E86\u4FE9\u90E8\u5206\u4E00\u90E8\u5206\u662F\u5386\u53F2\u6587\u5B66"),
                vue.createElementVNode("h3", null, [
                  vue.createElementVNode("i", null, "\u4E8E\u79CB\u751F\u8457"),
                  vue.createTextVNode(),
                  vue.createElementVNode("em", null, "\u52A0\u5165\u4E66\u67B6")
                ])
              ])
            ])
          ]),
          vue.createElementVNode("div", { class: "divHeight" }),
          vue.createElementVNode("div", { class: "aui-book-list" }, [
            vue.createElementVNode("h5", null, "\u7F51\u53CB\u4EEC\u90FD\u5728\u770B\u7684\u5C0F\u8BF4"),
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-flex",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.showBookDetail && $options.showBookDetail(...args))
            }, [
              vue.createElementVNode("div", { class: "aui-book-img" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookStore/images/book5.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-flex-box" }, [
                vue.createElementVNode("h2", null, [
                  vue.createTextVNode("\u4F5C\u4E1A\u957F\u671F "),
                  vue.createElementVNode("em", null, "9.9\u5206")
                ]),
                vue.createElementVNode("p", null, "\u300A\u6587\u5316\u82E6\u65C5\u300B\u662F\u4E8E\u79CB\u751F\u7684\u7B2C\u4E00\u4E2A\u6563\u6587\u96C6\u6240\u6709\u7684\u4F5C\u54C1\u4E3B\u8981\u5305\u62EC\u4E86\u4FE9\u90E8\u5206\u4E00\u90E8\u5206\u662F\u5386\u53F2\u6587\u5B66"),
                vue.createElementVNode("h3", null, [
                  vue.createElementVNode("i", null, "\u4E8E\u79CB\u751F\u8457"),
                  vue.createTextVNode(),
                  vue.createElementVNode("em", null, "\u52A0\u5165\u4E66\u67B6")
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("footer", { class: "aui-footer aui-footer-fixed" }, [
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item aui-tabBar-item-active"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-loan" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u4E66\u57CE")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-credit" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u5206\u7C7B")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.showBookShelf && $options.showBookShelf(...args))
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-ions" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u4E66\u67B6")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-info" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u6211\u7684")
          ])
        ])
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/Code/novelReading/pages/index/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("section", { class: "aui-flexView" }, [
      vue.createElementVNode("section", { class: "aui-scrollView" }, [
        vue.createElementVNode("div", { class: "aui-flex aui-flex-one" }, [
          vue.createElementVNode("div", { class: "aui-book-img" }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: "/static/book/images/book1.png",
              alt: ""
            })
          ]),
          vue.createElementVNode("div", { class: "aui-flex-box" }, [
            vue.createElementVNode("h1", null, "\u795E\u79D8\u535A\u58EB\xB7\u76D7\u68A6\u8D3C"),
            vue.createElementVNode("h2", null, "\u53F2\u8482\u592B\xB7\u83B1\u6602\u65AF\u7B49"),
            vue.createElementVNode("h3", null, [
              vue.createElementVNode("em", null, "\u5DF2\u5B8C\u7ED3"),
              vue.createTextVNode(" 9\u4E07\u5B57")
            ]),
            vue.createElementVNode("button", null, "\u51FA\u7248\u5C0F\u8BF4")
          ])
        ]),
        vue.createElementVNode("div", { class: "aui-palace aui-palace-one" }, [
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-palace-grid"
          }, [
            vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
              vue.createElementVNode("h1", null, "8988"),
              vue.createElementVNode("h2", null, "\u4EBA\u6C14\u503C")
            ])
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-palace-grid"
          }, [
            vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
              vue.createElementVNode("h1", null, [
                vue.createTextVNode("9.8 "),
                vue.createElementVNode("em", null, "\u5206")
              ]),
              vue.createElementVNode("h2", null, "\u8BC4\u5206")
            ])
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-palace-grid"
          }, [
            vue.createElementVNode("div", { class: "aui-palace-grid-text" }, [
              vue.createElementVNode("h1", null, "1088"),
              vue.createElementVNode("h2", null, "\u5728\u8BFB\u4EBA\u6570")
            ])
          ])
        ]),
        vue.createElementVNode("div", { class: "aui-flex b-line" }, [
          vue.createElementVNode("div", { class: "aui-flex-box" }, [
            vue.createElementVNode("p", null, "\u82F1\u56FD\u79D1\u5E7B\u5C0F\u8BF4\u3002\u8FD9\u662F\u4E00\u4E2A\u7070\u8272\u7684\u4E16\u754C\uFF0C\u73B0\u5B9E\u7684\u5F15\u529B\u65E0\u6BD4\u6C89\u91CD\u3002\u5728\u8FD9\u91CC\uFF0C\u5E0C\u671B\u662F\u72AF\u6CD5\u7684\uFF0C\u521B\u4F5C\u662F\u88AB\u7981\u6B62\u7684\uFF0C\u5C31\u8FDE\u661F\u7403\u7684\u540D\u5B57\u90FD\u6210\u4E86\u4E00\u4E2A\u6BEB\u65E0\u610F\u4E49\u7684\u7F16\u53F7\u3002\u56E0\u4E3A\u5E7B\u60F3\u662F\u5371\u9669\u7684\uFF0C\u5B83\u4F1A\u8BA9\u4EBA\u53D1\u75AF\u3002\u5F53\u535A\u58EB\u4E00-\u884C\u4EBA\u6765\u5230\u8FD9\u91CC\uFF0C\u8FD9\u4E2A\u51B0\u51B7\u987D\u56FA\u7684\u4E16\u754C\u7EC8\u4E8E\u51FA\u73B0\u4E86-\u4E1D\u88C2\u7F1D..."),
            vue.createElementVNode("p", null, "\u53F2\u8482\u592B\u83B1\u6602\u65AF(Steve Lyons)"),
            vue.createElementVNode("p", null, "\u82F1\u56FD\u8457\u540D\u4F5C\u5BB6\uFF0C\u5DF2\u51FA\u7248\u8FD1\u4E8C\u5341\u90E8\u5C0F\u8BF4\uFF0C\u8FD8\u64B0\u5199\u4E86\u591A\u90E8\u5E7F\u64AD\u5267\u548C\u77ED\u7BC7\u6545\u4E8B\u3002\u7B14\u4E0B\u7684\u89D2\u8272\u5206\u522B\u6765\u81EA\u300AX\u6218\u8B66\u300B\u300A\u8718\u86DB\u4FA0\u300B"),
            vue.createElementVNode("p", null, "\u300A\u672A\u6765\u9752\u5E74\u300B\u548C\u300A\u8428\u51E1\u5C14\u4E0E\u65AF\u8482\u5C14\u7684\u65F6\u95F4\u4FEE\u8865\u4E4B\u65C5\u300B\u7B49\u591A\u90E8\u4F5C\u54C1\u3002"),
            vue.createElementVNode("p", null, "\u53F2\u8482\u592B\u4E4B\u524D\u7684\u300A\u795E\u79D8\u535A\u58EB\u300B\u4F5C\u54C1\u5305\u62EC\u5C0F\u8BF4\u300A\u590D\u6742\u96BE\u89E3\u300B\u300A\u5973\u5DEB\u730E\u624B\u300B\u548C\u300A\u626D\u66F2\u4E16\u754C\u300B;\u6709\u58F0\u4E66\u300A\u706B\u795E\u70C8\u7130\u300B\u548C\u300A\u79D1\u5C14\u8FEA\u5179\u300B\u3002\u4ED6\u8FD8\u4E3A\u5B98\u65B9\u300A\u795E\u79D8\u535A\u58EB\u6742\u5FD7\u300B\u64B0\u7A3F\u3002\u76EE\u524D\uFF0C\u4ED6\u4F4F\u5728\u66FC\u5F7B\u65AF\u7279\u9644\u8FD1\u7684...."),
            vue.createElementVNode("span", null, [
              vue.createElementVNode("em", null, "\u70ED\u8840"),
              vue.createElementVNode("em", null, "\u795E\u5947")
            ])
          ])
        ]),
        vue.createElementVNode("div", { class: "aui-flex" }, [
          vue.createElementVNode("div", { class: "aui-flex-box" }, [
            vue.createElementVNode("h4", null, [
              vue.createTextVNode("\u76EE\u5F55 "),
              vue.createElementVNode("em", null, "\u5B8C\u7ED3\u517119\u7AE0")
            ])
          ]),
          vue.createElementVNode("div", { class: "aui-arrow" }, [
            vue.createElementVNode("span", null, "\u5B8C\u7ED3")
          ])
        ]),
        vue.createElementVNode("div", { class: "divHeight" }),
        vue.createElementVNode("div", {
          class: "aui-flex",
          style: { "padding-bottom": "0" }
        }, [
          vue.createElementVNode("div", { class: "aui-flex-box" }, [
            vue.createElementVNode("h5", null, "\u8FD9\u672C\u4E66\u7684\u8BFB\u8005\u90FD\u5728\u770B")
          ])
        ]),
        vue.createElementVNode("div", { class: "aui-list-theme-box" }, [
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-list-item"
          }, [
            vue.createElementVNode("div", { class: "aui-list-theme-img" }, [
              vue.createElementVNode("image", {
                mode: "widthFix",
                src: "/static/book/images/book6.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("div", { class: "aui-list-theme-message" }, [
              vue.createElementVNode("h3", { class: "aui-list-theme-title" }, "\u65F6\u5149\u6DF1\u5904\u7684\u67D4\u8F6F")
            ])
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-list-item"
          }, [
            vue.createElementVNode("div", { class: "aui-list-theme-img" }, [
              vue.createElementVNode("image", {
                mode: "widthFix",
                src: "/static/book/images/book7.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("div", { class: "aui-list-theme-message" }, [
              vue.createElementVNode("h3", { class: "aui-list-theme-title" }, "\u65F6\u5149\u6DF1\u5904\u7684\u67D4\u8F6F")
            ])
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-list-item"
          }, [
            vue.createElementVNode("div", { class: "aui-list-theme-img" }, [
              vue.createElementVNode("image", {
                mode: "widthFix",
                src: "/static/book/images/book8.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("div", { class: "aui-list-theme-message" }, [
              vue.createElementVNode("h3", { class: "aui-list-theme-title" }, "\u65F6\u5149\u6DF1\u5904\u7684\u67D4\u8F6F")
            ])
          ])
        ]),
        vue.createElementVNode("div", { class: "aui-flex aui-flex-three" }, [
          vue.createElementVNode("div", { class: "aui-flex-box" }, [
            vue.createElementVNode("h1", null, "\u7248\u6743\u4FE1\u606F"),
            vue.createElementVNode("h2", null, '\u672C\u4E66\u7684\u6570\u5B57\u7248\u6743\u7531\u516B\u5149\u5206\u6587\u5316\u63D0\u4F9B\u5E76\u6388\u6743\u53D1\u884C\uFF0C\u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u8BF7\u901A\u8FC7"\u6211\u7684-\u610F\u89C1\u53CD\u9988"\u544A\u77E5\u6211\u4EEC\u3002'),
            vue.createElementVNode("p", null, "-\u6211\u5DF2\u7ECF\u5230\u5E95\u4E86-")
          ])
        ])
      ]),
      vue.createElementVNode("footer", { class: "aui-footer aui-footer-fixed" }, [
        vue.createElementVNode("a", {
          href: "javascript:;",
          class: "aui-tabBar-item"
        }, [
          vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u52A0\u5165\u4E66\u67B6")
        ]),
        vue.createElementVNode("a", {
          href: "javascript:;",
          class: "aui-tabBar-item aui-tabBar-item-active"
        }, [
          vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u514D\u8D39\u9605\u8BFB")
        ]),
        vue.createElementVNode("a", {
          href: "javascript:;",
          class: "aui-tabBar-item"
        }, [
          vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u7F13\u5B58")
        ])
      ])
    ]);
  }
  var PagesBookBook = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/Code/novelReading/pages/book/book.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {
      showBookDetail() {
        uni.navigateTo({
          url: "/pages/book/book"
        });
      },
      showBookStore() {
        uni.navigateTo({
          url: "/pages/index/index"
        });
      },
      showBookShelf() {
        uni.navigateTo({
          url: "/pages/bookshelf/bookshelf"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("section", { class: "aui-flexView" }, [
        vue.createElementVNode("header", { class: "aui-navBar aui-navBar-fixed" }, [
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-navBar-item"
          }, " \u6211\u7684\u4E66\u67B6 "),
          vue.createElementVNode("div", { class: "aui-center" }, [
            vue.createElementVNode("span", { class: "aui-center-title" })
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-navBar-item"
          }, [
            vue.createElementVNode("i", { class: "icon icon-search" }),
            vue.createElementVNode("i", { class: "icon icon-more" })
          ])
        ]),
        vue.createElementVNode("section", { class: "aui-scrollView" }, [
          vue.createElementVNode("div", { class: "aui-call-box" }, [
            vue.createElementVNode("h1", null, "\u6700\u8FD1\u9605\u8BFB\u7684\u4E66\u90FD\u4F1A\u653E\u5728\u8FD9\u91CC")
          ]),
          vue.createElementVNode("div", { class: "aui-list-theme" }, [
            vue.createElementVNode("a", {
              href: "javascript:;",
              class: "aui-list-theme-item"
            }, [
              vue.createElementVNode("div", { class: "aui-list-img" }, [
                vue.createElementVNode("image", {
                  mode: "widthFix",
                  src: "/static/bookshelf/images/call-book-01.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("div", { class: "aui-list-title" }, [
                vue.createElementVNode("h3", null, "\u6843\u82B1\u6751\u7684\u533B\u751F"),
                vue.createElementVNode("div", { class: "aui-flex" }, [
                  vue.createElementVNode("div", { class: "aui-flex-box" }, [
                    vue.createElementVNode("span", null, "\u8FDE\u8F7D")
                  ]),
                  vue.createElementVNode("div", { class: "aui-right-text" }, [
                    vue.createElementVNode("span", null, "\u672A\u8BFB")
                  ])
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("footer", { class: "aui-footer aui-footer-fixed" }, [
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.showBookStore && $options.showBookStore(...args))
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-loan" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u4E66\u57CE")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-credit" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u5206\u7C7B")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item aui-tabBar-item-active"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-ions" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u4E66\u67B6")
          ]),
          vue.createElementVNode("a", {
            href: "javascript:;",
            class: "aui-tabBar-item"
          }, [
            vue.createElementVNode("span", { class: "aui-tabBar-item-icon" }, [
              vue.createElementVNode("i", { class: "icon icon-info" })
            ]),
            vue.createElementVNode("span", { class: "aui-tabBar-item-text" }, "\u6211\u7684")
          ])
        ])
      ])
    ]);
  }
  var PagesBookshelfBookshelf = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/Code/novelReading/pages/bookshelf/bookshelf.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/book/book", PagesBookBook);
  __definePage("pages/bookshelf/bookshelf", PagesBookshelfBookshelf);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/Code/novelReading/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
