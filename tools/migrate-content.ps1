$ErrorActionPreference = 'Stop'

function Get-InnerHead($html) {
  $m = [regex]::Match($html, '(?is)<head[^>]*>(.*?)</head>')
  if ($m.Success) { return $m.Groups[1].Value.Trim() } else { return '' }
}
function Get-FirstBlock($html, $tag) {
  $m = [regex]::Match($html, "(?is)<$tag.*?</$tag>")
  if ($m.Success) { return $m.Value.Trim() } else { return '' }
}
function Get-BodyOnly($html) {
  $m = [regex]::Match($html, '(?is)<body[^>]*>(.*)</body>')
  $b = if ($m.Success) { $m.Groups[1].Value } else { $html }
  # remove first header and trailing footer inside body
  $b = [regex]::Replace($b,'(?is)^\s*<header.*?</header>\s*','',1)
  $b = [regex]::Replace($b,'(?is)<footer.*?</footer>\s*$','',1)
  return $b.Trim()
}

# Ensure source exists
$idx = '_archive/index.html'
if (-not (Test-Path $idx)) { throw "Missing _archive/index.html - make sure index.html is in _archive." }
$html = Get-Content $idx -Raw

# Extract real pieces from your live page
$head   = Get-InnerHead $html
$header = Get-FirstBlock $html 'header'
$footer = Get-FirstBlock $html 'footer'

# Write includes
New-Item -ItemType Directory -Force -Path '_includes' | Out-Null
Set-Content -Path '_includes/head.html'   -Value ($head + "`n")
Set-Content -Path '_includes/header.html' -Value ($header + "`n")
Set-Content -Path '_includes/footer.html' -Value ($footer + "`n")

# Write layout (use double-quoted here-string to avoid smart-quote issues)
New-Item -ItemType Directory -Force -Path '_layouts' | Out-Null
$layout = @"
<!doctype html>
<html lang="en">
  <head>{% include head.html %}</head>
  <body>
    {% include header.html %}
    <main id="content">
      {{ content }}
    </main>
    {% include footer.html %}
  </body>
</html>
"@
Set-Content -Path '_layouts/default.html' -Value $layout

# Convert pages to Markdown (preserve exact URLs)
New-Item -ItemType Directory -Force -Path 'pages' | Out-Null
$pages = @('index','products','academy','faqs','contact')
foreach ($p in $pages) {
  $src = "_archive/$p.html"
  if (-not (Test-Path $src)) { continue }

  $raw  = Get-Content $src -Raw
  $body = Get-BodyOnly $raw

  if ($p -eq 'index') { $permalink = '/' } else { $permalink = "/$p.html" }
  $title = (Get-Culture).TextInfo.ToTitleCase($p)
  $front = "---`nlayout: default`ntitle: $title`npermalink: $permalink`n---`n`n"

  if     ($p -eq 'index') { Set-Content -Path 'index.md'       -Value ($front + $body + "`n") }
  else                    { Set-Content -Path ("pages/{0}.md" -f $p) -Value ($front + $body + "`n") }
}
