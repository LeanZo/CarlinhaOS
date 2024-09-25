'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Folder, File, X, Maximize2, Minimize2, MessageCircle, User, Battery, Wifi, Volume2, AlertTriangle } from 'lucide-react'

// Sample data structure for our files and folders
const fileSystem = {
  'Casos Arquivados': {
    '2022': {
      'Operação Estrondo': {
        'estrondo.docx': `Após meses de investigação, fomos capazes de encontrar a origem do Cidinazol. A droga estava sendo produzida em um laboratório clandestino em Cidade do Vale da Neblina, uma pequena cidade no interior do estado do Rio de Janeiro.\n
No entanto, a localização exata do laboratório ainda era desconhecida. A operação Estrondo foi montada para localizar e desmantelar a operação de produção de Cidinazol.\n
Eventualmente conseguimos estabelecer conexão com um informante que nos forneceu a localização exata do laboratório.\n
Durante a madrugada, agentes se infiltraram no local e conseguiram plantar explosivos em pontos estratégicos do laboratório.\n
Apesar de alguns incidentes a operação foi um sucesso e a produção de Cidinazol foi interrompida.`,
        'destroços.png': '/images/destroços.png',
        'notas_da_investigação.txt': `Por que tivemos tão pouca resistência? Será que a operação foi vazada?\n
O informante foi confiável? Será que ele estava nos enganando o tempo todo?\n
O que aquelas pessoas estavam fazendo no laboratório? Será que eram reféns?\n
Talvez eles saibam algo sobre o tremor que sentimos antes da explosão...\n
A lua vermelha estava no céu naquela noite. Será que isso tem alguma relação com o Cidinazol?`,
      },
      'Projeto Silêncio Total': {
        'silencio_total.docx': `O Projeto Silêncio Total foi uma operação de censura e encobrimento de informações sobre a operação Estrondo.\n
O objetivo era evitar que informações sobre a operação vazassem para a imprensa e para a população em geral.\n
Agentes foram enviados para monitorar e interceptar qualquer tentativa de divulgação de informações sobre a operação.\n
Além disso, uma campanha de desinformação foi montada para fazer a população acreditar que a Karma Labs, empresa responsável pela produção de Cidinazol, havia sido fechada por irregularidades fiscais.\n
Com isso, o Cidinazol foi retirado de circulação e a operação Estrondo foi mantida em segredo.`,
        'suspenso.png': '/images/suspenso.png',
        'notas_da_investigação.txt': `Será que existe a possibilidade da Karma Labs retomar a produção de Cidinazol?\n
Quem eram os responsáveis pela produção de Cidinazol?\n
Nunca encontramos quem estava por trás da produção da droga.\n
Será que a operação Estrondo foi realmente um sucesso?`,
      },
      'Unidade de Terapia Intensiva': {
        'uti.docx': `Durante a operação Estrondo, cinco pessoas foram resgatadas do laboratório. Todas apresentavam estado de saúde extremamente grave e estavam inconscientes.\n
Elas foram levadas para a Unidade de Terapia Intensiva da Corporação Dharma.\n
Apesar dos esforços dos médicos, somente uma pessoa se recuperou. Outras três permanecem em coma.\n
Uma outra pessoa está desaparecida após um incidente na UTI.`,
        'pacientes.docx': `Os pacientes resgatados do laboratório eram:\n
- Lucio Oliveira, inconsciente\n
- Rafael Gomes, inconsciente\n
- Camila Gomes, inconsciente\n
- Hannah Pinheiro, recuperada\n
- Sylian Nial, desaparecido\n

Sabe-se que Rafael e Camila Gomes são casados e que Camila havia sido convidada a palestrar na Karma Labs. É possivel que Camila tenha sido sequestrada e levada ao laboratório contra sua vontade. Rafael, ao descobrir o sequestro de sua esposa, pode ter ido atrás dela e sido capturado também.\n
Sylian Nial possuia um blog onde denunciava atividades ilegais de empresas e políticos. É possível que ele tenha sido sequestrado por suas atividades de denúncia.\n
Lucio Oliveira era considerado uma pessoa peculiar e solitária. Não se sabe muito sobre ele.\n
Hannah Pinheiro é uma cientista ex-funcionária da Karma Labs. Serviu de informante durante a Operação Estrondo. Ela foi resgatada do laboratório em estado grave, mas se recuperou rapidamente. Integrou-se as forças da Dharma Corp. Apesar de sua recuperação, ela precisa de cuidados médicos constantes.`,
      'incidente.docx': `Nove meses após a internação dos pacientes resgatados do laboratório, um incidente ocorreu na UTI da Corporação Dharma.\n
Durante a madrugada, os sistemas de segurança de Carlinha-chan foram desativados junto de um blackout na região.\n
Quando a energia foi restabelecida, um dos pacientes, Sylian Nial, havia desaparecido.\n
Não havia sinais de arrombamento na UTI e as câmeras de segurança não registraram nada.\n
A Dra. Hannah Pinheiro, conseguiu extrair e isolar a unica pista do incidente: um virus de computador com propriedades suprareais que infectou o sistema de segurança.\n
PLΔZΔ.exe\n
Apesar dos esforços de Dra. Hannah e Carlinha-chan, a origem virus do virus ainda é desconhecida.`,
    'lucio_oliveira.png': '/images/lucio_oliveira.png',
    'rafael_gomes.png': '/images/rafael_gomes.png',
    'camila_gomes.png': '/images/camila_gomes.png',
    'hannah_pinheiro.png': '/images/hannah_pinheiro.png',
    'sylian_nial.png': '/images/sylian_nial.png',
      },
    },
  },
  'Casos Em Andamento': {
    '2023': {
      'Operação Véu Escarlate': {
        'veu_escarlate': `Lendas antigas falam de um véu escarlate que cobre a Cidade do Vale da Neblina. É dito que um grupo conhecido como "Culto da Mão de Sangue" é responsável por invocar o véu e trazer desgraça para a cidade.\n
O culto é extremamente reservado mas tem sido associado a diversos crimes e desaparecimentos na região há séculos.\n
Não se sabe ao certo o que é o véu escarlate e qual o objetivo do culto. Mas algumas das lendas falam que o véu é uma passagem e precisa ser enxarcado com sangue para ser aberto.\n
A operação Véu Escarlate foi montada para investigar e desmantelar o culto e descobrir a origem do véu escarlate.\n
Até o momento, não temos informações concretas sobre o culto ou o véu escarlate.\n
A investigação está em andamento.`,
        'veu.png': '/images/veu.png',
        'notas_da_investigação.txt': `Durante o período em que a Karma Labs estava em operação, os desaparecimentos da região eram todos relacionados a droga Cidinazol.\n
Com a interrupção da produção de Cidinazol, os desaparecimentos continuaram, mas agora com um padrão diferente. O mesmo padrão relacionado ao culto da Mão de Sangue.\n
Por que o culto começou a agir agora? Será que eles estavam envolvidos de alguma forma com a Karma Labs?\n
A Lua Vermelha foi vista no céu após a explosão do laboratório da Karma Labs. Será a Lua Vermelha o véu escarlate?\n
Por que a Lua Vermelha ocorreu na mesma noite da explosão do laboratório da Karma Labs? Será que a explosão foi um ritual para abrir o véu escarlate?\n
É possivel que o culto tenha nos manipulado para abrir o véu escarlate?
O que acontecerá se o véu escarlate for aberto?`,
      },
    },
    '2024': {
      'Operação Plaza': {
        'plaza.docx': `Nos anos 2000, um shopping center no Rio de Janeiro foi fechado após uma série de desaparecimentos e incidentes inexplicáveis.\n
Recentemente a história do shopping voltou a tona e jovens começaram a explorar o local e postar fotos e vídeos nas redes sociais.\n
No entanto, alguns desses jovens começaram a desaparecer misteriosamente, após visitar as ruínas do shopping.\n
A Operação Plaza foi montada para investigar e resgatar as pessoas desaparecidas no shopping center abandonado.\n
Até o momento, não temos informações concretas sobre o que está acontecendo no shopping.\n
Uma equipe da Corporação Dharma será enviada o local.\n
A investigação está em andamento.`,
        'shopping.png': '/images/shopping.jpg',
      },
    }
  },
}

