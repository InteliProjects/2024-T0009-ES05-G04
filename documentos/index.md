  <table>
<tr>
<Table>
  <tr>
    <td><a href= "https://gerandofalcoes.com//"><img src="/imagens/logo-gerandofalcoes.png" alt="Gerando Falcões" border="0"></td>
    <td>
      <a href= "https://www.inteli.edu.br/"><img src="/imagens/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

# Falcon 5 (F5)

## Falcon 5 (F5)

## :student: Integrantes:

- <a href="https://www.linkedin.com/in/breno-santana-4a1912228/">Breno Santana</a>
- <a href="https://www.linkedin.com/in/eduarda-cardoso-de-souza-8bb802268/">Eduarda Cardoso de Souza</a>
- <a href="https://www.linkedin.com/in/gabriellysilvavitor/">Gabrielly Silva Vitor</a>
- <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-sotto-maior-37b906207/">João Pedro Sotto</a>
- <a href="https://www.linkedin.com/in/raissa-vieira-de-melo/">Raissa Vieira de Melo</a>

## Sumário

- [1. Termos e Abreviações](#1-Termos-e-Abreviações)
- [2. Visão Geral do Projeto](#2-visão-geral-do-projeto)
  - [2.1 Entendimento da Demanda](#21-Entendimento-da-Demanda)
    - [2.1.1 Partes Interessadas](#211-partes-interessadas)
    - [2.1.2 Análise da Indústria](#212-Análise-da-Indústria)
  - [2.2 Problema](#22-problema)
    - [2.2.1 Análise do Problema](#221-análise-do-problema)
    - [2.2.2 Análise do Cenário (Matriz SWOT)](<#222-Análise-do-Cenário-(Matriz-SWOT)>)
    - [2.2.3 5 Forças de Porter](#223-5-Forças-de-Porter)
- [3. Proposta da Solução](#3-Proposta-da-Solução)
  - [3.1 Descritivo Geral da Solução](#31-Descritivo-Geral-da-Solução)
  - [3.2 Proposta Tecnológica e Benefícios](#32-Proposta-Tecnológica-e-Benefícios)
    - [3.2.1 Tipo de arquitetura de nuvem escolhida](#321-Tipo-de-arquitetura-de-nuvem-escolhida)
    - [3.2.2 Arquitetura de nuvem escolhida](#322-Arquitetura-de-nuvem-escolhida)
    - [3.2.3 Benefícios trazidos pela arquitetura de nuvem proposta](#323-Benefícios-trazidos-pela-arquitetura-de-nuvem-proposta)
  - [3.3 Proposta de Valor (Value Proposition Canvas)](<#33-Proposta-de-Valor-(Value-Proposition-Canvas)>)
  - [3.4 Matriz de Risco](#34-matriz-de-risco)
- [4. Análise de experiência do usuário](#4-Análise-de-experiência-do-usuário)
  - [4.1 Perfis de Usuários](#41-Perfis-de-Usuários)
  - [4.2 Personas](#42-personas)
  - [4.3 Mapa de jornada do usuário](#43-Mapa-de-jornada-do-usuário)
- [5. Requisitos](#5-requisitos)
  - [5.1 Requisitos Funcionais](#-51-requisitos-funcionais)
  - [5.2 Requisitos Não Funcionais](#52-requisitos-não-funcionais)
  - [5.3 User Stories](#53-user-stories)
  - [5.4 Casos de Uso](#54-casos-de-uso)
- [6. Projeto de Solução](#6-Projeto-de-Solução)
  - [6.1 Diagrama de Classes](#61-Diagrama-de-Classes)
    - [6.1.1 Diagrama de Classes de Domínio](#611-Diagrama-de-Classes-de-Domínio)
    - [6.1.2 Diagrama de Classes de Implementação](#612-Diagrama-de-Classes-de-Implementação)
  - [6.2 Diagrama de Componentes da Arquitetura](#62-Diagrama-de-Componentes-da-Arquitetura)
  - [6.3 Diagrama de Implantação](#63-Diagrama-de-Implantação)
  - [6.4 Tecnologias e Ferramentas](#64-Tecnologias-e-Ferramentas)
- [7. Interface](#7-interface)
  - [7.1 Design System](#71-design-system)
  - [7.2 Projeto de Interface (Wireframes)](#72-Wireframe-Usuário-Gestor)
  - [7.3 Frontend](#73-frontend)
- [8. Projeto de Banco de Dados](#8-projeto-de-banco-de-dados)
  - [8.1 Modelo Conceitual](#81-modelo-conceitual)
  - [8.2 Modelo Lógico](#82-Modelo-Lógico)
  - [8.3 Backend com Banco de Dados](#83-backend-com-banco-de-dados)
- [9. Testes de Software](#9-testes-de-software)
  - [9.1 Demonstração da integração](#91-Testes-Iniciais)
  - [9.2 Teste de Integração](#92-Teste-de-Integração)
  - [9.3 Testes automatizados](#93-Testes-automatizados)
  - [9.4 Testes de Usabilidade](#94-Testes-de-Usabilidade)
  - [9.5 Testes de Simulação de Carga](#95-Testes-de-Simulação-de-Carga)
- [10. Procedimento de Implantação da Solução](#10-Procedimento-de-Implantação-da-Solução)
  - [10.1 Procedimento de Implantação do Sistema](#101-Procedimento-de-Implantação-do-Sistema)
    - [10.1.1 Implantação do Sistema Localmente](#1011-Implantação-do-Sistema-Localmente)
    - [10.1.2 Implantação do Sistema na Nuvem](#1012-Implantação-do-Sistema-na-Nuvem)
  - [10.2 Procedimento de Implantação do Banco de Dados](#102-Procedimento-de-Implantação-do-Banco-de-Dados)
    - [10.2.1 Implantação do Banco de Dados Localmente](#1021-Implantação-do-Banco-de-Dados-Localmente)
    - [10.2.2 Implantação do Banco de Dados na Nuvem](#1022-Implantação-do-Banco-de-Dados-na-Nuvem)
  - [10.3 Documentação Automática do Sistema (Swagger)](<#103-Documentação-Automática-do-Sistema-(Swagger)>)
- [Referências](#referências)
- [Apêndice](#apêndice)

# 1. Termos e Abreviações

&emsp;&emsp;Os termos e abreviações utilizados neste documento do projeto desenvolvido para a Gerando Falcões, desempenham um papel fundamental na comunicação eficaz e na compreensão do conteúdo, sendo essenciais para descrever de forma precisa e concisa os diversos aspectos do projeto, incluindo requisitos, funcionalidades, tecnologias e processos envolvidos.

&emsp;&emsp;Esta seção apresenta uma lista desses termos e abreviações, juntamente com suas definições, com o objetivo de facilitar a compreensão do documento e promover uma comunicação clara e consistente ao longo do desenvolvimento do projeto.

| Termo | Significado                                                           | Descrição                                                                                                                   |
| ----- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| GF    | Gerando Falcões                                                       | Um ecossistema de desenvolvimento social voltado para ajudar a população da periferia.                                      |
| ONGs  | Organizações Não Governamentais                                       | Entidades privadas, sem fins lucrativos, com o objetivo de acrescentar ou mesmo melhorar algo em uma determinada sociedade. |
| AWS   | Amazon Web Services                                                   | Plataforma de serviços de computação em nuvem.                                                                              |
| EC2   | Amazon Elastic Compute Cloud                                          | Serviço Web que fornece capacidade computacional redimensionável na nuvem.                                                  |
| RDS   | Amazon Relational Database Service                                    | Serviço de banco de dados relacional na AWS.                                                                                |
| S3    | Amazon Simple Storage Service                                         | Serviço de armazenamento de objetos na AWS.                                                                                 |
| ESG   | Environmental, Social and Governance (Ambiental, Social e Governança) | Refere-se a critérios usados pelos investidores para avaliar o impacto social e ambiental de uma empresa.                   |
| RF    | Requisito Funcional                                                   | Especificação de um comportamento de um sistema.                                                                            |
| RNF   | Requisito Não Funcional                                               | Especificação de qualidade que o sistema deve possuir.                                                                      |
| HU    | História de Usuário                                                   | Descrição simples de uma funcionalidade do sistema do ponto de vista do usuário.                                            |
| API   | Application Programming Interface                                     | Interface de programação de aplicativos, que permite a comunicação entre diferentes sistemas de software.                   |

&emsp;&emsp;Esses termos e abreviações são comuns na área de desenvolvimento de software e podem ser úteis para compreender melhor o contexto e os requisitos do projeto, com o objetivo de sempre ser consultado em casos de dúvidas.

# 2. Visão Geral do Projeto

&emsp;&emsp;Esta seção discorrerá sobre a visão geral do projeto. Será abordado o entendimento da demanda, as partes interessadas nesse projeto, uma análise da indústria e um aprofundamento sobre o problema trazido pelo parceiro.

## 2.1 Entendimento da Demanda

&emsp;&emsp;Nesta seção será feito um entendimento da demanda, descrevendo as partes interessadas e realizando uma análise da indústria de forma geral e detalhada, demonstrando a importância da Gerando Falcões como ONG no mercado.

### 2.1.1 Partes Interessadas

As principais partes interessadas envolvidas neste projeto são a Gerando Falcões (GF), um ecossistema de desenvolvimento social com o objetivo de acelerar o impacto dos líderes de favelas em todo o país na luta contra a pobreza; as ONGs apoiadas pela GF; os próprios líderes das ONGs; e os professores que ministram as oficinas.

### 2.1.2 Análise da Indústria

#### 2.1.2.1 Contexto da Indústria

&emsp;&emsp;A Gerando Falcões é uma ONG(Organização Não Governamental) que se enquadra no setor terciário da indústria, também conhecido como setor de serviços. Não possui nenhum fim lucrativo e dedica suas atividades a causas sociais, tendo como objetivo primordial promover a transformação social em comunidades periféricas, por meio de projetos nas áreas de educação, cultura, esporte, trabalho e renda.

&emsp;&emsp;O setor terciário desempenha um papel crucial nas economias modernas, proporcionando uma ampla gama de serviços essenciais para a sociedade e contribuindo significativamente para o crescimento econômico e o desenvolvimento social.

&emsp;&emsp;A Gerando Falcões atua no contexto de "Indústria social", que se refere a organizações e iniciativas que buscam promover o desenvolvimento humano e transformação social. A organização se denomina como um ecossistema de desenvolvimento social, que atua em rede para acelerar o poder de impacto de líderes em favelas do Brasil, em parceria com empresas, governos e outras organizações para ampliar seu impacto e fortalecer sua atuação.

#### 2.1.2.2 Modelo de Negócio

&emsp;&emsp;A Gerando Falcões possui um modelo de negócios diversificado, que abrange diferentes formas de captação de recursos e sustentabilidade financeira. A organização utiliza uma variedade de canais e parcerias para alcançar seus objetivos e manter suas operações funcionando, como descrito na tabela abaixo:

| Ação                                                  | Descrição                                                                                                                                                                                                                         |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Doações                                               | A Gerando Falcões recebe doações de pessoas físicas e jurídicas, que contribuem financeiramente para os projetos e iniciativas da organização.                                                                                    |
| Editais Públicos                                      | A organização busca recursos por meio de editais públicos, concorrendo a financiamentos e subsídios governamentais para implementação de programas sociais.                                                                       |
| Verba Governamental                                   | Além dos editais públicos, a Gerando Falcões também busca recursos diretamente junto ao governo, por meio de parcerias e convênios para execução de projetos sociais.                                                             |
| Monetização de Serviços                               | A organização oferece serviços remunerados, como consultorias e capacitações, para empresas e instituições, como forma de gerar receita adicional.                                                                                |
| Falcon University (Desenvolvimento de Líderes)        | A Falcon University é um programa de desenvolvimento de lideranças que oferece cursos, palestras e workshops pagos, contribuindo para a autossustentabilidade da organização.                                                     |
| Bazar/Doação                                          | A Gerando Falcões promove bazares e eventos de venda de produtos doados ou recebidos como parceria, revertendo os lucros para seus projetos sociais.                                                                              |
| Parcerias com Terceiros/Venda de Produtos de Empresas | A organização estabelece parcerias com empresas, como a Havaianas, para a venda de produtos específicos cuja receita é revertida para a Gerando Falcões.                                                                          |
| Cessão de Serviços/Produtos como AWS                  | A Gerando Falcões pode receber a cessão de serviços ou produtos de empresas, como a AWS (Amazon Web Services), para utilização em seus projetos, reduzindo custos operacionais.                                                   |
| Voluntários com Certificado                           | A organização incentiva a participação de voluntários, oferecendo certificados de participação e reconhecimento pelo trabalho voluntário, o que também contribui para o engajamento da comunidade e para a disseminação da causa. |

&emsp;&emsp;Essas estratégias permitem que a Gerando Falcões tenha uma base financeira sólida e diversificada, permitindo que suas atividades aconteçam e gerem lucro, garantindo o funcionamento e a continuidade de seus projetos e impacto positivo nas comunidades atendidas.

#### 2.1.2.3 Tendências

&emsp;&emsp;Tendência é estar atualizado sobre as tendências do mercado ajuda a garantir a oferta de produtos e serviços que atendam as necessidades e demandas dos clientes ou beneficiários, além de aumentar a credibilidade, relevância e impacto social causado.

&emsp;&emsp;A Gerando Falcões está alinhada com diversas tendências do mercado social, buscando inovar, estabelecer parcerias estratégicas e promover o engajamento da comunidade para ampliar seu impacto. Uma dessas tendências é a busca por alianças estratégicas, que são eficientes como forma de coleta de recursos. Através de parcerias com outras empresas que buscam reforçar seus valores ESG, instituições sociais como a Gerando Falcões podem receber recursos e esforço de voluntariado corporativo.

&emsp;&emsp;Além disso, o aumento no desenvolvimento de tecnologias, como a inteligência artificial, está cada vez mais presente no setor social. Isso permite maior eficácia na gestão de projetos, através do investimento em soluções para otimizar operações, melhorar a transparência e aumentar o alcance das iniciativas sociais.

&emsp;&emsp;Uma tendência importante é a crescente demanda por organizações que possam comprovar o impacto de suas ações sociais de forma mensurável. Isso inclui a avaliação de resultados e o uso de métricas específicas para demonstrar a eficiência dos programas. Portanto, a Gerando Falcões utiliza análises profundas para afirmar seu papel na sociedade e garantir que seus programas tenham um impacto positivo mensurável.

#### 2.1.2.4 3 Players de Mercado

&emsp;&emsp;No contexto de mercado, o termo "players" se refere a empresas ou organizações que atuam em um determinado mercado ou setor e que têm influência significativa sobre o mesmo. São empresas que têm uma participação relevante no mercado e que, muita das vezes, são consideradas referências ou líderes em suas áreas de atuação. Dessa forma, há organizações que são reconhecidas pelas suas iniciativas e programas sociais, bem como por sua capacidade de impactar positivamente as comunidades em que estão inseridas, assim como a Gerando Falcões.

&emsp;&emsp;Uma delas é a Fundação Bradesco, que tem o objetivo de proporcionar educação gratuita e de qualidade para crianças, jovens e adultos, prioritariamente em regiõescom vulnerabilidade socioeconômica. Pode-se citar também o Instituto Reciclar, que é uma organização sem fins lucrativos que atua na formação profissional de jovens em vulnerabilidade social, estimulando o aprendizado na prática, o desenvolvimento socioemocional e formação técnico-profissional de excelência.

&emsp;&emsp;Existe também o Instituto Coca-Cola Brasil, que é uma Organização da Sociedade Civil de Interesse Público(OSCIP) e tem como propósito ser agente de transformação social para reduzir as desigualdades e contribuir para o desenvolvimento socioeconômico do país. Vale destacar que, pela Gerando Falcões ser uma ONG sem fins lucrativos, os "players" aqui são relatados como organizações que também atuam no terceiro setor da indústria e possuem relevância mas que, não necessariamente, são competidores, já que nenhuma visa lucro e sim contribuir para o desenvolvimento da sociedade.

## 2.2 Problema

&emsp;&emsp;Nesta seção serão abordados uma análise do problema e uma análise do cenário da Gerando Falcões utilizando-se da matriz SWOT, apresentando então as forças, fraquezas, ameaças e oportunidades da Gerando Falcões no mercado/sociedade.

### 2.2.1 Análise do Problema

&emsp;&emsp;A problemática reside no fato de que mais de 80% da rede de líderes apoiada pela Gerando Falcões não utilizam uma solução para gerenciar seus atendimentos nos locais onde atuam. Isso resulta em uma escassez de informações sobre os reais impactos de suas ações, tanto para as ONGs quanto para a Gerando Falcões. Esta situação se deve, em parte, à complexidade das ferramentas de gestão disponíveis no mercado, as quais são demasiadamente complicadas para indivíduos sem experiência em tecnologia. Além disso, mesmo para aqueles familiarizados com tais tecnologias, a utilização demanda um tempo considerável, que muitas vezes não está disponível diante das múltiplas demandas e atividades.

### 2.2.2 Análise do Cenário (Matriz SWOT)

&emsp;&emsp;A análise SWOT é uma ferramenta estratégica amplamente utilizada por organizações para avaliar seus pontos fortes, fraquezas, oportunidades e ameaças. Essa técnica proporciona uma ótima visão do ambiente interno e externo de uma instituição, auxiliando na formulação de estratégias e tomadas de decisão. Ao identificar fatores críticos, a análise SWOT ajuda as empresas a maximizar seus recursos e a se adaptar ao ambiente competitivo em constante mudança.

<div align="center">
  <p>Imagem 1 - Análise SWOT</p>
  <img src="../imagens/swot_gf.jpg" alt="Análise SWOT">
  <p>Fonte: elaborada pelos autores.</p>
</div>

### Forças (Strengths):

- Impacto significativo: Mais de 700 mil pessoas impactadas indica uma ampla influência social e uma base sólida para futuras iniciativas.
- Modelos de negócios sustentáveis: A colaboração com grandes marcas sugere uma abordagem inovadora e viável economicamente.
- Políticas públicas: A utilização conjunta com tecnologias avançadas para transformação social indica eficiência e modernidade.
- Reputação: Ser reconhecida como uma organização séria e que gera valor confere credibilidade e atrai suporte.

### Fraquezas (Weaknesses):

- Projetos de longo prazo: Esses projetos podem causar desconfiança devido à demora para mostrar resultados tangíveis.
- Visibilidade das ações: A falta de visibilidade pode limitar o reconhecimento e o apoio.

### Oportunidades (Opportunities):

- Políticas públicas favoráveis: O governo atualmente conhecido por apoiar os menos favorecidos possívelmente pode oferecer vantagens para a instituição.
- Mercado de tecnologia em ascensão: Um ambiente tecnológico em crescimento oferece oportunidades para inovação e colaborações.

### Ameaças (Threats):

- Concorrência por recursos: Por mais que o objetivo final de todas seja uma transformação social nas periferias, essa 'competição' com outras ONGs por financiamento e recursos é, de certa forma, um desafio a se enfrentar.
- Instabilidade política e econômica: Estes fatores podem afetar a continuidade e a previsibilidade das operações da organização.

A análise SWOT ofereceu uma compreensão aprofundada da intituição Gerando Falcões. Ao examinar suas forças, fraquezas, oportunidades e ameaças, ganhamos uma visão clara de sua posição no mercado em que está inserido. Esse entendimento robusto nos possibilita desenvolver o projeto a fim de potencializar os pontos fortes e amenizar os pontos fracos.

### 2.2.3 5 Forças de Porter

&emsp;&emsp;A análise das Cinco Forças de Porter é uma ferramenta utilizada para avaliar o ambiente competitivo de uma indústria. Ela ajuda a identificar os fatores que afetam a lucratividade de um setor e a entender a posição competitiva de uma empresa dentro desse contexto.

&emsp;&emsp;A Gerando Falcões, em sua atuação no setor social, enfrenta uma competição significativa por recursos e doações, dada a presença de várias outras organizações semelhantes buscando apoio financeiro e de outros tipos. Essa intensidade da competição é resultado do número considerável de concorrentes existentes no mercado. No entanto, a Gerando Falcões se destaca pela sua abordagem inovadora e impacto social tangível, o que pode reduzir a pressão da competição, mas ainda assim enfrenta desafios para se destacar em meio a tantas outras organizações similares.

&emsp;&emsp;Além da competição por recursos e doações, a organização também precisa lidar com o poder de barganha dos fornecedores, especialmente no que diz respeito aos recursos humanos e financeiros. A dependência de voluntários e colaboradores para a execução de seus programas pode limitar seu poder de barganha em relação a esses recursos. Da mesma forma, a dependência de doações e financiamentos governamentais pode limitar o poder de barganha da organização em relação aos seus financiadores.

<div align="center">
  <p>Imagem 2 - 5 Forças de Porter</p>
  <img src="../imagens/5_forcas.png" alt="5 Forças de Porter">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;No que se refere ao poder de barganha dos compradores, representados pelos beneficiários e pela comunidade atendida, pode haver algum poder de barganha, especialmente se houver outras organizações oferecendo serviços semelhantes na região. No entanto, esse poder de barganha pode ser limitado devido à natureza dos serviços prestados e à escassez de alternativas viáveis.

&emsp;&emsp;A entrada de novas organizações no setor pode representar uma ameaça para a Gerando Falcões, pois aumentaria a competição por recursos e doações disponíveis. No entanto, as barreiras à entrada podem ser altas devido à necessidade de estabelecer uma reputação sólida e confiança junto aos doadores e à comunidade atendida.

&emsp;&emsp;Por fim, a Gerando Falcões também enfrenta a ameaça de produtos ou serviços substitutos, como outras organizações sociais que oferecem programas semelhantes ou alternativas de investimento social para doadores e financiadores. A diferenciação e o impacto social tangível dos programas da Gerando Falcões podem ajudar a mitigar essa ameaça, mas é importante estar atento às mudanças no ambiente competitivo e às necessidades da comunidade para se manter relevante e atrativa para seus stakeholders.

&emsp;&emsp;Nessa tabela abaixo é possível compreender melhor cada força e a explicação dos níveis descritos na imagem. Essa análise é de extrema importância para facilitar o entendimento de mercado e buscar oportunidades de melhorias, além de permitir que a Gerando Falcões possa buscar meios para se tornar cada vez mais perene.

<div align="center">
  <p>Tabela - 5 Forças de Porter</p>
</div>
  
| Força                                   | Nível | Descrição                                                                                                                                              |
| --------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ameaça de produtos substitutos          | Baixa | Geralmente não há essa visão de produtos substitutos, por se tratarem de um serviço social.                                                            |
| Ameaça de entrada de novos concorrentes | Baixa | Geralmente não há essa visão de concorrência, por se tratarem de um serviço social.                                                                    |
| Poder de negociação dos clientes        | Baixa | Os clientes são contemplados com serviços já pensados com cada realidade, portanto, geralmente não há necessidade de negociação.                       |
| Poder de negociação dos fornecedores.   | Média | Fornecedores propõem parcerias pro-bono ou com descontos, pela GF ser uma ONG. O resto dos serviços costumam ser valor total, como serviço de energia. |
| Rivalidade entre os concorrentes        | Baixa | Os concorrentes são vistos como parceiros e não existe rivalidade, pois estão envolvidos na área social.  |

<div align="center">
 <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Com base na análise realizada, é evidente que a Gerando Falcões desempenha um papel fundamental na sociedade por meio de seu trabalho social, apoiado principalmente por meio de doações e parcerias. Isso lhe permite conquistar diversos apoios para garantir a continuidade e a perenidade de suas ações junto à população brasileira.

# 3. Proposta da Solução

&emsp;&emsp;Esta seção descreverá a solução desenvolvida, incluindo as tecnologias utilizadas, como a arquitetura em nuvem, e seus benefícios. Além disso, será empregada a Value Proposition Canvas para compreender como o produto entregará valor, e a matriz de risco para fornecer um panorama dos riscos que podem afetar o projeto e como evitá-los.

## 3.1 Descritivo Geral da Solução

&emsp;&emsp;A solução desenvolvida consiste em uma plataforma projetada para auxiliar principalmente os líderes das ONGs na gestão de seus atendimentos, proporcionando também à Gerando Falcões uma compreensão mais abrangente de seus impactos nos territórios em que atuam. Esta plataforma terá seu backend desenvolvido em Node.js e seu frontend em React, ambos utilizando JavaScript, e será integrada a um banco de dados relacional.

&emsp;&emsp;O produto final será hospedado na infraestrutura em nuvem da AWS (Amazon Web Services), visando oferecer ao parceiro uma solução acessível e escalável, além de segura para os dados coletados, tantos de pessoas quanto das ONGs parceiras.

## 3.2 Proposta Tecnológica e Benefícios

&emsp;&emsp;Esta seção explora a arquitetura de nuvem escolhida para o projeto. Aqui, apresentamos uma visão geral sobre o tipo de arquitetura de nuvem, suas principais características e os benefícios trazidos por esta proposta.

### 3.2.1 Tipo de arquitetura de nuvem escolhida

&emsp;&emsp;A arquitetura em nuvem apresenta três principais modelos de implantação: pública, privada e híbrida. Cada modelo é definido por características distintas que se alinham com requisitos específicos de negócio:

Nuvem Pública: Serviços de computação são oferecidos pela internet e compartilhados entre várias organizações. É valorizada pela sua escalabilidade, flexibilidade e eficiência de custo, ideal para necessidades que variam rapidamente.

Nuvem Privada: Infraestrutura dedicada a uma única organização, proporcionando maior controle e segurança. Esse modelo é frequentemente escolhido por aqueles que têm requisitos estritos de conformidade ou necessitam de muita personalização.

Nuvem Híbrida: Combina elementos das nuvens pública e privada, permitindo que as empresas tirem proveito da escalabilidade da nuvem pública, mantendo operações críticas ou sensíveis na nuvem privada. [2]

&emsp;&emsp;Para o projeto, a arquitetura de nuvem escolhida é a nuvem pública, que oferece uma série de vantagens, como escalabilidade, flexibilidade e eficiência de custo. A escolha por este modelo é motivada pela necessidade de uma solução acessível e escalável, que possa atender às demandas variáveis da Gerando Falcões e de suas ONGs parceiras.

### 3.2.2 Arquitetura de nuvem escolhida

&emsp;&emsp;A arquitetura de nuvem escolhida para o projeto é baseada nos serviços da AWS. A arquitetura de nuvem da AWS é construída sobre um conjunto de serviços fundamentais que oferecem escalabilidade, elasticidade e alta disponibilidade. A infraestrutura global da AWS é dividida em regiões e zonas de disponibilidade:

Regiões: São locais geográficos específicos em todo o mundo onde a AWS possui clusters de data centers. A escolha da região é fundamental para otimizar a latência, cumprir requisitos legais e de conformidade, e gerenciar custos.

Zonas de Disponibilidade: Dentro de cada região, as zonas de disponibilidade consistem em um ou mais data centers isolados com sua própria alimentação, refrigeração e redes físicas. Isso é projetado para oferecer redundância e alta disponibilidade, protegendo os serviços de falhas de um único local. [3]

Elasticidade e Escalabilidade: A AWS fornece serviços como Auto Scaling e Elastic Load Balancing que permitem que as aplicações se ajustem automaticamente à demanda, adicionando ou removendo recursos conforme necessário. Isso não só garante que a aplicação possa lidar com picos de tráfego sem interrupção, mas também otimiza os custos ao ajustar os recursos para a demanda atual. [4]

Os serviços escolhidos foram:

- Amazon EC2: Oferece capacidade de computação redimensionável na nuvem, permitindo a execução de aplicativos em servidores virtuais. Utilizaremos uma instância para o deploy do backend da aplicação e outra instância para o deploy do frontend da aplicação.
- Amazon RDS: Oferece bancos de dados relacionais na nuvem, facilitando a configuração, operação e escalabilidade de bancos de dados relacionais. Utilizaremos o Amazon RDS para armazenar os dados da aplicação.
- Amazon S3: Oferece armazenamento de objetos na nuvem, permitindo armazenar e recuperar qualquer quantidade de dados de qualquer lugar. Utilizaremos o Amazon S3 para armazenar os arquivos estáticos da aplicação.

### 3.2.3 Benefícios trazidos pela arquitetura de nuvem proposta

Adotar a arquitetura de nuvem da AWS oferece diversos benefícios para o projeto:

Alta Disponibilidade: Utilizando múltiplas zonas de disponibilidade, a arquitetura garante que as aplicações permaneçam operacionais mesmo em caso de falhas em um data center. Isso é importante para manter a continuidade dos negócios e a confiança dos usuários.

Escalabilidade: A capacidade de ajustar automaticamente os recursos conforme a demanda permite que o projeto cresça de forma sustentável. Os serviços de Auto Scaling garantem que a aplicação tenha os recursos necessários durante picos de uso, sem desperdício de capacidade durante períodos de baixa demanda.

Elasticidade: A arquitetura permite um ajuste dinâmico e rápido, tanto para escalonar quanto para desescalonar recursos. Isso significa que a aplicação pode responder agilmente às mudanças de uso, otimizando os custos operacionais e garantindo desempenho.

Segurança: A AWS oferece um ambiente altamente seguro, com uma ampla gama de ferramentas e serviços dedicados à proteção de dados, identidades, aplicações e redes. A configuração de VPCs, grupos de segurança e políticas de acesso ajuda a garantir que apenas usuários autorizados possam acessar recursos específicos. [5]

## 3.3 Proposta de Valor (Value Proposition Canvas)

&emsp;&emsp;O Value Proposition Canvas é uma ferramenta essencial para entender e visualizar como um produto ou serviço cria valor para seus clientes. Ele auxilia na identificação dos elementos-chave do valor oferecido e na compreensão das necessidades, desejos e dores dos clientes.

&emsp;&emsp;No caso da GF, o VPC é fundamental para analisar como os serviços prestados pela ONG são percebidos e utilizados pelos beneficiários, permitindo ajustes e melhorias contínuas para atender às suas necessidades de forma eficaz.

<div align="center">
  <p>Imagem 3 - Value Proposition Canvas</p>
  <img src="../imagens/vpc.png" alt="Value Proposition Canvas">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;A análise do Value Proposition Canvas (VPC) da Gerando Falcões (GF) revela a sua capacidade de criar valor significativo para seus beneficiários e comunidades atendidas. Portanto, é de suma importância para compreender qual a real necessidade de todos os serviços oferecidos pela GF para a sociedade.

## 3.4 Matriz de Risco

&emsp;&emsp;A Matriz de Riscos e Oportunidades é essencial para compreender os diversos cenários que podem impactar um projeto. Por meio dessa análise, identificamos tanto os possíveis obstáculos quanto as oportunidades que podem surgir, permitindo uma gestão proativa para alcançar os objetivos com sucesso. Este recurso oferece uma visão abrangente e estratégica, orientando as decisões a fim de prevenir problemas e nos preparar para as possíveis oportunidades.

<div align="center">
  <p>Imagem 4 - Matriz de Riscos e Oportunidades</p>
  <img src="../imagens/matriz_de_risco_gf.jpg" alt="Matriz de riscos e oportunidades">
  <p>Fonte: elaborada pelos autores.</p>
</div>

#### 1) Falta de experiência dos membros do grupo em cloud computing e desenvolvimento web:

Este risco é crítico, pois a falta de conhecimento técnico pode comprometer a qualidade e a segurança do produto. Membros inexperientes podem demorar mais para realizar tarefas e aumentar a probabilidade de erros.

#### 2) Atrasos nas entregas das tarefas:

Atrasos podem ser sintomas de problemas na gestão do projeto ou na alocação de recursos. Eles podem desencadear um efeito dominó sobre outras áreas do projeto, levando a mais atrasos. É essencial uma boa prática de gestão de tempo e priorização de tarefas.

#### 3) Membros do grupo ficarem indisponíveis no período das 10 semanas de desenvolvimento:

A ausência de integrantes sobrecarrega os outros membros do grupo, o que leva a um maior tempo de execução por tarefa, prejudicando o andamento do projeto. Isso pode ser causado por doenças, problemas pessoais, compromissos urgentes, entre outros.

#### 4) Falta de comunicação entre os membros do grupo:

A comunicação ineficaz pode resultar em falhas na compreensão dos requisitos, na sincronização de atividades e na colaboração. Implementar canais de comunicação claros e regulares (a exemplo do slack) e assegurar a documentação adequada são passos fundamentais para prevenir esse risco.

#### 5) Conflitos entre membros do grupo:

Conflitos podem surgir de diferenças de personalidade ou divergências técnicas. Eles prejudicam o ambiente de trabalho e a eficiência do grupo. Saber lidar com conflitos é importante para prevenir e resolver esses desintendimentos.

#### 6) Problemas relacionados a versionamento de código:

Quando utilizamos uma ferramenta de controle de código, como o git, Estamos sujeitos a erros humanos. Podem ocorrer sobreposições de trabalho, perda de código e regressões. Apesar da chance um erro grave relacionado a versionamento acontecer, temos sempre que previnir possíveis conflitos de informações.

#### 7) Serviços de cloud da AWS ficarem indisponíveis:

A dependência de terceiros traz o risco de interrupções de serviço. Apesar da chance ser baixa, a situação ainda se apresenta como um risco.

#### 8) Gerando Falcões receber uma solução barata de ser aplicada:

Esta oportunidade refere-se à possibilidade de a equipe desenvolver uma solução de baixo custo, que não apenas maximiza os recursos disponíveis mas também garante uma implementação mais fácil e viável economicamente. Representa uma oportunidade para o grupo se consolidar nos conhecimentos adquiridos durante o módulo.

#### 9) Gerando Falcões conseguir maximizar seu impacto nas favelas:

Representa a oportunidade de a equipe fazer uma diferença significativa em comunidades carentes através de seu projeto. Isso poderia não apenas satisfazer um objetivo social valioso, mas também reforçar a reputação e a responsabilidade social da organização.

#### 10) O cliente implementar o projeto em seu negócio:

Há a chance de que o cliente não apenas aceite a solução proposta mas também a integre com sucesso em suas operações diárias, o que pode levar a impactos positivos no dia a dia da intituição e no aprendizado dos membros do grupo.

&emsp;&emsp;Ao finalizar esta seção, fica claro que essa ferramenta é importante em nosso planejamento de projeto. Ao identificar e avaliar as possíveis dificuldades e oportunidades, estamos melhor preparados para tomar decisões e agir. Essa análise nos permite mitigar os riscos, capitalizar as oportunidades e ajustar nossa abordagem conforme necessário, aumentando assim as chances de sucesso e agregando valor à Gerando Falcões.

# 4. Análise de experiência do usuário

&emsp;&emsp;Nesta seção, a análise de experiência do usuário é abordada através de ferramentas como perfis de usuários, personas e mapas de jornada do usuário. Esses elementos são fundamentais para direcionar o desenvolvimento do projeto, garantindo que a solução proposta esteja alinhada com as necessidades e expectativas dos usuários finais, promovendo assim uma experiência intuitiva e satisfatória.

## 4.1 Perfis de Usuários

&emsp;&emsp;Perfis de usuário, em termos de Experiência do Usuário (UX), são representações dos diferentes tipos de usuários que podem interagir com um sistema, produto ou serviço. Eles ajudam a identificar e entender as necessidades, objetivos e comportamentos dos usuários, servindo como uma ferramenta essencial no desenvolvimento de soluções que sejam ao mesmo tempo funcionais e satisfatórias para o usuário final. Ao definir perfis de usuário, os desenvolvedores podem criar experiências mais personalizadas e efetivas, garantindo que o produto final atenda às expectativas e requisitos de seus diferentes públicos-alvo.

### Gestor

&emsp;&emsp;O Gestor, atuando como representante da Gerando Falcões, é o perfil de usuário com a visão mais ampla e estratégica sobre a rede de ONGs. Este usuário é essencialmente um administrador de alto nível, cujas atividades são cruciais para a coordenação, monitoramento e desenvolvimento das ONGs dentro da rede. Suas principais responsabilidades incluem:

- Visão estratégica: Como representante da Gerando Falcões, o gestor tem a visão global da rede de ONGs, utilizando a plataforma para monitorar e analisar dados que ajudam na tomada de decisões estratégicas.
- Gestão de dados: Responsável por visualizar e gerir informações detalhadas de todas as entidades envolvidas (ONGs, líderes, professores, alunos), incluindo criação, edição e exclusão de registros de ONGs. Isso envolve uma compreensão profunda dos impactos sociais e a capacidade de identificar oportunidades de melhoria.
- Foco no desenvolvimento e suporte: O gestor busca constantemente formas de desenvolver e apoiar as ONGs na rede, utilizando dados para fomentar iniciativas que maximizem o impacto social.

### Líder

&emsp;&emsp;O Líder é o responsável direto por uma ONG específica dentro da rede. Este perfil envolve uma gestão mais focada e operacional, lidando com as atividades cotidianas e a administração de recursos humanos e materiais. Suas principais atividades incluem:

- Gestão operacional: Encarregado das operações diárias de uma ONG específica, o líder gerencia professores e alunos, e é responsável pela organização de oficinas.
- Diversidade de letramento digital: Com diferenças significativas em letramento digital, a interface para líderes precisa ser intuitiva, permitindo a fácil gestão de atividades, cadastros e visualizações de histórico.
- Foco em histórico e análise de dados: Acesso a dados históricos e atuais para uma gestão eficiente, permitindo o acompanhamento de progresso e identificação de áreas para melhoria.

### Professor

&emsp;&emsp;O Professor é, muitas vezes, um voluntário que desempenha um papel direto na educação e no desenvolvimento dos alunos dentro das ONGs. Este perfil é caracterizado por uma interação intensa com os alunos e foco nas atividades educacionais. As principais atividades incluem:

- Interatividade com alunos: Focado no cadastro e na gestão de alunos nas oficinas, marcando presença e garantindo a participação ativa.
- Limitações de acesso a dados: Acesso limitado às informações, centrado na administração de oficinas e na interação direta com os alunos, sem envolvimento direto na gestão estratégica da ONG.
- Voluntariado e engajamento: Muitas vezes atuando como voluntários, os professores são cruciais no engajamento e desenvolvimento dos alunos, necessitando de ferramentas que facilitem esse trabalho.

&emsp;&emsp;A definição precisa desses perfis de usuário é crucial para o desenvolvimento de uma solução que atenda efetivamente às diferentes necessidades. Permitindo uma compreensão aprofundada das necessidades, características específicas e funcionalidades requeridas para gestores, líderes e professores, esta abordagem facilita a personalização da experiência do usuário e maximiza o potencial de impacto social do projeto. Este entendimento detalhado também serve como base para a próxima etapa de definição de personas, aprimorando ainda mais a estratégia de desenvolvimento de uma solução completa que gere valor para todos os usuários.

## 4.2 Personas

&emsp;&emsp;Personas são representações fictícias de um cliente ideal. Elas são baseadas em dados reais sobre comportamentos e características demográficas dos seus clientes. São apresentadas também suas motivações, objetivos, desafios e preocupações. Essa ferramenta é útil durante o desenvolvimento de um produto, pois nos ajuda a entender nosso público-alvo.

<div align="center">
  <p>Imagem 5 - Persona Cecilia</p>
  <img src="../imagens/Persona Cecilia.png" alt="Persona Cecilia">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<div align="center">
  <p>Imagem 6 - Persona Fernanda</p>
  <img src="../imagens/Persona_Fernanda.png" alt="Persona Fernanda">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<div align="center">
  <p>Imagem 7 - Persona Marcos</p>
  <img src="../imagens/persona_marcos.jpg" alt="Persona Marcos">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<div align="center">
  <p>Imagem 8 - Persona Emanuel</p>
  <img src="../imagens/persona_emanuel.jpg" alt="Persona Emanuel">
  <p>Fonte: elaborada pelos autores.</p>
</div>

## 4.3 Mapa de jornada do usuário

&emsp;&emsp;As personas criadas pela Gerando Falcões passam por uma jornada de usuário que reflete suas necessidades e experiências. Desde o primeiro contato com os programas da organização, as personas buscam soluções para desafios como desemprego, falta de acesso à educação e condições precárias de moradia. Ao longo dessa jornada, as personas encontram na GF um apoio significativo, recebendo orientação, capacitação e oportunidades que contribuem para sua transformação social e desenvolvimento pessoal.

<div align="center">
  <p>Imagem 9 - Jornada de Usuário Gestor </p>
  <img src="../imagens/jornada_1.png" alt="Jornada de Usuário Gestor (">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Essa Jornada de Usuário está relaciona a Persona da Fernanda Montenegro, Gestora da Gerando Falcões, que tem a necessidade de uma plataforma mais intuitiva e que apresenta informações gerais e individuais das ONGs atendidas pela GF. Nessa Jornada, é possível visualizar de forma clara como será um possível caminho que um gestor pode percorrer na plataforma.

<div align="center">
  <p>Imagem 10 - Jornada de Usuário Gestor </p>
  <img src="../imagens/jornada_3.png" alt="Jornada de Usuário Líder (">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Essa Jornada de Usuário está relaciona a Persona do Emanuel Soares, Líder de uma ONG parceira da Gerando Falcões e também professor, que tem a necessidade de gerenciar as informações de sua ONG e das oficinas/aulas ministradas por ele. Nessa Jornada, é possível visualizar de forma clara como será um possível caminho que um líder pode percorrer na plataforma.

<div align="center">
  <p>Imagem 11 - Jornada de Usuário Gestor </p>
  <img src="../imagens/jornada_2.png" alt="Jornada de Usuário Professor (">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Essa Jornada de Usuário está relaciona a Persona da Cecília Perez, professora de múscia de uma ONG parceira da Gerando Falcões, que tem a necessidade de gerenciar suas oficinas, aulas e o cadastro dos alunos, além de registrar presença/frequência dos mesmos em suas atividades. Nessa Jornada, é possível visualizar de forma clara como será um possível caminho que um professor pode percorrer na plataforma.

&emsp;&emsp;Portanto, é de extrema importância entender a necessidade de cada persona e como será a jornada ideial para que o usuário posso ter a melhor e mais eficaz experiência, promovendo assim melhor rendimento e organização. Cabe à equipe de desenvolvimento analisar as dores e buscar construir a plataforma que compreenda/solucione cada caso.

# 5. Requisitos

&emsp;&emsp;Nesta seção, são detalhados os requisitos do sistema, abrangendo desde os requisitos funcionais, que definem as funcionalidades essenciais do sistema, até os requisitos não funcionais, que estabelecem padrões de desempenho e segurança. User stories e casos de uso complementam a descrição, traduzindo esses requisitos em cenários práticos de uso, assegurando assim que o desenvolvimento esteja alinhado às necessidades reais dos usuários.

## <a name="requisitos-funcionais"></a> 5.1 Requisitos Funcionais

&emsp;&emsp;Os Requisitos Funcionais desempenham um papel vital no desenvolvimento de softwares, especificando as funcionalidades que o sistema deve oferecer para atender às necessidades dos usuários. Esses requisitos detalham o comportamento do sistema, as interações com o usuário e as operações necessárias para realizar os objetivos do projeto. A elaboração precisa dos requisitos funcionais é essencial para guiar o desenvolvimento de uma solução eficaz e alinhada com as expectativas dos stakeholders. Abaixo estão listados os requisitos funcionais para o sistema:

### RF01 - Sistema de Login com Controle de Acesso

**Descrição:** O sistema deve permitir que usuários façam login utilizando seu email e senha. Após o login, o sistema deve identificar o tipo de acesso do usuário (gestor, líder, ou professor) e conceder permissões apropriadas baseadas em seu papel.
<br>**Teste:**
<br>**Pré-condição:** Usuário possuir email e senha cadastrado no banco de dados.
<br>**Procedimento:** Inserir email e senha na página de login.
Resultado esperado: O usuário recebe permissões respectivas ao seu tipo de acesso.
<br>**Pós-condição:** O usuário logado possui acesso às funcionalidades correspondentes ao seu tipo de acesso (gestor, líder ou professor).
<br>**Critério de aceitação:** Após o login bem sucedido o sistema identifica o tipo de acesso do usuário (gestor, líder ou professor).

### RF02 - Visualização de ONGs por Gestores

**Descrição:** Gestores podem visualizar ONGs.
<br>**Teste:**
<br>**Pré-condição:** Gestor logado no sistema.
<br>**Procedimento:** Acessar o menu de ONGs para visualizar as ONGs da rede.
<br>**Resultado esperado:** Lista de ONGs exibida corretamente.
<br>**Pós-condição:** Gestor pode visualizar informações detalhadas de cada ONG.
<br>**Critério de aceitação:** Lista de ONGs exibida corretamente e informações detalhadas disponíveis para visualização.

### RF03 - Gestão de Oficinas por Líderes

**Descrição:** Líderes têm permissão para criar, visualizar e editar oficinas.
<br>**Teste:**
<br>**Pré-condição:** Líder logado e associado a uma ONG.
<br>**Procedimento:** Executar operações de gestão nas oficinas (criar, visualizar, editar).
<br>**Resultado esperado:** Ações refletidas corretamente no sistema.
<br>**Pós-condição:** Atualizações salvas no banco de dados.
<br>**Critério de aceitação:** Mudanças precisam ser aplicadas de forma correta e visíveis para outros usuários autorizados.

### RF04 - Gestão de Turmas por Líderes

**Descrição:** Líderes podem criar, visualizar e editar turmas.
<br> **Teste:**
<br> **Pré-condição:** Líder logado e associado a uma ONG.
<br> **Procedimento:** O líder acessa a seção de oficinas, seleciona uma oficina específica e, dentro dela, realiza as operações de gestão de turmas (criar, visualizar ou editar turmas).
<br> **Resultado esperado:** Ações refletidas corretamente no sistema.
<br> **Pós-condição:** Atualizações estão salvas no banco de dados.
<br> **Critério de aceitação:** As mudanças devem ser aplicadas de forma correta e visíveis para outros usuários autorizados.

### RF05 - Gestão de Aulas por Líderes

**Descrição:** Líderes podem cadastrar, visualizar e excluir aulas associadas à uma turma, sem a opção de edição.
<br> **Teste:**
<br> **Pré-condição:** Líder logado e associado a uma ONG.
<br> **Procedimento:** O líder acessa a seção de turmas dentro de uma oficina específica, seleciona uma turma e realiza as operações de gestão de aulas (cadastrar, visualizar ou excluir aulas).
<br> **Resultado esperado:** Ações refletidas corretamente no sistema.
<br> **Pós-condição:** As ações realizadas nas aulas das turmas estão salvas no banco de dados.
<br> **Critério de aceitação:** As operações de cadastro, visualização e exclusão de aulas devem ser concluídas com sucesso e as mudanças devem ser persistentes no sistema, visíveis para outros usuários autorizados.

### RF06 - Gestão de Professores por Líderes

**Descrição:** Líderes podem gerenciar professores, incluindo cadastrar, visualizar e editar.
<br> **Teste:**
<br> **Pré-condição:** Líder com acesso ao sistema.
<br> **Procedimento:** Realizar uma das ações de gestão de professores.
<br> **Resultado esperado:** Sistema atualiza conforme a ação executada.
<br> **Pós-condição:** Banco de dados atualizado.
<br> **Critério de aceitação:** Operações completadas com sucesso e informações atualizadas visíveis.

### RF07 - Gestão de Alunos por Líderes

**Descrição:** Líderes podem gerenciar alunos, incluindo cadastrar, visualizar e editar.
<br> **Teste:**
<br> **Pré-condição:** Líder está autenticado no sistema.
<br> **Procedimento:** Acessar a funcionalidade de gestão de alunos e realizar uma operação.
<br> **Resultado esperado:** Alterações refletidas no sistema.
<br> **Pós-condição:** Banco de dados contém as novas informações.
<br> **Critério de aceitação:** Ações de gestão realizadas sem erros e dados corretamente criados/atualizados.

### RF08 - Cadastro de Novos Alunos na turma por Professores

**Descrição:** Professores têm a capacidade de cadastrar alunos diretamente nas turmas em que dão aula. Caso o aluno ainda não esteja cadastrado na ONG, o sistema automaticamente o adiciona à ONG antes de associá-lo à turma. Essa funcionalidade é exclusivamente para cadastro na turma, sem que o professor tenha permissões para visualizar detalhes completos, editar ou excluir registros de alunos da ONG.
<br> **Teste:**
<br> **Pré-condição:** Professor logado no sistema.
<br> **Procedimento:** Acessar a lista de alunos inscritos, clicar no botão de cadastrar novo aluno, inserir as informações necessárias e submeter o cadastro.
<br> **Resultado esperado:** O aluno é adicionado à turma e, se necessário, à ONG, com o banco de dados atualizado adequadamente.
<br> **Pós-condição:** O professor não tem acesso a funcionalidades de visualização detalhada, edição ou exclusão do aluno na ONG.
<br> **Critério de aceitação:** O sistema processa o cadastro com sucesso, adicionando o aluno à turma (e à ONG, se aplicável), sem habilitar outras operações para o professor além do cadastro.

### RF09 - Controle de Presença por Professores

**Descrição:** Professores podem marcar presença dos alunos em suas respectivas aulas nas turmas.
<br> **Teste:**
<br> **Pré-condição:** Professor logado e em uma aula específica de uma turma em que dá aula.
<br> **Procedimento:** Selecionar alunos e marcar presença.
<br> **Resultado esperado:** Presenças registradas no sistema.
<br> **Pós-condição:** Dados de presença atualizados.
<br> **Critério de aceitação:** Presença marcada corretamente para os alunos selecionados.

### RF10 - Histórico de Participação nas aulas

**Descrição:** O sistema deve permitir que líderes e gestores visualizem detalhadamente os alunos inscritos e suas presenças registradas em cada aula de uma oficina e turma específica.
<br> **Teste:**
<br> **Pré-condição:** Líder ou gestor autenticado com acesso às informações da oficina.
<br> **Procedimento:** Selecionar uma oficina específica e uma turma específica, acessar o histórico de participação para visualizar as aulas e as participações dos alunos em cada aula.
<br> **Resultado esperado:** Lista detalhada dos alunos inscritos em cada aula da oficina com indicação de presença.
<br> **Pós-condição:** Informações visualizadas.
<br> **Critério de aceitação:** O histórico de participação da oficina deve mostrar com precisão os alunos presentes e as aulas que participaram.

### RF11 - Exclusão de alunos inscritos em oficinas

**Descrição:** O sistema deve permitir que o professor da turma exclua da lista de inscritos alunos que não fazem mais parte daquela turma em questão.
<br> **Teste:**
<br> **Pré-condição:** Professor logado e com acesso à turma em que dá aula.
<br> **Procedimento:** Selecionar uma turma, acessar a lista de alunos e apertar em um botão ao lado do identificador do aluno que deseja excluir.
<br> **Resultado esperado:** Exibição de um modal para o usuário confirmar ou cancelar exclusão do aluno.
<br> **Pós-condição:** Banco de dados atualizado conforme opção escolhida. Se usuário confirmar o aluno será excluído da turma específica, caso contrário nada será alterado.
<br> **Critério de aceitação:** Lista de alunos inscritos na turma atualizada.

### RF012 - Visualização de Próximas Aulas por Professores

**Descrição:** Professores devem poder visualizar uma lista de suas próximas aulas de todas as turmas em ordem de data.
<br> **Teste:**
<br> **Pré-condição:** Professor logado no sistema.
<br> **Procedimento:** Acessar o sistema e navegar até o menu de "Próximas Aulas", que mostra todas as próximas aulas das turmas que ministra, organizadas cronologicamente.
<br> **Resultado esperado:** Exibição de uma lista ordenada de aulas futuras, incluindo detalhes como data, hora, turma e oficina associada.
<br> **Pós-condição:** O professor tem uma visão clara de seu cronograma de aulas futuras.
<br> **Critério de aceitação:** A lista de próximas aulas deve estar completa e em ordem cronológica, refletindo todas as turmas associadas ao professor.

### RF13 - Dados Gerais da ONG

**Descrição:** O sistema deve exibir os dados gerais em tempo real da ONG, proporcionando uma visão instantânea da situação atual da ONG para gestores e líderes.

- Número Total de Alunos Cadastrados na ONG
- Número Total de Alunos Inscritos em Turmas
- Número Total de Oficinas
- Número Total de Turmas
- Gráfico de Barras para Matriculados x Vagas Disponíveis

<br>**Teste:**
<br>**Pré-condição:** Gestor ou líder logado com acesso às estatísticas da ONG.
<br>**Procedimento:** Acessar a seção de Dados Gerais da ONG na tela de dados.
<br>**Resultado esperado:** Exibição correta dos dados gerais em tempo real.
<br>**Pós-condição:** As informações exibidas refletem o estado atual da ONG.
<br>**Critério de aceitação:** Os dados gerais devem ser exibidos de forma clara e precisa, permitindo uma análise imediata da situação da ONG.

### RF14 - Dados Relativos ao Último Mês da ONG

**Descrição:** O sistema deve fornecer estatísticas detalhadas relacionadas ao último mês para a ONG, permitindo que gestores e líderes monitorem as tendências e a evolução das atividades.

- Atendimentos (Mensal)
- Atendidos (Mensal)
- Frequência Mensal por Categoria
- Carga Horária Oferecida por Categoria (Mensal)

<br>**Teste:**
<br>**Pré-condição:** Gestor ou líder logado e com acesso às estatísticas mensais da ONG.
<br>**Procedimento:** Acessar a seção de Dados do Último Mês na tela de dados da ONG.
<br>**Resultado esperado:** Exibição precisa das estatísticas relacionadas ao último mês.
<br>**Pós-condição:** As estatísticas refletem os dados do mês anterior.
<br>**Critério de aceitação:** Os dados do último mês devem ser exibidos de maneira detalhada e informativa, oferecendo insights sobre as atividades da ONG no período.

Como sugestões futuras para o desenvolvimento do projeto, é essencial destacar as funcionalidades adicionais que identificamos como potencialmente valiosas para o sistema. Durante o período de 10 semanas, nossa prioridade foi atender às principais demandas estabelecidas pelo parceiro. No entanto, reconhecemos a existência de outros requisitos funcionais significativos que, devido às restrições de tempo, não foram incluídos no escopo inicial. Consideramos que essas funcionalidades têm grande importância e recomendamos que sejam abordadas em futuras iterações do projeto:

### RF00 - Habilitar Funcionalidades de Cadastro e Edição de ONGs

**Descrição:** Permitir que gestores tenham capacidade de cadastrar novas ONGs e editar informações das ONGs existentes no sistema.
<br>**Pré-condição:** Gestor autenticado no sistema.
<br>**Procedimento:** Acessar a seção de gestão de ONGs para adicionar ou modificar informações.
<br>**Resultado esperado:** O gestor pode criar novas ONGs e atualizar dados das ONGs existentes.
<br>**Pós-condição:** As informações das ONGs são atualizadas no banco de dados.
<br>**Critério de aceitação:** As informações das ONGs são gerenciadas de forma eficiente e refletem as mudanças feitas pelo gestor.

### RF00 - Implementar Funcionalidades de Exclusão

**Descrição:** Adicionar a capacidade de excluir ONGs, oficinas, turmas, professores e alunos no sistema.
<br>**Pré-condição:** Usuário com permissões adequadas autenticado no sistema.
<br>**Procedimento:** Selecionar o item a ser excluído e confirmar a ação de exclusão.
<br>**Resultado esperado:** Itens selecionados são removidos do sistema.
<br>**Pós-condição:** O banco de dados é atualizado para refletir as exclusões.
<br>**Critério de aceitação:** Itens são excluídos de forma segura e só podem ser realizados por usuários com as devidas permissões.

### RF00 - Desenvolver Tela de Dados para Gestores

**Descrição:** Criar uma tela dados para gestores, oferecendo uma visão abrangente da performance de todas as ONGs.
<br>**Pré-condição:** Gestor autenticado no sistema.
<br>**Procedimento:** Acessar a tela de estatísticas gerais para visualizar dados agregados de todas as ONGs.
<br>**Resultado esperado:** O gestor pode visualizar uma variedade de métricas e estatísticas sobre a performance das ONGs.
<br>**Pós-condição:** As estatísticas fornecem insights valiosos para a tomada de decisão.
<br>**Critério de aceitação:** As estatísticas são atualizadas, precisas e oferecem uma visão global das operações das ONGs.

### RF00 - Possibilidade de Edição de Presenças

**Descrição:** Permitir que professores ou líderes editem registros de presença após estes terem sido salvos.
<br>**Pré-condição:** Registro de presença existente no sistema.
<br>**Procedimento:** Acessar o registro de presença e realizar a edição necessária.
<br>**Resultado esperado:** Registros de presença podem ser modificados após a conclusão inicial.
<br>**Pós-condição:** Os registros de presença refletem as edições realizadas.
<br>**Critério de aceitação:** A edição de presença é realizada de forma intuitiva e os dados são consistentemente atualizados.

### RF00 - Busca Automática de Endereço através do CEP Fornecido

**Descrição:** Integrar um sistema de busca automática de endereços para facilitar o preenchimento de formulários de cadastros ao fornecer o CEP.
<br>**Pré-condição:** Usuário insere o CEP em um campo de formulário de cadastro.
<br>**Procedimento:** O sistema automaticamente busca e preenche os campos de endereço correspondentes ao CEP.
<br>**Resultado esperado:** O endereço é preenchido automaticamente após a inserção do CEP.
<br>**Pós-condição:** O formulário de endereço é preenchido com menos erros e de forma mais eficiente.
<br>**Critério de aceitação:** A busca pelo CEP resulta no preenchimento automático dos campos de endereço, melhorando a precisão e a velocidade de entrada de dados.

## 5.2 Requisitos Não Funcionais

&emsp;&emsp;Os Requisitos Não Funcionais são componentes cruciais no desenvolvimento de software, definindo critérios que não estão diretamente ligados às funções específicas do sistema, mas que são essenciais para garantir a qualidade e a eficiência do software. Estes requisitos abrangem aspectos como desempenho, segurança, confiabilidade, usabilidade e conformidade legal e regulatória, estabelecendo os padrões operacionais e técnicos que o software deve cumprir.

&emsp;&emsp;Ao contrário dos requisitos funcionais, que descrevem o que o sistema deve fazer, os requisitos não funcionais descrevem como o sistema deve ser, influenciando diretamente a experiência do usuário, a estabilidade do sistema e a facilidade de manutenção. [1] Abaixo estão listados os requisitos não funcionais para o sistema:

### RNF01 - Sistema acessível para todos os tipos de usuário

**ISO 25010:** Usabilidade.
<br>**Descrição:** O sistema deve ser simples, intuitivo e objetivo para usuários com qualquer nível de letramento digital, facilitando a navegação e compreensão.
<br>**Pré-condição:** O sistema é acessível e funcional.
<br>**Procedimento:** Usuário navegar entre as diferentes páginas e realizar ações de interação com os elementos da interface de forma eficaz, sem dificuldades significativas.
<br>**Resultado esperado:** O sistema oferece uma experiência de usuário fácil de entender e utilizar para todos os tipos de usuário.
<br>**Pós-condição:** Os usuários conseguem utilizar o sistema para realizar suas tarefas sem dificuldades e de maneira eficiente.
<br>**Critério de aceitação:** O tempo para realizar tarefas comuns no sistema ser razoável e não exigir esforços excessivos do usuário, além de todos serem capazes de utilizar a interface sem necessidade de assistência adicional.

### RNF02 - Desempenho de carregamento da tela de painel de estatísticas

**Descrição:** O sistema deve carregar a tela de painel de estatísticas em até 4 segundos.
<br> **ISO 25010:** Desempenho - Eficiência.
<br> **Teste:**
<br> **Pré-condição:** O sistema está disponível e funcional.
<br> **Procedimento:** O sistema carrega a tela de painel de estatísticas em diferentes condições de uso e carga de dados.
<br> **Resultado esperado:** A tela de painel de estatísticas é carregada dentro de 1 segundo em todas as circunstâncias.
<br> **Pós-condição:** Os usuários têm acesso rápido às estatísticas sem atrasos significativos.
<br> **Critério de aceitação:** O tempo médio de carregamento da tela de painel de estatísticas não excede 4 segundos em diferentes cenários de uso.

### RNF03 - Controle de acesso a informações

**Descrição:** O sistema deve garantir que o usuário não acesse informações indevidas para o seu tipo de acesso.
<br> **ISO 25010:** Segurança - Integridade.
<br> **Teste:**
<br> **Pré-condição:** O sistema está disponível e funcional.
<br> **Procedimento:** Os diferentes tipos de usuários tentam acessar informações não autorizadas.
<br> **Resultado esperado:** O sistema impede o acesso não autorizado a informações restritas para o tipo de usuário.
<br> **Pós-condição:** A integridade e a segurança das informações são mantidas, garantindo o acesso apenas às informações pertinentes para cada tipo de usuário.
<br> **Critério de aceitação:** Todos os acessos não autorizados são bloqueados, e os usuários só têm acesso às informações adequadas para o seu perfil.

### RNF04 - Validação de campos de entrada

**Descrição:** O sistema deve validar campos de entrada de informações.
<br> **ISO 25010:** Usabilidade - Adequação reconhecível.
<br> **Teste**:
<br> **Pré-condição:** O sistema está disponível e funcional.
<br> **Procedimento:** Os usuários tentam inserir informações em diferentes campos de entrada.
<br> **Resultado esperado:** O sistema valida os campos de entrada conforme critérios definidos.
<br> **Pós-condição:** As informações inseridas nos campos são consistentes e corretas.
<br> **Critério de aceitação:** Todas as entradas nos campos são verificadas e aceitas apenas se estiverem de acordo com os critérios de validação estabelecidos.

### RNF05 - Armazenamento em banco de dados relacional

**Descrição:** O sistema deve armazenar todas as informações relacionadas às ONGs, oficinas, aulas e usuários em um banco de dados relacional.
<br> **ISO 25010:** Manutenibilidade - Modificabilidade.
<br> **Teste:**
<br> **Pré-condição:** O sistema está disponível e funcional.
<br> **Procedimento:** Os dados relacionados às ONGs, oficinas, aulas e usuários são inseridos e armazenados no banco de dados.
<br> **Resultado esperado:** Todas as informações são armazenadas de forma correta e acessível no banco de dados relacional.
<br> **Pós-condição:** Os dados estão disponíveis para consulta e utilização em todo o sistema.
<br> **Critério de aceitação:** Todas as informações são corretamente armazenadas e recuperadas do banco de dados relacional, sem perdas ou inconsistências.

&emsp;&emsp;Portanto, os requisitos não funcionais apresentando as funcionalidades que serão expostas para os usuários, complementando a experiência dos usuários e indicando como deve ser o comportamento do sistema em relação aos seu funcionamento.

Como sugestão para implementações futuras, é possível adicionar um requisito não funcional para a responsividade do sistema, garantindo que o sistema seja acessível em diferentes dispositivos, como smartphones e tablets, além de computadores. Isso é especialmente importante para garantir que os professores e líderes possam acessar o sistema de qualquer lugar, sem depender de um computador. Pensando no escopo limitado do projeto de 10 semanas, a responsividade não foi incluída como um requisito não funcional, mas é uma consideração importante para futuras iterações do projeto.

Esse requisito seria descrito como:

### RNF00 - Sistema responsivo para dispositivos móveis

**ISO 25010:** Portabilidade.
<br>**Descrição:** O sistema deve possuir responsividade para dispositivos móveis, sendo capaz de se adaptar e fornecer uma experiência de usuário otimizada.
<br>**Pré-condição:** O sistema está disponível e funcional em dispositivos com telas menores.
<br>**Procedimento:** Acessar o sistema em diferentes dispositivos móveis.
<br>**Resultado esperado:** O sistema se ajusta dinamicamente às diferentes resoluções de tela, mantendo suas funcionalidades.
<br>**Pós-condição:** Os usuários são capazes de utilizar todas as funcionalidades do sistema de forma eficaz e sem dificuldades.
<br>**Critério de aceitação:** Todos os elementos da interface são exibidos corretamente e de maneira legível, sem comprometer a experiência do usuário.

## 5.3 User Stories

&emsp;&emsp;User Stories são uma ferramenta simples e poderosa na engenharia de software, que permite descrever recursos e funcionalidades do sistema do ponto de vista do usuário final. São frases curtas que capturam o que o usuário quer fazer e por quê, facilitando para que os desenvolvedores entendam e atendam às necessidades reais dos clientes. Elas são essenciais na metodologia ágil, ajudando a equipe a manter o foco no valor que cada funcionalidade trará para o usuário, permitindo uma colaboração mais efetiva e uma priorização clara dos trabalhos.

&emsp;&emsp;Ao invés de se perder em documentações complexas, as User Stories oferecem um caminho direto para entender e implementar os requisitos essenciais de um projeto, alinhando as expectativas e facilitando a entrega de um produto que realmente gere valor para o usuário.

As user stories foram priorizadas com base nos requisitos definidos na [seção 5.1](#requisitos-funcionais). Embora nem todas as funcionalidades tenham sido detalhadas em histórias de usuário, as histórias selecionadas representam as funcionalidades mais essenciais e relevantes para o sistema. Abaixo estão listadas as user stories para o sistema:

### HU01 - Autenticação de Usuário

**Descrição:**<br>
Como usuário do sistema, quero poder fazer login utilizando meu email e senha para acessar funcionalidades específicas designadas ao meu papel dentro da organização.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve oferecer uma interface de login onde os usuários podem inserir seu email e senha.<br>
2- Após inserção correta das credenciais, o sistema deve autenticar o usuário.<br>
3- O sistema deve identificar o tipo de acesso do usuário (gestor, líder, ou professor) baseado em suas credenciais.<br>
4- Conforme o tipo de acesso identificado, o sistema deve conceder permissões apropriadas, limitando ou habilitando acesso a funcionalidades específicas.<br>
5- Em caso de falha na autenticação, o sistema deve exibir uma mensagem de erro.<br>
**Prioridade:**<br>
Crítica<br>
**Estimativa de Esforço:**<br>
Média<br>
**Benefício do Usuário:**<br>
Proporcionar um sistema de login seguro e eficiente permite que os usuários acessem facilmente as funcionalidades necessárias para realizar suas tarefas, ao mesmo tempo em que mantém a integridade e a confidencialidade dos dados do sistema.<br>
**Persona:**<br>
Gestores, líderes e professores.<br>

### HU02 - Visualização de Informações das ONGs

**Descrição:**<br>
Como gestor, quero visualizar informações detalhadas das ONGs para gerenciar eficientemente as organizações da rede.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve exibir uma lista de todas as ONGs cadastradas na rede.<br>
2- O gestor deve ser capaz de selecionar uma ONG para visualizar informações detalhadas, como endereço e líder responsável.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Baixa<br>
**Benefício do Usuário:** Permitir que os gestores tenham um entendimento claro e completo das ONGs para tomada de decisões informada.<br>
**Persona:** Gestores.<br>

### HU03 - Cadastro de Oficinas por Líderes

**Descrição:**<br>
Como líder, quero cadastrar novas oficinas para expandir as atividades oferecidas pela minha ONG.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve fornecer um formulário para cadastrar novas oficinas.<br>
2- O líder deve preencher informações obrigatórias como nome, categoria e subcategoria da oficina.<br>
3- O sistema deve validar as informações inseridas para garantir que estão completas e corretas antes de salvar.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Média<br>
**Benefício do Usuário:** Facilitar a expansão e organização das atividades educativas e sociais oferecidas pela ONG.<br>
**Persona:** Líderes.<br>

### HU04 - Cadastro de Turmas por Líderes

**Descrição:**<br>
Como líder, quero criar turmas dentro das oficinas para poder fazer a gestão das aulas e alunos participantes.<br>
**Critérios de Aceitação:**<br>
1- O líder deve poder acessar a oficina específica e criar uma nova turma associada a ela.<br>
2- O sistema deve permitir que o líder especifique informações como o nome da turma, número de vagas oferecidas, e professor responsável.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Média<br>
**Benefício do Usuário:** Proporcionar uma organização estruturada das atividades oferecidas pela ONG.<br>
**Persona:** Líderes.<br>

### HU05 - Cadastro de Aulas por Líderes

**Descrição:**<br>
Como líder, quero cadastrar as aulas das turmas para planejar adequadamente as atividades da ONG e para que o professor possa fazer a gestão das presenças corretamente.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve permitir que o líder cadastre novas aulas dentro de uma turma específica.<br>
2- O líder deve inserir detalhes da aula, como recorrência, dias da semana e hora de início e término.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Alta<br>
**Benefício do Usuário:** Auxiliar na organização e no planejamento estruturado das atividades oferecidas pela ONG.<br>
**Persona:** Líderes.<br>

### HU06 - Visualização de Professores e Alunos da ONG por Líderes

**Descrição:**<br>
Como líder, quero visualizar os professores e alunos associados à ONG para melhor gerenciar recursos e participações.<br>
**Critérios de Aceitação:**<br>
1- O líder deve poder acessar uma lista completa de professores e alunos vinculados à ONG.<br>
2- O sistema deve permitir a visualização de detalhes específicos de cada professor e aluno, como dados pessoais e informações de contato.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Baixa<br>
**Benefício do Usuário:** Oferecer uma visão clara e simplificada de todos os envolvidos e impactados pela ONG.<br>
**Persona:** Líderes.<br>

### HU07 - Cadastro de Professores por Líderes

**Descrição:**<br>
Como líder, quero cadastrar novos professores na ONG para garantir que as turmas tenham professores responsáveis para conduzir as atividades.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve fornecer uma interface para cadastrar novos professores.<br>
2- O líder deve preencher informações essenciais do professor, como nome, cpf e email.<br>
3- O sistema deve validar os dados antes de completar o cadastro para garantir que todos os dados obrigatórios sejam preenchidos.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Média<br>
**Benefício do Usuário:** Garantir que as turmas tenham professores para conduzir as atividades.<br>
**Persona:** Líderes.<br>

### HU08 - Cadastro de Alunos por Líderes e Professores

**Descrição:**<br>
Como líder ou professor, quero cadastrar alunos na ONG para gerenciar sua participação nas atividades educativas oferecidas.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve permitir que líderes e professores cadastrem novos alunos.<br>
2- Devem ser coletadas informações básicas do aluno, como nome, idade e contato durante o processo de cadastro.<br>
3- O sistema deve verificar se o aluno já está registrado para evitar duplicidade.<br>
**Prioridade:** Alta<br>
**Estimativa de Esforço:** Média<br>
**Benefício do Usuário:** Facilitar o gerenciamento dos alunos e sua alocação nas atividades da ONG.<br>
**Persona:** Líderes e Professores.<br>

### HU09 - Inscrição de Aluno em Turma por Líderes e Professores

**Descrição:**<br>
Como líder ou professor, quero inscrever alunos em turmas específicas para organizar corretamente a distribuição dos participantes nas atividades.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve permitir a inscrição de alunos em turmas específicas por líderes e professores.<br>
2- O sistema deve assegurar que há vagas disponíveis na turma antes de completar a inscrição.<br>
3- Deve haver confirmação de inscrição para que líderes e professores tenham clareza do processo.<br>
4- Professores devem poder inscrever alunos somente nas turmas que ministram aulas.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Baixa<br>
**Benefício do Usuário:** Melhorar a organização das turmas e a eficiência das atividades educativas.<br>
**Persona:** Líderes e Professores.<br>

### HU10 - Gestão de Presença dos Alunos nas Aulas por Professores

**Descrição:**<br>
Como professor, quero registrar a presença dos alunos nas aulas para garantir que a ONG tenha registros corretos de dados.<br>
**Critérios de Aceitação:**<br>
1- Professores podem acessar a lista de participantes para cada aula.<br>
2- Professores podem marcar a presença dos alunos na lista de participantes da aula.<br>
3- Apenas professores da turma específica têm permissão para gerenciar a presença dos alunos.<br>
4- Deve haver confirmação de registro de presenças para que professores tenham clareza do processo.<br>
**Prioridade:** Alta<br>
**Estimativa de Esforço:** Baixa<br>
**Benefício do Usuário:** Manter um controle preciso da frequência dos alunos para melhorar a avaliação do engajamento e participação.<br>
**Persona:** Professores.<br>

### HU11 - Visualização do Histórico de Presenças por Aulas para Líderes

**Descrição:**<br>
Como líder, quero acompanhar o histórico de presenças em aulas para avaliar o engajamento dos alunos e o impacto gerado pela ONG.<br>
**Critérios de Aceitação:**<br>
1- O sistema deve oferecer uma funcionalidade para visualizar o histórico de participações de cada turma, incluindo cada aluno presente e não presente em cada aula.<br>
2- O sistema deve atualizar automaticamente o histórico de participações após cada aula registrada.<br>
3- Apenas gestores e líderes têm acesso ao histórico detalhado de participações por oficina.<br>
**Prioridade:** Média<br>
**Estimativa de Esforço:** Baixa<br>
**Benefício do Usuário:** Permitir que líderes façam avaliações informadas sobre a participação dos alunos e identifiquem áreas que necessitam de atenção.<br>
**Persona:** Líderes.<br>

### HU12 - Visualização de Estatísticas da ONG

**Descrição:**<br>
Como gestor ou líder, quero visualizar um painel de estatísticas da ONG que me ofereça uma visão clara e abrangente dos dados gerais e mensais, para acompanhar o desempenho da organização.
**Critérios de Aceitação:**<br>
1- O sistema deve exibir o número total de alunos cadastrados na ONG.<br>
2- O sistema deve mostrar o número total de alunos inscritos em turmas.<br>  
3- Deve indicar o número total de oficinas e turmas oferecidas pela ONG.<br>  
4- Deve fornecer um gráfico de barras para matriculados x vagas disponíveis.<br>
5- O sistema deve apresentar os atendimentos mensais e o número de atendidos no último mês.<br>  
6- Deve calcular e mostrar a frequência mensal por categoria e a carga horária oferecida por categoria (mensal).<br> 
7- Apenas gestores e líderes têm permissão para acessar o painel de estatísticas da ONG.<br>  
8- O sistema deve oferecer a visualização de dados gerais em tempo real e dados específicos do último mês em seções separadas na mesma tela.<br>
**Prioridade:**<br>
Média<br>
**Estimativa de Esforço:**<br>
Alta<br>
**Benefício do Usuário:**<br>
Acessar um painel de estatísticas completo permite aos gestores e líderes avaliar de forma eficiente o desempenho da ONG, identificar áreas de melhoria e tomar decisões estratégicas informadas.<br>
**Persona:**<br>
Gestores e líderes.<br>

&emsp;&emsp;As User Stories definidas servem como um direcionamento para o desenvolvimento do projeto, garantindo que cada funcionalidade a ser implementada seja essencial e valiosa para os usuários finais. Essas histórias de usuário foram fundamentais para entender o contexto de uso do sistema e as expectativas dos diferentes tipos de usuários – gestores, líderes e professores.

&emsp;&emsp;Com isso, é possível estabelecer uma ordem de trabalho que reflete as prioridades reais do projeto, permitindo priorização dos elementos que mais impactam a experiência do usuário. Ao final, essas User Stories não apenas guiam a criação de um sistema que atende às necessidades, mas também formam a base para testes e validações futuras, assegurando que o produto final seja prático, eficiente e acima de tudo, alinhado com a visão e missão do projeto.

## 5.4 Casos de Uso

<div align="center">
  <p>Imagem 12 - HU01 - Autenticação de Usuário</p>
  <img src="../imagens/Diagrama_HU01.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao primeiro requisito funcional (RF01)</b>

<div align="center">
  <p>Imagem 13 - HU02 - Visualização de Informações das ONGs</p>
  <img src="../imagens/Diagrama_HU02.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao segundo requisito funcional (RF02)</b>

<div align="center">
  <p>Imagem 14 - HU03 - Cadastro de Oficinas por Líderes</p>
  <img src="../imagens/Diagrama_HU03.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao terceiro requisito funcional (RF03)</b>

<div align="center">
  <p>Imagem 15 - HU04 - Cadastro de Turmas por Líderes</p>
  <img src="../imagens/Diagrama_HU04.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao quarto requisito funcional (RF04)</b>

<div align="center">
  <p>Imagem 16 - HU05 - Cadastro de Aulas por Líderes</p>
  <img src="../imagens/Diagrama_HU05.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao quinto requisito funcional (RF05)</b>

<div align="center">
  <p>Imagem 17 - HU06 - Visualização de Professores e Alunos da ONG por Líderes</p>
  <img src="../imagens/Diagrama_HU06.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao sexto requisito funcional (RF06)</b>

<div align="center">
  <p>Imagem 19 - HU07 - Cadastro de Professores por Líderes</p>
  <img src="../imagens/Diagrama_HU07.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao sétimo requisito funcional (RF07)</b>

<div align="center">
  <p>Imagem 20 - HU08 - Cadastro de Alunos por Líderes e Professores </p>
  <img src="../imagens/Diagrama_HU08.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao oitavo requisito funcional (RF08)</b>

<div align="center">
  <p>Imagem 21 - HU09 - Inscrição de Aluno em Turma por Líderes e Professores</p>
  <img src="../imagens/Diagrama_HU09.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao nono primeiro requisito funcional (RF09)</b>

<div align="center">
  <p>Imagem 22 - HU10 - Gestão de Presença dos Alunos nas Aulas por Professores</p>
  <img src="../imagens/Diagrama_HU10.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao décimo requisito funcional (RF10)</b>

<div align="center">
  <p>Imagem 23 - HU11 - Visualização do Histórico de Presenças por Aulas para Líderes</p>
  <img src="../imagens/Diagrama_HU11.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao décimo primeiro requisito funcional (RF11)</b>

<div align="center">
  <p>Imagem 24 - HU12 - Visualização de Estatísticas da ONG</p>
  <img src="../imagens/Diagrama_HU12.jpg" alt="Diagrama Caso de Uso">
  <p>Fonte: elaborada pelos autores.</p>
</div>

<b>O diagrama acima se refere ao décimo segundo requisito funcional (RF12)</b>

# 6. Projeto de Solução

&emsp;&emsp;Nesta seção, serão apresentadas todas as informações relevantes dos diagramas de classes de domínio e de implementação. Esses diagramas têm como objetivo auxiliar na compreensão e no desenvolvimento do projeto da solução, fornecendo uma estruturação completa e detalhada do software que será entregue ao parceiro deste módulo, a Gerando Falcões.

## 6.1 Diagrama de Classes

&emsp;&emsp;Nesta seção, você encontrará uma poderosa ferramenta de visualização: os Diagramas de Classes. Essenciais para compreensão e colaboração eficientes no desenvolvimento de software, esses diagramas simplificam a complexidade da arquitetura do sistema, proporcionando uma visualização clara das classes, seus relacionamentos e comportamentos. Além de facilitar a comunicação entre membros da equipe e partes interessadas, os diagramas de classes promovem a modularidade, escalabilidade e identificação de áreas para otimização, fundamentais para o sucesso do projeto de software.

### 6.1.1 Diagrama de Classes de Domínio

&emsp;&emsp;Os diagramas de classes de domínio focam na modelagem das classes específicas de um domínio de negócio, oferecendo uma representação visual das entidades, seus atributos e relacionamentos. São fundamentais para a análise e design de sistemas, permitindo uma compreensão detalhada das estruturas e comportamentos dentro de um contexto específico. Ao utilizar os Diagramas de Classes de Domínio, os desenvolvedores podem criar soluções mais alinhadas às necessidades do negócio, resultando em sistemas mais eficientes e eficazes.

&emsp;&emsp;Na solução desenvolvida para a Gerando Falcões, o diagrama de classe de domínio destaca as entidades essenciais no código, como turmas, ONGs, professores, líderes e outros elementos, mostrando suas inter-relações. Esse diagrama é crucial para garantir a organização e o entendimento do sistema, permitindo visualizar de forma clara como essas entidades se conectam, se comportam e são utilizadas na implementação da solução.

  <div align="center">
  <p>Imagem 25 - Diagrama de Classe de Domínio 
  <img src="../imagens/diagramas//Diagrama de Classe de Domínio.png" alt="Diagrama de Classe de Domínio">
  <p>Fonte: elaborada pelos autores.</p>
</div>

### Professor:

Representa um professor ou instrutor.
Atributos: identificação (id), nome, email, CPF (Cadastro de Pessoa Física, um número de identificação fiscal no Brasil), RG (Registro Geral, um documento de identidade brasileiro).
Relacionamentos:
Um professor pode ensinar em várias turmas (relacionamento 0:N com a entidade Turma).

### Aluno:

Representa um estudante ou aprendiz.
Atributos: identificação, nome, email, CPF, RG, data de nascimento, estado civil, endereço, telefone, celular, raça, gênero e o responsável pelo aluno.
Relacionamentos:
Um aluno pode estar matriculado em várias turmas (relacionamento 0:N com a entidade Turma).
Um aluno pode ter várias presenças registradas (relacionamento 0:N com a entidade Presenca).

### Turma:

Representa uma classe ou grupo de estudo.
Atributos: identificação, nome e vagas disponíveis.
Relacionamentos:
Uma turma é composta por vários alunos (relacionamento 0:N com a entidade Aluno).
Uma turma é ministrada por um ou mais professores (relacionamento 0:N com a entidade Professor).
Uma turma ocorre em uma única oficina (relacionamento 1 com a entidade Oficina).

### Oficina:

Representa um local ou evento onde ocorrem as aulas ou atividades.
Atributos: identificação, nome, categoria e subcategoria da oficina, local e observações.
Relacionamentos:
Uma oficina está associada a uma única ONG (relacionamento 1 com a entidade Ong).
Uma oficina pode ocorrer em várias turmas (relacionamento 0:N com a entidade Turma).

### Ong:

Representa uma Organização Não Governamental.
Atributos: identificação, nome, endereço, complemento, bairro, estado, município, email, área de atuação e quantidade de favelas que atua.
Relacionamentos:
Uma ONG apoia uma oficina (relacionamento 1 com a entidade Oficina).
Uma ONG é liderada por um líder (relacionamento 1 com a entidade Lider).

### Presença:

Representa o registro de presença de um aluno.
Atributos: identificação e um booleano indicando se o aluno estava presente.
Relacionamentos:
A presença está associada a um único aluno (relacionamento 1 com a entidade Aluno).

### Aula:

Representa uma sessão de ensino dentro de uma turma.
Atributos: identificação, nome e data.
Relacionamentos:
Uma aula está associada a uma única turma (relacionamento 1 com a entidade Turma).

### Lider:

Representa a pessoa responsável ou líder de uma ONG.
Atributos: identificação, nome, email, CPF e RG.
Relacionamentos:
Um líder está associado a uma única ONG (relacionamento 1 com a entidade Ong).

&emsp;&emsp;Por fim, é fundamental ter uma estrutura bem definida neste diagrama, com o objetivo de organizar e compreender melhor as conexões entre IDs, além de facilitar o trabalho dos desenvolvedores. Isso pode resultar em um site mais intuitivo e funcional para o uso cotidiano dos usuários parceiros da Gerando Falcões.

### 6.1.2 Diagrama de Classes de Implementação

&emsp;&emsp;Diagrama de implementação é uma representação visual da distribuição de componentes de software em um sistema e sua implantação em hardware. Para a arquitetura de um site, é essencial para planejar a infraestrutura, identificar falhas, otimizar recursos e facilitar a comunicação entre equipes, sendo fundamental para garantir o sucesso da implantação e manutenção de um site.

&emsp;&emsp;No projeto desenvolvido para a Gerando Falcões, o diagrama de classe de implementação ilustra a relação dos componentes e artefatos com os locais onde são utilizados no sistema implementado, incluindo APIs, repositórios, controllers e dados dos IDs. Essa representação facilita a organização e o entendimento do código, auxiliando na visualização da arquitetura e na identificação de possíveis melhorias ou otimizações.

&emsp;&emsp;Portanto, por meio deste diagrama de classes de implementação, a arquitetura da solução desenvolvida segue os padrões de implementação das funcionalidades do site, garantindo um melhor funcionamento. Ele mostra a interligação entre os IDs, os caminhos a serem percorridos dentro do código e outros elementos essenciais, proporcionando uma visão clara de como as partes do sistema se relacionam e como devem ser desenvolvidas para atender aos requisitos estabelecidos.

  <div align="center">
  <p>Imagem 26 - Diagrama de Classe de Implementação 
  <img src="../imagens/diagramas//Diagrama de Classes de Implementação.png" alt="Diagrama de Classe de Domínio">
  <p>Fonte: elaborada pelos autores.</p>
</div>

## 6.2 Diagrama de Componentes da Arquitetura

&emsp;&emsp;Para facilitar o entendimento e o desenvolvimento do projeto, esta seção contém informações detalhadas sobre o diagrama de implantação. O diagrama mostra o funcionamento, a importância e os componentes que serão utilizados na construção da arquitetura do software que será entregue à Gerando Falcões.

## 6.3 Diagrama de Implantação

&emsp;&emsp;O diagrama de implantação é uma representação visual utilizada em Engenharia de Software para especificar a configuração física dos artefatos de software em um sistema. Ele mostra como o software é distribuído em diferentes nós do hardware e descreve a configuração do hardware e a distribuição física dos componentes do sistema. Este diagrama é essencial para compreender como o sistema será implantado e como os componentes se comunicarão entre si.

<div align="center">
  <p>Imagem ? - Diagrama de Implantação</p>
  <img src="../imagens/Diagrama_implantacao.jpg" alt="Diagrama de Implantação">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;No diagrama apresentado, é possível observar uma arquitetura distribuída típica de um sistema baseado em nuvem. O front-end do sistema está hospedado em uma instância do Amazon EC2, que fornece capacidade de processamento escalável. Este front-end serve a interface com a qual os usuários interagem e se comunica via protocolo HTTP com o back-end, também hospedado em uma instância EC2, permitindo uma clara separação de responsabilidades e escalabilidade.

&emsp;&emsp;O back-end interage com uma instância do RDS (Amazon Relational Database Service), responsável pelo gerenciamento do banco de dados relacional do sistema. Essa interação se dá através de protocolos baseados em TCP/IP, permitindo uma comunicação segura e confiável para operações de leitura e escrita de dados.

&emsp;&emsp;Além disso, o sistema utiliza o Amazon S3 (Simple Storage Service) para armazenamento de dados que não são estruturados como banco de dados relacional. Isso é ideal para armazenar arquivos grandes, como imagens, vídeos e outros tipos de mídia. A comunicação com o S3 é feita sobre o protocolo TCP/IP, usualmente encapsulado por HTTP/HTTPS, que são padrões de comunicação segura e confiável na web. No contexto do projeto, caso seja implementada a funcionalidade de professores fazerem upload de imagens das oficinas por exemplo, o Amazon S3 é a escolha apropriada para esse armazenamento devido à sua alta durabilidade, disponibilidade e escalabilidade de armazenamento de objetos.

## 6.4 Tecnologias e Ferramentas

&emsp;&emsp;Para o desenvolvimento de um projeto de software, é essencial utilizar tecnologias e ferramentas que permitam ter o melhor desempenho e ofereçam recursos adequados para suprir as necessidades do parceiro, principalmente em relação às funcionalidades que devem ser apresentadas como proposta da solução.

&emsp;&emsp;No projeto desenvolvido pelo Grupo Falcon 5 para a Gerando Falcões, foram utilizadas diversas tecnologias e ferramentas que contribuíram com um papel fundamental para o desenvolvimento e entrega da solução. Segue abaixo a tabela que apresenta as principais tecnologias e ferramentas utilizadas pelo grupo em cada área do projeto:

## Frontend

| Nome                                 | Descrição                                                                                                                           |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| React                                | Biblioteca JavaScript para construção de interfaces de usuário.                                                                     |
| Styled components                    | Biblioteca para escrever CSS em componentes JavaScript.                                                                             |
| Ant Design (biblioteca de design)    | Biblioteca de componentes de interface de usuário para React com um design consistente.                                             |
| date-fns (para manipulação de datas) | Biblioteca para manipulação de datas em JavaScript, oferecendo funções para formatação, comparação, manipulação e parsing de datas. |

## Backend

| Nome              | Descrição                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Node.js e Express | Node.js é um ambiente de execução JavaScript e Express é um framework web para Node.js que facilita a criação de APIs RESTful. |

## Banco de Dados

| Nome       | Descrição                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------- |
| PostgreSQL | Sistema de gerenciamento de banco de dados relacional de código aberto e altamente extensível. |

## Plataformas e ferramentas de desenvolvimento

| Nome                                      | Descrição                                                                                                                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub (controle de versão e colaboração) | pPlataforma de hospedagem de código-fonte e colaboração baseada em Git, amplamente utilizada para controle de versão e colaboração em projetos de software. |
| VSCode (editor de código)                 | Editor de código-fonte leve e altamente configurável desenvolvido pela Microsoft.                                                                           |
| Figma (prototipagem e design)             | Ferramenta de design de interface de usuário baseada em navegador, usada para prototipagem, design de interfaces e colaboração em tempo real.               |
| Postman                                   | Plataforma de colaboração para desenvolvimento de API que simplifica a criação, teste e documentação de APIs.                                               |
| ElephantSQL                               | Um serviço de hospedagem de banco de dados PostgreSQL totalmente gerenciado na nuvem.                                                                       |

## Hospedagem em nuvem

| Nome                      | Descrição                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS (Amazon Web Services) | Plataforma de serviços em nuvem oferecida pela Amazon, que fornece uma ampla gama de serviços de infraestrutura, armazenamento, computação e outros. |

&emsp;&emsp;Por meio desses serviços utilizados, está sendo possível avançar com o desenvolvimento do projeto, potencializando o aprendizado e colaborando para uma melhor entrega. Cada tecnologia e ferramenta têm um papel fundamental para que o Grupo Falcon 5 entregue um trabalho eficaz e mais intuitivo para o parceiro.

# 7. Interface

&emsp;&emsp;A interface se refere a parte da aplicação com o qual o usuário interage. Ela inclui todos os elementos visuais, como botões e áreas de conteúdo, que permitem ao usuário interagir com a aplicação para realizar tarefas específicas.

&emsp;&emsp;Uma boa interface é fundamental para garantir que os usuários possam usar a aplicação de forma eficaz e intuitiva. Isso envolve a disposição dos elementos da tela, o design visual, a consistência dos elementos de interação e a capacidade de resposta da aplicação aos comandos de quem está utilizando.

## 7.1 Design System

&emsp;&emsp;O Design System é uma abordagem fundamental para garantir consistência e eficiência no desenvolvimento de produtos digitais. Consiste em um conjunto de padrões, componentes e recursos compartilhados para promover uma experiência de usuário coesa em todas as interfaces. Nesta seção vamos abordar alguns conceitos e componentes, além de apresentar exemplos de aplicação do Design System da Gerando Falcões.

- Logo:
  A logo da Gerando Falcões remete a criatividade e seriedade utilizando a imagem de um falcão. O nome em letras fluidas e distribuidas para manter a coesão visual.

<div align="center">
  <p>Imagem 25 - Logotipo Gerando Falcões</p>
  <img src="../imagens/logo_gf.png" alt="Logotipo">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

- Área de proteção e redução:
  A área de proteção delimita a margem de segurança ao redor da logo. A redução máxima deve ser de 17mm, e equivale a altura dos caracteres no logotipo.

<div align="center">
  <p>Imagem 26 - Área de proteção</p>
  <img src="../imagens/area_de_protecao_gf.png" alt="Área de proteção">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

- Aplicação sobre fundos:
  Para garantir melhor leitura da marca, ela deve ser aplicada sempre em fundos que não prejudiquem sua legibilidade e buscando o maior contraste.

<div align="center">
  <p>Imagem 27 - Aplicação sobre fundos</p>
  <img src="../imagens/aplicacao_em_fundos.png" alt="Aplicação sobre fundos">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

- Paleta de cores:
  Não há uma paleta de definitiva, mas é recomendado que sejam usadas cores vibrantes e contrastantes. A organização Gerando Falcões representa a capacidade de assumir novas roupagens e cores. As cores

<div align="center">
  <p>Imagem 28 - Paleta de cores</p>
  <img src="../imagens/paleta_de_cores.png" alt="Paleta de cores">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

- Tipografia:
  A família tipográfica escolhida é a Avenir Next. Ela é ótima para textos mais densos e documentos formais. Já a família tipográfica complementar é a KG Life is Messy, a qual é utilizada em textos alternativos, títulos, material de divulgação, pop-ups, entre outros similares.

<div align="center">
  <p>Imagem 29 - Tipografia</p>
  <img src="../imagens/tipografia.png" alt="Tipografia">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

- Intervenções artísticas:
  A identidade visual do projeto Gerando Falcões foi concebida para oferecer ampla liberdade nas aplicações. O objetivo é fornecer oportunidades para que a marca seja utilizada em intervenções artísticas, especialmente na arte urbana, bem como em design de produtos, cartazes, painéis, murais e outras mídias.

<div align="center">
  <p>Imagem 30 - Intervenções artística</p>
  <img src="../imagens/intervencoes_artisticas.png" alt="Intervenções artística">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

 <h2>Exemplo de aplicação do Design System em um tela de login:</h2>

<div align="center">
  <p>Imagem 31 - Wireframe de exemplo</p>
  <img src="../imagens/wireframe_exemplo.png" alt="Wireframe de exemplo">
  <p>Fonte: Manual de marca da Gerando Falcões.</p>
</div>

1 - Padronização das telas e informações: É crucial assegurar clareza e consistência em todas as telas, alinhadas aos princípios do design system. Componentes como a logo e suas margens contribuem para fortalecer a identidade da marca. A utilização da paleta vibrante e de uma tipografia dinâmica orienta os elementos visuais, facilitando a compreensão do propósito de cada tela.

2 - Os elementos visuais são essenciais para mobilizar e incentivar a colaboração entre os usuários. Mensagens de estímulo e ícones representativos de trabalho em equipe são integrados para promover a cultura colaborativa da plataforma. A variedade de recursos visuais, combinada com a interatividade das cores e o dinamismo da tipografia, encoraja os usuários a participarem ativamente.

3 - Flexibilidade visual para diferentes contextos: Todas as telas devem ser adaptáveis a distintos dispositivos e ambientes. O design responsivo e elementos escaláveis garantem uma experiência fluida. A aplicação da rica paleta de cores e da tipografia dinâmica assegura a compreensão da interface em variados contextos.

4 - Consistência da identidade da marca em todas as telas: A manutenção da identidade da marca é essencial. A logo, simbolizando criatividade e seriedade por meio de um falcão, deve ser aplicada de forma uniforme. A ampla gama de cores e a tipografia contemporânea, juntamente com margens definidas, garantem uma experiência visual coesa e reconhecível em toda a aplicação.

&emsp;&emsp;Em conclusão, o design system é uma ferramenta essencial que nos auxiliará na criação de interfaces consistentes e intuitivas. Ao seguir as diretrizes estabelecidas, garantimos a padronização visual em todas as telas, fortalecendo a identidade da marca e facilitando a experiência do usuário. Isso resulta em uma aplicação mais eficiente, acessível e alinhada aos objetivos da Gerando Falcões.

## 7.2 Projeto de Interface (Wireframes)

&emsp;&emsp;Um wireframe é um protótipo usado em design de interface para sugerir a estrutura de um site web e relacionamentos entre suas páginas. Serve como um guia para auxiliar na diagramação da página. É uma etapa do desenvolvimento do projeto, onde é criado um "esqueleto", que serve para ilustrar, de maneira simplificada, a estrutura e organização do conteúdo do site desenvolvido para a GF.

### 7.2.1 Wireframe Usuário Professor

<div align="center">
  <p>Imagem 32 - Jornada 1</p>
  <img src="../imagens/jornada_prof1.jpg" alt="Wireframe Professor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 1" demonstra o caminho percorrido pelo usuário professor na aba Oficinas, após efetuar o login com sucesso na plataforma. Inicialmente, o usuário é direcionado para a tela 2, onde pode visualizar todas as oficinas em que está cadastrado na ONG. Após selecionar uma das oficinas ele é levado para a tela específica da oficina (tela 3), onde pode acessar duas opções, sendo elas: <br>
- Selecionar uma aula específica, onde um pop-up é exibido mostrando a lista de presença dos alunos inscritos nessa aula (tela 4);<br>
- Clicar no botão "Alunos Inscritos" na tela 3, onde o usuário poderá visualizar a lista de todos os alunos inscritos na oficina (tela 5).

<div align="center">
  <p>Imagem 33 - Jornada 2</p>
  <img src="../imagens/jornada_prof2.jpg" alt="Wireframe Professor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 2" mostra a jornada do usuário professor na aba "Próximas Aulas", após estar logado na plataforma, onde ele pode visualizar informações sobre as próximas aulas a serem lecionadas. 

### 7.2.2 Wireframe Usuário Líder

<div align="center">
  <p>Imagem 34 - Jornada 1</p>
  <img src="../imagens/jornada_lider1.jpg" alt="Wireframe Líder">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 1" mostra a jornada do usuário líder em uma ONG. Ao acessar a plataforma, o líder é redirecionado para a aba "Dados", onde são apresentadas informações estatísticas sobre as oficinas de sua ONG.

<div align="center">
  <p>Imagem 35 - Jornada 2</p>
  <img src="../imagens/jornada_lider2.jpg" alt="Wireframe Líder">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 2" mostra a jornada do usuário líder em uma ONG. Ao acessar a aba "Oficinas" (tela 1), o líder tem acesso completo a todas as oficinas da ONG. Ao selecionar a opção "Detalhes" de uma oficina, ele é redirecionado para outra página (tela 2), onde são apresentadas informações mais específicas da oficina selecionada anteriormente. Nessa página, ele pode ver os alunos inscritos, editar os dados da oficina e ver o histórico de aulas (tela 3). No histórico de aulas, ao selecionar a opção "Presenças" de uma aula, um pop-up é aberto mostrando a lista de presença dos alunos naquela aula específica (tela 4).

<div align="center">
  <p>Imagem 36 - Jornada 3</p>
  <img src="../imagens/jornada_lider3.jpg" alt="Wireframe Líder">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 3" mostra a jornada do usuário líder em uma ONG. Ao acessar a aba "Cadastrados", o líder consegue visualizar alunos e professores, por meio de um switch, que participam da ONG (tela 1 e 2). Selecionando o botão "Cadastrar novo aluno/professor", é aberto um pop-up que permite ao usuário inscrever um novo aluno ou professor na ONG (tela 2 e 3). Ao selecionar a opção "Detalhes", tanto em alunos quanto em professores, o usuário é redirecionado para uma tela que mostra informações mais específicas sobre o aluno ou professor selecionado.

<div align="center">
  <p>Imagem 37 - Jornada 4</p>
  <img src="../imagens/jornada_lider4.jpg" alt="Wireframe Líder">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 4" mostra a jornada do usuário líder para adicionar uma nova oficina. Ao selecionar o botão "Adicionar oficina" na tela 1, é redirecionado para a tela 2 onde pode preencher informações sobre uma nova oficina e adicioná-la à ONG.

### 7.2.3 Wireframe Usuário Gestor

<div align="center">
  <p>Imagem 38 - Jornada 1</p>
  <img src="../imagens/jornada_gestor1.jpg" alt="Wireframe Gestor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 1" mostra a jornada do usuário gestor da Gerando Falcões. Ao acessar a plataforma, o gestor é redirecionado para a aba "Dados", onde são apresentadas informações estatísticas sobre todas as ONG's parceiras da GF.

<div align="center">
  <p>Imagem 39 - Jornada 2</p>
  <img src="../imagens/jornada_gestor2.jpg" alt="Wireframe Gestor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 2" mostra a jornada do usuário gestor da Gerando Falcões. Ao selecionar a aba "ONG's", é redirecionado para a lista de ONGs inscritas (tela 1), podendo selecionar uma delas através da opção "Detalhes", sendo redirecionado para uma tela com informações específicas da ONG selecionada (tela 2). Ao apertar o botão "Oficinas" (tela 2), é redirecionado para a lista de oficinas existentes em determinada ONG (tela 3), podendo selecionar posteriormente a opção "Detalhes" que o redirecionará para uma tela com informações específicas sobre a oficina selecionada (tela 4). Ao selecionar o botão "Ver Histórico" (tela 4), é redirecionado para o histórico da oficina anteriormente selecionada (tela 5), podendo selecionar a opção "Presenças" e acessar a lista de alunos presentes nas aulas específicas daquela oficina.

<div align="center">
  <p>Imagem 40 - Jornada 3</p>
  <img src="../imagens/jornada_gestor3.jpg" alt="Wireframe Gestor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 3" mostra a jornada do usuário gestor da Gerando Falcões. Ao selecionar a aba "ONG's", escolher uma ONG específica e ser redirecionado para os detalhes dessa ONG (tela 1), ao apertar o botão "Alunos" (tela 1), é redirecionado para a lista de alunos inscritos na ONG, podendo selecionar posteriormente a opção "Detalhes" que o redirecionará para uma tela com informações específicas sobre o aluno selecionado.

<div align="center">
  <p>Imagem 41 - Jornada 4</p>
  <img src="../imagens/jornada_gestor4.jpg" alt="Wireframe Gestor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 4" mostra a jornada do usuário gestor da Gerando Falcões. Ao selecionar a aba "ONG's", escolher uma ONG específica e ser redirecionado para os detalhes dessa ONG (tela 1), ao apertar o botão "Professores" (tela 1), é redirecionado para a lista de professores inscritos na ONG, podendo selecionar posteriormente a opção "Detalhes" que o redirecionará para uma tela com informações específicas sobre o professor selecionado.

<div align="center">
  <p>Imagem 42 - Jornada 5</p>
  <img src="../imagens/jornada_gestor5.jpg" alt="Wireframe Gestor">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;O wireframe "Jornada 5" mostra a jornada do usuário gestor da Gerando Falcões para adicionar uma nova ONG. Ao selecionar o botão "Adicionar ONG" na tela 1, é redirecionado para a tela 2 onde pode preencher informações sobre uma nova ONG e adicioná-la.

## 7.3 Frontend

&emsp;&emsp;O frontend foi desenvolvido com foco em princípios de usabilidade, sendo a proposta uma interface de fácil uso e entendimento por diferentes tipos de usuários, sendo eles: professores, líderes de ONGs e gestores da Gerando Falcões.

&emsp;&emsp;Para alcançar esse objetivo, priorizamos a simplicidade e a clareza na disposição dos elementos, bem como na linguagem utilizada em botões, menus e instruções. Também nos certificamos de que as funcionalidades mais importantes sejam facilmente acessíveis, mantendo a consistência visual em toda a aplicação. Dessa forma, esperamos proporcionar uma experiência intuitiva e eficiente para quem a utilize.

A seguir as imagens e descrições respectivas ao Frontend:

<div align="center">
  <p>Imagem 43 - Tela de login</p>
  <img src="../imagens/pag_login.png" alt="Tela de login">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Login: Esta tela é comum a todos os perfis de usuário e permite o acesso à plataforma através da autenticação dependendo do perfil (professor, líder ou gestor). O usuário deve inserir suas credenciais (usuário e senha) nos espaços fornecidos e em seguida clicar no botão "Fazer login", que o redirecionará para as próximas páginas conforme seu perfil.
<br>

<div align="center">
  <p>Imagem 44 - Tela de Turmas</p>
  <img src="../imagens/docs_frontend/cards-professor.jpg" alt="Tela de Oficinas">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Turmas (perfil do usuário professor): Esta tela apresenta todas as turmas nas quais o usuário professor está inscrito. Possui uma navbar com os campos "Turmas" e "Próximas aulas", além da foto de perfil do usuário e o logo da Gerando Falcões. Os cards das turmas são dispostos em fileiras e identificam as respectivas oficinas. Ao selecionar um card, o usuário é redirecionado para a tela de aulas correspondente a oficina e a turma específica.
<br>

<div align="center">
  <p>Imagem 45 - Tela de Aulas e Próximas Aulas </p>
  <img src="../imagens/docs_frontend/telas-professor.png" alt="Tela de Aulas e Próximas Aulas">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Aulas (perfil do usuário professor): Esta tela apresenta todas as aulas nas quais o usuário professor está inscrito na oficina selecionada anteriormente. Possui uma navbar com os campos "Turmas" e "Próximas aulas", além da foto de perfil do usuário e o logo da Gerando Falcões. 

&emsp;&emsp;Os cards das aulas são dispostos em fileiras e identificam as respectivas aulas. Ao selecionar um card, é aberto um popup apresentando a lista de presença dos alunos na respectiva aula. O usuário pode marcar a presença dos alunos através de um checkbox ao lado do respectivo nome e salvar suas modificações clicando no botão "Confirmar Presenças". Para sair do popup, basta clicar no ícone de "X" no canto superior direito.
<br>

<div align="center">
  <p>Imagem 46 - Telas Líder </p>
  <img src="../imagens/docs_frontend/telas-lider1.png" alt="Telas Líder">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Aulas (perfil do usuário líder): O líder tem acesso, por meio da navbar, às oficinas e turmas da ONG, além de conseguir visualizar o histórico de presença dos alunos nas aulas. O líder também tem a opção de cancelar as aulas, visualizar detalhes e informações dos alunos.
<br>

<div align="center">
  <p>Imagem 47 - Telas Líder </p>
  <img src="../imagens/docs_frontend/telas-lider.png" alt="Telas Líder">
  <p>Fonte: Elaborada pelos autores.</p>
</div>
  
&emsp;&emsp;Tela de Cadastrados (perfil do usuário professor): Além dessas funcionalidades, o líder consegue também ter acesso, na aba "Cadastrados", localizada na navbar, a lista completa com dados e informações pessoais dos alunos e professores cadastrados na ONG.
<br>

<div align="center">
  <p>Imagem 48 - Dados Gerais Líder</p>
  <img src="../imagens/docs_frontend/dados-lider.jpg" alt="Dados Gerais Líder">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Dados Gerais (perfil do usuário líder): Na aba "Dados" na navbar, o líder tem acesso a dados gerais da ONG, informações quantitativas a respeito dos alunos inscritos e cadastrados na ONG, número de oficinas e turmas, tudo isso em forma de gráficos para facilitar a coleta e visualização das informações.
<br>

<div align="center">
  <p>Imagem 48 - Dados ONG's Gestor</p>
  <img src="../imagens/docs_frontend/dados-ongs-gestor.jpg" alt="Dados ONGs Gestor">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Tela de Dados ONGs (perfil do usuário gestor): Na aba "Ongs" na navbar, o gestor tem acesso a dados gerais das ONGs parceiras da Gerando Falcões, podendo acessar informações específicas de cada ONG, tal qual suas oficinas e detalhes.
<br>

&emsp;&emsp;Para o desenvolvimento do frontend, optou-se pelo uso do Design System Ant Design. Essa escolha foi fundamental para padronizar os componentes e aproximá-los da identidade visual da plataforma da Gerando Falcões. A utilização desse design system foi importante para garantir a consistência visual do site, incluindo elementos como tipografia, cores e outros detalhes que se alinham com a identidade da ONG.

&emsp;&emsp;Portanto, o frontend foi construído com foco na intuitividade e funcionalidade para os usuários, buscando uma maior proximidade visual com a plataforma da Gerando Falcões. Essa abordagem permitiu desenvolver um código bem estruturado, alinhado com as conexões de entidades e preparado para receber melhorias futuras com facilidade.

# 8. Projeto de Banco de Dados

&emsp;&emsp;O projeto de banco de dados é fundamental para garantir que as informações sejam armazenadas e organizadas de forma eficiente e precisa. Um modelo bem projetado facilita a consulta e manipulação dos dados, contribuindo para a eficácia e eficiência do sistema como um todo.

&emsp;&emsp;A seguir, apresentamos os modelos lógico e conceitual desenvolvidos, detalhando as entidades, atributos e relacionamentos que compõem o nosso banco de dados.

## 8.1 Modelo Conceitual

&emsp;&emsp;O modelo conceitual representa os conceitos fundamentais e as relações entre eles em um sistema. Ele abstrai a complexidade técnica e foca nas entidades e suas interações, facilitando o entendimento do sistema. Esse modelo é essencial para o planejamento e a comunicação entre equipes de desenvolvimento, garantindo que todos tenham uma visão clara e unificada do projeto.

<div align="center">
  <p>Imagem 49 - Modelo conceitual</p>
  <img src="../imagens/modelos/modelo_conceitual.png" alt="modelo conceitual">
  <p>Fonte: elaborada pelos autores.</p>
</div>

&emsp;&emsp;No projeto desenvolvido, o Modelo Conceitual apresenta as entidades, como ong, turmas, líder, e os dados cadastrados, como email, cof, endereço, sendo relacionados à cada uma delas, além das conexões que demonstram proporções importantes para o design do banco de dados e para a estruturação das entidades no sistema, garantindo que as relações sejam corretamente representadas e que as operações de consulta e manipulação dos dados sejam eficientes e precisas.

&emsp;&emsp;Portanto, é fundamental desenvolver um Modelo Conceitual bem elaborado, pois ele contribui significativamente para a estruturação eficiente do banco de dados. Essa etapa é essencial para garantir que as funcionalidades das entidades sejam adequadamente atendidas, possibilitando a organização e utilização eficaz dos dados pelo sistema.

## 8.2 Modelo Lógico

&emsp;&emsp; O modelo lógico de banco de dados desempenha um papel crucial no design e implementação de sistemas de banco de dados eficazes. Em termos simples, o modelo lógico descreve a estrutura lógica do banco de dados, incluindo tabelas, relacionamentos, atributos e restrições de integridade. Isso permite uma compreensão clara de como os dados estão organizados e como podem ser manipulados, facilitando a comunicação entre desenvolvedores, administradores e usuários finais.

<div align="center">
  <p>Imagem 50 - Modelo lógico</p>
  <img src="../imagens/modelos/modelo_lógico.png" alt="modelo lógico">
  <p>Fonte: elaborada pelos autores.</p>
</div>

O modelo lógico desenvolvido para o projeto é composto pelas entidades que representam os principais elementos do sistema, como ONGs, usuários, alunos, turmas, oficinas, presenças... Cada entidade possui atributos que representam suas características e relacionamentos que indicam como elas se conectam umas com as outras. A partir do desenvolvimento do modelo lógico, foi possível planejar a estrutura do banco de dados de forma clara e organizada, garantindo que os requisitos do projeto sejam atendidos de maneira eficiente e eficaz.

## 8.3 Backend com Banco de Dados

A documentação detalhada do funcionamento do backend integrado ao banco de dados pode ser encontrada no arquivo backend.md, disponível no link a seguir:

[8.3 Backend com Banco de Dados](backend.md)

# 9. Testes de Software

Nesta seção, serão abordados todos os testes realizados no sistema, desde os testes iniciais até os testes de requisitos não funcionais.

## 9.1 Testes Iniciais

Nesta seção, vamos abordar os testes de endpoints, fundamentais para garantir a estabilidade e a segurança de nossa aplicação. Através desses testes, verificamos a integridade e o correto funcionamento de cada endpoint, assegurando que nossos serviços atendam às expectativas dos usuários e estejam alinhados com os requisitos de negócio. Vamos explorar as diferentes estratégias e ferramentas disponíveis para realizar testes eficazes, garantindo a qualidade e a confiabilidade de nossa aplicação.

## Alunos:

### GET - /turmas/:id/alunos

![alt text](../imagens/prints_endpoints/image.png)

- Esse endpoint tem como objetivo retornas um JSON de alunos com o idTurma correspondente. Nesse caso, idTurma é igual a 1.

### GET - /turmas/:id/alunosNaoInscritos

![alt text](../imagens/prints_endpoints/image7.png)

- Esse endpoint tem como objetivo retornar todos os alunos que não estão inscritos em uma turma, baseado no idTurma passado como parâmetro. Nesse caso, o único alunos não inscrito na turma 1 é o Breno Oliveira, que está inscrito nas turmsa 2 e 3.

### POST - /alunos

![alt text](../imagens/prints_endpoints/image1.png)

- Esse endpoint tem como objetivo criar um novo aluno. Nesse caso, foi criado um aluno de idAluno: 10 e nome 'junior santos'.

### POST - /alunos/addToTurma

![alt text](../imagens/prints_endpoints/image8.png)

- Esse endpoint tem como objetivo adicionar um aluno específico a uma turma. Para isso, usamos um json com idAluno e idTurma.

### DELETE - /alunos/removeFromTurma

![alt text](../imagens/prints_endpoints/image9.png)

- Esse endpoint tem como objetivo remover um aluno específico de uma turma. Para isso usamos um json com idAluno e idTurma.

## Aulas:

### GET - /aulas/turma/:idTurma

![alt text](../imagens/prints_endpoints/image2.png)

- Esse endpoint tem como objetivo retornar as aulas de acordo com o 'idTurma' passado. Nesse caso, foram retornados as aulas 1 e 2.

## Oficinas:

### GET - /oficinas/:id

![![alt text](image.png)](../imagens/prints_endpoints/image3.png)

- Esse endpoint tem como objetivo retornar uma oficina a partir do 'idOficina' passado. Nesse caso, retorna a ofician com o 'idOficina': 1

## Presenças:

### GET - /presencas/aula/:idAula

![alt text](../imagens/prints_endpoints/image4.png)

- Esse endpoint tem como objetivo retornar as presenças dos alunos de uma certa aula, baseada no idAula. Nesse caso, "idAula": 2 e os alunos de id 1 e 4 estavam presentes.

### POST - /presencas/registrar

![alt text](../imagens/prints_endpoints/image5.png)

- Esse endpoint tem como objetivo registrar as presenças dos alunos. Nesse caso, foi registrado a presença do aluno de "idAluno": 2, na aula de "idAula": 3.

## Turmas:

### GET - /turmas/:idProfessor

![alt text](../imagens/prints_endpoints/image6.png)

- Esse endpoint tem como objetivo retornar todas as turmas de um idProfessor passado como parâmetro.

## User:

### POST - /login

![alt text](../imagens/prints_endpoints/image10.png)

- Esse endpoint tem como objetivo de fazer o login de um usuário. Ele verifica os dados de login e da acesso ao usuário caso login seja válido.

### Nuvem

A aplicação foi disponibilizada na nuvem da AWS conforme o diagrama de implantação. Abaixo estão os links para comprovação do frontend e do backend rodando na nuvem em uma EC2 cada:

- Vídeo da aplicação rodando: https://drive.google.com/file/d/1jWC9-MNx_LQYjOom8fgTanGipMc0_wt9/view?usp=drive_link
- Vídeo do terminal: https://drive.google.com/file/d/1olgQpwBsQn_qUmjCAeok-FPUAP3TsJI8/view?usp=drive_link

## 9.2 Teste de Integração

Os testes de integração são uma parte crucial do processo de garantia de qualidade de software. Eles são projetados para testar a interação entre diferentes componentes de um sistema, como o backend (já testado com o banco de dados, conforme documentado na seção 8.3) e o frontend. O objetivo é garantir que esses componentes funcionem de forma integrada e que todas as partes do sistema se comuniquem corretamente.

Assim como no tópico 8.3, onde nos concentramos nas consultas SQL essenciais que representam os principais endpoints do backend, nesta seção de testes de integração também focaremos em testar as funcionalidades principais do sistema. Esta abordagem visa garantir que as principais funcionalidades do sistema funcionem de forma integrada entre o backend e o frontend, assegurando uma visão clara e eficiente do funcionamento do sistema como um todo.

### Comprovação banco de dados na nuvem

O banco de dados foi disponibilizado na nuvem da AWS conforme o diagrama de implantação. Abaixo estão as imagens para comprovação do banco de dados rodando na nuvem em uma RDS:

Imagem da criação do banco de dados através da EC2 do backend:

Aqui o backend se conectou ao banco criado na RDS e criou as tabelas necessárias para o funcionamento do sistema através do script reset-db, que cria as tabelas e popula o banco com dados para teste.

![alt text](../imagens/criação-db.png)

Imagem do acesso ao banco de dados através da EC2 do Backend:

![alt text](../imagens/acesso-db.png)

A seguir, detalharemos os testes de integração realizados e os resultados obtidos.

### 1 - Login

#### Pré-condição:

- O sistema está operacional e acessível via navegador.

- O usuário já deve estar cadastrado no sistema.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Colocar email e senha.

3- O frontend envia o email e a senha atráves de uma rota post '/login'.

4- o sitema verifica se o usuario existe.

4- O usuário acessa a plataforma.

#### Pós-condição:

O usuário acessa a plataforma.

#### Resultados Esperados:

O usuário é autenticado e acessa a plataforma.

#### Resultados obtidos:

O usuário conseguiu entrar no sistema.

A seguir um print provando que o usuário existe no sistema:

![alt text](../imagens/docs_backend/SQL-users.png)

Inserindo o email e a senha:

![alt text](../imagens/docs_frontend/login.png)

Acessando a plataforma, após apertar "fazer login":

![alt text](../imagens/docs_frontend/cards-professor.jpg)

#### Análise dos Resultados:

O Login foi bem sucedido ao inserir as informações.
Isso indica que o backend e o frontend estão se comunicando corretamente.

### 2 - Visualizar as Turmas do Professor

#### Pré-condição:

- O sistema está operacional e acessível via navegador.

- O usuário deve ser do cargo professor.

- Exibem os registros de turmas que o professor leciona no banco de dados.

#### Procedimento do Teste:

1- Acessar o sistema pelo navegador.

2- Fazer login como professor.

3- Acesse o menu turma.

4- O frontend envia uma requisição GET ao backend pela rota /turmas/:idProfessor.

5- O backend retorna todos registros que o frontend requisitou.

#### Pós-condição:

Os card de todas turmas que o professor leciona são renderizados na tela.

#### Resultados esperados:

Os dados das turmas exibidos na interface devem ser correspondentes as informações do banco de dados.

#### Resultados obtidos:

Imagem dos registros das turmas de um professor no banco:

![alt text](../imagens/docs_backend/SQL-professores-turma.png)

Os card das turmas de um professor renderizado na tela:

![alt text](../imagens/docs_frontend/cards-professor.jpg)

#### Análise dos Resultados:

As turmas do professor foram renderizadas. A integração entre as partes frontend e backend obtiveram sucesso.

### 3 - Visualizar Aulas de uma Turma

#### Pré-condição:

- O sistema está operacional e acessível via navegador.

- O usuário deve ser do cargo professor.

- Os registros das aulas das turmas estão no banco de dados.

#### Procedimento de Teste:

1- Acessar o sistema pelo navegador.

2- Fazer login como professor.

3- Acesse o menu turma.

4- Acessar uma turma.

5- O frontend envia uma requisição GET ao backend pela rota /aulas/turma/:idTurma.

6- O backend retorna todos registros que o frontend requisitou.

#### Pós-condição:

As aulas de uma turma é exibida no frontend.

#### Resultado Esperado:

As aulas exibidas devem corresponder as do Banco de dados.

#### Resultados Obtidos:

Registro das aulas no banco:

![alt text](../imagens/docs_backend/SQL-aulas.png)

Os cards da aula são renderizados na tela:

![alt text](../imagens/docs_frontend/cards_aulas.png)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. Os cards das telas correspodem aos mostrados no banco, indicando que a integração foi bem sucedida.

### 4 - Marcar Lista de Presença (Professor)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de professor.

-Existem registros de alunos associados a uma turma específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como professor.

3- Acesse o menu de "Turmas" e selecione "Turma X".

4- Após isso, clique em uma “Aula” e marque a presença dos alunos.

5- O frontend envia uma requisição POST ao backend para a rota /presencas/registrar.

6- O backend processa a requisição e registra a presença dos alunos registrados correspondente no banco de dados.

7- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de alunos associados à Turma do usuário logado é exibida no frontend.

#### Resultados Esperados:

Os dados dos alunos mostrados no frontend devem corresponder aos registros no banco de dados associados à Turma específica e após a ação do usuário, deve ser possível verificar a presença efetuada.

#### Resultados Obtidos:

A lista de alunos foi exibida e a presença foi realizada corretamente, com todos os registros correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/banco_lista_presencas.jpg)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/frontend_marcar_lista_presença.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. A presença efetuada na lista de alunos exibida no frontend corresponde aos registros no banco de dados associados à turma específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e o registro de presença seja realizado de forma precisa e confiável.

### 5 - Visualizar Alunos Inscritos (Professor)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de professor.

-Existem registros de alunos associados a uma Turma específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como professor.

3- Acesse o menu de "Turmas" e selecione "Turma X".

4- Após isso, clique em uma “Aula” e acesse “Alunos Inscritos” no canto superior direito da tela..

5- O frontend envia uma requisição GET ao backend para a rota /turmas/:id/alunos

6- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de alunos associados à Turma do usuário logado é exibida no frontend.

#### Resultados Esperados:

A lista de alunos inscritos no frontend devem corresponder aos registros no banco de dados associados à Turma específica.

#### Resultados Obtidos:

A lista de alunos inscritos foi exibida com todos os registros correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/banco_alunos_inscritos.jpg)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/frontend_alunos_inscritos.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. É possível visualizar os alunos inscritos exibidos no frontend corresponde aos registros no banco de dados associados à turma específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e a visualização dos alunos inscritos na Turma seja realizada de forma precisa e confiável.

### 6 - Cadastrar e Inscrever Aluno Novo (Professor)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de professor.

-Existem registros de alunos associados a uma ONG e Turma específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como professor.

3- Acesse o menu de "Turmas" e acesse “Alunos Inscritos” no canto superior direito da tela.

4- O frontend envia uma requisição POST ao backend para a rota /alunos

5- O backend retorna os registros correspondentes ao frontend.

6- Após isso, selecione a opção “Inscrever Aluno”, onde logo em seguida aparecerá um popup de “O aluno já faz parte da ONG?”.

7- Em caso afirmativo, basta clicar em “Sim”, selecionar o nome do aluno e a inscrição dele será realizada na Turma.

8- Em caso negativo, basta clicar em “Não”, preencher os dados do aluno e selecionar “Cadastrar", assim a inscrição dele será realizada na Turma.

#### Pós-condição:

A lista de alunos associados à Turma do usuário logado é atualizada e exibida no frontend.

#### Resultados Esperados:

A lista de alunos inscritos no frontend devem corresponder aos registros atualizados com as novas inscrições já no banco de dados associados à Turma específica.

#### Resultados Obtidos:

A lista de alunos inscritos foi exibida com todos os registros atualizados com as novas inscrições correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/banco_alunos_cadastrados.jpg)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/frontend_cadastro_alunos.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. Os alunos inscritos exibidos no frontend correspondem aos registros já atualizados com as novas inscrições no banco de dados associados à turma específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada dos alunos inscritos na Turma, sendo realizada de forma precisa e confiável.

### 7 - Inscrever Aluno na Turma (Professor)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de professor.

-Existem registros de alunos associados a uma ONG e Turma específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como professor.

3- Acesse o menu de "Turmas" e selecione uma “Turma X”.

4 - Após isso, acesse “Alunos Inscritos” no canto superior direito da tela.

4- O frontend envia uma requisição POST ao backend para a rota /alunos

5- O backend retorna os registros correspondentes ao frontend.

6- Após isso, selecione a opção “Inscrever Aluno”, onde logo em seguida aparecerá um popup de “O aluno já faz parte da ONG?”.

7- Em caso afirmativo, basta clicar em “Sim”, selecionar o nome do aluno e a inscrição dele será realizada na Turma.

8- Em caso negativo, basta clicar em “Não”, preencher os dados do aluno e selecionar “Cadastrar", assim a inscrição dele será realizada na Turma.

#### Pós-condição:

A lista de alunos associados à Turma do usuário logado é atualizada e exibida no frontend.

#### Resultados Esperados:

A lista de alunos inscritos no frontend devem corresponder aos registros atualizados com as novas inscrições já no banco de dados associados à Turma específica.

#### Resultados Obtidos:

A lista de alunos inscritos foi exibida com todos os registros atualizados com as novas inscrições correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/consulta_sql_inserir_aluno.jpg)

E a imagem dos dados exibidos no frontend:
![alt text](../imagens/docs_frontend/inscrever_aluno_turma.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. Os alunos inscritos exibidos no frontend correspondem aos registros já atualizados com as novas inscrições no banco de dados associados à turma específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada dos alunos inscritos na Turma, sendo realizada de forma precisa e confiável.

### 8 - Visualizar Oficinas da ONG (Líder)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de Líder.

-Existem registros de oficinas associadas a uma ONG específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como Líder.

3- Acesse o menu de "Oficinas”.

5- O frontend envia uma requisição POST ao backend para a rota /oficinas.

6- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de oficinas associadas à ONG do usuário logado é exibida no frontend.

#### Resultados Esperados:

A lista de oficinas no frontend devem corresponder aos registros no banco de dados associados à ONG específica.

#### Resultados Obtidos:

A lista de oficinas foi exibida com todos os registros correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/consulta_sql_oficinas_ongs.jpg)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/visualizar_oficinas_ong.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. É possível visualizar a lista de oficinas exibidas no frontend corresponde aos registros no banco de dados associados à turma específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas de forma precisa e confiável.

### 9 - Cadastrar Nova Oficina (Líder)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de Líder.

-Existem registros das oficinas de uma ONG específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como Líder.

3- Acesse o menu de "Oficinas" e acesse “Adicionar Oficinas” no canto superior direito da tela.

4- O frontend envia uma requisição GET ao backend para a rota /oficinas

5- O backend retorna os registros correspondentes ao frontend.

6- Após isso, preencha os dados da Oficina e selecione a opção “Cadastrar”.

#### Pós-condição:

A lista de oficinas associada à ONG do usuário logado é atualizada e exibida no frontend.

#### Resultados Esperados:

A lista de oficinas no frontend devem corresponder aos registros atualizados com os novos cadastros de oficinas já no banco de dados associados à ONG..

#### Resultados Obtidos:

A lista de oficinas foi exibida atualizada com as novas oficinas correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/consulta_sql_inserir_oficina.jpg)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/cadastrar_nova_oficina.jpg)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. A lista de oficinas exibidas no frontend correspondem aos novos cadastros de oficinas já atualizados no banco de dados associados à ONG. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada das oficinas da ONG, sendo realizada de forma precisa e confiável.

### 10 - Visualizar turmas de uma oficina (Líder)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de líder.

-Existem registros de turmas associadas a uma oficina no banco de dados.

#### Procedimento de Teste:

2- Faça login como líder.

3- Acesse o menu de "Oficinas" e acesse “Turmas" de uma oficina.

4- O frontend envia uma requisição GET ao backend para a rota /oficinas/:idOficina

5- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de turmas da oficina escolhida é exibida no frontend.

#### Resultados Esperados:

A lista de turmas cadastradas no frontend devem corresponder aos registros atualizados de turmas na oficina no banco de dados.

#### Resultados Obtidos:

A lista de turmas cadastradas foi exibida com todos os registros atualizados no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/image-1.png)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/image.png)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. As turmas inscritas exibidos no frontend correspondem aos registros já atualizados no banco de dados. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada, sendo realizada de forma precisa e confiável.

### 11 - Cadastrar turma (Líder)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como líder.

3- Acesse o menu de "Oficinas" e acesse “Turmas" de uma oficina.

4- Acesse "Cadastrar turma".

5- Insira os dados da nova turma.

6- O frontend envia uma requisição POST ao backend para a rota /turma/create

7- Uma mensagem de sucesso é enviada no frontend.

#### Pós-condição:

A turma é criada no banco de dados.

#### Resultados Esperados:

A turma inserida deve ser criada no banco de dados.

#### Resultados Obtidos:

A turma inserida foi criada com os dados inseridos.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/image-3.png)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/image-2.png)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. As turmas inscritas exibidos no frontend correspondem aos registros já atualizados no banco de dados. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada, sendo realizada de forma precisa e confiável.

### 12 - Agendar aulas (Líder)

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo de líder.

-Deve haver uma turma para adicionar aulas.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como líder.

3- Acesse o menu de "Oficinas" e acesse “Turmas" de uma oficina.

4- Acesse "Detalhes" em uma turma e "Proximas aulas".

5- Acesse "Cadastrar Aula"

6- Abre um popup para inserir os dados da aula a ser cadastrada.

7- Uma mensagem de sucesso é enviada no frontend.

#### Pós-condição:

A aula é criada no banco de dados.

#### Resultados Esperados:

A aula inserida deve ser criada no banco de dados.

#### Resultados Obtidos:

A aula inserida foi criada no banco de dados com os dados inseridos no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/image-5.png)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/image-4.png)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. As aulas inscritas exibidas no frontend correspondem aos registros já atualizados no banco de dados. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas e de forma atualizada, sendo realizada de forma precisa e confiável.

### 13 - Visualização de Alunos da ONG

#### Pré-condição:

-O sistema está operacional e acessível via navegador.

-O usuário deve ser do cargo líder.

-Existem registros de alunos associados a uma ONG específica no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login como líder.

3- Acesse o menu de "Cadastrados" e selecione "Alunos".

4- O frontend envia uma requisição GET ao backend para a rota /alunos/ong/:idOng.

5- O backend processa a requisição e busca os registros correspondentes no banco de dados.

6- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de alunos associados à ONG do usuário logado é exibida no frontend.

#### Resultados Esperados:

Os dados dos alunos mostrados no frontend devem corresponder aos registros no banco de dados associados à ONG específica.

#### Resultados Obtidos:

A lista de alunos foi exibida corretamente, com todos os registros correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/SQL-alunos-ong.png)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/alunos-ong.png)

#### Análise dos Resultados:

Os resultados obtidos correspondem aos resultados esperados. A lista de alunos exibida no frontend corresponde aos registros no banco de dados associados à ONG específica. Isso indica que a integração entre o backend e o frontend está funcionando corretamente, garantindo que as informações sejam exibidas de forma precisa e confiável.

### 14 - Visualizar Professores da ONG

#### Pré-condição:

- O sistema está operacional e acessível via navegador.

- O usuário deve ser do cargo líder.

- Existem registros de professores associados a ONG associada ao usuário no banco de dados.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login com um usuário de perfil líder.

3- Acesse o menu de "Cadastrados" e selecione "Professores".

4- O frontend envia uma requisição GET ao backend para a rota /professores/ong/:idOng.

5- O backend processa a requisição e busca os registros correspondentes no banco de dados.

6- O backend retorna os registros correspondentes ao frontend.

#### Pós-condição:

A lista de professores associados à ONG específica é exibida no frontend.

#### Resultados Esperados:

Os dados dos professores mostrados no frontend devem corresponder aos registros no banco de dados associados à ONG.

#### Resultados Obtidos:

A lista de professores foi exibida corretamente, com todos os registros correspondentes no frontend.

A seguir a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/SQL-professores-ong.png)

E a imagem dos dados exibidos no frontend:

![alt text](../imagens/docs_frontend/professores-ong.png)

#### Análise dos Resultados:

A funcionalidade de visualizar os professores da ONG no frontend está integrada corretamente com o backend, garantindo que os dados exibidos sejam consistentes com o banco de dados.

### 15 - Cadastrar Professor na ONG

#### Pré-condição:

- O sistema está operacional e acessível via navegador.

- O usuário deve ser do cargo líder.

#### Procedimento de Teste:

1- Acesse o sistema pelo navegador.

2- Faça login com um usuário líder.

3- Acesse o menu de cadastrados e selecione a opção de professor.

4- Clique no botão "Cadastrar professor" para abrir o modal de cadastro.

5- Preencha os dados do formulário de cadastro do professor e submeta.

6- O frontend envia uma requisição POST ao backend para a rota /professor com os dados do professor.

7- O backend processa a requisição e insere um novo registro no banco de dados.

8- O backend retorna uma confirmação de cadastro ao frontend.

#### Pós-condição:

Um novo registro de professor é criado no banco de dados e o cadastro é confirmado no frontend para o usuário.

#### Resultados Esperados:

Após o cadastro, o professor deve aparecer na lista de professores da ONG no sistema e no banco de dados.

#### Resultados Obtidos:

O cadastro do novo professor foi concluído com sucesso, o registro foi corretamente adicionado ao banco de dados e a lista de professores foi atualizada no frontend.

A seguir a imagem da tela de cadastro de professor:

![alt text](../imagens/docs_frontend/professor-form.png)

A imagem da mensagem de sucesso após o cadastro:

![alt text](../imagens/docs_frontend/professor-sucesso.png)

A imagem da tela de professores após o cadastro com os dados atualizados:

![alt text](../imagens/docs_frontend/professor-atualizado.png)

E a imagem dos dados registrados no banco de dados:

![alt text](../imagens/docs_backend/professor-banco.png)

#### Análise dos Resultados:

A funcionalidade de cadastrar um novo professor na ONG está funcionando corretamente, com uma integração efetiva entre o frontend e o backend, garantindo que os dados sejam inseridos de forma precisa no banco de dados.

## 9.3 Testes automatizados

&emsp;&emsp;Os testes automatizados são uma parte essencial do processo de desenvolvimento de software. Eles ajudam a garantir que o código seja testado de forma consistente e confiável, permitindo que os desenvolvedores identifiquem e corrijam problemas rapidamente. Nesta seção, descreveremos os testes automatizados realizados no projeto.

&emsp;&emsp;O Grupo Falcon 5 realizou testes automatizados nos endpoints do projeto, utilizando as rotas e métodos HTTP especificados na tabela abaixo. Esses testes foram fundamentais para garantir que as funcionalidades do sistema estavam sendo implementadas corretamente e que as respostas dos endpoints estavam de acordo com o esperado. Os resultados desses testes foram registrados na tabela a abaixo:

<div align="center">
  <p>Tabela - Testes Automatizados</p>

| Endpoint           | Método HTTP | Descrição                                  | Teste? | Resultado Esperado                                                                                                                                                                                                                                   |
| ------------------ | ----------- | ------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /login             | POST        | Define a rota para login de usuário.       | Sim    | Verificar se o email contém '@' e se a senha é uma string com pelo menos 8 caracteres.                                                                                                                                                               |
| /alunos/turmas     | POST        | Rota para adicionar um aluno a uma turma.  | Sim    | Tentativa de adicionar um aluno a uma turma que não existe, verificando se o status da resposta é 400, indicando erro.                                                                                                                               |
| /turmas/1          | PUT         | Rota para atualizar turma.                 | Sim    | Enviar a atualização de uma turma e verificar se o número de vagas da turma é menor que 60 e se o ID retornado é 1.                                                                                                                                  |
| /presencas         | POST        | Rota para registrar presença.              | Sim    | Verifica se o ID do aluno e da aula foi retornado como sucesso para presença.                                                                                                                                                                        |
| /presencas/aulas/1 | GET         | Rota para buscar presenças por ID da aula. | Sim    | Validar se todos os campos do GET estão corretos, se o ID é um número, se `present` é um booleano, se `id_aluno` é um número, se `id_aula` é um número e se `nome` é uma string. Testar também se o tempo de resposta é menor que 200 milissegundos. |
| /oficinas          | POST        | Rota para criar uma nova oficina.          | Sim    | Enviar os dados de uma oficina fictícia no corpo da requisição e verificar se o status retornado é 201, indicando sucesso, além de verificar se o retorno do ID da oficina criada é um número.                                                       |
| /aulas/21          | DEL         | Rota para deletar uma aula.                | Sim    | Verificar se o status da resposta é 200, indicando sucesso na requisição                                                                                                                                                                             |

  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Todos esses endpoints foram executados e funcionaram perfeitamente. Segue abaixo a tabela com os resultados dos testes automatizados dos endpoints citados anteriormente:

<div align="center">
  <p>Imagem - Testes Automatizados</p>
  <img src="../imagens/testes_automatizados.png" alt="modelo lógico">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;É importante ressaltar que alguns endpoints não foram mencionados nesta tabela, pois se referem a funcionalidades semelhantes a outros endpoints do site desenvolvido. No entanto, esses endpoints também foram testados de forma automatizada, seguindo o mesmo padrão de testes aplicado aos demais. Segue abaixo o restante dos endpoints do projeto:

<div align="center">
  <p>Tabela  - Testes Automatizados</p>
  
| Endpoint | Método HTTP | Descrição | Teste? | Motivo |
| -------- | ----------- | --------- | ------ | --------- |
| /alunos/turmas/:id | GET | Rota para buscar alunos por turma | Não | Similar a rota /presencas/aulas/1 | Similar a rota /presencas/aulas/1 | 
| /alunos/ongs/:id | GET | Rota para buscar alunos por ong | Não | Similar a rota /presencas/aulas/1 |
| /alunos/ongs/:idOng/turmas/:idTurma | GET | Rota para buscar alunos não inscritos em uma turma | Não | Similar a rota /presencas/aulas/1 |
| /alunos/:id | GET | Rota para buscar um aluno pelo ID | Não | Similar a rota /presencas/aulas/1 |
| /alunos | POST | Rota para criar um novo aluno | Não | Similar a rota  /oficinas |
| /alunos/ongs | POST | Rota para adicionar um aluno a uma ong | Não | Similar a rota /alunos/turmas |
| /alunos/:idAluno/turmas/:idTurma | DEL | Rota para remover um aluno de uma turma | Não | Similar a rota /aulas/21 |
| /aulas/professores/:id | GET | Rota para buscar próximas aulas por idProfessor | Não | Similar a rota /presencas/aulas/1 |
| /aulas/turmas/:id | GET | Rota para buscar aulas por turma com filtro de ocorrência | Não | Similar a rota /presencas/aulas/1 |
| /aulas | POST | Rota para criar aula | Não | Similar a rota /oficinas |
| /aulas/:id | PUT | Rota para atualizar aula | Não | Similar a rota /turmas/1 |
| /aulas/:id | DEL | Rota para deletar aula | Não | Similar a rota /aulas/21 |
| /oficinas/ongs/:id | GET | Rota para buscar oficinas por ID da ONG | Não | Similar a rota /presencas/aulas/1 |
| /oficinas/:id | GET | Rota para buscar oficina por ID | Não | Similar a rota /presencas/aulas/1 |
| /oficinas/:id | PUT | Rota para atualizar oficina | Não | Similar a rota /turmas/1 |
| /ongs | GET | Rota para buscar todas as ONGs | Não | Similar a rota /presencas/aulas/1 |
| /ongs/:id | GET | Rota para buscar ONG por ID | Não | Similar a rota /presencas/aulas/1 |
| /ongs/infosGerais/:id | GET | Rota para buscar informações de uma ONG | Não | Similar a rota /presencas/aulas/1 |
| /presencas/aulas/:id | GET | Rota para buscar presenças por ID da aula | Não | Similar a rota /presencas/aulas/1 |
| /professores/:id | GET |  Rota para buscar professor pelo id | Não | Similar a rota /presencas/aulas/1 |
| /professores | POST | Rota para cadastrar professor | Não | Similar a rota  /oficinas |
| /professores/ongs/:id | GET | Rota para buscar professores pela ong | Não | Similar a rota /presencas/aulas/1 |
| /professores/:id | PUT | Rota para editar professor por id | Não | Similar a rota /turmas/1 |
| /turmas/professores/:id | GET | Rota para buscar turmas por ID do professor | Não | Similar a rota /presencas/aulas/1 |
| turmas/oficinas/:id | GET |  Rota para buscar turmas por ID da oficina | Não |Similar a rota /presencas/aulas/1 |
| /turmas/:id | GET | Rota para buscar turma por ID | Não | Similar a rota /presencas/aulas/1 |
| /turmas | POST | Rota para criar uma nova turma | Não | Similar a rota /oficinas
| /turmas/:id | PUT | Rota para atualizar turma | Não | Similar a rota /turmas/1 |

  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Contudo, todos os endpoints são extremamentes necessários para a estruturação e bom funcionamento da aplicação web, garantindo que as funcionalidades desejadas pelo parceiro possam ser executadas da melhor maneira possível. A execução de todos eles foram conferidas e testadas, garantindo a eficácia das rotas descritas no código.

## 9.4 Testes de Usabilidade

&emsp;&emsp;O teste de usabilidade é essencial para garantir que um produto digital atenda às expectativas dos usuários. Ao observar como os usuários interagem com o sistema, é possível identificar falhas de usabilidade e melhorar a experiência do usuário. Estes testes ajudam a validar as decisões de design e a garantir que o produto seja intuitivo e fácil de usar, contribuindo para sua aceitação e sucesso no mercado.

&emsp;&emsp;O Grupo Falcon 5 conduziu uma sessão de testes no Inteli em 20/03/2024 para obter feedbacks sobre as funcionalidades e experiência do usuário (UX), visando aprimoramentos futuros. O teste envolveu 8 participantes, divididos igualmente entre online e presencial, com idades entre 20 e 44 anos, a maioria com formação superior e experiência diária com tecnologia. Segue abaixo as informações de perfil de cada tester:

<div align="center">
  <p>Tabela  - Testes de Usabilidade</p>
  
| Nome | Idade | Profissão | Escolaridade | Estado | Frequência com Tecnologia | 
| -------- | -------- | ------------ | ----------------- | ---------- | ------- |
| Chico | 43 anos | Professor | Doutorando | São Paulo | Diária, no trabalho. |
| Gustavo Tassis | 33 anos | Professor | Mestrado | Espírito Santo | Diária, no trabalho. |
| Janaina | 33 anos | Psicopedagoga | Mestrado | São Paulo | Diária no trabalho. |
| Amanda Boliarini | 32 anos | Designer | Pós Graduação | São Paulo | Diária, no trabalho.  |
| Ueliton | 38 anos | Psicólogo | Graduação | São Paulo | Diária, na faculdade. |
| Pedro Henrique | 23 anos | Analista de Dados | Graduação | São Paulo | Diária, na faculdade. |
| Kauã | 20 anos | Estudante | Graduação | São Paulo | Diária, na faculdade. |
| Meire | 44 anos | Desenvolvedora | Graduação | São Paulo | Diária, no trabalho.  |

  <p>Fonte: Elaborada pelos autores.</p>
</div>
 
&emsp;&emsp;Além disso, o roteiro dos testes incluiu uma tabulação com as anotações das respostas das perguntas feitas pelo grupo para analisar os perfis dos participantes, questões sobre funcionalidades específicas, instruções para a execução das tarefas consideradas relevantes e coleta de feedbacks. Além disso, foram utilizados parâmetros como níveis de dificuldade, sendo 0 “mais fácil” e 5 “mais fácil”. Após a conclusão dos testes, um formulário foi enviado aos participantes para reunir suas opiniões, sendo que 5 respostas foram recebidas.

&emsp;&emsp;Segue abaixo os resultados obtidos de acordo com os registros da execução das tarefas propostas para os testers, com a definição de cada desafio, níveis de dificuldades, sugestões e opiniões das pessoas que testaram o site, além das propostas de melhoria ainda para a entrega do projeto ao final do módulo:

### 1 - Visualizar Turmas de uma Oficina Específica

#### Descrição:

&emsp;&emsp;Visualizar turmas de oficina é uma das ações mais frequentemente utilizadas pelos líderes das ONGs na plataforma. Isso se deve ao fato de que, para acessar outras funcionalidades, muitas vezes é necessário passar por essa etapa inicial. Reconhecendo a importância de tornar essa tarefa simples para o usuário, decidimos incluí-la nos testes de usabilidade:

#### Tabela de Resultados:

| Nome             | Nível de Dificuldade | Resultados obtidos        | Observações                                                          |
| ---------------- | -------------------- | ------------------------- | -------------------------------------------------------------------- |
| Chico            | 1                    | Sucesso                   | -                                                                    |
| Gustavo Tassis   | 2                    | Sucesso                   | -                                                                    |
| Janaina          | 0                    | Sucesso                   | 'Ferramenta bem visual'                                              |
| Amanda Boliarini | 0                    | Sucesso                   | -                                                                    |
| Ueliton          | 0                    | Sucesso                   | -                                                                    |
| Pedro Henrique   | 4                    | Conseguiu com dificuldade | -                                                                    |
| Kauã             | 1                    | Sucesso                   | -                                                                    |
| Meire            | 3                    | Conseguiu com dificuldade | 'Fiquei com dificuldade de entender que o icone é um botão clicável' |

#### Análise dos Resultados Obtidos:

&emsp;&emsp;Analisando os resultados dos testes, observa-se que os testadores obtiveram sucesso na realização da tarefa "Visualizar Turmas de uma Oficina Específica". Dos 8 usuários que testaram a plataforma, 6 não encontraram dificuldades ao cumprir a tarefa. No entanto, é notável que aqueles que tiveram dificuldades não perceberam que havia um botão clicável para acessar as turmas na interface.

&emsp;&emsp;Isso pode ter ocorrido devido ao fato de que os testadores que não conseguiram identificar o botão estavam visualizando a tela apenas de forma online e com a resolução baixa resultado do compartilhamento da tela, sem a possibilidade de interagir com a interface. Com base nessa análise, podemos concluir que visualizar as turmas de uma oficina é uma tarefa simples e de fácil entendimento para a maioria dos usuários. No entanto, é importante considerar maneiras de tornar o botão mais visível para evitar possíveis confusões para usuários com diferentes níveis de experiência e dispositivos de visualização.

### 2 - Acessar uma Oficina e Adicionar uma Turma Nova a essa Oficina

#### Descrição:

&emsp;&emsp;A tarefa envolve o líder acessar uma oficina e adicionar uma nova turma a essa oficina. Isso incluiu preencher informações como o nome da turma, a data de início e término, o horário das aulas, e outros detalhes relevantes. O objetivo é garantir que a nova turma seja registrada corretamente na oficina.

#### Tabela de Resultados:

| Nome             | Nível de dificuldade | Resultados obtidos        | Observações                                                                  |
| ---------------- | -------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| Chico            | 2                    | Sucesso                   | 'Destacou a falta de um botão de voltar uma página'                          |
| Gustavo Tassis   | 3                    | Conseguiu com dificuldade | 'Sugeriu mudança na utilização da funcionalidade "descrição de recorrência"' |
| Janaina          | 0                    | Sucesso                   | -                                                                            |
| Amanda Boliarini | 0                    | Sucesso                   | -                                                                            |
| Ueliton          | 0                    | Sucesso                   | -                                                                            |
| Pedro Henrique   | 0                    | Sucesso                   | -                                                                            |
| Kauã             | 1                    | Sucesso                   | -                                                                            |
| Meire            | 0                    | Sucesso                   | 'Não entendeu o que seria a descrição de recorrência'                        |

#### Análise dos Resultados Obtidos:

&emsp;&emsp;A análise dos resultados dos testes de usabilidade para a tarefa "Acessar uma oficina e adicionar uma turma nova a essa oficina" revela que a maioria dos testers conseguiu concluir a tarefa com sucesso. No entanto, alguns pontos foram destacados para melhoria. Um usuário apontou a falta de um botão para voltar apenas uma página. Além disso, outro usuário destacou que a função de "descrição de recorrência" poderia ser mais simples, sugerindo a recorrência sem os dias e horário.

&emsp;&emsp;A solução proposta já contempla a opção de não tornar obrigatório definir o campo "descrição de recorrência", permitindo que o usuário o preencha da forma que preferir, como sugerido. Isso oferece mais liberdade e melhora a usabilidade do sistema.Concluímos que os usuários conseguiram encontrar o caminho para acessar a funcionalidade sem muitas dificuldades, havendo 7 casos de sucesso e 1 sucesso com dificuldade, sendo os obstáculos voltados à falta de funções mais simples. As sugestões e observações citadas serão levadas em consideração como possíveis mudanças na versão final do projeto.

### 3 - Cadastrar Nova Aula para Turma Existente

#### Descrição:

&emsp;&emsp;Para cadastrar uma nova aula para uma turma existente, o usuário Líder deve selecionar a turma desejada, clicar em cadastrar nova aula e preencher os campos com as informações da aula, como professor responsável, data e horário. Após o cadastro, a nova aula ficará disponível na aba de Próximas Aulas para consulta e edição, se necessário.

#### Tabela de Resultados:

| Nome             | Nível de dificuldade | Resultados obtidos        | Observações                                                                                                                                                                                                                                             |
| ---------------- | -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chico            | 4                    | Conseguiu com dificuldade | - Demorou para encontrar as funcionalidades, citou necessidade de botões menores e de voltar; Dificuldade em encontrar onde Cadastrar Turma nova, achou muito escondido; - Horário confusos e dificuldade em registrar os horários;                     |
| Gustavo Tassis   | 4                    | Conseguiu com dificuldade | - Ele tentou cadastrar a aula, mas foi em Histórico de Aulas, para ele não foi intuitivo. Teve dificuldade de achar o botão, indicando nível de dificuldade 5 e de Cadastrar Aula, indicando nível de dificuldade 3.                                    |
| Janaina          | 1                    | Sucesso                   | - Ficou confusa em ser em Próximas Aulas o Cadastro da Aula.                                                                                                                                                                                            |
| Amanda Boliarini | 2                    | Sucesso                   | - Foi em Editar primeiro, depois em Histórico de Aulas, depois Próximas Aulas e achou o botão Cadastrar Aulas                                                                                                                                           |
| Ueliton          | 5                    | Não conseguiu             | - Apertou intuitivamente em cima do Nome da Turma para entrar em Detalhes; Seria melhor adicionar um botão de Cadastro de Aula diretamente na página de Turmas, para facilitar o acesso e evitar a necessidade de procurar em outras seções do sistema. |
| Pedro Henrique   | 3                    | Conseguiu com dificuldade | - Selecionou uma Turma, foi em editar. Não achou o Modal de Cadastrar Aula na página de Edição de Turma, talvez devesse conter um botão específico ou uma indicação mais clara no layout.                                                               |
| Kauã             | 3                    | Conseguiu com dificuldade | - Achou confuso por ter aparecido um popup de Cadastrar Turma depois de acessar a Oficina.                                                                                                                                                              |
| Meire            | 0                    | Sucesso                   | - Foi direto em Próximas Aulas e em Cadastrar aulas. Ficou confusa em Aulas Cadastradas, se foram atualizadas com as que ela cadastrou.                                                                                                                 |

#### Análise dos Resultados Obtidos:

&emsp;&emsp;Essa tarefa foi propositalmente incluída no roteiro pelo grupo, pois estava sendo considerada desafiadora, porém era necessário validar. Já estava em destaque o replanejamento da usabilidade dessa função e, com base na análise dos dados coletados, foi possível observar o verdadeiro nível de dificuldade e identificar os pontos que precisavam ser ajustados. Com isso, foi comprovado a que maioria dos testers enfrentaram dificuldades ao realizar essa tarefa específica, atribuindo em média uma nota de 3 para o nível de dificuldade. Diante disso, será necessário colocar o botão de Cadastrar Aulas em Detalhes de turmas e retirá-lo de Próximas Aulas, facilitando assim o uso da funcionalidade.

### 4 - Visualizar Lista de Presença de Aula Ocorrida

#### Descrição:

&emsp;&emsp;Visualizar a lista de presença de uma aula passada é uma tarefa essencial na jornada do líder de uma ONG. Considerando a importância da funcionalidade e seus usuários (muitas vezes com baixo letramento digital), focamos em desenvolve-la para que seu acesso fosse fácil e intuitivo. A tarefa foi testada por 8 testers diferentes.

#### Tabela de Resultados:

| Nome             | Nível de Dificuldade | Resultados obtidos | Observações                                                         |
| ---------------- | -------------------- | ------------------ | ------------------------------------------------------------------- |
| Chico            | 1                    | Sucesso            | 'Muitos clicks'                                                     |
| Gustavo Tassis   | 0                    | Sucesso            | -                                                                   |
| Janaina          | 1                    | Sucesso            | 'Melhorar nomes dos botões de histórico de aulas e próximas aulas'  |
| Amanda Boliarini | 0                    | Sucesso            | -                                                                   |
| Ueliton          | 0                    | Sucesso            | 'Frequência é bem importante'                                       |
| Pedro Henrique   | 0                    | Sucesso            | -                                                                   |
| Kauã             | 0                    | Sucesso            | -                                                                   |
| Meire            | 2                    | Sucesso            | 'Para chegar nas aulas que aconteceram talvez não esteja tão claro' |

#### Análise dos Resultados Obtidos:

&emsp;&emsp;A análise dos resultados obtidos dos testes de usabilidade para a tarefa "Visualizar Lista de Presença de Aula Ocorrida" revela sucesso na conclusão da tarefa, com todos os testers conseguindo realizar a ação desejada. Dos oito testers envolvidos no teste, 7 tiveram sucesso sem problemas significativos e 1 alcançou sucesso mas com alguma pequena confusão durante a jornada. Os resultados nos mostram que a funcionalidade está de acordo com a proposta inicial de simplicidade e clareza. As sugestões e observações de todos os testers, como quantidade de cliques e nomes pouco sugestivos, serão levadas como possíveis mudanças na versão final do projeto.

### 5 - Visualizar Todos os Alunos da ONG

#### Descrição:

&emsp;&emsp;A tarefa era visualizar todos os alunos cadastrados na ONG. Isso envolvia acessar o menu de cadastrados e alterar o seletor para alunos para visualizar a lista completa. A tarefa foi testada por 8 testers diferentes.

#### Tabela de Resultados:

| Nome             | Nível de Dificuldade | Resultados Obtidos        | Observações                                                                                                             |
| ---------------- | -------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Chico            | 1                    | Sucesso                   | -                                                                                                                       |
| Gustavo Tassis   | 2                    | Sucesso                   | -                                                                                                                       |
| Janaina          | 0                    | Sucesso                   | 'Alunos inscritos deixaria mais sugestivo'                                                                              |
| Amanda Boliarini | 1                    | Conseguiu com dificuldade | Acessou cadastrados mas não identificou o seletor e seguiu buscando nos outros menus.                                   |
| Ueliton          | 0                    | Sucesso                   | -                                                                                                                       |
| Pedro Henrique   | 3                    | Conseguiu com dificuldade | Passou por todos os menus mas não havía identificado que era um seletor. Ele talvez imaginou que seria na aba de dados. |
| Kauã             | 0                    | Sucesso                   | -                                                                                                                       |
| Meire            | 0                    | Sucesso                   | -                                                                                                                       |

#### Análise dos Resultados Obtidos:

&emsp;&emsp;A análise dos resultados obtidos dos testes de usabilidade para a tarefa "Visualizar todos os alunos da ONG" revela que a maioria dos testers conseguiram realizar a ação desejada sem problemas significativos. Dos oito testers envolvidos no teste, 6 tiveram sucesso com facilidade e 2 conseguiram realizar a tarefa mas com alguma confusão durante a jornada. Os dois testers que tiveram dificuldades para realizar a tarefa estavam online e tiveram problemas para identificar o seletor de professores/alunos, eles imaginaram que o escrito professores não era um seletor clicável.

&emsp;&emsp;Essa situação provavelmente ocorreu pelo fato de a tela estar sendo compartilhada e a resolução da tela não ser a ideal. Os próprios testers que tiveram dificuldade, ao perceber que se tratava de um seletor disseram que a tarefa era sim bem simples, apenas haviam se confundido. Vale destacar que nenhum dos testers presenciais tiveram dificuldades para realizar essa mesma tarefa.

&emsp;&emsp;Para finalizar, de acordo com os dados obtidos pelo [formulário](https://docs.google.com/spreadsheets/d/15Hhv_codPVJw_OFhFsjNzn5HAW1Ez8Oc3DNc9CLEkb4/edit?usp=sharing), a média do nível de dificuldade em executar as tarefas foi 2, sendo a média do nível de intuitividade do site 4. Além disso, foi indicado que 80% das vezes a plataforma não apresentou problemas que impediu a execução das tarefas e foram apresentadas sugestões de melhoria como: Adicionar o botão "Cadastrar" dentro da página das Turmas e “Descrever um pouco mais os campos e o que faz cada ícone clicável.”

<div align="center">
  <p>Imagem 47 - Respostas Formulário sobre Dificuldade </p>
  <img src="../imagens/forms_1.png" alt="Formulário 1">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

<div align="center">
  <p>Imagem 47 - Respostas Formulário sobre Intuitividade </p>
  <img src="../imagens/forms_2.png" alt="Formulário 2">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

&emsp;&emsp;Os testes de usabilidade conduzidos pelo Grupo Falcon 5 foram essenciais para coletar feedback valioso sobre as funcionalidades e a experiência do usuário (UX) da aplicação web desenvolvida. Esses insights são fundamentais para futuras melhorias no produto, com isso, o grupo pretende planejar tarefas para implementar algumas dessas sugestões, garantindo que os usuários tenham acesso a uma solução intuitiva e eficaz para suas necessidades diárias.

## 9.5 Testes de Simulação de Carga

&emsp;&emsp;O testes de simulação de carga têm como objetivo avaliar a capacidade do sistema de gerenciamento de tarefas em lidar com um aumento de tráfego, simulando condições reais de uso. Nosso foco está nos tempos de resposta e na habilidade do sistema de manejar múltiplas conexões simultâneas.

### Escopo

Os testes de carga focarão nos seguintes endpoints da API:

- GET /aulas/professores/:id: Ver aulas por id do professor
- GET /oficinas/:id: Ver oficina por id da oficina
- GET /oficinas/ongs/:id: Ver oficinas por id da ong
- GET /turmas/professores/:id: Ver turmas por id do professor
- POST /login: Faz login de um usuário
- POST /aulas: Registra uma nova aula em uma turma
- POST /presencas: Registra a presença de um aluno

### Metodologia

&emsp;&emsp;Utilizamos scripts escritos em arquivos yaml, utilizando a biblioteca Artillery, para simular vários usuários virtuais fazendo solicitações HTTP simultâneas ao sistema. Os scripts geram cargas de teste incrementais, a fim de simular o contexto real do nosso cliente. Os testes começam com 20 usuários simultâneos e com um aumento de 20 usuários por segundo. A taxa de novos usuários gradualmente aumenta durante o 1 minuto de teste, até atingir a marca de 150 novos usuários por segundo, para testar a capacidade e a resiliência do sistema sob diferentes níveis de carga.

### Ferramentas

- _Yaml_: Para descrever e executar os scripts de simulação de carga.
- _Artillery_: Para rodar os testes de carga.

### Execução

1. _Preparação_:

- Descrever os os cenários e scripts de cada teste em um arquivo .yaml.
- Verificar se o servidor backend está rodando.
- Se a rota utilizar POST, prover os dados, de maneira correta, dentro do arquivo .yaml.

2. _Execução_: Rodar o seguinte comando no terminal, dentro da pasta src/API/testes-de-carga/rotas: artillery run 'nome do arquivo yaml'

3. _Monitoramento_: Observar o comportamento do sistema quanto a erros, tempos de resposta e status das requisições.

### Exemplo de Script .yaml para GET /oficinas/:id

yaml
config:
target: "http://localhost:5500" # URL da API que você quer testar
phases: - duration: 60 # duração do teste em segundos
arrivalRate: 100 # novos usuários virtuais por segundo
scenarios:

- flow:
  - get:
    url: "/oficinas/1" # Caminho específico para testar

### Exemplo de Script .yaml para POST /login

yaml
config:
target: "http://localhost:5500"
phases: - duration: 60
arrivalRate: 10
rampTo: 20

scenarios:

- flow:
  - post:
    url: "/login"
    json:
    email: "joao@gmail.com"
    senha: "joao123"

### Relatório de Resultados

Após a execução dos testes, compilaremos os resultados observando:

- _Tempos de Resposta_: Média, mínimos e máximos.
- _Status das requisções_: 200, 500, entre outros.
- _Número de requisições feitas_: Quantas requisições foram feitas pelo teste.
- _Número de respostas recebidas_: Quantas das requisições feitas tiveram alguma resposta.
- _Análise de Performance_: Como o sistema lidou com diferentes níveis de carga, incluindo qualquer degradação de performance observada.

### Resultados

- GET /aulas/professores/:id: Ver aulas por id do professor
- GET /oficinas/:id: Ver oficina por id da oficina
- GET /oficinas/ongs/:id: Ver oficinas por id da ong
- GET /turmas/professores/:id: Ver turmas por id do professor
- POST /login: Faz login de um usuário
- POST /aulas: Registra uma nova aula em uma turma
- POST /presencas: Registra a presença de um aluno

### GET - /aulas/professores/:id

<div align="center">
  <p>Imagem - Enpoint /aulas/professores/:id </p>
  <img src="../imagens/prints_endpoints/image11.jpg" alt="Endpoint 1">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Tempos de Resposta

- Média: 17.1 segundos
- Mínimo: 6 segundos
- Máximo: 271 segundos

### Status das Requisições

- 200 OK: 5001 respostas bem-sucedidas
- 500 Internal Server Error: 99 erros do servidor

### Número de Requisições e Respostas

- Requisições Feitas: 5100
- Respostas Recebidas: 5100

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga executado na rota /aulas/professores/:id. A média do tempo de resposta indica que o servidor levou aproximadamente 17.1 segundos para responder às requisições em média, com algumas requisições sendo atendidas em um tempo tão rápido quanto 6 segundos e outras levando até 271 segundos.

&emsp;&emsp;O status de resposta HTTP 200 OK foi retornado em 5001 casos, significando que a maioria das requisições foi bem-sucedida. No entanto, houve 99 casos em que o servidor retornou o erro 500 Internal Server Error, o que indica problemas pontuais de estabilidade ou capacidade do servidor durante o teste.

&emsp;&emsp;O teste em si fez um total de 5100 requisições à rota especificada, e todas as requisições enviadas receberam alguma forma de resposta, seja ela um sucesso (200) ou um erro (500). Isso é indicativo de que o servidor foi capaz de processar e responder a todas as requisições feitas, embora com variação na qualidade da resposta.

### GET - /oficinas/:id

<div align="center">
  <p>Imagem - Endpoint /oficinas/:id </p>
  <img src="../imagens/prints_endpoints/image12.jpg" alt="Endpoint 1">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Tempos de Resposta

- Média: 15.7 segundos
- Mínimo: 5 segundos
- Máximo: 274 segundos

### Status das Requisições

- 200 OK: 4993 respostas bem-sucedidas
- ETIMEDOUT: 107 timeouts

### Número de Requisições e Respostas

- Requisições Feitas: 5100
- Respostas Recebidas: 4993

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga executado na rota /oficinas/:id. A média do tempo de resposta indica que o servidor levou aproximadamente 15.7 segundos para responder às requisições em média, com algumas requisições sendo atendidas em um tempo tão rápido quanto 5 segundos e outras levando até 274 segundos.

&emsp;&emsp;O status de resposta HTTP 200 OK foi retornado em 4993 casos, significando que a maioria das requisições foi bem-sucedida. No entanto, houve 107 casos de timeout (erro ETIMEDOUT), onde o servidor não respondeu no tempo esperado, indicando possíveis problemas de desempenho ou estabilidade na rota testada.

&emsp;&emsp;O teste realizou um total de 5100 requisições à rota especificada, e 4993 das requisições enviadas receberam resposta. As respostas perdidas estão representadas pelos timeouts, o que sugere que a capacidade de resposta do servidor pode ser insuficiente sob carga elevada ou que possam existir problemas de rede influenciando a conectividade

### GET - /oficinas/ongs/:id

<div align="center">
  <p>Imagem - Endpoint /oficinas/ongs/:id </p>
  <img src="../imagens/prints_endpoints/image13.jpg" alt="Endpoint 2">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Tempos de Resposta

- Média: 14.4 segundos
- Mínimo: 5 segundos
- Máximo: 152 segundos

### Status das Requisições

- 200 OK: 4946 respostas bem-sucedidas
- ETIMEDOUT: 154 timeouts

### Número de Requisições e Respostas

- Requisições Feitas: 5100
- Respostas Recebidas: 4946

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga executado na rota /oficinas/ongs/:id. A média do tempo de resposta indica que o servidor levou aproximadamente 14.4 segundos para responder às requisições em média, com algumas requisições sendo atendidas em um tempo tão rápido quanto 5 segundos e outras levando até 152 segundos.

&emsp;&emsp;O status de resposta HTTP 200 OK foi retornado em 4946 casos, indicando que a maior parte das requisições foi processada com sucesso. Entretanto, ocorreram 154 casos em que não houve resposta dentro do tempo esperado, resultando em timeouts. Isso pode sugerir que a rota testada tem problemas de estabilidade ou que a infraestrutura não é suficientemente robusta para lidar com a carga apresentada.

### GET - /turmas/professores/:id

<div align="center">
  <p>Imagem - Endpoint /turmas/professores/:id </p>
  <img src="../imagens/prints_endpoints/image14.jpg" alt="Endpoint 3">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Tempos de Resposta

- Média: 370.5 milissegundos
- Mínimo: 348 milissegundos
- Máximo: 393 milissegundos

### Status das Requisições

- 200 OK: 2582 respostas bem-sucedidas
- ECONNREFUSED: 5091 conexões recusadas
- ECONNRESET: 7 conexões reinicializadas

### Número de Requisições e Respostas

- Requisições Feitas: 5100
- Respostas Recebidas: 2582

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga executado na rota /turmas/professores/:id. A média do tempo de resposta indica que o servidor levou aproximadamente 370.5 milissegundos para responder às requisições em média, com o tempo de resposta variando de um mínimo de 348 milissegundos a um máximo de 393 milissegundos.

&emsp;&emsp;O status de resposta HTTP 200 OK foi retornado em 2582 casos, indicando que as requisições foram processadas com sucesso. No entanto, houve uma quantidade significativa de 5091 casos de ECONNREFUSED, o que sugere que o servidor estava indisponível ou recusando conexões, e 7 casos de ECONNRESET, onde a conexão foi reinicializada. Esses erros podem indicar problemas de estabilidade na rota testada ou que a infraestrutura não está adequada para suportar a carga imposta pelo teste.

### POST - /login

<div align="center">
  <p>Imagem - Endpoint /login </p>
  <img src="../imagens/prints_endpoints/image15.jpg" alt="Endpoint 5">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Status das Requisições

- ECONNREFUSED: 5100 conexões recusadas
- Número de Requisições e Respostas

### Requisições Feitas: 5100

- Taxa de Requisição: 88 requisições por segundo

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga realizado na rota /login. Nota-se que todas as 5100 tentativas de conexão resultaram em erros ECONNREFUSED, o que indica que o servidor recusou todas as conexões de entrada. A taxa de requisição foi de 88 requisições por segundo.

&emsp;&emsp;Este resultado sugere que o servidor de login não estava disponível para processar as requisições durante o teste. Isso pode ser devido a uma variedade de fatores, incluindo problemas de configuração, capacidade insuficiente de recursos para lidar com o volume de requisições ou possíveis falhas de segurança que podem ter causado um bloqueio automático devido ao número elevado de tentativas de acesso.

### POST - /aulas

<div align="center">
  <p>Imagem - Endpoint /aulas </p>
  <img src="../imagens/prints_endpoints/image16.jpg" alt="Endpoint 6">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Tempos de Resposta

Média: 6.9 segundos
Mínimo: 1 segundo
Máximo: 75 segundos
Mediana: 6 segundos
P95: 13.9 segundos
P99: 19.1 segundos

### Status das Requisições

500 Internal Server Error: 5100 erros

### Número de Requisições e Respostas

Requisições Feitas: 5100
Taxa de Requisição: 82 requisições por segundo
Bytes Baixados: 158100

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga realizado na rota /aulas. Observa-se que a média do tempo de resposta foi de 6.9 segundos, indicando que o servidor demorou significativamente para responder às requisições. A resposta mais rápida foi de 1 segundo e a mais lenta de 75 segundos. As métricas P95 e P99 mostram que 95% e 99% das requisições, respectivamente, foram respondidas em menos de 13.9 e 19.1 segundos.

&emsp;&emsp;Todos os 5100 testes resultaram em um status HTTP 500, o que significa que cada tentativa de requisição terminou em um erro de servidor interno. Esse status sugere problemas com a aplicação no servidor, como bugs no código, falhas de dependências ou questões relacionadas ao banco de dados.

### POST - /presencas

<div align="center">
  <p>Imagem - Endpoint /presencas </p>
  <img src="../imagens/prints_endpoints/image17.jpg" alt="Endpoint 4">
  <p>Fonte: Elaborada pelos autores.</p>
</div>

### Status das Requisições

ECONNREFUSED: 5100 conexões recusadas

### Número de Requisições e Respostas

Requisições Feitas: 5100
Taxa de Requisição: 87 requisições por segundo

&emsp;&emsp;Os dados acima representam os resultados de um teste de carga na rota /presenca. Infelizmente, todas as 5100 requisições feitas foram recusadas, como indicado pelo erro ECONNREFUSED. Isso sugere que o servidor estava inacessível ou que havia algum problema de configuração que impedia o estabelecimento de conexões. Com uma taxa de requisição de 87 por segundo, pode-se inferir que a infraestrutura atual não conseguiu lidar com essa carga ou que houve uma indisponibilidade durante o período de teste.

# 10. Procedimento de Implantação da Solução

&emsp;&emsp;Nesta seção, descreveremos o procedimento de implantação da solução desenvolvida, incluindo a instalação do sistema, do banco de dados e a documentação automática do sistema (Swagger).

## 10.1 Procedimento de Implantação do Sistema

&emsp;&emsp;O procedimento de implantação da solução é dividido em duas partes: implantação local e implantação na nuvem. A implantação local serve para testar o sistema em um ambiente controlado, enquanto a implantação na nuvem permite que o sistema seja acessado remotamente por usuários finais.

### 10.1.1 Implantação do Sistema Localmente
&emsp;&emsp;Para implantar o sistema desenvolvido localmente, siga as etapas abaixo:

1. **Clonar o repositório**: Clone o repositório do projeto em sua máquina local.

```bash
git clone https://github.com/Inteli-College/2024-T0009-ES05-G04
```

2. **Instalar as dependências**: Navegue até a pasta do projeto e instale as dependências do frontend e do backend.

Backend:

```bash
cd 2024-T0009-ES05-G04/src/API
npm install
```

Frontend:

```bash
cd 2024-T0009-ES05-G04/src/frontend
npm install
```

3. **Configurar variáveis de ambiente**: Configure as variáveis de ambiente necessárias para o sistema funcionar corretamente. 

Backend:

Crie um arquivo `.env` na pasta `src/API` e adicione as seguintes variáveis:

- `FRONTEND_URL`: URL onde o frontend está sendo executado (ex: `http://localhost:3000`). Essa variável é utilizada pelo backend para permitir comunicação cross-origin, se necessário.
- `API_URL`: URL onde o backend está sendo executado (ex: `http://localhost:5500`). Isso pode ser usado para configurar proxies ou serviços internos.
- `PORT`: A porta em que o backend será executado (ex: `5500`). Esta variável define em qual porta o servidor Express irá ouvir.
- `DATABASE_URL`: A URL de conexão com o banco de dados PostgreSQL (ex: `postgres://username:password@host:port/database`). Aqui, você deve substituir `username`, `password`, `host`, `port` e `database` pelos seus dados reais de conexão.

Exemplo de arquivo `.env`:

```bash
FRONTEND_URL=http://localhost:3000
API_URL=http://localhost:5500
PORT=5500
DATABASE_URL=postgres://username:password@host:port/database
```

Frontend:

Crie um arquivo `.env` na pasta `src/frontend` e adicione a seguinte variável:

- `REACT_APP_API_URL`: URL onde o backend está sendo executado (ex: `http://localhost:5500`). Isso é usado para fazer chamadas à API do backend.

Exemplo de arquivo `.env`:

```bash
REACT_APP_API_URL=http://localhost:5500
```

4. **Executar o sistema**: Após configurar as variáveis de ambiente, você pode executar o sistema.

Backend:

```bash
cd 2024-T0009-ES05-G04/src/API
npm start
```

Frontend:

```bash
cd 2024-T0009-ES05-G04/src/frontend
npm start
```

### 10.1.2 Implantação do Sistema na Nuvem

Para implantar o sistema na nuvem, siga as etapas abaixo:

Nesse caso ensinaremos a implantar o sistema na AWS seguindo a arquitetura apresentada no nosso diagrama de implantação.

1. **Criar uma instância EC2 para o backend**: Crie uma instância EC2 na AWS para hospedar o backend do sistema. Certifique-se de configurar a instância com as portas necessárias abertas (ex: porta 5500 de entrada para o backend).

2. **Criar uma instância EC2 para o frontend**: Crie uma segunda instância EC2 na AWS para hospedar o frontend do sistema. Certifique-se de configurar a instância com as portas necessárias abertas (ex: porta 3000 de entrada para o frontend).

3. **Conectar-se às instâncias EC2 via SSH**: Conecte-se à instância EC2 do backend e à instância EC2 do frontend via SSH.

```bash
ssh -i "chave.pem" ubuntu@IP-da-instancia-EC2
```

4. **Instalar o Node.js e o PostgreSQL**: Após conectar-se a cada uma das instâncias, na do backend instale o Node.js e o PostgreSQL.

```bash
sudo apt update
sudo apt install nodejs npm postgresql
```

5. **Clonar o repositório**: Clone o repositório do projeto na instância EC2 do backend e na EC2 do frontend seguindo o passo 1 da seção anterior.

6. **Instalar as dependências**: Instale as dependências do projeto na instância EC2 do backend e na EC2 do frontend conforme descrito no passo 2 da seção anterior.

7. **Configurar variáveis de ambiente**: Configure as variáveis de ambiente do backend e do frontend conforme descrito no passo 3 da seção anterior.

Nesse caso, você deve substituir `localhost` por `IP da instância EC2` nas variáveis de ambiente.

Para criar o arquivo .env pelo terminal, utilize o comando vim:

```bash
vim .env
```

Para acessar o modo de edição, pressione `i`, adicione as variáveis de ambiente e pressione `ESC` para sair do modo de edição. Para salvar e sair, digite `:wq` e pressione `Enter`.

8. **Executar o sistema**: Execute o backend e o frontend conforme descrito no passo 4 da seção anterior.

## 10.2 Procedimento de Implantação do Banco de Dados

&emsp;&emsp;O procedimento de implantação do banco de dados é dividido em duas partes: implantação local e implantação na nuvem. A implantação local é útil para testar o banco de dados em um ambiente controlado, enquanto a implantação na nuvem permite que o banco de dados seja acessado remotamente por usuários finais.

### 10.2.1 Implantação do Banco de Dados Localmente

Para implantar o banco de dados localmente, siga as etapas abaixo:

1. **Instalar o PostgreSQL**: Instale o PostgreSQL em sua máquina local.

2. **Criar o banco de dados**: Crie um banco de dados no PostgreSQL para o sistema.

3. **Configurar as variáveis de ambiente**: Configure a variável de ambiente `DATABASE_URL` no arquivo `.env` do backend com a URL de conexão com o banco de dados conforme descrito na seção 10.1.1. passo 3.

4. **Criação e população das tabelas**: Execute o script para criar e popular as tabelas do banco de dados.

```bash
cd 2024-T0009-ES05-G04/src/API
npm run reset-db
```

Esse script pode ser usado também para recriar o banco de dados a qualquer momento.

### 10.2.2 Implantação do Banco de Dados na Nuvem

Para implantar o banco de dados na nuvem, siga as etapas abaixo:

1. **Criar uma instância RDS**: Crie uma instância RDS na AWS para hospedar o banco de dados PostgreSQL.

2. **Configurar a instância RDS**: Configure a instância RDS com as configurações necessárias e desejadas, como nome do banco de dados, usuário e senha.

3. **Configurar as variáveis de ambiente**: Configure a variável de ambiente `DATABASE_URL` no arquivo `.env` do backend com a URL de conexão com o banco de dados conforme descrito na seção 10.1.2. passo 6.

4. **Criação e população das tabelas**: Execute o script para criar e popular as tabelas do banco de dados conforme descrito na seção 10.2.1. passo 4.

```bash
cd 2024-T0009-ES05-G04/src/API
npm run reset-db
```

## 10.3 Documentação Automática do Sistema (Swagger)

&emsp;&emsp;O Swagger é uma ferramenta de código aberto que ajuda a documentar APIs de forma automática. Ele fornece uma interface interativa para visualizar e testar endpoints de API, além de gerar automaticamente a documentação da API com base nos comentários do código.

&emsp;&emsp;Para acessar a documentação do sistema, siga as etapas abaixo:

1. **Iniciar o backend**: Certifique-se de que o backend do sistema está em execução. 

```bash
cd 2024-T0009-ES05-G04/src/API
npm start
```
*As instruções para iniciar o sistema em mais detalhes estão descritas na seção 10.1.


2. **Acessar a documentação**: Abra um navegador e acesse a URL `http://localhost:5500/api-docs` para visualizar a documentação da API. Você pode alterar a porta conforme necessário se estiver executando o backend em uma porta diferente.

&emsp;&emsp;A documentação do Swagger exibirá todos os endpoints disponíveis, seus métodos HTTP correspondentes, parâmetros, respostas e exemplos de uso. Você pode usar essa documentação para entender melhor a API e testar os endpoints.

# Referências

[1] VISURE SOLUTIONS. Requisitos Não Funcionais. s.l., c2023. Disponível em: <https://visuresolutions.com/pt/blog/requisitos-n%C3%A3o-Funcionais/>. Acesso em: 13 fev. 2024.

[2] AMAZON WEB SERVICES. Types of Cloud Computing. s.l., c2023. Disponível em: <https://aws.amazon.com/pt/types-of-cloud-computing/>. Acesso em: 17 fev. 2024.

[3] AMAZON WEB SERVICES. Global Infrastructure: Regions & AZ. s.l., c2023. Disponível em: <https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/?p=ngi&loc=2>. Acesso em: 17 fev. 2024.

[4] AMAZON WEB SERVICES. Global Infrastructure. s.l., c2023. Disponível em: <https://aws.amazon.com/about-aws/global-infrastructure/>. Acesso em: 17 fev. 2024

[5] AMAZON WEB SERVICES. Application Hosting: Benefits. s.l., c2023. Disponível em: <https://aws.amazon.com/pt/application-hosting/benefits/>. Acesso em: 17 fev. 2024.

# Apêndice
