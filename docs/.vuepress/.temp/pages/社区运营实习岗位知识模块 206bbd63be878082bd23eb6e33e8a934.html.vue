<template><div><h1 id="社区运营实习岗位知识模块" tabindex="-1"><a class="header-anchor" href="#社区运营实习岗位知识模块"><span>社区运营实习岗位知识模块</span></a></h1>
<p>完成进度: 100
日期: June 3, 2025
状态: 进行中
编写人员: Luna
选择: 第二部分：Web3 行业知识</p>
<h1 id="一、什么是-web3" tabindex="-1"><a class="header-anchor" href="#一、什么是-web3"><span>一、什么是 Web3？</span></a></h1>
<h2 id="区块链基本原理" tabindex="-1"><a class="header-anchor" href="#区块链基本原理"><span>区块链基本原理</span></a></h2>
<p>区块链是一种<strong>去中心化</strong>的分布式账本技术，其核心原理是通过密码学、共识机制和分布式存储确保数据不可篡改、透明可追溯。</p>
<ol>
<li>
<p><strong>去中心化结构</strong></p>
<ul>
<li><strong>传统系统</strong>：依赖中心化机构（如银行、政府）验证和记录交易。</li>
<li><strong>区块链</strong>：数据存储在<strong>全网节点</strong>（参与者计算机）上，无需中介，通过共识机制实现信任。</li>
</ul>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/去中心化.jpg" alt="去中心化.jpg"></p>
</li>
<li>
<p><strong>区块链基本原理</strong></p>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/Screenshot_2025-04-16_at_14.22.53.png" alt="Screenshot 2025-04-16 at 14.22.53.png"></p>
<ul>
<li><strong>区块</strong>：存储交易数据的单元，包含：
<ul>
<li><strong>交易列表</strong>（如转账记录）。</li>
<li><strong>时间戳</strong>（区块生成时间）。</li>
<li><strong>哈希值</strong>（唯一数字指纹，由区块内容生成）。</li>
<li><strong>前一区块哈希</strong>（形成链式结构，确保历史数据不可篡改）。</li>
</ul>
</li>
<li><strong>链式链接</strong>：每个新区块指向前一区块，修改任一区块需改动后续所有区块，极难实现。</li>
</ul>
</li>
<li>
<p>透明可追溯、不可篡改</p>
<ul>
<li>从第一个创世纪块开始，就是收尾相连的，有任何信息的更改都会广播至所有人，因此是<strong>透明可追溯</strong>的；</li>
<li>如果有人想伪造一个区块进行数据篡改，根据最长链原则，以他个人之力无法抵抗其他人的算力，即没有办法把伪造的区块打造成最长链，也就是拥有了<strong>不可篡改</strong>的特性；</li>
</ul>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/Screenshot_2025-04-17_at_17.00.06.png" alt="Screenshot 2025-04-17 at 17.00.06.png"></p>
</li>
</ol>
<h2 id="以太坊的特点与目标、生态概览" tabindex="-1"><a class="header-anchor" href="#以太坊的特点与目标、生态概览"><span>以太坊的特点与目标、生态概览</span></a></h2>
<p>以太坊（<strong>Ethereum</strong>）是一个开源的<strong>区块链平台</strong>，不仅支持加密货币（<strong>ETH</strong>），还通过智能合约实现**去中心化应用（DApps）**的开发和运行</p>
<h3 id="以太坊的核心特点" tabindex="-1"><a class="header-anchor" href="#以太坊的核心特点"><span><strong>以太坊的核心特点</strong></span></a></h3>
<ol>
<li>
<p>智能合约（Smart Contract）</p>
<p>简单来讲，就是将平常的合约条款，以代码的形式数字化，并且放在区块链上自动执行，无需第三方介入。</p>
</li>
<li>
<p>以太坊虚拟机（Ethereum Virtual Machine, EVM）</p>
<p>是一个轻量级的虚拟机，为智能合约提供一个沙盒环境，在 EVM 中运行的代码是无法访问网络、文件系统和其他进程的，这样就可以规避智能合约的异常终止或者收到外部环境的影响；</p>
</li>
<li>
<p>去中心化应用（DApps）</p>
<p>是一种基于区块链技术的应用程序，其核心特点是去中心化，即不依赖单一的中心化服务器或机构运行，而是通过智能合约和分布式网络实现功能。开发者可基于以太坊协议自由构建应用，并通过智能合约实现业务逻辑。</p>
</li>
<li>
<p>通证标准（Ethereum Request for Comments，ERC 系列）</p>
<p>以太坊通证标准（ERC 系列）是以太坊平台上智能合约的技术规范，用于定义通证（Token）的发行、交互和管理规则。这些标准由以太坊社区提出并通过以太坊改进提案流程确定，确保通证之间的兼容性和互操作性。</p>
<ul>
<li><strong>ERC-20：同质化通证标准</strong>
<ul>
<li><strong>用途</strong>：最常用的通证标准，用于创建可互换的（同质化）通证，如加密货币、积分等。</li>
<li><strong>核心功能</strong>：
<ul>
<li>通证转账（<strong><code v-pre>transfer</code></strong>）</li>
<li>查询余额（<strong><code v-pre>balanceOf</code></strong>）</li>
<li>授权第三方使用通证（<strong><code v-pre>approve</code></strong> + <strong><code v-pre>transferFrom</code></strong>）</li>
</ul>
</li>
<li><strong>特点</strong>：简单易用，但缺乏高级功能（如批量转账）。</li>
<li><strong>示例</strong>：USDT、LINK、UNI 等多数代币。</li>
</ul>
</li>
<li><strong>ERC-721：非同质化通证（NFT）标准</strong>
<ul>
<li><strong>用途</strong>：创建独一无二的通证（NFT），如数字艺术品、游戏道具、域名等。</li>
<li><strong>核心功能</strong>：
<ul>
<li>每个通证有唯一 ID 和元数据（metadata）。</li>
<li>支持所有权查询和转移。</li>
</ul>
</li>
<li><strong>特点</strong>：不可分割、不可互换，适合稀缺性资产。</li>
<li><strong>示例</strong>：CryptoKitties、Bored Ape Yacht Club（BAYC）。</li>
</ul>
</li>
<li><strong>ERC-1155：多通证标准</strong>
<ul>
<li><strong>用途</strong>：单一合约可同时管理同质化和非同质化通证，适合游戏道具、批量交易等场景。</li>
<li><strong>核心功能</strong>：
<ul>
<li>支持批量转账（节省 Gas 费）。</li>
<li>可定义通证是否为同质化。</li>
</ul>
</li>
<li><strong>特点</strong>：高效灵活，降低了 NFT 的存储和交易成本。</li>
<li><strong>示例</strong>：Enjin 游戏平台、OpenSea 的部分 NFT。</li>
</ul>
</li>
</ul>
<p><strong>为什么需要ERC标准？</strong></p>
<ol>
<li><strong>互操作性</strong>：不同通证可在钱包、交易所和 DApp 中无缝使用。</li>
<li><strong>安全性</strong>：减少智能合约漏洞风险（如 ERC-20 的“缺少转账通知”问题）。</li>
<li><strong>创新支持</strong>：通过标准化推动 DeFi、NFT 等生态发展。</li>
</ol>
</li>
<li>
<p>共识机制升级（PoW → PoS）</p>
<p>通过“合并”（The Merge）过渡到 PoS，验证者质押ETH参与出块，能耗降低约 99%，并通过经济激励（质押惩罚）和随机验证者选择机制增强抗攻击能力。</p>
</li>
</ol>
<h3 id="以太坊的目标" tabindex="-1"><a class="header-anchor" href="#以太坊的目标"><span><strong>以太坊的目标</strong></span></a></h3>
<ol>
<li>
<p><strong>成为“世界计算机”</strong></p>
<p>旨在提供一个全球共享的去中心化计算平台，任何人都可以无需许可地访问和使用其资源。</p>
</li>
<li>
<p><strong>推动去中心化互联网（Web3）</strong></p>
<p>通过 DApps 替代传统中心化服务（如社交网络、云存储），实现用户对数据和资产的完全控制。</p>
</li>
<li>
<p><strong>促进金融包容性</strong></p>
<p>通过 DeFi 服务为无银行账户的人群提供金融服务，降低跨境支付和借贷的门槛。</p>
</li>
<li>
<p><strong>高可扩展性与可持续性</strong></p>
<p>通过分片（Sharding）、Layer 2 扩容方案（如Rollups）解决网络拥堵和高 Gas 费问题，同时 PoS 机制减少 99% 的能源消耗。</p>
</li>
<li>
<p><strong>开放与无需许可的创新</strong></p>
<p>允许开发者自由构建应用，无需经过中心化审核，推动区块链技术的快速迭代。</p>
</li>
</ol>
<h3 id="以太坊协议分层结构及代表性生态项目" tabindex="-1"><a class="header-anchor" href="#以太坊协议分层结构及代表性生态项目"><span>以太坊协议分层结构及代表性生态项目</span></a></h3>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/ChatGPT_Image_2025年6月2日_15_02_01.png" alt="ChatGPT Image 2025年6月2日 15_02_01.png"></p>
<ol>
<li><strong>共识层（Consensus Layer）</strong>
<ol>
<li><strong>功能</strong>：负责区块的生产与验证，确保网络的安全性和一致性。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>Pectra升级</strong>：引入了 EIP-7251，将验证者的最大质押上限从 32 ETH提高到 2048 ETH，简化了大型验证者的操作流程。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>共识客户端：Prysm、Lighthouse、Teku、Nimbus</li>
</ul>
</li>
</ol>
</li>
<li><strong>执行层（Execution Layer）</strong>
<ol>
<li><strong>功能</strong>：处理交易执行、智能合约运行和状态更新。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>EIP-7702</strong>：实现账户抽象，使用户可以使用 USDC、DAI 等稳定币支付 Gas 费，提升用户体验。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>执行客户端：Geth、Nethermind、Besu</li>
<li>开发工具：Ethers.js、Web3.js</li>
</ul>
</li>
</ol>
</li>
<li><strong>数据可用性层（Data Availability Layer）</strong>
<ol>
<li><strong>功能</strong>：确保交易数据对所有节点可用，是扩容方案的基础。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>EIP-4844</strong>：引入 Proto-Danksharding，通过 Blob 交易提高数据可用性。</li>
<li><strong>PeerDAS（EIP-7594）</strong>：实现数据可用性采样，优化 Rollup 的数据处理能力。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>数据可用性解决方案：EigenDA、Celestia、Avail</li>
</ul>
</li>
</ol>
</li>
<li><strong>扩容层（Scalability Layer / L2 Layer）</strong>
<ol>
<li><strong>功能</strong>：通过Layer 2解决方案提高交易吞吐量，降低Gas费用。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>Unichain</strong>：由Uniswap推出的Layer 2解决方案，专注于DeFi应用。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>Optimistic Rollup：Optimism、Base、Zora</li>
<li>ZK Rollup：zkSync Era、Starknet、Scroll、Linea</li>
<li>Validium：StarkEx</li>
<li>跨链桥：Hop Protocol、Orbiter Finance、Across Protocol</li>
</ul>
</li>
</ol>
</li>
<li><strong>协议层（Protocol Layer）</strong>
<ol>
<li><strong>功能</strong>：构建在以太坊上的各类协议，包括 DeFi、NFT、预言机等。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>RWA（Real World Assets）</strong>：实物资产上链成为热点，推动 DeFi 与现实世界的融合。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>DeFi 协议：Aave、Compound、Uniswap、Curve、Balancer</li>
<li>预言机：Chainlink、Pyth</li>
<li>RWA 平台：Centrifuge、Maple Finance</li>
</ul>
</li>
</ol>
</li>
<li><strong>中间件与抽象层（Middleware / Abstraction Layer）</strong>
<ol>
<li><strong>功能</strong>：为开发者和用户提供更友好的接口和功能封装。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>账户抽象（Account Abstraction）</strong>：通过 EIP-7702 实现，简化用户操作流程。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>账户抽象服务商：Biconomy、ZeroDev</li>
<li>自动化服务：Gelato Network</li>
<li>安全模块：OpenZeppelin Defender、Safe（原 Gnosis Safe）</li>
</ul>
</li>
</ol>
</li>
<li><strong>应用层（Application Layer）</strong>
<ol>
<li><strong>功能</strong>：面向终端用户的应用，包括钱包、社交平台、DAO等。</li>
<li><strong>关键更新</strong>：
<ul>
<li><strong>社交协议</strong>：Farcaster 和 Lens Protocol 推动去中心化社交的发展。</li>
</ul>
</li>
<li><strong>代表项目</strong>：
<ul>
<li>钱包：MetaMask、Rabby、Safe、Soul Wallet</li>
<li>社交平台：Farcaster、Lens Protocol</li>
<li>DAO 工具：Snapshot、Tally、Charmverse、Dework</li>
</ul>
</li>
</ol>
</li>
</ol>
<h2 id="智能合约的运行逻辑、账户、交易调用与-gas-机制" tabindex="-1"><a class="header-anchor" href="#智能合约的运行逻辑、账户、交易调用与-gas-机制"><span>智能合约的运行逻辑、账户、交易调用与 Gas 机制</span></a></h2>
<h3 id="钱包账户" tabindex="-1"><a class="header-anchor" href="#钱包账户"><span>钱包账户</span></a></h3>
<p><strong>钱包账户（Wallet Account）</strong> 是区块链系统中用于<strong>管理加密资产和身份验证</strong>的核心工具，它不同于传统银行账户，而是基于密码学技术构建的去中心化账户体系。</p>
<ol>
<li>
<p><strong>钱包账户的本质</strong></p>
<ul>
<li><strong>非托管性</strong>：用户完全掌控私钥（资产所有权），无需依赖银行或第三方机构。</li>
<li><strong>密码学基础</strong>：基于<strong>非对称加密</strong>（公钥+私钥对）和区块链地址生成。</li>
<li><strong>功能核心</strong>：
<ul>
<li><strong>接收资产</strong>：通过公开的区块链地址（类似账号）。</li>
<li><strong>发送交易</strong>：通过私钥签名授权转账或合约交互。</li>
<li><strong>身份标识</strong>：在DeFi、GameFi等场景中作为链上身份凭证。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>核心组成部分：私钥、公钥、地址之间的关系</strong></p>
<p>用户注册时，会产生一个随机数，由这个随机数会依次生成私钥、公钥、地址。（注意：箭头为单向。）</p>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/Screenshot_2025-04-17_at_16.51.54.png" alt="Screenshot 2025-04-17 at 16.51.54.png"></p>
<p>助记词（Mnemonic Phrase）：12/24个英文单词（如 <strong><code v-pre>apple boat cat...</code></strong>），是私钥的人类可读备份形式，按BIP-39标准生成。</p>
<p><img src="@source/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934/Screenshot_2025-04-22_at_22.57.09.png" alt="Screenshot 2025-04-22 at 22.57.09.png"></p>
</li>
<li>
<p>以太坊账户可分为外部账户和合约账户：</p>
<ul>
<li>外部账户：可以理解为讲我们平常使用的账户放在以太坊上，我们可以发起交易、转账等，我们可以在外部账户查询以太币的余额；</li>
<li>合约账户：也可以查询以太币的余额，它会被交易或者其他智能合约触发，然后开始运行；</li>
</ul>
</li>
<li>
<p>交易调用</p>
<ul>
<li>交易：指由签名信息的数据包，是一个账户传递到另一个账户的信息，它改变了以太坊网络上的状态，例如改变了一个账户的余额；（改变状态需要消耗 Gas）</li>
<li>调用：指<strong>获取</strong>以太坊网络上的状态，但不对状态产生改变;（不需要消耗 Gas）</li>
</ul>
</li>
<li>
<p>Gas 机制</p>
<p>是区块链（尤其是以太坊等智能合约平台）中的核心设计，用于衡量计算资源消耗、防止网络滥用并激励矿工/验证者。</p>
<ol>
<li><strong>定义</strong>：Gas 是区块链上执行操作（如转账、运行智能合约）所需的<strong>计算工作量单位</strong>，类似于汽车的“燃油”。</li>
<li><strong>作用</strong>：
<ul>
<li>为每笔交易/合约执行明码标价（复杂操作消耗更多 Gas）。</li>
<li>通过 Gas 费用（Gas Fee）支付给矿工/验证者作为奖励。</li>
<li>防止无限循环或垃圾交易阻塞网络（资源耗尽则停止执行）。</li>
</ul>
</li>
<li><strong>Gas 的核心组成</strong>
<ul>
<li>
<p>总 Gas 计算公式：Gas Fee = Gas Used*Gas Price</p>
<ul>
<li>Gas Used：实际需要消耗多少 Gas</li>
<li>Gas Price：用户愿意为<strong>每个 Gas 单位</strong>支付的费用（以区块链原生代币计价，如 ETH、BNB），单位通常为 <strong>Gwei</strong>（1 Gwei = 0.000000001 ETH）。</li>
</ul>
</li>
<li>
<p><strong>Gas Limit（Gas 上限）</strong></p>
<p>用户为交易设置的<strong>最大 Gas 消耗量</strong>（预估操作所需资源）。</p>
<ul>
<li>若实际消耗 ≤ Gas Limit：交易成功，剩余 Gas 退回。</li>
<li>若实际消耗 &gt; Gas Limit：交易失败，已消耗的 Gas 不退回。</li>
</ul>
</li>
</ul>
</li>
<li><strong>为什么需要 Gas 机制？</strong>
<ul>
<li><strong>资源定价</strong>：区块链的存储、计算和带宽有限，Gas 将资源消耗量化。</li>
<li><strong>防止滥用</strong>：高成本阻止恶意用户发起无限循环或垃圾交易（如以太坊的 <strong><code v-pre>INFINITE LOOP</code></strong> 会因 Gas 耗尽而停止）。</li>
<li><strong>激励矿工</strong>：Gas 费用是矿工打包交易的主要收益来源（尤其在 PoW 链中）。</li>
</ul>
</li>
<li>Gas 如何影响用户体验？
<ul>
<li><strong>交易速度</strong>：Gas Price 越高，矿工优先打包，交易确认越快（类似竞拍）。</li>
<li><strong>成本控制</strong>：用户可调整 Gas Price 和 Gas Limit 平衡速度与成本。
<ul>
<li><strong>低 Gas Price</strong>：省钱但可能长时间未被处理。</li>
<li><strong>高 Gas Price</strong>：快速确认但费用昂贵（如 NFT 抢购时）。</li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
</ol>
<h1 id="二、社区运营核心职责与常见工具-平台使用" tabindex="-1"><a class="header-anchor" href="#二、社区运营核心职责与常见工具-平台使用"><span>二、社区运营核心职责与常见工具/平台使用</span></a></h1>
<h2 id="社区运营核心职责" tabindex="-1"><a class="header-anchor" href="#社区运营核心职责"><span>社区运营核心职责</span></a></h2>
<ol>
<li><strong>日常内容与社群维护</strong>
<ul>
<li>定期更新社媒账号的内容与推文，维持活跃度；</li>
<li>管理社群秩序，答疑、禁言、打击垃圾内容，并设计、抛出话题引导用户参与讨论；</li>
</ul>
</li>
<li><strong>内容发布与互动引导</strong>
<ul>
<li>活动预热公告、AMA 宣传图、Twitter Space 等活动开播提醒，等等；</li>
<li>发布或者转发与品牌调性相关的内容，并在各渠道推送，引导大家查阅、讨论、转发；</li>
</ul>
</li>
<li><strong>活动策划与组织</strong>
<ul>
<li><strong>线上活动</strong>：Twitter Space、线上课程或内容分享、线上黑客松，等等；</li>
<li><strong>线下活动</strong>：Meetup、Workshop、黑客松，等等；</li>
<li>活动前：策划主题、邀约嘉宾、邀请合作伙伴支持、设计海报与推文；</li>
<li>活动中：主持引导、观众互动、记录要点；</li>
<li>活动后：整理内容、发推总结、投稿媒体或公众号；</li>
</ul>
</li>
<li><strong>对外合作与社区联动</strong>
<ul>
<li>与其他项目社区进行联动，如联合 AMA、线上/线下活动支持，等等；</li>
<li>与 KOL 保持沟通，争取转发、联名传播；</li>
<li>与媒体保持联系，对重要活动与内容进行快讯等其他方式的支持，扩大曝光；</li>
</ul>
</li>
</ol>
<h2 id="常见工具-平台使用" tabindex="-1"><a class="header-anchor" href="#常见工具-平台使用"><span>常见工具/平台使用</span></a></h2>
<p>Web3 的工作流与传统互联网有所不同，涉及<strong>链上数据、加密钱包、社群协作</strong>等多个维度，掌握基本工具是必备技能。</p>
<h3 id="社交媒体渠道" tabindex="-1"><a class="header-anchor" href="#社交媒体渠道"><span>社交媒体渠道</span></a></h3>
<p>Web3 的叙事传播和社交活动主要发生在下列平台：</p>
<table>
<thead>
<tr>
<th>渠道</th>
<th>用途</th>
<th>示例链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Twitter (X)</strong></td>
<td>项目更新、KOL扩散、活动传播主阵地</td>
<td><a href="https://x.com/ETHPanda_Org" target="_blank" rel="noopener noreferrer">https://x.com/ETHPanda_Org</a></td>
</tr>
<tr>
<td><strong>微信公众号</strong></td>
<td>中文市场的信息更新与活动推广</td>
<td><a href="https://mp.weixin.qq.com/s/en8CeulLNRiWDVc8A94R1w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/en8CeulLNRiWDVc8A94R1w</a></td>
</tr>
<tr>
<td><strong>Medium/Substack</strong></td>
<td>长文、项目理念、开发进展发布</td>
<td>Medium:</td>
</tr>
<tr>
<td><a href="http://medium.com/" target="_blank" rel="noopener noreferrer">http://medium.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Substack: <a href="https://ethpanda.substack.com/" target="_blank" rel="noopener noreferrer">https://ethpanda.substack.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Mirror</strong></td>
<td>支持写作上链、发行 NFT 与众筹功能</td>
<td><a href="https://mirror.xyz/" target="_blank" rel="noopener noreferrer">https://mirror.xyz/</a></td>
</tr>
</tbody>
</table>
<h3 id="社群沟通平台" tabindex="-1"><a class="header-anchor" href="#社群沟通平台"><span>社群沟通平台</span></a></h3>
<p>社区建设和成员维护大多通过以下工具进行：</p>
<table>
<thead>
<tr>
<th>平台</th>
<th>用途</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Discord</strong></td>
<td>项目 Discord 是社区运营主阵地，分频道管理，支持 Bot 与权限管理</td>
<td><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">https://discord.com/</a></td>
</tr>
<tr>
<td><strong>Telegram</strong></td>
<td>更轻量的群聊工具，适合 AMA、用户支持</td>
<td><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">https://telegram.org/</a></td>
</tr>
<tr>
<td><strong>微信群</strong></td>
<td>中国用户常用渠道，适合组织活动和日常互动</td>
<td>/</td>
</tr>
</tbody>
</table>
<h3 id="内容创作工具" tabindex="-1"><a class="header-anchor" href="#内容创作工具"><span>内容创作工具</span></a></h3>
<p>社区运营人员常常需要快速生成内容、设计视觉、记录文档等，推荐以下工具：</p>
<table>
<thead>
<tr>
<th>工具</th>
<th>功能</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Notion / Notion AI</strong></td>
<td>文档整理、活动计划、项目管理</td>
<td><a href="https://www.notion.com/" target="_blank" rel="noopener noreferrer">https://www.notion.com/</a></td>
</tr>
<tr>
<td><strong>ChatGPT</strong></td>
<td>快速生成社交文案、翻译技术内容</td>
<td><a href="https://openai.com/index/chatgpt/" target="_blank" rel="noopener noreferrer">https://openai.com/index/chatgpt/</a></td>
</tr>
<tr>
<td><strong>Figma / Canva</strong></td>
<td>活动海报、推文视觉设计</td>
<td>Figma:</td>
</tr>
<tr>
<td><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">https://www.figma.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Canva:</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">https://www.canva.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Tally / Typeform</strong></td>
<td>调研问卷、活动报名表单制作</td>
<td>Tally:</td>
</tr>
<tr>
<td><a href="https://tally.so/" target="_blank" rel="noopener noreferrer">https://tally.so/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Typeform:</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.typeform.com/" target="_blank" rel="noopener noreferrer">https://www.typeform.com/</a></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="数据与行业调研工具" tabindex="-1"><a class="header-anchor" href="#数据与行业调研工具"><span>数据与行业调研工具</span></a></h3>
<p>Web3 世界的数据是开放的，以下工具是日常分析和监控项目的重要资源：</p>
<table>
<thead>
<tr>
<th>工具</th>
<th>用途</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Etherscan</strong></td>
<td>查看交易、合约、地址活动</td>
<td><a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">https://etherscan.io/</a></td>
</tr>
<tr>
<td><strong>Dune Analytics</strong></td>
<td>可视化仪表盘，SQL 查询链上数据</td>
<td><a href="https://dune.com/home" target="_blank" rel="noopener noreferrer">https://dune.com/home</a></td>
</tr>
<tr>
<td><strong>CoinGecko / CoinMarketCap</strong></td>
<td>币价监控与基本信息查询</td>
<td>CoinGecko:</td>
</tr>
<tr>
<td><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">https://www.coingecko.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>CoinMarketCap:</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">https://coinmarketcap.com/</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Token Terminal</strong></td>
<td>项目财务表现与用户增长分析</td>
<td><a href="https://tokenterminal.com/" target="_blank" rel="noopener noreferrer">https://tokenterminal.com/</a></td>
</tr>
</tbody>
</table>
<h1 id="三、常见任务案例模板" tabindex="-1"><a class="header-anchor" href="#三、常见任务案例模板"><span>三、常见任务案例模板</span></a></h1>
<h2 id="twitter-space-策划与执行" tabindex="-1"><a class="header-anchor" href="#twitter-space-策划与执行"><span>Twitter Space 策划与执行</span></a></h2>
<p><a href="https://www.notion.so/Twitter-Space-206bbd63be8780b6aef8d71698d5196d?pvs=21" target="_blank" rel="noopener noreferrer">Twitter Space 执行模版</a></p>
<h2 id="线上社区活动策划与执行" tabindex="-1"><a class="header-anchor" href="#线上社区活动策划与执行"><span>线上社区活动策划与执行</span></a></h2>
<p><a href="https://www.notion.so/206bbd63be8780548290dab0608652ab?pvs=21" target="_blank" rel="noopener noreferrer">线上活动执行模板</a></p>
<h2 id="线下活动策划与执行" tabindex="-1"><a class="header-anchor" href="#线下活动策划与执行"><span>线下活动策划与执行</span></a></h2>
<p><a href="https://www.notion.so/206bbd63be878053b634edc40e8aa0c8?pvs=21" target="_blank" rel="noopener noreferrer">线下活动执行模板</a></p>
</div></template>


