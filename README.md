# api-table-docs

api-table 使用文档：无需编写 SQL 的表级增删改查接口、查询条件与导出。

- 文档站：https://api-table.io.nexus/
- 项目源码：https://github.com/litongjava/api-table
- 拆分自 [tio-boot-docs](https://github.com/litongjava/tio-boot-docs)

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:check
pnpm docs:build
```

构建产物位于 `docs/.vuepress/dist`。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布。