type FileContent = string

interface File {
  name: string
  content: FileContent
}

interface Message {
  sender: 'user' | 'assistant'
  content: string
}

const messageSystem: { [key: string]: any } = {
  '1': {
    sender: "assistant",
    content: "Olá, Doutora! Então você recebeu minha mensagem. Como posso ajudá-la hoje?",
    audio: "/audios/ola_doutora.mp3",
    responses: [
      {
        toId: '2',
        content: "Oi, Carlinha. Como vai você?",
        sender: "user"
      },
      {
        toId: '3',
        content: "Já chegou a chata. Vai chata, fala.",
        sender: "user"
      }
    ]
  },
  '2': {
    sender: "assistant",
    content: "Estou bem, obrigada por perguntar. E você, como está?",
    audio: "/audios/estou_bem.mp3",
    responses: [
      {
        toId: '4',
        content: "Estou bem também. O que você tem para mim hoje?",
        sender: "user"
      },
      {
        toId: '4',
        content: "Na mesma de sempre... Alguma novidade?",
        sender: "user"
      }
    ]
  },
  '3': {
    sender: "assistant",
    content: "Haha, você é sempre tão direta. Vamos ao que interessa então. O que você gostaria de saber?",
    audio: "/audios/sempre_direta.mp3",
    responses: [
      {
        toId: '4',
        content: "Hahaha desculpa, Carlinha. Alguma novidade?",
        sender: "user"
      },
      {
        toId: '4',
        content: "Alguma atividade recentemente?",
        sender: "user"
      }
    ]
  },
  '4': {
    sender: "assistant",
    content: "Parece que chegou um caso novo para você. Ainda estou compilando as informações. Já já fica prontinho ok?",
    audio: "/audios/caso_novo.mp3",
    unblock: true,
    responses: []
  },
  '5': { // Casos Arquivados/2022/Operação Estrondo/estrondo.docx
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '6',
        content: "Eles consideram aquilo um sucesso? A operação foi um desastre!",
        sender: "user"
      }
    ]
  },
  '6': {
    sender: "assistant",
    content: "Bem, se você considerar que o laboratório realmente foi explodido, então talvez tenha sido um sucesso... Mas, doutora, novamente investigando casos antigos?",
    audio: "/audios/sucesso.mp3",
    responses: [
      {
        toId: '7',
        content: "Explodiram, mas não encontraram nada. E sim, estou vendo casos antigos. Algum problema?",
        sender: "user"
      },
      {
        toId: '8',
        content: "Você tem razão. Mas algo ainda me incomoda. O que você acha?",
        sender: "user"
      }
    ]
  },
  '7': {
    sender: "assistant",
    content: "Não, não, claro que não. Você é a melhor investigadora que conheço. Mas talvez todas as evidências tenham sido destruídas na explosão.",
    audio: "/audios/casos_antigos.mp3",
    unblock: true,
    responses: []
  },
  '8': {
    sender: "assistant",
    content: "Eu acho que você está pensando com o coração e não com a cabeça. Talvez seja hora de seguir em frente, doutora. Não temos como trazer o passado de volta.",
    audio: "/audios/seguir_em_frente.mp3",
    unblock: true,
    responses: []
  },
  '9': { //Casos Arquivados/2022/Operação Estrondo/destroços.png
    sender: "assistant",
    content: "E pensar que a doutora estava lá naquela noite. Você se lembra do que aconteceu?",
    audio: "/audios/lembrar.mp3",
    block: true,
    responses: [
      {
        toId: '10',
        content: "Apenas alguns flashes. A explosão, o tremor, a lua vermelha...",
        sender: "user"
      }
    ]
  },
  '10': {
    sender: "assistant",
    content: "Praticamente um milagre você ter sobrevivido. Fico muito feliz por isso, doutora.",
    audio: "/audios/sobrevivido.mp3",
    unblock: true,
    responses: []
  },
  '11': { //Casos Arquivados/2022/Projeto Silêncio Total/silencio_total.docx
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '12',
        content: "Tiraram o Cidinazol de circulação, mas trouxeram o estoque todo pra cá...",
        sender: "user"
      }
    ]
  },
  '12': {
    sender: "assistant",
    content: "No geral, o Cidinazol é muito eficiente pra curar os agentes durante a missão. Faz sentido mantermos um estoque.",
    audio: "/audios/estoque.mp3",
    responses: [
      {
        toId: '13',
        content: "Faz sentido. Talvez eu nem estivesse viva se não fosse por isso",
        sender: "user"
      },
      {
        toId: '14',
        content: "E quando acabar o estoque? O que faremos? Vamos começar a produzir, assim como a Karma Labs?",
        sender: "user"
      }
    ]
  },
  '13': {
    sender: "assistant",
    content: "Exatamente. O Cidinazol é um medicamento muito eficaz. Se nós da Dharma formos cautelosos, não teremos problemas.",
    audio: "/audios/cautelosos.mp3",
    unblock: true,
    responses: []
  },
  '14': {
    sender: "assistant",
    content: "Não, não, não. Não podemos fazer isso. A Karma Labs foi fechada por um motivo. Não podemos repetir os erros do passado. Mas ainda não temos uma alternativa para o Cidinazol.",
    audio: "/audios/erros_do_passado.mp3",
    unblock: true,
    responses: []
  },
  '15': { //Casos Arquivados/2022/Unidade de Terapia Intensiva/pacientes.docx
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '16',
        content: "Parece que não só a Dharma Corp andava investigando a Karma Labs...",
        sender: "user"
      },
      {
        toId: '17',
        content: "Os únicos que podem me dizer o que realmente aconteceu naquela noite estão descansando tranquilamente na UTI... Que odio...",
        sender: "user"
      }
    ]
  },
  '16': {
    sender: "assistant",
    content: "Sim, parece que a Karma Labs estava envolvida em muitos esquemas ilegais. Eles provávelmente tinham muitos inimigos.",
    audio: "/audios/esquemas_ilegais.mp3",
    unblock: true,
    responses: []
  },
  '17': {
    sender: "assistant",
    content: "Eu entendo a sua frustração, doutora. Infelizmente só podemos torcer para que eles acordem logo.",
    audio: "/audios/frustracao.mp3",
    unblock: true,
    responses: []
  },
  '18': { //Casos Arquivados/2022/Unidade de Terapia Intensiva/incidente.docx
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '19',
        content: "O que será que aconteceu com o Sylian? Ele foi sequestrado?",
        sender: "user"
      }
    ]
  },
  '19': {
    sender: "assistant",
    content: "É uma possibilidade. Mas não temos evidências concretas. O que sabemos é que ele desapareceu sem deixar rastros... Ou quem sabe, ele foi na verdade resgatado?",
    audio: "/audios/sequestrado.mp3",
    responses: [
      {
        toId: '20',
        content: "Alguma novidade sobre o PLΔZΔ.exe?",
        sender: "user"
      },
      {
        toId: '21',
        content: "De qualquer forma o ataque e o desaparecimento do Sylian estão relacionados, com certeza.",
        sender: "user"
      }
    ]
  },
  '20': {
    sender: "assistant",
    content: "Desculpa, doutora, mas ainda não consegui nada. Você sabe, a natureza suprareal do vírus dificulta a análise, mesmo para mim.",
    audio: "/audios/virus.mp3",
    unblock: true,
    responses: []
  },
  '21': {
    sender: "assistant",
    content: "Também acredito nisso mas é dificil ter certeza. Talvez se conseguirmos rastrear a origem do vírus... mas ainda não consegui nada. Você sabe, a natureza suprareal do vírus dificulta a análise, mesmo para mim.",
    audio: "/audios/virus2.mp3",
    unblock: true,
    responses: []
  },
  '22': { //Casos Arquivados/2022/Unidade de Terapia Intensiva/sylian_nial.png
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '23',
        content: "O que são essas coisas na cabeça dele?",
        sender: "user"
      }
    ]
  },
  '23': {
    sender: "assistant",
    content: "Desculpa, doutora, eu realmente gosto de você. Mas eu não posso falar sobre isso. É confidencial.",
    audio: "/audios/confidencial.mp3",
    unblock: true,
    responses: []
  },
  '24': { //Casos Em Andamento/2023/Operação Véu Escarlate/veu_escarlate
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '25',
        content: "O que você acha que é o véu escarlate?",
        sender: "user"
      },
      {
        toId: '26',
        content: "Por que Vale da Neblina é tão estranha?",
        sender: "user"
      }
    ]
  },
  '25': {
    sender: "assistant",
    content: "Comparando com outros casos similares, eu chutaria que é algum tipo de ritual de invocação. Mas claro que é só um palpite.",
    audio: "/audios/invocacao.mp3",
    unblock: true,
    responses: []
  },
  '26': {
    sender: "assistant",
    content: "Quanto mais uma região sofre colapsos, mais alterado fica o local. O que por sua vez facilita novos colapsos. É um ciclo vicioso. Vale da Neblina é um exemplo disso.",
    audio: "/audios/vale_da_neblina.mp3",
    unblock: true,
    responses: []
  },
  '27': { //Leu todos os arquivos
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '28',
        content: "Carlinha, sobre o caso novo, terminou de compilar as informações?",
        sender: "user"
      }
    ]
  },
  '28': {
    sender: "assistant",
    content: "Sim, doutora. O caso novo é a Operação Plaza. É sobre um shopping center abandonado, aqui mesmo no Rio de Janeiro. Parece um caso simples de desaparecimentos. Te liberei o acesso aos arquivos.",
    audio: "/audios/plaza.mp3",
    unblock: true,
    responses: []
  },
  '29': { //Leu todos os arquivos da Operação Plaza
    sender: "assistant",
    content: "",
    block: true,
    responses: [
      {
        toId: '30',
        content: "De fato parece ser apenas alguns TikTokers burros se metendo em encrenca",
        sender: "user"
      },
      {
        toId: '30',
        content: "Entrei no shopping abandonado e olha no que deu (DESAPARECI?!?)",
        sender: "user"
      }
    ]
  },
  '30': {
    sender: "assistant",
    content: "Hahaha, essa geração TikTok é realmente um caso a parte. Mas não podemos subestimar o perigo. Vamos investigar o caso com cuidado, ok?",
    audio: "/audios/tiktok.mp3",
    responses : [
      {
        toId: '31',
        content: "É nosso trabalho, né? Vamos lá.",
        sender: "user"
      }
    ]
  },
  '31': {
    sender: "assistant",
    content: "Doutora! Temos um problema! Detectei uma invasão no sistema! Vou iniciar as contramedidas imediatamente!",
    audio: "/audios/invasao.mp3",
    responses: []
  },
  '32': {
    sender: "assistant",
    content: "Meu deus, doutora! Você não vai acreditar! A assinatura desses ataques... é a mesma do virus plaza de dois anos atrás! O vírus está de volta! Além disso, consegui rastrear a origem do ataque. Está vindo de dentro do shopping abandonado! O que faremos?",
    audio: "/audios/assinatura.mp3",
    responses: []
  },
};

