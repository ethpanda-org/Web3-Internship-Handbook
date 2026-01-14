---
title: 智能合约开发
createTime: '2025/06/12 00:30:37'
permalink: /zh/smart-contract-development/
---

> 本章将围绕 Web3 行业中的智能合约工程师所需的技能进行介绍，首先介绍去中心化应用（Dapp）的基本架构，重点分析其与传统应用的不同之处。接着，我们将详细讨论开发 Dapp 的流程，从需求分析、智能合约的编写、前端与后端的设计，到最终部署和上线，帮助读者理解整个开发生命周期。

## 一、Dapp 架构和开发流程

去中心化应用（Dapp）是与传统集中式应用不同的全新应用模式，通常运行在区块链或分布式网络上。与传统应用相比，Dapp 的核心特点在于去中心化，意味着应用的逻辑和数据不由单一实体控制，而是由多个参与者共同维护。因此，开发 Dapp 需要理解和掌握去中心化技术栈、智能合约编程以及前端与区块链的交互方式。

### 1. Dapp 架构

Dapp 的架构主要由三个核心部分组成：

==1. **前端（User Interface）**：==

- 前端是 DApp 与用户交互的界面，通常由 HTML、CSS 和 JavaScript（如 React、Vue 等框架）构建。与传统 Web 应用不同，DApp 前端不会直接连接区块链网络，而是通过 钱包注入的 Provider 或第三方 RPC 节点 与区块链交互：
    - 通过 RPC 节点对 智能合约发起只读调用（如 eth_call），获取合约状态、事件日志等链上数据
    - 对需要修改状态的操作，由前端构造对 智能合约的交易调用，交由钱包完成签名后，再通过 RPC 节点广播到区块链网络并最终上链执行
- 前端还需要集成区块链钱包（如 MetaMask）来进行身份验证和签署交易，确保用户的隐私和安全。

==2. **智能合约（Smart Contracts）**：==

- 智能合约是 Dapp 的核心，它定义了应用的业务逻辑，并部署在区块链上。智能合约通过执行自动化的规则来确保交易和操作的透明性与不可篡改性。
- 在以太坊平台上，智能合约通常使用 **Solidity** 编程语言编写，并通过 **Ethereum Virtual Machine (EVM)** 执行。

==3. **数据检索器（Indexer）**：==

- 智能合约通常以 `Event` 形式释放日志事件，比如释放代表 NFT 转移的 `Transfer` 事件，数据检索器会检索这些数据并将其写入到 PostgreSQL 等传统数据库中
- Dapp 在前端进行数据展示时需要检索器内的数据。一个简单的示例是某 NFT 项目需要展示用户持有的所有 NFT，但是 NFT 合约并不会提供通过输入地址参数返回该地址下的所有 NFT 的函数，此时我们可以运行数据检索器将 `Transfer` 事件读取后写入传统数据库内，前端可以在传统数据库内检索用户持有的 NFT 数据

==4. **区块链和去中心化存储（Blockchain & Decentralized Storage）**：==

- 区块链用于存储智能合约的状态数据及交易记录。去中心化存储如 **IPFS**（InterPlanetary File System）或 **Arweave**，用于存储大规模的非结构化数据（如图片、文档等），确保数据不易丢失和篡改。
- 通过使用去中心化存储，Dapp 确保所有数据在多个节点上备份，保证数据的持久性和去中心化特性。

### 2. Dapp 开发流程

Dapp 的开发流程可以分为以下几个阶段：

![Dapp 开发流程图](../images/solidity-intern/dapp_development-workflow_01.jpg)
::: steps

1.  **需求分析与规划**

    在开发 Dapp 之前，首先需要进行需求分析和规划，明确应用的目标和功能。此阶段包括：

    - **确定功能需求**：需要定义用户可以进行的操作，比如转账、查询余额、创建投票等。
    - **选择区块链平台**：决定在哪个平台上构建 Dapp（如以太坊、Solana、Polygon 等），这通常取决于目标用户群、交易成本、可扩展性等因素。
    - **设计用户体验（UX）**：定义 Dapp 的界面设计和交互流程，确保用户能够轻松使用应用并与区块链交互。

2.  **智能合约开发**

    智能合约是 Dapp 的核心，负责执行去中心化的业务逻辑和存储重要的数据。在这一阶段，开发者需要：

    - **编写智能合约**：使用 **Solidity** 或其他智能合约语言编写合约，确保合约的功能满足需求分析中定义的要求。
    - **编写测试用例**：为智能合约编写单元测试，确保合约逻辑正确、无漏洞。
    - **审计和优化**：对合约进行安全审计，确保合约的安全性，避免常见漏洞（如重入攻击、整数溢出等）。

3. **检索器开发**

    检索器是获取链上数据的核心，负责捕获智能合约释放的事件并以合理的方式将其存入数据库的不同的表内部。在这一阶段，开发者需要:

    - **确定功能需要的数据内容**: 前端使用的数据大部份都直接来自检索器，所以开发者需要确定前端工程师所需要的数据
    - **编写检索器程序**: 目前主流的检索器框架，如 ponder 和 subgraph 都是用了 TypeScript 语言作为检索器的程序编写语言，开发者主要编写事件数据清理以及事件数据写入数据库的代码
    - **部署和运维**: 编写程序完成后，一般使用 Docker 部署到云服务器中，当然目前很多检索器框架也提供 SaaS 服务，同时检索器作为一个常规的数据库应用需要运维

3.  **前端开发**

    前端是用户与 Dapp 交互的主要界面，因此开发前端时需要：

    - **选择前端框架**：可以使用现代前端框架（如 **React**、**Vue**）来构建 UI。前端将通过 JavaScript 与智能合约进行交互。
    - **连接钱包**：通过集成 **MetaMask** 等 Web3 钱包，用户可以连接到 Dapp，并授权其与智能合约交互。
    - **显示区块链数据**：前端需要从区块链和检索器内获取数据（如账户余额、交易记录），并通过用户界面展示。
    - **处理交易签名与确认**：当用户发起交易时，前端需要与钱包进行交互，获取用户的签名并将交易发送到区块链。

4.  **与区块链交互**

    前端和智能合约通过 **Viem**（推荐）、**Ethers.js** 或 **Wagmi** 等现代化库进行交互。这些库提供更好的 TypeScript 支持和性能优化：

    - **读取数据**：前端通过智能合约的公共函数读取区块链上的状态数据（如余额、合约信息）。
    - **发送交易**：当用户发起交易时，前端需要通过钱包签署交易并发送到区块链，执行合约中的某个功能（如转账）。

5.  **部署与上线**

    一旦开发完成，Dapp 进入部署阶段。具体步骤包括：

    - **部署智能合约**：推荐使用 **Hardhat** 或 **Foundry**（现代化开发工具）将智能合约部署到测试网（如 **Sepolia**、**Holesky**）或主网。
    - **前端部署**：将前端应用部署到去中心化平台（如 **IPFS**）或传统的 Web 服务（如Vercel）。
    - **发布和维护**：将 Dapp 上线，进行用户反馈收集，定期更新合约和前端，修复潜在问题。

:::

### 3. 小结

Dapp 的开发流程从需求分析、智能合约编写、前端开发，到最终部署，涵盖了多个技术栈的综合应用。开发 Dapp 时，区块链技术的透明性、不可篡改性以及智能合约的自动执行能力为应用提供了去中心化的基础。但与此同时，开发者需要应对与传统 Web 应用不同的挑战，如用户体验、交易处理以及安全性问题。

## 二、以太坊开发环境搭建

以太坊开发环境的搭建主要有以下几种常用方式，适合不同的开发需求：

### 1. 基础环境准备

- Node.js（建议用 nvm 管理）
- npm 或 yarn
- Git

开发环境安装命令（如未安装）：

```bash
# 安装 nvm（如未装）。推荐参考文档 https://github.com/nvm-sh/nvm 安装最新版本
curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh> | bash

# 安装 Node.js LTS
nvm install --lts
nvm use --lts

# 安装 yarn（可选）
npm install -g yarn
```

---

### 2. 以太坊本地开发链

**方式一：Foundry（Rust 实现，极快）**

