<template><div><h1 id="第一部分-入门导读" tabindex="-1"><a class="header-anchor" href="#第一部分-入门导读"><span>第一部分：入门导读</span></a></h1>
<h2 id="一、区块链基础概念" tabindex="-1"><a class="header-anchor" href="#一、区块链基础概念"><span>一、区块链基础概念</span></a></h2>
<blockquote>
<p>在本章，我们首先介绍区块链的基本概念，包括其定义、典型结构，接着阐述公链、私链与联盟链三种主要类型；然后解析一下 Web3 的内涵，并对比了 Web3、Web 3.0 与传统 Web2 的差异；最后探讨去中心化带来的主要优势与面临的挑战。</p>
</blockquote>
<h3 id="_1-1-区块链是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-区块链是什么"><span>1.1 区块链是什么？</span></a></h3>
<p>区块链是一种去中心化的分布式账本技术，用于在网络节点之间安全、透明且不可篡改地记录事务数据。每条链由一系列按照时间顺序相连的 “区块” 组成，每个区块内部包含了多笔交易数据及元数据，确保了数据记录的完整性与可追溯性。</p>
<p>这是 wiki 上面非常严谨的定义，看不懂没关系，接下来我们会详细解释其中的每一个概念。</p>
<hr>
<h3 id="_1-2-区块链的典型结构" tabindex="-1"><a class="header-anchor" href="#_1-2-区块链的典型结构"><span>1.2 区块链的典型结构</span></a></h3>
<p>区块链在技术实现上主要依托以下几个核心组件：</p>
<ol>
<li>
<p><strong>P2P 网络</strong></p>
<p>区块链节点通过点对点（Peer-to-Peer）网络相互连接，每个节点都保存账本副本，通过广播和同步机制实现实时数据共享与更新。</p>
</li>
<li>
<p><strong>共识机制</strong></p>
<p>为了在去中心化环境中达成一致，区块链引入了共识算法，如比特币的工作量证明（Proof-of-Work, PoW）或以太坊升级后的权益证明（Proof-of-Stake, PoS），保证网络中大多数节点认可新生成区块的合法性。</p>
</li>
<li>
<p><strong>链与区块</strong></p>
<p>区块链将数据打包成区块（Block），每个区块包含很多东西，其中比较重要的有两个东西，一个是 Merkle Tree 用来存储交易数据；另外一个是前一区块的哈希值，通过前一区块的哈希值将所有区块连接成链（Chain），形成不可更改的时间戳记录。</p>
</li>
<li>
<p><strong>Merkle Tree</strong></p>
<p>Merkle 树通过哈希算法将所有交易数据映射到一棵二叉树的根节点，使得任意单笔交易的证明与验证都具有对数级效率，同时保证了数据完整性。</p>
</li>
</ol>
<hr>
<h3 id="_1-3-公链-vs-私链-vs-联盟链" tabindex="-1"><a class="header-anchor" href="#_1-3-公链-vs-私链-vs-联盟链"><span>1.3 公链 vs 私链 vs 联盟链</span></a></h3>
<p>区块链根据访问权限与治理模式，大致可分为三类。按照去中心化程度从高到低排列。</p>
<p><img src="@source/images/区块链基础概念 1e2bbd63be87805d975cc9108fe8cf15/区块链基础概念_-_visual_selection.png" alt="区块链基础概念 - visual selection.png"></p>
<h4 id="公链-public-blockchain" tabindex="-1"><a class="header-anchor" href="#公链-public-blockchain"><span>公链（Public Blockchain）</span></a></h4>
<ul>
<li><strong>开放与无许可</strong>：任何人都可以加入网络、读取数据并参与共识验证，代表项目如 Bitcoin 和 Ethereum。</li>
<li><strong>高安全、低性能</strong>：由于节点众多且采用去中心化共识，公链具有较强的抗审查性与安全性，但吞吐量和交易确认速度相对较低。</li>
</ul>
<h4 id="联盟链-consortium-blockchain" tabindex="-1"><a class="header-anchor" href="#联盟链-consortium-blockchain"><span>联盟链（Consortium Blockchain）</span></a></h4>
<ul>
<li><strong>多方联合治理</strong>：由一组预选机构或组织共同维护，既非完全开放，也非单一控制。</li>
<li><strong>兼顾安全与效率</strong>：通过多方共识提高信任度，同时由于参与方相对有限，性能介于公链与私链之间，适用于产业协作、供应链管理等场景。</li>
</ul>
<h4 id="私链-private-blockchain" tabindex="-1"><a class="header-anchor" href="#私链-private-blockchain"><span>私链（Private Blockchain）</span></a></h4>
<ul>
<li><strong>权限受限</strong>：仅限经授权的节点加入和读取，通常部署在企业内部或联盟内。</li>
<li><strong>高性能、可控性强</strong>：共识节点数量受限，可采用轻量共识算法，交易确认速度快，适合对隐私和效率要求高的场景。</li>
</ul>
<hr>
<h3 id="_1-4-web3-是什么-web3-vs-web-3-0-vs-web2" tabindex="-1"><a class="header-anchor" href="#_1-4-web3-是什么-web3-vs-web-3-0-vs-web2"><span>1.4 Web3 是什么？Web3 vs Web 3.0 vs Web2</span></a></h3>
<h4 id="什么是-web3" tabindex="-1"><a class="header-anchor" href="#什么是-web3"><span>什么是 Web3？</span></a></h4>
<p>Web3 是基于区块链、去中心化网络和加密经济学的下一代互联网愿景，旨在赋予用户对数据和身份的自主权，通过去中心化应用（dApps）和智能合约构建可信的数字生态。</p>
<h4 id="_1-4-2-web3-vs-web-3-0" tabindex="-1"><a class="header-anchor" href="#_1-4-2-web3-vs-web-3-0"><span>1.4.2 Web3 vs Web 3.0</span></a></h4>
<ul>
<li><strong>Web 3.0（语义网）</strong>：蒂姆·伯纳斯-李于 1999 年提出的 “语义网” 概念，主张通过结构化数据和本体论实现机器可理解的网络内容。</li>
<li><strong>Web3（区块链语境）</strong>：加文·伍德（Gavin Wood）在 2014 年首次使用该术语，特指以区块链为基础、去中心化自治为核心的互联网形态。</li>
</ul>
<p>两者常被混用，但语义和侧重点不同：Web 3.0 更多关注数据互通与智能化，而 Web3 则强调区块链去中心化与用户自主管理。</p>
<p><img src="@source/images/区块链基础概念 1e2bbd63be87805d975cc9108fe8cf15/_-_visual_selection.png" alt="_- visual selection.png"></p>
<h4 id="_1-4-3-web3-vs-web2" tabindex="-1"><a class="header-anchor" href="#_1-4-3-web3-vs-web2"><span>1.4.3 Web3 vs Web2</span></a></h4>
<table>
<thead>
<tr>
<th>特性</th>
<th>Web2</th>
<th>Web3</th>
</tr>
</thead>
<tbody>
<tr>
<td>架构</td>
<td>中心化（服务器 &amp; 平台）</td>
<td>去中心化（P2P 网络 &amp; 区块链）</td>
</tr>
<tr>
<td>数据控制</td>
<td>由平台或公司掌握</td>
<td>用户自主管理，通过私钥拥有所有权</td>
</tr>
<tr>
<td>经济模型</td>
<td>平台经济（广告、订阅、流量分成）</td>
<td>加密经济（代币激励、质押、自治组织）</td>
</tr>
<tr>
<td>身份与隐私</td>
<td>用户身份依赖平台</td>
<td>身份通过链上地址与加密身份验证</td>
</tr>
<tr>
<td>示例</td>
<td>社交媒体、电子商务、云服务</td>
<td>去中心化交易所（DEX）、去中心化自治组织（DAO）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_1-5-去中心化的优势与挑战" tabindex="-1"><a class="header-anchor" href="#_1-5-去中心化的优势与挑战"><span>1.5 去中心化的优势与挑战</span></a></h3>
<h4 id="_1-5-1-优势" tabindex="-1"><a class="header-anchor" href="#_1-5-1-优势"><span>1.5.1 优势</span></a></h4>
<ol>
<li>
<p><strong>信任最小化</strong></p>
<p>去中心化网络无需依赖中心化第三方，交易和数据由共识算法和加密证明保障，降低了 “信任成本”。</p>
</li>
<li>
<p><strong>抗审查与高弹性</strong></p>
<p>数据分布存储在多个节点，单点故障或审查攻击难以完全阻断网络，提升了系统的安全性和可用性。</p>
</li>
<li>
<p><strong>用户自主管理</strong></p>
<p>用户通过私钥掌控资产与数据，平台无法随意更改或冻结账户，赋予个人更高的隐私权和所有权。</p>
</li>
<li>
<p><strong>开放创新生态</strong></p>
<p>区块链与智能合约构建了去中心化应用（dApps）平台，任何开发者都可在此基础上创新并获得代币激励，促进了技术和商业模式的多样化。</p>
</li>
</ol>
<h4 id="_1-5-2-挑战" tabindex="-1"><a class="header-anchor" href="#_1-5-2-挑战"><span>1.5.2 挑战</span></a></h4>
<ol>
<li>
<p><strong>可扩展性瓶颈</strong></p>
<p>公链在节点众多时共识效率低下，吞吐量和延迟问题突出，目前各大项目正通过分片、Layer2 方案等技术进行优化。</p>
</li>
<li>
<p><strong>安全与治理难题</strong></p>
<p>区块链的不可篡改特性虽能保证数据安全，但代码漏洞或治理失衡（如 DAO 中投票权集中）也可能导致严重损失。</p>
</li>
<li>
<p><strong>用户体验与成本</strong></p>
<p>完全去中心化的系统往往对普通用户不够友好，如私钥管理复杂、交易手续费浮动大，需要在易用性与去中心化程度之间权衡。</p>
</li>
<li>
<p><strong>法律与合规风险</strong></p>
<p>去中心化和匿名特性与现行法规存在冲突，跨境监管和合规要求尚未完善，给项目方和用户带来不确定性。</p>
</li>
</ol>
<h2 id="二、以太坊概览" tabindex="-1"><a class="header-anchor" href="#二、以太坊概览"><span>二、以太坊概览</span></a></h2>
<blockquote>
<p>比特币可能已经众所周知，但是不知道大家有没有听说过以太坊？</p>
</blockquote>
<blockquote>
<p>比特币称为区块链 1.0，而以太坊（Ethereum）一般被业内人士称为“区块链 2.0”，它将加密货币的底层逻辑拓展至更广阔的数字化世界。</p>
</blockquote>
<blockquote>
<p>区块链技术从 2008 年比特币白皮书问世以来的“数字黄金”构想，逐步演化为以太坊所构想的重塑信任机制的全球性基础设施，将加密货币的底层逻辑拓展至更广阔的数字化世界。以太坊不仅承载着以太币（ETH）的价值流通功能，更通过智能合约的引入，为开发者构建去中心化金融（DeFi）、非同质化代币（NFT）、去中心化自治组织（DAO）等创新应用提供了“世界计算机”的底层架构。</p>
</blockquote>
<blockquote>
<p>从 2015 年主网上线至今，以太坊历经技术迭代与生态扩张，始终站在区块链技术演进的前沿。其从工作量证明（PoW）向权益证明（PoS）的范式迁移（即“The Merge”），标志着能源效率与可持续性的重大突破；而分片技术、Layer 2 扩展方案的推进，则不断挑战区块链“不可能三角”的边界。与此同时，以太坊所承载的不仅是代码与协议，更是一种根植于密码朋克精神的去中心化文化——它倡导开放协作、抗审查的金融自由，亦在重塑数字时代的生产关系与价值分配模式。</p>
</blockquote>
<blockquote>
<p>这次我们将以系统性视角，解析以太坊的核心理念、技术架构与生态演化，探讨其如何从一个开源项目成长为支撑全球数字经济的关键基础设施，并揭示其在 Web3 时代的技术潜力与社会意义。</p>
</blockquote>
<h3 id="_2-1-以太坊的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-以太坊的介绍"><span>2.1 以太坊的介绍</span></a></h3>
<p>以太坊（Ethereum）是一个开源的去中心化区块链平台，通过其原生加密货币以太币（Ether，简称 ETH）提供去中心化的以太虚拟机（EVM）来处理点对点合约。它由程序员维塔利克·布特林（Vitalik Buterin）于 2013-2014 年间提出，目标是构建“下一代加密货币与去中心化应用平台”。2014 年，以太坊通过首次代币发行（ICO）筹集资金并正式启动，成为继比特币之后最重要的区块链项目之一。</p>
<p>以太坊的核心创新在于 智能合约（Smart Contracts）。智能合约是存储在区块链上的可执行代码，能够在满足预设条件时自动执行操作，无需人工干预。这一特性使得以太坊不仅是数字货币的载体，更是构建去中心化应用（DApps）、去中心化金融（DeFi）、非同质化代币（NFT）等生态系统的基础设施。截至 2025 年，以太币（ETH）仍是全球市值排名第二的加密货币，仅次于比特币。</p>
<p>以太坊的定位是“区块链 2.0 ”的代表。如果说比特币是区块链 1.0 的象征（专注于货币属性），那么以太坊则通过智能合约和可编程性，推动区块链技术向更广泛的应用场景拓展。其目标是成为全球范围内的“世界计算机”，为开发者提供构建复杂应用的工具和环境。</p>
<hr>
<h3 id="_2-2-ethereum-与-bitcoin-的差异" tabindex="-1"><a class="header-anchor" href="#_2-2-ethereum-与-bitcoin-的差异"><span>2.2 Ethereum 与 Bitcoin 的差异</span></a></h3>
<p>尽管以太坊和比特币均基于区块链技术，但两者的设计目标、功能和技术路线存在显著差异：</p>
<table>
<thead>
<tr>
<th><strong>维度</strong></th>
<th><strong>比特币（Bitcoin）</strong></th>
<th><strong>以太坊（Ethereum）</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>目标与定位</strong></td>
<td>去中心化的数字货币，强调安全、稳定和稀缺性（总量 2100 万枚）。</td>
<td>去中心化平台，支持智能合约和 DApps，定位为“区块链 2.0”。</td>
</tr>
<tr>
<td><strong>编程能力</strong></td>
<td>脚本语言有限，仅支持简单的交易验证逻辑。</td>
<td>图灵完备的编程语言（如 Solidity），可开发复杂智能合约。</td>
</tr>
<tr>
<td><strong>共识机制</strong></td>
<td>工作量证明（PoW），矿工通过算力竞争记账权。</td>
<td>从 PoW 转向权益证明（PoS），通过 The Merge 实现能源效率优化。</td>
</tr>
<tr>
<td><strong>交易速度</strong></td>
<td>每 10 分钟生成一个区块，交易确认较慢。</td>
<td>区块时间约 13-15 秒，交易确认更快，适合高频应用。</td>
</tr>
<tr>
<td><strong>经济模型</strong></td>
<td>总量固定，强调抗通胀属性。</td>
<td>供应灵活，通过 EIP-1559 等机制可能呈现通缩趋势。</td>
</tr>
</tbody>
</table>
<p><img src="@source/images/以太坊概览 1e2bbd63be87807b8b5cceaa05db5eaa/以太坊概览.png" alt="以太坊概览.png"></p>
<p>以太坊的灵活性使其能够支持更多应用场景，例如 DeFi（借贷、交易）、NFT（数字艺术品）、DAO（去中心化自治组织）等，而比特币则更专注于作为“数字黄金”存储价值。</p>
<hr>
<h3 id="_2-3-以太坊的定位与演进" tabindex="-1"><a class="header-anchor" href="#_2-3-以太坊的定位与演进"><span>2.3 以太坊的定位与演进</span></a></h3>
<p>以太坊的发展历程可以分为几个关键阶段，其中最重要的事件是 从工作量证明（PoW）向权益证明（PoS）的转型，以及 The Merge（合并） 的完成。</p>
<h4 id="_2-3-1-以太坊-1-0-pow-阶段" tabindex="-1"><a class="header-anchor" href="#_2-3-1-以太坊-1-0-pow-阶段"><span>2.3.1 以太坊 1.0（PoW 阶段）</span></a></h4>
<p>以太坊最初采用 PoW 共识机制，矿工通过算力竞争区块奖励。然而，PoW 存在能耗高、扩展性差等问题。为解决这些问题，以太坊启动了多次升级（如 Homestead、Metropolis），逐步优化网络性能和安全性。</p>
<h4 id="_2-3-2-以太坊-2-0-与-the-merge" tabindex="-1"><a class="header-anchor" href="#_2-3-2-以太坊-2-0-与-the-merge"><span>2.3.2 以太坊 2.0 与 The Merge</span></a></h4>
<p>2022 年 9 月，以太坊完成了 The Merge，标志着主网从 PoW 成功过渡到 PoS。这一事件的核心目标是：</p>
<ul>
<li><strong>降低能耗</strong>：PoS 的能耗比 PoW 减少约 99.95%，使以太坊更环保。</li>
<li><strong>提升可扩展性</strong>：通过分片技术（Sharding）和 Layer 2（L2）解决方案（如 Rollup），提高交易处理能力。</li>
<li><strong>增强安全性</strong>：PoS 通过质押机制（32 ETH）激励验证者诚实参与网络维护。</li>
</ul>
<h4 id="_2-3-3-未来升级路线图" tabindex="-1"><a class="header-anchor" href="#_2-3-3-未来升级路线图"><span>2.3.3 未来升级路线图</span></a></h4>
<p>The Merge 之后，以太坊计划继续推进以下升级：</p>
<ul>
<li><strong>分片（Sharding）</strong>：通过分片技术将网络负载分散到多个分片链，提升吞吐量。</li>
<li><strong>EIP-4844（Cancun 升级）</strong>：引入“Blob 交易”，优化 L2 数据可用性，进一步降低 Gas 费用。</li>
<li><strong>ZK-Rollup 与 Validium</strong>：利用零知识证明技术提升隐私性和效率。</li>
</ul>
<p><img src="@source/images/以太坊概览 1e2bbd63be87807b8b5cceaa05db5eaa/图片1.png" alt="图片1.png"></p>
<hr>
<h3 id="_2-4-以太坊生态概览-l1、l2、sidechains-等" tabindex="-1"><a class="header-anchor" href="#_2-4-以太坊生态概览-l1、l2、sidechains-等"><span>2.4 以太坊生态概览：L1、L2、Sidechains 等</span></a></h3>
<p>以太坊的生态系统由多层架构组成，包括 L1（主网）、L2（二层扩展解决方案）、<strong>侧链（Sidechains）</strong> 等，共同支持高吞吐量和低费用的交易处理。</p>
<ol>
<li><strong>Layer 1（L1）</strong>
<ul>
<li><strong>以太坊主网</strong>：核心区块链，负责最终安全性与共识。</li>
<li><strong>EVM</strong>：以太坊虚拟机，执行智能合约代码。</li>
<li><strong>账户系统</strong>：外部账户（EOA）与合约账户（CA）共同构成网络基础。</li>
</ul>
</li>
<li><strong>Layer 2（L2）</strong>
<ul>
<li><strong>Rollup</strong>：通过将交易批量处理后提交至 L1，降低 Gas 费。
<ul>
<li><strong>Optimistic Rollup</strong>：假设交易合法，仅在争议时验证。</li>
<li><strong>ZK Rollup</strong>：通过零知识证明验证交易，无需链上争议。</li>
</ul>
</li>
</ul>
</li>
<li><strong>侧链（Sidechains）</strong>：独立运行的链，通过桥接与主网交互。</li>
</ol>
<hr>
<h3 id="_2-5-以太坊文化-核心价值观、密码朋克" tabindex="-1"><a class="header-anchor" href="#_2-5-以太坊文化-核心价值观、密码朋克"><span>2.5 以太坊文化（核心价值观、密码朋克）</span></a></h3>
<p>以太坊的文化深受 密码朋克运动（Cypherpunk） 影响，强调 去中心化、自由、开放和协作。其核心价值观包括：</p>
<ol>
<li>
<p><strong>无权限与无审查</strong></p>
<p>任何人都可以参与以太坊网络，无需获得许可。智能合约代码公开透明，不可篡改，杜绝了中心化机构的审查风险。</p>
</li>
<li>
<p><strong>全球协作与开源精神</strong></p>
<p>以太坊由全球开发者社区共同维护，其代码库完全开源。这种协作模式推动了技术创新和生态繁荣。</p>
</li>
<li>
<p><strong>抗审查与抗通胀</strong></p>
<p>以太坊支持去中心化金融（DeFi），为用户提供了不受传统银行体系限制的金融服务。此外，通过通缩机制（如 EIP-1559），以太坊试图对抗通胀。</p>
</li>
<li>
<p><strong>密码朋克理念</strong></p>
<p>密码朋克主张通过加密技术和分布式网络实现个人隐私和自由。以太坊的智能合约和去中心化特性完美契合这一理念，成为密码朋克思想的实践载体。</p>
</li>
</ol>
<hr>
<h3 id="_2-6-关键组件介绍-以太坊虚拟机-evm、账户系统、gas-模型" tabindex="-1"><a class="header-anchor" href="#_2-6-关键组件介绍-以太坊虚拟机-evm、账户系统、gas-模型"><span>2.6 关键组件介绍（以太坊虚拟机 EVM、账户系统、Gas 模型）</span></a></h3>
<p>以太坊的运行依赖于几个核心组件：</p>
<ol>
<li><strong>以太坊虚拟机（EVM）</strong>
<ul>
<li><strong>功能</strong>：EVM 是运行智能合约的“虚拟计算机”，它通过沙盒环境执行代码，确保安全性。</li>
<li><strong>特点</strong>：图灵完备（可执行任意计算逻辑）、兼容性高（支持多种编程语言）、分布式执行（所有节点同步状态）。</li>
</ul>
</li>
<li><strong>账户系统</strong>
<ul>
<li><strong>外部账户（EOA）</strong>：用户通过私钥控制账户，发起交易。</li>
<li><strong>合约账户（CA）</strong>：智能合约账户由代码逻辑驱动，无法主动发起交易，但可响应外部调用。</li>
</ul>
</li>
<li><strong>Gas 模型</strong>
<ul>
<li><strong>Gas 费计算</strong>：Gas 费用 = Gas Limit × Gas Price。Gas Limit 是用户愿意为交易支付的最大 Gas 量，Gas Price 是单位 Gas 的价格（以 Gwei 计价）。</li>
<li><strong>作用</strong>：Gas 费激励矿工/验证者优先处理交易，并防止网络资源滥用（如无限循环攻击）。</li>
</ul>
</li>
</ol>
<h2 id="三、行业知识模块" tabindex="-1"><a class="header-anchor" href="#三、行业知识模块"><span>三、行业知识模块</span></a></h2>
<ul>
<li>DeFi：Uniswap、Compound 、MakerDAO在 DeFi 中的案例</li>
<li>NFT：CryptoPunks、OpenSea 在 NFT 领域的案例</li>
<li>DAO：LXDAO 、NounsDAO 等在 DAO 领域的案例</li>
<li>MEME：MEME 文化介绍、风险介绍</li>
<li>延伸阅读（推荐该领域的优秀文章、报告）</li>
</ul>
<h2 id="四、web3-基础工作习惯" tabindex="-1"><a class="header-anchor" href="#四、web3-基础工作习惯"><span>四、Web3 基础工作习惯</span></a></h2>
<blockquote>
<p>远程办公是 Web3 世界的生存法则**，**去中心化组织的基因决定了远程协作的必然性。典型 Web3 团队可能由美国的技术极客、新加坡的合规专家、东欧的智能合约开发者组成，这种地理分布要求成员必须具备远程协作能力。全球顶尖的 Web3 加速器如 Seed Club，其核心团队分布在 12 个时区，却通过异步沟通工具完成每周千万美元级项目的孵化。所以提前掌握一些基础的 Web3 工作习惯、方式会帮助你更好的适应这个行业。</p>
</blockquote>
<h3 id="_4-1-行业黑话" tabindex="-1"><a class="header-anchor" href="#_4-1-行业黑话"><span>4.1 行业黑话</span></a></h3>
<p><img src="@source/images/blockchainWork/image.png" alt="image.png"></p>
<h4 id="_4-1-1-基础类" tabindex="-1"><a class="header-anchor" href="#_4-1-1-基础类"><span>4.1.1 基础类</span></a></h4>
<table>
<thead>
<tr>
<th>黑话</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DYOR</strong></td>
<td>Do Your Own Research，投资前请自行研究，项目方常用于免责</td>
</tr>
<tr>
<td><strong>FOMO</strong></td>
<td>Fear of Missing Out，害怕错过，指因贪婪而追高的情绪</td>
</tr>
<tr>
<td><strong>FUD</strong></td>
<td>Fear, Uncertainty, Doubt，恐慌、不确定、怀疑，指唱衰情绪或舆论攻击</td>
</tr>
<tr>
<td><strong>WAGMI</strong></td>
<td>We’re All Gonna Make It，大家都会发财，社区常用打气口号</td>
</tr>
<tr>
<td><strong>NGMI</strong></td>
<td>Not Gonna Make It，讽刺某人/项目做法不行</td>
</tr>
<tr>
<td><strong>REKT</strong></td>
<td>被“爆锤”，损失惨重，如投资失败、合约被黑等</td>
</tr>
<tr>
<td><strong>Airdrop</strong></td>
<td>空投，免费发放代币以激励用户参与项目</td>
</tr>
<tr>
<td><strong>Whale</strong></td>
<td>加密大户，能影响市场价格的人</td>
</tr>
<tr>
<td><strong>Degen</strong></td>
<td>“投机狗”，不问项目质量只冲高风险高回报机会的人</td>
</tr>
<tr>
<td><strong>Shill</strong></td>
<td>宣传、推销（常含贬义），如“shill 项目”指恶意安利</td>
</tr>
<tr>
<td><strong>Exit Scam</strong></td>
<td>项目方跑路，携款失联</td>
</tr>
</tbody>
</table>
<h4 id="_4-1-2-技术类" tabindex="-1"><a class="header-anchor" href="#_4-1-2-技术类"><span>4.1.2 技术类</span></a></h4>
<table>
<thead>
<tr>
<th>黑话</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>L1 / L2</strong></td>
<td>Layer 1（主链，如以太坊）和 Layer 2（扩容方案，如 Arbitrum、zkSync）</td>
</tr>
<tr>
<td><strong>EVM</strong></td>
<td>Ethereum Virtual Machine，以太坊虚拟机，运行智能合约的核心</td>
</tr>
<tr>
<td><strong>Smart Contract</strong></td>
<td>智能合约，自动执行合约逻辑的链上程序</td>
</tr>
<tr>
<td><strong>Bridge</strong></td>
<td>跨链桥，用于在多条链之间转移资产</td>
</tr>
<tr>
<td><strong>Oracle</strong></td>
<td>预言机，用于向链上提供链下数据</td>
</tr>
<tr>
<td><strong>Fork</strong></td>
<td>分叉，指复制已有代码的项目，或区块链协议分裂</td>
</tr>
<tr>
<td><strong>Mint</strong></td>
<td>铸造，生成新的 NFT 或代币</td>
</tr>
<tr>
<td><strong>Burn</strong></td>
<td>销毁代币，减少总量，用于通缩机制</td>
</tr>
<tr>
<td><strong>Rugpull</strong></td>
<td>地毯式骗局，项目方卷款跑路（尤其在 DeFi 项目）</td>
</tr>
</tbody>
</table>
<h4 id="_4-1-3-投资类" tabindex="-1"><a class="header-anchor" href="#_4-1-3-投资类"><span>4.1.3 投资类</span></a></h4>
<table>
<thead>
<tr>
<th>黑话</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Pump</strong></td>
<td>拉盘，代币价格快速上涨</td>
</tr>
<tr>
<td><strong>Dump</strong></td>
<td>砸盘，代币价格快速下跌</td>
</tr>
<tr>
<td><strong>HODL</strong></td>
<td>原为“Hold”打错，意为坚定持币不卖</td>
</tr>
<tr>
<td><strong>Bagholder</strong></td>
<td>“接盘侠”，高位买入亏损后长期持币的人</td>
</tr>
<tr>
<td><strong>Alpha</strong></td>
<td>内部消息/潜在机会，表示未公开但价值潜力大的信息</td>
</tr>
<tr>
<td><strong>Tokenomics</strong></td>
<td>代币经济学，研究代币发行、分配、用途等机制</td>
</tr>
</tbody>
</table>
<h4 id="_4-1-4-社区与文化类" tabindex="-1"><a class="header-anchor" href="#_4-1-4-社区与文化类"><span>4.1.4 社区与文化类</span></a></h4>
<table>
<thead>
<tr>
<th>黑话</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>gm / gn</strong></td>
<td>good morning / good night，Web3 社区日常打招呼方式</td>
</tr>
<tr>
<td><strong>Anon</strong></td>
<td>匿名者，社区中不透露真实身份的成员</td>
</tr>
<tr>
<td><strong>KOL</strong></td>
<td>Key Opinion Leader，意见领袖，影响力人物</td>
</tr>
<tr>
<td><strong>CT</strong></td>
<td>Crypto Twitter，加密行业活跃的信息与讨论来源</td>
</tr>
<tr>
<td><strong>DAO</strong></td>
<td>去中心化自治组织，社区驱动型的组织管理形式</td>
</tr>
<tr>
<td><strong>NFT PFP</strong></td>
<td>NFT 头像项目，如 CryptoPunks、BAYC，PFP = Profile Picture</td>
</tr>
</tbody>
</table>
<h4 id="_4-1-5-开发类" tabindex="-1"><a class="header-anchor" href="#_4-1-5-开发类"><span>4.1.5 开发类</span></a></h4>
<table>
<thead>
<tr>
<th>黑话</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hardhat / Foundry</strong></td>
<td>常用的智能合约开发框架</td>
</tr>
<tr>
<td><strong>RPC</strong></td>
<td>Remote Procedure Call，链上节点访问接口</td>
</tr>
<tr>
<td><strong>Gas</strong></td>
<td>交易费用，以太坊中以 Gwei 计费</td>
</tr>
<tr>
<td><strong>Etherscan</strong></td>
<td>区块浏览器，用于查看合约、交易、地址信息</td>
</tr>
<tr>
<td><strong>Viem / Ethers.js / Wagmi</strong></td>
<td>Web3 前端交互库</td>
</tr>
<tr>
<td><strong>ABI</strong></td>
<td>Application Binary Interface，合约调用所需的接口信息</td>
</tr>
<tr>
<td><strong>Mainnet / Testnet</strong></td>
<td>主网 / 测试网，分别对应正式和测试环境</td>
</tr>
</tbody>
</table>
<p>更多行业黑话请查看附录</p>
<hr>
<h3 id="_4-2-web3-常用工具及远程办公软件" tabindex="-1"><a class="header-anchor" href="#_4-2-web3-常用工具及远程办公软件"><span>4.2 <strong>Web3 常用工具及远程办公软件</strong></span></a></h3>
<p><img src="@source/images/blockchainWork/image 1.png" alt="image.png"></p>
<h4 id="_4-2-1-twitter" tabindex="-1"><a class="header-anchor" href="#_4-2-1-twitter"><span>4.2.1 Twitter</span></a></h4>
<h5 id="工具介绍" tabindex="-1"><a class="header-anchor" href="#工具介绍"><span>工具介绍</span></a></h5>
<p>Twitter（现名 X）是一家美国的社交媒体平台和微型博客服务，它允许用户发布并互动「推文」（短文本、图片或视频）。Twitter 是世界上访问量最高的社交网站之一，区块链和 Web3 相关项目常利用 Twitter 发布最新动态和公告，因此成为生态交流的重要渠道。</p>
<h5 id="安装注册指南" tabindex="-1"><a class="header-anchor" href="#安装注册指南"><span>安装注册指南</span></a></h5>
<ul>
<li>Windows (网页版)
<ul>
<li>在浏览器中打开 Twitter 官网：<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">https://twitter.com</a>。</li>
<li>点击页面上的「注册」或「Sign up」按钮开始新用户注册。</li>
<li>填写姓名和电子邮件（或手机号）及出生日期，然后按提示点击「下一步」。</li>
<li>Twitter 会向所填邮箱 / 手机号发送验证码，输入验证码后点击「下一步」。</li>
<li>设置账户密码并完成注册。如果提示通过手机号验证，可稍后在账号设置中添加手机号。</li>
</ul>
</li>
<li>Mac (网页版)
<ul>
<li>Mac 用户通过 Safari 或 Chrome 打开 <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">twitter.com</a> 进行注册，流程与 Windows 相同，可参照上述步骤完成。</li>
<li>Twitter 官网也提供官方桌面应用（Windows 商店或 Mac App Store），下载安装后使用同一账户登录，可获得类似网页版的使用体验。</li>
</ul>
</li>
</ul>
<h4 id="_4-2-2-telegram" tabindex="-1"><a class="header-anchor" href="#_4-2-2-telegram"><span>4.2.2 Telegram</span></a></h4>
<h5 id="工具介绍-1" tabindex="-1"><a class="header-anchor" href="#工具介绍-1"><span>工具介绍</span></a></h5>
<p>Telegram 是一款<strong>跨平台</strong>的即时通讯应用。它支持在手机、电脑等设备上运行，用户可通过互联网发送<strong>加密</strong>消息、图片、语音和视频等各种类型的文件。Telegram 提供个人聊天、频道（群发消息）和群组功能，因其安全性高、传输速度快而受到开发者和区块链社区的欢迎。</p>
<h5 id="安装注册指南-以-mac-系统为例" tabindex="-1"><a class="header-anchor" href="#安装注册指南-以-mac-系统为例"><span>安装注册指南（以 Mac 系统为例）</span></a></h5>
<ul>
<li>在浏览器中访问 <a href="https://desktop.telegram.org" target="_blank" rel="noopener noreferrer">https://desktop.telegram.org</a>。</li>
<li>点击「Get Telegram for macOS」下载适用于 macOS 的安装包。</li>
<li>打开下载的 <code v-pre>.dmg</code> 文件，将 Telegram 拖入「应用程序」文件夹中进行安装。</li>
<li>安装完成后打开 Telegram 应用，使用手机号登录并按照界面提示输入验证码完成注册。具体操作指南可查看：<a href="https://kerrynotes.com/telegram-tutorial/#google_vignette" target="_blank" rel="noopener noreferrer">https://kerrynotes.com/telegram-tutorial/#google_vignett</a></li>
</ul>
<p><img src="@source/images/blockchainWork/image 2.png" alt="image.png"></p>
<h4 id="_4-2-3-discord" tabindex="-1"><a class="header-anchor" href="#_4-2-3-discord"><span>4.2.3 Discord</span></a></h4>
<h5 id="工具介绍-2" tabindex="-1"><a class="header-anchor" href="#工具介绍-2"><span>工具介绍</span></a></h5>
<p>Discord 是一款面向社群的免费实时聊天和语音通信平台。用户可以创建或加入「服务器」（类似社区频道）来进行文本、语音和视频聊天。Discord 最初为游戏玩家设计，但现已广泛用于各种在线社群和项目讨论；其丰富的频道管理和权限系统适合团队协作。用户可以在不同频道中分享图片、文件，也可以进行语音通话或视频会议。</p>
<h5 id="安装注册指南-1" tabindex="-1"><a class="header-anchor" href="#安装注册指南-1"><span>安装注册指南</span></a></h5>
<ul>
<li>Windows
<ul>
<li>打开浏览器，访问 Discord 官网下载页面：<a href="https://discord.com/" target="_blank" rel="noopener noreferrer">https://discord.com</a>。</li>
<li>点击页面上的「Download for Windows」按钮下载安装程序。</li>
<li>运行下载好的安装程序（DiscordSetup.exe），按提示完成安装。</li>
<li>安装完成后打开 Discord，创建新账户或使用已有邮箱/手机号登录。</li>
</ul>
</li>
<li>Mac
<ul>
<li>在浏览器打开 <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">https://discord.com</a>。</li>
<li>点击「Download for Mac」按钮下载<code v-pre>.dmg</code>安装包。</li>
<li>打开下载的 <code v-pre>.dmg</code> 文件，将 Discord 图标拖到「应用程序」文件夹中完成安装。</li>
<li>安装完成后启动 Discord 客户端，注册或登录你的账号。</li>
</ul>
</li>
</ul>
<h4 id="_4-2-4-metamask" tabindex="-1"><a class="header-anchor" href="#_4-2-4-metamask"><span>4.2.4 MetaMask</span></a></h4>
<h5 id="工具介绍-3" tabindex="-1"><a class="header-anchor" href="#工具介绍-3"><span>工具介绍</span></a></h5>
<p>MetaMask（小狐狸钱包）是一款常用的加密货币钱包浏览器扩展，使用户能够在浏览器中安全地访问以太坊等区块链网络中的去中心化应用。安装MetaMask后，你可以在浏览器工具栏中看到其图标，用于管理数字资产和身份。</p>
<p><strong>注意安全</strong>：务必通过官网或浏览器插件商店安装MetaMask，不要从第三方渠道下载，避免安装到恶意伪装的克隆版。</p>
<h5 id="安装注册指南-2" tabindex="-1"><a class="header-anchor" href="#安装注册指南-2"><span>安装注册指南</span></a></h5>
<ul>
<li>详细安装指南 <a href="https://blog.csdn.net/m0_73094011/article/details/135854126" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_73094011/article/details/135854126</a></li>
<li>macOS 用户安装流程与 Windows 类似：打开 Chrome 浏览器，同样通过 MetaMask 官网下载安装扩展。</li>
<li>安装完成后登录 MetaMask 账号，或按提示创建并备份新的助记词钱包（与 Windows 流程相同）。</li>
<li>如果使用 Safari 浏览器，请注意 MetaMask 暂无 Safari 版本，需使用支持的 Chromium 内核浏览器。</li>
</ul>
<p><img src="@source/images/blockchainWork/image 3.png" alt="image.png"></p>
<h4 id="_4-2-5-linkedin" tabindex="-1"><a class="header-anchor" href="#_4-2-5-linkedin"><span>4.2.5 Linkedin</span></a></h4>
<h5 id="工具介绍-4" tabindex="-1"><a class="header-anchor" href="#工具介绍-4"><span>工具介绍</span></a></h5>
<p>LinkedIn（领英）是全球领先的职业社交平台，专注于帮助用户建立职业身份、拓展行业人脉、获取求职机会以及分享专业知识。通过 LinkedIn，用户可创建个人职业档案，连接企业、同事和行业伙伴，并访问海量职位招聘信息与行业动态。</p>
<h5 id="安装注册指南-3" tabindex="-1"><a class="header-anchor" href="#安装注册指南-3"><span>安装注册指南</span></a></h5>
<ul>
<li><a href="http://xhslink.com/a/tfKL51gogLlcb%EF%BC%8C%E5%A4%8D%E5%88%B6%E6%9C%AC%E6%9D%A1%E4%BF%A1%E6%81%AF%EF%BC%8C%E6%89%93%E5%BC%80%E3%80%90%E5%B0%8F%E7%BA%A2%E4%B9%A6%E3%80%91App%E6%9F%A5%E7%9C%8B%E7%B2%BE%E5%BD%A9%E5%86%85%E5%AE%B9%EF%BC%81" target="_blank" rel="noopener noreferrer">http://xhslink.com/a/tfKL51gogLlcb，复制本条信息，打开【小红书】App查看精彩内容！</a></li>
</ul>
<p><img src="@source/images/blockchainWork/image 4.png" alt="image.png"></p>
<h4 id="_4-2-6-notion" tabindex="-1"><a class="header-anchor" href="#_4-2-6-notion"><span>4.2.6 Notion</span></a></h4>
<h5 id="工具介绍-5" tabindex="-1"><a class="header-anchor" href="#工具介绍-5"><span>工具介绍</span></a></h5>
<p>Notion 是一款功能强大的在线协作平台，将笔记、文档、数据库和任务管理整合在一个工作区中。你可以在 Notion 中创建页面，用于记录项目计划、知识库、团队 Wiki 等内容，并通过多种内容模块（如文本、图片、表格）自由排版。Notion 支持多人实时协作，共享与评论功能便于团队交流与知识积累。</p>
<h5 id="安装注册指南-以-mac-系统为例-1" tabindex="-1"><a class="header-anchor" href="#安装注册指南-以-mac-系统为例-1"><span>安装注册指南（以 Mac 系统为例）</span></a></h5>
<p><img src="@source/images/blockchainWork/image 5.png" alt="image.png"></p>
<ul>
<li>在浏览器中访问 <a href="https://www.notion.com/desktop" target="_blank" rel="noopener noreferrer">https://www.notion.com/desktop</a>。
<ul>
<li>点击「Download for macOS」下载Mac版安装包。</li>
<li>下载后，打开 <code v-pre>.dmg</code> 文件并将 Notion 应用拖动到「应用程序」文件夹中完成安装。</li>
<li>具体安装细节请参考：<a href="http://xhslink.com/a/T0PXHI5iBEkcb%EF%BC%8C%E5%A4%8D%E5%88%B6%E6%9C%AC%E6%9D%A1%E4%BF%A1%E6%81%AF%EF%BC%8C%E6%89%93%E5%BC%80%E3%80%90%E5%B0%8F%E7%BA%A2%E4%B9%A6%E3%80%91App%E6%9F%A5%E7%9C%8B%E7%B2%BE%E5%BD%A9%E5%86%85%E5%AE%B9%EF%BC%81" target="_blank" rel="noopener noreferrer">http://xhslink.com/a/T0PXHI5iBEkcb，复制本条信息，打开【小红书】App查看精彩内容！</a></li>
<li>具体的工具指南请阅读：<a href="https://www.notion.com/zh-cn/help/guides" target="_blank" rel="noopener noreferrer">https://www.notion.com/zh-cn/help/guides</a></li>
</ul>
</li>
</ul>
<p><img src="@source/images/blockchainWork/image 6.png" alt="image.png"></p>
<h4 id="_4-2-7-zoom" tabindex="-1"><a class="header-anchor" href="#_4-2-7-zoom"><span>4.2.7 Zoom</span></a></h4>
<h5 id="工具介绍-6" tabindex="-1"><a class="header-anchor" href="#工具介绍-6"><span>工具介绍</span></a></h5>
<p><strong>Zoom</strong> 是一款广泛使用的在线视频会议软件，类似于国内的腾讯会议，支持视频会议、语音通话、屏幕共享、聊天、录制等功能。它适用于远程办公、在线教育、团队会议等多种场景。由于其使用便捷、画面清晰、功能丰富，Zoom 被广泛应用于全球企业和组织中。</p>
<h5 id="安装注册指南-4" tabindex="-1"><a class="header-anchor" href="#安装注册指南-4"><span>安装注册指南</span></a></h5>
<ul>
<li>具体安装细节请参考：h<a href="https://zoom.us/zh-cn/download" target="_blank" rel="noopener noreferrer">ttps://zoom.us/zh-cn/download</a></li>
<li>安装完成后，打开 Zoom 客户端：如果已有 Zoom 账号，可点击“登录”输入邮箱和密码；也可使用 <strong>Google、Apple、Facebook 或企业邮箱（SSO）</strong> 登录。</li>
</ul>
<p><img src="@source/images/blockchainWork/image 7.png" alt="image.png"></p>
<h4 id="_4-2-8-calendly" tabindex="-1"><a class="header-anchor" href="#_4-2-8-calendly"><span>4.2.8 Calendly</span></a></h4>
<h5 id="工具介绍-7" tabindex="-1"><a class="header-anchor" href="#工具介绍-7"><span>工具介绍</span></a></h5>
<p>Calendly 是一款智能日程调度工具，通过自动化预约流程消除邮件往返，让用户轻松共享个人可用时间并同步管理多平台日历，适用于跨团队协调会议、对外交流（如合作方、客户）、面试安排等场景，能够满足 Web3 远程工作的一些需求。</p>
<h5 id="calendly-操作指南" tabindex="-1"><a class="header-anchor" href="#calendly-操作指南"><span>Calendly 操作指南</span></a></h5>
<ul>
<li>
<p>访问<a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">官网：https://calendly.com/</a>，用邮箱或 Google/Microsoft 账号注册（公司用户建议使用公共邮箱）。</p>
</li>
<li>
<p>验证邮箱后进入仪表盘，系统会引导完成基础配置。</p>
</li>
<li>
<p>设置你的可预约时间段（如：工作日 9:00–17:00）</p>
<p><img src="@source/images/blockchainWork/image 8.png" alt="image.png"></p>
</li>
<li>
<p>可选择会议类型：如 15 / 30 分钟通话、产品演示、一对一会议、组群会议等</p>
<p><img src="@source/images/blockchainWork/image 9.png" alt="image.png"></p>
</li>
<li>
<p>自动生成预约链接，可分享给对方</p>
<p><img src="@source/images/blockchainWork/image 10.png" alt="image.png"></p>
</li>
</ul>
<h5 id="calendly-使用建议" tabindex="-1"><a class="header-anchor" href="#calendly-使用建议"><span>Calendly 使用建议</span></a></h5>
<ul>
<li>
<p>预约前自动检查冲突，避免双重预订</p>
</li>
<li>
<p>支持时区自动转换，对方看到的是自己的本地时间</p>
</li>
<li>
<p>可集成 Zoom / Google Meet 自动生成会议链接</p>
<p><img src="@source/images/blockchainWork/image 11.png" alt="image.png"></p>
</li>
</ul>
<h4 id="_4-2-9-figma" tabindex="-1"><a class="header-anchor" href="#_4-2-9-figma"><span>4.2.9 Figma</span></a></h4>
<h5 id="工具介绍-8" tabindex="-1"><a class="header-anchor" href="#工具介绍-8"><span>工具介绍</span></a></h5>
<p>Figma 是一款基于浏览器的矢量设计工具，支持UI/UX设计、原型制作与团队实时协作。支持实时协作，可多人同时编辑同一文件，设计稿自动保存云端。同时附带 AI 增强功能，支持通过自然语言生成交互原型（Figma Make），自动生成响应式代码。</p>
<h5 id="使用指南" tabindex="-1"><a class="header-anchor" href="#使用指南"><span>使用指南</span></a></h5>
<ul>
<li>Figma 全指南：<a href="https://zhuanlan.zhihu.com/p/266781187" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/266781187</a></li>
<li>官方下载：<a href="https://www.figma.com/downloads/" target="_blank" rel="noopener noreferrer">https://www.figma.com/downloads/</a></li>
</ul>
<p><img src="@source/images/blockchainWork/image 12.png" alt="image.png"></p>
<h4 id="_4-2-10-github" tabindex="-1"><a class="header-anchor" href="#_4-2-10-github"><span>4.2.10 GitHub</span></a></h4>
<h5 id="工具介绍-9" tabindex="-1"><a class="header-anchor" href="#工具介绍-9"><span>工具介绍</span></a></h5>
<p>GitHub 是一种基于云的平台，可在其中存储、共享并与他人一起编写代码。通过将代码存储在 GitHub 上的“存储库”中，你可以：“展示或共享”你的工作；持续“跟踪和管理”对代码的更改；让其他人“审查”你的代码，并提出改进建议；在共享的项目中开展“协作”，无需担心这些更改会在准备好集成更改之前影响协作者的工作。协作式工作是 GitHub 最基本的功能之一，该功能由开源软件 Git 实现，而 GitHub 是以该软件为基础进行构建的。</p>
<h5 id="安装注册指南-5" tabindex="-1"><a class="header-anchor" href="#安装注册指南-5"><span>安装注册指南</span></a></h5>
<ul>
<li>GitHub 安装超详细介绍：<a href="https://blog.csdn.net/black_sneak/article/details/139600633" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/black_sneak/article/details/139600633</a></li>
</ul>
<p><img src="@source/images/blockchainWork/image 13.png" alt="image.png"></p>
<hr>
<h3 id="_4-3-远程协作习惯" tabindex="-1"><a class="header-anchor" href="#_4-3-远程协作习惯"><span>4.3 远程协作习惯</span></a></h3>
<h4 id="_4-3-1-okr-写法与最佳实践" tabindex="-1"><a class="header-anchor" href="#_4-3-1-okr-写法与最佳实践"><span>4.3.1 <strong>OKR 写法与最佳实践</strong></span></a></h4>
<p>在远程工作中使用 OKR（目标与关键结果）不仅是一种管理工具，更是解决分布式团队核心痛点的系统性方案。</p>
<p>远程团队因缺乏物理接触易陷入目标碎片化。OKR 要求目标（Objectives）全团队公开可见，关键结果（Key Results）量化可追踪，例如字节跳动 5 万员工通过 OKR 系统实时查看公司级目标到个人 KR 的完整链路，避免远程协作中“各自为战”。并且在远程办公中常引发管理者“失控焦虑”，而 OKR 聚焦结果产出而非工作时长。例如携程远程团队设定 KR “客户满意度达 92% ”而非“ 每日在线 8 小时”，员工可自主安排工作节奏，效率反提升 40%。</p>
<h5 id="目标设定原则" tabindex="-1"><a class="header-anchor" href="#目标设定原则"><span>目标设定原则</span></a></h5>
<ul>
<li><strong>聚焦关键目标</strong>：每季度设定 3-5 个目标，避免分散精力。</li>
<li><strong>野心与可行平衡</strong>：目标应“令人不适但可达”，理想完成率在 60%-70%（Google 标准）。</li>
<li><strong>结果导向</strong>：聚焦成果而非产出（例：<em>“提升客户留存率”</em> 而非 <em>“发送 10 份调研”</em>）。</li>
</ul>
<h5 id="关键结果-kr-设计" tabindex="-1"><a class="header-anchor" href="#关键结果-kr-设计"><span>关键结果（KR）设计</span></a></h5>
<ul>
<li>
<p><strong>递进式量化</strong>：避免二进制（完成/未完成），采用里程碑式量化：</p>
<blockquote>
<p>目标：提升产品国际化能力</p>
<p>KR1：完成 3 个语言版本开发（40%）</p>
<p>KR2：用户测试通过率 ≥90%（70%）</p>
<p>KR3：新市场用户增长 25%（100%）</p>
</blockquote>
</li>
<li>
<p><strong>SMART 标准</strong>：确保 KR 可衡量、有时限（例：<em>“Q3 北美市场营收增长 15%”</em>）。</p>
</li>
</ul>
<h5 id="评分与复盘" tabindex="-1"><a class="header-anchor" href="#评分与复盘"><span>评分与复盘</span></a></h5>
<ul>
<li><strong>评分规则</strong>：5 分（卓越贡献）→ 1 分（完成度 ＜ 50%）；</li>
<li><strong>复盘要点</strong>：分析低分 KR 原因（目标过高/资源不足），高分则反思挑战性是否不足。</li>
</ul>
<p><em>表：OKR 评分标准参考</em></p>
<table>
<thead>
<tr>
<th><strong>得分</strong></th>
<th><strong>完成度</strong></th>
<th><strong>意义</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1.0</td>
<td>100%+</td>
<td>目标过于简单</td>
</tr>
<tr>
<td>0.7</td>
<td>70%</td>
<td>理想挑战水平</td>
</tr>
<tr>
<td>0.3</td>
<td>30%</td>
<td>需重新规划策略</td>
</tr>
</tbody>
</table>
<h4 id="_4-3-2-远程会议注意事项" tabindex="-1"><a class="header-anchor" href="#_4-3-2-远程会议注意事项"><span>4.3.2 远程会议注意事项</span></a></h4>
<h5 id="如何预约远程会议" tabindex="-1"><a class="header-anchor" href="#如何预约远程会议"><span>如何预约远程会议</span></a></h5>
<ol>
<li>明确目标
<ul>
<li>会议目的：明确会议议题、期望输出（如：决策、同步信息、头脑风暴等）</li>
<li>参与人：邀请关键决策者或信息相关人，避免冗余参会
<ul>
<li>明确回复的截止时间，允许参与者按生物钟高效工作（如：24 小时内回复）。</li>
</ul>
</li>
<li>预计时长：根据议程合理控制会议时长（15/30/60 分钟）</li>
</ul>
</li>
<li>使用日历工具（Google Calendar / Outlook Calendar）
<ul>
<li>创建事件：
<ul>
<li>标题应简洁明了（如：Weekly Sync、产品评审会）</li>
<li>添加会议描述（议程、会议链接、预阅读材料）</li>
<li>设置提醒（提前 10~30 分钟）</li>
</ul>
</li>
<li>添加参与者邮箱：自动发送会议邀请与提醒</li>
<li>注意时区设定：确认所有与会者的时区正确识别</li>
<li>嵌入视频会议链接（如 Google Meet、Zoom）</li>
</ul>
</li>
<li>推荐时间的技巧
<ul>
<li>避开：中午用餐时间、当地清晨或深夜</li>
<li>尽量安排在团队 &quot;工作核心时段&quot;（Overlapping Hours）</li>
<li>使用“建议时间”功能：Google Calendar 会自动匹配参会人的可用时间</li>
</ul>
</li>
</ol>
<p><img src="@source/images/blockchainWork/5fe37c29-52e6-427d-9b47-61f5e0f5505a.png" alt="🧠 常见 Web3 行业黑话大全（附解释） - visual selection.png"></p>
<h5 id="会议中的注意事项" tabindex="-1"><a class="header-anchor" href="#会议中的注意事项"><span>会议中的注意事项</span></a></h5>
<ol>
<li>沟通禁忌
<ul>
<li>❌ 发送模糊需求（如“请尽快处理”）；</li>
<li>✅ 改为：“需在 <strong>6 月 10 日 18:00 UTC+8 前</strong>提交方案，参考<strong>附件 A 数据模板</strong>”</li>
</ul>
</li>
<li>决策痕迹留存
<ul>
<li>准备会议纪要，关键结论标红加粗</li>
<li>✅ 决策事项 + 行动项明确 <strong>DRI</strong>（直接责任人）+ <strong>Deadline</strong>（精确到时区）</li>
</ul>
</li>
</ol>
<h4 id="_4-3-3-职场软技能" tabindex="-1"><a class="header-anchor" href="#_4-3-3-职场软技能"><span>4.3.3 职场软技能</span></a></h4>
<h5 id="排版的知识" tabindex="-1"><a class="header-anchor" href="#排版的知识"><span>排版的知识</span></a></h5>
<ol>
<li><strong>字体选择</strong>
<ul>
<li><strong>数量控制</strong>：全文不超过 3 种字体（标题+正文+强调），否则显乱。</li>
<li><strong>场景匹配</strong>：
<ul>
<li>正式报告 → 黑体/宋体</li>
<li>轻松文案 → 微软雅黑/思源柔黑</li>
</ul>
</li>
<li><strong>字号标准</strong>：正文 10.5-12 磅，标题放大 1.5 倍（如正文 12 磅，标题用 18 磅）。</li>
</ul>
</li>
<li><strong>间距是呼吸感的关键</strong>
<ul>
<li><strong>行间距</strong>：1.5 倍行距（12 磅字用 18 磅行距），避免文字窒息。</li>
<li><strong>段落间距</strong>：段前段后空 0.5 行（约 6-8 磅），用按<code v-pre>Enter</code>空一行太粗暴。</li>
<li><strong>页边距</strong>：默认 2.54 厘米，图文多时缩至 1.5 厘米。</li>
</ul>
</li>
<li><strong>标点与空格（细节控必备）</strong>
<ul>
<li>中英文混排时加空格：
✅ “在 LeanCloud 上创建 AVObject”
❌ “在LeanCloud上创建AVObject”。</li>
<li>全角中文标点：用“”代替&quot;&quot;，用。代替.。</li>
<li>数字用半角：写“500元”而非“５００元”。</li>
<li>详细排版规则请参考：<a href="https://github.com/sparanoid/chinese-copywriting-guidelines" target="_blank" rel="noopener noreferrer">https://github.com/sparanoid/chinese-copywriting-guidelines</a></li>
</ul>
</li>
</ol>
<hr>
<h5 id="效率翻倍工具技巧" tabindex="-1"><a class="header-anchor" href="#效率翻倍工具技巧"><span>效率翻倍工具技巧</span></a></h5>
<ol>
<li><strong>AI 工具：</strong>
<ul>
<li>**DeepSeek：**https://www.deepseek.com/</li>
<li><strong>ChatGPT：</strong><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">https://chatgpt.com/</a></li>
<li><strong>豆包：</strong><a href="https://www.doubao.com/chat/" target="_blank" rel="noopener noreferrer">https://www.doubao.com/chat/</a></li>
</ul>
</li>
<li><strong>媒体工具：</strong>
<ul>
<li>
<p><strong>Iconfont 阿里巴巴矢量图标库：</strong><a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">https://www.iconfont.cn/</a></p>
<ul>
<li>包含海量图标、矢量插画、动态特性、可变字体等，是职场汇报的好帮手。</li>
</ul>
</li>
<li>
<p><strong>SmartArt 一键图表化</strong></p>
<ul>
<li>在 Word / PPT 中选中文字 → 插入「智能图形」 → 自动生成流程图 / 组织架构图。</li>
</ul>
<p><img src="@source/images/blockchainWork/image 14.png" alt="image.png"></p>
</li>
<li>
<p><strong>秀米：</strong><a href="https://xiumi.us/#/" target="_blank" rel="noopener noreferrer">https://xiumi.us/#/</a></p>
<ul>
<li>图文排版、H5制作、图片设计，原创模板素材，精选风格排版，独一无二的排版方式，设计出只属于你的图文，打动你的人群。</li>
</ul>
</li>
<li>
<p><strong>MD2Card：</strong><a href="https://md2card.com/zh" target="_blank" rel="noopener noreferrer">https://md2card.com/zh</a></p>
<ul>
<li>MD2Card 是一个简单易用的 Markdown 转知识卡片工具，支持多种精美风格，帮助你快速创建漂亮的知识卡片。无论是学习笔记、知识整理还是内容分享，都能轻松搞定。</li>
</ul>
</li>
</ul>
</li>
<li><strong>Web3 常用工具</strong>
<ul>
<li>CoinMarketCap 全球最值得信赖的加密货币数据、洞见和社区来源：<a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">https://coinmarketcap.com/</a></li>
<li>CoinGecko 是世界上最大的独立加密货币数据聚合器：<a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">https://www.coingecko.com/</a></li>
<li>DefiLlama 是 DeFi（去中心化金融）领域最大的 TVL 聚合器：<a href="https://defillama.com/" target="_blank" rel="noopener noreferrer">https://defillama.com/</a></li>
<li>RootData 是一个 Web3 资产数据平台：<a href="https://www.rootdata.com/zh/Projects?influenceSort=2" target="_blank" rel="noopener noreferrer">https://www.rootdata.com/zh/Projects?influenceSort=2</a></li>
<li>媒体：
<ul>
<li>律动 BlockBeats：<a href="http://theblockbeats.info/" target="_blank" rel="noopener noreferrer">http://theblockbeats.info/</a></li>
<li>深潮 TechFlow：<a href="https://www.techflowpost.com/" target="_blank" rel="noopener noreferrer">https://www.techflowpost.com/</a></li>
<li>PANews：<a href="https://www.panewslab.com/zh" target="_blank" rel="noopener noreferrer">https://www.panewslab.com/zh</a></li>
</ul>
</li>
<li>免费发推抽奖工具：<a href="https://apidance.pro/twitter_giveaway" target="_blank" rel="noopener noreferrer">https://apidance.pro/twitter_giveaway</a></li>
<li>查看链上持仓：<a href="https://pummmm.com/" target="_blank" rel="noopener noreferrer">https://pummmm.com</a></li>
<li>查看持币地址、筹码分布：<a href="https://bubblemaps.io/" target="_blank" rel="noopener noreferrer">https://bubblemaps.io/</a></li>
<li>即将启动的加密项目 IDO、IEO、ICO 列表：<a href="https://www.coincarp.com/zh/upcoming-ido/" target="_blank" rel="noopener noreferrer">https://www.coincarp.com/zh/upcoming-ido/</a></li>
</ul>
</li>
</ol>
<h5 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h5>
<ol>
<li><strong>承诺管理法</strong>
<ul>
<li>
<p><strong>接任务时立即确认 3 要素</strong>：</p>
<blockquote>
<p>“明白！周三下班前提交方案初稿（交付物），优先采用 X 框架（方向），如需调整请周四 10 点前反馈（反馈节点）。”</p>
</blockquote>
</li>
<li>
<p><strong>超预期交付技巧</strong>：</p>
<blockquote>
<p>交报告时附加“执行要点清单”，比如：“此方案落地需重点监控 3 个环节：① 预算红线 ② 法务风险点 ③ 技术依赖项”。</p>
</blockquote>
</li>
</ul>
</li>
<li><strong>万能汇报结构</strong></li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">【项目 xxx 进度】</span>
<span class="line">✅ 已完成：A 模块上线（比计划提前 1 天）</span>
<span class="line">🚧 进行中：B 测试（完成 70%，明天下班前交付）</span>
<span class="line">⚠️ 卡点：C 接口权限未获批（已联系 @李四，最晚周四答复）</span>
<span class="line">🔜 下一步：周四同步测试报告（初稿已发附件）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>埋点式复盘</strong></li>
</ol>
<ul>
<li>建立<strong>个人 SOP 库</strong>（如：用 Notion 存“活动策划检查清单”），尽量详细记录每一个步骤</li>
<li>对工作留痕</li>
<li>交接文件包：含操作指南 / 联系方式 / 踩坑记录</li>
</ul>
<ol start="4">
<li><strong>沟通案例</strong></li>
</ol>
<ul>
<li>
<p>需求沟通模板</p>
<p>当同事说：“这个功能尽快做出来！”</p>
<p>❌ 回答：“现在排期满了” → 制造对立</p>
<p>✅ 结构化回应：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">🔹 理解需求：您需要解决X问题，对么？（确认真实诉求）</span>
<span class="line">🔹 给选项：</span>
<span class="line">    Option A：简化版周五交付（缺Y功能）</span>
<span class="line">    Option B：完整版下周三交付</span>
<span class="line">🔹 建议：如果急用推荐A，我能协调资源加急</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>冲突化解话术</strong></p>
<p><strong>当被甩锅时</strong>：</p>
<p>❌ “这明明是你的责任！”</p>
<p>✅ “从流程看我这部分周三已完成（附邮件截图），目前卡在QA环节，咱们一起找测试负责人碰下？”</p>
<p>→ <strong>要点</strong>：用事实代替情绪，拉对方成“战友”而非对手</p>
</li>
<li>
<p><strong>向上沟通技巧</strong></p>
<ul>
<li>
<p><strong>接收模糊任务时</strong>：</p>
<blockquote>
<p>“您希望优先保证速度还是质量？如果有参考案例更好~”</p>
</blockquote>
</li>
<li>
<p><strong>领导意见矛盾时</strong>：</p>
<blockquote>
<p>“上次您提到重点控成本，这次营销预算超标是否意味着策略调整？求确认方向~”</p>
</blockquote>
</li>
</ul>
</li>
</ul>
</div></template>