let fileMessages: { [key: string]: any } = {
  'Casos Arquivados/2022/Operação Estrondo/estrondo.docx': {
    id: '5',
    firstRun: true
  },
  'Casos Arquivados/2022/Operação Estrondo/destroços.png': {
    id: '9',
    firstRun: true
  },
  'Casos Arquivados/2022/Projeto Silêncio Total/silencio_total.docx': {
    id: '11',
    firstRun: true
  },
  'Casos Arquivados/2022/Unidade de Terapia Intensiva/pacientes.docx': {
    id: '15',
    firstRun: true
  },
  'Casos Arquivados/2022/Unidade de Terapia Intensiva/incidente.docx': {
    id: '18',
    firstRun: true
  },
  'Casos Arquivados/2022/Unidade de Terapia Intensiva/sylian_nial.png': {
    id: '22',
    firstRun: true
  },
  'Casos Em Andamento/2023/Operação Véu Escarlate/veu_escarlate': {
    id: '24',
    firstRun: true
  },
};

function BootAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          onComplete()
          return 100
        }
        return prevProgress + 10
      })
    }, 300)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="text-white text-4xl font-bold mb-8 animate-pulse">
        CarlinhaOS 0.6
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'hannah.pinheiro' && password === 's4mu3ls2') {
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-green-800">
      <div className="w-96 p-8 bg-blue-100 border-2 border-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Bem vindo ao CarlinhaOS</h2>
          <p className="text-sm text-blue-600">Para acessar, insira suas credenciais</p>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden">
            <Image src="/images/carlinha-chan-icon.png" alt="User Avatar" className="w-full h-full object-cover" width={580} height={580} />
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="User name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Logar
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:underline focus:outline-none" onClick={() => window.close()}>
            Desligar o computador
          </button>
        </div>
      </div>
    </div>
  )
}

