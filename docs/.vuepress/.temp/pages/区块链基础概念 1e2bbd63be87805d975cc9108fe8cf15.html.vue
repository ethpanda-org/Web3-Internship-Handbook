<template><div><h1 id="区块链基础概念" tabindex="-1"><a class="header-anchor" href="#区块链基础概念"><span>区块链基础概念</span></a></h1>
<p>完成进度: 100
日期: April 29, 2025 → May 3, 2025
状态: 一审中
编写人员: 汤圆
选择: 第一部分：入门导读</p>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>在本章，我们首先介绍区块链的基本概念，包括其定义、典型结构，接着阐述公链、私链与联盟链三种主要类型；然后解析一下 Web3 的内涵，并对比了 Web3、Web 3.0 与传统 Web2 的差异；最后探讨去中心化带来的主要优势与面临的挑战。</p>
<hr>
<h1 id="区块链是什么" tabindex="-1"><a class="header-anchor" href="#区块链是什么"><span>区块链是什么？</span></a></h1>
<p>区块链是一种去中心化的分布式账本技术，用于在网络节点之间安全、透明且不可篡改地记录事务数据。每条链由一系列按照时间顺序相连的 “区块” 组成，每个区块内部包含了多笔交易数据及元数据，确保了数据记录的完整性与可追溯性。</p>
<p>这是 wiki 上面非常严谨的定义，看不懂没关系，接下来我们会详细解释其中的每一个概念。</p>
<h2 id="区块链的典型结构" tabindex="-1"><a class="header-anchor" href="#区块链的典型结构"><span>区块链的典型结构</span></a></h2>
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
<h2 id="公链-vs-私链-vs-联盟链" tabindex="-1"><a class="header-anchor" href="#公链-vs-私链-vs-联盟链"><span>公链 vs 私链 vs 联盟链</span></a></h2>
<p>区块链根据访问权限与治理模式，大致可分为三类。按照去中心化程度从高到低排列。</p>
<p><img src="@source/区块链基础概念 1e2bbd63be87805d975cc9108fe8cf15/区块链基础概念_-_visual_selection.png" alt="区块链基础概念 - visual selection.png"></p>
<h3 id="公链-public-blockchain" tabindex="-1"><a class="header-anchor" href="#公链-public-blockchain"><span>公链（Public Blockchain）</span></a></h3>
<ul>
<li><strong>开放与无许可</strong>：任何人都可以加入网络、读取数据并参与共识验证，代表项目如 Bitcoin 和 Ethereum。</li>
<li><strong>高安全、低性能</strong>：由于节点众多且采用去中心化共识，公链具有较强的抗审查性与安全性，但吞吐量和交易确认速度相对较低。</li>
</ul>
<h3 id="联盟链-consortium-blockchain" tabindex="-1"><a class="header-anchor" href="#联盟链-consortium-blockchain"><span>联盟链（Consortium Blockchain）</span></a></h3>
<ul>
<li><strong>多方联合治理</strong>：由一组预选机构或组织共同维护，既非完全开放，也非单一控制。</li>
<li><strong>兼顾安全与效率</strong>：通过多方共识提高信任度，同时由于参与方相对有限，性能介于公链与私链之间，适用于产业协作、供应链管理等场景。</li>
</ul>
<h3 id="私链-private-blockchain" tabindex="-1"><a class="header-anchor" href="#私链-private-blockchain"><span>私链（Private Blockchain）</span></a></h3>
<ul>
<li><strong>权限受限</strong>：仅限经授权的节点加入和读取，通常部署在企业内部或联盟内。</li>
<li><strong>高性能、可控性强</strong>：共识节点数量受限，可采用轻量共识算法，交易确认速度快，适合对隐私和效率要求高的场景。</li>
</ul>
<hr>
<h1 id="web3-是什么-web3-vs-web-3-0-vs-web2" tabindex="-1"><a class="header-anchor" href="#web3-是什么-web3-vs-web-3-0-vs-web2"><span>Web3 是什么？Web3 vs Web 3.0 vs Web2</span></a></h1>
<h2 id="什么是-web3" tabindex="-1"><a class="header-anchor" href="#什么是-web3"><span>什么是 Web3？</span></a></h2>
<p>Web3 是基于区块链、去中心化网络和加密经济学的下一代互联网愿景，旨在赋予用户对数据和身份的自主权，通过去中心化应用（dApps）和智能合约构建可信的数字生态。</p>
<h2 id="web3-vs-web-3-0" tabindex="-1"><a class="header-anchor" href="#web3-vs-web-3-0"><span>Web3 vs Web 3.0</span></a></h2>
<ul>
<li><strong>Web 3.0（语义网）</strong>：蒂姆·伯纳斯-李于 1999 年提出的 “语义网” 概念，主张通过结构化数据和本体论实现机器可理解的网络内容。</li>
<li><strong>Web3（区块链语境）</strong>：加文·伍德（Gavin Wood）在 2014 年首次使用该术语，特指以区块链为基础、去中心化自治为核心的互联网形态。</li>
</ul>
<p>两者常被混用，但语义和侧重点不同：Web 3.0 更多关注数据互通与智能化，而 Web3 则强调区块链去中心化与用户自主管理。</p>
<p><img src="@source/区块链基础概念 1e2bbd63be87805d975cc9108fe8cf15/_-_visual_selection.png" alt="_- visual selection.png"></p>
<h2 id="web3-vs-web2" tabindex="-1"><a class="header-anchor" href="#web3-vs-web2"><span>Web3 vs Web2</span></a></h2>
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
<h1 id="去中心化的优势与挑战" tabindex="-1"><a class="header-anchor" href="#去中心化的优势与挑战"><span>去中心化的优势与挑战</span></a></h1>
<h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h2>
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
<h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h2>
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
</div></template>


