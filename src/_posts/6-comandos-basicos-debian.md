---
title: 'Comandos básicos do debian 10'
description: 'Vou te apresentar quais são os comandos para debian 10, para fazer coisas básicas.'
icon: 'https://cdn.worldvectorlogo.com/logos/debian-2.svg'
---

## O que é debian?

Debian é um sistema operacional e uma distribuição de Software Livre. O Debian é especialmente conhecido pelo seu sistema de gestão de pacotes, chamado APT, que permite: atualização relativamente fácil a partir de versões relativamente antigas.

## Como verificar rede

Para verificar as placas de instaladas na maquina/servidor você deve executar o comando

```
ip a
```

Para modificar e configurar IP fixo na maquina/servidor, acesse e edite o arquivo _/etc/network/interfaces_, inicialmente ele vem configurado conforme a seguir

```
# comando para exibir o arquivo
nano /etc/network/interfaces
```

Original

```
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp2s0
iface enp2s0 inet dhcp
```

Configurando IP fixo

```
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp2s0
iface enp2s0 inet static
  address 192.168.15.2
  netmask 255.255.255.0
  network 192.168.15.0
  broadcast 192.168.15.255
  gateway 192.168.15.1

```

Levando em consideração que a rede local seja 192.168.15._xxx_/24, após as modificações, você deve usar Ctrl+x para salvar o arquivo.

## Como alterar a senha?

Para aterar a senha do usuário use o comando a seguir

```
# Para alterar a senha do usuário que está conectado
passwd

# Para alterar a senha de um usuário específico
passwd nome_do_usuario
```

Você deve digitar a nova senha, e confirmar digitando a nova senha novamente.


## Como alterar data/hora?

Para alterar a data/hora use o comando

```
# Comando
date mmddhhmmyyyy.ss

# O significado de cada conjunto de caractéres é:
mm: mês
dd: dia
hh: hora
mm: minuto
yyyy: ano
ss: segundos
```

## Como listar os arquivos de um diretório?

Para listar os arquivos de um diretório use o comando

```
# Comando
ls

# Para obter mais detalhes use o comando
ls -la
```

## Como criar um arquivo?

Para criar um arquivo use o comando a seguir

```
touch nome_do_arquivo.txt
```

## Como mover ou criar cópias de arquivos?

Use os comandos a seguir para mover ou criar cópias dos arquivos

```
# Para criar uma cópia de um arquivo
cp /tmp/nome_do_arquivo.txt /tmp/nome_do_arquivo2.txt

# Para mover o arquivo
mv /tmp/nome_do_arquivo.txt /tmp/pasta/nome_do_arquivo.txt
```

## Como deletar arquivos/pastas?

Para deletar arquivos e pastas use os comandos

```
# Para deletar um arquivo use
rm nome_do_arquivo.txt

# Para deletar uma pasta
rm pasta/ -r

# Para ter um retorno do que está sendo deletado use a flag -v
rm pasta -rv
```

## Como exibir o conteúdo de um arquivo

Para exibir todo o conteudo de um arquivo use o seguinte comando

```
cat nome_do_arquivo.txt
```

Para exibir as ultimas linhas de um arquivo, (usado para exibir logs) use o comando

```
tail -f nome_do_arquivo.log
```

## Como verificar o hardware da maquina?

Use os comandos a seguir para saber as configurações de hardware da maquina

```
# Para obter informações do processador
cat /proc/cpuinfo

# Para obter informações de memória
cat /proc/meminfo

# Para informações de disco, use um dos comandos
df -h
fdisk -l | grep Disk

# Para informações da versão instalada
uname -m
```

Esse são os comandos básicos para utilizar o debian.
