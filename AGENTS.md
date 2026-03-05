# Repository Maintenance Playbook

## 目标
- 维护 `Web3-Internship-Handbook` 文档的**准确性、时效性、可读性**。
- 对 open issues / open PR 做到**逐条处理**（采纳、部分采纳、拒绝都要有理由）。
- 保持简体（`docs/zh`）与繁体（`docs/zh-TW`）核心内容尽量同步。

## 一键维护（给 Agent 的执行顺序）
1. 同步主分支并读取项目目标
   - `git checkout main && git pull --ff-only`
   - 阅读 `README.md`、`docs/README.md`、`docs/zh/README.md`、`docs/zh-TW/README.md`
2. 拉取待处理队列
   - `gh issue list --state open --limit 200 --json number,title,body,url,createdAt,updatedAt`
   - `gh pr list --state open --limit 200 --json number,title,body,url,createdAt,updatedAt,files,additions,deletions`
3. 逐条审查与决策（必须给出理由）
   - 评估维度：是否符合手册目标、事实是否准确、是否双语一致、是否引入维护负担、是否有更优替代方案
4. 实施修复
   - 对采纳或部分采纳内容，直接在 `main` 落地
   - 优先小步改动，保持章节结构稳定
5. 本地验证
   - `npm ci`
   - `npm run docs:build`
6. 发布与线上检查
   - 触发并确认 `Deploy Docs` 工作流成功
     - `gh run list --workflow deploy-docs.yml --limit 5`
   - 检查 Pages 配置必须是 workflow 模式
     - `gh api repos/ethpanda-org/Web3-Internship-Handbook/pages --jq '{build_type: .build_type, status: .status}'`
     - 若 `build_type != "workflow"`，执行：
       - `gh api -X PUT repos/ethpanda-org/Web3-Internship-Handbook/pages -f build_type=workflow`
   - 回归验证关键历史链接（应返回 200 或跳转）
     - `/zh/start/`
     - `/zh/part3/Julie.html`
     - `/zh-tw/part2/community-intern.html`
     - `/zh-tw/part3/Julie.html`
7. 提交与推送
   - `git add -A && git commit -m "docs: <summary>" && git push origin main`
8. 关闭队列
   - 对每个 issue / PR 留下处理结论（含 commit）
   - 然后执行关闭
     - `gh issue close <num> --comment "<reason + commit>"`
     - `gh pr close <num> --comment "<adopted/partially adopted/not planned + reason + commit>"`
9. 收尾检查
   - `gh issue list --state open --limit 200`
   - `gh pr list --state open --limit 200`
   - 两者应为空或仅剩“有意保留”的条目

## 决策规则
- 可直接采纳：
  - 事实修正、错别字修复、链接失效修复、截图与文本不一致修复
- 部分采纳：
  - 方向正确但内容过长、来源不稳、与现有结构冲突
  - 采用“重写后合入”，并在 PR 评论说明“superseded by commit”
- 不采纳：
  - 与手册定位不符、技术结论不严谨、破坏现有视觉/结构基线、缺乏可验证来源

## 时效性检查清单
- 年份与季节信息（如“2025 冬季”）是否过时
- 招聘平台与官网域名是否失效或迁移
- 链上生态状态（网络升级、协议停运/迁移）是否有官方更新
- 所有“统计数字”是否仍可信；不确定时改成“趋势描述 + 官方链接”

## 输出要求
- 最终维护报告必须包含：
  - 本次修改文件清单
  - 构建验证结果
  - 每个 issue/PR 的处置结果（含链接）
  - 未处理风险与后续建议（如有）
