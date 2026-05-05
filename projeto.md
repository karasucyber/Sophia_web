Você cometeu um erro crítico de arquitetura de layout na última tentativa. O layout ficou espremido e a interação de trocar os objetos 3D por um clique no botão destruiu a experiência imersiva.

Atue novamente como Diretor de Arte e Lead WebGL Engineer. A marca "Aura" exige uma experiência fluida de scroll-telling.

Referências de Comportamento Exigidas:
Para entender a separação entre o Canvas 3D e a UI HTML, baseie sua arquitetura nestes exemplos:

Spline (https://spline.design/): Observe como o 3D fica solto e em tela cheia no fundo, enquanto os blocos de texto e botões (HTML) rolam suavemente por cima, sem espremer o conteúdo.

Apple AirPods Pro (https://www.apple.com/airpods-pro/): Observe a coreografia. O objeto responde ao scroll da página, e não a cliques de botões para trocar de estado.

Codrops Scroll Based Layout (https://tympanus.net/Development/ScrollBasedLayout/): Esta é a exata arquitetura técnica que você deve usar com @react-three/fiber. O Canvas fica fixo no background e o HTML rola no foreground.

Arquitetura de Layout (A Regra de Ouro):

O Canvas é o Fundo: O <Canvas> do Three.js deve ter a classe Tailwind fixed top-0 left-0 w-screen h-screen -z-10. Ele é uma janela inquebrável. Os objetos 3D (cosméticos e joias) devem flutuar dentro desse espaço usando <Float> e devem se mover ou rotacionar baseados no Scroll do usuário (use useScroll do @react-three/drei), e NUNCA por cliques em botões.

O HTML é a Camada Transparente: Crie uma <div> wrapper sobre o Canvas que seja rolável (overflow-y-auto, h-screen, z-10). O conteúdo HTML (textos, manifesto, botões) deve ter muito espaço em branco (padding generoso, min-h-screen por seção) para não ficar espremido.

Nenhuma interferência DOM/Canvas: O tamanho dos objetos 3D não pode afetar as divs do HTML.

A Estética da "Aura":

Background: #F6F1EE (Aplicar no CSS global e no <color attach="background"> do Canvas).

Acentos: Rosé (#C48A9A) para iluminação e detalhes visuais; Dourado discreto (#C6A96B) para títulos e para o Call to Action.

Manifesto: Distribua o texto ("A Aura nasce de dentro para fora...", "Sofisticada e intencional...", "É sobre a aura que você deixa.") ao longo do scroll do HTML, deixando que os objetos 3D flutuem graciosamente atrás dos textos à medida que o usuário desce a página.

Ação Única do Botão:
O botão no HTML tem uma única função. Ele NÃO altera o 3D. Ele deve ter o texto "Comprar Produto" e apenas redirecionar o usuário para o WhatsApp: [https://wa.me/5511999999999?text=Olá](https://wa.me/5511999999999?text=Olá), sinto a sintonia com a Aura...

Restrição Absoluta:
Escreva o código completo dividindo em Experience (o 3D fixo) e UI (o HTML em scroll).
Nunca coloque comentários no código. Nenhum arquivo gerado pode conter comentários.

Com essa instrução, Marques, o agente vai isolar as camadas. O 3D vai virar um "aquário" no fundo, e o seu site (textos e botões) seráMarques, entendi perfeitamente o que aconteceu. O agente de IA misturou o fluxo do documento HTML com o Canvas do Three.js. Quando isso acontece, o Canvas "empurra" o HTML, espremendo tudo, e ele acabou criando uma lógica de estado (clicar para trocar o modelo) em vez de uma experiência fluida de rolagem.

Para o 3D flutuar de verdade e não quebrar o site, o <Canvas> precisa ficar fixo no fundo (como um background absoluto com z-index negativo) e o seu HTML (textos, botões) precisa rolar por cima dele de forma independente.

Vamos ser muito mais rígidos com a arquitetura agora e enviar referências claras de comportamento visual para ele.

Copie e cole este novo prompt no seu agente de IA:

Você cometeu um erro crítico de arquitetura de layout na última tentativa. O layout ficou espremido e a interação de trocar os objetos 3D por um clique no botão destruiu a experiência imersiva.

Atue novamente como Diretor de Arte e Lead WebGL Engineer. A marca "Aura" exige uma experiência fluida de scroll-telling.

Referências de Comportamento Exigidas:
Para entender a separação entre o Canvas 3D e a UI HTML, baseie sua arquitetura nestes exemplos:

Spline (https://spline.design/): Observe como o 3D fica solto e em tela cheia no fundo, enquanto os blocos de texto e botões (HTML) rolam suavemente por cima, sem espremer o conteúdo.

Apple AirPods Pro (https://www.apple.com/airpods-pro/): Observe a coreografia. O objeto responde ao scroll da página, e não a cliques de botões para trocar de estado.

Codrops Scroll Based Layout (https://tympanus.net/Development/ScrollBasedLayout/): Esta é a exata arquitetura técnica que você deve usar com @react-three/fiber. O Canvas fica fixo no background e o HTML rola no foreground.

Arquitetura de Layout (A Regra de Ouro):

O Canvas é o Fundo: O <Canvas> do Three.js deve ter a classe Tailwind fixed top-0 left-0 w-screen h-screen -z-10. Ele é uma janela inquebrável. Os objetos 3D (cosméticos e joias) devem flutuar dentro desse espaço usando <Float> e devem se mover ou rotacionar baseados no Scroll do usuário (use useScroll do @react-three/drei), e NUNCA por cliques em botões.

O HTML é a Camada Transparente: Crie uma <div> wrapper sobre o Canvas que seja rolável (overflow-y-auto, h-screen, z-10). O conteúdo HTML (textos, manifesto, botões) deve ter muito espaço em branco (padding generoso, min-h-screen por seção) para não ficar espremido.

Nenhuma interferência DOM/Canvas: O tamanho dos objetos 3D não pode afetar as divs do HTML.

A Estética da "Aura":

Background: #F6F1EE (Aplicar no CSS global e no <color attach="background"> do Canvas).

Acentos: Rosé (#C48A9A) para iluminação e detalhes visuais; Dourado discreto (#C6A96B) para títulos e para o Call to Action.

Manifesto: Distribua o texto ("A Aura nasce de dentro para fora...", "Sofisticada e intencional...", "É sobre a aura que você deixa.") ao longo do scroll do HTML, deixando que os objetos 3D flutuem graciosamente atrás dos textos à medida que o usuário desce a página.

Ação Única do Botão:
O botão no HTML tem uma única função. Ele NÃO altera o 3D. Ele deve ter o texto "Comprar Produto" e apenas redirecionar o usuário para o WhatsApp: [https://wa.me/5511999999999?text=Olá](https://wa.me/5511999999999?text=Olá), sinto a sintonia com a Aura...

Restrição Absoluta:
Escreva o código completo dividindo em Experience (o 3D fixo) e UI (o HTML em scroll).
Nunca coloque comentários no código. Nenhum arquivo gerado pode conter comentários.