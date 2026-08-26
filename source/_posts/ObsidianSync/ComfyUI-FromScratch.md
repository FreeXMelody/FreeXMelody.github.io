---
title: ComfyUI_FromScratch
date: 2024-03-25 13:53:26
tags:
  - ComfyUI
  - AI
  - Art
---
工作流时代正式开启....

我们输入的提示词将作为一种 `Conditioning` , 即条件 , 参与到生成里
![[ComfyUI_Conditioning.png]]
节点可以通过 `Ctrl + C / Ctrl + V` 进行复制粘贴,  可以通过 `Alt + 拖动节点` 快速复制

在ComfyUI中 , **按下Ctrl 可以框选多个节点 , 按下Shift可以拖动多个节点**

### 采样器 KSampler

注意 , 这里采样器的参数和WebUI中不太一样 , 比如WebUI中通过给种子设置为`-1` 来实现种子的随机性 . 而在ComfyUI中 , 
![[Latent Image.png]]
需要通过将参数 `Control_after_generate` 参数设置为 `randomize` 来控制种子的随机性 , 其余选项分别为
- fixed 固定
- increment 增 ( 每次生成后种子+1 )
- decrement 减 ( 每次生成后种子-1  )


### 可以查看文件元数据的网址
https://www.metadata2go.com/