function AlertModal({ onClose }: { onClose: () => void }) {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([])

  useEffect(() => {
    const messages = [
      "ALERTA: Acesso não autorizado detectado!",
      "Iniciando varredura do sistema...",
      "Escaneando conexões de rede...",
      "Detectando origem do ataque...",
      "AVISO: Múltiplas tentativas de violação identificadas",
      "Rastreando endereço IP...",
      "Geolocalização: Rio de Janeiro, Brasil",
      "Codinome do atacante: 'PLΔZΔ'",
      "Nível de ameaça: CRÍTICO",
      "Iniciando contramedidas...",
      "URGENTE: Ação imediata necessária!"
    ]
    console.log(messages);
    messages.forEach((message, index) => {
      setTimeout(() => {
        setConsoleOutput(prev => Array.from(new Set([...prev, message])))
      }, index * 1000)
    })
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 border-2 border-red-500 rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-2" size={24} />
            <h2 className="text-xl font-bold text-red-500">BRECHA DE SEGURANÇA DETECTADA</h2>
          </div>
        </div>
        <div className="bg-black p-4 rounded mb-4 h-64 overflow-y-auto">
          <pre className="text-green-500 font-mono text-sm">
            {consoleOutput.join('\n')}
          </pre>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={() => window.open('/docs/invite.html', '_blank')}
          >
            Iniciar contramedidas
          </button>
        </div>
      </div>
    </div>
  )
}

export function ArgOs() {
  const [openFiles, setOpenFiles] = useState<File[]>([])
  const [activeFile, setActiveFile] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [actualMessage, setActualMessage] = useState<any>({})
  const [isBooting, setIsBooting] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [fileExplorerBlocked, setFileExplorerBlocked] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [distinctReadFiles, setDistinctReadFiles] = useState<string[]>([])
  const [readAll, setReadAll] = useState(false)
  const [readAllPlaza, setReadAllPlaza] = useState(false)
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => sendMessage(messageSystem['1']), 1000)
      return () => clearTimeout(timer)
    }
  }, [isLoggedIn])

  useEffect(() => {
    //scroll to bottom
    const chatWindow = document.getElementById('chat') as HTMLDivElement
    if (chatWindow) {
      chatWindow.scrollTo(0, chatWindow.scrollHeight)
    }
  }, [actualMessage]);
  
  useEffect(() => {
    if (distinctReadFiles.length == 17 && !fileExplorerBlocked && !readAll) {
      setReadAll(true);
      sendMessage(messageSystem['27']);
    }
    
    if (distinctReadFiles.length == 19 && !fileExplorerBlocked && !readAllPlaza) {
      setReadAllPlaza(true);
      sendMessage(messageSystem['29']);
    }
  }, [distinctReadFiles, fileExplorerBlocked])

  const openFile = (path: string[], content: FileContent) => {
    const newFile = { name: path.join('/'), content }
    //setOpenFiles((prev) => [...prev.filter((f) => f.name !== newFile.name), newFile])
    setOpenFiles((prev) => [newFile])
    setActiveFile(newFile.name);

    let fileMessage = fileMessages[newFile.name];
    if (fileMessage && fileMessage.firstRun) {
      sendMessage(messageSystem[fileMessage.id]);
      fileMessages[newFile.name].firstRun = false;
    }

    if (!distinctReadFiles.includes(newFile.name)) {
      setDistinctReadFiles([...distinctReadFiles, newFile.name]);
    }
  }

  const closeFile = (fileName: string) => {
    setOpenFiles((prev) => prev.filter((f) => f.name !== fileName))
    if (activeFile === fileName) {
      setActiveFile(openFiles.length > 1 ? openFiles[0].name : null)
    }
  }

  const renderFileSystem = (obj: any, path: string[] = []) => {
    return Object.entries(obj).map(([key, value]) => {
      const newPath = [...path, key]
      if (typeof value === 'object') {
        if (distinctReadFiles.length < 17 && key == '2024') {
          return (<></>);

        }
        return (
          <div key={key} className="ml-4">
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-1 rounded">
              <Folder size={20} className="text-yellow-500" />
              <span>{key}</span>
            </div>
            {renderFileSystem(value, newPath)}
          </div>
        )
      } else {
        return (
          <div
            key={key}
            className={`ml-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-1 rounded ${
              activeFile === newPath.join('/') ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => openFile(newPath, value as any)}
          >
            <File size={20} className="text-blue-500" />
            <span style={{ color: distinctReadFiles.includes(newPath.join('/')) ? '#6a6a6a' : '#000000'}}>{key}</span>
          </div>
        )
      }
    })
  }

  const sendMessage = (message: any) => {
    if(message.audio == '/audios/invasao.mp3') {
      setTimeout(() => setShowAlert(true), 1000)
      setTimeout(() => sendMessage(messageSystem['32']), 9000);
    }
    
    if (message.content)
      setMessages((prev) => [...prev, { sender: message.sender, content: message.content }])

    setActualMessage(message);

    if (message.audio) {
      const audio = new Audio(message.audio);
      audio.play();
    }

    if (message.unblock)
      setFileExplorerBlocked(false);

    if (message.block)
      setFileExplorerBlocked(true);

    //scroll to bottom
    const chatWindow = document.getElementById('chat') as HTMLDivElement
    chatWindow.scrollTo(0, chatWindow.scrollHeight)

    if (message.sender == 'user') {
      setTimeout(() => {
        //find the next message by key
        const nextMessage = messageSystem[message.toId];
        if (nextMessage)
          sendMessage(nextMessage);
      }, 1000)
    }
  }

  if (isBooting) {
    return <BootAnimation onComplete={() => setIsBooting(false)} />
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-bold">CarlinhaOS</span>
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Wifi size={16} />
          <Battery size={16} />
          <Volume2 size={16} />
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>Hannah Pinheiro</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full w-full backdrop-blur-sm backdrop-brightness-50 p-4 flex flex-col">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 flex-1 overflow-auto mb-4">
            {fileExplorerBlocked && <div className="absolute inset-0 bg-black bg-opacity-50 z-10 w-1/3"></div>}
            <div className="flex h-full">
              <div className={`w-1/3 border-r border-gray-300 pr-4 ${fileExplorerBlocked ? 'overflow-hidden' : 'overflow-auto'}`}>
                <h2 className="text-xl font-bold mb-4">File Explorer</h2>
                {renderFileSystem(fileSystem)}
              </div>
              <div className="w-2/3 pl-4 overflow-auto">
                {openFiles.map((file) => (
                  <div
                    key={file.name}
                    className={`mb-4 border border-gray-300 rounded-lg`}
                  >
                    <div className="bg-gray-200 p-2 rounded-t-lg flex justify-between items-center">
                      <span className="font-medium">{file.name}</span>
                      <div className="flex space-x-2">
                        {/* <Minimize2 size={16} className="cursor-pointer" />
                        <Maximize2 size={16} className="cursor-pointer" /> */}
                        {/* <X size={16} className="cursor-pointer" onClick={() => closeFile(file.name)} /> */}
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-b-lg" style={{ fontFamily: 'Courier New, monospace' }}>
                      {file.content.startsWith('/images/') ? (
                        <Image src={file.content} alt="Destroços" width={1024} height={1024} />
                      ) : (
                        <pre className="whitespace-pre-wrap">{file.content}</pre>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carlinha-chan Chat Window */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-64 z-20" style={{height: '24rem'}}>
            <div className="bg-green-700 text-white p-2 flex items-center">
              <Image src="/images/carlinha-chan-icon.png" alt="Carlinha-chan" className="w-10 h-10 rounded-full mr-2" width={580} height={580} />
              <span className="font-bold">Carlinha-chan</span>
            </div>
            <div id="chat" className="flex-1 overflow-y-auto p-2">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex flex-wrap">
              {actualMessage?.responses?.map((message: any, index: any) => (
                <button
                  key={index}
                  className="flex-1 text-left p-2 hover:bg-gray-100 rounded m-1 ring-2 ring-green-500"
                  onClick={() => sendMessage(message)}
                >
                  {message.content}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showAlert && <AlertModal onClose={() => setShowAlert(false)} />}
    </div>
  )
}