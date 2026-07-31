import { useEffect, useState } from 'react'
import Brazil from '@react-map/brazil'
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  CalendarDays,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Play,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const stats = [
  ['20', 'shows'],
  ['9', 'workshops'],
  ['9', 'masterclasses'],
  ['38', 'ações culturais'],
  ['6', 'estados brasileiros'],
  ['140 mil', 'pessoas impactadas'],
]

const values = ['Diversidade cultural', 'Inclusão', 'Formação', 'Sustentabilidade', 'Economia criativa', 'Acessibilidade', 'Inovação', 'Colaboração']

const circuits = [
  ['01', 'Cariri', 'Crato · CE'],
  ['02', 'Sertão do Araripe', 'Serrolândia · PE'],
  ['03', 'Sul de Minas', 'Sapucaí-Mirim · MG'],
  ['04', 'Paraty', 'Paraty · RJ'],
  ['05', 'Serra da Mantiqueira', 'Campos do Jordão · SP'],
  ['06', 'Litoral Norte', 'Caraguatatuba · SP'],
  ['07', 'Vale do Paraíba', 'Pindamonhangaba · SP'],
  ['08', 'Litoral Norte II', 'São Sebastião · SP'],
  ['09', 'Encerramento', 'São José dos Campos · SP'],
]

const formation = [
  {
    tag: 'Workshops',
    title: 'Criar, produzir e circular',
    text: 'Encontros para estudantes, músicos e produtores culturais sobre processos criativos, produção musical, economia criativa, diversidade e circulação artística.',
  },
  {
    tag: 'Masterclasses',
    title: 'Saber que circula',
    text: 'Aulas abertas com a banda e especialistas convidados para trocar experiências, valorizar culturas locais, desenvolver técnica e construir redes.',
  },
  {
    tag: 'Diálogos',
    title: 'Escuta que vira encontro',
    text: 'Conversas entre artistas, mestres da cultura, produtores, instituições e estudantes sobre música brasileira, inovação, sustentabilidade e políticas culturais.',
  },
]

