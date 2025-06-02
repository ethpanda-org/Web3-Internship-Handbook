<template><div><h1 id="以太坊概览" tabindex="-1"><a class="header-anchor" href="#以太坊概览"><span>以太坊概览</span></a></h1>
<p>完成进度: 100
日期: April 30, 2025
状态: 待审核
编写人员: 汤圆
选择: 第一部分：入门导读</p>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>
<p>比特币可能已经众所周知，但是不知道大家有没有听说过以太坊？</p>
<p>比特币称为区块链 1.0，而以太坊（Ethereum）一般被业内人士称为“区块链 2.0”，它将加密货币的底层逻辑拓展至更广阔的数字化世界。</p>
<p>区块链技术从 2008 年比特币白皮书问世以来的“数字黄金”构想，逐步演化为以太坊所构想的重塑信任机制的全球性基础设施，将加密货币的底层逻辑拓展至更广阔的数字化世界。以太坊不仅承载着以太币（ETH）的价值流通功能，更通过智能合约的引入，为开发者构建去中心化金融（DeFi）、非同质化代币（NFT）、去中心化自治组织（DAO）等创新应用提供了“世界计算机”的底层架构。</p>
<p>从 2015 年主网上线至今，以太坊历经技术迭代与生态扩张，始终站在区块链技术演进的前沿。其从工作量证明（PoW）向权益证明（PoS）的范式迁移（即“The Merge”），标志着能源效率与可持续性的重大突破；而分片技术、Layer 2 扩展方案的推进，则不断挑战区块链“不可能三角”的边界。与此同时，以太坊所承载的不仅是代码与协议，更是一种根植于密码朋克精神的去中心化文化——它倡导开放协作、抗审查的金融自由，亦在重塑数字时代的生产关系与价值分配模式。</p>
<p>这次我们将以系统性视角，解析以太坊的核心理念、技术架构与生态演化，探讨其如何从一个开源项目成长为支撑全球数字经济的关键基础设施，并揭示其在 Web3 时代的技术潜力与社会意义。</p>
<h1 id="正文" tabindex="-1"><a class="header-anchor" href="#正文"><span>正文</span></a></h1>
<h1 id="一-以太坊的介绍" tabindex="-1"><a class="header-anchor" href="#一-以太坊的介绍"><span><strong>一. 以太坊的介绍</strong></span></a></h1>
<p>以太坊（Ethereum）是一个开源的去中心化区块链平台，通过其原生加密货币以太币（Ether，简称 ETH）提供去中心化的以太虚拟机（EVM）来处理点对点合约。它由程序员维塔利克·布特林（Vitalik Buterin）于 2013-2014 年间提出，目标是构建“下一代加密货币与去中心化应用平台”。2014 年，以太坊通过首次代币发行（ICO）筹集资金并正式启动，成为继比特币之后最重要的区块链项目之一。</p>
<p>以太坊的核心创新在于 智能合约（Smart Contracts）。智能合约是存储在区块链上的可执行代码，能够在满足预设条件时自动执行操作，无需人工干预。这一特性使得以太坊不仅是数字货币的载体，更是构建去中心化应用（DApps）、去中心化金融（DeFi）、非同质化代币（NFT）等生态系统的基础设施。截至 2025 年，以太币（ETH）仍是全球市值排名第二的加密货币，仅次于比特币。</p>
<p>以太坊的定位是“区块链 2.0 ”的代表。如果说比特币是区块链 1.0 的象征（专注于货币属性），那么以太坊则通过智能合约和可编程性，推动区块链技术向更广泛的应用场景拓展。其目标是成为全球范围内的“世界计算机”，为开发者提供构建复杂应用的工具和环境。</p>
<h1 id="二、ethereum-与-bitcoin-的差异" tabindex="-1"><a class="header-anchor" href="#二、ethereum-与-bitcoin-的差异"><span><strong>二、Ethereum 与 Bitcoin 的差异</strong></span></a></h1>
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
<p><img src="@source/以太坊概览 1e2bbd63be87807b8b5cceaa05db5eaa/以太坊概览.png" alt="以太坊概览.png"></p>
<p>以太坊的灵活性使其能够支持更多应用场景，例如 DeFi（借贷、交易）、NFT（数字艺术品）、DAO（去中心化自治组织）等，而比特币则更专注于作为“数字黄金”存储价值。</p>
<h3 id="_3-以太坊的定位与演进-从-pow-到-pos-合并事件-the-merge" tabindex="-1"><a class="header-anchor" href="#_3-以太坊的定位与演进-从-pow-到-pos-合并事件-the-merge"><span><strong>3. 以太坊的定位与演进（从 PoW 到 PoS，合并事件 The Merge）</strong></span></a></h3>
<p>以太坊的发展历程可以分为几个关键阶段，其中最重要的事件是 从工作量证明（PoW）向权益证明（PoS）的转型，以及 The Merge（合并） 的完成。</p>
<ol>
<li>
<p><strong>以太坊 1.0（PoW 阶段）</strong></p>
<p>以太坊最初采用 PoW 共识机制，矿工通过算力竞争区块奖励。然而，PoW 存在能耗高、扩展性差等问题。为解决这些问题，以太坊启动了多次升级（如 Homestead、Metropolis），逐步优化网络性能和安全性。</p>
</li>
<li>
<p><strong>以太坊 2.0 与 The Merge</strong></p>
<p>2022 年 9 月，以太坊完成了 The Merge，标志着主网从 PoW 成功过渡到 PoS。这一事件的核心目标是：</p>
<ul>
<li><strong>降低能耗</strong>：PoS 的能耗比 PoW 减少约 99.95%，使以太坊更环保。</li>
<li><strong>提升可扩展性</strong>：通过分片技术（Sharding）和 Layer 2（L2）解决方案（如 Rollup），提高交易处理能力。</li>
<li><strong>增强安全性</strong>：PoS 通过质押机制（32 ETH）激励验证者诚实参与网络维护。</li>
</ul>
</li>
<li>
<p><strong>未来升级路线图</strong></p>
<p>The Merge 之后，以太坊计划继续推进以下升级：</p>
<ul>
<li><strong>分片（Sharding）</strong>：通过分片技术将网络负载分散到多个分片链，提升吞吐量。</li>
<li><strong>EIP-4844（Cancun 升级）</strong>：引入“Blob 交易”，优化 L2 数据可用性，进一步降低 Gas 费用。</li>
<li><strong>ZK-Rollup 与 Validium</strong>：利用零知识证明技术提升隐私性和效率。</li>
</ul>
</li>
</ol>
<p><img src="@source/以太坊概览 1e2bbd63be87807b8b5cceaa05db5eaa/图片1.png" alt="图片1.png"></p>
<hr>
<h3 id="_4-以太坊生态概览-l1、l2、sidechains等" tabindex="-1"><a class="header-anchor" href="#_4-以太坊生态概览-l1、l2、sidechains等"><span><strong>4. 以太坊生态概览：L1、L2、Sidechains等</strong></span></a></h3>
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
<h3 id="_5-以太坊文化-核心价值观、密码朋克" tabindex="-1"><a class="header-anchor" href="#_5-以太坊文化-核心价值观、密码朋克"><span><strong>5. 以太坊文化（核心价值观、密码朋克）</strong></span></a></h3>
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
<h3 id="_6-关键组件介绍-以太坊虚拟机-evm、账户系统、gas-模型" tabindex="-1"><a class="header-anchor" href="#_6-关键组件介绍-以太坊虚拟机-evm、账户系统、gas-模型"><span><strong>6. 关键组件介绍（以太坊虚拟机 EVM、账户系统、Gas 模型）</strong></span></a></h3>
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
</div></template>


