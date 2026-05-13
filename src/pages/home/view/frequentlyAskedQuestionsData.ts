export interface QuestionsAndAnswersItem {
  id: number;
  type: string;
  question: string;
  answer: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionsAndAnswersItem[] = [
  {
    id: 1,
    type: 'instituicao',
    question: 'Qual o objetivo do SouJunior?',
    answer:
      'A SouJunior tem como missão apoiar e preparar profissionais juniores para o mercado de tecnologia por meio do voluntariado, promovendo aprendizado, conexão e desenvolvimento na prática.',
  },
  {
    id: 2,
    type: 'instituicao',
    question: 'Como posso participar da Comunidade SouJunior?',
    answer:
      'Você pode entrar na nossa comunidade acessando o servidor do SouJunior no Discord e no GitHub. Para se tornar membro oficialmente, é só ir no menu "Nossas Iniciativas" no site, clicar em "Conheça outras iniciativas" e preencher o formulário de candidatura. Depois disso, nosso tempo entra em contato com você!',
  },
  {
    id: 3,
    type: 'instituicao',
    question: 'A SouJunior oferece ajuda de custo para voluntários?',
    answer:
      'Não. Todas as atividades no SouJunior são voluntárias e realizadas de forma remota (home office).',
  },
  {
    id: 4,
    type: 'instituicao',
    question:
      'A SouJunior ajuda os juniores a entrarem no mercado de trabalho?',
    answer:
      'Sim. A SouJunior contribui para a inserção de profissionais juniores no mercado de trabalho ao promover o desenvolvimento de competências técnicas e comportamentais por meio de vivências práticas em um ambiente colaborativo. Nossa atuação é focada na formação integral do júnior, incentivando o protagonismo, a responsabilidade e a construção de repertório profissional relevante para os desafios do início de carreira.',
  },
  {
    id: 5,
    type: 'voluntario',
    question: 'Como ser voluntário no SouJunior?',
    answer:
      'É simples! Acesse o menu “Faça Parte” em nosso site, você será redirecionado para o formulário de candidatura. Após o envio, seu perfil será avaliado e entraremos em contato quando surgir uma oportunidade com seu perfil.',
  },
  {
    id: 6,
    type: 'voluntario',
    question: 'Quanto tempo preciso me dedicar por semana?',
    answer:
      'As atividades são majoritariamente assíncronas, o que permite mais flexibilidade. Cada vez possui metas e alguns encontros pontuais. Durante o processo seletivo, alinhe com o Head da área o tempo médio esperado e veja possibilidades de adaptação.',
  },
  {
    id: 7,
    type: 'voluntario',
    question: 'O que acontece depois que eu enviei minha candidatura?',
    answer:
      'Seu perfil entra em nosso banco de talentos. Assim que surgir uma vaga compatível, a equipe de recrutamento entrará em contato, geralmente pelo LinkedIn.',
  },
  {
    id: 8,
    type: 'voluntario',
    question:
      'Posso ser voluntário mesmo trabalhando em outra empresa ou iniciativa?',
    answer:
      'Sim! Você pode conciliar ou voluntariar-se com outras atividades profissionais ou voluntárias.',
  },
  {
    id: 9,
    type: 'voluntario',
    question: 'Preciso ir até algum lugar para atuar como voluntário?',
    answer: 'Não. Todas as atividades são 100% remotas (home office).',
  },
  {
    id: 10,
    type: 'mentor',
    question: 'Como posso me tornar um mentor no SouJunior?',
    answer:
      'Mentores apoiam juniores na execução de atividades, esclarecendo dúvidas e orientando sobre a área de atuação. Para ser mentor, é necessário ter pelo menos 6 meses de experiência e disposição para ensinar. Para se candidatar, acesse o menu “Faça Parte”. Após o envio do formulário, você será avaliado e contatado quando surgir uma oportunidade com seu perfil.',
  },
  {
    id: 11,
    type: 'mentor',
    question: 'Como posso me tornar um Head na SouJunior?',
    answer:
      'Os Heads lideram áreas e projetos na SouJunior, apoiando o tempo na entrega de resultados e desenvolvimento de habilidades. As vagas para Head são abertas conforme necessidade interna. Se tiver interesse, envie a sua candidatura pelo menu “Faça Parte”. Após o envio do formulário, você será avaliado e contatado quando surgir uma oportunidade com seu perfil.',
  },
  {
    id: 12,
    type: 'mentor',
    question: 'Como ser um Apoiador ou Parceiro na SouJunior?',
    answer:
      'O Apoiador ou Parceiro na SouJunior, poderá incrementar seu portfólio ou envolver-se com alguma ação dentro da SouJunior. Portanto, se você acredita que pode contribuir como Apoiador ou Parceiro no SouJunior, selecione no Menu da Home do Site SouJunior a opção “Seja um apoiador”, leia sobre os tipos de apoio que o SouJunior oferece e clique em “Participar”.',
  },
];