const team = {
  Direção: [
    ['Márcio Figueiredo', 'Direção artística'],
    ['Nilo Nunes', 'Coordenação musical'],
    ['Israel Figueiredo', 'Produção executiva'],
    ['Felipe Siqueira', 'Coordenação técnica'],
    ['Renata Lopes', 'Comunicação e acessibilidade'],
  ],
  Artistas: [
    ['Adriano da Silva', 'Música'], ['Alessandro de Moura', 'Música'], ['Marcos Amancio', 'Música'],
    ['Márcio Figueiredo', 'Música'], ['Wellington Siqueira', 'Música'], ['Herbert Cassiano', 'Música'],
    ['Daniel dos Santos', 'Música'], ['Vitor Monteiro', 'Música'], ['Sostenes de Sousa', 'Música'],
    ['Marcos Moreira', 'Música'], ['Thaís de Oliveira', 'Música'], ['Juliana Ramos', 'Música'],
  ],
  Técnica: [
    ['Ademir Caetano', 'Som'], ['Deoclécio Soares', 'Som'], ['Ulysses de Melo', 'Iluminação'],
    ['Elian de Oliveira', 'Iluminação'], ['Rafael Souza', 'Fotografia'], ['Everton Félix', 'Fotografia'],
    ['William Oliveira', 'Audiovisual'],
  ],
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{children}</p>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [teamTab, setTeamTab] = useState<keyof typeof team>('Direção')

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Balaio de Ostra — início">
          <span className="brand-mark"><img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="" /></span>
          <span><b>Balaio</b><small>de Ostra</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#projeto">O projeto</a><a href="#circuitos">Circuitos</a><a href="#formacao">Formação</a><a href="#banda">A banda</a><a href="#contato">Contato</a>
        </nav>
        <a className="nav-cta" href="#circuitos">Ver agenda <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="Márcio Figueiredo durante apresentação da Banda Balaio de Ostra" />
        <div className="hero-wash" />
        <div className="hero-route route-lines" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero-content">
          <Eyebrow light>Um projeto da Banda Balaio de Ostra</Eyebrow>
          <h1>Caminhos da<br /><em>Música Brasileira</em></h1>
          <p className="hero-copy">Uma circulação cultural que conecta diferentes territórios brasileiros por meio da música, da formação artística e do intercâmbio entre mestres, artistas e comunidades.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#projeto">Conheça o projeto <ArrowDown size={17} /></a>
            <a className="button button-ghost" href="#circuitos"><CalendarDays size={17} /> Agenda</a>
          </div>
          <div className="hero-metrics"><b>20 shows</b><span>9 workshops</span><span>9 masterclasses</span><span>6 estados</span></div>
        </div>
        <div className="scroll-note"><span>Explore os caminhos</span><ArrowDown size={15} /></div>
      </section>

      <section className="intro section" id="projeto">
        <div className="section-head">
          <div><Eyebrow>Sobre o projeto</Eyebrow><h2>Quando um caminho de vida<br />vira caminho <em>para todos.</em></h2></div>
          <p>“Caminhos da Música Brasileira” é um projeto nacional de circulação cultural idealizado pela Banda Balaio de Ostra, com apresentações musicais, workshops e masterclasses em diferentes regiões do Brasil.</p>
        </div>
        <div className="intro-grid">
          <div className="manifesto-card">
            <span>Do Cariri ao Brasil</span>
            <blockquote>Mais do que uma turnê, uma rede viva de encontros.</blockquote>
            <p>O projeto transforma a trajetória da banda em uma metodologia de integração entre territórios, artistas, estudantes, produtores culturais e comunidades.</p>
            <div className="mini-route route-lines" aria-hidden="true"><i /><i /><i /></div>
          </div>
          <div className="purpose-grid">
            <article><span>01</span><h3>Nossa missão</h3><p>Democratizar o acesso à cultura por meio da música brasileira, fortalecendo identidades, formação artística e conexões entre regiões.</p></article>
            <article><span>02</span><h3>Nossa visão</h3><p>Consolidar uma rede permanente entre artistas, instituições, comunidades e novos públicos pela valorização da diversidade musical.</p></article>
          </div>
        </div>
        <div className="values-row" aria-label="Valores do projeto">{values.map((value) => <span key={value}><Sparkles size={13} /> {value}</span>)}</div>
      </section>

      <section className="numbers section-dark">
        <div className="section compact"><Eyebrow light>O projeto em números</Eyebrow><div className="stats-grid">{stats.map(([number, label], index) => <article key={label}><span>0{index + 1}</span><strong>{number}</strong><p>{label}</p></article>)}</div></div>
      </section>

      <section className="stage-gallery" aria-label="Banda Balaio de Ostra em apresentação">
        <figure className="stage-gallery-main">
          <img src={`${import.meta.env.BASE_URL}images/indio.jpg`} alt="Vocalista da Banda Balaio de Ostra durante apresentação ao vivo" width="4000" height="2252" loading="lazy" decoding="async" />
          <figcaption><span>Balaio de Ostra</span><b>Doze artistas, um só repertório</b></figcaption>
        </figure>
        <figure className="stage-gallery-secondary">
          <img src={`${import.meta.env.BASE_URL}images/sax-e-batera.png`} alt="Banda Balaio de Ostra reunida durante apresentação ao vivo" width="1280" height="854" loading="lazy" decoding="async" />
          <figcaption><span>A banda</span><b>Encontro de ritmos</b></figcaption>
        </figure>
      </section>

      <section className="circuits section" id="circuitos">
        <div className="section-head align-end">
          <div><Eyebrow>Os circuitos</Eyebrow><h2>Nove rotas.<br /><em>Um só Brasil.</em></h2></div>
          <p>Cada circuito reúne apresentação musical, workshop, masterclass, especialista local, comunicação e registro audiovisual. Os territórios abaixo formam o percurso-base; novas conexões completam a circulação por seis estados.</p>
        </div>
        <div className="circuit-layout">
          <div className="map-card" aria-label="Mapa conceitual dos caminhos pelo Brasil">
            <div className="map-title"><span>Nordeste</span><span>Sudeste</span></div>
            <div className="brazil-map">
              <Brazil
                type="select-multiple"
                size={500}
                mapColor="#174d42"
                strokeColor="#092f29"
                strokeWidth={1.4}
                hoverColor="#f4d46f"
                selectColor="#e7b52c"
                cityColors={{
                  Ceará: '#e7b52c',
                  Pernambuco: '#e7b52c',
                  'Minas Gerais': '#e7b52c',
                  'Rio de Janeiro': '#e7b52c',
                  'São Paulo': '#e7b52c',
                }}
                hints
                hintTextColor="#092f29"
                hintBackgroundColor="#f4d46f"
                hintPadding="6px 9px"
                hintBorderRadius={0}
                disableClick
              />
            </div>
            <div className="map-legend" aria-label="Estados do percurso-base">
              {['CE', 'PE', 'MG', 'RJ', 'SP'].map((state) => <span key={state}><i />{state}</span>)}
            </div>
            <div className="map-caption"><MapPin size={16} /><span>Da origem no Cariri à consolidação no Vale do Paraíba.</span></div>
          </div>
          <div className="circuit-list">{circuits.map(([number, name, city]) => <article key={number}><span>{number}</span><div><h3>{name}</h3><p>{city}</p></div><ChevronRight size={18} /></article>)}</div>
        </div>
      </section>

      <section className="formation section-dark" id="formacao">
        <div className="section compact">
          <div className="section-head"><div><Eyebrow light>Formação cultural</Eyebrow><h2>Conhecimento também<br /><em>precisa circular.</em></h2></div><p>Experiências gratuitas e acessíveis que aproximam saberes técnicos, práticas artísticas e culturas locais.</p></div>
          <div className="formation-grid">{formation.map((item, index) => <article key={item.tag}><span>{item.tag}</span><div className="formation-icon">0{index + 1}</div><h3>{item.title}</h3><p>{item.text}</p><a href="#contato" aria-label={`Saiba mais sobre ${item.tag}`}>Saiba mais <ArrowRight size={16} /></a></article>)}</div>
        </div>
      </section>

      <section className="band section" id="banda">
        <div className="band-photo"><img src={`${import.meta.env.BASE_URL}images/banda.jpeg`} alt="Banda Balaio de Ostra reunida durante apresentação ao vivo" width="1280" height="854" loading="lazy" decoding="async" /><span>14 anos de estrada</span></div>
        <div className="band-copy"><Eyebrow>Banda Balaio de Ostra</Eyebrow><h2>Um sotaque que<br />atravessou <em>o Brasil.</em></h2><p>A Banda Balaio de Ostra pesquisa e valoriza a música brasileira em um trabalho autoral atravessado por samba, baião, coco, maracatu, forró, MPB e outras manifestações populares.</p><p>Sua trajetória conecta as raízes nordestinas do diretor artístico Márcio Figueiredo à consolidação do grupo em São José dos Campos, construindo uma identidade baseada na diversidade cultural brasileira.</p><div className="band-facts"><span><b>2012</b> primeira apresentação profissional</span><span><b>≈60</b> apresentações por ano</span></div></div>
      </section>

      <section className="commitments section">
        <div className="section-head"><div><Eyebrow>Compromissos</Eyebrow><h2>Cultura que cuida<br /><em>do seu entorno.</em></h2></div><p>Inclusão, acessibilidade e sustentabilidade orientam todas as etapas — da produção ao legado.</p></div>
        <div className="commitment-grid">
          <article><Users /><h3>Diversidade e inclusão</h3><p>Participação ativa de mulheres, pessoas negras, nordestinas, indígenas, LGBTQIAPN+, pessoas com deficiência e grupos historicamente sub-representados.</p></article>
          <article><Check /><h3>Acessibilidade</h3><p>Libras, materiais digitais acessíveis, espaços preparados, comunicação inclusiva e recursos adequados à natureza de cada ação.</p></article>
          <article><Sparkles /><h3>Sustentabilidade</h3><p>Menos impressos, e-book por QR Code, reciclagem, campanhas solidárias e contratação de profissionais nos territórios visitados.</p></article>
        </div>
        <div className="legacy"><span>Legado</span><p>Uma rede de intercâmbio entre artistas, especialistas, estudantes e comunidades — porque patrimônio vivo se constrói em movimento.</p></div>
      </section>

      <section className="team section" id="equipe">
        <div className="team-header"><div><Eyebrow>Quem faz acontecer</Eyebrow><h2>Nossa equipe</h2></div><div className="team-tabs" role="tablist">{Object.keys(team).map((tab) => <button key={tab} className={teamTab === tab ? 'active' : ''} onClick={() => setTeamTab(tab as keyof typeof team)} role="tab" aria-selected={teamTab === tab}>{tab}</button>)}</div></div>
        <div className="team-list">{team[teamTab].map(([name, role], index) => <article key={`${name}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{role}</p></article>)}</div>
      </section>

      <section className="news section-dark" id="noticias"><div className="section compact"><div className="section-head"><div><Eyebrow light>Notícias e registros</Eyebrow><h2>Os caminhos<br /><em>continuam aqui.</em></h2></div><p>Agenda, releases, bastidores, fotografias e vídeos dos circuitos serão publicados neste espaço ao longo da circulação.</p></div><div className="news-placeholder"><Play fill="currentColor" /><div><span>Em breve</span><h3>Histórias dos territórios, em imagem e som.</h3></div></div></div></section>

      <section className="partners section"><Eyebrow>Parceiros</Eyebrow><div className="partner-box"><span>Espaço reservado às marcas</span><p>Apoiadores e patrocinadores do projeto</p></div></section>

      <footer id="contato">
        <div className="footer-main">
          <div><Eyebrow light>Vamos conversar</Eyebrow><h2>A música abre<br /><em>novos caminhos.</em></h2></div>
          <div className="contact-links"><a href="mailto:marciofigueiredo.sjc@gmail.com"><Mail /> <span><small>E-mail</small>marciofigueiredo.sjc@gmail.com</span></a><a href="https://www.instagram.com/balaiodeostra/" target="_blank" rel="noreferrer"><AtSign /> <span><small>Instagram</small>@balaiodeostra</span></a></div>
        </div>
        <div className="footer-bottom"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="" /></span><span><b>Balaio</b><small>de Ostra</small></span></a><p>Do Cariri ao Vale do Paraíba, conectando o Brasil pela música.</p><span>© 2026 Balaio de Ostra</span></div>
      </footer>
    </main>
  )
}

export default App
