webpackJsonp([0x97f006a5b2a1],{363:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Migrations have the role of tracking all changes we need to make in our databases since the moment of its creation. It’s pretty much described by Laravel as a version control.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">php artisan make:migration &lt;name&gt;</code></pre>\n      </div>\n<p>Appropriate names range from <strong>add<em>table</em>mynewtable</strong> to <strong>add<em>newfield</em>to_existingtable</strong> and help identify the reason why this migration exists.</p>\n<p>This will create a new migration file. Essentially, it contains two functions: up and down. Up is the actual change you’d like to make, while down is supposed to have the backwards operation you’d use to rollback to previous state.</p>\n<p>What goes in the up/down function depends on what you want to do. In case you need a new table, use Schema::create(\'new<em>table</em>name\', function(Blueprint $table)). If you\'re adding new fields to an existing table, use Scheema::table(\'existing<em>table</em>name\', function(Blueprint $table)).</p>\n<p>The parameter $table is what allows you to create the attributes.</p>\n<p>To <strong>apply the migration</strong>, run the following command:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">php artisan migrate</code></pre>\n      </div>\n<p>Now to <strong>rollback</strong>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">php artisan migrate:rollback</code></pre>\n      </div>\n<p><strong><a href="https://laravel.com/docs/5.5/migrations">Official reference</a></strong></p>\n<p><strong><a href="https://laravel.com/docs/5.5/migrations#creating-columns">Data types</a></strong></p>\n<p><strong><a href="https://laravel.com/docs/5.5/migrations#creating-indexes">Primary key</a></strong></p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token variable">$table</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'id\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong><a href="https://laravel.com/docs/5.5/migrations#foreign-key-constraints">Foreign keys</a></strong></p>\n<h3>Snippet for creating a new table</h3>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">AddConstraintMyTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * Run the migrations.\n     *\n     * @return void\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Schema<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'myTable\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>Blueprint <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n           <span class="token variable">$table</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'link\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n           <span class="token variable">$table</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * Reverse the migrations.\n     *\n     * @return void\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Schema<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'myTable\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>Blueprint <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token variable">$table</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">dropUnique</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'offers_link_unique\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token delimiter important">?></span></code></pre>\n      </div>\n<p><a href="https://gist.github.com/anazard/47b3af3f1fa3de6c5cbfbeffd16da990">This snippet on Github Gist</a></p>\n<p>Notice how the migration is done in the up function and its counterpart down. Laravel chooses a reasonable name for the index, therefore it has to be used in order to be rolled back. Otherwise, you’ll get an error when trying to undo your last migration.</p>\n<p>The following line is responsible for creating two timestamp fields, created<em>at and updated</em>at, making it easier to track changes in your data.</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token variable">$table</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{date:null,path:"/sadas",title:"[PHP] Migrations in Laravel"}}},pathContext:{}}}});
//# sourceMappingURL=path---sadas-3c5c18be9c9253b12128.js.map