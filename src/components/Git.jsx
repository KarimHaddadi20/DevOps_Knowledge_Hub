import { useState } from 'react';

function Git() {
  const [activeTab, setActiveTab] = useState('basics');

  const tabStyle = {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid var(--border-subtle)',
    marginBottom: '2rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem'
  };

  const btnStyle = (active) => ({
    background: 'none',
    border: 'none',
    color: active ? '#38bdf8' : 'var(--text-secondary)',
    borderBottom: active ? '2px solid #38bdf8' : '2px solid transparent',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease'
  });

  return (
    <div>
      <div className="card">
        <h2>📂 Git - Contrôle de Version</h2>
        <p>
          Git est le standard pour le versionnement. Indispensable en DevOps : workflow, branches,
          merge, rebase, résolution de conflits.
        </p>

        <div style={tabStyle}>
          {[
            { id: 'basics', label: 'Bases' },
            { id: 'branching', label: 'Branches' },
            { id: 'remote', label: 'Remote & Collaboration' },
            { id: 'workflow', label: 'Workflows' }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={btnStyle(activeTab === tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'basics' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔧 Commandes Fondamentales</h3>
            <div className="grid">
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Initialisation & Clone</div>
                <code>git init</code> <span style={{ color: '#666' }}># Nouveau repo</span><br />
                <code>git clone https://github.com/user/repo.git</code> <span style={{ color: '#666' }}># Cloner</span><br />
                <code>git clone --depth 1 url</code> <span style={{ color: '#666' }}># Shallow clone</span>
              </div>
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Commit</div>
                <code>git add .</code> <span style={{ color: '#666' }}># Tout ajouter</span><br />
                <code>git add fichier.txt</code> <span style={{ color: '#666' }}># Fichier spécifique</span><br />
                <code>git commit -m "message"</code> <span style={{ color: '#666' }}># Commiter</span><br />
                <code>git status</code> <span style={{ color: '#666' }}># État du repo</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📜 Historique & Logs</h3>
            <div className="code-block">
              <code>git log --oneline -10</code> <span style={{ color: '#666' }}># 10 derniers commits</span><br />
              <code>git log --graph --all</code> <span style={{ color: '#666' }}># Graphe des branches</span><br />
              <code>git show abc123</code> <span style={{ color: '#666' }}># Détail d'un commit</span><br />
              <code>git diff</code> <span style={{ color: '#666' }}># Modifications non stagées</span><br />
              <code>git diff --staged</code> <span style={{ color: '#666' }}># Modifications stagées</span>
            </div>
          </div>

          <div className="card">
            <h3>↩️ Annuler des Modifications</h3>
            <div className="code-block">
              <code>git restore fichier.txt</code> <span style={{ color: '#666' }}># Annuler modifs non stagées</span><br />
              <code>git restore --staged fichier.txt</code> <span style={{ color: '#666' }}># Unstage</span><br />
              <code>git reset --soft HEAD~1</code> <span style={{ color: '#666' }}># Annuler dernier commit (garder modifs)</span><br />
              <code>git reset --hard HEAD~1</code> <span style={{ color: '#666' }}># Annuler dernier commit (perte)</span><br />
              <code>git revert abc123</code> <span style={{ color: '#666' }}># Créer un commit inverse</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'branching' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🌿 Branches</h3>
            <div className="code-block">
              <code>git branch</code> <span style={{ color: '#666' }}># Lister les branches</span><br />
              <code>git branch feature/xyz</code> <span style={{ color: '#666' }}># Créer une branche</span><br />
              <code>git checkout -b feature/xyz</code> <span style={{ color: '#666' }}># Créer et switcher</span><br />
              <code>git switch -c feature/xyz</code> <span style={{ color: '#666' }}># Idem (nouvelle syntaxe)</span><br />
              <code>git merge feature/xyz</code> <span style={{ color: '#666' }}># Fusionner dans la branche courante</span><br />
              <code>git branch -d feature/xyz</code> <span style={{ color: '#666' }}># Supprimer branche mergée</span>
            </div>
          </div>

          <div className="card">
            <h3>📐 Rebase vs Merge</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Merge</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Crée un commit de merge. Garde l'historique complet. Préserve le contexte des branches.
                </p>
                <code>git merge feature</code>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Rebase</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Réécrit l'historique. Historique linéaire. À éviter sur les branches partagées.
                </p>
                <code>git rebase main</code>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🔀 Résolution de Conflits</h3>
            <div className="code-block">
              <pre>{`# Après un merge/rebase conflictuel
git status  # Voir les fichiers en conflit

# Éditer les fichiers avec les marqueurs:
# <<<<<<< HEAD
# ton code
# =======
# code de l'autre
# >>>>>>> branch

git add fichier_resolu.txt
git commit -m "Résolution conflit"  # ou git rebase --continue`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'remote' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>☁️ Remote & Push/Pull</h3>
            <div className="code-block">
              <code>git remote -v</code> <span style={{ color: '#666' }}># Lister les remotes</span><br />
              <code>git remote add origin https://github.com/user/repo.git</code><br />
              <code>git push -u origin main</code> <span style={{ color: '#666' }}># Premier push</span><br />
              <code>git push origin feature</code> <span style={{ color: '#666' }}># Pousser une branche</span><br />
              <code>git pull origin main</code> <span style={{ color: '#666' }}># Récupérer et merger</span><br />
              <code>git fetch origin</code> <span style={{ color: '#666' }}># Récupérer sans merger</span>
            </div>
          </div>

          <div className="card">
            <h3>🏷️ Tags & Releases</h3>
            <div className="code-block">
              <code>git tag v1.0.0</code> <span style={{ color: '#666' }}># Tag léger</span><br />
              <code>git tag -a v1.0.0 -m "Release 1.0"</code> <span style={{ color: '#666' }}># Tag annoté</span><br />
              <code>git push origin v1.0.0</code> <span style={{ color: '#666' }}># Pousser un tag</span><br />
              <code>git push origin --tags</code> <span style={{ color: '#666' }}># Pousser tous les tags</span>
            </div>
          </div>

          <div className="card">
            <h3>📁 .gitignore - Fichiers à Exclure</h3>
            <div className="code-block">
              <pre>{`# .gitignore
node_modules/
.env
*.log
dist/
build/
*.pyc
__pycache__/
.idea/
.vscode/
*.tar.gz
.DS_Store`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'workflow' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔄 Git Flow (Classique)</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>main</strong> : Production stable</li>
              <li><strong>develop</strong> : Intégration</li>
              <li><strong>feature/*</strong> : Nouvelles fonctionnalités</li>
              <li><strong>release/*</strong> : Préparation release</li>
              <li><strong>hotfix/*</strong> : Corrections urgentes</li>
            </ul>
          </div>

          <div className="card">
            <h3>📋 GitHub Flow (Simplifié)</h3>
            <p>Utilisé par GitHub : <strong>main</strong> toujours déployable + branches <strong>feature</strong>.</p>
            <div className="code-block">
              <pre>{`# Workflow typique
git checkout -b feature/add-login
# ... code ...
git add .
git commit -m "feat: add login page"
git push origin feature/add-login
# Créer Pull Request sur GitHub/GitLab`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📝 Conventional Commits</h3>
            <p>Format standard pour les messages de commit.</p>
            <div className="code-block">
              <code>feat: add user authentication</code> <span style={{ color: '#666' }}># Nouvelle feature</span><br />
              <code>fix: resolve memory leak</code> <span style={{ color: '#666' }}># Correction bug</span><br />
              <code>docs: update README</code> <span style={{ color: '#666' }}># Documentation</span><br />
              <code>chore: update dependencies</code> <span style={{ color: '#666' }}># Maintenance</span><br />
              <code>refactor: simplify auth logic</code> <span style={{ color: '#666' }}># Refactoring</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Git;