- [Foundry 官方文档](https://getfoundry.sh/introduction/getting-started) - https://getfoundry.sh/introduction/getting-started

```bash
curl -L <https://foundry.paradigm.xyz> | bash
foundryup
```

Foundry 提供以下以太坊开发工具：
- `forge`: 帮助构建、测试、调试、部署和验证智能合约
- `anvil`: 本地开发节点，完全兼容以太坊 JSON-RPC 规范
- `cast`: 命令行工具，用于与链上应用交互

**初始化项目**

```bash
forge init Counter
```

**测试合约**

```bash
# Compile your contracts
forge build

# Run your test suite
forge test
```

**启动本地节点**

```bash
anvil
```

**部署合约**

```bash
# Use forge scripts to deploy contracts
# Set your private key
export PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

# Deploy to local anvil instance
forge script script/Counter.s.sol --rpc-url http://127.0.0.1:8545 --broadcast --private-key $PRIVATE_KEY
```

---

**方式二：Hardhat（推荐，现代以太坊开发框架）**

- [**Hardhat 官方教程**](https://hardhat.org/tutorial) - 含视频指导

```bash
npm install --global hardhat
mkdir eth-dev && cd eth-dev
npx hardhat
```

选择“创建一个基本示例项目”，会自动生成合约、测试和配置。

**启动本地节点**

```bash
npx hardhat node
```

**部署合约**

```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

### 3. 以太坊钱包和前端交互

- 推荐使用 MetaMask 浏览器插件作为开发钱包。
- 前端推荐使用 Viem 和 Wagmi。

---

### 4. 其他常用工具

- Remix IDE（网页版，适合快速测试合约）：[https://remix.ethereum.org](https://remix.ethereum.org/)
- OpenZeppelin 合约库：`npm install @openzeppelin/contracts`
- [**Chainlink 测试环境**](https://docs.chain.link/resources/link-token-contracts) - 预言机集成指南

## 三、RPC 节点服务详解

在 Web3 开发中，**RPC（Remote Procedure Call，远程过程调用）** 是连接前端应用与区块链网络的关键桥梁。理解 RPC 的工作原理、选择合适的 RPC 服务商，以及正确配置和使用 RPC 节点，是每个 Web3 开发者必须掌握的基础知识。

### 1. RPC 是什么？

**RPC** 是一种通信协议，允许应用程序通过网络调用远程服务器上的函数或方法。在区块链开发中，RPC 节点是运行区块链客户端软件的服务器，它们维护完整的区块链数据副本，并提供 API 接口供开发者查询链上数据、发送交易等操作。

::: card
==**简单理解**=={.warning}

想象 RPC 节点就像银行的 ATM 机：
- **ATM 机**（RPC 节点）连接着银行的核心系统（区块链网络）
- 你通过 ATM 机（调用 RPC API）可以查询余额（读取链上数据）、转账（发送交易）
- 不同的 ATM 机可能由不同的银行或服务商提供（不同的 RPC 服务商）
:::

### 2. RPC 在 Web3 开发中的作用

在 Dapp 开发中，RPC 节点承担着以下关键职责：

::: steps

1. **读取链上数据**
   - 查询账户余额、交易历史
   - 读取智能合约的状态变量
   - 获取区块信息、Gas 价格等

2. **发送交易**
   - 将用户签名的交易广播到区块链网络
   - 查询交易状态和确认数
   - 估算交易所需的 Gas 费用

3. **事件监听**
   - 监听智能合约事件（Events）
   - 实时获取链上状态变化
   - 支持 WebSocket 长连接推送

4. **网络管理**
   - 切换不同的区块链网络（主网、测试网）
   - 获取网络信息和链 ID
   - 管理节点连接状态

:::

### 3. JSON-RPC 协议

以太坊使用 **JSON-RPC 2.0** 协议作为标准的 RPC 通信格式。所有请求和响应都是 JSON 格式，通过 HTTP 或 WebSocket 传输。

**基本请求格式**：

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", "latest"],
  "id": 1
}
```

**基本响应格式**：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1bc16d674ec80000"
}
```

**常用 JSON-RPC 方法**：

| 方法名 | 功能 | 示例 |
|--------|------|------|
| `eth_getBalance` | 查询账户余额 | `eth_getBalance(address, block)` |
| `eth_blockNumber` | 获取最新区块号 | `eth_blockNumber()` |
| `eth_sendTransaction` | 发送交易 | `eth_sendTransaction(txObject)` |
| `eth_call` | 调用合约（只读） | `eth_call(callObject, block)` |
| `eth_getTransactionReceipt` | 获取交易收据 | `eth_getTransactionReceipt(txHash)` |
| `eth_getLogs` | 查询事件日志 | `eth_getLogs(filterObject)` |

### 4. 主流 RPC 服务商对比

对于大多数开发者来说，自建节点成本高昂且维护复杂，因此通常会选择第三方 RPC 服务商。以下是主流服务商的对比：

| 服务商 | 特点 | 免费额度 | 适用场景 |
|--------|------|----------|----------|
| **Alchemy** | 企业级服务，稳定性高，文档完善 | 每月 3 亿次请求 | 生产环境、企业应用 |
| **Infura** | 老牌服务商，ConsenSys 旗下 | 每月 10 万次请求 | 开发测试、中小型项目 |
| **QuickNode** | 高性能，低延迟，多链支持 | 有限免费额度 | 高频交易、实时应用 |
| **Public Node** | 完全免费，无需注册 | 无限制（可能有速率限制） | 学习测试、个人项目 |
| **Ankr** | 多链支持，去中心化节点网络 | 免费额度有限 | 多链应用开发 |

::: note **选择建议**

- **开发测试阶段**：使用 Public Node 或 Infura 免费额度
- **生产环境**：选择 Alchemy 或 QuickNode，确保稳定性和性能
- **多链项目**：考虑 Ankr 或 QuickNode 的多链支持
- **企业应用**：优先选择 Alchemy，提供 SLA 保障和专业技术支持

:::

### 5. 如何获取和使用 RPC 端点

#### 5.1 获取 RPC URL

以 **Alchemy** 为例，获取 RPC 端点的步骤：

::: steps

1. **注册账号**
   - 访问 [Alchemy 官网](https://www.alchemy.com/)
   - 使用邮箱或 GitHub 账号注册

2. **创建应用**
   - 登录后点击 "Create App"
   - 选择网络（Mainnet、Sepolia、Arbitrum 等）
   - 填写应用名称和描述

3. **获取 RPC URL**
   - 创建成功后，在应用详情页可以看到 RPC URL
   - 格式类似：`https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY`
   - **重要**：妥善保管 API Key，不要提交到公开仓库

:::

#### 5.2 在代码中使用 RPC

**使用 Viem（推荐）**：

```typescript
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY')
})

// 查询余额
const balance = await client.getBalance({
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
})
```

**使用 Ethers.js**：

```javascript
const { ethers } = require('ethers')

const provider = new ethers.JsonRpcProvider(
  'https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY'
)

// 查询余额
const balance = await provider.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb')
```

**使用 Web3.js**：

```javascript
const { Web3 } = require('web3')

const web3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY')

// 查询余额
const balance = await web3.eth.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb')
```

#### 5.3 在 Hardhat 中配置 RPC

在 `hardhat.config.js` 中配置：

```javascript
require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  solidity: '0.8.19',
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
}
```

在 `.env` 文件中配置（不要提交到 Git）：

```bash
MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
PRIVATE_KEY=your_private_key_here
```

### 6. RPC 使用最佳实践

::: steps

1. **保护 API Key**
   - 使用环境变量存储 RPC URL 和 API Key
   - 不要将敏感信息提交到 Git 仓库
   - 使用 `.gitignore` 忽略 `.env` 文件
   - 定期轮换 API Key，特别是发现泄露时

2. **错误处理和重试**
   - RPC 调用可能因网络问题失败，需要实现重试机制
   - 设置合理的超时时间
   - 处理常见的错误码（如 `429` 速率限制、`503` 服务不可用）

   ```typescript
   async function getBalanceWithRetry(address: string, retries = 3) {
     for (let i = 0; i < retries; i++) {
       try {
         return await client.getBalance({ address })
       } catch (error) {
         if (i === retries - 1) throw error
         await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
       }
     }
   }
   ```

3. **速率限制管理**
   - 了解服务商的速率限制（Rate Limit）
   - 实现请求队列或节流（Throttling）
   - 对于高频请求，考虑使用 WebSocket 连接

4. **多节点备份**
   - 不要依赖单一 RPC 节点
   - 配置多个 RPC 端点作为备用
   - 实现故障转移（Failover）机制

   ```typescript
   const rpcUrls = [
     'https://eth-mainnet.g.alchemy.com/v2/KEY1',
     'https://eth-mainnet.infura.io/v3/KEY2',
     'https://rpc.ankr.com/eth'
   ]
   
   async function callWithFallback(method: string, params: any[]) {
     for (const url of rpcUrls) {
       try {
         const client = createPublicClient({
           chain: mainnet,
           transport: http(url)
         })
         return await client.request({ method, params })
       } catch (error) {
         console.warn(`RPC ${url} failed, trying next...`)
       }
     }
     throw new Error('All RPC endpoints failed')
   }
   ```

5. **监控和日志**
   - 记录 RPC 调用的成功率和延迟
   - 监控 API 使用量，避免超出免费额度
   - 设置告警，及时发现服务异常

6. **本地节点开发**
   - 开发测试时优先使用本地节点（如 Hardhat Node、Anvil）
   - 本地节点响应快，不受速率限制
   - 可以重置状态，方便测试

:::

### 7. 常见问题与解决方案

:::: details ❓ RPC 调用返回 "rate limit exceeded" 错误？

**原因**：请求频率超过了服务商的限制。

**解决方案**：
- 降低请求频率，实现请求节流
- 升级到付费计划提高速率限制
- 使用 WebSocket 连接替代 HTTP 轮询
- 配置多个 RPC 端点进行负载均衡

::::

:::: details ❓ 如何判断 RPC 节点的可靠性？

**评估指标**：
- **可用性**：节点在线时间百分比（目标 >99.9%）
- **延迟**：请求响应时间（目标 <100ms）
- **同步状态**：节点是否与网络同步
- **历史记录**：查看服务商的历史故障记录

**测试方法**：
```bash
# 使用 curl 测试响应时间
time curl -X POST https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

::::

:::: details ❓ 自建节点 vs 使用第三方 RPC 服务？

**自建节点**：
- ✅ 完全控制，无速率限制
- ✅ 数据隐私，不依赖第三方
- ❌ 成本高（服务器、存储、带宽）
- ❌ 维护复杂，需要专业技术

**第三方 RPC**：
- ✅ 零维护，开箱即用
- ✅ 成本低，免费额度充足
- ✅ 高可用性，专业运维
- ❌ 依赖外部服务
- ❌ 可能有速率限制

**建议**：
- 大多数项目：使用第三方 RPC 服务
- 企业级应用：考虑自建节点 + 第三方备份
- 高频交易：自建节点或专用 RPC 服务

::::

### 8. 扩展阅读

