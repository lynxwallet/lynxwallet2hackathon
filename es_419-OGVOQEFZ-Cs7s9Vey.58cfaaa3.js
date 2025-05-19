var e,a;"function"==typeof(e=globalThis.define)&&(a=e,e=null),function(a,r,t,n,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof o[n]&&o[n],s=l.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(e,r){if(!s[e]){if(!a[e]){var t="function"==typeof o[n]&&o[n];if(!r&&t)return t(e,!0);if(l)return l(e,!0);if(c&&"string"==typeof e)return c(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}d.resolve=function(r){var t=a[e][1][r];return null!=t?t:r},d.cache={};var u=s[e]=new p.Module(e);a[e][0].call(u.exports,d,u,u.exports,this)}return s[e].exports;function d(e){var a=d.resolve(e);return!1===a?{}:p(a)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=a,p.cache=s,p.parent=l,p.register=function(e,r){a[e]=[function(e,a){a.exports=r},{}]},Object.defineProperty(p,"root",{get:function(){return o[n]}}),o[n]=p;for(var u=0;u<r.length;u++)p(r[u]);if(t){var d=p(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd?e(function(){return d}):i&&(this[i]=d)}}({"9j2q0":[function(e,a,r){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(r),t.export(r,"default",()=>n);var n=`{
  "connect_wallet": {
    "label": "Conectar la billetera",
    "wrong_network": {
      "label": "Red incorrecta"
    }
  },
  "intro": {
    "title": "\xbfQu\xe9 es una billetera?",
    "description": "Una billetera se usa para enviar, recibir, almacenar y mostrar activos digitales. Tambi\xe9n es una nueva forma de iniciar sesi\xf3n, sin necesidad de crear nuevas cuentas y contrase\xf1as en cada sitio web.",
    "digital_asset": {
      "title": "Un hogar para tus Activos Digitales",
      "description": "Las carteras se utilizan para enviar, recibir, almacenar y mostrar activos digitales como Ethereum y NFTs."
    },
    "login": {
      "title": "Una nueva forma de iniciar sesi\xf3n",
      "description": "En lugar de crear nuevas cuentas y contrase\xf1as en cada sitio web, simplemente conecta tu cartera."
    },
    "get": {
      "label": "Obtener una billetera"
    },
    "learn_more": {
      "label": "Obtener m\xe1s informaci\xf3n"
    }
  },
  "sign_in": {
    "label": "Verifica tu cuenta",
    "description": "Para terminar de conectar, debes firmar un mensaje en tu billetera para verificar que eres el propietario de esta cuenta.",
    "message": {
      "send": "Enviar mensaje",
      "preparing": "Preparando mensaje...",
      "cancel": "Cancelar",
      "preparing_error": "Error al preparar el mensaje, \xa1intenta de nuevo!"
    },
    "signature": {
      "waiting": "Esperando firma...",
      "verifying": "Verificando firma...",
      "signing_error": "Error al firmar el mensaje, \xa1intenta de nuevo!",
      "verifying_error": "Error al verificar la firma, \xa1intenta de nuevo!",
      "oops_error": "\xa1Ups! Algo sali\xf3 mal."
    }
  },
  "connect": {
    "label": "Conectar",
    "title": "Conectar una billetera",
    "new_to_ethereum": {
      "description": "\xbfEres nuevo en las billeteras Ethereum?",
      "learn_more": {
        "label": "Obtener m\xe1s informaci\xf3n"
      }
    },
    "learn_more": {
      "label": "Obtener m\xe1s informaci\xf3n"
    },
    "recent": "Reciente",
    "status": {
      "opening": "Abriendo %{wallet}...",
      "connecting": "Conectando",
      "connect_mobile": "Continuar en %{wallet}",
      "not_installed": "%{wallet} no est\xe1 instalado",
      "not_available": "%{wallet} no est\xe1 disponible",
      "confirm": "Confirma la conexi\xf3n en la extensi\xf3n",
      "confirm_mobile": "Aceptar la solicitud de conexi\xf3n en la cartera"
    },
    "secondary_action": {
      "get": {
        "description": "\xbfNo tienes %{wallet}?",
        "label": "OBTENER"
      },
      "install": {
        "label": "INSTALAR"
      },
      "retry": {
        "label": "REINTENTAR"
      }
    },
    "walletconnect": {
      "description": {
        "full": "\xbfNecesitas el modal oficial de WalletConnect?",
        "compact": "\xbfNecesitas el modal de WalletConnect?"
      },
      "open": {
        "label": "ABRIR"
      }
    }
  },
  "connect_scan": {
    "title": "Escanea con %{wallet}",
    "fallback_title": "Escanea con tu tel\xe9fono"
  },
  "connector_group": {
    "installed": "Instalado",
    "recommended": "Recomendado",
    "other": "Otro",
    "popular": "Popular",
    "more": "M\xe1s",
    "others": "Otros"
  },
  "get": {
    "title": "Obtener una billetera",
    "action": {
      "label": "OBTENER"
    },
    "mobile": {
      "description": "Billetera M\xf3vil"
    },
    "extension": {
      "description": "Extensi\xf3n de navegador"
    },
    "mobile_and_extension": {
      "description": "Billetera m\xf3vil y extensi\xf3n"
    },
    "mobile_and_desktop": {
      "description": "Billetera M\xf3vil y de Escritorio"
    },
    "looking_for": {
      "title": "\xbfNo es lo que est\xe1s buscando?",
      "mobile": {
        "description": "Seleccione una billetera en la pantalla principal para comenzar con un proveedor de billetera diferente."
      },
      "desktop": {
        "compact_description": "Seleccione una cartera en la pantalla principal para comenzar con un proveedor de cartera diferente.",
        "wide_description": "Seleccione una cartera a la izquierda para comenzar con un proveedor de cartera diferente."
      }
    }
  },
  "get_options": {
    "title": "Comienza con %{wallet}",
    "short_title": "Obtener %{wallet}",
    "mobile": {
      "title": "%{wallet} para m\xf3vil",
      "description": "Use la billetera m\xf3vil para explorar el mundo de Ethereum.",
      "download": {
        "label": "Obtener la aplicaci\xf3n"
      }
    },
    "extension": {
      "title": "%{wallet} para %{browser}",
      "description": "Acceda a su billetera directamente desde su navegador web favorito.",
      "download": {
        "label": "A\xf1adir a %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} para %{platform}",
      "description": "Acceda a su billetera de forma nativa desde su potente escritorio.",
      "download": {
        "label": "A\xf1adir a %{platform}"
      }
    }
  },
  "get_mobile": {
    "title": "Instalar %{wallet}",
    "description": "Escanee con su tel\xe9fono para descargar en iOS o Android",
    "continue": {
      "label": "Continuar"
    }
  },
  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Conectar"
      },
      "learn_more": {
        "label": "Obtener m\xe1s informaci\xf3n"
      }
    },
    "extension": {
      "refresh": {
        "label": "Actualizar"
      },
      "learn_more": {
        "label": "Obtener m\xe1s informaci\xf3n"
      }
    },
    "desktop": {
      "connect": {
        "label": "Conectar"
      },
      "learn_more": {
        "label": "Obtener m\xe1s informaci\xf3n"
      }
    }
  },
  "chains": {
    "title": "Cambiar redes",
    "wrong_network": "Se detect\xf3 la red incorrecta, cambia o descon\xe9ctate para continuar.",
    "confirm": "Confirmar en la cartera",
    "switching_not_supported": "Tu cartera no admite cambiar las redes desde %{appName}. Intenta cambiar las redes desde tu cartera.",
    "switching_not_supported_fallback": "Su billetera no admite el cambio de redes desde esta aplicaci\xf3n. Intente cambiar de red desde dentro de su billetera en su lugar.",
    "disconnect": "Desconectar",
    "connected": "Conectado"
  },
  "profile": {
    "disconnect": {
      "label": "Desconectar"
    },
    "copy_address": {
      "label": "Copiar direcci\xf3n",
      "copied": "\xa1Copiado!"
    },
    "explorer": {
      "label": "Ver m\xe1s en el explorador"
    },
    "transactions": {
      "description": "%{appName} transacciones aparecer\xe1n aqu\xed...",
      "description_fallback": "Tus transacciones aparecer\xe1n aqu\xed...",
      "recent": {
        "title": "Transacciones recientes"
      },
      "clear": {
        "label": "Borrar Todo"
      }
    }
  },
  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Coloque Argent en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Abra la aplicaci\xf3n Argent"
        },
        "step2": {
          "description": "Cree una billetera y un nombre de usuario, o importe una billetera existente.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n Escanear QR"
        }
      }
    },
    "berasig": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n BeraSig",
          "description": "Recomendamos anclar BeraSig a tu barra de tareas para acceder m\xe1s f\xe1cilmente a tu cartera."
        },
        "step2": {
          "title": "Crea una Cartera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "best": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Best Wallet",
          "description": "Agrega Best Wallet a tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Bifrost Wallet en su pantalla de inicio para un acceso m\xe1s r\xe1pido.",
          "title": "Abra la aplicaci\xf3n Bifrost Wallet"
        },
        "step2": {
          "description": "Cree o importe una billetera usando su frase de recuperaci\xf3n.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n de escaneo"
        }
      }
    },
    "bitget": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar Bitget Wallet en su pantalla de inicio para un acceso m\xe1s r\xe1pido.",
          "title": "Abra la aplicaci\xf3n Bitget Wallet"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que pueda conectar su billetera.",
          "title": "Toque el bot\xf3n de escanear"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Bitget Wallet a su barra de tareas para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Instale la extensi\xf3n de la Billetera Bitget"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      }
    },
    "bitski": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Bitski a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n Bitski"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensi\xf3n.",
          "title": "Actualiza tu navegador"
        }
      }
    },
    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Bitverse Wallet",
          "description": "Agregue Bitverse Wallet a su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "bloom": {
      "desktop": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Bloom Wallet",
          "description": "Recomendamos colocar Bloom Wallet en su pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "description": "Cree o importe una billetera usando su frase de recuperaci\xf3n.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de tener una billetera, haga clic en Conectar para conectarse a trav\xe9s de Bloom. Aparecer\xe1 un aviso de conexi\xf3n en la aplicaci\xf3n para que confirme la conexi\xf3n.",
          "title": "Haga clic en Conectar"
        }
      }
    },
    "bybit": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Bybit en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Abra la aplicaci\xf3n Bybit"
        },
        "step2": {
          "description": "Puede respaldar f\xe1cilmente su billetera utilizando nuestra funci\xf3n de respaldo en su tel\xe9fono.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n de escaneo"
        }
      },
      "extension": {
        "step1": {
          "description": "Haga clic en la parte superior derecha de su navegador y ancle Bybit Wallet para un acceso f\xe1cil.",
          "title": "Instale la extensi\xf3n Bybit Wallet"
        },
        "step2": {
          "description": "Crea una nueva billetera o importa una existente.",
          "title": "Crear o Importar una billetera"
        },
        "step3": {
          "description": "Una vez que haya configurado Bybit Wallet, haga clic a continuaci\xf3n para actualizar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      }
    },
    "binance": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Binance en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Abre la aplicaci\xf3n Binance"
        },
        "step2": {
          "description": "Puede respaldar f\xe1cilmente su billetera utilizando nuestra funci\xf3n de respaldo en su tel\xe9fono.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n WalletConnect"
        }
      }
    },
    "coin98": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Coin98 Wallet en la pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Abra la aplicaci\xf3n Coin98 Wallet"
        },
        "step2": {
          "description": "Puede respaldar f\xe1cilmente su billetera utilizando nuestra funci\xf3n de respaldo en su tel\xe9fono.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Haga clic en la parte superior derecha de su navegador y fije Coin98 Wallet para un f\xe1cil acceso.",
          "title": "Instale la extensi\xf3n Coin98 Wallet"
        },
        "step2": {
          "description": "Crea una nueva billetera o importa una existente.",
          "title": "Crear o Importar una billetera"
        },
        "step3": {
          "description": "Una vez que configures Coin98 Wallet, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refresca tu navegador"
        }
      }
    },
    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Coinbase Wallet en tu pantalla de inicio para un acceso m\xe1s r\xe1pido.",
          "title": "Abre la aplicaci\xf3n de la Billetera Coinbase"
        },
        "step2": {
          "description": "Puedes respaldar tu billetera f\xe1cilmente utilizando la funci\xf3n de respaldo en la nube.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera.",
          "title": "Pulsa el bot\xf3n de escanear"
        }
      },
      "extension": {
        "step1": {
          "description": "Te recomendamos anclar la Billetera Coinbase a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n de la Billetera Coinbase"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configure su billetera, haga clic abajo para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refresca tu navegador"
        }
      }
    },
    "compass": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar la Billetera Compass a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n de la Billetera Compass"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      }
    },
    "core": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Core en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Abra la aplicaci\xf3n Core"
        },
        "step2": {
          "description": "Puedes respaldar f\xe1cilmente tu billetera utilizando nuestra funci\xf3n de respaldo en tu tel\xe9fono.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera.",
          "title": "Toque el bot\xf3n WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fijar Core a tu barra de tareas para acceder m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n Core"
        },
        "step2": {
          "description": "Aseg\xfarate de hacer una copia de seguridad de tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refresca tu navegador"
        }
      }
    },
    "fox": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner FoxWallet en tu pantalla de inicio para un acceso m\xe1s r\xe1pido.",
          "title": "Abre la aplicaci\xf3n FoxWallet"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 una solicitud de conexi\xf3n para que conectes tu billetera.",
          "title": "Toca el bot\xf3n de escanear"
        }
      }
    },
    "frontier": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner la Billetera Frontier en tu pantalla principal para un acceso m\xe1s r\xe1pido.",
          "title": "Abre la aplicaci\xf3n de la Billetera Frontier"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje para que conectes tu billetera.",
          "title": "Haz clic en el bot\xf3n de escaneo"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos anclar la billetera Frontier a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n de la billetera Frontier"
        },
        "step2": {
          "description": "Aseg\xfarese de hacer una copia de seguridad de su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configure su billetera, haga clic a continuaci\xf3n para actualizar el navegador y cargar la extensi\xf3n.",
          "title": "Actualizar tu navegador"
        }
      }
    },
    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Abrir la aplicaci\xf3n imToken",
          "description": "Pon la aplicaci\xf3n imToken en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca el Icono del Esc\xe1ner en la esquina superior derecha",
          "description": "Elija Nueva Conexi\xf3n, luego escanee el c\xf3digo QR y confirme el aviso para conectar."
        }
      }
    },
    "iopay": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner ioPay en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Abre la aplicaci\xf3n ioPay"
        },
        "step2": {
          "description": "Puede respaldar f\xe1cilmente su billetera utilizando nuestra funci\xf3n de respaldo en su tel\xe9fono.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n WalletConnect"
        }
      }
    },
    "kaikas": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Kaikas a su barra de tareas para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Instale la extensi\xf3n Kaikas"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Kaikas",
          "description": "Ponga la aplicaci\xf3n Kaikas en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca el Icono del Esc\xe1ner en la esquina superior derecha",
          "description": "Elija Nueva Conexi\xf3n, luego escanee el c\xf3digo QR y confirme el aviso para conectar."
        }
      }
    },
    "kaia": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Kaia a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n Kaia"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Kaia",
          "description": "Pon la aplicaci\xf3n Kaia en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca el Icono del Esc\xe1ner en la esquina superior derecha",
          "description": "Elija Nueva Conexi\xf3n, luego escanee el c\xf3digo QR y confirme el aviso para conectar."
        }
      }
    },
    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Kraken Wallet",
          "description": "Agrega la Billetera Kraken a tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Kresus Wallet",
          "description": "Agregue Kresus Wallet a su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "magicEden": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de Magic Eden",
          "description": "Recomendamos anclar Magic Eden a tu barra de tareas para acceder m\xe1s f\xe1cilmente a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera usando un m\xe9todo seguro. Nunca comparta su frase secreta de recuperaci\xf3n con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n MetaMask",
          "description": "Recomendamos colocar MetaMask en tu pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Toca el bot\xf3n de escanear",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera."
        }
      },
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n MetaMask",
          "description": "Recomendamos anclar MetaMask a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de hacer una copia de seguridad de tu billetera usando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Refresca tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n NestWallet",
          "description": "Recomendamos fijar NestWallet a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "okx": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n OKX Wallet",
          "description": "Recomendamos colocar OKX Wallet en tu pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera usando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Toca el bot\xf3n de escanear",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera."
        }
      },
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de Billetera OKX",
          "description": "Recomendamos anclar la Billetera OKX a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera usando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Refresca tu navegador",
          "description": "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "omni": {
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Omni",
          "description": "Agregue Omni a su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crear una nueva billetera o importar una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla principal, escanea el c\xf3digo y confirma el aviso para conectar."
        }
      }
    },
    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Ponga 1inch Wallet en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Abra la aplicaci\xf3n 1inch Wallet"
        },
        "step2": {
          "description": "Cree una billetera y un nombre de usuario, o importe una billetera existente.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n Escanear QR"
        }
      }
    },
    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n TokenPocket",
          "description": "Recomendamos colocar TokenPocket en tu pantalla principal para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Toca el bot\xf3n de escaneo",
          "description": "Despu\xe9s de escanear, aparecer\xe1 una solicitud de conexi\xf3n para que puedas conectar tu billetera."
        }
      },
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n TokenPocket",
          "description": "Recomendamos anclar TokenPocket a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Actualiza tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "trust": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Trust Wallet",
          "description": "Ubica Trust Wallet en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca WalletConnect en Configuraciones",
          "description": "Elige Nueva Conexi\xf3n, luego escanea el c\xf3digo QR y confirma el aviso para conectar."
        }
      },
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de Trust Wallet",
          "description": "Haz clic en la parte superior derecha de tu navegador y fija Trust Wallet para un f\xe1cil acceso."
        },
        "step2": {
          "title": "Crea o Importa una billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Refresca tu navegador",
          "description": "Una vez que configures Trust Wallet, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Uniswap",
          "description": "Agrega la billetera Uniswap a tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca el icono QR y escanea",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Zerion",
          "description": "Recomendamos poner Zerion en tu pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de hacer una copia de seguridad de tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Toca el bot\xf3n de escanear",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera."
        }
      },
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n Zerion",
          "description": "Recomendamos anclar Zerion a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera usando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Actualiza tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Rainbow",
          "description": "Recomendamos poner Rainbow en tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Puedes respaldar f\xe1cilmente tu billetera usando nuestra funci\xf3n de respaldo en tu tel\xe9fono."
        },
        "step3": {
          "title": "Toca el bot\xf3n de escanear",
          "description": "Despu\xe9s de escanear, aparecer\xe1 una solicitud de conexi\xf3n para que conectes tu billetera."
        }
      }
    },
    "enkrypt": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar la Billetera Enkrypt a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala la extensi\xf3n de Billetera Enkrypt"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refresca tu navegador"
        }
      }
    },
    "frame": {
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Frame a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera.",
          "title": "Instala Frame y la extensi\xf3n complementaria"
        },
        "step2": {
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refresca tu navegador"
        }
      }
    },
    "one_key": {
      "extension": {
        "step1": {
          "title": "Instale la extensi\xf3n de Billetera OneKey",
          "description": "Recomendamos anclar la Billetera OneKey a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera usando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Actualiza tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n ParaSwap",
          "description": "Agrega ParaSwap Wallet a tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      }
    },
    "phantom": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n Phantom",
          "description": "Recomendamos fijar Phantom a tu barra de tareas para un acceso m\xe1s f\xe1cil a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera usando un m\xe9todo seguro. Nunca comparta su frase secreta de recuperaci\xf3n con nadie."
        },
        "step3": {
          "title": "Actualiza tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "rabby": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n Rabby",
          "description": "Recomendamos anclar Rabby a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de hacer una copia de seguridad de tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Actualiza tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "ronin": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos poner Ronin Wallet en su pantalla de inicio para un acceso m\xe1s r\xe1pido.",
          "title": "Abra la aplicaci\xf3n Ronin Wallet"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera.",
          "title": "Toque el bot\xf3n de escaneo"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos anclar Ronin Wallet a su barra de tareas para un acceso m\xe1s r\xe1pido a su billetera.",
          "title": "Instale la extensi\xf3n Ronin Wallet"
        },
        "step2": {
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie.",
          "title": "Crear o Importar una Billetera"
        },
        "step3": {
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n.",
          "title": "Refrescar tu navegador"
        }
      }
    },
    "ramper": {
      "extension": {
        "step1": {
          "title": "Instale la extensi\xf3n Ramper",
          "description": "Recomendamos anclar Ramper a su barra de tareas para un acceso m\xe1s f\xe1cil a su billetera."
        },
        "step2": {
          "title": "Crea una Cartera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "safeheron": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n Core",
          "description": "Recomendamos anclar Safeheron a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Refresca tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "taho": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de Taho",
          "description": "Recomendamos anclar Taho a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crea o Importa una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera utilizando un m\xe9todo seguro. Nunca compartas tu frase secreta con nadie."
        },
        "step3": {
          "title": "Refresca tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "wigwam": {
      "extension": {
        "step1": {
          "title": "Instale la extensi\xf3n Wigwam",
          "description": "Recomendamos anclar Wigwam a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "talisman": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de Talisman",
          "description": "Recomendamos anclar Talisman a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crea o importa una billetera Ethereum",
          "description": "Aseg\xfarate de respaldar tu billetera usando un m\xe9todo seguro. Nunca compartas tu frase de recuperaci\xf3n con nadie."
        },
        "step3": {
          "title": "Recarga tu navegador",
          "description": "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "xdefi": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n de la billetera XDEFI",
          "description": "Recomendamos anclar XDEFI Wallet a su barra de tareas para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Actualice su navegador",
          "description": "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Zeal",
          "description": "Agrega Zeal Wallet a tu pantalla de inicio para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el icono de QR y escanee",
          "description": "Toca el icono QR en tu pantalla de inicio, escanea el c\xf3digo y confirma el prompt para conectar."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale la extensi\xf3n Zeal",
          "description": "Recomendamos anclar Zeal a su barra de tareas para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "safepal": {
      "extension": {
        "step1": {
          "title": "Instale la extensi\xf3n de la billetera SafePal",
          "description": "Haga clic en la esquina superior derecha de su navegador y ancle SafePal Wallet para un f\xe1cil acceso."
        },
        "step2": {
          "title": "Crear o Importar una billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configure la Billetera SafePal, haga clic abajo para refrescar el navegador y cargar la extensi\xf3n."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Billetera SafePal",
          "description": "Coloque la Billetera SafePal en su pantalla de inicio para un acceso m\xe1s r\xe1pido a su billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toca WalletConnect en Configuraciones",
          "description": "Elija Nueva Conexi\xf3n, luego escanee el c\xf3digo QR y confirme el aviso para conectar."
        }
      }
    },
    "desig": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n Desig",
          "description": "Recomendamos anclar Desig a tu barra de tareas para acceder m\xe1s f\xe1cilmente a tu cartera."
        },
        "step2": {
          "title": "Crea una Cartera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      }
    },
    "subwallet": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n SubWallet",
          "description": "Recomendamos anclar SubWallet a tu barra de tareas para acceder a tu cartera m\xe1s r\xe1pidamente."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarate de respaldar tu billetera usando un m\xe9todo seguro. Nunca compartas tu frase de recuperaci\xf3n con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n SubWallet",
          "description": "Recomendamos colocar SubWallet en tu pantalla principal para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Toque el bot\xf3n de escaneo",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera."
        }
      }
    },
    "clv": {
      "extension": {
        "step1": {
          "title": "Instala la extensi\xf3n CLV Wallet",
          "description": "Recomendamos anclar la billetera CLV a tu barra de tareas para un acceso m\xe1s r\xe1pido a tu billetera."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Refrescar tu navegador",
          "description": "Una vez que configures tu billetera, haz clic a continuaci\xf3n para refrescar el navegador y cargar la extensi\xf3n."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n CLV Wallet",
          "description": "Recomendamos colocar la billetera CLV en tu pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una Billetera",
          "description": "Aseg\xfarese de respaldar su billetera utilizando un m\xe9todo seguro. Nunca comparta su frase secreta con nadie."
        },
        "step3": {
          "title": "Toque el bot\xf3n de escaneo",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera."
        }
      }
    },
    "okto": {
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Okto",
          "description": "Agrega Okto a tu pantalla de inicio para un acceso r\xe1pido"
        },
        "step2": {
          "title": "Crea una billetera MPC",
          "description": "Crea una cuenta y genera una billetera"
        },
        "step3": {
          "title": "Toca WalletConnect en Configuraciones",
          "description": "Toca el icono de Escanear QR en la parte superior derecha y confirma el mensaje para conectar."
        }
      }
    },
    "ledger": {
      "desktop": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Ledger Live",
          "description": "Recomendamos poner Ledger Live en su pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Configure su Ledger",
          "description": "Configure un nuevo Ledger o con\xe9ctese a uno existente."
        },
        "step3": {
          "title": "Conectar",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra la aplicaci\xf3n Ledger Live",
          "description": "Recomendamos poner Ledger Live en su pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Configure su Ledger",
          "description": "Puedes sincronizar con la aplicaci\xf3n de escritorio o conectar tu Ledger."
        },
        "step3": {
          "title": "Escanea el c\xf3digo",
          "description": "Toca WalletConnect y luego cambia a Scanner. Despu\xe9s de escanear, aparecer\xe1 un aviso de conexi\xf3n para que conectes tu billetera."
        }
      }
    },
    "valora": {
      "qr_code": {
        "step1": {
          "title": "Abre la aplicaci\xf3n Valora",
          "description": "Recomendamos poner Valora en tu pantalla de inicio para un acceso m\xe1s r\xe1pido."
        },
        "step2": {
          "title": "Crear o Importar una billetera",
          "description": "Crea una nueva billetera o importa una existente."
        },
        "step3": {
          "title": "Toque el bot\xf3n de escaneo",
          "description": "Despu\xe9s de escanear, aparecer\xe1 un mensaje de conexi\xf3n para que conecte su billetera."
        }
      }
    }
  }
}
`},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,a,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,a){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||a.hasOwnProperty(r)||Object.defineProperty(a,r,{enumerable:!0,get:function(){return e[r]}})}),a},r.export=function(e,a,r){Object.defineProperty(e,a,{enumerable:!0,get:r})}},{}]},[],null,"parcelRequireb5b4"),globalThis.define=a;