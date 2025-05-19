var e,i;"function"==typeof(e=globalThis.define)&&(i=e,e=null),function(i,n,t,r,l){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[r]&&s[r],d=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function h(e,n){if(!d[e]){if(!i[e]){var t="function"==typeof s[r]&&s[r];if(!n&&t)return t(e,!0);if(a)return a(e,!0);if(u&&"string"==typeof e)return u(e);var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(n){var t=i[e][1][n];return null!=t?t:n},c.cache={};var o=d[e]=new h.Module(e);i[e][0].call(o.exports,c,o,o.exports,this)}return d[e].exports;function c(e){var i=c.resolve(e);return!1===i?{}:h(i)}}h.isParcelRequire=!0,h.Module=function(e){this.id=e,this.bundle=h,this.exports={}},h.modules=i,h.cache=d,h.parent=a,h.register=function(e,n){i[e]=[function(e,i){i.exports=n},{}]},Object.defineProperty(h,"root",{get:function(){return s[r]}}),s[r]=h;for(var o=0;o<n.length;o++)h(n[o]);if(t){var c=h(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof e&&e.amd?e(function(){return c}):l&&(this[l]=c)}}({"6PeqL":[function(e,i,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"default",()=>r);var r=`{
  "connect_wallet": {
    "label": "Wallet verbinden",
    "wrong_network": {
      "label": "Falsches Netzwerk"
    }
  },
  "intro": {
    "title": "Was ist ein Wallet?",
    "description": "Ein Wallet wird verwendet, um digitale Assets zu senden, empfangen, speichern und anzeigen. Es ist auch eine neue M\xf6glichkeit, sich anzumelden, ohne auf jeder Website neue Konten und Passw\xf6rter erstellen zu m\xfcssen.",
    "digital_asset": {
      "title": "Ein Zuhause f\xfcr Ihre digitalen Verm\xf6genswerte",
      "description": "Wallets werden verwendet, um digitale Assets wie Ethereum und NFTs zu senden, empfangen, speichern und anzeigen."
    },
    "login": {
      "title": "Eine neue M\xf6glichkeit, sich anzumelden",
      "description": "Anstatt auf jeder Website neue Konten und Passw\xf6rter zu erstellen, verbinden Sie einfach Ihr Wallet."
    },
    "get": {
      "label": "Ein Wallet holen"
    },
    "learn_more": {
      "label": "Mehr erfahren"
    }
  },
  "sign_in": {
    "label": "Verifizieren Sie Ihr Konto",
    "description": "Um die Verbindung abzuschlie\xdfen, m\xfcssen Sie eine Nachricht in Ihrem Wallet signieren, um zu verifizieren, dass Sie der Inhaber dieses Kontos sind.",
    "message": {
      "send": "Nachricht signieren",
      "preparing": "Nachricht wird vorbereitet...",
      "cancel": "Abbrechen",
      "preparing_error": "Fehler beim Vorbereiten der Nachricht, bitte erneut versuchen!"
    },
    "signature": {
      "waiting": "Warten auf Signatur...",
      "verifying": "Signatur wird \xfcberpr\xfcft...",
      "signing_error": "Fehler beim Signieren der Nachricht, bitte erneut versuchen!",
      "verifying_error": "Fehler bei der \xdcberpr\xfcfung der Signatur, bitte erneut versuchen!",
      "oops_error": "Oops, etwas ist schiefgelaufen!"
    }
  },
  "connect": {
    "label": "Verbinden",
    "title": "Ein Wallet verbinden",
    "new_to_ethereum": {
      "description": "Neu bei Ethereum-Wallets?",
      "learn_more": {
        "label": "Mehr erfahren"
      }
    },
    "learn_more": {
      "label": "Mehr erfahren"
    },
    "recent": "Zuletzt",
    "status": {
      "opening": "%{wallet} wird ge\xf6ffnet...",
      "connecting": "Verbinden",
      "connect_mobile": "Fahren Sie in %{wallet} fort",
      "not_installed": "%{wallet} ist nicht installiert",
      "not_available": "%{wallet} ist nicht verf\xfcgbar",
      "confirm": "Best\xe4tigen Sie die Verbindung in der Erweiterung",
      "confirm_mobile": "Akzeptieren Sie die Verbindungsanfrage im Wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Haben Sie kein %{wallet}?",
        "label": "HOLEN"
      },
      "install": {
        "label": "INSTALLIEREN"
      },
      "retry": {
        "label": "ERNEUT VERSUCHEN"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Ben\xf6tigen Sie das offizielle WalletConnect-Modul?",
        "compact": "Ben\xf6tigen Sie das WalletConnect-Modul?"
      },
      "open": {
        "label": "\xd6FFNEN"
      }
    }
  },
  "connect_scan": {
    "title": "Mit %{wallet} scannen",
    "fallback_title": "Mit Ihrem Telefon scannen"
  },
  "connector_group": {
    "installed": "Installiert",
    "recommended": "Empfohlen",
    "other": "Andere",
    "popular": "Beliebt",
    "more": "Mehr",
    "others": "Andere"
  },
  "get": {
    "title": "Ein Wallet holen",
    "action": {
      "label": "HOLEN"
    },
    "mobile": {
      "description": "Mobiles Wallet"
    },
    "extension": {
      "description": "Browser-Erweiterung"
    },
    "mobile_and_extension": {
      "description": "Mobiles Wallet und Erweiterung"
    },
    "mobile_and_desktop": {
      "description": "Mobile und Desktop Wallet"
    },
    "looking_for": {
      "title": "Nicht das, wonach Sie suchen?",
      "mobile": {
        "description": "W\xe4hlen Sie auf dem Hauptbildschirm ein Wallet aus, um mit einem anderen Wallet-Anbieter zu beginnen."
      },
      "desktop": {
        "compact_description": "W\xe4hlen Sie auf dem Hauptbildschirm ein Wallet aus, um mit einem anderen Wallet-Anbieter zu beginnen.",
        "wide_description": "W\xe4hlen Sie links ein Wallet aus, um mit einem anderen Wallet-Anbieter zu beginnen."
      }
    }
  },
  "get_options": {
    "title": "Beginnen Sie mit %{wallet}",
    "short_title": "%{wallet} besorgen",
    "mobile": {
      "title": "%{wallet} f\xfcr Mobilger\xe4te",
      "description": "Verwenden Sie das mobile Wallet, um die Welt von Ethereum zu erkunden.",
      "download": {
        "label": "App herunterladen"
      }
    },
    "extension": {
      "title": "%{wallet} f\xfcr %{browser}",
      "description": "Greifen Sie direkt von Ihrem bevorzugten Webbrowser auf Ihr Wallet zu.",
      "download": {
        "label": "Zu %{browser} hinzuf\xfcgen"
      }
    },
    "desktop": {
      "title": "%{wallet} f\xfcr %{platform}",
      "description": "Greifen Sie nativ von Ihrem leistungsstarken Desktop auf Ihr Wallet zu.",
      "download": {
        "label": "Hinzuf\xfcgen zu %{platform}"
      }
    }
  },
  "get_mobile": {
    "title": "%{wallet} installieren",
    "description": "Scannen Sie mit Ihrem Telefon, um auf iOS oder Android herunterzuladen",
    "continue": {
      "label": "Fortfahren"
    }
  },
  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Verbinden"
      },
      "learn_more": {
        "label": "Mehr erfahren"
      }
    },
    "extension": {
      "refresh": {
        "label": "Aktualisieren"
      },
      "learn_more": {
        "label": "Mehr erfahren"
      }
    },
    "desktop": {
      "connect": {
        "label": "Verbinden"
      },
      "learn_more": {
        "label": "Mehr erfahren"
      }
    }
  },
  "chains": {
    "title": "Netzwerke wechseln",
    "wrong_network": "Falsches Netzwerk erkannt, wechseln oder trennen Sie die Verbindung, um fortzufahren.",
    "confirm": "Im Wallet best\xe4tigen",
    "switching_not_supported": "Ihr Wallet unterst\xfctzt das Wechseln von Netzwerken von %{appName} aus nicht. Versuchen Sie stattdessen, innerhalb Ihres Wallets die Netzwerke zu wechseln.",
    "switching_not_supported_fallback": "Ihr Wallet unterst\xfctzt das Wechseln von Netzwerken von dieser App aus nicht. Versuchen Sie stattdessen, innerhalb Ihres Wallets die Netzwerke zu wechseln.",
    "disconnect": "Trennen",
    "connected": "Verbunden"
  },
  "profile": {
    "disconnect": {
      "label": "Trennen"
    },
    "copy_address": {
      "label": "Adresse kopieren",
      "copied": "Kopiert!"
    },
    "explorer": {
      "label": "Mehr im Explorer ansehen"
    },
    "transactions": {
      "description": "%{appName}-Transaktionen werden hier angezeigt...",
      "description_fallback": "Ihre Transaktionen werden hier angezeigt...",
      "recent": {
        "title": "Neueste Transaktionen"
      },
      "clear": {
        "label": "Alles l\xf6schen"
      }
    }
  },
  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "F\xfcgen Sie Argent zu Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "\xd6ffnen Sie die Argent-App"
        },
        "step2": {
          "description": "Erstellen Sie ein Wallet und einen Benutzernamen oder importieren Sie ein bestehendes Wallet.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Schaltfl\xe4che QR-Scan"
        }
      }
    },
    "berasig": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die BeraSig-Erweiterung",
          "description": "Wir empfehlen, BeraSig an die Taskleiste anzuheften, um leichter auf Ihre Brieftasche zuzugreifen."
        },
        "step2": {
          "title": "Erstellen Sie eine Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "best": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Best Wallet-App",
          "description": "F\xfcgen Sie die Best Wallet zu Ihrem Startbildschirm hinzu, um schneller auf Ihre Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, die Bifrost Wallet auf Ihren Startbildschirm zu legen, um schneller darauf zugreifen zu k\xf6nnen.",
          "title": "\xd6ffnen Sie die Bifrost Wallet-App"
        },
        "step2": {
          "description": "Erstellen oder importieren Sie ein Wallet mit Ihrer Wiederherstellungsphrase.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      }
    },
    "bitget": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, die Bitget Wallet auf Ihren Startbildschirm zu legen, um schneller darauf zugreifen zu k\xf6nnen.",
          "title": "\xd6ffnen Sie die Bitget Wallet-App"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Wir empfehlen, die Bitget Wallet in Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen.",
          "title": "Installieren Sie die Bitget Wallet-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "bitski": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Bitski in Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen.",
          "title": "Installieren Sie die Bitski-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Bitverse Wallet App",
          "description": "F\xfcgen Sie die Bitverse Wallet Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "bloom": {
      "desktop": {
        "step1": {
          "title": "\xd6ffnen Sie die Bloom Wallet-App",
          "description": "Wir empfehlen, Bloom Wallet auf Ihrem Startbildschirm abzulegen, um schneller darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "description": "Erstellen oder importieren Sie ein Wallet mit Ihrer Wiederherstellungsphrase.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nachdem Sie ein Wallet haben, klicken Sie auf \u201eVerbinden\u201c, um \xfcber Bloom eine Verbindung herzustellen. Eine Verbindungsmeldung in der App wird angezeigt, um die Verbindung zu best\xe4tigen.",
          "title": "Klicken Sie auf Verbinden"
        }
      }
    },
    "bybit": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, Bybit auf Ihrem Startbildschirm abzulegen, um schneller darauf zuzugreifen.",
          "title": "\xd6ffnen Sie die Bybit App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Klicken Sie oben rechts in Ihrem Browser und heften Sie Bybit Wallet f\xfcr einfachen Zugriff an.",
          "title": "Installieren Sie die Bybit Wallet Erweiterung"
        },
        "step2": {
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie das Bybit Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "binance": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, Binance auf Ihrem Startbildschirm abzulegen, um schneller darauf zuzugreifen.",
          "title": "\xd6ffnen Sie die Binance App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die WalletConnect-Schaltfl\xe4che"
        }
      }
    },
    "coin98": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, die Coin98 Wallet auf Ihren Startbildschirm zu legen, um schneller darauf zugreifen zu k\xf6nnen.",
          "title": "\xd6ffnen Sie die Coin98 Wallet-App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die WalletConnect-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Klicken Sie oben rechts in Ihrem Browser und heften Sie die Coin98 Wallet an, um einen einfachen Zugriff zu erm\xf6glichen.",
          "title": "Installieren Sie die Coin98 Wallet-Erweiterung"
        },
        "step2": {
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie die Coin98 Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, die Coinbase Wallet auf Ihren Startbildschirm zu legen, um schneller darauf zugreifen zu k\xf6nnen.",
          "title": "\xd6ffnen Sie die Coinbase Wallet-App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet problemlos mit der Cloud-Backup-Funktion sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Wir empfehlen, die Coinbase Wallet in Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen.",
          "title": "Installieren Sie die Coinbase Wallet-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "compass": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, die Compass Wallet an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "Installieren Sie die Compass Wallet Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "core": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, Core auf Ihren Startbildschirm zu legen, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "\xd6ffnen Sie die Core-App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die WalletConnect-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Core an Ihre Taskleiste anzuheften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen.",
          "title": "Installieren Sie die Core-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "fox": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, FoxWallet auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu erhalten.",
          "title": "\xd6ffnen Sie die FoxWallet-App"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      }
    },
    "frontier": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, Frontier Wallet auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu erhalten.",
          "title": "\xd6ffnen Sie die Frontier Wallet-App"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Frontier Wallet an Ihre Taskleiste anzuheften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen.",
          "title": "Installieren Sie die Frontier Wallet-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "im_token": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die imToken-App",
          "description": "Platzieren Sie die imToken-App auf Ihrem Startbildschirm f\xfcr schnelleren Zugriff auf Ihr Wallet."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das Scanner-Symbol in der oberen rechten Ecke",
          "description": "W\xe4hlen Sie Neue Verbindung, dann scannen Sie den QR-Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "iopay": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, ioPay auf Ihrem Startbildschirm abzulegen, um schneller darauf zuzugreifen.",
          "title": "\xd6ffnen Sie die ioPay App"
        },
        "step2": {
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die WalletConnect-Schaltfl\xe4che"
        }
      }
    },
    "kaikas": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Kaikas an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "Installieren Sie die Kaikas Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Kaikas App",
          "description": "Legen Sie die Kaikas App auf Ihrem Startbildschirm ab, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das Scanner-Symbol in der oberen rechten Ecke",
          "description": "W\xe4hlen Sie Neue Verbindung, dann scannen Sie den QR-Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "kaia": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Kaia an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "Installieren Sie die Kaia Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Kaia-App",
          "description": "Legen Sie die Kaia-App auf Ihren Startbildschirm f\xfcr schnelleren Zugriff auf Ihre Wallet."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das Scanner-Symbol in der oberen rechten Ecke",
          "description": "W\xe4hlen Sie Neue Verbindung, dann scannen Sie den QR-Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "kraken": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Kraken Wallet App",
          "description": "F\xfcgen Sie die Kraken Wallet Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "kresus": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Kresus Wallet App",
          "description": "F\xfcgen Sie die Kresus Wallet Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "magicEden": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Magic Eden Erweiterung",
          "description": "Wir empfehlen, Magic Eden an Ihre Taskleiste zu heften, um einfacher auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihre Wallet auf sichere Weise sichern. Teilen Sie niemals Ihren geheimen Wiederherstellungssatz mit anderen."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "metamask": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die MetaMask-App",
          "description": "Wir empfehlen, MetaMask auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu erhalten."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die MetaMask-Erweiterung",
          "description": "Wir empfehlen, MetaMask an Ihre Taskleiste anzuheften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die NestWallet Erweiterung",
          "description": "Wir empfehlen, die NestWallet an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "okx": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die OKX Wallet-App",
          "description": "Wir empfehlen, OKX Wallet auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu erhalten."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die OKX Wallet-Erweiterung",
          "description": "Wir empfehlen, OKX Wallet an Ihre Taskleiste anzuheften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "omni": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Omni-App",
          "description": "F\xfcgen Sie Omni Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Legen Sie die 1inch Wallet auf Ihrem Startbildschirm ab, um schneller auf Ihr Wallet zuzugreifen.",
          "title": "\xd6ffnen Sie die 1inch Wallet App"
        },
        "step2": {
          "description": "Erstellen Sie ein Wallet und einen Benutzernamen oder importieren Sie ein bestehendes Wallet.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Schaltfl\xe4che QR-Scan"
        }
      }
    },
    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die TokenPocket-App",
          "description": "Wir empfehlen, TokenPocket auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu erhalten."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die TokenPocket-Erweiterung",
          "description": "Wir empfehlen, TokenPocket an Ihre Taskleiste anzuheften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "trust": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Trust Wallet-App",
          "description": "Platzieren Sie Trust Wallet auf Ihrem Startbildschirm f\xfcr schnelleren Zugriff auf Ihr Wallet."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf WalletConnect in den Einstellungen",
          "description": "W\xe4hlen Sie Neue Verbindung, dann scannen Sie den QR-Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die Trust Wallet-Erweiterung",
          "description": "Klicken Sie oben rechts in Ihrem Browser und pinnen Sie Trust Wallet f\xfcr einfachen Zugriff."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Trust Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Uniswap-App",
          "description": "F\xfcgen Sie Uniswap Wallet Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "zerion": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Zerion-App",
          "description": "Wir empfehlen, Zerion auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die Zerion-Erweiterung",
          "description": "Wir empfehlen, Zerion an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Rainbow-App",
          "description": "Wir empfehlen, Rainbow auf Ihrem Startbildschirm zu platzieren, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Sie k\xf6nnen Ihr Wallet ganz einfach mit unserer Backup-Funktion auf Ihrem Telefon sichern."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      }
    },
    "enkrypt": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, die Enkrypt Wallet an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben.",
          "title": "Installieren Sie die Enkrypt Wallet-Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "frame": {
      "extension": {
        "step1": {
          "description": "Wir empfehlen, Frame an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben.",
          "title": "Installieren Sie Frame und die zugeh\xf6rige Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "one_key": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die OneKey Wallet-Erweiterung",
          "description": "Wir empfehlen, die OneKey Wallet an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die ParaSwap-App",
          "description": "F\xfcgen Sie die ParaSwap Wallet zu Ihrem Startbildschirm hinzu, um schneller auf Ihre Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "phantom": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Phantom-Erweiterung",
          "description": "Wir empfehlen, Phantom an Ihre Taskleiste anzuheften, um leichteren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihre Wallet auf sichere Weise sichern. Teilen Sie niemals Ihren geheimen Wiederherstellungssatz mit anderen."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "rabby": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Rabby-Erweiterung",
          "description": "Wir empfehlen, Rabby an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "ronin": {
      "qr_code": {
        "step1": {
          "description": "Wir empfehlen, die Ronin Wallet Ihrem Startbildschirm hinzuzuf\xfcgen, um schneller darauf zuzugreifen.",
          "title": "\xd6ffnen Sie die Ronin Wallet App"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden.",
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che"
        }
      },
      "extension": {
        "step1": {
          "description": "Wir empfehlen, die Ronin Wallet an Ihre Taskleiste zu heften, um schneller darauf zuzugreifen.",
          "title": "Installieren Sie die Ronin Wallet Erweiterung"
        },
        "step2": {
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem.",
          "title": "Erstellen oder importieren Sie ein Wallet"
        },
        "step3": {
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden.",
          "title": "Aktualisieren Sie Ihren Browser"
        }
      }
    },
    "ramper": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Ramper Erweiterung",
          "description": "Wir empfehlen, Ramper an Ihre Taskleiste zu heften, um einfacher darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen Sie eine Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "safeheron": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Core-Erweiterung",
          "description": "Wir empfehlen, Safeheron an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "taho": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Taho-Erweiterung",
          "description": "Wir empfehlen, Taho an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "wigwam": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Wigwam-Erweiterung",
          "description": "Wir empfehlen, Wigwam an Ihre Taskleiste anzuheften, um einen schnelleren Zugriff auf Ihr Wallet zu erm\xf6glichen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "talisman": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Talisman-Erweiterung",
          "description": "Wir empfehlen, Talisman an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder Importieren Sie eine Ethereum-Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihre Wallet auf sichere Weise sichern. Teilen Sie niemals Ihre Wiederherstellungsphrase mit anderen."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "xdefi": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die XDEFI Wallet-Erweiterung",
          "description": "Wir empfehlen, die XDEFI Wallet an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "zeal": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Zeal App",
          "description": "F\xfcgen Sie die Zeal Wallet Ihrem Startbildschirm hinzu, um schneller auf Ihr Wallet zuzugreifen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf das QR-Symbol und scannen Sie",
          "description": "Tippen Sie auf das QR-Symbol auf Ihrem Startbildschirm, scannen Sie den Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      },
      "extension": {
        "step1": {
          "title": "Installieren Sie die Zeal-Erweiterung",
          "description": "Wir empfehlen, Zeal an Ihre Taskleiste anzuheften, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "safepal": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die SafePal Wallet-Erweiterung",
          "description": "Klicken Sie oben rechts in Ihrem Browser und heften Sie SafePal Wallet f\xfcr einfachen Zugriff an."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie die SafePal Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die SafePal Wallet-App",
          "description": "Platzieren Sie SafePal Wallet auf Ihrem Startbildschirm, um schnelleren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf WalletConnect in den Einstellungen",
          "description": "W\xe4hlen Sie Neue Verbindung, dann scannen Sie den QR-Code und best\xe4tigen Sie die Eingabeaufforderung, um die Verbindung herzustellen."
        }
      }
    },
    "desig": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die Desig-Erweiterung",
          "description": "Wir empfehlen, Desig an Ihre Taskleiste anzuheften, um leichteren Zugriff auf Ihre Wallet zu haben."
        },
        "step2": {
          "title": "Erstellen Sie eine Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      }
    },
    "subwallet": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die SubWallet-Erweiterung",
          "description": "Wir empfehlen, SubWallet an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihre Wallet auf sichere Weise sichern. Teilen Sie niemals Ihre Wiederherstellungsphrase mit anderen."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die SubWallet-App",
          "description": "Wir empfehlen, SubWallet auf Ihrem Startbildschirm abzulegen, um schneller darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      }
    },
    "clv": {
      "extension": {
        "step1": {
          "title": "Installieren Sie die CLV Wallet-Erweiterung",
          "description": "Wir empfehlen, CLV Wallet an Ihre Taskleiste zu heften, um schneller auf Ihr Wallet zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Aktualisieren Sie Ihren Browser",
          "description": "Sobald Sie Ihr Wallet eingerichtet haben, klicken Sie unten, um den Browser zu aktualisieren und die Erweiterung zu laden."
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die CLV Wallet-App",
          "description": "Wir empfehlen, CLV Wallet auf Ihrem Startbildschirm abzulegen, um schneller darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie ein Wallet",
          "description": "Stellen Sie sicher, dass Sie Ihr Wallet mit einer sicheren Methode sichern. Teilen Sie niemals Ihre geheime Phrase mit jemandem."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      }
    },
    "okto": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Okto-App",
          "description": "F\xfcgen Sie Okto Ihrem Startbildschirm hinzu, um schnellen Zugriff zu erhalten"
        },
        "step2": {
          "title": "Erstellen Sie ein MPC-Wallet",
          "description": "Erstellen Sie ein Konto und generieren Sie ein Wallet"
        },
        "step3": {
          "title": "Tippen Sie auf WalletConnect in den Einstellungen",
          "description": "Tippen Sie auf das QR-Scan-Symbol oben rechts und best\xe4tigen Sie die Aufforderung zum Verbinden."
        }
      }
    },
    "ledger": {
      "desktop": {
        "step1": {
          "title": "\xd6ffnen Sie die Ledger Live-App",
          "description": "Wir empfehlen, Ledger Live auf Ihrem Startbildschirm abzulegen, um schneller darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Richten Sie Ihr Ledger ein",
          "description": "Richten Sie ein neues Ledger ein oder verbinden Sie sich mit einem bestehenden."
        },
        "step3": {
          "title": "Verbinden",
          "description": "Eine Verbindungsmeldung erscheint, um Ihr Wallet zu verbinden."
        }
      },
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Ledger Live-App",
          "description": "Wir empfehlen, Ledger Live auf Ihrem Startbildschirm abzulegen, um schneller darauf zugreifen zu k\xf6nnen."
        },
        "step2": {
          "title": "Richten Sie Ihr Ledger ein",
          "description": "Sie k\xf6nnen entweder mit der Desktop-App synchronisieren oder Ihr Ledger verbinden."
        },
        "step3": {
          "title": "Code scannen",
          "description": "Tippen Sie auf WalletConnect und wechseln Sie dann zum Scanner. Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      }
    },
    "valora": {
      "qr_code": {
        "step1": {
          "title": "\xd6ffnen Sie die Valora-App",
          "description": "Wir empfehlen, Valora f\xfcr einen schnelleren Zugriff auf Ihrem Startbildschirm zu platzieren."
        },
        "step2": {
          "title": "Erstellen oder importieren Sie eine Wallet",
          "description": "Erstellen Sie ein neues Wallet oder importieren Sie ein bestehendes."
        },
        "step3": {
          "title": "Tippen Sie auf die Scan-Schaltfl\xe4che",
          "description": "Nach dem Scannen erscheint eine Verbindungsmeldung, um Ihr Wallet zu verbinden."
        }
      }
    }
  }
}
`},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,i,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,i){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||i.hasOwnProperty(n)||Object.defineProperty(i,n,{enumerable:!0,get:function(){return e[n]}})}),i},n.export=function(e,i,n){Object.defineProperty(e,i,{enumerable:!0,get:n})}},{}]},[],null,"parcelRequireb5b4"),globalThis.define=i;