- **JSON-RPC 规范**：[Ethereum JSON-RPC API 文档](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- **Alchemy 文档**：[Alchemy 开发者指南](https://docs.alchemy.com/)
- **Infura 文档**：[Infura 使用指南](https://docs.infura.io/)
- **Viem 文档**：[Viem RPC 客户端](https://viem.sh/docs/clients/public.html)

## 四、Solidity 智能合约编程（简单介绍）

Solidity 是一种面向合约的高级编程语言，专门用于在以太坊虚拟机（EVM）上编写智能合约。它具有静态类型、支持继承、库和复杂的用户定义类型等特性。

### 1. 基础语法与开发范式

::: steps

1.  **版本声明**

    每个 Solidity 文件必须以版本声明开始：

    ```solidity
    pragma solidity ^0.8.0;
    ```

2.  **数据类型**

    基本数据类型

    | 类型             | 描述             | 示例                              | 默认值 |
    | ---------------- | ---------------- | --------------------------------- | ------ |
    | bool             | 布尔值           | true / false                      | false  |
    | uint8            | 8 位无符号整数   | 0 ~ 255                           | 0      |
    | uint16           | 16 位无符号整数  | 0 ~ 65535                         | 0      |
    | uint256 / uint   | 256 位无符号整数 | 0 ~ (2^256 - 1)                   | 0      |
    | int8             | 8 位有符号整数   | -128 - 127                        | 0      |
    | int256 / int     | 256 位有符号整数 | -2^255 ~ (2^255 - 1)              | 0      |
    | address          | 以太坊地址       | 0x….                              | 0      |
    | bytes1 ~ bytes32 | 固定长度字节数组 | bytes32 data = "Hello"            | 0x00   |
    | bytes            | 动态字节数组     | bytes memory data = "Hello World" | ""     |
    | string           | UTF-8 编码字符串 | string name = "Alice"             | ""     |

    复合数据类型

    | 类型     | 语法            | 描述           | 示例                                        |
    | -------- | --------------- | -------------- | ------------------------------------------- |
    | 静态数组 | T[k]            | 固定长度数组   | uint[5] numbers                             |
    | 动态数组 | T[]             | 可变长度数组   | uint[] memory list                          |
    | 映射     | mapping(K => V) | 键值对存储     | mapping(address => uint256) balances        |
    | 结构体   | struct          | 自定义数据结构 | `struct Person { string name; uint age; }`  |
    | 枚举     | enum            | 枚举类型       | `enum Status { Pending, Active, Inactive }` |

3.  **函数修饰符**

    可见性修饰符表

    | 修饰符   | 可见范围    | 描述                   | 使用场景                   |
    | -------- | ----------- | ---------------------- | -------------------------- |
    | public   | 内部 + 外部 | 任何地方都可以调用     | 对外提供的公共接口         |
    | external | 仅外部      | 只能从合约外部调用     | 外部用户接口，gas 效率更高 |
    | internal | 内部 + 继承 | 当前合约和子合约可调用 | 内部逻辑函数，需要被继承   |
    | private  | 仅内部      | 只有当前合约可调用     | 私有实现细节               |

    状态修饰符表

    | 修饰符   | 状态读取 | 状态修改 | Gas 消耗 | 描述                     |
    | -------- | -------- | -------- | -------- | ------------------------ |
    | pure     | ❌       | ❌       | 低       | 不读取也不修改状态的函数 |
    | view     | ✅       | ❌       | 低       | 只读取状态，不修改状态   |
    | payable  | ✅       | ✅       | 正常     | 可以接收以太币的函数     |
    | 无修饰符 | ✅       | ✅       | 正常     | 可以读取和修改状态       |

4.  **开发范式**

    - **状态机模式**

      智能合约本质上是一个状态机，通过交易改变合约状态。

    - **事件驱动编程**

      使用事件（Events）记录重要的状态变化，便于前端监听和日志记录。

    - **模块化设计**

      通过继承和库（Library）实现代码复用和模块化。

:::

### 2. 合约结构详解

::: steps

1.  **基本结构**

    1. `//` 是 Solidity 中的单行注释符号，例如：`// SPDX-License-Identifier: MIT` 用于指定源代码的许可证类型。
    2. `pragma` 关键字用于声明 Solidity 源代码所需的编译器版本，确保合约在兼容的编译器环境中正确编译。
    3. `contract` 关键字用于定义一个智能合约，其语法格式为：`contract 合约名 { ... }`。
    4. 一个智能合约的基本结构通常由以下三部分组成：状态变量、构造函数和普通函数。

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract MyContract {
        // 状态变量
        uint256 public myNumber;

        // 构造函数
        constructor() {
            myNumber = 100;
        }

        // 函数
        function setNumber(uint256 _number) public {
            myNumber = _number;
        }
    }
    ```

2.  **状态变量（State Variables）**

    状态变量是指在合约中定义的、其值永久存储在区块链上的变量。它们用于记录合约的持久化数据，构成了合约的整体状态。当合约被部署后，这些变量将被写入区块链，并在合约的整个生命周期中保持可访问性和可追踪性。

    ```solidity
    contract MyContract {
        /*
        * 可以通过内部与外部函数更改变量
        * public可以通过前端代码访问
        */
        uint256 public totalSupply;
        mapping(address => uint256) private balances;
        address public owner;

        // 常量
        uint256 public constant MAX_SUPPLY = 1000000;

        // 不可变量（构造函数中设置一次）
        uint256 public immutable deploymentTime;

        constructor() {
            owner = msg.sender;
            deploymentTime = block.timestamp;
            totalSupply = 0;
        }
    }
    ```

3.  **函数（Functions）**

    函数是 Solidity 智能合约中执行具体逻辑操作的核心组成部分。通过函数，可以实现对状态变量的读取、修改，或执行特定业务逻辑。

    **函数声明格式**

    Solidity 中函数的标准声明格式如下所示：

    ```solidity
    function <函数名>(<参数列表>)
        <可见性>
        <状态可变性>
        <修饰符列表>
        <虚拟/重写关键字>
        returns (<返回值列表>)
    {
        // 函数体
    }
    ```

    各部分含义如下：

    - `<函数名>`：函数的名称；
    - `<参数列表>`：传入函数的参数；
    - `<可见性修饰符>`：如 `public`、`private`、`internal`、`external`；
    - `<状态可变性修饰符>`：如 `view`、`pure`、`payable`；
    - `<函数修饰符>`：如 `onlyOwner` 等自定义逻辑控制；
    - `virtual/override`：用于支持继承与函数重写；
    - `returns`：定义返回值及其类型。

    **函数可见性（Function Visibility）**

    函数可见性决定了函数在何种上下文中可以被调用

    ```solidity
    contract VisibilityExample {
        // 仅当前合约可访问
        function privateFunc() private pure returns(uint256) { return 1; }
        // 当前合约和继承合约可访问
        function internalFunc() internal pure returns(uint256) { return 2; }
        // 所有人可访问
        function publicFunc() public pure returns(uint256) { return 3; }
        // 仅外部调用
        function externalFunc() external pure returns(uint256) { return 4; }
    }
    ```

    **函数状态修饰符**（State Mutability Modifiers）

    用于指明函数是否修改或读取合约状态：

    ```solidity
    contract StateModifiers {
        uint256 public count = 0;

        // view: 只读函数，不修改状态
        function getCount() public view returns(uint256) {
            return count;
        }

        // pure: 纯函数，不读取也不修改状态
        function add(uint256 a, uint256 b) public pure returns(uint256) {
            return a + b;
        }

        // payable: 可接收以太币
        function deposit() public payable {
            // msg.value 是发送的以太币数量
        }

        // 默认：可修改状态
        function increment() public {
            count++;
        }
    }
    ```

    **函数参数和返回值**

    Solidity 支持多参数与多返回值，以及命名返回值：

    ```solidity
    // 多个返回值
    function getPersonInfo() public pure returns(string memory name, uint256 age) {
        name = "Alice";
        age = 25;
    }

    // 命名返回值
    function calculate(uint256 a, uint256 b) public pure returns(uint256 sum, uint256 product) {
        sum = a + b;
        product = a * b;
        // 自动返回命名变量
    }

    // 调用带多返回值的函数
    function callExample() public pure {
        (string memory name, uint256 age) = getPersonInfo();
        // 或者忽略某些返回值
        (, uint256 productOnly) = calculate(5, 3);
    }
    ```

    **修饰符（Function Modifiers）**

    修饰符允许在函数执行前插入额外逻辑，常用于权限控制与前置检查：

    ```solidity
    contract ModifierExample {
        address public owner;
        bool public paused = false;

        constructor() {
            owner = msg.sender;
        }

        // 自定义修饰符
        modifier onlyOwner() {
            require(msg.sender == owner, "Not the owner");
            _;  // 继续执行被修饰的函数
        }

        modifier whenNotPaused() {
            require(!paused, "Contract is paused");
            _;
        }

        function togglePause() public onlyOwner {
            paused = !paused;
        }

        // 使用多个修饰符
        function criticalFunction() public onlyOwner whenNotPaused {
            // 函数逻辑
        }
    }
    ```

    **继承与函数重写（Inheritance and Override）**

    Solidity 支持单继承与多继承，子合约可重写父合约中的函数：

    ```solidity
    // 基础合约
    contract Animal {
        string public name;

        constructor(string memory _name) {
            name = _name;
        }

        function speak() public virtual returns(string memory) {
            return "Some sound";
        }
    }

    // 继承合约
    contract Dog is Animal {
        constructor(string memory _name) Animal(_name) {}

        // 重写父类函数
        function speak() public pure override returns(string memory) {
            return "Woof!";
        }
    }

    // 多重继承
    contract Pet is Animal {
        address public owner;

        constructor(string memory _name, address _owner) Animal(_name) {
            owner = _owner;
        }
    }

    contract Labrador is Dog, Pet {
        constructor(string memory _name, address _owner)
            Dog(_name)
            Pet(_name, _owner) {}
    }
    ```

    **接口与抽象合约（Interfaces & Abstract Contracts）**

    接口与抽象合约用于定义规范与继承框架：

    ```solidity
    // 接口定义
    interface IERC20 {
        function transfer(address to, uint256 amount) external returns (bool);
        function balanceOf(address account) external view returns (uint256);
    }

    // 抽象合约
    abstract contract AbstractToken {
        string public name;

        // 没有函数体的抽象函数，必须被子类使用 override 关键词重载实现
        function totalSupply() public virtual returns (uint256);

        // 有函数体实现的抽象函数，子类可以不使用 override 关键词重载直接继承已有的实现，也可以选择使用 override 关键词重载实现
        function decimals() public view virtual returns (uint8) {
            return 18;
        }
    }
    ```

    **事件机制（Events）**

    事件用于在链上记录重要状态变化，并可由外部监听器（如检索器或前端应用）捕捉：

    ```solidity
    contract EventExample {
        // 定义事件
        event Transfer(address indexed from, address indexed to, uint256 amount);
        event Approval(address indexed owner, address indexed spender, uint256 amount);

        mapping(address => uint256) public balances;

        function transfer(address to, uint256 amount) public {
            require(balances[msg.sender] >= amount, "Insufficient balance");

            balances[msg.sender] -= amount;
            balances[to] += amount;

            // 触发事件
            // 可以在区块链浏览器查找到当前事件记录
            emit Transfer(msg.sender, to, amount);
        }
    }
    ```

:::

### 3. 安全实践

常见攻击手段

| 风险点                                  | 攻击机理                                                        | 典型防护措施                                                                                                                                  |
| --------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Reentrancy                              | 恶意合约在 transfer / call 回调中再次进入受害函数，导致重复提款 | 1. Checks-Effects-Interactions <br> 2. `ReentrancyGuard`（OpenZeppelin）<br> 3. 使用 `transfer`/`send` 或限制 gas（已不推荐，仅旧代码）       |
| 访问控制 (Access Control)               | 未受保护的管理函数可被任何人调用                                | 1. `Ownable`：`onlyOwner` 修饰符 <br> 2. `AccessControl`：基于角色的权限（`DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` 等）<br> 3. 及时转移 / 多签管理 |
| 整数溢出 (Integer Overflow / Underflow) | 旧版本 `<0.8` 加法/减法越界产生错误数值                         | 1. Solidity 0.8+ 默认内置溢出检查 <br> 2. 对老版本使用 `SafeMath` 库                                   |

::: steps

1.  **重入攻击（Reentrancy）防护**

    重入攻击（Reentrancy Attack）是智能合约中最常见且危害极大的安全漏洞之一。该攻击方式通常发生在合约向外部地址发送以太币或调用外部合约函数时，攻击者利用回调机制在合约状态更新之前重复调用受影响的函数，从而多次提取资金或重复执行某些操作，造成资产损失或逻辑混乱。

    **攻击原理简述**

    典型的重入攻击流程如下：

    1. 合约调用外部合约或地址（如 `call` 发送以太币）；
    2. 外部合约在其回调函数中重新调用原合约尚未更新状态的函数；
    3. 原合约在状态尚未变更的前提下再次执行逻辑；
    4. 攻击者反复进入该函数，实现多次提现等恶意操作。

    **典型示例（易受攻击版本）**

    ```solidity
    contract VulnerableContract {
        mapping(address => uint256) public balances;

        function withdraw() external {
            uint256 amount = balances[msg.sender];
            require(amount > 0, "No balance");

            // 危险：先转账，后更新状态
            (bool success,) = msg.sender.call{value: amount}("");
            require(success, "Transfer failed");

            balances[msg.sender] = 0; // 状态更新在转账之后
        }
    }
    ```

    **防护措施**

    1. 检查-生效-交互模式（CEI Pattern）

    ```solidity
    contract SecureContract {
        mapping(address => uint256) public balances;

        function withdraw() external {
            uint256 amount = balances[msg.sender];
            require(amount > 0, "No balance");

            // 先更新状态
            balances[msg.sender] = 0;

            // 后进行外部调用
            (bool success,) = msg.sender.call{value: amount}("");
            require(success, "Transfer failed");
        }
    }
    ```

    2. 重入锁（Reentrancy Guard）

    ```solidity
    contract ReentrancyGuard {
        bool private locked;

        modifier noReentrant() {
            require(!locked, "Reentrant call");
            locked = true;
            _;
            locked = false;
        }
    }

    contract SecureWithGuard is ReentrancyGuard {
        mapping(address => uint256) public balances;

        function withdraw() external noReentrant {
            uint256 amount = balances[msg.sender];
            require(amount > 0, "No balance");

            balances[msg.sender] = 0;
            (bool success,) = msg.sender.call{value: amount}("");
            require(success, "Transfer failed");
        }
    }
    ```

2.  **访问控制（Access Control）**

    访问控制是保障智能合约安全性的核心机制之一。通过对关键函数设置访问权限，可以有效防止未经授权的用户执行敏感操作，从而避免资金被盗、状态被篡改等严重安全风险。

    **缺乏访问控制的风险示例**

    以下为一个存在严重安全漏洞的合约示例，任何地址均可提取合约内全部资金：

    ```solidity
    /**
    * @title BadVault
    * @dev 缺少访问控制，任何人都能调用 withdraw() 取走全部 ETH
    */
    contract BadVault {
        mapping(address => uint256) public balance;

        // 用户存钱
        function deposit() external payable {
            balance[msg.sender] += msg.value;
        }

        // ❌ anyone can withdraw ALL funds!
        function withdraw() public {
            payable(msg.sender).transfer(address(this).balance);
        }
    }

    ```

    **问题题说明**：
    该合约未对 withdraw 函数设置访问权限，攻击者可通过简单调用提取合约内所有以太币，造成资金全部流失。

    **安全的访问控制示例**

    通过引入显式权限判断，限制敏感操作的调用者，可以提升合约的安全性：

    ```solidity
    /**
    * @title SafeVault
    * @dev 仅部署者 (owner) 可以提取资金，简单显式访问控制
    */
    contract SafeVault {
        address public immutable owner;           // 部署者地址
        mapping(address => uint256) public balance;

        // 构造函数：在部署时确定所有者地址
        constructor(address owner_) {
            owner = owner_;
        }

        // 存款函数：允许所有用户调用
        function deposit() external payable {
            balance[msg.sender] += msg.value;
        }

        // ✔️ 提款函数：仅限所有者调用
        function withdraw() external {
            // 进行访问权限判断
            require(msg.sender == owner, "Not owner");
            uint256 amount = address(this).balance;
            require(amount > 0, "Nothing to withdraw");

            // 注意 Checks-Effects-Interactions 顺序
            (bool ok, ) = owner.call{value: amount}("");
            require(ok, "Transfer failed");
        }
    }
    ```

3.  **整数溢出防护（Integer Overflow Protection）**

    在早期版本的 Solidity（v0.8.0 之前），算术运算默认**不进行溢出检查**。这意味着当整数变量超出其最大值或最小值时，数值将**环绕（wrap around）**，导致严重的逻辑漏洞和安全隐患。

    **受攻击的示例：无溢出检测的合约（< v0.8.0）：**

    ```solidity
    pragma solidity ^0.7.6;          // ⚠️ 0.7 版本不会自动检查溢出

    /**
    * @title BadCounter
    * @dev 用户每调用一次 `inc()`，计数器加 1；当计数器达到 10 停止奖励。
    *      但整数溢出可让攻击者将计数器绕回 0，再无限领奖。
    */
    contract BadCounter {
        mapping(address => uint256) public counter;
        mapping(address => bool)    public rewarded;

        // 计数 +1
        function inc() external {

            counter[msg.sender] += 1;        // 若已 2**256-1 则回到 0
        }

        // 满 10 次领取 1 wei
        function claim() external {
            require(counter[msg.sender] >= 10, "not enough actions");
            require(!rewarded[msg.sender],    "already claimed");
            rewarded[msg.sender] = true;
            msg.sender.transfer(1);           // 为演示简化为 1 wei
        }

        // 向合约注入少量 ETH 供演示
        receive() external payable {}
    }
    ```

    **问题说明：**
    在该合约中，如果攻击者的 counter 达到最大值 2^256 - 1，再次调用 inc() 会使计数器绕回 0，从而绕过 >=10 的检查条件，并再次触发奖励逻辑，实现无限循环领取。

    **安全方案：限制上限 + 使用最新编译器版本**

    自 Solidity 0.8.0 起，所有算术运算默认开启溢出/下溢检查，若发生异常会自动 `revert`。除此之外，也建议通过逻辑限制控制最大值，防止边界绕回。

    ```solidity
    /**
    * @title SafeCounter
    * @dev 方案：在 inc() 中直接固定“最高 11”，超过即拒绝。
    *      溢出永远不会发生，也杜绝了重复领奖。
    */
    contract SafeCounter {
        mapping(address => uint256) public counter;

        uint8 constant MAX_ACTIONS = 11;   // 上限 11，留 1 个缓冲

        /// 受控递增：达到 10 后就不准再加
        function inc() external {
            require(counter[msg.sender] < MAX_ACTIONS, "limit reached");
            counter[msg.sender] += 1;
        }

        /// 领取奖励
        function claim() external {
            require(counter[msg.sender] >= 10, "≥10 actions required");
            counter[msg.sender] = 0;                   // 重置为 0
            (bool ok, ) = msg.sender.call{value: 1}("");
            require(ok, "transfer failed");
        }

        /// 注资
        receive() external payable {}
    }
    ```

:::

## 五、智能合约实战项目

本章节将通过一个简单的"链上留言板"项目，介绍如何使用 Remix 开发、编译、部署并调用智能合约。

### 1. 环境准备

推荐使用 [Remix IDE](https://remix.ethereum.org/)，它是一个基于浏览器的在线集成开发环境，提供完整的 Solidity 编写、编译、部署与调试功能，适合初学者快速上手。

![Remix IDE 界面展示](../images/solidity-intern/remix_ide-interface-display_01.png)

### 2. 合约代码

本项目的智能合约实现了一个链上留言功能。每个用户地址可以在区块链上提交一条留言信息，所有留言将永久保存在链上，具有不可篡改与可溯源的特点。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageBoard {
    // 保存所有人的留言记录
    mapping(address => string[]) public messages;

    // 留言事件，便于检索器和区块链浏览器追踪
    event NewMessage(address indexed sender, string message);

    // 构造函数，在部署时留言一条欢迎词
    constructor() {
        string memory initMsg = "Hello ETH Pandas";
        messages[msg.sender].push(initMsg);
        emit NewMessage(msg.sender, initMsg);
    }

    // 发送一条留言
    function leaveMessage(string memory _msg) public {
        messages[msg.sender].push(_msg);     // 添加到发言记录
        emit NewMessage(msg.sender, _msg);   // 发出事件
    }

    // 查询某人第 n 条留言（从 0 开始）
    function getMessage(address user, uint256 index) public view returns (string memory) {
        return messages[user][index];
    }

    // 查询某人一共发了多少条
    function getMessageCount(address user) public view returns (uint256) {
        return messages[user].length;
    }
}

```

### 3. 新建合约文件

在 Remix IDE 左侧文件管理面板（File Explorer）中，点击"新建文件"按钮，创建一个名为 `messageboard.sol` 的 Solidity 合约文件，并将合约代码粘贴至该文件中。

![Remix 编辑代码](../images/solidity-intern/remix_code-editing_01.png)

### 4. 编译

1. 在 Remix 右侧面板中选择 **Solidity Compiler**，进入编译设置界面；
2. 在 **COMPILER VERSION** 下拉菜单中选择与合约代码版本一致的编译器版本；
3. 点击 **Compile messageboard.sol** 按钮以启动编译过程；
4. 若编译成功，将在面板右上角看到绿色的 ✅ 符号；
5. 若编译失败，错误信息将显示在底部命令行终端中。根据提示修改代码后可重新编译。

如需重新组织项目结构，可点击 **FILE EXPLORER** 创建文件夹以便分类管理文件。

![Remix 编译界面](../images/solidity-intern/remix_compile-interface_01.png)

### 5. 部署

- 在 Remix 右侧面板中选择 **Deploy & Run Transactions**，进入部署与交互界面；
- 默认环境选择为 JavaScript VM，本地虚拟区块链，系统将自动为多个账户分配初始余额（每个账户默认 100 ETH），可用于部署与调用合约时支付 Gas 费用；

![Remix 部署界面](../images/solidity-intern/remix_deploy-interface_01.png)

- 确认部署合约的合约名无误后，点击 **Deploy** 按钮，即可完成部署；
- 部署成功后，在下方面板将显示合约部署地址、可调用函数列表及状态变量

![Remix 部署成功](../images/solidity-intern/remix_deploy-success_01.png)

- 展开底部命令终端可查看部署日志及构造函数的执行信息，验证合约初始化情况与留言功能的准备状态。

![Remix 部署日志](../images/solidity-intern/remix_deploy-logs_01.png)

### 6. 调用函数

部署完成后，即可在 Remix 中调用合约的留言函数：

1. 在合约实例中找到 `leaveMessage` 函数输入框；
2. 在输入框中填入留言内容（例如：`Hello World`）；
3. 点击 **leaveMessage** 按钮，发起交易调用；
4. 右侧命令终端将显示一条新的交易记录，点击该记录可查看交易详情与链上存储的留言信息。

![Remix 函数调用](../images/solidity-intern/remix_function-call_01.png)

## 六、以太坊技术基础

### 1. 帐户模型

| 对比维度     | 外部拥有账户 **EOA**                     | 合约账户 **Contract Account**                 |
| ------------ | ---------------------------------------- | --------------------------------------------- |
| 地址来源     | `keccak256(pubKey)[12:]`   (公钥 → 地址) | 创建时由 `CREATE/CREATE2` 计算                |
| 控制方式     | **私钥签名**（用户、钱包）               | **合约代码**（EVM 字节码）                    |
| 状态字段     | `nonce`、`balance`                       | `nonce`、`balance`、`codeHash`、`storageRoot` |
| 能否发起交易 | ✅  必须用私钥签名                       | ❌  只能由 EOA 触发或合约内部调用             |
| Gas 费用支付 | 由账户本身 ETH 余额承担                  | 由调用者支付                            |
| 典型场景     | 钱包地址、热冷账户                       | ERC-20/721 Token、DeFi 协议、DAO              |

### 2. Gas 机制

| 术语                   | 含义                                  | 备注                   |
| ---------------------- | ------------------------------------- | ---------------------- |
| **Gas**                | 执行 1 条 EVM 指令的抽象工作量单位    | 汇编级别价格表见 [evm.codes](https://www.evm.codes/) |
| **Gas Limit (Tx)**     | 发送者愿为本笔交易消耗的 Gas 上限     | 防止死循环耗尽余额     |
| **Gas Used**           | 实际执行指令花费的 Gas 总和           | 多退少不补             |
| **Base Fee**           | 随区块动态调整的基础费用（EIP-1559）  | 全网销毁，抑制拍卖狂飙 |
| **Priority Fee / Tip** | 发送者给出以激励打包者的附加费        | 给矿工 / 验证者        |
| **Max Fee Per Gas**    | `maxFee = baseFee + priorityFee` 上限 | 钱包通常自动估算       |

### 3. 交易生命周期

- **签名构造**
  - 钱包收集字段：`nonce, to, value, data, gasLimit, maxFeePerGas, priorityFeePerGas, chainId`
  - 使用私钥生成 `v, r, s` 签名 → **序列化 RLP**
- **广播到 P2P 网络**
  - 交易进入本地 & 邻居节点的 **mempool**
  - 节点根据 `maxFeePerGas`、`gasLimit`、`nonce` 做基本筛查
- **打包 / 提议区块**
  - 验证者（PoS）或矿工（PoW 时代）挑选利润最高、合法顺序的交易
  - 执行 EVM → 产生 **交易收据**（`status, gasUsed, logsBloom, logs[]`）
- **区块传播与共识**
  - 区块头包含新 **stateRoot**、**receiptsRoot**
  - 超 2⁄3 质押者签名后在共识层定案（PoS Finality ≈ 2 Epoch ≈ 64 slot ≈ ~12 min）
- **确认数 & Finality**
  - 客户端/前端常以 `n ≥ 12` 作"概率足够低"确认
  - 完全终结在 PoS 下由 **Finality Gadget**（Casper FFG）给出

## 七、部署合约

在第四章中，我们已经体验了使用 Remix 在本地虚拟机环境下部署合约的基本流程。然而，该过程仅为本地模拟，并未真正将合约发布到区块链网络。

接下来，我们将通过 ==**测试网络（Testnet）**=={.important} 实现合约的正式部署，使其真正上链。

==**测试链部署的意义**==

测试网络是与主网结构一致的区块链网络，由真实的去中心化节点共同维护。与主网不同的是，测试网中的代币不具有实际经济价值，适用于：
::: card

- 验证合约功能是否符合预期；
- 检查合约在不同场景下的行为稳定性；
- 发现并修复潜在的安全漏洞；
- 避免在主网部署时产生高额 Gas 费用或造成实际损失。
  :::
  一旦在测试链中部署成功且运行稳定，才建议将合约迁移至以太坊主网，以降低研发与运维成本。

==**浏览器可见性**==

由于测试链同样由真实节点组成，部署在测试链上的合约也可以通过以太坊区块浏览器（如 Sepolia Etherscan）进行查询与验证。

您可以在浏览器中查看：
::: card

- 合约部署地址；
- 所属交易哈希（Transaction Hash）；
- 发起者地址；
- 合约代码及 ABI；
- 状态变量和函数调用记录等。
  :::

### 1. 测试网

以太坊测试网（Ethereum Testnets）是用于开发、测试和部署智能合约的网络环境，它们模拟主网功能但使用无价值的测试代币，让开发者可以安全地进行实验而无需承担真实的经济成本。

| 名称    | 共识机制       | 状态 | 主要特点                                         | 适用场景                                        |
| ------- | -------------- | ---- | ------------------------------------------------ | ----------------------------------------------- |
| Sepolia | PoS (权益证明) | 活跃 | 长期支持的主要测试网，与主网最相似，稳定性高。   | 最终部署前测试，生产环境模拟，Dapp 集成测试     |
| Holesky | PoS (权益证明) | 活跃 | 专为验证者测试设计，大型网络规模，质押功能完整。 | 验证者节点测试， 质押协议开发，大规模网络测试。 |

### 2. 领取 Sepolia 代币

在将合约部署至 Sepolia 测试网之前，需确保部署地址拥有足够的测试用 ETH（Sepolia ETH），以支付部署与调用智能合约所需的 Gas 费用。

::: steps

1. ==获取 Sepolia 地址==

   1. 打开 [MetaMask 钱包](https://metamask.io/)，创建或导入钱包账户；
   2. 在网络选择栏中切换至 **Sepolia 测试网络**；
   3. 此时，您将获得一个以 `0x` 开头的以太坊地址，用于接收 Sepolia 测试币。
      :::: card-grid
      ::: card
      ![MetaMask 网络选择](../images/solidity-intern/metamask_network-selection_01.png)
      :::
      ::: card
      ![MetaMask 网络选择](../images/solidity-intern/metamask_network-selection_02.png)
      :::
      ::::

2. ==申请测试币==

   可以通过以下水龙头（Faucet）网址申请 Sepolia 测试代币：

   - [https://sepolia-faucet.pk910.de/](https://sepolia-faucet.pk910.de/)

   ==**操作步骤如下：**=={.note}

   1. 打开上述网址；
   2. 在输入框中粘贴您的 **Sepolia 测试地址**；
   3. 点击 **Start Mining** 按钮，平台将自动为您启动工作量证明（Proof of Work）过程；
   4. 几分钟后，您将收到一定数量的 Sepolia ETH，自动打入对应地址。

   ==**注意事项**=={.note}

   - 某些水龙头服务可能会对申请者的主网余额、GitHub 账号或 Twitter 活跃度进行校验；
   - 若在上述网站申请时出现 IP 相关错误提示，请按照以下步骤操作：
     - 先完成网站的真人验证（Captcha）；
     - 关闭 VPN 或代理服务；
     - 重新点击 **Start Mining**；
   - 若该 Faucet 不可用，也可尝试其他公开的 Sepolia 水龙头服务
     :::: card-grid
     ::: card
     ![Sepolia 水龙头界面](../images/solidity-intern/sepolia_faucet-interface_01.png)
     :::
     ::: card
     ![Sepolia 水龙头获取](../images/solidity-intern/sepolia_faucet-obtain_01.png)
     :::
     ::::

:::

### 3. Remix 部署到 Sepolia

在完成合约编写、编译和测试币领取等准备工作后，接下来可通过 Remix IDE 将合约正式部署到 Sepolia 测试网络，实现"上链"操作。

::: steps

1.  ==Remix 编译部署==

    ==**连接钱包**=={.note}

    打开 Remix IDE，点击右侧面板中的 **Deploy & Run Transactions** 模块，在 **Environment** 下拉菜单中选择：
    ::: card

    ```
    Injected Provider - MetaMask
    ```

    Remix 将自动调用浏览器中的 MetaMask 钱包，并连接到当前所选网络（确保已切换至 Sepolia 测试网）。

    :::

    ![Remix 连接 MetaMask](../images/solidity-intern/remix_connect-metamask_01.png)

    ==**编译合约**=={.note}

    切换至**Solidity Compiler** 面板，点击 **Compile messageboard.sol** 对合约进行编译，确保无错误提示。

    ![Remix 编译合约](../images/solidity-intern/remix_compile-contract_01.png)

    ==**部署合约**=={.note}

    回到 **Deploy & Run Transactions** 面板：

    - 确保合约名称与合约文件一致；
    - 点击 **Deploy** 按钮；
    - MetaMask 会弹出交易确认窗口，展示 Gas 费用等信息；
    - 点击 **确认** 提交交易。

    ![MetaMask 确认交易](../images/solidity-intern/metamask_confirm-transaction_01.png)

    ==**查看部署结果**=={.note}

    部署完成后，Remix 下方的命令行终端将输出相关日志，包括：

    - 合约部署的交易哈希（Transaction Hash）；
    - 部署成功的合约地址；
    - 构造函数的执行信息；
    - 可调用的函数与状态变量接口

    ![Remix 部署结果](../images/solidity-intern/remix_deploy-result_01.png)

2.  ==Etherscan 查看合约==

    部署成功后，我们可以借助 [Etherscan](https://sepolia.etherscan.io) （已默认选择测试网）区块浏览器 对部署过程及合约状态进行进一步验证与分析。

    ==**切换到 Sepolia 网络**=={.note}

    1. 打开 [Etherscan](https://etherscan.io/)；
    2. 在页面顶部的网络切换器中选择 **Sepolia** 测试网，或直接访问 [https://sepolia.etherscan.io](https://sepolia.etherscan.io)。

    ![Etherscan 网络选择](../images/solidity-intern/etherscan_network-selection_01.png)

    ==**通过交易哈希查看部署信息**=={.note}

    部署合约时，MetaMask 会生成一条交易记录，其 **Transaction Hash** 可在 Remix 的命令终端或 MetaMask 历史记录中找到。将该哈希值粘贴到 Etherscan 的搜索框中，即可查看部署交易的详细信息，包括：

    - 交易发起地址（From）；
    - 合约部署地址（To 会显示为 _Contract Creation_）；
    - Gas 使用量及费用；
    - 区块确认数；
    - 输入的合约字节码（Input Data）等。

    ![Etherscan 交易详情](../images/solidity-intern/etherscan_transaction-details_01.png)

    ==**通过合约地址查看合约详情**=={.note}

    1. 在 Remix 中复制合约部署成功后的地址（如示例地址：`0xfaC4dF6aA3b8265A96a7B269a55A88E2009F34Be`）；
    2. 在 Etherscan 搜索框中粘贴该地址并进入合约页面；
    3. 页面中将显示如下信息：
       - 当前余额（Balance）；
       - 合约创建交易；
       - 交互记录（若无交互，则显示为"暂无 Transactions"）；
       - 发布者地址（Creator）；
       - 合约代码（若已验证）等

    ![Etherscan 合约详情](../images/solidity-intern/etherscan_contract-details_01.png)

    ==**查看合约事件日志（Events）**=={.note}

    即使该合约尚未发生函数调用或转账交易，也可以通过 Etherscan 的 **Events** 标签页查看部署过程中由构造函数或初始设置触发的事件。该功能有助于调试初始化逻辑和验证合约状态。

    ![Etherscan 事件日志](../images/solidity-intern/etherscan_event-logs_01.png)

3.  ==合约交互==

    完成部署后，我们可以使用 Remix 提供的图形界面与已部署的智能合约进行函数调用测试，实现链上交互，并通过 Etherscan 验证交易与日志记录。

    ==**通过 Remix 调用合约函数**=={.note}

    1. 回到 Remix 的 **Deploy & Run Transactions** 面板；
    2. 在已部署合约实例下，找到函数 `leaveMessage`；
    3. 在输入框中输入一条测试信息（例如：`Hello ETH`）；
    4. 点击 `leaveMessage` 按钮发起函数调用；
    5. MetaMask 将弹出交易确认窗口，确认后即可发送交易；
    6. Remix 下方的终端将显示交易成功日志，包括交易哈希（Tx Hash）。

    ![Remix 合约交互](../images/solidity-intern/remix_contract-interaction_01.png)

    ==**通过 Etherscan 验证交互结果**=={.note}

    1. 复制合约地址，再次访问 Sepolia Etherscan；
    2. 在搜索框粘贴合约地址，进入合约详情页面；
    3. 此时页面中将显示新增的一条交易（Transaction），即刚刚执行的函数调用记录；
    4. 点击该交易进入交易详情页；
    5. 在页面下方的 **Logs** 或 **Event Logs** 标签页中，可看到刚刚触发的事件日志，其中包含输入的留言内容等参数信息。

    ![Etherscan 交易记录](../images/solidity-intern/etherscan_transaction-record_01.png)

    ![Etherscan 事件日志显示](../images/solidity-intern/etherscan_event-logs-display_01.png)

:::

## 八、区块链前端整合

### 1. 前端与合约交互工作流程概览

#### ==1.2 交互流程==

1. **初始化连接**：前端检测并连接 Web3 提供者
2. **用户授权**：请求用户授权访问钱包账户
3. **合约实例化**：使用 ABI 和合约地址创建合约实例
4. **函数调用**：通过合约实例调用智能合约函数
5. **交易签名**：钱包对交易进行数字签名
6. **广播交易**：将签名交易发送到区块链网络
7. **状态更新**：获取交易结果并更新前端界面

![Web3 开发工具流程](../images/solidity-intern/web3_development-tools-flow_01.jpg)

#### ==1.2 关键技术栈==

- **合约语言：** 掌握 Solidity 等相关合约开发语言
- **Web3.js/Ethers.js：** JavaScript 库，提供区块链交互 API (当前 Web3.js/Ethers.js 库比较老旧，本技术只用来学习理解整体流程，可以使用 Viem、Wagmi 进行新项目开发)
- **钱包连接器**：如 RainbowKit、ConnectKit、WalletConnect、Web3Modal 等
- **状态管理**：React Context 等管理连接状态
- **错误处理**：网络异常、用户拒绝、Gas 不足等场景处理

上述技术栈中，合约语言与一些前端 JS 区块交互的 API 最为基础，其他方面往往由其他厂商提供，如 RPC 节点、钱包等。

### 2. 实例操作

在第六章中，我们已成功将智能合约部署至测试网络。然而，仅部署合约并不足以实现用户交互。为此，本章节将通过构建一个基于 Web 的前端页面，使用户可以通过网页界面与区块链上的合约进行交互（如留言等操作），从而实现完整的链上功能闭环。

![Dapp 全栈架构图](../images/solidity-intern/dapp_fullstack-architecture_01.png)

#### ==2.1 关键代码==

本前端界面基于以下技术栈构建：

- **开发语言**：HTML + JavaScript + CSS（单页面集成）
- **代码规模**：约 650 行
- **核心依赖库**：`Web3.js` —— 用于与以太坊区块链进行交互

::: note
完整源代码参考地址 👉: [messageboard.html - GitHub](https://github.com/JXChuangLab/JXChuangLab.github.io/blob/main/messageboard.html)
:::
==**连接钱包**=={.note}

前端通过调用浏览器中的以太坊钱包插件（如 MetaMask）提供的 API，实现用户地址的连接与授权操作。

```jsx
async function connectWallet() {
  // 1. 请求用户授权账户访问
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  // 2. 创建 Web3 实例
  web3 = new Web3(window.ethereum);
  account = accounts[0];

  // 3. 验证网络,本示例使用Sepolia 测试网
  const chainId = await web3.eth.getChainId();
  if (chainId !== 11155111) {
    // Sepolia 测试网
    // 网络错误处理
  }
}
```

==**合约 ABI 定义**=={.note}

- ABI（**Application Binary Interface**，应用二进制接口）是智能合约对外提供的接口描述规范。
- 在前端，ABI 以 JSON 格式定义，描述合约中的函数、参数、返回类型等。
- ABI 是实现前端与合约交互的基础，前端可通过 ABI 调用对应函数、读取状态变量。

```json
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "NewMessage",
        "type": "event"
    },
    ......
];
```

==**合约实例化**=={.note}

完成 ABI 导入与钱包连接后，通过 Web3.js 创建合约实例，绑定合约地址与 ABI，从而可直接调用合约中的函数接口。

```jsx
function setContract() {
  const address = document.getElementById('contractAddress').value.trim();

  // 地址有效性验证
  if (!web3.utils.isAddress(address)) {
    // 错误处理
    return;
  }

  // 创建合约实例
  contract = new web3.eth.Contract(contractABI, address);
}
```

==**合约方法调用**=={.note}

写入操作（需要 Gas）

**核心概念**：

- `.send()` 方法用于执行状态改变的交易
- 需要指定 `from` 参数（发送者地址）
- 返回交易对象，包含 `transactionHash` 等信息
- 用户需要在钱包中确认交易并支付 gas 费用

```jsx
async function leaveMessage() {
  const message = document.getElementById('messageInput').value.trim();

  try {
    // 调用合约的写入方法
    const tx = await contract.methods.leaveMessage(message).send({
      from: account,
    });

    // 获取交易哈希
    console.log('交易哈希:', tx.transactionHash);
  } catch (error) {
    // 错误处理
  }
}
```

只读或模拟操作（免费）

- `.call()` 方法用于执行只读查询或者模拟操作以判断某笔交易是否会成功
- 不需要 gas 费用，不会改变区块链状态
- 可以直接获取返回值

```jsx
async function queryMessages() {
  const address = document.getElementById('queryAddress').value.trim();

  try {
    // 调用只读方法获取留言数量
    const count = await contract.methods.getMessageCount(address).call();

    // 批量获取留言内容
    for (let i = 0; i < count; i++) {
      const message = await contract.methods.getMessage(address, i).call();
      // 处理消息内容
    }
  } catch (error) {
    // 错误处理
  }
}
```

通过上述操作，前端即可实现用户连接钱包、链上留言、读取留言记录等功能，构建一个完整可用的 Dapp 原型。至此你已经了解合约代码，合约上链，前端交互整个大概流程。

### 3. 现代化实战项目：使用 Viem 和 Wagmi 构建留言板 Dapp

::: tip 💡 推荐阅读
本节展示如何使用现代化技术栈（Viem + Wagmi + RainbowKit）构建完整的 Dapp。
相比上一节的 Web3.js 示例，具有更好的性能、类型安全和开发体验。
两个示例可以对比学习，选择适合你项目的技术栈。
:::

#### 3.1 项目概述

我们构建了一个功能完整的链上留言板 Dapp，展示了现代 Web3 开发的最佳实践：

**核心特性**

✨ **技术栈对比**

| 特性 | Web3.js (上一节) | Viem + Wagmi (本节) |
|------|-----------------|-------------------|
| 包体积 | ~1.2MB | ~100KB |
| TypeScript 支持 | 部分支持 | 原生完整支持 |
| 性能 | 一般 | 优秀（快 2-10 倍） |
| 钱包连接 | 手动实现 | RainbowKit 开箱即用 |
| React 集成 | 需要自己封装 | Wagmi Hooks 原生支持 |
| 维护状态 | 维护中 | 活跃开发 |

**实现功能**

- 🔐 多钱包连接（MetaMask、WalletConnect 等）
- 🌐 自动网络检测与一键切换
- ✍️ 链上留言发送与状态追踪
- 📖 留言列表展示与分页
- 📊 实时合约信息展示
- 🎨 现代化响应式 UI
- 🔔 完善的错误处理与通知系统

**在线演示**

- 🚀 **在线体验**: [https://messageboard-modern-dapp.vercel.app/](https://messageboard-modern-dapp.vercel.app/)
- 📦 **源代码**: [GitHub - messageboard-modern-dapp](https://github.com/huahuahua1223/messageboard-modern-dapp)
- 📄 **合约地址**: [`0xfD3fd6Dc8Ba106C6626B4c1504B4CA4Db986Dd14`](https://sepolia.etherscan.io/address/0xfD3fd6Dc8Ba106C6626B4c1504B4CA4Db986Dd14#code) (Sepolia - 已开源验证)

![项目界面展示](../images/solidity-intern/messageboard-modern-dapp-screenshot.png)

#### 3.2 核心代码实现

本节重点介绍 Viem 和 Wagmi 的核心用法，展示与 Web3.js 的差异。

##### 3.2.1 Wagmi 配置

Wagmi 是基于 Viem 的 React Hooks 库，提供开箱即用的区块链交互功能。

**配置 Wagmi (`src/config/wagmi.ts`)**

```typescript
import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

// WalletConnect Project ID (在 https://cloud.walletconnect.com/ 注册)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(), // MetaMask 等浏览器插件钱包
    walletConnect({ 
      projectId,
      metadata: {
        name: "MessageBoard Dapp",
        description: "A modern Web3 message board",
        url: "https://messageboard-modern-dapp.vercel.app",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
      },
    }),
  ],
  transports: {
    [sepolia.id]: http(), // 使用公共 RPC
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
```

**关键优势**：
- 支持多种钱包连接器（MetaMask、WalletConnect、Coinbase Wallet 等）
- 自动处理网络切换和钱包状态
- 完整的 TypeScript 类型支持

##### 3.2.2 钱包连接实现

**使用 RainbowKit（推荐）**

RainbowKit 提供美观的钱包连接 UI，开箱即用：

```tsx
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config/wagmi";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* 一行代码实现钱包连接按钮 */}
          <ConnectButton />
          
          {/* 你的应用组件 */}
          <YourAppComponents />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
```

**对比 Web3.js 的优势**：
- ❌ Web3.js：需要手动实现钱包检测、连接、状态管理
- ✅ Viem + Wagmi + RainbowKit：一行代码搞定所有功能

##### 3.2.3 读取合约数据

**使用 Wagmi 的 `useReadContract` Hook**

```typescript
import { useReadContract } from "wagmi";
import { MESSAGE_BOARD_ADDRESS, MESSAGE_BOARD_ABI } from "../config/contract";

function MessageCount({ address }: { address: Address }) {
  // 读取指定地址的留言数量
  const { data: count, isLoading, error } = useReadContract({
    address: MESSAGE_BOARD_ADDRESS,
    abi: MESSAGE_BOARD_ABI,
    functionName: "getMessageCount",
    args: [address],
  });

  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>读取失败: {error.message}</div>;

  return <div>留言总数: {count?.toString()}</div>;
}
```

**核心特点**：
- 自动处理加载状态 (`isLoading`)
- 自动处理错误 (`error`)
- 自动重试和缓存
- 完整的 TypeScript 类型推断

**对比 Web3.js**：

```javascript
// Web3.js 需要手动处理这些逻辑
const [count, setCount] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchCount() {
    setLoading(true);
    try {
      const result = await contract.methods.getMessageCount(address).call();
      setCount(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  fetchCount();
}, [address]);
```

Wagmi 将所有这些逻辑封装成一个 Hook，大幅简化代码。

##### 3.2.4 写入合约数据（发送交易）

**使用 Wagmi 的 `useWriteContract` 和 `useWaitForTransactionReceipt`**

```typescript
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { MESSAGE_BOARD_ADDRESS, MESSAGE_BOARD_ABI } from "../config/contract";

function MessageForm() {
  const [message, setMessage] = useState("");

  // 写入合约
  const { 
    writeContract, 
    data: hash,
    isPending,
    error 
  } = useWriteContract();

  // 等待交易确认
  const { 
    isLoading: isConfirming,
    isSuccess 
  } = useWaitForTransactionReceipt({ 
    hash 
  });

  // 发送留言
  const handleSubmit = () => {
    writeContract({
      address: MESSAGE_BOARD_ADDRESS,
      abi: MESSAGE_BOARD_ABI,
      functionName: "leaveMessage",
      args: [message],
    });
  };

  return (
    <div>
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="写下你的留言..."
        disabled={isPending || isConfirming}
      />
      
      <button 
        onClick={handleSubmit}
        disabled={!message || isPending || isConfirming}
      >
        {isPending && "等待钱包确认..."}
        {isConfirming && "交易确认中..."}
        {!isPending && !isConfirming && "发送留言"}
      </button>

      {isSuccess && (
        <div className="success">
          ✅ 留言成功！
          <a 
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            target="_blank"
          >
            查看交易
          </a>
        </div>
      )}

      {error && (
        <div className="error">
          ❌ 交易失败: {error.message}
        </div>
      )}
    </div>
  );
}
```

**交易状态流程**：
1. `isPending`: 等待用户在钱包中确认
2. `isConfirming`: 交易已发送，等待区块链确认
3. `isSuccess`: 交易成功确认
4. `error`: 发生错误（用户拒绝、Gas 不足等）

**对比 Web3.js**：

```javascript
// Web3.js 需要手动管理所有状态
const handleSubmit = async () => {
  try {
    setStatus('pending');
    const tx = await contract.methods.leaveMessage(message).send({
      from: account
    });
    
    setStatus('confirming');
    // 需要手动轮询交易状态
    const receipt = await waitForReceipt(tx.transactionHash);
    
    setStatus('success');
    setHash(tx.transactionHash);
  } catch (error) {
    setStatus('error');
    setError(error);
  }
};
```

Wagmi 自动处理所有状态转换，代码更简洁可靠。

##### 3.2.5 网络切换

**使用 `useSwitchChain` Hook**

```typescript
import { useChainId, useSwitchChain } from "wagmi";
import { sepolia } from "wagmi/chains";

function NetworkSwitcher() {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const isWrongNetwork = chainId !== sepolia.id;

  if (!isWrongNetwork) {
    return (
      <div className="network-badge success">
        ✅ Sepolia 测试网
      </div>
    );
  }

  return (
    <div className="network-badge warning">
      ⚠️ 错误的网络
      <button onClick={() => switchChain({ chainId: sepolia.id })}>
        切换到 Sepolia
      </button>
    </div>
  );
}
```

**一键切换网络**，无需手动配置网络参数。

#### 3.3 完整项目结构

```
messageboard-modern-dapp/
├── src/
│   ├── components/          # React 组件
│   │   ├── ContractInfo.tsx      # 合约信息展示
│   │   ├── LoadingSpinner.tsx    # 加载动画
│   │   ├── MessageForm.tsx       # 留言表单
│   │   ├── MessageItem.tsx       # 单条留言
│   │   ├── MessageList.tsx       # 留言列表
│   │   ├── NetworkSwitcher.tsx   # 网络切换
│   │   └── Toast.tsx             # 通知组件
│   ├── hooks/               # 自定义 Hooks
│   │   ├── useMessageBoard.ts    # 封装合约交互逻辑
│   │   └── useToast.ts           # Toast 通知
│   ├── config/              # 配置文件
│   │   ├── wagmi.ts             # Wagmi 配置
│   │   └── contract.ts          # 合约 ABI 和地址
│   ├── utils/               # 工具函数
│   │   ├── constants.ts         # 常量定义
│   │   └── formatters.ts        # 格式化函数
│   └── App.tsx              # 主应用
├── package.json
└── README.md
```

#### 3.4 本地运行指南

**1. 克隆项目**

```bash
git clone https://github.com/huahuahua1223/messageboard-modern-dapp.git
cd messageboard-modern-dapp
```

**2. 安装依赖**

```bash
pnpm install
```

**3. 配置环境变量**

创建 `.env` 文件：

```env
# WalletConnect Project ID (在 https://cloud.walletconnect.com/ 注册)
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here

# 合约地址（已部署，可直接使用）
VITE_CONTRACT_ADDRESS=0xfD3fd6Dc8Ba106C6626B4c1504B4CA4Db986Dd14

# Sepolia RPC URL（可选，使用公共 RPC）
VITE_SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
```

**4. 启动开发服务器**

```bash
pnpm dev
```

访问 `http://localhost:5173` 即可查看应用。

**5. 使用步骤**

1. 点击右上角 "Connect Wallet" 连接钱包
2. 确保在 Sepolia 测试网（如果不是，点击"切换到 Sepolia"）
3. 在左侧表单输入留言内容
4. 点击"发送留言"并在钱包中确认交易
5. 等待约 10-20 秒，留言将出现在右侧列表

#### 3.5 技术要点总结

##### 为什么选择 Viem 和 Wagmi？

**1. 性能优异**
- Viem 比 Web3.js 快 2-10 倍
- 包体积仅为 Web3.js 的 1/10
- 支持 Tree-shaking，打包体积更小

**2. 类型安全**
- 完整的 TypeScript 支持
- 自动推断 ABI 类型
- 编译时就能发现错误

**3. 开发体验**
- Wagmi Hooks 简化状态管理
- RainbowKit 提供开箱即用的钱包 UI
- 自动处理重试、缓存、错误

**4. 现代化架构**
- 函数式 API 设计
- 与 React 生态完美集成
- 活跃的社区和文档

##### 核心概念对比

**钱包连接**

| Web3.js | Viem + Wagmi |
|---------|--------------|
| 需要手动检测 `window.ethereum` | 自动检测，支持多钱包 |
| 手动管理连接状态 | `useAccount` Hook 自动管理 |
| 需要自己实现 UI | RainbowKit 开箱即用 |

**读取数据**

| Web3.js | Viem + Wagmi |
|---------|--------------|
| `contract.methods.xxx().call()` | `useReadContract({ functionName: "xxx" })` |
| 手动处理加载和错误状态 | 自动提供 `isLoading`、`error` |
| 需要自己实现缓存 | 自动缓存和重新验证 |

**写入数据**

| Web3.js | Viem + Wagmi |
|---------|--------------|
| `contract.methods.xxx().send()` | `writeContract({ functionName: "xxx" })` |
| 手动轮询交易状态 | `useWaitForTransactionReceipt` 自动等待 |
| 手动处理错误 | 自动捕获并分类错误 |

##### 学习建议

1. **从 Hooks 开始学习**
   - `useAccount` - 获取钱包信息
   - `useReadContract` - 读取合约数据
   - `useWriteContract` - 写入合约数据
   - `useWaitForTransactionReceipt` - 等待交易确认

2. **理解 React Query 的作用**
   - Wagmi 基于 TanStack Query（React Query）
   - 理解缓存、重新验证、乐观更新等概念
   - 掌握 `queryKey` 和 `staleTime` 的使用

3. **阅读官方文档**
   - [Viem 文档](https://viem.sh)
   - [Wagmi 文档](https://wagmi.sh)
   - [RainbowKit 文档](https://www.rainbowkit.com)

4. **参考示例项目**
   - 本项目的完整源代码
   - Wagmi 官方示例
   - 其他优秀的开源 Dapp

#### 3.6 常见问题

**Q: 这个示例和上一节的 Web3.js 示例有什么区别？**

A: 主要区别在技术栈和开发体验：
- **技术栈**: Web3.js → Viem + Wagmi + RainbowKit
- **性能**: 更快的运行速度，更小的包体积
- **类型安全**: 完整的 TypeScript 支持
- **开发效率**: Hooks 大幅简化代码
- **用户体验**: RainbowKit 提供专业的钱包连接 UI

两个示例功能相同，可以对比学习，选择适合你项目的技术栈。

**Q: 我应该学习哪个？Web3.js 还是 Viem？**

A: 
- **新项目**: 强烈推荐 Viem + Wagmi
- **维护老项目**: 可能需要继续使用 Web3.js
- **学习建议**: 两者都了解，重点掌握 Viem

**Q: RainbowKit 是必需的吗？**

A: 不是必需的，但强烈推荐：
- 它提供开箱即用的钱包连接 UI
- 支持多种钱包（MetaMask、WalletConnect、Coinbase Wallet 等）
- 节省大量开发时间
- 你也可以使用其他方案，如 ConnectKit、Web3Modal

**Q: 如何在生产环境中使用？**

A:
1. 将合约部署到主网
2. 修改 `wagmi.ts` 中的 chain 配置
3. 配置自己的 RPC 节点（Alchemy、Infura 等）
4. 进行充分的测试
5. 部署到 Vercel、Netlify 等平台

**Q: 性能优化建议？**

A:
- 使用 `React.memo` 避免不必要的重渲染
- 合理配置 Wagmi 的 `staleTime` 和 `cacheTime`
- 使用虚拟滚动处理大列表
- 懒加载非关键组件
- 使用 CDN 加速静态资源

---

### 4. 扩展阅读

- [Viem 官方文档](https://viem.sh)
- [Wagmi 官方文档](https://wagmi.sh)
- [RainbowKit 官方文档](https://www.rainbowkit.com)
- [Viem 迁移指南](https://viem.sh/docs/migration-guide.html)
- [Web3 开发最佳实践](https://ethereum.org/en/developers/docs/)

## 九、高阶内容

### 1. Gas 优化

::: note 基本原理与计量单位

- Gas 是 EVM 执行操作的单位。每条指令消耗固定的 gas。
- 优化目标是减少交易所需的总 gas，提高用户体验并降低成本。
  :::

#### ==常见优化技巧==

::: steps

1. **减少存储操作（Storage Write）**

   - 读取存储第一次需 2100 gas（后续 100 gas），而内存读取仅 3 gas。推荐多次访问同一存储数据时，将其缓存到内存以减少 SLOAD 次数
   - 每次写入 `storage` 的成本高达 20,000 gas；优先使用 `memory`。
   - 示例：

     ```
     // ❌ 非优化写法
     mapping(address => uint256) public balances;
     function deposit() public payable {
         balances[msg.sender] += msg.value;
     }

     // ✅ 优化写法（一次读，一次写）
     function deposit() public payable {
         uint256 current = balances[msg.sender];
         balances[msg.sender] = current + msg.value;
     }
     ```

2. **使用位压缩（Bit Packing）**

   - 将多个变量压缩到一个 `uint256` 中以节省存储空间。
   - 示例：

     ```
     struct Packed {
         uint128 a;
         uint128 b;
     }
     ```

3. **循环优化**

   - 减少不必要的运算，如 `array.length` 缓存到变量中。
   - 示例：

     ```
     // ❌ 非优化
     for (uint256 i = 0; i < arr.length; i++) {
         ...
     }
     // ✅ 优化
     uint256 len = arr.length;
     for (uint i = 0; i < len; ++i) {
         ...
     }
     ```

4. **函数可见性选择** - `external` 比 `public` 更节省 gas，适用于仅被外部调用的函数。
   :::

### 2. 合约安全

<!-- - 安全漏洞库（reentrancy、oracle manipulation） -->

::: note 安全设计原则

- 最小权限原则（Least Privilege）
- 模块化结构便于审计
- 显式错误处理与事件记录
  :::

#### ==常见漏洞类型与防护==

::: steps

1. **重入攻击 Reentrancy**

   - 利用外部合约在 fallback 中重新调用原函数。历史上最著名的 The DAO 事件便因重入漏洞导致约 6000 万美元 ETH 被盗，最终造成以太坊社区分裂（形成 ETH/ETC 链）。
   - 防护方法：先更新状态，再转账。
   - 示例：

     ```
     // ❌ 有漏洞
     function withdraw() public {
         require(balance[msg.sender] > 0);
         (bool sent,) = msg.sender.call{value: balance[msg.sender]}("");
         require(sent);
         balance[msg.sender] = 0;
     }

     // ✅ 修复后
     function withdraw() public {
         uint256 amount = balance[msg.sender];
         balance[msg.sender] = 0;
         (bool sent,) = msg.sender.call{value: amount}("");
         require(sent);
     }
     ```

2. **预言机操纵 Oracle Manipulation**
   - 依赖外部价格源的不可信更新。
   - 解决方法：
     - 使用 Chainlink 等权威价格源。
     - 增加时序约束和多源验证。
     - 使用 TWAP 等加权算法。
3. **整数溢出/下溢**
   - 使用 `unchecked {}` 时需确保逻辑安全。
   - 推荐使用Solidity 0.8+ 的内建溢出检查或 `SafeMath`。
4. **权限控制缺失**
   - 所有管理函数应使用 `onlyOwner` 或 `AccessControl` 修饰符保护。
5. **未初始化代理**

   - 基于代理模式的合约若未正确执行初始化函数，可能被任意人初始化并接管合约。
   - 著名的例子包括 Harvest Finance 其在使用 Uniswap V3 做市策略的 Vault 合约中存在未初始化漏洞，如果被利用攻击者可销毁实现合约。该团队曾为此漏洞支付高额赏金修复。

6. **前置交易/三明治攻击**
   - 攻击者在交易执行前后分别发送交易，以不利滑点或套利为目的。
   - 例如 2025 年 3 月，一名用户在 Uniswap V3 的稳定币兑换中遭遇三明治攻击，约 21.5 万美元的 USDC 兑换几乎被抢跑，损失了 98% 的资金

:::

### 3. 智能合约审计

::: note 审计必要性

- 智能合约一旦部署无法修改，审计是风险控制关键手段。
- 资金安全：避免用户资产被盗。
- 法律合规：一些监管要求必须审计证明。
  :::

#### 3.1 常见的合约审计工具

- **Slither**：以 Python 编写的静态分析工具，可检测安全漏洞和代码规范问题
  - 常用命令为 `slither MyContract.sol`（也可指定合约地址）来扫描合约代码
  - 使用方式：[Slither 官方文档](https://github.com/crytic/slither) - https://github.com/crytic/slither
- **MythX**：基于云平台的安全分析服务，支持命令行和 API 调用
  - 使用 CLI 时，可执行类似 `mythx analyze MyContract.sol` 进行安全扫描
  - 使用方式：[github.com](https://github.com/ConsenSysDiligence/mythx-cli) - https://github.com/ConsenSysDiligence/mythx-cli
- **Foundry**：高效的 Solidity 开发测试框架，支持属性测试（模糊测试）。
  - 可使用 `forge test` 运行所有测试
  - 使用方式：[Foundry 模糊测试文档](https://book.getfoundry.sh/forge/fuzz-testing) - https://book.getfoundry.sh/forge/fuzz-testing，或通过 `forge test --match-path <test 文件路径>` 定向运行特定测试文件。

#### 3.2 审计标准流程

![Solidity 审计流程](../images/solidity-intern/solidity_audit-process_01.jpg)

1. **静态分析（Static Analysis）**：使用工具如 Slither、Mythril 扫描代码缺陷
2. **动态测试（Fuzzing/Property Testing）**：模拟攻击行为和极限条件
3. **人工审查（Manual Review）**：由资深审计员检查业务逻辑漏洞
4. **审计报告生成（Audit Report）**：明确发现的问题及修复建议

#### 3.3 知名审计机构比较

| 机构                | 特点                     | 项目经验           |
| ------------------- | ------------------------ | ------------------ |
| 慢雾科技            | 国内领先，注重攻击复现   | EOS、币安、火币等  |
| OpenZeppelin        | 社区信赖度高，基础库作者 | Compound、Balancer |
| ConsenSys Diligence | 精通以太坊底层原理       | Uniswap、1inch     |

### 4. **开发协作规范**

#### 4.1 GitHub 工作流

![GitHub 工作流程](../images/solidity-intern/github_workflow_01.png)
::: steps

- 分支策略：
  - **主分支 (main/master)**：始终保持可部署状态，任何代码合并前必须经过测试与审查。
  - **开发分支 (develop)**：用于日常功能开发，作为 feature 分支的合并目标。
  - **功能分支 (feature/xxx)**：以 `feature/功能描述` 命名，完成后合并至 develop 分支。
  - **修复分支 (fix/xxx)**：针对 bug 的修复，以 `fix/bug-name` 命名，优先合并到 develop 或 main。
  - **发布分支 (release/xxx)**：用于发布前准备，如版本打包、测试等，合并后删除。
- 提交信息规范

  - 使用简洁明确的提交信息，推荐格式：

    ```
    类型: 简要描述

    说明：可选的详细信息、动机、对比等
    Issue：关联的 Issue 编号（如有）
    ```

  - 类型包括：
    - `feat`: 新功能
    - `fix`: 修复问题
    - `docs`: 文档更新
    - `refactor`: 代码重构
    - `test`: 添加或修改测试
    - `chore`: 构建过程或辅助工具变动

- Pull Request（PR）流程

  - 每个功能或修复应新建一个分支
  - 提交 PR 前需确保：

    - 本地通过所有测试
    - 通过 ESLint 或其他静态检查工具
    - 包含必要的文档或注释
    - PR 标题应简洁明了，描述改动内容
    - 不允许合并自己创建的 PR，需至少一位 reviewer 审查通过
    - 可在项目仓库中添加 `PULL_REQUEST_TEMPLATE.md` 文件，可统一 PR 描述格式，提升协作效率。例如：

      ```jsx
      ## PR 说明
      - 变更内容：简要描述此次 PR 完成了哪些功能或修复了哪些问题。
      - 关联 Issue：填写相关 Issue 编号（如无可留空）。
      - 主要改动：列出代码改动的关键点，如新增哪些函数、修改哪些逻辑等。
      - 测试情况：说明已编写或执行了哪些测试来验证改动。
      - 影响评估：列出可能影响的模块或兼容性问题（如版本依赖）。
      ```

    - PR 标题应简洁表达功能，如 `feat: 添加 staking 功能`
    - Code Review 检查清单（代码评审时可按以下要点逐项检查）：

      ```
      - 代码是否符合风格规范，命名清晰、可读性高？
      - 业务逻辑是否正确，边界情况和异常情况是否处理周全？
      - 安全性检查：是否考虑重入、整数溢出、权限校验、外部调用等风险？
      - Gas 消耗：是否避免了不必要的存储操作或大循环？
      - 是否增加了足够的注释和文档说明？是否存在未使用的代码或死代码？
      - 是否编写了充分的单元测试覆盖常见场景和极端情况？
      ```

  :::

#### 4.2 Issue 管理

![Issue 管理流程](../images/solidity-intern/issue_management-process_01.jpg)

- 描述 Issue 结构推荐：背景 + 问题 + 尝试过的方法 + 环境信息

  - 示例：

    ```
    ### 问题描述
    执行 `forge test` 时出现 `out of gas` 错误

    ### 环境
    - Foundry 版本: 0.2.0
    - Solidity: 0.8.21
    ```

- Issue 标签分类标准与自动化：
  - 制定统一的 Issue 标签规则，例如使用 `bug`（缺陷）、`enhancement`（增强）、`security`（安全）、`documentation`（文档）、`question`（问题）等标签；
  - 根据需求添加 `high-priority`、`low-priority`、`help wanted` 等。
  - 通过 GitHub Actions 等自动化工具，还可自动为新 Issue 或 PR 添加标签（如根据文件路径、标题关键字匹配标签）、标记长期未更新的 Issue 为 `stale` 等，减少人工维护成本。

#### 4.3 开源协作礼仪

- 所有代码变更需配测试和文档
- 保持沟通公开透明：Prefer PR 评论而不是私信
- 使用讨论区（Discussion）提重大设计变更

### 5. Layer 2 解决方案

#### 5.1 Rollup 技术比较

| 项目类型          | 原理           | 优点                   | 缺点                        |
| ----------------- | -------------- | ---------------------- | --------------------------- |
| Optimistic Rollup | 设定欺诈证明期 | EVM 兼容性强，成本低   | 提现延迟（1~2 周）          |
| ZK Rollup         | 零知识证明     | 安全性高，支持快速提现 | 开发难度大，不完全 EVM 兼容 |

#### 5.2 主流 L2 平台概览

1. **Starknet**
   - 语言：类 Rust 语言 Cairo（非 Solidity）
   - 特点：ZK-STARK，极高扩展性
2. **zkSync**
   - 工具链：支持 Solidity 合约
   - 特点：ZK Rollup，开发体验佳
3. **Arbitrum**
   - Optimistic 架构
   - 特点：兼容 EVM 工具链，如 Hardhat/Foundry
4. **Base**
   - Coinbase 推出，构建于 OP Stack 上
   - 特点：强生态支持，开发成本低

#### 5.3 开发入门指南

**1. 环境准备**

- 安装与配置：基于目标平台选择相应 SDK，如 zkSync CLI、Starknet CLI
- 网络设置：区分 L1 与 L2 的 RPC 端点与钱包配置（如 MetaMask L2 网络）
- Devnet 本地测试：如 Starknet Devnet、zkSync Dev Node、Hardhat L2 plugin

**2. 合约部署注意事项**

- 部分平台不支持 `CREATE2` 或存在 Gas 上限差异
- 使用平台特定部署脚本，如 zkSync 的 `deploy()` 命令或 `hardhat starknet deploy`
- 考虑合约地址推导方式变化（例如 zkRollup 平台不保证地址一致性）

**3. 跨链交互与桥接**

- 使用官方桥接器：如 zkSync Bridge、Arbitrum Bridge
- 第三方跨链协议支持：LayerZero、Axelar、Wormhole 等
- 跨链消息时延、费用需事先评估

**4. 案例推荐（可拓展）**

- zkSync：Uniswap V3 fork 实践部署体验
- Starknet：使用 Cairo 构建 NFT 合约与前端交互
- Arbitrum：使用 Nitro 模式构建 Gas 竞拍逻辑 -->

<!-- ## ::eos-icons:application-outlined /#32b2f0::扩展阅读
[1]  -->

## ::ep:avatar /#32b2f0::文章贡献者

作者：[Jason](https://x.com/fxxkmystyle)、[Echo](https://x.com/Echo_liuchan)  
排版：[Echo](https://x.com/Echo_liuchan)  
校对：[Bruce](https://x.com/brucexu_eth)、[Box](https://x.com/BoxMrChen)
