# Projecto Acessibilidade Aumentada

É um projecto com vista a ajudar a acrescentar um nivel de acessibilidade aprimorada para sites, adicionando algumas **directrizes WCAG 2.0**. O projecto insere a possibilidade de retorno de audio na navegação, de maneira facil e intuitiva, sem a necessidade de leitores de tela.

**Como usar:**

Adicione o JQuery ao seu projecto colocando este link na tag `<head>`:

```
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
```

Em seguida adicione os seguintes scripts ao seu projecto no final da página antes do fechamento da tag `<html>`:

```
<script src="./script.js" ></script>
<script src="./acessibilidadeaumentada.js"></script>
```

## Ativação da Acessibilidade Aumentada

Agora basta criar um botão ou uma ancôra (`<a>`) para activar e desactivar, passando como id **control-acessibilidade** (é importante criar o id com esse nome).

## Configuração dos textos

Para configurar a tags que terão retorno de voz você deve colocar como classe **TextoParaVoz** para tags que têm com filhos textos como `<p>`, `<h1>`, etc. como no exemplo abaixo:

```
<p class="TextoParaVoz">Sou um jovem programador, criador de resoluções para problemas do dia-a-dia atraves de codigos.</p>
```

## Configuração da ancôras (links)

Para as ancôras você deve configurar a classe **LinkParaVoz**. Alem da classe, você tambem deve colocar o atributo `data-message` e a explicação da funcionalidade da ancôra (`<a>`) como valor do atributo como demonstrado abaixo:

```
<a class="LinkParaVoz" target="__blank" data-message="Este link leva ao Linkedin" href="https://linkedin.com/in/acrisiodejesus">Siga Meu Linkedin</a>
```

## Configuração das Imagens

Para configurar imagens (`<img>`), você deve configurar a classe **ImagemParaVoz** e colocar a explicação da imagem no atributo **alt** como mostra o exemplo abaixo:

```
<img src="./foto.jpg" alt="Foto de Acrisio de Jesus - Desenvolvedor Web e Mobile" class="ImagemParaVoz"/>
```

## Nota

É importate que siga com atenção os passos acima para que funcione e o seu projecto tenha acessibilidade aumentada com retorno de voz, e caso tenha duvidas acesse o arquivo de exemplo.
