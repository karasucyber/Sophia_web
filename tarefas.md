# Tarefas - Projeto Aura

- [x] Reler `projeto.md` e identificar o erro de arquitetura da tentativa anterior.
- [x] Refatorar a pagina para separar `Experience` fixa no fundo e `UI` em scroll no foreground.
- [x] Remover a troca de produto por clique e mover a coreografia dos objetos 3D para o scroll.
- [x] Redistribuir o manifesto ao longo de secoes com `min-h-screen` e bastante espaco em branco.
- [x] Ajustar a direcao de arte para um layout mais solto, com o canvas como "aquario" de fundo.
- [x] Manter o CTA com funcao unica: abrir o WhatsApp com a mensagem da Aura.
- [x] Validar build e testar a experiencia real de scroll no navegador.

Observacao: a verificacao final confirmou `npm run build` sem erro, `canvas` ativo no fundo, scroll-telling funcionando no navegador e CTA final `Comprar Produto` apontando para o WhatsApp correto. Restou apenas um warning deprecado de `THREE.Clock` vindo do stack 3D, sem bloquear a experiencia.

- [x] Normalizar a escala e o enquadramento dos modelos 3D com um dicionario claro por arquivo `.glb`.

Observacao extra: os valores de `scale`, `position`, `mobilePosition` e `rotation` agora ficam centralizados em `modelsConfig` para ajuste fino por arquivo. A validacao final passou em `npm run build` e manteve o canvas, o scroll-telling e o CTA intactos.
