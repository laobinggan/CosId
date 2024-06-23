import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BsqFfzsZ.js";const c=JSON.parse('{"title":"ShardingSphere 配置","description":"","frontmatter":{},"headers":[],"relativePath":"reference/config/shardingsphere.md","filePath":"reference/config/shardingsphere.md","lastUpdated":1719104899000}'),n={name:"reference/config/shardingsphere.md"},e=t(`<h1 id="shardingsphere-配置" tabindex="-1">ShardingSphere 配置 <a class="header-anchor" href="#shardingsphere-配置" aria-label="Permalink to &quot;ShardingSphere 配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">维护说明</p><p><code>CosIdKeyGenerateAlgorithm</code>、<code>CosIdModShardingAlgorithm</code>、<code>CosIdIntervalShardingAlgorithm</code> 已合并至 <a href="https://github.com/apache/shardingsphere/pull/14132" target="_blank" rel="noreferrer">ShardingSphere</a> 官方，未来 <em><a href="https://github.com/Ahoo-Wang/CosId/tree/main/cosid-shardingsphere" target="_blank" rel="noreferrer">cosid-shardingsphere</a></em> 模块的维护可能会以官方为主。</p></div><h2 id="cosidkeygeneratealgorithm" tabindex="-1">CosIdKeyGenerateAlgorithm <a class="header-anchor" href="#cosidkeygeneratealgorithm" aria-label="Permalink to &quot;CosIdKeyGenerateAlgorithm&quot;">​</a></h2><blockquote><p>type: COSID</p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>id-name</td><td><code>String</code></td><td><code>IdGenerator</code> 的名称（在 <code>IdGeneratorProvider</code> 中已注册）</td><td><code>__share__</code></td></tr><tr><td>as-string</td><td><code>String</code></td><td>是否生成字符串类型的ID</td><td><code>fasle</code></td></tr></tbody></table><p><strong>YAML 配置样例</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shardingsphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sharding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        key-generators</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cosid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COSID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              id-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">__share__</span></span></code></pre></div><h2 id="cosidintervalshardingalgorithm" tabindex="-1">CosIdIntervalShardingAlgorithm <a class="header-anchor" href="#cosidintervalshardingalgorithm" aria-label="Permalink to &quot;CosIdIntervalShardingAlgorithm&quot;">​</a></h2><blockquote><p>type: COSID_INTERVAL</p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>logic-name-prefix</td><td><code>String</code></td><td>逻辑表/数据源名前缀</td><td></td></tr><tr><td>datetime-lower</td><td><code>String</code></td><td>时间分片下界值，时间戳格式：<code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td>datetime-upper</td><td><code>String</code></td><td>时间分片上界值，时间戳格式：<code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td>sharding-suffix-pattern</td><td><code>String</code></td><td>分片真实表/数据源后缀格式</td><td></td></tr><tr><td>datetime-interval-unit</td><td><code>ChronoUnit</code></td><td>分片键时间间隔单位</td><td></td></tr><tr><td>datetime-interval-amount</td><td><code>int</code></td><td>分片键时间间隔</td><td></td></tr><tr><td>ts-unit</td><td><code>String</code></td><td>时间戳单位：<code>SECOND</code>/<code>MILLISECOND</code></td><td><code>MILLISECOND</code></td></tr><tr><td>zone-id</td><td><code>String</code></td><td>分片键时区</td><td><code>ZoneId.systemDefault().getId()</code></td></tr></tbody></table><p><strong>YAML 配置样例</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shardingsphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sharding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        sharding-algorithms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          alg-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COSID_INTERVAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              logic-name-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">logic-name-prefix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-lower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021-12-08 22:00:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-upper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022-12-01 00:00:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              sharding-suffix-pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yyyyMM</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-interval-unit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MONTHS</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-interval-amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><h2 id="snowflakeintervalshardingalgorithm" tabindex="-1">SnowflakeIntervalShardingAlgorithm <a class="header-anchor" href="#snowflakeintervalshardingalgorithm" aria-label="Permalink to &quot;SnowflakeIntervalShardingAlgorithm&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">算法说明</p><p>我们知道<em>SnowflakeId</em>的位分区方式，<em>SnowflakeId</em>可以解析出时间戳，即<em>SnowflakeId</em>可以作为时间，所以<em>SnowflakeId</em>可以作为<em>INTERVAL</em>的分配算法。 （当没有<code>CreateTime</code>可用作分片时[这是一个非常极端的情况]，或者对性能有非常极端的要求时，<em>分布式ID主键</em>作为查询范围可能是持久层性能更好的选择。 )</p></div><blockquote><p>type: COSID_INTERVAL_SNOWFLAKE</p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>logic-name-prefix</td><td><code>String</code></td><td>逻辑表/数据源名前缀</td><td></td></tr><tr><td>datetime-lower</td><td><code>String</code></td><td>时间分片下界值，时间戳格式：<code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td>datetime-upper</td><td><code>String</code></td><td>时间分片上界值，时间戳格式：<code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td>sharding-suffix-pattern</td><td><code>String</code></td><td>分片真实表/数据源后缀格式</td><td></td></tr><tr><td>datetime-interval-unit</td><td><code>ChronoUnit</code></td><td>分片键时间间隔单位</td><td></td></tr><tr><td>datetime-interval-amount</td><td><code>int</code></td><td>分片键时间间隔</td><td></td></tr><tr><td>id-name</td><td><code>String</code></td><td><code>IdGenerator</code> 的名称（在 <code>IdGeneratorProvider</code> 中已注册）</td><td><code>__share__</code></td></tr></tbody></table><p><strong>YAML 配置样例</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shardingsphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sharding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        sharding-algorithms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          alg-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COSID_INTERVAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              logic-name-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">logic-name-prefix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-lower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021-12-08 22:00:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-upper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022-12-01 00:00:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              sharding-suffix-pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yyyyMM</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-interval-unit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MONTHS</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              datetime-interval-amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              id-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cosid-name</span></span></code></pre></div><h2 id="cosidmodshardingalgorithm" tabindex="-1">CosIdModShardingAlgorithm <a class="header-anchor" href="#cosidmodshardingalgorithm" aria-label="Permalink to &quot;CosIdModShardingAlgorithm&quot;">​</a></h2><blockquote><p>type: COSID_MOD</p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>logic-name-prefix</td><td><code>String</code></td><td>逻辑表/数据源名前缀</td><td></td></tr><tr><td>mod</td><td><code>int</code></td><td>除数</td><td></td></tr></tbody></table><p><strong>YAML 配置样例</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shardingsphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sharding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        sharding-algorithms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          alg-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COSID_MOD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              mod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              logic-name-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t_table_</span></span></code></pre></div>`,23),d=[e];function h(l,p,r,k,o,E){return a(),i("div",null,d)}const y=s(n,[["render",h]]);export{c as __pageData,y as default};
