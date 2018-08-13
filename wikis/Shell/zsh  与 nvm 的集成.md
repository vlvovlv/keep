遇到一个问题，`nvm` 设置 `alias default` 后新建窗口使用的仍然是 `system`。

查阅 [nvm 的文档](https://github.com/creationix/nvm)

使用以下设置解决此问题：

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

同时，在 `home` 目录下新建 `.nvmrc`，写入你想要默认使用的文本：

```bash
echo v10.4.0 > ~/.nvmrc
```

那么每次新打开命令行可以看到如：

```bash
Found '/Users/xxx/.nvmrc' with version <v10.4.0>
Now using node v10.4.0 (npm v6.1.0)
```

的提示信息。
