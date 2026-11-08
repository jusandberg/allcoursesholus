import re,json
L=open('/home/claude/be/export.html').read().split('\n')
g=lambda a,b:'\n'.join(L[a-1:b])
parts={'sil':g(91,103),'org1':g(104,116),'org2':g(119,139),'tok':g(141,151)}
def fix(s):
    s=re.sub(r'<g onClick="\{\{ pick\.(\w+) \}\}" style="cursor:pointer;visibility:\{\{ vis\.\w+ \}\};opacity:\{\{ o\.\w+ \}\};filter:\{\{ f\.\w+ \}\};transition:opacity \.4s,filter \.4s">',r'<g class="bj-o" data-o="\1">',s)
    s=re.sub(r'<g style="opacity:\{\{ form\.(\w+) \}\};transition:opacity \.4s">',r'<g class="bj-f" data-f="\1">',s)
    s=s.replace('{{ tokenColor }}','var(--tok)').replace('<g ref="{{ dropRef }}" style="pointer-events:none">','<g class="bj-tok">')
    s=s.replace('fill:#d3a84b;stroke:#fff','fill:var(--tok);stroke:#fff').replace('fill:#d3a84b;stroke:#6f91a2','fill:var(--tok);stroke:#6f91a2')
    assert '{{' not in s, re.findall(r'\{\{[^}]*\}\}',s)[:5]
    return re.sub(r'\n\s*',' ',s).strip()
out={k:fix(v) for k,v in parts.items()}
open('body_parts.json','w').write(json.dumps(out))
print({k:len(v) for k,v in out.items()}, out['tok'][-80:])
