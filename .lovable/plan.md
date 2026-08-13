# Formulário de contacto: porque os emails não chegam

## Diagnóstico (confirmado)

O código do formulário está correto: a página de contacto envia os dados para o servidor, que chama o template `contact-notification` com destinatário fixo `hello@runastudio.pt` e reply-to do visitante.

O problema não é código — é o **domínio de envio**:

- O domínio remetente `notify.runastudio.pt` está com estado **pendente**: o DNS ainda não foi concluído/verificado.
- Enquanto não estiver verificado, cada envio é recusado pela plataforma com o erro "domínio não verificado", pelo que **nenhum email sai**.
- O histórico de envios está vazio (nenhum envio aceite nos últimos 14 dias), o que é coerente com este bloqueio.
- No site, esse erro é apanhado pelo formulário e mostrado como mensagem de erro genérica ao visitante.

## O que é preciso fazer (ação tua, no registrar do domínio)

Adicionar os registos DNS exatos que aparecem em Cloud → Emails para `runastudio.pt`:
- 1 registo TXT de verificação em `_lovable-email.runastudio.pt`
- 2 registos NS em `notify.runastudio.pt` apontando para os nameservers atribuídos ao teu domínio

Depois clicar em "Verify Domain". A propagação pode levar de alguns minutos até 72 horas. Assim que ficar verificado, os emails passam a sair sem qualquer alteração de código.

## Melhorias que posso implementar no site (opcional)

1. **Não perder contactos**: guardar cada submissão numa tabela na base de dados antes de enviar o email, para que nenhum pedido se perca — nem agora, nem se um envio falhar no futuro.
2. **Mensagem de erro útil**: quando o envio falha, mostrar ao visitante uma alternativa imediata (WhatsApp e email direto) em vez de só "ocorreu um erro".
3. **Aviso interno**: registar o motivo da falha nos logs do servidor para diagnóstico mais rápido.

## Notas técnicas

- Ficheiros envolvidos: `src/routes/contacto.tsx` (submissão), `src/lib/contact.functions.ts` (função de servidor), `src/lib/email-templates/send-email.ts` (`SENDER_DOMAIN = notify.runastudio.pt`, correto), `src/lib/email-templates/contact-notification.tsx` (destinatário fixo).
- Nenhuma constante de envio precisa de ser alterada.
