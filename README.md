# Ola_Mundo
Repositório destinado à revisão do conteúdo do 1º Trimestre de 2024.


# Conteudo envolvendo Views engine
No contexto do Express.js, que é um framework popular para Node.js, os mecanismos de visualização mais populares são os seguintes:

Pug (anteriormente conhecido como Jade): Pug é um mecanismo de template bastante popular no ecossistema Node.js. Ele oferece uma sintaxe simplificada e é conhecido por sua legibilidade e eficiência na criação de templates HTML.

EJS (Embedded JavaScript): EJS permite que você incorpore JavaScript diretamente em seus arquivos HTML. Ele é muito utilizado devido à sua simplicidade e à semelhança com a sintaxe do HTML padrão.

Handlebars: Handlebars é um sistema de template que permite a criação de templates de forma mais estruturada, com lógica condicional e iteração através de blocos de código Handlebars.

Estes três são os mecanismos de visualização mais populares com suporte direto ou através de plugins no Express.js. A escolha entre eles muitas vezes depende da preferência pessoal, da familiaridade e das necessidades específicas do projeto.

# Explicação
Uma view engine, também conhecida como template engine, é uma ferramenta que permite a geração dinâmica de conteúdo HTML a partir de templates (modelos) combinados com dados fornecidos por uma aplicação web. Em vez de criar HTML estático diretamente nos arquivos, a view engine permite que você insira dados dinâmicos dentro dos templates, facilitando a criação de páginas web que se adaptam às informações e ao estado da aplicação.
Funcionamento Básico

    Templates (Modelos): São arquivos que contêm a estrutura básica do HTML com marcadores ou tags especiais que indicam onde os dados dinâmicos serão inseridos. Por exemplo, <%= variavel %> em EJS ou {{ variavel }} em Handlebars.

    Dados Dinâmicos: São os dados que são passados para o template pela aplicação. Por exemplo, informações de um banco de dados, resultados de consultas, informações de usuário, etc.

    Processamento: A view engine processa o template junto com os dados dinâmicos e gera o HTML final que será enviado para o navegador do usuário.

Benefícios

    Separação de Concerns: Permite separar a lógica de apresentação (HTML) da lógica de negócios (JavaScript, controle de rotas, etc.), facilitando a manutenção e a organização do código.

    Reutilização: Permite reutilizar partes comuns de HTML através de layouts (como cabeçalho, rodapé, menu) e componentes, evitando repetições e promovendo a consistência visual.

    Flexibilidade: Facilita a manipulação e a renderização de dados dinâmicos, possibilitando a criação de páginas web dinâmicas que respondem às interações dos usuários e às mudanças no estado da aplicação.

Exemplos de View Engines

Existem várias view engines populares para Node.js e outras plataformas web, cada uma com sua própria sintaxe e recursos:

    EJS (Embedded JavaScript): Permite a inclusão de JavaScript diretamente nos templates para lógica condicional e iteração de dados.

    Handlebars: Usa uma sintaxe simples e intuitiva para inserir dados nos templates, com suporte a partials (componentes reutilizáveis) e helpers (funções para manipulação de dados).

    Pug (anteriormente conhecido como Jade): Usa uma sintaxe baseada em indentação para estruturar o HTML, o que pode facilitar a legibilidade e a manutenção do código.

    Mustache: Uma engine minimalista que suporta várias linguagens de programação e é fácil de aprender e usar.

Conclusão

Em resumo, uma view engine é uma parte essencial da arquitetura de muitas aplicações web modernas, pois permite a criação dinâmica de conteúdo HTML a partir de templates e dados, facilitando o desenvolvimento de interfaces de usuário interativas e adaptáveis. Ela desempenha um papel fundamental na separação de preocupações (Separation of Concerns) e na criação de experiências de usuário ricas e responsivas.

# Códigos salvos

background-image: linear-gradient(rgb(29, 29, 29), rgb(59, 57, 57), grey);