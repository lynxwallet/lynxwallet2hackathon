var e,a;"function"==typeof(e=globalThis.define)&&(a=e,e=null),function(a,r,o,i,t){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof s[i]&&s[i],n=c.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(e,r){if(!n[e]){if(!a[e]){var o="function"==typeof s[i]&&s[i];if(!r&&o)return o(e,!0);if(c)return c(e,!0);if(u&&"string"==typeof e)return u(e);var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}l.resolve=function(r){var o=a[e][1][r];return null!=o?o:r},l.cache={};var d=n[e]=new p.Module(e);a[e][0].call(d.exports,l,d,d.exports,this)}return n[e].exports;function l(e){var a=l.resolve(e);return!1===a?{}:p(a)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=a,p.cache=n,p.parent=c,p.register=function(e,r){a[e]=[function(e,a){a.exports=r},{}]},Object.defineProperty(p,"root",{get:function(){return s[i]}}),s[i]=p;for(var d=0;d<r.length;d++)p(r[d]);if(o){var l=p(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd?e(function(){return l}):t&&(this[t]=l)}}({"8Qesa":[function(e,a,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>i);var i=`{
  "connect_wallet": {
    "label": "Conectar Carteira",
    "wrong_network": {
      "label": "Rede incorreta"
    }
  },
  "intro": {
    "title": "O que \xe9 uma Carteira?",
    "description": "Uma carteira \xe9 usada para enviar, receber, armazenar e exibir ativos digitais. Tamb\xe9m \xe9 uma nova forma de se conectar, sem precisar criar novas contas e senhas em todo site.",
    "digital_asset": {
      "title": "Um lar para seus ativos digitais",
      "description": "Carteiras s\xe3o usadas para enviar, receber, armazenar e exibir ativos digitais como Ethereum e NFTs."
    },
    "login": {
      "title": "Uma nova maneira de fazer login",
      "description": "Em vez de criar novas contas e senhas em todos os sites, basta conectar sua carteira."
    },
    "get": {
      "label": "Obter uma Carteira"
    },
    "learn_more": {
      "label": "Saiba mais"
    }
  },
  "sign_in": {
    "label": "Verifique sua conta",
    "description": "Para concluir a conex\xe3o, voc\xea deve assinar uma mensagem em sua carteira para confirmar que voc\xea \xe9 o propriet\xe1rio desta conta.",
    "message": {
      "send": "Enviar mensagem",
      "preparing": "Preparando mensagem...",
      "cancel": "Cancelar",
      "preparing_error": "Erro ao preparar a mensagem, tente novamente!"
    },
    "signature": {
      "waiting": "Aguardando assinatura...",
      "verifying": "Verificando assinatura...",
      "signing_error": "Erro ao assinar a mensagem, tente novamente!",
      "verifying_error": "Erro ao verificar assinatura, tente novamente!",
      "oops_error": "Ops, algo deu errado!"
    }
  },
  "connect": {
    "label": "Conectar",
    "title": "Conectar uma Carteira",
    "new_to_ethereum": {
      "description": "Novo nas carteiras Ethereum?",
      "learn_more": {
        "label": "Saiba mais"
      }
    },
    "learn_more": {
      "label": "Saiba mais"
    },
    "recent": "Recente",
    "status": {
      "opening": "Abrindo %{wallet}...",
      "connecting": "Conectando",
      "connect_mobile": "Continue em %{wallet}",
      "not_installed": "%{wallet} n\xe3o est\xe1 instalado",
      "not_available": "%{wallet} n\xe3o est\xe1 dispon\xedvel",
      "confirm": "Confirme a conex\xe3o na extens\xe3o",
      "confirm_mobile": "Aceite o pedido de conex\xe3o na carteira"
    },
    "secondary_action": {
      "get": {
        "description": "N\xe3o tem %{wallet}?",
        "label": "OBTER"
      },
      "install": {
        "label": "INSTALAR"
      },
      "retry": {
        "label": "TENTAR DE NOVO"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Precisa do modal oficial do WalletConnect?",
        "compact": "Precisa do modal WalletConnect?"
      },
      "open": {
        "label": "ABRIR"
      }
    }
  },
  "connect_scan": {
    "title": "Digitalize com %{wallet}",
    "fallback_title": "Digitalize com o seu telefone"
  },
  "connector_group": {
    "installed": "Instalado",
    "recommended": "Recomendado",
    "other": "Outro",
    "popular": "Popular",
    "more": "Mais",
    "others": "Outros"
  },
  "get": {
    "title": "Obter uma Carteira",
    "action": {
      "label": "OBTER"
    },
    "mobile": {
      "description": "Carteira M\xf3vel"
    },
    "extension": {
      "description": "Extens\xe3o do Navegador"
    },
    "mobile_and_extension": {
      "description": "Carteira M\xf3vel e Extens\xe3o"
    },
    "mobile_and_desktop": {
      "description": "Carteira para Mobile e Desktop"
    },
    "looking_for": {
      "title": "N\xe3o \xe9 o que voc\xea est\xe1 procurando?",
      "mobile": {
        "description": "Selecione uma carteira na tela principal para come\xe7ar com um provedor de carteira diferente."
      },
      "desktop": {
        "compact_description": "Selecione uma carteira na tela principal para come\xe7ar com um provedor de carteira diferente.",
        "wide_description": "Selecione uma carteira \xe0 esquerda para come\xe7ar com um provedor de carteira diferente."
      }
    }
  },
  "get_options": {
    "title": "Comece com %{wallet}",
    "short_title": "Obtenha %{wallet}",
    "mobile": {
      "title": "%{wallet} para M\xf3vel",
      "description": "Use a carteira m\xf3vel para explorar o mundo do Ethereum.",
      "download": {
        "label": "Baixe o aplicativo"
      }
    },
    "extension": {
      "title": "%{wallet} para %{browser}",
      "description": "Acesse sua carteira diretamente do seu navegador web favorito.",
      "download": {
        "label": "Adicionar ao %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} para %{platform}",
      "description": "Acesse sua carteira nativamente do seu desktop poderoso.",
      "download": {
        "label": "Adicionar ao %{platform}"
      }
    }
  },
  "get_mobile": {
    "title": "Instale %{wallet}",
    "description": "Escaneie com seu celular para baixar no iOS ou Android",
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
        "label": "Saiba mais"
      }
    },
    "extension": {
      "refresh": {
        "label": "Atualizar"
      },
      "learn_more": {
        "label": "Saiba mais"
      }
    },
    "desktop": {
      "connect": {
        "label": "Conectar"
      },
      "learn_more": {
        "label": "Saiba mais"
      }
    }
  },
  "chains": {
    "title": "Mudar Redes",
    "wrong_network": "Rede errada detectada, mude ou desconecte para continuar.",
    "confirm": "Confirme na Carteira",
    "switching_not_supported": "Sua carteira n\xe3o suporta a mudan\xe7a de redes de %{appName}. Tente mudar de redes dentro da sua carteira.",
    "switching_not_supported_fallback": "Sua carteira n\xe3o suporta a troca de redes a partir deste aplicativo. Tente trocar de rede dentro de sua carteira.",
    "disconnect": "Desconectar",
    "connected": "Conectado"
  },
  "profile": {
    "disconnect": {
      "label": "Desconectar"
    },
    "copy_address": {
      "label": "Copiar Endere\xe7o",
      "copied": "Copiado!"
    },
    "explorer": {
      "label": "Veja mais no explorador"
    },
    "transactions": {
      "description": "%{appName} transa\xe7\xf5es aparecer\xe3o aqui...",
      "description_fallback": "Suas transa\xe7\xf5es aparecer\xe3o aqui...",
      "recent": {
        "title": "Transa\xe7\xf5es Recentes"
      },
      "clear": {
        "label": "Limpar Tudo"
      }
    }
  },
  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Coloque o Argent na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Abra o aplicativo Argent"
        },
        "step2": {
          "description": "Crie uma carteira e nome de usu\xe1rio, ou importe uma carteira existente.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o Scan QR"
        }
      }
    },
    "berasig": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o BeraSig",
          "description": "Recomendamos fixar BeraSig na sua barra de tarefas para facilitar o acesso \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "best": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Best Wallet",
          "description": "Adicione a Best Wallet \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar a Bifrost Wallet na sua tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo Bifrost Wallet"
        },
        "step2": {
          "description": "Crie ou importe uma carteira usando sua frase de recupera\xe7\xe3o.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Ap\xf3s voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de escanear"
        }
      }
    },
    "bitget": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar a Bitget Wallet na sua tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo Bitget Wallet"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de escaneamento"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fixar a Bitget Wallet na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o da Carteira Bitget"
        },
        "step2": {
          "description": "Certifique-se de fazer o backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "bitski": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Bitski na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Bitski"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Bitverse Wallet",
          "description": "Adicione o Bitverse Wallet \xe0 sua tela inicial para acessar sua carteira mais rapidamente."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "bloom": {
      "desktop": {
        "step1": {
          "title": "Abra o aplicativo Bloom Wallet",
          "description": "Recomendamos colocar o Bloom Wallet na sua tela inicial para acesso mais r\xe1pido."
        },
        "step2": {
          "description": "Crie ou importe uma carteira usando sua frase de recupera\xe7\xe3o.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de ter uma carteira, clique em Conectar para se conectar via Bloom. Um prompt de conex\xe3o aparecer\xe1 no aplicativo para voc\xea confirmar a conex\xe3o.",
          "title": "Clique em Conectar"
        }
      }
    },
    "bybit": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o Bybit na sua tela inicial para acessar sua carteira mais rapidamente.",
          "title": "Abra o aplicativo Bybit"
        },
        "step2": {
          "description": "Voc\xea pode facilmente fazer backup de sua carteira usando nosso recurso de backup em seu telefone.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de escanear"
        }
      },
      "extension": {
        "step1": {
          "description": "Clique no canto superior direito do seu navegador e fixe a Carteira Bybit para acesso f\xe1cil.",
          "title": "Instale a extens\xe3o da Carteira Bybit"
        },
        "step2": {
          "description": "Crie uma nova carteira ou importe uma existente.",
          "title": "Criar ou Importar uma carteira"
        },
        "step3": {
          "description": "Depois de configurar a Carteira Bybit, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "binance": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o Binance na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Abra o aplicativo Binance"
        },
        "step2": {
          "description": "Voc\xea pode facilmente fazer backup de sua carteira usando nosso recurso de backup em seu telefone.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o WalletConnect"
        }
      }
    },
    "coin98": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar a Carteira Coin98 na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Abra o aplicativo Carteira Coin98"
        },
        "step2": {
          "description": "Voc\xea pode facilmente fazer backup de sua carteira usando nosso recurso de backup em seu telefone.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, uma solicita\xe7\xe3o de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Clique no canto superior direito do seu navegador e fixe a Carteira Coin98 para f\xe1cil acesso.",
          "title": "Instale a extens\xe3o da Carteira Coin98"
        },
        "step2": {
          "description": "Crie uma nova carteira ou importe uma existente.",
          "title": "Criar ou Importar uma carteira"
        },
        "step3": {
          "description": "Depois de configurar a Carteira Coin98, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar a Carteira Coinbase na tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo Coinbase Wallet"
        },
        "step2": {
          "description": "Voc\xea pode fazer backup da sua carteira facilmente usando o recurso de backup na nuvem.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, um prompt de conex\xe3o aparecer\xe1 para que voc\xea conecte sua carteira.",
          "title": "Toque no bot\xe3o de escanear"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Coinbase Wallet na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Coinbase Wallet"
        },
        "step2": {
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Uma vez que voc\xea configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "compass": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar a Carteira Compass na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Compass Wallet"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "core": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o Core na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Abra o aplicativo Core"
        },
        "step2": {
          "description": "Voc\xea pode facilmente salvar sua carteira usando nosso recurso de backup no seu celular.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o WalletConnect"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Core na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Core"
        },
        "step2": {
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "fox": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o FoxWallet na tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo FoxWallet"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, uma solicita\xe7\xe3o de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de escaneamento"
        }
      }
    },
    "frontier": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o Frontier Wallet na tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo Frontier Wallet"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de varredura"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fixar a Carteira Frontier na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o da Carteira Frontier"
        },
        "step2": {
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo imToken",
          "description": "Coloque o aplicativo imToken na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do Scanner no canto superior direito",
          "description": "Escolha Nova Conex\xe3o, em seguida, escaneie o c\xf3digo QR e confirme o prompt para conectar."
        }
      }
    },
    "iopay": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar o ioPay na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Abra o aplicativo ioPay"
        },
        "step2": {
          "description": "Voc\xea pode facilmente fazer backup de sua carteira usando nosso recurso de backup em seu telefone.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o WalletConnect"
        }
      }
    },
    "kaikas": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Kaikas na sua barra de tarefas para acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Kaikas"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Kaikas",
          "description": "Coloque o aplicativo Kaikas na sua tela inicial para acessar sua carteira mais rapidamente."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do Scanner no canto superior direito",
          "description": "Escolha Nova Conex\xe3o, em seguida, escaneie o c\xf3digo QR e confirme o prompt para conectar."
        }
      }
    },
    "kaia": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Kaia na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o Kaia"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Kaia",
          "description": "Coloque o aplicativo Kaia na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do Scanner no canto superior direito",
          "description": "Escolha Nova Conex\xe3o, em seguida, escaneie o c\xf3digo QR e confirme o prompt para conectar."
        }
      }
    },
    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Kraken Wallet",
          "description": "Adicione o Kraken Wallet \xe0 tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Kresus Wallet",
          "description": "Adicione a Carteira Kresus \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "magicEden": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Magic Eden",
          "description": "Recomendamos fixar o Magic Eden na sua barra de tarefas para facilitar o acesso \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta de recupera\xe7\xe3o com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo MetaMask",
          "description": "Recomendamos colocar o MetaMask na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o escanear",
          "description": "Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o MetaMask",
          "description": "Recomendamos fixar o MetaMask na barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize o seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o NestWallet",
          "description": "Recomendamos fixar o NestWallet na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "okx": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo da Carteira OKX",
          "description": "Recomendamos colocar a Carteira OKX na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer o backup da sua carteira utilizando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o de digitaliza\xe7\xe3o",
          "description": "Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o OKX Wallet",
          "description": "Recomendamos fixar a OKX Wallet na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer o backup da sua carteira utilizando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize o seu navegador",
          "description": "Uma vez que voc\xea configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "omni": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Omni",
          "description": "Adicione o Omni \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Coloque o 1inch Wallet na sua tela inicial para acessar sua carteira mais rapidamente.",
          "title": "Abra o aplicativo 1inch Wallet"
        },
        "step2": {
          "description": "Crie uma carteira e nome de usu\xe1rio, ou importe uma carteira existente.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o Scan QR"
        }
      }
    },
    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo TokenPocket",
          "description": "Recomendamos colocar o TokenPocket na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o de digitaliza\xe7\xe3o",
          "description": "Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o TokenPocket",
          "description": "Recomendamos fixar o TokenPocket em sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Uma vez que voc\xea configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "trust": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Trust Wallet",
          "description": "Coloque o Trust Wallet na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque em WalletConnect nas Configura\xe7\xf5es",
          "description": "Escolha Nova Conex\xe3o, depois escaneie o QR code e confirme o prompt para se conectar."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Trust Wallet",
          "description": "Clique no canto superior direito do seu navegador e marque Trust Wallet para f\xe1cil acesso."
        },
        "step2": {
          "title": "Crie ou Importe uma carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois que configurar a Trust Wallet, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Uniswap",
          "description": "Adicione a Carteira Uniswap \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Zerion",
          "description": "Recomendamos colocar o Zerion na sua tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o de digitaliza\xe7\xe3o",
          "description": "Depois de digitalizar, um prompt de conex\xe3o aparecer\xe1 para que voc\xea possa conectar sua carteira."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Zerion",
          "description": "Recomendamos fixar o Zerion na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Rainbow",
          "description": "Recomendamos colocar o Rainbow na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Voc\xea pode facilmente fazer backup da sua carteira usando nosso recurso de backup no seu telefone."
        },
        "step3": {
          "title": "Toque no bot\xe3o de digitalizar",
          "description": "Depois de escanear, uma solicita\xe7\xe3o de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira."
        }
      }
    },
    "enkrypt": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar a Carteira Enkrypt na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o da Carteira Enkrypt"
        },
        "step2": {
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize o seu navegador"
        }
      }
    },
    "frame": {
      "extension": {
        "step1": {
          "description": "Recomendamos fixar o Frame na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale o Frame e a extens\xe3o complementar"
        },
        "step2": {
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "one_key": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o OneKey Wallet",
          "description": "Recomendamos fixar a OneKey Wallet na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Uma vez que voc\xea configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo ParaSwap",
          "description": "Adicione a Carteira ParaSwap \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      }
    },
    "phantom": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Phantom",
          "description": "Recomendamos fixar o Phantom na sua barra de tarefas para facilitar o acesso \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta de recupera\xe7\xe3o com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "rabby": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Rabby",
          "description": "Recomendamos fixar Rabby na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "ronin": {
      "qr_code": {
        "step1": {
          "description": "Recomendamos colocar a Carteira Ronin na tela inicial para um acesso mais r\xe1pido.",
          "title": "Abra o aplicativo Carteira Ronin"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira.",
          "title": "Toque no bot\xe3o de escanear"
        }
      },
      "extension": {
        "step1": {
          "description": "Recomendamos fixar a Carteira Ronin na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira.",
          "title": "Instale a extens\xe3o da Carteira Ronin"
        },
        "step2": {
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m.",
          "title": "Criar ou Importar uma Carteira"
        },
        "step3": {
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o.",
          "title": "Atualize seu navegador"
        }
      }
    },
    "ramper": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Ramper",
          "description": "Recomendamos fixar o Ramper na sua barra de tarefas para um acesso mais f\xe1cil \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "safeheron": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Core",
          "description": "Recomendamos fixar Safeheron na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer o backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "taho": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Taho",
          "description": "Recomendamos fixar o Taho na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer o backup da sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "wigwam": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Wigwam",
          "description": "Recomendamos fixar o Wigwam na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "talisman": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Talisman",
          "description": "Recomendamos fixar o Talisman na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Crie ou Importe uma Carteira Ethereum",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase de recupera\xe7\xe3o com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize o seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "xdefi": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o XDEFI Wallet",
          "description": "Recomendamos fixar a Carteira XDEFI na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Zeal",
          "description": "Adicione a Carteira Zeal \xe0 sua tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no \xedcone do QR e escaneie",
          "description": "Toque no \xedcone QR na sua tela inicial, escaneie o c\xf3digo e confirme o prompt para conectar."
        }
      },
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Zeal",
          "description": "Recomendamos fixar o Zeal na sua barra de tarefas para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "safepal": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o da Carteira SafePal",
          "description": "Clique no canto superior direito do seu navegador e fixe a Carteira SafePal para f\xe1cil acesso."
        },
        "step2": {
          "title": "Criar ou Importar uma carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar a Carteira SafePal, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Carteira SafePal",
          "description": "Coloque a Carteira SafePal na tela inicial para um acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque em WalletConnect nas Configura\xe7\xf5es",
          "description": "Escolha Nova Conex\xe3o, em seguida, escaneie o c\xf3digo QR e confirme o prompt para conectar."
        }
      }
    },
    "desig": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o Desig",
          "description": "Recomendamos fixar Desig na sua barra de tarefas para facilitar o acesso \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      }
    },
    "subwallet": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o SubWallet",
          "description": "Recomendamos fixar SubWallet na sua barra de tarefas para acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase de recupera\xe7\xe3o com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo SubWallet",
          "description": "Recomendamos colocar SubWallet na tela inicial para acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o de escanear",
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira."
        }
      }
    },
    "clv": {
      "extension": {
        "step1": {
          "title": "Instale a extens\xe3o CLV Wallet",
          "description": "Recomendamos fixar CLV Wallet na sua barra de tarefas para acesso mais r\xe1pido \xe0 sua carteira."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Atualize seu navegador",
          "description": "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extens\xe3o."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo da carteira CLV",
          "description": "Recomendamos colocar a Carteira CLV na tela inicial para acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma Carteira",
          "description": "Certifique-se de fazer backup de sua carteira usando um m\xe9todo seguro. Nunca compartilhe sua frase secreta com ningu\xe9m."
        },
        "step3": {
          "title": "Toque no bot\xe3o de escanear",
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira."
        }
      }
    },
    "okto": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Okto",
          "description": "Adicione Okto \xe0 sua tela inicial para acesso r\xe1pido"
        },
        "step2": {
          "title": "Crie uma carteira MPC",
          "description": "Crie uma conta e gere uma carteira"
        },
        "step3": {
          "title": "Toque em WalletConnect nas Configura\xe7\xf5es",
          "description": "Toque no \xedcone Scan QR no canto superior direito e confirme o prompt para conectar."
        }
      }
    },
    "ledger": {
      "desktop": {
        "step1": {
          "title": "Abra o aplicativo Ledger Live",
          "description": "Recomendamos colocar o Ledger Live na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Configure seu Ledger",
          "description": "Configure um novo Ledger ou conecte-se a um j\xe1 existente."
        },
        "step3": {
          "title": "Conectar",
          "description": "Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Ledger Live",
          "description": "Recomendamos colocar o Ledger Live na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Configure seu Ledger",
          "description": "Voc\xea pode sincronizar com o aplicativo de desktop ou conectar seu Ledger."
        },
        "step3": {
          "title": "Escanear o c\xf3digo",
          "description": "Toque em WalletConnect e em seguida mude para Scanner. Depois de escanear, aparecer\xe1 um prompt de conex\xe3o para voc\xea conectar sua carteira."
        }
      }
    },
    "valora": {
      "qr_code": {
        "step1": {
          "title": "Abra o aplicativo Valora",
          "description": "Recomendamos colocar o Valora na tela inicial para um acesso mais r\xe1pido."
        },
        "step2": {
          "title": "Criar ou Importar uma carteira",
          "description": "Crie uma nova carteira ou importe uma existente."
        },
        "step3": {
          "title": "Toque no bot\xe3o de escanear",
          "description": "Depois que voc\xea escanear, um prompt de conex\xe3o aparecer\xe1 para voc\xea conectar sua carteira."
        }
      }
    }
  }
}
`},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,a,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,a){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||a.hasOwnProperty(r)||Object.defineProperty(a,r,{enumerable:!0,get:function(){return e[r]}})}),a},r.export=function(e,a,r){Object.defineProperty(e,a,{enumerable:!0,get:r})}},{}]},[],null,"parcelRequireb5b4"),globalThis.define=a;