import{_ as s,c as i,o as t,a3 as a}from"./chunks/framework.BsqFfzsZ.js";const g=JSON.parse('{"title":"SnowflakeId 配置","description":"","frontmatter":{},"headers":[],"relativePath":"reference/config/snowflake.md","filePath":"reference/config/snowflake.md","lastUpdated":1719104899000}'),e={name:"reference/config/snowflake.md"},d=a(`<h1 id="snowflakeid-配置" tabindex="-1">SnowflakeId 配置 <a class="header-anchor" href="#snowflakeid-配置" aria-label="Permalink to &quot;SnowflakeId 配置&quot;">​</a></h1><blockquote><p><code>me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties</code></p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>enabled</td><td><code>boolean</code></td><td>是否启用</td><td><code>false</code></td></tr><tr><td>zone-id</td><td><code>String</code></td><td>时区</td><td><code>ZoneId.systemDefault().getId()</code></td></tr><tr><td>epoch</td><td><code>long</code></td><td>EPOCH</td><td><code>CosId.COSID_EPOCH</code> <br> (UTC 2019-12-24 16:00)</td></tr><tr><td>machine</td><td><code>Machine</code></td><td>机器号分配器配置</td><td></td></tr><tr><td>share</td><td><code>IdDefinition</code></td><td>共享ID生成器配置</td><td>有</td></tr><tr><td>provider</td><td><code>Map&lt;String, IdDefinition&gt;</code></td><td>多ID生成器配置</td><td><code>null</code></td></tr></tbody></table><h2 id="iddefinition" tabindex="-1">IdDefinition <a class="header-anchor" href="#iddefinition" aria-label="Permalink to &quot;IdDefinition&quot;">​</a></h2><blockquote><p><code>me.ahoo.cosid.spring.boot.starter.snowflake.SnowflakeIdProperties.IdDefinition</code></p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>clock-sync</td><td><code>boolean</code></td><td>是否开启时钟同步</td><td><code>true</code></td></tr><tr><td>friendly</td><td><code>boolean</code></td><td>是否启用<code>SnowflakeFriendlyId</code></td><td><code>true</code></td></tr><tr><td>timestamp-unit</td><td><code>IdDefinition.TimestampUnit</code></td><td>时间戳位的单位：<code>SECOND</code> / <code>MILLISECOND</code></td><td><code>TimestampUnit.MILLISECOND</code></td></tr><tr><td>epoch</td><td><code>int</code></td><td>EPOCH</td><td><code>cosid.snowflake.epoch</code></td></tr><tr><td>timestamp-bit</td><td><code>int</code></td><td>时间戳位数</td><td>41</td></tr><tr><td>machine-bit</td><td><code>int</code></td><td>机器位数</td><td><code>cosid.snowflake.machine.machine-bit</code></td></tr><tr><td>sequence-bit</td><td><code>int</code></td><td>序列位数</td><td>12</td></tr><tr><td>converter</td><td><code>IdConverterDefinition</code></td><td>Id转换器配置</td><td></td></tr></tbody></table><p><strong>YAML 配置样例</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cosid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${spring.application.name}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  snowflake</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    zone-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    epoch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1577203200000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    share</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      clock-sync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      friendly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      short_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        converter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cosid_</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">radix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          radix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            char-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            pad-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      safe-js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        machine-bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        sequence-bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span></span></code></pre></div>`,8),n=[d];function h(l,p,k,o,r,c){return t(),i("div",null,n)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
