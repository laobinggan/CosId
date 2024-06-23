import{_ as r}from"./chunks/SegmentId.DhWZuTkU.js";import{_ as d,D as o,c as s,b as i,w as e,a4 as l,a3 as a,o as t,I as c,a as m}from"./chunks/framework.BsqFfzsZ.js";const x=JSON.parse('{"title":"SegmentId","description":"","frontmatter":{},"headers":[],"relativePath":"guide/segment.md","filePath":"guide/segment.md","lastUpdated":1719104899000}'),g={name:"guide/segment.md"},I=a('<h1 id="segmentid" tabindex="-1">SegmentId <a class="header-anchor" href="#segmentid" aria-label="Permalink to &quot;SegmentId&quot;">​</a></h1><p align="center"><img src="'+r+'" alt="SegmentId"></p><p>从上面的设计图中，不难看出<strong>号段模式</strong>基本设计思路是通过每次获取一定长度（Step）的可用ID（Id段/号段），来降低网络IO请求次数，提升性能。</p><ul><li>👎强依赖第三方号段分发器，可用性受到第三方分发器影响。</li><li>👎每次号段用完时获取<code>NextMaxId</code>需要进行网络IO请求，此时的性能会比较低。</li><li>单实例ID单调递增，全局趋势递增。 <ul><li>从设计图中不难看出<strong>Instance 1</strong>每次获取的<code>NextMaxId</code>，一定比上一次大，意味着下一次的号段一定比上一次大，所以从单实例上来看是单调递增的。</li><li>多实例各自持有的不同的号段，意味着同一时刻不同实例生成的ID是乱序的，但是整体趋势的递增的，所以全局趋势递增。</li></ul></li><li>ID乱序程度受到Step长度以及集群规模影响（从趋势递增图中不难看出）。 <ul><li>假设集群中只有一个实例时<strong>号段模式</strong>就是单调递增的。</li><li><code>Step</code>越小，乱序程度越小。当<code>Step=1</code>时，将无限接近单调递增。需要注意的是这里是无限接近而非等于单调递增，具体原因你可以思考一下这样一个场景： <ul><li>号段分发器T<sub>1</sub>时刻给<strong>Instance 1</strong>分发了<code>ID=1</code>,T<sub>2</sub>时刻给<strong>Instance 2</strong>分发了<code>ID=2</code>。因为机器性能、网络等原因，<code>Instance 2</code>网络IO写请求先于<code>Instance 1</code>到达。那么这个时候对于数据库来说，ID依然是乱序的。</li></ul></li></ul></li></ul><h2 id="具体实现" tabindex="-1">具体实现 <a class="header-anchor" href="#具体实现" aria-label="Permalink to &quot;具体实现&quot;">​</a></h2>',5),u=a('<h2 id="idsegmentdistributor" tabindex="-1">IdSegmentDistributor <a class="header-anchor" href="#idsegmentdistributor" aria-label="Permalink to &quot;IdSegmentDistributor&quot;">​</a></h2><h2 id="groupedidsegmentdistributor" tabindex="-1">GroupedIdSegmentDistributor <a class="header-anchor" href="#groupedidsegmentdistributor" aria-label="Permalink to &quot;GroupedIdSegmentDistributor&quot;">​</a></h2><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2>',3);function _(S,h,p,A,b,f){const n=o("Mermaid");return t(),s("div",null,[I,(t(),i(l,null,{default:e(()=>[c(n,{id:"mermaid-63",class:"mermaid",graph:"classDiagram%0Adirection%20BT%0Aclass%20DefaultSegmentId%0Aclass%20IdGenerator%20%7B%0A%3C%3CInterface%3E%3E%0A%0A%7D%0Aclass%20SegmentChainId%0Aclass%20SegmentId%20%7B%0A%3C%3CInterface%3E%3E%0A%0A%7D%0Aclass%20StringSegmentId%0A%0ADefaultSegmentId%20%20..%3E%20%20SegmentId%20%0ASegmentChainId%20%20..%3E%20%20SegmentId%20%0ASegmentId%20%20--%3E%20%20IdGenerator%20%0AStringSegmentId%20%20..%3E%20%20IdGenerator%20%0AStringSegmentId%20%20..%3E%20%20SegmentId%20%0A"})]),fallback:e(()=>[m(" Loading... ")]),_:1})),u])}const C=d(g,[["render",_]]);export{x as __pageData,C as default};
