# Erros e Correções - MatrixApp

## 🔴 Erro: initialRouteName como objeto
- Mensagem: `initialRouteName (expected 'string', got 'object')`
- Correção: Ajustado para `"initialRouteName": "home"` no app.json

## 🔴 Erro: redirecionamento ausente
- Correção: Adicionado `index.tsx` com `<Redirect href="/(drawer)/home" />`

## 🔴 Erro: parênteses no nome da pasta
- Correção: Usar aspas ou barras invertidas: `mkdir "app/(drawer)"`
