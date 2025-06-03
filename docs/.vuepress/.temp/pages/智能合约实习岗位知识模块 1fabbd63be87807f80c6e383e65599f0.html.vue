<template><div><h1 id="智能合约实习岗位知识模块" tabindex="-1"><a class="header-anchor" href="#智能合约实习岗位知识模块"><span>智能合约实习岗位知识模块</span></a></h1>
<p>完成进度: 90
状态: 进行中
编写人员: Echo, Jason Chung
选择: 第二部分：Web3 行业知识</p>
<h1 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h1>
<p>xxxxxxxxxxxxxxxx</p>
<h1 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span>摘要</span></a></h1>
<ul>
<li>[x]  Dapp 架构和开发流程</li>
<li>[ ]  <strong>以太坊开发环境搭建</strong>
<ul>
<li>工具链：Remix、Hardhat、Foundry、MetaMask</li>
<li>网络类型：主网、测试网（Sepolia）
<ul>
<li>搭建一个测试网水龙头？</li>
</ul>
</li>
</ul>
</li>
<li>[x]  <strong>Solidity 智能合约编程（简单介绍）</strong>
<ul>
<li>Solidity 基础语法与开发范式</li>
<li>合约结构（状态变量、函数、事件、继承）</li>
<li>安全实践（Reentrancy、Access Control、Integer Overflow）</li>
</ul>
</li>
<li>[x]  <strong>智能合约实战项目</strong>
<ul>
<li>Hello World 合约 or 转账合约
<ul>
<li>读 / 写</li>
</ul>
</li>
</ul>
</li>
<li>[x]  <strong>以太坊技术基础</strong>
<ul>
<li>账户模型（EOA / Contract Account）</li>
<li>Gas 机制与交易生命周期</li>
</ul>
</li>
<li>[x]  部署合约
<ul>
<li>如何把合约部署到测试网 + etherscan verify（方便后面前端调用）</li>
</ul>
</li>
<li>[x]  <strong>区块链前端整合</strong>
<ul>
<li>使用 Viem 与合约交互</li>
<li>钱包连接（MetaMask）</li>
<li>构建 DApp 前端（React + Tailwind 示例） 给一个网页，然后页面上可以输入合约地址，然后调用他部署的合约，同时给出 GitHub 前端 app 的源码地址，方便自己看前端，书里，不再赘述</li>
</ul>
</li>
<li>[x]  高阶内容
<ul>
<li>[x]  Gas 优化</li>
<li>[x]  合约安全
<ul>
<li>安全漏洞库（reentrancy、oracle manipulation）</li>
</ul>
</li>
<li>[x]  智能合约审计基础（为什么要审计合约、合约审计的流程是什么、业内有名的审计公司有哪些）
<ul>
<li>联系慢雾、余弦</li>
</ul>
</li>
<li>[ ]  单元测试</li>
<li>[x]  可以补充 GitHub 、PR 工作流、Code review 礼仪、issue 的提问等</li>
<li>[x]  Layer 2
<ul>
<li>Rollup 技术：Optimistic vs ZK Rollup + MyFirstLayer2</li>
<li>Starknet、zkSync、Arbitrum、Base 等常见 L2</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="正文" tabindex="-1"><a class="header-anchor" href="#正文"><span>正文</span></a></h1>
<p>本章将围绕 Web3 行业中的智能合约工程师所需的技能进行介绍，首先介绍去中心化应用（dApp）的基本架构，重点分析其与传统应用的不同之处。接着，我们将详细讨论开发 dApp 的流程，从需求分析、智能合约的编写、前端与后端的设计，到最终部署和上线，帮助读者理解整个开发生命周期。</p>
<hr>
<h1 id="一、dapp-架构和开发流程" tabindex="-1"><a class="header-anchor" href="#一、dapp-架构和开发流程"><span>一、Dapp 架构和开发流程</span></a></h1>
<p>去中心化应用（Dapp）是与传统集中式应用不同的全新应用模式，通常运行在区块链或分布式网络上。与传统应用相比，dApp 的核心特点在于去中心化，意味着应用的逻辑和数据不由单一实体控制，而是由多个参与者共同维护。因此，开发 Dapp 需要理解和掌握去中心化技术栈、智能合约编程以及前端与区块链的交互方式。</p>
<h2 id="_1-1-dapp-架构" tabindex="-1"><a class="header-anchor" href="#_1-1-dapp-架构"><span>1.1 Dapp 架构</span></a></h2>
<p>Dapp 的架构主要由三个核心部分组成：</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/_-_visual_selection_(1).png" alt="_- visual selection (1).png"></p>
<ol>
<li>
<p><strong>前端（User Interface）</strong>：</p>
<p>前端是 Dapp 与用户交互的界面，通常由 HTML、CSS 和 JavaScript（如 React、Vue 等框架）构建。与传统 Web 应用不同，dApp 前端会连接区块链来调用智能合约，呈现数据和执行交易。</p>
<p>前端还需要集成区块链钱包（如 MetaMask）来进行身份验证和签署交易，确保用户的隐私和安全。</p>
</li>
<li>
<p><strong>智能合约（Smart Contracts）</strong>：</p>
<p>智能合约是 Dapp 的核心，它定义了应用的业务逻辑，并部署在区块链上。智能合约通过执行自动化的规则来确保交易和操作的透明性与不可篡改性。</p>
<p>在以太坊平台上，智能合约通常使用 <strong>Solidity</strong> 编程语言编写，并通过 <strong>Ethereum Virtual Machine (EVM)</strong> 执行。</p>
</li>
<li>
<p><strong>区块链和去中心化存储（Blockchain &amp; Decentralized Storage）</strong>：</p>
<p>区块链用于存储智能合约的状态数据及交易记录。去中心化存储如 <strong>IPFS</strong>（InterPlanetary File System）或 <strong>Arweave</strong>，用于存储大规模的非结构化数据（如图片、文档等），确保数据不易丢失和篡改。</p>
<p>通过使用去中心化存储，Dapp 确保所有数据在多个节点上备份，保证数据的持久性和去中心化特性。</p>
</li>
</ol>
<h2 id="_1-2-dapp-开发流程" tabindex="-1"><a class="header-anchor" href="#_1-2-dapp-开发流程"><span>1.2 Dapp 开发流程</span></a></h2>
<p>Dapp 的开发流程可以分为以下几个阶段：</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/Dapp_的开发流程可以分为以下几个阶段：_-_visual_selection.png" alt="Dapp 的开发流程可以分为以下几个阶段： - visual selection.png"></p>
<h3 id="_1-2-1-需求分析与规划" tabindex="-1"><a class="header-anchor" href="#_1-2-1-需求分析与规划"><span>1.2.1 <strong>需求分析与规划</strong></span></a></h3>
<p>在开发 Dapp 之前，首先需要进行需求分析和规划，明确应用的目标和功能。此阶段包括：</p>
<ul>
<li><strong>确定功能需求</strong>：需要定义用户可以进行的操作，比如转账、查询余额、创建投票等。</li>
<li><strong>选择区块链平台</strong>：决定在哪个平台上构建 Dapp（如以太坊、Solana、Polygon 等），这通常取决于目标用户群、交易成本、可扩展性等因素。</li>
<li><strong>设计用户体验（UX）</strong>：定义 Dapp 的界面设计和交互流程，确保用户能够轻松使用应用并与区块链交互。</li>
</ul>
<h3 id="_1-2-2-智能合约开发" tabindex="-1"><a class="header-anchor" href="#_1-2-2-智能合约开发"><span>1.2.2 <strong>智能合约开发</strong></span></a></h3>
<p>智能合约是 Dapp 的核心，负责执行去中心化的业务逻辑和存储重要的数据。在这一阶段，开发者需要：</p>
<ul>
<li><strong>编写智能合约</strong>：使用 <strong>Solidity</strong> 或其他智能合约语言编写合约，确保合约的功能满足需求分析中定义的要求。</li>
<li><strong>编写测试用例</strong>：为智能合约编写单元测试，确保合约逻辑正确、无漏洞。</li>
<li><strong>审计和优化</strong>：对合约进行安全审计，确保合约的安全性，避免常见漏洞（如重入攻击、整数溢出等）。</li>
</ul>
<h3 id="_1-2-3-前端开发" tabindex="-1"><a class="header-anchor" href="#_1-2-3-前端开发"><span>1.2.3 <strong>前端开发</strong></span></a></h3>
<p>前端是用户与 Dapp 交互的主要界面，因此开发前端时需要：</p>
<ul>
<li><strong>选择前端框架</strong>：可以使用现代前端框架（如 <strong>React</strong>、<strong>Vue</strong>）来构建 UI。前端将通过 JavaScript 与智能合约进行交互。</li>
<li><strong>连接钱包</strong>：通过集成 <strong>MetaMask</strong> 等 Web3 钱包，用户可以连接到 dApp，并授权其与智能合约交互。</li>
<li><strong>显示区块链数据</strong>：前端需要从区块链获取数据（如账户余额、交易记录），并通过用户界面展示。</li>
<li><strong>处理交易签名与确认</strong>：当用户发起交易时，前端需要与钱包进行交互，获取用户的签名并将交易发送到区块链。</li>
</ul>
<h3 id="_1-2-4-与区块链交互" tabindex="-1"><a class="header-anchor" href="#_1-2-4-与区块链交互"><span>1.2.4 <strong>与区块链交互</strong></span></a></h3>
<p>前端和智能合约通过 <strong>Web3.js</strong>、<strong>Ethers.js</strong> 或 <strong>Viem</strong> 等库进行交互。这些库允许前端与以太坊或其他区块链进行通信，实现读取和写入操作：</p>
<ul>
<li><strong>读取数据</strong>：前端通过智能合约的公共函数读取区块链上的状态数据（如余额、合约信息）。</li>
<li><strong>发送交易</strong>：当用户发起交易时，前端需要通过钱包签署交易并发送到区块链，执行合约中的某个功能（如转账）。</li>
</ul>
<h3 id="_1-2-5-部署与上线" tabindex="-1"><a class="header-anchor" href="#_1-2-5-部署与上线"><span>1.2.5 <strong>部署与上线</strong></span></a></h3>
<p>一旦开发完成，Dapp 进入部署阶段。具体步骤包括：</p>
<ul>
<li><strong>部署智能合约</strong>：通过工具（如 <strong>Hardhat</strong> 或 <strong>Truffle</strong>）将智能合约部署到测试网（如 <strong>Sepolia</strong>）或主网。</li>
<li><strong>前端部署</strong>：将前端应用部署到去中心化平台（如 <strong>IPFS</strong>、<strong>Fleek</strong>）或传统的 Web 主机。</li>
<li><strong>发布和维护</strong>：将 Dapp 上线，进行用户反馈收集，定期更新合约和前端，修复潜在问题。</li>
</ul>
<h2 id="_1-3-小结" tabindex="-1"><a class="header-anchor" href="#_1-3-小结"><span>1.3 小结</span></a></h2>
<p>Dapp 的开发流程从需求分析、智能合约编写、前端开发，到最终部署，涵盖了多个技术栈的综合应用。通过了解 dApp 的架构和开发流程，开发者可以更好地把握去中心化应用的核心概念，并有效地进行开发和部署。</p>
<p>开发 Dapp 时，区块链技术的透明性、不可篡改性以及智能合约的自动执行能力为应用提供了去中心化的基础，但与此同时，开发者需要应对与传统 Web 应用不同的挑战，如用户体验、交易处理以及安全性问题。掌握这些技术和概念，能够帮助开发者构建更强大和可靠的去中心化应用。</p>
<h1 id="二、以太坊开发环境搭建" tabindex="-1"><a class="header-anchor" href="#二、以太坊开发环境搭建"><span>二、<strong>以太坊开发环境搭建</strong></span></a></h1>
<p><strong>Hardhat</strong> 是一个非常强大的开发框架，用于构建以太坊智能合约。它提供了一个灵活的开发环境，支持合约编译、部署、测试以及交互等功能，极大地简化了以太坊智能合约的开发流程。</p>
<p>本指南将带领你从安装开始，直到如何使用 Hardhat 创建、测试和部署智能合约。</p>
<h2 id="_2-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_2-1-环境准备"><span>2.1 环境准备</span></a></h2>
<h3 id="_2-1-1-安装-node-js-和-npm" tabindex="-1"><a class="header-anchor" href="#_2-1-1-安装-node-js-和-npm"><span>2.1.1 安装 Node.js 和 npm</span></a></h3>
<p>Hardhat 是基于 Node.js 的开发框架，因此你需要确保机器上安装了 Node.js 和 npm。</p>
<ol>
<li>下载并安装 Node.js：<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js 官网</a></li>
<li>安装完成后，可以通过以下命令检查安装是否成功：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果成功安装，你应该能够看到当前的 Node.js 和 npm 版本号。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/0df60d7a-88f0-49fb-a39a-b323596dbf38.png" alt="image.png"></p>
<h3 id="_2-1-2-创建一个新的项目" tabindex="-1"><a class="header-anchor" href="#_2-1-2-创建一个新的项目"><span>2.1.2 创建一个新的项目</span></a></h3>
<p>为了使用 Hardhat，我们首先需要创建一个新的项目文件夹，并初始化一个新的 npm 项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> my-hardhat-project</span>
<span class="line"><span class="token builtin class-name">cd</span> my-hardhat-project</span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会在你的项目文件夹中生成一个 <code v-pre>package.json</code> 文件，用于管理项目的依赖项。</p>
<h3 id="_2-1-3-安装-hardhat" tabindex="-1"><a class="header-anchor" href="#_2-1-3-安装-hardhat"><span>2.1.3 安装 Hardhat</span></a></h3>
<p>接下来，安装 Hardhat 作为开发依赖：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev hardhat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装完成后，你的 <code v-pre>node_modules</code> 目录中会包含 Hardhat 的核心库。</p>
<h2 id="_2-2-初始化-hardhat-项目" tabindex="-1"><a class="header-anchor" href="#_2-2-初始化-hardhat-项目"><span>2.2 初始化 Hardhat 项目</span></a></h2>
<h3 id="_2-2-1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-2-1-初始化项目"><span>2.2.1 初始化项目</span></a></h3>
<p>在项目目录下，运行以下命令来初始化 Hardhat 项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx hardhat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>你会看到一个提示，询问你是要创建一个基本的示例项目，还是一个空的项目。选择 <strong>Create a basic sample project</strong>，Hardhat 将为你创建一个简单的项目结构，并包含一个示例合约、测试和一些基本配置。</p>
<p>该命令会自动为你安装一些额外的依赖，如：</p>
<ul>
<li><strong>ethers.js</strong>：与区块链交互的 JavaScript 库</li>
<li><strong>hardhat-waffle</strong>：用于智能合约测试的 Waffle 插件</li>
</ul>
<p>如果选择了 <strong>Create a basic sample project</strong>，项目目录会包括以下内容：</p>
<ul>
<li><strong>contracts/</strong>：存放智能合约的目录。</li>
<li><strong>scripts/</strong>：用于部署合约的脚本。</li>
<li><strong>test/</strong>：包含示例合约测试的目录。</li>
<li><strong>hardhat.config.js</strong>：Hardhat 项目的配置文件。</li>
</ul>
<h3 id="_2-2-目录结构说明" tabindex="-1"><a class="header-anchor" href="#_2-2-目录结构说明"><span>2.2 目录结构说明</span></a></h3>
<ul>
<li><code v-pre>contracts/</code>：此目录存放你的 Solidity 合约文件。默认情况下会有一个 <code v-pre>Greeter.sol</code> 文件作为示例合约。</li>
<li><code v-pre>scripts/</code>：包含用于部署合约的 JavaScript 脚本文件。默认会有一个 <code v-pre>deploy.js</code> 文件。</li>
<li><code v-pre>test/</code>：存放测试文件。默认会有一个示例测试文件 <code v-pre>sample-test.js</code>，用于测试示例合约。</li>
<li><code v-pre>hardhat.config.js</code>：这是 Hardhat 的配置文件，你可以在其中配置网络、Solidity 编译器版本等。</li>
</ul>
<hr>
<h3 id="_3-编写和部署智能合约" tabindex="-1"><a class="header-anchor" href="#_3-编写和部署智能合约"><span>3. 编写和部署智能合约</span></a></h3>
<h3 id="_3-1-创建一个新的合约" tabindex="-1"><a class="header-anchor" href="#_3-1-创建一个新的合约"><span>3.1 创建一个新的合约</span></a></h3>
<p>在 <code v-pre>contracts/</code> 目录下创建一个新的 Solidity 合约文件。例如，创建一个简单的 <code v-pre>SimpleStorage.sol</code> 合约：</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// contracts/SimpleStorage.sol</span></span>
<span class="line"><span class="token comment">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">SimpleStorage</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">uint256</span> <span class="token keyword">private</span> value<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> newValue<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        value <span class="token operator">=</span> newValue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-编写部署脚本" tabindex="-1"><a class="header-anchor" href="#_3-2-编写部署脚本"><span>3.2 编写部署脚本</span></a></h3>
<p>在 <code v-pre>scripts/</code> 目录下创建一个部署脚本，帮助我们将合约部署到区块链：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// scripts/deploy.js</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取合约工厂实例</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>deployer<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> ethers<span class="token punctuation">.</span><span class="token function">getSigners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Deploying contracts with the account:"</span><span class="token punctuation">,</span> deployer<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取合约工厂</span></span>
<span class="line">    <span class="token keyword">const</span> SimpleStorage <span class="token operator">=</span> <span class="token keyword">await</span> ethers<span class="token punctuation">.</span><span class="token function">getContractFactory</span><span class="token punctuation">(</span><span class="token string">"SimpleStorage"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 部署合约</span></span>
<span class="line">    <span class="token keyword">const</span> simpleStorage <span class="token operator">=</span> <span class="token keyword">await</span> SimpleStorage<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"SimpleStorage contract deployed to:"</span><span class="token punctuation">,</span> simpleStorage<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该脚本使用 Hardhat 提供的 <code v-pre>ethers.js</code> 库与智能合约进行交互，首先获取账户的签名，然后部署 <code v-pre>SimpleStorage</code> 合约。</p>
<h3 id="_3-3-部署合约" tabindex="-1"><a class="header-anchor" href="#_3-3-部署合约"><span>3.3 部署合约</span></a></h3>
<p>在终端中运行以下命令来部署合约到本地 Hardhat 网络：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx hardhat run scripts/deploy.js <span class="token parameter variable">--network</span> localhost</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此命令会启动 Hardhat 网络，部署你的智能合约，并输出部署后的合约地址。</p>
<hr>
<h3 id="_4-测试智能合约" tabindex="-1"><a class="header-anchor" href="#_4-测试智能合约"><span>4. 测试智能合约</span></a></h3>
<h3 id="_4-1-编写测试" tabindex="-1"><a class="header-anchor" href="#_4-1-编写测试"><span>4.1 编写测试</span></a></h3>
<p>Hardhat 使用 Waffle 和 Mocha 测试框架进行合约的单元测试。在 <code v-pre>test/</code> 目录下创建一个新的测试文件 <code v-pre>simpleStorage-test.js</code>：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// test/simpleStorage-test.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"chai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"SimpleStorage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"Should return the new value once it's set"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">[</span>owner<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> ethers<span class="token punctuation">.</span><span class="token function">getSigners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> SimpleStorage <span class="token operator">=</span> <span class="token keyword">await</span> ethers<span class="token punctuation">.</span><span class="token function">getContractFactory</span><span class="token punctuation">(</span><span class="token string">"SimpleStorage"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> simpleStorage <span class="token operator">=</span> <span class="token keyword">await</span> SimpleStorage<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">await</span> simpleStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> simpleStorage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该测试将合约部署到一个新的账户，设置一个新的存储值，然后验证 <code v-pre>get()</code> 函数返回的值是否为 42。</p>
<h3 id="_4-2-运行测试" tabindex="-1"><a class="header-anchor" href="#_4-2-运行测试"><span>4.2 运行测试</span></a></h3>
<p>运行测试，确保合约按预期工作：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx hardhat <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果将显示在终端中。如果测试通过，你会看到类似如下的输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">SimpleStorage</span>
<span class="line">    ✓ Should return the new value once it's set (X seconds)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-配置网络和部署到测试网" tabindex="-1"><a class="header-anchor" href="#_5-配置网络和部署到测试网"><span>5. 配置网络和部署到测试网</span></a></h3>
<h3 id="_5-1-配置网络" tabindex="-1"><a class="header-anchor" href="#_5-1-配置网络"><span>5.1 配置网络</span></a></h3>
<p>在 <code v-pre>hardhat.config.js</code> 文件中，你可以配置不同的网络（如 Rinkeby 或 Sepolia 测试网）进行部署。例如，添加以下内容来配置 Rinkeby 测试网：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@nomiclabs/hardhat-ethers"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">solidity</span><span class="token operator">:</span> <span class="token string">"0.8.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">networks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rinkeby</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">accounts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">0x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">YOUR_PRIVATE_KEY</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-部署到测试网" tabindex="-1"><a class="header-anchor" href="#_5-2-部署到测试网"><span>5.2 部署到测试网</span></a></h3>
<p>你需要通过 Infura 或 Alchemy 提供的节点 URL 进行网络连接，并使用钱包私钥进行签名。部署到 Rinkeby 测试网的命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx hardhat run scripts/deploy.js <span class="token parameter variable">--network</span> rinkeby</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-6-高级配置技巧" tabindex="-1"><a class="header-anchor" href="#_2-6-高级配置技巧"><span>2.6 高级配置技巧</span></a></h2>
<p><strong>1. 主网分叉测试</strong></p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// hardhat.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">networks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">hardhat</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">forking</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ALCHEMY_MAINNET_URL</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">blockNumber</span><span class="token operator">:</span> <span class="token number">19874500</span>  <span class="token comment">// 指定区块高度</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 多钱包配置</strong></p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token literal-property property">accounts</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mnemonic</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MNEMONIC</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span>  <span class="token comment">// 生成10个测试账户</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 性能优化配置</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># Foundry 并行测试</span></span>
<span class="line">forge <span class="token builtin class-name">test</span> <span class="token parameter variable">--parallel</span> --match-contract MyContract</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-8-学习资源推荐" tabindex="-1"><a class="header-anchor" href="#_2-8-学习资源推荐"><span>2.8 学习资源推荐</span></a></h2>
<ol>
<li><a href="https://hardhat.org/tutorial" target="_blank" rel="noopener noreferrer"><strong>Hardhat 官方教程</strong></a> - 含视频指导</li>
<li><a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer"><strong>Solidity 官方文档</strong></a> - 最新语法规范</li>
<li><a href="https://docs.chain.link/resources/link-token-contracts" target="_blank" rel="noopener noreferrer"><strong>Chainlink 测试环境</strong></a> - 预言机集成指南</li>
<li><a href="https://github.com/paulrberg/hardhat-template" target="_blank" rel="noopener noreferrer"><strong>GitHub 模板仓库</strong></a> - 最佳实践项目结构</li>
</ol>
<hr>
<p>通过以上完整配置流程，开发者将获得：
✅ 本地开发/测试网/主网三环境支持</p>
<p>✅ 安全可靠的密钥管理体系</p>
<p>✅ 合约开发-测试-部署完整工作流</p>
<p>✅ 主流工具链深度整合能力</p>
<p>建议每完成一个配置步骤立即执行验证测试，确保环境正确性。遇到问题时，可优先检查 Node.js 版本、网络连通性和环境变量加载情况。</p>
<h1 id="三、solidity-智能合约编程-简单介绍" tabindex="-1"><a class="header-anchor" href="#三、solidity-智能合约编程-简单介绍"><span><strong>三、Solidity 智能合约编程（简单介绍）</strong></span></a></h1>
<p>Solidity 是一种面向合约的高级编程语言，专门用于在以太坊虚拟机（EVM）上编写智能合约。它具有静态类型、支持继承、库和复杂的用户定义类型等特性。</p>
<h2 id="_3-1-基础语法与开发范式" tabindex="-1"><a class="header-anchor" href="#_3-1-基础语法与开发范式"><span>3.1 基础语法与开发范式</span></a></h2>
<h3 id="_3-1-1-版本声明" tabindex="-1"><a class="header-anchor" href="#_3-1-1-版本声明"><span>3.1.1 版本声明</span></a></h3>
<p>每个 Solidity 文件必须以版本声明开始：</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">solidity</span></span>
<span class="line"><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-1-2-数据类型"><span>3.1.2 数据类型</span></a></h3>
<p>基本数据类型</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
<th>示例</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>bool</td>
<td>布尔值</td>
<td>true/false</td>
<td>false</td>
</tr>
<tr>
<td>uint8</td>
<td>8位无符号整数</td>
<td>0 ~ 255</td>
<td>0</td>
</tr>
<tr>
<td>uint16</td>
<td>16位无符号整数</td>
<td>0 ~ 65535</td>
<td>0</td>
</tr>
<tr>
<td>uint256/unit</td>
<td>256位无符号整数</td>
<td>0 ~ (2^256 - 1)</td>
<td>0</td>
</tr>
<tr>
<td>int8</td>
<td>8位有符号整数</td>
<td>-128 - 127</td>
<td>0</td>
</tr>
<tr>
<td>int256/int</td>
<td>256位有符号整数</td>
<td>-2^255 ~ (2^255 - 1)</td>
<td>0</td>
</tr>
<tr>
<td>address</td>
<td>以太坊地址</td>
<td>0x….</td>
<td>0</td>
</tr>
<tr>
<td>bytes1-bytes32</td>
<td>固定长度字节数组</td>
<td>bytes32 data = “Hello”</td>
<td>0x00</td>
</tr>
<tr>
<td>bytes</td>
<td>动态字节数组</td>
<td>bytes memory data = “Hello World”</td>
<td>“”</td>
</tr>
<tr>
<td>string</td>
<td>UTF-8 编码字符串</td>
<td>string name = “Alice”</td>
<td>“”</td>
</tr>
</tbody>
</table>
<p>复合数据类型</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>语法</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>静态数组</td>
<td>T[k]</td>
<td>固定长度数组</td>
<td>uint[5] numbers</td>
</tr>
<tr>
<td>动态数组</td>
<td>T[]</td>
<td>可变长度数组</td>
<td>uint[] memory list</td>
</tr>
<tr>
<td>映射</td>
<td>mapping(K =&gt; V)</td>
<td>键值对存储</td>
<td>mapping(address =&gt; uint256) balances</td>
</tr>
<tr>
<td>结构体</td>
<td>struct</td>
<td>自定义数据结构</td>
<td>struct Person { string name; uint age; }</td>
</tr>
<tr>
<td>枚举</td>
<td>enum</td>
<td>枚举类型</td>
<td>enum Status { Pending, Active, Inactive }</td>
</tr>
</tbody>
</table>
<h3 id="_3-1-3-函数修饰符" tabindex="-1"><a class="header-anchor" href="#_3-1-3-函数修饰符"><span>3.1.3 函数修饰符</span></a></h3>
<p>可见性修饰符表</p>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>可见范围</th>
<th>描述</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td>内部 + 外部</td>
<td>任何地方都可以调用</td>
<td>对外提供的公共接口</td>
</tr>
<tr>
<td>external</td>
<td>仅外部</td>
<td>只能从合约外部调用</td>
<td>外部用户接口，gas 效率更高</td>
</tr>
<tr>
<td>internal</td>
<td>内部 + 继承</td>
<td>当前合约和子合约可调用</td>
<td>内部逻辑函数，需要被继承</td>
</tr>
<tr>
<td>private</td>
<td>仅内部</td>
<td>只有当前合约可调用</td>
<td>私有实现细节</td>
</tr>
</tbody>
</table>
<p>状态修饰符表</p>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>状态读取</th>
<th>状态修改</th>
<th>Gas 消耗</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>pure</td>
<td>❌</td>
<td>❌</td>
<td>低</td>
<td>不读取也不修改状态的函数</td>
</tr>
<tr>
<td>view</td>
<td>✅</td>
<td>❌</td>
<td>低</td>
<td>只读取状态，不修改状态</td>
</tr>
<tr>
<td>payable</td>
<td>✅</td>
<td>✅</td>
<td>正常</td>
<td>可以接收以太币的函数</td>
</tr>
<tr>
<td>无修饰符</td>
<td>✅</td>
<td>✅</td>
<td>正常</td>
<td>可以读取和修改状态</td>
</tr>
</tbody>
</table>
<h3 id="_3-1-4-开发范式" tabindex="-1"><a class="header-anchor" href="#_3-1-4-开发范式"><span>3.1.4 开发范式</span></a></h3>
<ul>
<li>
<p><strong>状态机模式</strong></p>
<p>智能合约本质上是一个状态机，通过交易改变合约状态。</p>
</li>
<li>
<p><strong>事件驱动编程</strong></p>
<p>使用事件（Events）记录重要的状态变化，便于前端监听和日志记录。</p>
</li>
<li>
<p><strong>模块化设计</strong></p>
<p>通过继承和库（Library）实现代码复用和模块化。</p>
</li>
</ul>
<h2 id="_3-2-合约结构详解" tabindex="-1"><a class="header-anchor" href="#_3-2-合约结构详解"><span>3.2 合约结构详解</span></a></h2>
<h3 id="_3-2-1-基本结构" tabindex="-1"><a class="header-anchor" href="#_3-2-1-基本结构"><span>3.2.1 基本结构</span></a></h3>
<ol>
<li>‘//’为注释符号，// SPDX-License-Identifier: MIT</li>
<li>关键字pragma声明solidity需要的编译版本</li>
<li>contract关键字，用于声明一个合约， contract XXX {…};</li>
<li>合约内部由状态变量、构造函数、普通函数三个基础部份组成；</li>
</ol>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">MyContract</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 状态变量</span></span>
<span class="line">    <span class="token builtin">uint256</span> <span class="token keyword">public</span> myNumber<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 构造函数</span></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        myNumber <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _number<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        myNumber <span class="token operator">=</span> _number<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-状态变量" tabindex="-1"><a class="header-anchor" href="#_3-2-2-状态变量"><span>3.2.2 状态变量</span></a></h3>
<p>状态变量是永久存储在区块链上的数据，构成了合约的状态。</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">MyContract</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">    * 可以通过内部与外部函数更改变量</span>
<span class="line">    * public可以通过前端代码访问</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token builtin">uint256</span> <span class="token keyword">public</span> totalSupply<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">private</span> balances<span class="token punctuation">;</span></span>
<span class="line">    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 常量</span></span>
<span class="line">    <span class="token builtin">uint256</span> <span class="token keyword">public</span> <span class="token keyword">constant</span> MAX_SUPPLY <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 不可变量（构造函数中设置一次）</span></span>
<span class="line">    <span class="token builtin">uint256</span> <span class="token keyword">public</span> immutable deploymentTime<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span></span>
<span class="line">        deploymentTime <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span></span>
<span class="line">        totalSupply <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-函数" tabindex="-1"><a class="header-anchor" href="#_3-2-3-函数"><span>3.2.3 函数</span></a></h3>
<p>函数是合约中执行逻辑的核心组件。</p>
<p><strong>函数声明格式</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token operator">&lt;</span>函数名<span class="token operator">></span><span class="token punctuation">(</span><span class="token operator">&lt;</span>参数列表<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">&lt;</span>可见性<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>状态可变性<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>修饰符列表<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>虚拟<span class="token operator">/</span>重写关键字<span class="token operator">></span></span>
<span class="line">    <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>返回值列表<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 函数体</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数可见性</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">VisibilityExample</span> <span class="token punctuation">{</span>	</span>
<span class="line">		<span class="token comment">// 仅当前合约可访问</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">privateFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 当前合约和继承合约可访问</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">internalFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 所有人可访问</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">publicFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 仅外部调用</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">externalFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数状态修饰符</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">StateModifiers</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">uint</span> <span class="token keyword">public</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// view: 只读函数，不修改状态</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> count<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// pure: 纯函数，不读取也不修改状态</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">,</span> <span class="token builtin">uint</span> b<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// payable: 可接收以太币</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// msg.value 是发送的以太币数量</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 默认：可修改状态</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数参数和返回值</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// 多个返回值</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> name<span class="token punctuation">,</span> <span class="token builtin">uint</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">"Alice"</span><span class="token punctuation">;</span></span>
<span class="line">    age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 命名返回值</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">,</span> <span class="token builtin">uint</span> b<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span> sum<span class="token punctuation">,</span> <span class="token builtin">uint</span> product<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">    product <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 自动返回命名变量</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用带多返回值的函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">callExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> name<span class="token punctuation">,</span> <span class="token builtin">uint</span> age<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">getPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 或者忽略某些返回值</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token builtin">uint</span> productOnly<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修饰符（Modifiers）</strong></p>
<p>会先执行修饰符内容，可理解为每个函数执行前进行一些条件判断，来检查是否执行该函数；</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">ModifierExample</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span></span>
<span class="line">    <span class="token builtin">bool</span> <span class="token keyword">public</span> paused <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 自定义修饰符</span></span>
<span class="line">    <span class="token keyword">modifier</span> <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">"Not the owner"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">_</span><span class="token punctuation">;</span>  <span class="token comment">// 继续执行被修饰的函数</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">modifier</span> <span class="token function">whenNotPaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>paused<span class="token punctuation">,</span> <span class="token string">"Contract is paused"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">_</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">togglePause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span></span>
<span class="line">        paused <span class="token operator">=</span> <span class="token operator">!</span>paused<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 使用多个修饰符</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">criticalFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner whenNotPaused <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 函数逻辑</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// 基础合约</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">string</span> <span class="token keyword">public</span> name<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        name <span class="token operator">=</span> _name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"Some sound"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 继承合约</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">Dog</span> <span class="token keyword">is</span> Animal <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">)</span> <span class="token function">Animal</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 重写父类函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> override <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"Woof!"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 多重继承</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">Pet</span> <span class="token keyword">is</span> Animal <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token function">Animal</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        owner <span class="token operator">=</span> _owner<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">Labrador</span> <span class="token keyword">is</span> Dog<span class="token punctuation">,</span> Pet <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">address</span> _owner<span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">Dog</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">Pet</span><span class="token punctuation">(</span>_name<span class="token punctuation">,</span> _owner<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接口和抽象合约</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// 接口定义</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IERC20</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 抽象合约</span></span>
<span class="line">abstract <span class="token keyword">contract</span> <span class="token class-name">AbstractToken</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">string</span> <span class="token keyword">public</span> name<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 抽象函数，必须在子类中实现</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件</strong></p>
<p>事件是合约与外部世界通信的重要机制，用于记录重要的状态变化和提供日志功能</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">EventExample</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 定义事件</span></span>
<span class="line">    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">event</span> <span class="token function">Approval</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">>=</span> amount<span class="token punctuation">,</span> <span class="token string">"Insufficient balance"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> amount<span class="token punctuation">;</span></span>
<span class="line">        balances<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> amount<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 触发事件</span></span>
<span class="line">        <span class="token comment">// 可以在区块链浏览器查找到当前事件记录</span></span>
<span class="line">        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> to<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-安全实践" tabindex="-1"><a class="header-anchor" href="#_3-3-安全实践"><span>3.3 安全实践</span></a></h2>
<p>常见攻击手段</p>
<table>
<thead>
<tr>
<th>风险点</th>
<th>攻击机理</th>
<th>典型防护措施</th>
</tr>
</thead>
<tbody>
<tr>
<td>Reentrancy</td>
<td>恶意合约在 transfer / call 回调中再次进入受害函数，导致重复提款</td>
<td>1. <strong>Checks-Effects-Interactions</strong>2. <code v-pre>ReentrancyGuard</code>（OpenZeppelin）3. 使用 <code v-pre>transfer</code>/<code v-pre>send</code> 或限制 gas（已不推荐，仅旧代码）</td>
</tr>
<tr>
<td>访问控制 (Access Control)</td>
<td>未受保护的管理函数可被任何人调用</td>
<td>1. <code v-pre>Ownable</code>：<code v-pre>onlyOwner</code> 修饰符2. <code v-pre>AccessControl</code>：基于角色的权限（<code v-pre>DEFAULT_ADMIN_ROLE</code>, <code v-pre>MINTER_ROLE</code> 等）3. 及时转移 / 多签管理</td>
</tr>
<tr>
<td>整数溢出 (Integer Overflow/Underflow)</td>
<td>旧版本 <code v-pre>&lt;0.8</code> 加法/减法越界产生错误数值</td>
<td>1. Solidity 0.8+ 默认内置溢出检查2. 对老版本使用 <code v-pre>SafeMath</code> 库3. 精简不必要的 <code v-pre>unchecked</code> 区块</td>
</tr>
</tbody>
</table>
<h3 id="_3-3-1-重入攻击-reentrancy-防护" tabindex="-1"><a class="header-anchor" href="#_3-3-1-重入攻击-reentrancy-防护"><span>3.3.1 重入攻击（Reentrancy）防护</span></a></h3>
<p>重入攻击是智能合约最常见的安全漏洞之一。</p>
<p><strong>漏洞代码</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">VulnerableContract</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">uint256</span> amount <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"No balance"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 危险：先转账，后更新状态</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">"Transfer failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 状态更新在转账之后</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防护措施</strong></p>
<ol>
<li>检查-生效-交互模式（CEI Pattern）</li>
</ol>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">SecureContract</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">uint256</span> amount <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"No balance"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 先更新状态</span></span>
<span class="line">        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 后进行外部调用</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">"Transfer failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>重入锁（Reentrancy Guard）</li>
</ol>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">contract</span> <span class="token class-name">ReentrancyGuard</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">bool</span> <span class="token keyword">private</span> locked<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">modifier</span> <span class="token function">noReentrant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>locked<span class="token punctuation">,</span> <span class="token string">"Reentrant call"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        locked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">_</span><span class="token punctuation">;</span></span>
<span class="line">        locked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">SecureWithGuard</span> <span class="token keyword">is</span> ReentrancyGuard <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> noReentrant <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">uint256</span> amount <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"No balance"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">"Transfer failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-访问控制-access-control" tabindex="-1"><a class="header-anchor" href="#_3-3-2-访问控制-access-control"><span>3.3.2 访问控制（Access Control）</span></a></h3>
<p>严格的访问控制确保只有授权用户能执行敏感操作。</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">/**</span>
<span class="line"> * @title BadVault</span>
<span class="line"> * @dev 缺少访问控制，任何人都能调用 withdraw() 取走全部 ETH</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">BadVault</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balance<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 用户存钱</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span></span>
<span class="line">        balance<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ❌ anyone can withdraw ALL funds!</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">payable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加访问权限保证安全</p>
<p>require(msg.sender == owner, &quot;Not owner&quot;);增加权限</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">/**</span>
<span class="line"> * @title SafeVault</span>
<span class="line"> * @dev 仅部署者 (owner) 可以提取资金，简单显式访问控制</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">SafeVault</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">address</span> <span class="token keyword">public</span> immutable owner<span class="token punctuation">;</span>           <span class="token comment">// 部署者地址</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balance<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 构造函数：记录 owner</span></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 存款函数：任何人都可以存</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span></span>
<span class="line">        balance<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ✔️ 只有 owner 能提取全部余额</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 进行访问权限判断</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">"Not owner"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token builtin">uint256</span> amount <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"Nothing to withdraw"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 注意 Checks-Effects-Interactions 顺序</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token builtin">bool</span> ok<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> owner<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>ok<span class="token punctuation">,</span> <span class="token string">"Transfer failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-3-整数溢出防护-integer-overflow" tabindex="-1"><a class="header-anchor" href="#_3-3-3-整数溢出防护-integer-overflow"><span>3.3.3 整数溢出防护(Integer Overflow)</span></a></h3>
<p>在 Solidity 0.8.0 之前，整数溢出是一个严重问题。</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.7.6</span><span class="token punctuation">;</span>          <span class="token comment">// ⚠️ 0.7 版本不会自动检查溢出</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * @title BadCounter</span>
<span class="line"> * @dev 用户每调用一次 `inc()`，计数器加 1；当计数器达到 10 停止奖励。</span>
<span class="line"> *      但整数溢出可让攻击者将计数器绕回 0，再无限领奖。</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">BadCounter</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> counter<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">bool</span><span class="token punctuation">)</span>    <span class="token keyword">public</span> rewarded<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 计数 +1</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">        counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">// 若已 2**256-1 则回到 0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 满 10 次领取 1 wei</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"not enough actions"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>rewarded<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token string">"already claimed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        rewarded<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 为演示简化为 1 wei</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 向合约注入少量 ETH 供演示</span></span>
<span class="line">    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防止数据溢出处理</strong></p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">/**</span>
<span class="line"> * @title SafeCounter</span>
<span class="line"> * @dev 方案：在 inc() 中直接固定「最高 11」，超过即拒绝。</span>
<span class="line"> *      溢出永远不会发生，也杜绝了重复领奖。</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">SafeCounter</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> counter<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token builtin">uint8</span> <span class="token keyword">constant</span> MAX_ACTIONS <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>   <span class="token comment">// 上限 11，留 1 个缓冲</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/// 受控递增：达到 10 后就不准再加</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&lt;</span> MAX_ACTIONS<span class="token punctuation">,</span> <span class="token string">"limit reached"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/// 领取奖励</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"≥10 actions required"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        counter<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>                   <span class="token comment">// 重置为 0</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token builtin">bool</span> ok<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">require</span><span class="token punctuation">(</span>ok<span class="token punctuation">,</span> <span class="token string">"transfer failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/// 注资</span></span>
<span class="line">    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、智能合约实战项目" tabindex="-1"><a class="header-anchor" href="#四、智能合约实战项目"><span><strong>四、智能合约实战项目</strong></span></a></h1>
<h2 id="_4-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_4-1-环境准备"><span>4.1 环境准备</span></a></h2>
<p>Remix https://remix.ethereum.org/</p>
<p>Remix 是一个浏览器的IDE, 便于新手直接上手编译与部署合约代码</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image.png" alt="image.png"></p>
<h2 id="_4-2-合约代码" tabindex="-1"><a class="header-anchor" href="#_4-2-合约代码"><span>4.2 合约代码</span></a></h2>
<p>该合约代码实现一个留言功能，每个地址都可以在链上进行留言，并且留言信息可以一直在链上存在</p>
<div class="language-solidity line-numbers-mode" data-highlighter="prismjs" data-ext="solidity"><pre v-pre><code><span class="line"><span class="token comment">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">contract</span> <span class="token class-name">MessageBoard</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 保存所有人的留言记录</span></span>
<span class="line">    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">public</span> messages<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 留言事件，便于链上追踪</span></span>
<span class="line">    <span class="token keyword">event</span> <span class="token function">NewMessage</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> sender<span class="token punctuation">,</span> <span class="token builtin">string</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 构造函数，在部署时留言一条欢迎词</span></span>
<span class="line">    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">string</span> <span class="token keyword">memory</span> initMsg <span class="token operator">=</span> <span class="token string">"Hello ETH Pandas"</span><span class="token punctuation">;</span></span>
<span class="line">        messages<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>initMsg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">emit</span> <span class="token function">NewMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> initMsg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 发送一条留言</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">leaveMessage</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _msg<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span></span>
<span class="line">        messages<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_msg<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 添加到发言记录</span></span>
<span class="line">        <span class="token keyword">emit</span> <span class="token function">NewMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _msg<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 发出事件</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 查询某人第n条留言（从0开始）</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">,</span> <span class="token builtin">uint</span> index<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> messages<span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 查询某人一共发了多少条</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getMessageCount</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> messages<span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-新建合约文件" tabindex="-1"><a class="header-anchor" href="#_4-3-新建合约文件"><span>4.3 新建合约文件</span></a></h2>
<p>右侧点击FILE EXPORE，点击新建文件夹，新建一个名位messageboard.sol的文件把上述代码拷贝到文件中。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 1.png" alt="image.png"></p>
<h2 id="_4-4-编译" tabindex="-1"><a class="header-anchor" href="#_4-4-编译"><span>4.4 编译</span></a></h2>
<p>点击右侧Solidity Complier，进入编译面板。在COMPILER下拉栏可以选择不同的编译版本，选择与代码的编译版本一样即可。点击Complie messageboard.sol按钮即可进行编译，编译成功右侧Solidity Complier会显示一个✅的下标符号。若出现错误，则在编译器命令行会显示相关错误信息，进行修改后再进一步选择编译。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 2.png" alt="image.png"></p>
<h2 id="_4-5-部署" tabindex="-1"><a class="header-anchor" href="#_4-5-部署"><span>4.5 部署</span></a></h2>
<p>点击右侧Deploy &amp; run transactions，可以将智能合约部署到本地或者测试链以及公链，在本次例子中仅使用默认选项进行部署。IDE会给出一个默认的地址，里面有100 ether可以进行部署gas费，以及接口调用等费用。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 3.png" alt="image.png"></p>
<p>点击Deploy按钮后，即可进行部署，在下面红色框，可以看到部署成功后的合约地址，函数操作以及状态变量对应的值。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 4.png" alt="image.png"></p>
<p>展开IDE下方的命令终端，可以看到合约部署，执行构造函数给出的日志信息，也是该合约的实现留言的功能能力一个展示。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 5.png" alt="image.png"></p>
<h2 id="_4-5-调用函数" tabindex="-1"><a class="header-anchor" href="#_4-5-调用函数"><span>4.5 调用函数</span></a></h2>
<p>现在我们直接在编译器中，调研leaveMessage函数进行留言，当我们在leaveMessage输入“Hello World”，点击leaveMessage按钮，右侧命令终端会输出一个新的交易，我们点击打开后可以看到留言的信息。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 6.png" alt="image.png"></p>
<h1 id="五、以太坊技术基础" tabindex="-1"><a class="header-anchor" href="#五、以太坊技术基础"><span><strong>五、以太坊技术基础</strong></span></a></h1>
<h2 id="_5-1-帐户模型" tabindex="-1"><a class="header-anchor" href="#_5-1-帐户模型"><span>5.1 帐户模型</span></a></h2>
<table>
<thead>
<tr>
<th>对比维度</th>
<th>外部拥有账户 <strong>EOA</strong></th>
<th>合约账户 <strong>Contract Account</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>地址来源</td>
<td><code v-pre>keccak256(pubKey)[12:]</code>   (公钥→地址)</td>
<td>创建时由 <code v-pre>CREATE/CREATE2</code> 计算</td>
</tr>
<tr>
<td>控制方式</td>
<td><strong>私钥签名</strong>（用户、钱包）</td>
<td><strong>合约代码</strong>（EVM 字节码）</td>
</tr>
<tr>
<td>状态字段</td>
<td><code v-pre>nonce</code>、<code v-pre>balance</code></td>
<td><code v-pre>nonce</code>、<code v-pre>balance</code>、<code v-pre>codeHash</code>、<code v-pre>storageRoot</code></td>
</tr>
<tr>
<td>能否发起交易</td>
<td>✅ 必须用私钥签名</td>
<td>❌ 只能由 EOA 触发或合约内部调用</td>
</tr>
<tr>
<td>Gas 费用支付</td>
<td>由账户本身 ETH 余额承担</td>
<td>从调用者余额扣除</td>
</tr>
<tr>
<td>典型场景</td>
<td>钱包地址、热冷账户</td>
<td>ERC-20/721 Token、DeFi 协议、DAO</td>
</tr>
</tbody>
</table>
<h2 id="_5-2-gas-机制" tabindex="-1"><a class="header-anchor" href="#_5-2-gas-机制"><span>5.2 Gas 机制</span></a></h2>
<table>
<thead>
<tr>
<th>术语</th>
<th>含义</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Gas</strong></td>
<td>执行 1 条 EVM 指令的抽象工作量单位</td>
<td>汇编级别价格表见黄皮书</td>
</tr>
<tr>
<td><strong>Gas Limit (Tx)</strong></td>
<td>发送者愿为本笔交易消耗的 Gas 上限</td>
<td>防止死循环耗尽余额</td>
</tr>
<tr>
<td><strong>Gas Used</strong></td>
<td>实际执行指令花费的 Gas 总和</td>
<td>多退少不补</td>
</tr>
<tr>
<td><strong>Base Fee</strong></td>
<td>随区块动态调整的基础费用（EIP-1559）</td>
<td>全网销毁，抑制拍卖狂飙</td>
</tr>
<tr>
<td><strong>Priority Fee / Tip</strong></td>
<td>发送者给出以激励打包者的附加费</td>
<td>给矿工 / 验证者</td>
</tr>
<tr>
<td><strong>Max Fee Per Gas</strong></td>
<td><code v-pre>maxFee = baseFee + priorityFee</code> 上限</td>
<td>钱包通常自动估算</td>
</tr>
</tbody>
</table>
<h2 id="_5-3-交易生命周期" tabindex="-1"><a class="header-anchor" href="#_5-3-交易生命周期"><span>5.3 交易生命周期</span></a></h2>
<ul>
<li><strong>签名构造</strong>
<ul>
<li>钱包收集字段：<code v-pre>nonce, to, value, data, gasLimit, maxFeePerGas, priorityFeePerGas, chainId</code></li>
<li>使用私钥生成 <code v-pre>v, r, s</code> 签名 → <strong>序列化 RLP</strong></li>
</ul>
</li>
<li><strong>广播到 P2P 网络</strong>
<ul>
<li>交易进入本地 &amp; 邻居节点的 <strong>mempool</strong></li>
<li>节点根据 <code v-pre>maxFeePerGas</code>、<code v-pre>gasLimit</code>、<code v-pre>nonce</code> 做基本筛查</li>
</ul>
</li>
<li><strong>打包 / 提议区块</strong>
<ul>
<li>验证者（PoS）或矿工（PoW 时代）挑选利润最高、合法顺序的交易</li>
<li>执行 EVM → 产生 <strong>交易收据</strong>（<code v-pre>status, gasUsed, logsBloom, logs[]</code>）</li>
</ul>
</li>
<li><strong>区块传播与共识</strong>
<ul>
<li>区块头包含新 <strong>stateRoot</strong>、<strong>receiptsRoot</strong></li>
<li>超 2⁄3 质押者签名后在共识层定案（PoS Finality ≈ 2 Epoch ≈ 64 slot ≈ ~12 min）</li>
</ul>
</li>
<li><strong>确认数 &amp; Finality</strong>
<ul>
<li>客户端/前端常以 <code v-pre>n ≥ 12</code> 作“概率足够低”确认</li>
<li>完全终结在 PoS 下由 <strong>Finality Gadget</strong>（Casper FFG）给出</li>
</ul>
</li>
</ul>
<h1 id="六、部署合约" tabindex="-1"><a class="header-anchor" href="#六、部署合约"><span>六、部署合约</span></a></h1>
<p>在第四节我们实现了一个简单合约的的部署，但是我们只是简单进行了体验，没有真正的上链，接下来我们将通过测试链来实现真正的上链，测试链与真正的链都是有真实的节点在运行，因此我们可以在ETH浏览器去查找我们部署的合约，测试链往往我们进行测试合约的功能是否正常以及安全问题，当一切顺利，那么我们才会把合约部署到ETH公链，降低我们的研发成本；</p>
<h2 id="_6-1-测试链" tabindex="-1"><a class="header-anchor" href="#_6-1-测试链"><span>6.1 测试链</span></a></h2>
<p>以太坊测试网（Ethereum Testnets）是用于开发、测试和部署智能合约的网络环境，它们模拟主网功能但使用无价值的测试代币，让开发者可以安全地进行实验而无需承担真实的经济成本。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>共识机制</th>
<th>状态</th>
<th>主要特点</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sepolia</td>
<td>PoS (权益证明)</td>
<td>活跃</td>
<td>长期支持的主要测试网，与主网最相似，稳定性高。</td>
<td>最终部署前测试，生产环境模拟，DApp集成测试</td>
</tr>
<tr>
<td>Goerli</td>
<td>PoS (权益证明)</td>
<td>即将弃用</td>
<td>曾经的主要测试网，2024年开始逐步淘汰，仍有部分服务支持。</td>
<td>遗留项目测试，不建议新项目使用。</td>
</tr>
<tr>
<td>Holesky</td>
<td>PoS (权益证明)</td>
<td>活跃</td>
<td>专为验证者测试设计，大型网络规模，质押功能完整。</td>
<td>验证者节点测试， 质押协议开发，大规模网络测试。</td>
</tr>
<tr>
<td>Ropsten</td>
<td>PoW (工作量证明)</td>
<td>已弃用</td>
<td>历史上重要的测试网，2022年已关闭，曾模拟主网PoW环境。</td>
<td>已停用</td>
</tr>
<tr>
<td>Rinkeby</td>
<td>PoA (权威证明)</td>
<td>已弃用</td>
<td>基于权威证明，2022年已关闭，曾经较为稳定。</td>
<td>已停用</td>
</tr>
<tr>
<td>Kovan</td>
<td>PoA (权威证明)</td>
<td>已弃用</td>
<td>快速出块，2022年已关闭，社区维护。</td>
<td>已停用</td>
</tr>
</tbody>
</table>
<h2 id="_6-2-领取sepolia代币" tabindex="-1"><a class="header-anchor" href="#_6-2-领取sepolia代币"><span>6.2 领取Sepolia代币</span></a></h2>
<p>创建一个Sepolia地址，我们可以直接在MetaMask钱包获取Sepolia测试网地址</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 7.png" alt="image.png"></p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 8.png" alt="image.png"></p>
<p>在<a href="https://sepolia-faucet.pk910.de/" target="_blank" rel="noopener noreferrer">https://sepolia-faucet.pk910.de/</a>进行工作量证明获取代币，点开网址输入对应的测试网地址即可，在运行一段时间后，即可获取相应的代币，初次之外许多网址也可以领取，但往往会对主网的余额有要求。上述网址若出现IP相关错误，在完成真人认证后，关闭VPN在点击Start Mining。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 9.png" alt="image.png"></p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 10.png" alt="image.png"></p>
<h2 id="_6-3-remix部署到sepolia" tabindex="-1"><a class="header-anchor" href="#_6-3-remix部署到sepolia"><span>6.3 Remix部署到Sepolia</span></a></h2>
<p>上述一切准备好后，我们通过Remix即可简单把第四节的合约代币部署到测试链上。</p>
<h3 id="_6-3-1-remix编译部署" tabindex="-1"><a class="header-anchor" href="#_6-3-1-remix编译部署"><span>6.3.1 Remix编译部署</span></a></h3>
<p>点击Injected Provider - MetaMask连接对应的测试网钱包。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 11.png" alt="image.png"></p>
<p>完成编译后，回到部署，点击Deploy部署跳转到MetaMask钱包交易请求，点击确认即可。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 12.png" alt="image.png"></p>
<p>部署成功后，命令行会出现对应的日志信息。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 13.png" alt="image.png"></p>
<h3 id="_6-3-2-etherscan查看合约" tabindex="-1"><a class="header-anchor" href="#_6-3-2-etherscan查看合约"><span>6.3.2 Etherscan查看合约</span></a></h3>
<p>现在我们通过Etherscan即可查看我们部署该合约的过程，我们通过transaction hash可以查看部署过程。首先将Etherscan的网络切换到Sepolia。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 14.png" alt="image.png"></p>
<p>现在我们已经成功在Etherscan查看到我们的交易信息（部署合约）。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 15.png" alt="image.png"></p>
<p>现在我们通过我们合约的地址进行在Etherscan查看我们的合约，在Remix复制我们合约地址0xfaC4dF6aA3b8265A96a7B269a55A88E2009F34Be进行查询。可以看到目前该合约并无Transactions.但是我们可以点击Events查看我们构造的信息。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 16.png" alt="image.png"></p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 17.png" alt="image.png"></p>
<h3 id="_6-3-3-合约交互" tabindex="-1"><a class="header-anchor" href="#_6-3-3-合约交互"><span>6.3.3 合约交互</span></a></h3>
<p>回到Remix，在LeaveMeaasge输入Hello ETH，点击LeaveMeaasge可以看到我们已经成功进行了交互。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 18.png" alt="image.png"></p>
<p>现在我们再一次查询合约地址，可以看到我们新增了一个Transaction。点开这个Transaction后再点击Logs可以看到我们刚刚输入的信息。</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 19.png" alt="image.png"></p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 20.png" alt="image.png"></p>
<h1 id="七、区块链前端整合" tabindex="-1"><a class="header-anchor" href="#七、区块链前端整合"><span><strong>七、区块链前端整合</strong></span></a></h1>
<h2 id="_7-1-前端与合约交互工作流程概览" tabindex="-1"><a class="header-anchor" href="#_7-1-前端与合约交互工作流程概览"><span>7.1 前端与合约交互工作流程概览</span></a></h2>
<h3 id="_7-1-2-交互流程" tabindex="-1"><a class="header-anchor" href="#_7-1-2-交互流程"><span>7.1.2 交互流程</span></a></h3>
<ol>
<li><strong>初始化连接</strong>：前端检测并连接Web3提供者</li>
<li><strong>用户授权</strong>：请求用户授权访问钱包账户</li>
<li><strong>合约实例化</strong>：使用ABI和合约地址创建合约实例</li>
<li><strong>函数调用</strong>：通过合约实例调用智能合约函数</li>
<li><strong>交易签名</strong>：钱包对交易进行数字签名</li>
<li><strong>广播交易</strong>：将签名交易发送到区块链网络</li>
<li><strong>状态更新</strong>：获取交易结果并更新前端界面</li>
</ol>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 21.png" alt="image.png"></p>
<h3 id="_7-1-2-关键技术栈" tabindex="-1"><a class="header-anchor" href="#_7-1-2-关键技术栈"><span>7.1.2 关键技术栈</span></a></h3>
<ul>
<li>**合约语言：**掌握Solidity等相关合约开发语言</li>
<li><strong>Web3.js/Ethers.js</strong>：JavaScript库，提供区块链交互API</li>
<li><strong>钱包连接器</strong>：如WalletConnect、Web3Modal</li>
<li><strong>状态管理</strong>：React Context、Redux等管理连接状态</li>
<li><strong>错误处理</strong>：网络异常、用户拒绝、Gas不足等场景处理</li>
</ul>
<p>上述技术栈中，合约语言与一些前端JS区块交互的API最为基础，其他方面往往由其他厂商提供，如RPC节点、钱包等。</p>
<h2 id="_7-2-实例操作" tabindex="-1"><a class="header-anchor" href="#_7-2-实例操作"><span><strong>7.2 实例操作</strong></span></a></h2>
<p>在前面第六个章节已经成功将智能合约部署到链上，可是缺少了交互效果，为此我们将创建一个前端页面与智能合约交互，这样普通用户只需要有余额的ETH地址并进行留言。整体效果如下：</p>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 22.png" alt="image.png"></p>
<h3 id="_7-2-1-关键代码" tabindex="-1"><a class="header-anchor" href="#_7-2-1-关键代码"><span><strong>7.2.1 关键代码</strong></span></a></h3>
<p>本前端代码使用语言：html + js + css, 均在同一文件实现，代码行数650行。</p>
<p>JS三方库：Web3.js 。</p>
<p>完整代码：<a href="https://github.com/JXChuangLab/JXChuangLab.github.io/blob/main/messageboard.html" target="_blank" rel="noopener noreferrer">https://github.com/JXChuangLab/JXChuangLab.github.io/blob/main/messageboard.html</a></p>
<ol>
<li>连接钱包</li>
</ol>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">connectWallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1. 请求用户授权账户访问</span></span>
<span class="line">    <span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'eth_requestAccounts'</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 2. 创建 Web3 实例</span></span>
<span class="line">    web3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web3</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>ethereum<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    account <span class="token operator">=</span> accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 3. 验证网络,本示例使用Sepolia 测试网</span></span>
<span class="line">    <span class="token keyword">const</span> chainId <span class="token operator">=</span> <span class="token keyword">await</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getChainId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>chainId <span class="token operator">!==</span> <span class="token number">11155111</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Sepolia 测试网</span></span>
<span class="line">        <span class="token comment">// 网络错误处理</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>合约 ABI 定义
<ol>
<li>ABI（<strong>A</strong>pplication <strong>B</strong>inary <strong>I</strong>nterface，应用二进制接口）是以太坊为<strong>合约之间、合约与外部世界</strong>交互制定的<strong>编解码规范。</strong></li>
<li>前端代码JSON描述的ABI，可以简单理解成一份用于合约内部变量、函数的描述，可以通过这些描述准确调用对应的函数或者获取变量值等。</li>
</ol>
</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line">const contractABI = <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"inputs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"stateMutability"</span><span class="token operator">:</span> <span class="token string">"nonpayable"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"constructor"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"anonymous"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"inputs"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"indexed"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"internalType"</span><span class="token operator">:</span> <span class="token string">"address"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"sender"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"address"</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"indexed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"internalType"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"message"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"NewMessage"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"event"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            ......</span>
<span class="line">        <span class="token punctuation">]</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>合约实例化</li>
</ol>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">setContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> address <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'contractAddress'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 地址有效性验证</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">isAddress</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 错误处理</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 创建合约实例</span></span>
<span class="line">    contract <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>Contract</span><span class="token punctuation">(</span>contractABI<span class="token punctuation">,</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>合约方法调用</p>
<p>4.1 写入操作（需要 Gas）</p>
<p><strong>核心概念</strong>：</p>
<ul>
<li><code v-pre>.send()</code> 方法用于执行状态改变的交易</li>
<li>需要指定 <code v-pre>from</code> 参数（发送者地址）</li>
<li>返回交易对象，包含 <code v-pre>transactionHash</code> 等信息</li>
<li>用户需要在钱包中确认交易并支付 gas 费用</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">leaveMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'messageInput'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 调用合约的写入方法</span></span>
<span class="line">        <span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> contract<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function">leaveMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">            <span class="token literal-property property">from</span><span class="token operator">:</span> account </span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 获取交易哈希</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易哈希:'</span><span class="token punctuation">,</span> tx<span class="token punctuation">.</span>transactionHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 错误处理</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 只读操作（免费）</p>
<ul>
<li><code v-pre>.call()</code> 方法用于执行只读查询</li>
<li>不需要 gas 费用，不会改变区块链状态</li>
<li>可以直接获取返回值</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">queryMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> address <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'queryAddress'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 调用只读方法获取留言数量</span></span>
<span class="line">        <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">await</span> contract<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function">getMessageCount</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 批量获取留言内容</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token keyword">await</span> contract<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 处理消息内容</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 错误处理</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h1 id="八、高阶内容" tabindex="-1"><a class="header-anchor" href="#八、高阶内容"><span>八、高阶内容</span></a></h1>
<h2 id="_8-1-gas-优化" tabindex="-1"><a class="header-anchor" href="#_8-1-gas-优化"><span>8.1 Gas 优化</span></a></h2>
<h3 id="_8-1-1-基本原理与计量单位" tabindex="-1"><a class="header-anchor" href="#_8-1-1-基本原理与计量单位"><span>8.1.1 基本原理与计量单位</span></a></h3>
<ul>
<li>Gas 是 EVM 执行操作的单位。每条指令消耗固定的 gas。</li>
<li>优化目标是减少交易所需的总 gas，提高用户体验并降低成本。</li>
</ul>
<h3 id="_8-1-2-常见优化技巧" tabindex="-1"><a class="header-anchor" href="#_8-1-2-常见优化技巧"><span>8.1.2 常见优化技巧</span></a></h3>
<ol>
<li>
<p><strong>减少存储操作（Storage Write）</strong></p>
<ul>
<li>
<p>读取存储第一次需 2100 gas（后续 100 gas），而内存读取仅3 gas。推荐多次访问同一存储数据时，将其缓存到内存以减少 SLOAD 次数</p>
</li>
<li>
<p>每次写入 <code v-pre>storage</code> 的成本高达 20,000 gas；优先使用 <code v-pre>memory</code>。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">// ❌ 非优化写法</span>
<span class="line">mapping(address => uint256) public balances;</span>
<span class="line">function deposit() public payable {</span>
<span class="line">    balances[msg.sender] += msg.value;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// ✅ 优化写法（一次读，一次写）</span>
<span class="line">function deposit() public payable {</span>
<span class="line">    uint256 current = balances[msg.sender];</span>
<span class="line">    balances[msg.sender] = current + msg.value;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>使用位压缩（Bit Packing）</strong></p>
<ul>
<li>
<p>将多个变量压缩到一个 <code v-pre>uint256</code> 中以节省存储空间。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">struct Packed {</span>
<span class="line">    uint128 a;</span>
<span class="line">    uint128 b;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>循环优化</strong></p>
<ul>
<li>
<p>减少不必要的运算，如 <code v-pre>array.length</code> 缓存到变量中。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">// ❌ 非优化</span>
<span class="line">for (uint i = 0; i &lt; arr.length; i++) {</span>
<span class="line">    ...</span>
<span class="line">}</span>
<span class="line">// ✅ 优化</span>
<span class="line">uint len = arr.length;</span>
<span class="line">for (uint i = 0; i &lt; len; i++) {</span>
<span class="line">    ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>函数可见性选择</strong></p>
<ul>
<li><code v-pre>external</code> 比 <code v-pre>public</code> 更节省 gas，适用于仅被外部调用的函数。</li>
</ul>
</li>
</ol>
<h2 id="_8-2-合约安全" tabindex="-1"><a class="header-anchor" href="#_8-2-合约安全"><span>8.2 合约安全</span></a></h2>
<ul>
<li>安全漏洞库（reentrancy、oracle manipulation）</li>
</ul>
<h3 id="_8-2-1-安全设计原则" tabindex="-1"><a class="header-anchor" href="#_8-2-1-安全设计原则"><span>8.2.1 安全设计原则</span></a></h3>
<ul>
<li>最小权限原则（Least Privilege）</li>
<li>模块化结构便于审计</li>
<li>显式错误处理与事件记录</li>
</ul>
<h3 id="_8-2-2-常见漏洞类型与防护" tabindex="-1"><a class="header-anchor" href="#_8-2-2-常见漏洞类型与防护"><span>8.2.2 常见漏洞类型与防护</span></a></h3>
<ol>
<li>
<p><strong>重入攻击 Reentrancy</strong></p>
<ul>
<li>
<p>利用外部合约在 fallback 中重新调用原函数。历史上最著名的The DAO事件便因重入漏洞导致约6000万美元ETH被盗，最终造成以太坊社区分裂（形成ETH/ETC链）。</p>
</li>
<li>
<p>防护方法：先更新状态，再转账。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">// ❌ 有漏洞</span>
<span class="line">function withdraw() public {</span>
<span class="line">    require(balance[msg.sender] > 0);</span>
<span class="line">    (bool sent,) = msg.sender.call{value: balance[msg.sender]}("");</span>
<span class="line">    require(sent);</span>
<span class="line">    balance[msg.sender] = 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// ✅ 修复后</span>
<span class="line">function withdraw() public {</span>
<span class="line">    uint amount = balance[msg.sender];</span>
<span class="line">    balance[msg.sender] = 0;</span>
<span class="line">    (bool sent,) = msg.sender.call{value: amount}("");</span>
<span class="line">    require(sent);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>预言机操纵 Oracle Manipulation</strong></p>
<ul>
<li>依赖外部价格源的不可信更新。</li>
<li>解决方法：
<ul>
<li>使用 Chainlink 等权威价格源。</li>
<li>增加时序约束和多源验证。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>整数溢出/下溢</strong></p>
<ul>
<li>使用 <code v-pre>unchecked {}</code> 时需确保逻辑安全。</li>
<li>推荐使用 <code v-pre>SafeMath</code> 或 Solidity 0.8+ 的内建溢出检查。</li>
</ul>
</li>
<li>
<p><strong>权限控制缺失</strong></p>
<ul>
<li>所有管理函数应使用 <code v-pre>onlyOwner</code> 或 <code v-pre>AccessControl</code> 修饰符保护。</li>
</ul>
</li>
<li>
<p><strong>未初始化代理</strong></p>
<ul>
<li>基于代理模式的合约若未正确执行初始化函数，可能被任意人初始化并接管合约。</li>
<li>著名的例子包括 Harvest Finance 其在使用 Uniswap V3 做市策略的 Vault 合约中存在未初始化漏洞，如果被利用攻击者可销毁实现合约。该团队曾为此漏洞支付高额赏金修复。</li>
</ul>
</li>
<li>
<p><strong>前置交易/三明治攻击</strong></p>
<ul>
<li>攻击者在交易执行前后分别发送交易，以不利滑点或套利为目的。</li>
<li>例如 2025 年 3 月，一名用户在 Uniswap V3 的稳定币兑换中遭遇三明治攻击，约 21.5 万美元的 USDC 兑换几乎被抢跑，损失了 98% 的资金</li>
</ul>
</li>
</ol>
<h2 id="_8-3-智能合约审计" tabindex="-1"><a class="header-anchor" href="#_8-3-智能合约审计"><span><strong>8.3 智能合约审计</strong></span></a></h2>
<blockquote>
<p>为什么要审计合约、合约审计的流程是什么、业内有名的审计公司有哪些</p>
</blockquote>
<h3 id="_8-3-1-审计必要性" tabindex="-1"><a class="header-anchor" href="#_8-3-1-审计必要性"><span>8.3.1 审计必要性</span></a></h3>
<ul>
<li>智能合约一旦部署无法修改，审计是风险控制关键手段。</li>
<li>资金安全：避免用户资产被盗。</li>
<li>法律合规：一些监管要求必须审计证明。</li>
</ul>
<h3 id="_8-3-2-常见的合约审计工具" tabindex="-1"><a class="header-anchor" href="#_8-3-2-常见的合约审计工具"><span>8.3.2 常见的合约审计工具</span></a></h3>
<ul>
<li><strong>Slither</strong>：以 Python 编写的静态分析工具，可检测安全漏洞和代码规范问题
<ul>
<li>常用命令为 <code v-pre>slither MyContract.sol</code>（也可指定合约地址）来扫描合约代码</li>
<li>使用方式：<a href="https://learnblockchain.cn/article/6069#:~:text=02.slither%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%20,solidity%20cfg" target="_blank" rel="noopener noreferrer">learnblockchain.cn</a></li>
</ul>
</li>
<li><strong>MythX</strong>：基于云平台的安全分析服务，支持命令行和 API 调用
<ul>
<li>使用CLI时，可执行类似 <code v-pre>mythx analyze MyContract.sol</code> 进行安全扫描</li>
<li>使用方式：<a href="https://github.com/ConsenSysDiligence/mythx-cli#:~:text=%24%20mythx%20Usage%3A%20mythx%20,ARGS" target="_blank" rel="noopener noreferrer">github.com</a><a href="https://github.com/ConsenSysDiligence/mythx-cli#:~:text=analyze%20%20%20Analyze%20the,Display%20API%20version%20information" target="_blank" rel="noopener noreferrer">github.com</a></li>
</ul>
</li>
<li><strong>Foundry</strong>：高效的Solidity开发测试框架，支持属性测试（模糊测试）。
<ul>
<li>可使用 <code v-pre>forge test</code> 运行所有测试（包括以 <code v-pre>testFuzz_</code> 开头的基于属性测试）</li>
<li>使用方式：<a href="https://learnblockchain.cn/docs/foundry/i18n/zh/forge/fuzz-testing.html#:~:text=%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0%E5%AE%83%E9%80%9A%E8%BF%87%E4%BA%86%EF%BC%9A" target="_blank" rel="noopener noreferrer">learnblockchain.cn</a>，或通过 <code v-pre>forge test --match-path &lt;test 文件路径&gt;</code> 定向运行特定测试文件。</li>
</ul>
</li>
</ul>
<h3 id="_8-3-3-审计标准流程" tabindex="-1"><a class="header-anchor" href="#_8-3-3-审计标准流程"><span>8.3.3 审计标准流程</span></a></h3>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 23.png" alt="image.png"></p>
<ol>
<li><strong>静态分析（Static Analysis）</strong>：使用工具如 Slither、Mythril 扫描代码缺陷</li>
<li><strong>动态测试（Fuzzing/Property Testing）</strong>：模拟攻击行为和极限条件</li>
<li><strong>人工审查（Manual Review）</strong>：由资深审计员检查业务逻辑漏洞</li>
<li><strong>审计报告生成（Audit Report）</strong>：明确发现的问题及修复建议</li>
</ol>
<h3 id="_8-3-4-知名审计机构比较" tabindex="-1"><a class="header-anchor" href="#_8-3-4-知名审计机构比较"><span>8.3.4 知名审计机构比较</span></a></h3>
<table>
<thead>
<tr>
<th>机构</th>
<th>特点</th>
<th>项目经验</th>
</tr>
</thead>
<tbody>
<tr>
<td>慢雾科技</td>
<td>国内领先，注重攻击复现</td>
<td>EOS、币安、火币等</td>
</tr>
<tr>
<td>CertiK</td>
<td>静态扫描+天网监控平台</td>
<td>PancakeSwap、Aave</td>
</tr>
<tr>
<td>OpenZeppelin</td>
<td>社区信赖度高，基础库作者</td>
<td>Compound、Balancer</td>
</tr>
<tr>
<td>ConsenSys Diligence</td>
<td>精通以太坊底层原理</td>
<td>Uniswap、1inch</td>
</tr>
</tbody>
</table>
<h2 id="_8-4-开发协作规范" tabindex="-1"><a class="header-anchor" href="#_8-4-开发协作规范"><span>8.4 <strong>开发协作规范</strong></span></a></h2>
<h3 id="_8-4-1-github-工作流" tabindex="-1"><a class="header-anchor" href="#_8-4-1-github-工作流"><span>8.4.1 GitHub 工作流</span></a></h3>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 24.png" alt="image.png"></p>
<ul>
<li>分支策略：
<ul>
<li><strong>主分支 (main/master)</strong>：始终保持可部署状态，任何代码合并前必须经过测试与审查。</li>
<li><strong>开发分支 (develop)</strong>：用于日常功能开发，作为 feature 分支的合并目标。</li>
<li><strong>功能分支 (feature/xxx)</strong>：以 <code v-pre>feature/功能描述</code> 命名，完成后合并至 develop 分支。</li>
<li><strong>修复分支 (fix/xxx)</strong>：针对 bug 的修复，以 <code v-pre>fix/bug描述</code> 命名，优先合并到 develop 或 main。</li>
<li><strong>发布分支 (release/xxx)</strong>：用于发布前准备，如版本打包、测试等，合并后删除。</li>
</ul>
</li>
<li>提交信息规范
<ul>
<li>
<p>使用简洁明确的提交信息，推荐格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">类型: 简要描述</span>
<span class="line"></span>
<span class="line">说明：可选的详细信息、动机、对比等</span>
<span class="line">Issue：关联的 Issue 编号（如有）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>类型包括：</p>
<ul>
<li><code v-pre>feat</code>: 新功能</li>
<li><code v-pre>fix</code>: 修复问题</li>
<li><code v-pre>docs</code>: 文档更新</li>
<li><code v-pre>refactor</code>: 代码重构</li>
<li><code v-pre>test</code>: 添加或修改测试</li>
<li><code v-pre>chore</code>: 构建过程或辅助工具变动</li>
</ul>
</li>
</ul>
</li>
<li>Pull Request（PR）流程
<ul>
<li>
<p>每个功能或修复应新建一个分支。</p>
</li>
<li>
<p>提交 PR 前需确保：</p>
<ul>
<li>本地通过所有测试</li>
<li>通过 ESLint 或其他静态检查工具</li>
<li>包含必要的文档或注释</li>
</ul>
</li>
<li>
<p>PR 标题应简洁明了，描述改动内容。</p>
</li>
<li>
<p>不允许合并自己创建的 PR，需至少一位 reviewer 审查通过。</p>
</li>
<li>
<p>可在项目仓库中添加 <code v-pre>PULL_REQUEST_TEMPLATE.md</code> 文件，可统一 PR 描述格式，提升协作效率。例如：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line">## <span class="token constant">PR</span> 说明  </span>
<span class="line"><span class="token operator">-</span> 变更内容：简要描述此次 <span class="token constant">PR</span> 完成了哪些功能或修复了哪些问题。  </span>
<span class="line"><span class="token operator">-</span> 关联 Issue：填写相关 Issue 编号（如无可留空）。  </span>
<span class="line"><span class="token operator">-</span> 主要改动：列出代码改动的关键点，如新增哪些函数、修改哪些逻辑等。  </span>
<span class="line"><span class="token operator">-</span> 测试情况：说明已编写或执行了哪些测试来验证改动。  </span>
<span class="line"><span class="token operator">-</span> 影响评估：列出可能影响的模块或兼容性问题（如版本依赖）。  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>PR 标题应简洁表达功能，如 <code v-pre>feat: 添加 staking 功能</code></p>
</li>
<li>
<p>Code Review 检查清单（代码评审时可按以下要点逐项检查）：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">- 代码是否符合风格规范，命名清晰、可读性高？</span>
<span class="line">- 业务逻辑是否正确，边界情况和异常情况是否处理周全？</span>
<span class="line">- 安全性检查：是否考虑重入、整数溢出、权限校验、外部调用等风险？</span>
<span class="line">- Gas 消耗：是否避免了不必要的存储操作或大循环？</span>
<span class="line">- 是否增加了足够的注释和文档说明？是否存在未使用的代码或死代码？</span>
<span class="line">- 是否编写了充分的单元测试覆盖常见场景和极端情况？</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="_8-4-2-issue-管理" tabindex="-1"><a class="header-anchor" href="#_8-4-2-issue-管理"><span>8.4.2 Issue 管理</span></a></h3>
<p><img src="@source/智能合约实习岗位知识模块 1fabbd63be87807f80c6e383e65599f0/image 25.png" alt="image.png"></p>
<ul>
<li>
<p>描述 Issue 结构推荐：背景 + 问题 + 尝试过的方法 + 环境信息</p>
<ul>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">### 问题描述</span>
<span class="line">执行 `forge test` 时出现 `out of gas` 错误</span>
<span class="line"></span>
<span class="line">### 环境</span>
<span class="line">- Foundry 版本: 0.2.0</span>
<span class="line">- Solidity: 0.8.21</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Issue 标签分类标准与自动化：</p>
<ul>
<li>制定统一的 Issue 标签规则，例如使用 <code v-pre>bug</code>（缺陷）、<code v-pre>enhancement</code>（增强）、<code v-pre>security</code>（安全）、<code v-pre>documentation</code>（文档）、<code v-pre>question</code>（问题）等标签；</li>
<li>根据需求添加 <code v-pre>high-priority</code>、<code v-pre>low-priority</code>、<code v-pre>help wanted</code> 等。</li>
<li>通过 GitHub Actions 等自动化工具，还可自动为新 Issue 或 PR 添加标签（如根据文件路径、标题关键字匹配标签）、标记长期未更新的 Issue 为 <code v-pre>stale</code> 等，减少人工维护成本。</li>
</ul>
</li>
</ul>
<h3 id="_8-4-3-开源协作礼仪" tabindex="-1"><a class="header-anchor" href="#_8-4-3-开源协作礼仪"><span>8.4.3 开源协作礼仪</span></a></h3>
<ul>
<li>所有代码变更需配测试和文档</li>
<li>保持沟通公开透明：Prefer PR 评论而不是私信</li>
<li>使用讨论区（Discussion）提重大设计变更</li>
</ul>
<h2 id="_8-5-layer-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_8-5-layer-2-解决方案"><span>8.5 Layer 2 解决方案</span></a></h2>
<h3 id="_8-5-1-rollup-技术比较" tabindex="-1"><a class="header-anchor" href="#_8-5-1-rollup-技术比较"><span>8.5.1 Rollup 技术比较</span></a></h3>
<table>
<thead>
<tr>
<th>项目类型</th>
<th>原理</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Optimistic Rollup</td>
<td>设定欺诈证明期</td>
<td>EVM 兼容性强，成本低</td>
<td>提现延迟（1~2 周）</td>
</tr>
<tr>
<td>ZK Rollup</td>
<td>零知识证明</td>
<td>安全性高，支持快速提现</td>
<td>开发难度大，不完全 EVM 兼容</td>
</tr>
</tbody>
</table>
<h3 id="_8-5-2-主流-l2-平台概览" tabindex="-1"><a class="header-anchor" href="#_8-5-2-主流-l2-平台概览"><span>8.5.2 主流 L2 平台概览</span></a></h3>
<ol>
<li><strong>Starknet</strong>
<ul>
<li>语言：Cairo（非 Solidity）</li>
<li>特点：ZK-STARK，极高扩展性</li>
</ul>
</li>
<li><strong>zkSync</strong>
<ul>
<li>工具链：支持 Solidity 合约</li>
<li>特点：ZK Rollup，开发体验佳</li>
</ul>
</li>
<li><strong>Arbitrum</strong>
<ul>
<li>Optimistic 架构</li>
<li>特点：兼容 EVM 工具链，如 Hardhat/Foudnry</li>
</ul>
</li>
<li><strong>Base</strong>
<ul>
<li>Coinbase 推出，构建于 OP Stack 上</li>
<li>特点：强生态支持，开发成本低</li>
</ul>
</li>
</ol>
<h3 id="_8-5-3-开发入门指南" tabindex="-1"><a class="header-anchor" href="#_8-5-3-开发入门指南"><span>8.5.3 开发入门指南</span></a></h3>
<ol>
<li><strong>环境准备</strong></li>
</ol>
<ul>
<li>安装与配置：基于目标平台选择相应 SDK，如 zkSync CLI、Starknet CLI</li>
<li>网络设置：区分 L1 与 L2 的 RPC 端点与钱包配置（如 MetaMask L2 网络）</li>
<li>Devnet 本地测试：如 Starknet Devnet、zkSync Dev Node、Hardhat L2 plugin</li>
</ul>
<ol>
<li><strong>合约部署注意事项</strong></li>
</ol>
<ul>
<li>部分平台不支持 <code v-pre>CREATE2</code> 或存在 gas 上限差异</li>
<li>使用平台特定部署脚本，如 zkSync 的 <code v-pre>deploy()</code> 命令或 <code v-pre>hardhat starknet deploy</code></li>
<li>考虑合约地址推导方式变化（例如 zkRollup 平台不保证地址一致性）</li>
</ul>
<p><strong>3. 跨链交互与桥接</strong></p>
<ul>
<li>使用官方桥接器：如 zkSync Bridge、Arbitrum Bridge</li>
<li>第三方跨链协议支持：LayerZero、Axelar、Wormhole 等</li>
<li>跨链消息时延、费用需事先评估</li>
</ul>
<p><strong>4. 案例推荐（可拓展）</strong></p>
<ul>
<li>zkSync：Uniswap V3 fork 实践部署体验</li>
<li>Starknet：使用 Cairo 构建 NFT 合约与前端交互</li>
<li>Arbitrum：使用 Nitro 模式构建 Gas 竞拍逻辑</li>
</ul>
<hr>
<hr>
</div></template>


