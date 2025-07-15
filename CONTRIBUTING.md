# 贡献指南 📝

感谢你对 Web3 实习手册的关注！我们非常欢迎社区成员的贡献，一起让这个项目变得更好。

## 🎯 贡献方式

我们欢迎以下类型的贡献：

- 📚 **内容贡献**：添加新内容、完善现有章节
- 🐛 **错误修正**：修复错别字、技术错误、链接失效
- 💡 **建议反馈**：提出改进建议、新功能想法
- 🌍 **翻译贡献**：帮助翻译内容（未来）
- 🎨 **设计优化**：改进页面布局、用户体验
- 📖 **案例分享**：分享实习经验、面试经历

## 🚀 快速开始

### 1. 环境准备

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/your-username/Web3-Internship-Handbook.git
cd Web3-Internship-Handbook

# 2. 安装依赖
npm install

# 3. 启动本地服务
npm run docs:dev
```

### 2. 创建分支

```bash
# 从 main 分支创建新分支
git checkout -b feature/your-feature-name

# 例如：
git checkout -b content/add-defi-tutorial
git checkout -b fix/typo-in-ethereum-chapter
```

### 3. 进行修改

- 📝 编辑相关的 Markdown 文件
- 🖼️ 如需添加图片，请放在 `docs/web3-handbook/images/` 对应目录
- 🔗 确保所有链接正确有效

### 4. 提交更改

```bash
# 添加修改的文件
git add .

# 提交更改（请使用描述性的提交信息）
git commit -m "feat: add new content"

# 推送到你的 fork
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request

1. 访问 GitHub 上的原仓库
2. 点击 "New Pull Request"
3. 选择你的分支
4. 填写 PR 描述（参考下面的模板）
5. 提交 PR

## 📋 Pull Request 模板

请在创建 PR 时使用以下模板：

```markdown
## 🎯 改动概述

简要描述你的更改内容

## 📝 详细说明

- [ ] 添加了什么新内容
- [ ] 修复了什么问题
- [ ] 改进了什么功能

## 🧪 测试确认

- [ ] 本地构建成功 (`npm run docs:build`)
- [ ] 本地预览正常 (`npm run docs:dev`)
- [ ] 检查了所有链接
- [ ] 检查了图片显示

## 📸 截图（如适用）

如果有 UI 改动，请提供截图

## 💭 其他说明

其他需要说明的内容
```

## ✅ 内容标准

### 文档规范

1. **语言风格**

   - 使用简洁、易懂的语言
   - 避免过于技术化的术语，或提供解释
   - 保持友好、包容的语调

2. **格式要求**

   - 使用标准的 Markdown 语法
   - 代码块请指定语言类型
   - 图片请添加有意义的 alt 文本
   - 链接请使用描述性文字

3. **内容质量**
   - 信息准确、时效性强
   - 提供实际可操作的指导
   - 包含具体的示例和截图
   - 添加适当的警告和提示

### 代码示例

```solidity
// ✅ 好的代码示例
pragma solidity ^0.8.0;

/**
 * @title 简单的代币合约
 * @dev 这是一个用于教学的基础代币合约
 */
contract SimpleToken {
    string public name = "Learning Token";
    // ... 其他代码
}
```

```javascript
// ✅ 好的 JavaScript 示例
const Web3 = require('web3');

// 连接到以太坊节点
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');

// 获取最新区块
async function getLatestBlock() {
  try {
    const block = await web3.eth.getBlock('latest');
    console.log('最新区块号:', block.number);
  } catch (error) {
    console.error('获取区块失败:', error);
  }
}
```

### 图片规范

1. **文件命名**

   - 使用有意义的英文名称
   - 格式：`{章节}_{描述}_{序号}.png`
   - 例如：`defi_uniswap-interface_01.png`

2. **文件要求**

   - 格式：PNG 或 JPG
   - 分辨率：建议 1200px 宽度以内
   - 大小：单个文件不超过 500KB

3. **存放位置**
   ```
   docs/web3-handbook/images/
   ├── part1/          # 第一部分图片
   ├── part2/          # 第二部分图片
   ├── part3/          # 第三部分图片
   ├── part4/          # 第四部分图片
   └── part5/          # 第五部分图片
   ```

## 🎨 样式指南

### Markdown 增强语法

我们使用 VuePress Plume 主题，支持以下增强语法：

````markdown
<!-- 提示框 -->

::: tip 💡 提示
这是一个有用的提示信息
:::

::: warning ⚠️ 注意
这是需要注意的信息
:::

::: danger 🚨 警告
这是重要的警告信息
:::

<!-- 代码组 -->

::: code-group

```javascript [Web3.js]
const web3 = new Web3(provider);
```
````

```python [Web3.py]
from web3 import Web3
web3 = Web3(provider)
```

:::

<!-- 步骤 -->

::: steps

1. 第一步
2. 第二步
3. 第三步
   :::

```

## 📚 内容建议

### 优先需要的内容

1. **实战教程**
   - 完整的 Dapp 开发教程
   - 智能合约部署指南
   - 前端集成示例

2. **案例研究**
   - 真实项目分析
   - 成功/失败案例
   - 最佳实践总结

3. **工具指南**
   - 开发工具使用教程
   - 调试技巧分享
   - 效率提升方法

4. **行业洞察**
   - 最新趋势分析
   - 技术发展预测
   - 职业发展建议

### 内容组织原则

- **渐进式学习**：从基础到高级
- **实用导向**：注重实际应用
- **案例丰富**：提供具体示例
- **时效性强**：保持内容更新

## 🤝 社区规范

### 行为准则

- 🤝 **友善包容**：尊重所有贡献者
- 💬 **建设性沟通**：提供有用的反馈
- 📚 **分享知识**：乐于帮助他人学习
- 🔄 **持续改进**：接受并提供改进建议

### 讨论参与

- **GitHub Issues**：用于报告问题、提出建议
- **Pull Request**：用于代码和内容贡献
- **Discussions**：用于社区讨论和问答

## 🏆 贡献者认可

### 贡献等级

- 🌟 **新手贡献者**：首次提交被合并
- 🚀 **活跃贡献者**：多次提交有价值的内容
- 💎 **核心贡献者**：长期维护和重大贡献
- 👑 **维护者**：项目核心维护团队

### 认可方式

- 在贡献者页面展示
- 特殊徽章和标识
- 社交媒体宣传
- 社区活动邀请

## 📞 获取帮助

如果你在贡献过程中遇到任何问题，欢迎通过以下方式获取帮助：

- 💬 **Telegram**：[ETHPanda](https://t.me/ETHPandaOrg) | [LXDAO](https://t.me/LXDAO)
- 🐛 **GitHub Issues**：[提交问题](https://github.com/ethpanda-org/Web3-Internship-Handbook/issues)

---

**再次感谢你的贡献！每一个贡献都让 Web3 教育变得更好。** 🙏

*让我们一起建设一个更好的 Web3 学习社区！*
```
