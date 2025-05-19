var e,n;"function"==typeof(e=globalThis.define)&&(n=e,e=null),function(n,t,x,i,h){var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof c[i]&&c[i],o=a.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(e,t){if(!o[e]){if(!n[e]){var x="function"==typeof c[i]&&c[i];if(!t&&x)return x(e,!0);if(a)return a(e,!0);if(d&&"string"==typeof e)return d(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}l.resolve=function(t){var x=n[e][1][t];return null!=x?x:t},l.cache={};var r=o[e]=new p.Module(e);n[e][0].call(r.exports,l,r,r.exports,this)}return o[e].exports;function l(e){var n=l.resolve(e);return!1===n?{}:p(n)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=n,p.cache=o,p.parent=a,p.register=function(e,t){n[e]=[function(e,n){n.exports=t},{}]},Object.defineProperty(p,"root",{get:function(){return c[i]}}),c[i]=p;for(var r=0;r<t.length;r++)p(t[r]);if(x){var l=p(x);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd?e(function(){return l}):h&&(this[h]=l)}}({ekFx5:[function(e,n,t){var x=e("@parcel/transformer-js/src/esmodule-helpers.js");x.defineInteropFlag(t),x.export(t,"default",()=>i);var i=`{
  "connect_wallet": {
    "label": "K\u1ebft n\u1ed1i V\xed",
    "wrong_network": {
      "label": "M\u1ea1ng sai"
    }
  },
  "intro": {
    "title": "V\xed l\xe0 g\xec?",
    "description": "M\u1ed9t chi\u1ebfc v\xed \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 g\u1eedi, nh\u1eadn, l\u01b0u tr\u1eef v\xe0 hi\u1ec3n th\u1ecb t\xe0i s\u1ea3n s\u1ed1. N\xf3 c\u0169ng l\xe0 m\u1ed9t c\xe1ch m\u1edbi \u0111\u1ec3 \u0111\u0103ng nh\u1eadp, m\xe0 kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n v\xe0 m\u1eadt kh\u1ea9u m\u1edbi tr\xean m\u1ed7i trang web.",
    "digital_asset": {
      "title": "Ng\xf4i nh\xe0 cho t\xe0i s\u1ea3n s\u1ed1 c\u1ee7a b\u1ea1n",
      "description": "V\xed \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 g\u1eedi, nh\u1eadn, l\u01b0u tr\u1eef v\xe0 hi\u1ec3n th\u1ecb c\xe1c t\xe0i s\u1ea3n s\u1ed1 nh\u01b0 Ethereum v\xe0 NFT."
    },
    "login": {
      "title": "M\u1ed9t c\xe1ch m\u1edbi \u0111\u1ec3 \u0111\u0103ng nh\u1eadp",
      "description": "Thay v\xec t\u1ea1o t\xe0i kho\u1ea3n v\xe0 m\u1eadt kh\u1ea9u m\u1edbi tr\xean m\u1ed7i trang web, ch\u1ec9 c\u1ea7n k\u1ebft n\u1ed1i v\xed c\u1ee7a b\u1ea1n."
    },
    "get": {
      "label": "L\u1ea5y m\u1ed9t chi\u1ebfc v\xed"
    },
    "learn_more": {
      "label": "T\xecm hi\u1ec3u th\xeam"
    }
  },
  "sign_in": {
    "label": "X\xe1c minh t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n",
    "description": "\u0110\u1ec3 ho\xe0n th\xe0nh k\u1ebft n\u1ed1i, b\u1ea1n ph\u1ea3i k\xfd m\u1ed9t th\xf4ng \u0111i\u1ec7p trong v\xed c\u1ee7a b\u1ea1n \u0111\u1ec3 x\xe1c minh r\u1eb1ng b\u1ea1n l\xe0 ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a t\xe0i kho\u1ea3n n\xe0y.",
    "message": {
      "send": "K\xfd th\xf4ng \u0111i\u1ec7p",
      "preparing": "\u0110ang chu\u1ea9n b\u1ecb th\xf4ng \u0111i\u1ec7p...",
      "cancel": "H\u1ee7y b\u1ecf",
      "preparing_error": "L\u1ed7i chu\u1ea9n b\u1ecb th\xf4ng \u0111i\u1ec7p, vui l\xf2ng th\u1eed l\u1ea1i!"
    },
    "signature": {
      "waiting": "\u0110ang ch\u1edd ch\u1eef k\xfd...",
      "verifying": "\u0110ang x\xe1c minh ch\u1eef k\xfd...",
      "signing_error": "L\u1ed7i k\xfd th\xf4ng \u0111i\u1ec7p, vui l\xf2ng th\u1eed l\u1ea1i!",
      "verifying_error": "L\u1ed7i x\xe1c minh ch\u1eef k\xfd, vui l\xf2ng th\u1eed l\u1ea1i!",
      "oops_error": "\xd4i, c\xf3 g\xec \u0111\xf3 kh\xf4ng \u1ed5n!"
    }
  },
  "connect": {
    "label": "K\u1ebft n\u1ed1i",
    "title": "K\u1ebft n\u1ed1i m\u1ed9t chi\u1ebfc v\xed",
    "new_to_ethereum": {
      "description": "M\u1edbi s\u1eed d\u1ee5ng v\xed Ethereum?",
      "learn_more": {
        "label": "T\xecm hi\u1ec3u th\xeam"
      }
    },
    "learn_more": {
      "label": "T\xecm hi\u1ec3u th\xeam"
    },
    "recent": "G\u1ea7n \u0111\xe2y",
    "status": {
      "opening": "\u0110ang m\u1edf %{wallet}...",
      "connecting": "\u0110ang k\u1ebft n\u1ed1i",
      "connect_mobile": "Ti\u1ebfp t\u1ee5c trong %{wallet}",
      "not_installed": "%{wallet} ch\u01b0a \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t",
      "not_available": "%{wallet} kh\xf4ng kh\u1ea3 d\u1ee5ng",
      "confirm": "X\xe1c nh\u1eadn k\u1ebft n\u1ed1i trong ti\u1ec7n \xedch m\u1edf r\u1ed9ng",
      "confirm_mobile": "Ch\u1ea5p nh\u1eadn y\xeau c\u1ea7u k\u1ebft n\u1ed1i trong v\xed"
    },
    "secondary_action": {
      "get": {
        "description": "Kh\xf4ng c\xf3 %{wallet}?",
        "label": "L\u1ea4Y"
      },
      "install": {
        "label": "C\xc0I \u0110\u1eb6T"
      },
      "retry": {
        "label": "TH\u1eec L\u1ea0I"
      }
    },
    "walletconnect": {
      "description": {
        "full": "C\u1ea7n modal WalletConnect ch\xednh th\u1ee9c?",
        "compact": "C\u1ea7n modal WalletConnect?"
      },
      "open": {
        "label": "M\u1ede"
      }
    }
  },
  "connect_scan": {
    "title": "Qu\xe9t b\u1eb1ng %{wallet}",
    "fallback_title": "Qu\xe9t b\u1eb1ng \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n"
  },
  "connector_group": {
    "installed": "\u0110\xe3 c\xe0i \u0111\u1eb7t",
    "recommended": "\u0110\u1ec1 xu\u1ea5t",
    "other": "Kh\xe1c",
    "popular": "Ph\u1ed5 bi\u1ebfn",
    "more": "Th\xeam",
    "others": "Kh\xe1c"
  },
  "get": {
    "title": "L\u1ea5y m\u1ed9t chi\u1ebfc v\xed",
    "action": {
      "label": "L\u1ea4Y"
    },
    "mobile": {
      "description": "V\xed di \u0111\u1ed9ng"
    },
    "extension": {
      "description": "Ti\u1ec7n \xedch m\u1edf r\u1ed9ng tr\xecnh duy\u1ec7t"
    },
    "mobile_and_extension": {
      "description": "V\xed di \u0111\u1ed9ng v\xe0 Ti\u1ec7n \xedch m\u1edf r\u1ed9ng"
    },
    "mobile_and_desktop": {
      "description": "V\xed di \u0111\u1ed9ng v\xe0 m\xe1y t\xednh \u0111\u1ec3 b\xe0n"
    },
    "looking_for": {
      "title": "Kh\xf4ng ph\u1ea3i c\xe1i b\u1ea1n \u0111ang t\xecm ki\u1ebfm?",
      "mobile": {
        "description": "Ch\u1ecdn m\u1ed9t chi\u1ebfc v\xed tr\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u v\u1edbi m\u1ed9t nh\xe0 cung c\u1ea5p v\xed kh\xe1c."
      },
      "desktop": {
        "compact_description": "Ch\u1ecdn m\u1ed9t chi\u1ebfc v\xed tr\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u v\u1edbi m\u1ed9t nh\xe0 cung c\u1ea5p v\xed kh\xe1c.",
        "wide_description": "Ch\u1ecdn m\u1ed9t chi\u1ebfc v\xed b\xean tr\xe1i \u0111\u1ec3 b\u1eaft \u0111\u1ea7u v\u1edbi m\u1ed9t nh\xe0 cung c\u1ea5p v\xed kh\xe1c."
      }
    }
  },
  "get_options": {
    "title": "B\u1eaft \u0111\u1ea7u v\u1edbi %{wallet}",
    "short_title": "L\u1ea5y %{wallet}",
    "mobile": {
      "title": "%{wallet} cho di \u0111\u1ed9ng",
      "description": "S\u1eed d\u1ee5ng v\xed di \u0111\u1ed9ng \u0111\u1ec3 kh\xe1m ph\xe1 th\u1ebf gi\u1edbi c\u1ee7a Ethereum.",
      "download": {
        "label": "T\u1ea3i \u1ee9ng d\u1ee5ng"
      }
    },
    "extension": {
      "title": "%{wallet} cho %{browser}",
      "description": "Truy c\u1eadp v\xed c\u1ee7a b\u1ea1n ngay t\u1eeb tr\xecnh duy\u1ec7t web y\xeau th\xedch c\u1ee7a b\u1ea1n.",
      "download": {
        "label": "Th\xeam v\xe0o %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} cho %{platform}",
      "description": "Truy c\u1eadp v\xed c\u1ee7a b\u1ea1n natively t\u1eeb m\xe1y t\xednh \u0111\u1ec3 b\xe0n m\u1ea1nh m\u1ebd c\u1ee7a b\u1ea1n.",
      "download": {
        "label": "Th\xeam v\xe0o %{platform}"
      }
    }
  },
  "get_mobile": {
    "title": "C\xe0i \u0111\u1eb7t %{wallet}",
    "description": "Qu\xe9t b\u1eb1ng \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n \u0111\u1ec3 t\u1ea3i v\u1ec1 tr\xean iOS ho\u1eb7c Android",
    "continue": {
      "label": "Ti\u1ebfp t\u1ee5c"
    }
  },
  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "K\u1ebft n\u1ed1i"
      },
      "learn_more": {
        "label": "T\xecm hi\u1ec3u th\xeam"
      }
    },
    "extension": {
      "refresh": {
        "label": "L\xe0m m\u1edbi"
      },
      "learn_more": {
        "label": "T\xecm hi\u1ec3u th\xeam"
      }
    },
    "desktop": {
      "connect": {
        "label": "K\u1ebft n\u1ed1i"
      },
      "learn_more": {
        "label": "T\xecm hi\u1ec3u th\xeam"
      }
    }
  },
  "chains": {
    "title": "Chuy\u1ec3n \u0111\u1ed5i M\u1ea1ng",
    "wrong_network": "Ph\xe1t hi\u1ec7n m\u1ea1ng sai, chuy\u1ec3n \u0111\u1ed5i ho\u1eb7c ng\u1eaft k\u1ebft n\u1ed1i \u0111\u1ec3 ti\u1ebfp t\u1ee5c.",
    "confirm": "X\xe1c nh\u1eadn trong V\xed",
    "switching_not_supported": "V\xed c\u1ee7a b\u1ea1n kh\xf4ng h\u1ed7 tr\u1ee3 chuy\u1ec3n \u0111\u1ed5i m\u1ea1ng t\u1eeb %{appName}. Th\u1eed chuy\u1ec3n \u0111\u1ed5i m\u1ea1ng t\u1eeb trong v\xed c\u1ee7a b\u1ea1n thay v\xec.",
    "switching_not_supported_fallback": "V\xed c\u1ee7a b\u1ea1n kh\xf4ng h\u1ed7 tr\u1ee3 chuy\u1ec3n \u0111\u1ed5i m\u1ea1ng t\u1eeb \u1ee9ng d\u1ee5ng n\xe0y. Th\u1eed chuy\u1ec3n \u0111\u1ed5i m\u1ea1ng t\u1eeb trong v\xed c\u1ee7a b\u1ea1n thay v\xec.",
    "disconnect": "Ng\u1eaft k\u1ebft n\u1ed1i",
    "connected": "\u0110\xe3 k\u1ebft n\u1ed1i"
  },
  "profile": {
    "disconnect": {
      "label": "Ng\u1eaft k\u1ebft n\u1ed1i"
    },
    "copy_address": {
      "label": "Sao ch\xe9p \u0110\u1ecba ch\u1ec9",
      "copied": "\u0110\xe3 sao ch\xe9p!"
    },
    "explorer": {
      "label": "Xem th\xeam tr\xean explorer"
    },
    "transactions": {
      "description": "C\xe1c giao d\u1ecbch %{appName} s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\xe2y...",
      "description_fallback": "C\xe1c giao d\u1ecbch c\u1ee7a b\u1ea1n s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\xe2y...",
      "recent": {
        "title": "Giao d\u1ecbch g\u1ea7n \u0111\xe2y"
      },
      "clear": {
        "label": "X\xf3a t\u1ea5t c\u1ea3"
      }
    }
  },
  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "\u0110\u1eb7t Argent l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Argent"
        },
        "step2": {
          "description": "T\u1ea1o v\xed v\xe0 t\xean ng\u01b0\u1eddi d\xf9ng, ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat Qu\xe9t QR"
        }
      }
    },
    "berasig": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng BeraSig",
          "description": "Ch\xfang t\xf4i \u0111\u1ec1 xu\u1ea5t ghim BeraSig v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp v\xed d\u1ec5 d\xe0ng h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o m\u1ed9t V\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "best": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Best Wallet",
          "description": "Th\xeam Best Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t v\xed Bifrost l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Bifrost Wallet"
        },
        "step2": {
          "description": "T\u1ea1o ho\u1eb7c nh\u1eadp v\xed b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c c\u1ee7a b\u1ea1n.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      }
    },
    "bitget": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t v\xed Bitget l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Bitget Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      },
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim v\xed Bitget v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Bitget Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "bitski": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Bitski v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Bitski"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Bitverse Wallet",
          "description": "Th\xeam Bitverse Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "bloom": {
      "desktop": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Bloom Wallet",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t Bloom Wallet l\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "description": "T\u1ea1o ho\u1eb7c nh\u1eadp v\xed b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c c\u1ee7a b\u1ea1n.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n c\xf3 v\xed, h\xe3y nh\u1ea5p v\xe0o K\u1ebft n\u1ed1i \u0111\u1ec3 k\u1ebft n\u1ed1i qua Bloom. M\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i trong \u1ee9ng d\u1ee5ng s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n x\xe1c nh\u1eadn k\u1ebft n\u1ed1i.",
          "title": "Nh\u1ea5n v\xe0o K\u1ebft n\u1ed1i"
        }
      }
    },
    "bybit": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Bybit v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Bybit"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      },
      "extension": {
        "step1": {
          "description": "Nh\u1ea5p v\xe0o g\xf3c tr\xean b\xean ph\u1ea3i c\u1ee7a tr\xecnh duy\u1ec7t v\xe0 ghim Bybit Wallet \u0111\u1ec3 truy c\u1eadp d\u1ec5 d\xe0ng.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Bybit Wallet"
        },
        "step2": {
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n thi\u1ebft l\u1eadp Bybit Wallet, nh\u1ea5p v\xe0o b\xean d\u01b0\u1edbi \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "binance": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Binance v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Binance"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat WalletConnect"
        }
      }
    },
    "coin98": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t v\xed Coin98 l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Coin98 Wallet"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Nh\u1ea5p v\xe0o g\xf3c tr\xean b\xean ph\u1ea3i c\u1ee7a tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n v\xe0 ghim v\xed Coin98 \u0111\u1ec3 truy c\u1eadp d\u1ec5 d\xe0ng.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Coin98 Wallet"
        },
        "step2": {
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed Coin98, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t v\xed Coinbase l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Coinbase Wallet"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111\xe1m m\xe2y.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      },
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim v\xed Coinbase v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Coinbase Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "compass": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Compass Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Compass Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "core": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Core l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Core"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Core v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Core"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "fox": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean th\xeam FoxWallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng FoxWallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      }
    },
    "frontier": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean th\xeam Frontier Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Frontier Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      },
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Frontier Wallet v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Frontier Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "im_token": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng imToken",
          "description": "Th\xeam \u1ee9ng d\u1ee5ng imToken v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng M\xe1y qu\xe9t \u1edf g\xf3c tr\xean c\xf9ng b\xean ph\u1ea3i",
          "description": "Ch\u1ecdn K\u1ebft n\u1ed1i m\u1edbi, sau \u0111\xf3 qu\xe9t m\xe3 QR v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "iopay": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t ioPay v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng ioPay"
        },
        "step2": {
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat WalletConnect"
        }
      }
    },
    "kaikas": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Kaikas v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Kaikas"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Kaikas",
          "description": "\u0110\u1eb7t \u1ee9ng d\u1ee5ng Kaikas v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng M\xe1y qu\xe9t \u1edf g\xf3c tr\xean c\xf9ng b\xean ph\u1ea3i",
          "description": "Ch\u1ecdn K\u1ebft n\u1ed1i m\u1edbi, sau \u0111\xf3 qu\xe9t m\xe3 QR v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "kaia": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Kaia v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Kaia"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Kaia",
          "description": "\u0110\u1eb7t \u1ee9ng d\u1ee5ng Kaia l\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng M\xe1y qu\xe9t \u1edf g\xf3c tr\xean c\xf9ng b\xean ph\u1ea3i",
          "description": "Ch\u1ecdn K\u1ebft n\u1ed1i m\u1edbi, sau \u0111\xf3 qu\xe9t m\xe3 QR v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "kraken": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Kraken Wallet",
          "description": "Th\xeam Kraken Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "kresus": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Kresus Wallet",
          "description": "Th\xeam Kresus Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "magicEden": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Magic Eden",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Magic Eden v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed c\u1ee7a b\u1ea1n d\u1ec5 d\xe0ng h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn sao l\u01b0u v\xed c\u1ee7a b\u1ea1n b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. Kh\xf4ng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "metamask": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng MetaMask",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean th\xeam MetaMask v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng MetaMask",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim MetaMask v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "nestwallet": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng NestWallet",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim NestWallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "okx": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng OKX Wallet",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean th\xeam OKX Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng OKX Wallet",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim OKX Wallet v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "omni": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Omni",
          "description": "Th\xeam Omni v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "1inch": {
      "qr_code": {
        "step1": {
          "description": "\u0110\u1eb7t 1inch Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng 1inch Wallet"
        },
        "step2": {
          "description": "T\u1ea1o v\xed v\xe0 t\xean ng\u01b0\u1eddi d\xf9ng, ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat Qu\xe9t QR"
        }
      }
    },
    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng TokenPocket",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean th\xeam TokenPocket v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng TokenPocket",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim TokenPocket v\xe0o thanh t\xe1c v\u1ee5 c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "trust": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Trust Wallet",
          "description": "Th\xeam Trust Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o WalletConnect trong C\xe0i \u0111\u1eb7t",
          "description": "Ch\u1ecdn K\u1ebft n\u1ed1i m\u1edbi, sau \u0111\xf3 qu\xe9t m\xe3 QR v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Trust Wallet",
          "description": "Nh\u1ea5p v\xe0o g\xf3c tr\xean c\xf9ng b\xean ph\u1ea3i c\u1ee7a tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n v\xe0 ghim Trust Wallet \u0111\u1ec3 d\u1ec5 d\xe0ng truy c\u1eadp."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "Sau khi b\u1ea1n thi\u1ebft l\u1eadp Trust Wallet, nh\u1ea5p v\xe0o b\xean d\u01b0\u1edbi \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Uniswap",
          "description": "Th\xeam Uniswap Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "zerion": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Zerion",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Zerion tr\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Zerion",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Zerion v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Rainbow",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Rainbow tr\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "B\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng t\xednh n\u0103ng sao l\u01b0u tr\xean \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ch\xfang t\xf4i."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      }
    },
    "enkrypt": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Enkrypt Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Enkrypt Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "frame": {
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Frame v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n.",
          "title": "C\xe0i \u0111\u1eb7t Frame v\xe0 ti\u1ec7n \xedch m\u1edf r\u1ed9ng k\xe8m theo"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "one_key": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng OneKey Wallet",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim OneKey Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng ParaSwap",
          "description": "Th\xeam ParaSwap Wallet v\xe0o m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "phantom": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Phantom",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Phantom v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed d\u1ec5 d\xe0ng h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn sao l\u01b0u v\xed c\u1ee7a b\u1ea1n b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. Kh\xf4ng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "rabby": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Rabby",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Rabby v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "ronin": {
      "qr_code": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean \u0111\u1eb7t Ronin Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n.",
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Ronin Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh.",
          "title": "Nh\u1ea5n n\xfat qu\xe9t"
        }
      },
      "extension": {
        "step1": {
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Ronin Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n.",
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Ronin Wallet"
        },
        "step2": {
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai.",
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed"
        },
        "step3": {
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng.",
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n"
        }
      }
    },
    "ramper": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Ramper",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Ramper v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed c\u1ee7a b\u1ea1n d\u1ec5 d\xe0ng h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o m\u1ed9t V\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "safeheron": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Core",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Safeheron v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "taho": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Taho",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Taho v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "wigwam": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Wigwam",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Wigwam v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed c\u1ee7a b\u1ea1n nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "talisman": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Talisman",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Talisman v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp m\u1ed9t Ethereum Wallet",
          "description": "H\xe3y ch\u1eafc ch\u1eafn sao l\u01b0u v\xed c\u1ee7a b\u1ea1n b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. Kh\xf4ng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "xdefi": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng XDEFI Wallet",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim XDEFI Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "zeal": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Zeal",
          "description": "Th\xeam Zeal Wallet v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n v\xe0o v\xed c\u1ee7a b\u1ea1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR v\xe0 qu\xe9t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng QR tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n, qu\xe9t m\xe3 v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      },
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Zeal",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Zeal v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "safepal": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng SafePal Wallet",
          "description": "Nh\u1ea5p v\xe0o ph\xeda tr\xean b\xean ph\u1ea3i tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n v\xe0 ghim SafePal Wallet \u0111\u1ec3 truy c\u1eadp d\u1ec5 d\xe0ng."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "Sau khi c\xe0i \u0111\u1eb7t SafePal Wallet, b\u1ea5m v\xe0o b\xean d\u01b0\u1edbi \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng SafePal Wallet",
          "description": "\u0110\u1eb7t SafePal Wallet tr\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp v\xed nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o WalletConnect trong C\xe0i \u0111\u1eb7t",
          "description": "Ch\u1ecdn K\u1ebft n\u1ed1i m\u1edbi, sau \u0111\xf3 qu\xe9t m\xe3 QR v\xe0 x\xe1c nh\u1eadn nh\u1eafc nh\u1edf \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "desig": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng Desig",
          "description": "Ch\xfang t\xf4i khuy\xean b\u1ea1n n\xean ghim Desig v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed d\u1ec5 d\xe0ng h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o m\u1ed9t V\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      }
    },
    "subwallet": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng SubWallet",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb ghim SubWallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed c\u1ee7a b\u1ea1n nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn sao l\u01b0u v\xed c\u1ee7a b\u1ea1n b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. Kh\xf4ng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng SubWallet",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t SubWallet l\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      }
    },
    "clv": {
      "extension": {
        "step1": {
          "title": "C\xe0i \u0111\u1eb7t ti\u1ec7n \xedch m\u1edf r\u1ed9ng CLV Wallet",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb ghim CLV Wallet v\xe0o thanh t\xe1c v\u1ee5 \u0111\u1ec3 truy c\u1eadp v\xed c\u1ee7a b\u1ea1n nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "L\xe0m m\u1edbi tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n",
          "description": "M\u1ed9t khi b\u1ea1n thi\u1ebft l\u1eadp xong v\xed c\u1ee7a m\xecnh, nh\u1ea5p v\xe0o d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi tr\xecnh duy\u1ec7t v\xe0 t\u1ea3i l\u1ea1i ti\u1ec7n \xedch m\u1edf r\u1ed9ng."
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng CLV Wallet",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t CLV Wallet l\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c Nh\u1eadp v\xed",
          "description": "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng b\u1ea1n \u0111\xe3 sao l\u01b0u v\xed c\u1ee7a m\xecnh b\u1eb1ng ph\u01b0\u01a1ng ph\xe1p an to\xe0n. \u0110\u1eebng bao gi\u1edd chia s\u1ebb c\u1ee5m t\u1eeb b\xed m\u1eadt c\u1ee7a b\u1ea1n v\u1edbi b\u1ea5t k\u1ef3 ai."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      }
    },
    "okto": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Okto",
          "description": "Th\xeam Okto v\xe0o m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh ch\xf3ng"
        },
        "step2": {
          "title": "T\u1ea1o v\xed MPC",
          "description": "T\u1ea1o t\xe0i kho\u1ea3n v\xe0 t\u1ea1o v\xed"
        },
        "step3": {
          "title": "Nh\u1ea5n v\xe0o WalletConnect trong C\xe0i \u0111\u1eb7t",
          "description": "Nh\u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng Qu\xe9t m\xe3 QR \u1edf tr\xean c\xf9ng b\xean ph\u1ea3i v\xe0 x\xe1c nh\u1eadn l\u1eddi nh\u1eafc \u0111\u1ec3 k\u1ebft n\u1ed1i."
        }
      }
    },
    "ledger": {
      "desktop": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Ledger Live",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t Ledger Live l\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "Thi\u1ebft l\u1eadp Ledger c\u1ee7a b\u1ea1n",
          "description": "Thi\u1ebft l\u1eadp m\u1ed9t Ledger m\u1edbi ho\u1eb7c k\u1ebft n\u1ed1i v\u1edbi m\u1ed9t c\xe1i hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "K\u1ebft n\u1ed1i",
          "description": "M\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      },
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Ledger Live",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t Ledger Live l\xean m\xe0n h\xecnh ch\xednh \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "Thi\u1ebft l\u1eadp Ledger c\u1ee7a b\u1ea1n",
          "description": "B\u1ea1n c\xf3 th\u1ec3 \u0111\u1ed3ng b\u1ed9 h\xf3a v\u1edbi \u1ee9ng d\u1ee5ng m\xe1y t\xednh \u0111\u1ec3 b\xe0n ho\u1eb7c k\u1ebft n\u1ed1i Ledger c\u1ee7a b\u1ea1n."
        },
        "step3": {
          "title": "Qu\xe9t m\xe3",
          "description": "Nh\u1ea5n v\xe0o WalletConnect sau \u0111\xf3 Chuy\u1ec3n sang M\xe1y qu\xe9t. Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      }
    },
    "valora": {
      "qr_code": {
        "step1": {
          "title": "M\u1edf \u1ee9ng d\u1ee5ng Valora",
          "description": "Ch\xfang t\xf4i khuy\u1ebfn ngh\u1ecb \u0111\u1eb7t Valora tr\xean m\xe0n h\xecnh ch\xednh c\u1ee7a b\u1ea1n \u0111\u1ec3 truy c\u1eadp nhanh h\u01a1n."
        },
        "step2": {
          "title": "T\u1ea1o ho\u1eb7c nh\u1eadp v\xed",
          "description": "T\u1ea1o v\xed m\u1edbi ho\u1eb7c nh\u1eadp v\xed hi\u1ec7n c\xf3."
        },
        "step3": {
          "title": "Nh\u1ea5n n\xfat qu\xe9t",
          "description": "Sau khi b\u1ea1n qu\xe9t, m\u1ed9t l\u1eddi nh\u1eafc k\u1ebft n\u1ed1i s\u1ebd xu\u1ea5t hi\u1ec7n \u0111\u1ec3 b\u1ea1n k\u1ebft n\u1ed1i v\xed c\u1ee7a m\xecnh."
        }
      }
    }
  }
}
`},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})}),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},[],null,"parcelRequireb5b4"),globalThis.define=n;