# Documento de Requisitos: Página de Produtos (Cardápio)

## 1. Visão Geral da Página
Espaço dedicado à listagem inteligente e filtragem dos produtos. Deve permitir que o cliente encontre sua pizza favorita em menos de 3 cliques.

## 2. Referências de Design e Identidade Visual
- **Estilo de Cores:** Fundo limpo (Branco `#FFFFFF` ou Off-White `#F8F9FA`) para manter a clareza na leitura dos ingredientes. Tags de categorias usando tons pastéis baseados nas cores da marca.
- **Tipografia:** Títulos de categorias em destaque com tamanho menor que a Home, priorizando organização (*Montserrat*). Ingredientes em tamanho reduzido com boa legibilidade (*Inter*).
- **Ícones e Aparência Moderna:** Ícones indicativos ao lado do nome do produto (ex: Pimenta para sabores picantes, Folha verde para vegetarianas, Glúten-free).

## 3. Requisitos para Vender Mais (Gatilhos de Conversão)
- **Filtros Avançados e Busca Rápida:** Filtros por categoria (Tradicionais, Doces, Veganas, Bebidas) e campo de busca em tempo real.
- **Venda Casada (Upselling / Cross-selling):** Ao selecionar uma pizza, sugerir automaticamente borda recheada, bebida ou sobremesa com desconto no combo.
- **Fotos Reais e Suculentas:** Cada item obrigatoriamente acompanhado de uma foto profissional.

## 4. Estrutura de Seções e Componentes
- **Barra de Busca e Categorias:** Menu horizontal fixo (Sticky) para navegação rápida entre categorias.
- **Grid de Produtos:** Cards contendo Imagem, Nome, Descrição dos ingredientes, Preço (De/Por se houver promoção) e Botão "Adicionar".
- **Modal de Customização:** Janela flutuante aberta ao clicar no produto, permitindo escolher tamanho (Brotinho, Média, Grande), adicionar/remover ingredientes e escolher a borda.
