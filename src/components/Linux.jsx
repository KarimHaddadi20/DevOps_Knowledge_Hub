import { useState } from 'react';

function Linux() {
  const [activeTab, setActiveTab] = useState('sysadmin');

  return (
    <div>
      <div className="card">
        <h2>🐧 Linux pour DevOps</h2>
        <p>
          Maîtriser Linux est non-négociable pour un ingénieur DevOps. C'est le socle de l'infrastructure, 
          des conteneurs et du cloud.
        </p>
        
        {/* Navigation Interne - Sous-onglets */}
        <div style={{
            display: 'flex', 
            gap: '1rem', 
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
        }}>
            {['sysadmin', 'network', 'process', 'scripting'].map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: activeTab === tab ? '#38bdf8' : 'var(--text-secondary)',
                        borderBottom: activeTab === tab ? '2px solid #38bdf8' : '2px solid transparent',
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        fontWeight: 500,
                        whiteSpace: 'nowrap'
                    }}
                >
                    {tab === 'sysadmin' && 'Administration Système'}
                    {tab === 'network' && 'Réseau & Sécurité'}
                    {tab === 'process' && 'Processus & Services'}
                    {tab === 'scripting' && 'Bash Scripting'}
                </button>
            ))}
        </div>
      </div>

      {activeTab === 'sysadmin' && (
        <div className="animate-fade-in">
             {/* DIAGRAMME FHS (Détaillé) */}
            <div className="card">
                <h3>📍 Architecture FHS (Filesystem Hierarchy Standard)</h3>
                <p style={{marginBottom: '2rem', color: 'var(--text-secondary)'}}>
                    En DevOps, savoir où chercher est crucial. Voici les répertoires que vous utiliserez quotidiennement.
                </p>

                <div className="diagram-container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    width: '100%',
                    maxWidth: '900px'
                }}>
                    {/* RACINE */}
                    <div style={{gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginBottom: '2rem', position: 'relative'}}>
                        <div className="schema-box" style={{borderColor: '#38bdf8', boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)', padding: '1rem 2rem'}}>
                            <span className="schema-label" style={{color: '#38bdf8', fontSize: '1.2rem'}}>/ (Root)</span>
                            <span className="schema-sub">Point de départ unique</span>
                        </div>
                        <div style={{position: 'absolute', bottom: '-2.5rem', left: '50%', width: '1px', height: '2.5rem', background: 'var(--border-highlight)'}}></div>
                        <div style={{position: 'absolute', bottom: '-2.5rem', left: '10%', right: '10%', height: '1px', background: 'var(--border-highlight)'}}></div>
                    </div>

                    {/* BRANCHE BIN */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)'}}></div>
                        <div className="schema-box" style={{width: '100%'}}>
                            <span className="schema-label">/bin & /sbin</span>
                            <span className="schema-sub">Binaires & Exécutables</span>
                        </div>
                        <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4'}}>
                            Commandes de base (ls, cp).<br/>
                            <span style={{color: '#f59e0b'}}>/sbin</span> = Admin only (reboot, ip).
                        </div>
                    </div>

                    {/* BRANCHE ETC */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)'}}></div>
                        <div className="schema-box" style={{width: '100%', borderColor: '#f59e0b'}}>
                            <span className="schema-label" style={{color: '#f59e0b'}}>/etc</span>
                            <span className="schema-sub">Configuration</span>
                        </div>
                        <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4'}}>
                            <strong>Le cerveau.</strong><br/>
                            Nginx, SSH, Réseau.<br/>
                            Tout fichier .conf vit ici.
                        </div>
                    </div>

                    {/* BRANCHE HOME */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)'}}></div>
                        <div className="schema-box" style={{width: '100%'}}>
                            <span className="schema-label">/home</span>
                            <span className="schema-sub">Utilisateurs</span>
                        </div>
                        <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4'}}>
                            Espace personnel.<br/>
                            <code>~</code> pointe ici.<br/>
                            Stocke clés SSH et configs perso.
                        </div>
                    </div>

                    {/* BRANCHE VAR */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)'}}></div>
                        <div className="schema-box" style={{width: '100%', borderColor: '#ef4444'}}>
                            <span className="schema-label" style={{color: '#ef4444'}}>/var</span>
                            <span className="schema-sub">Données Variables</span>
                        </div>
                        <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4'}}>
                            <strong>Critique !</strong><br/>
                            Logs, BDD, Sites Web.<br/>
                            Peut saturer le disque.
                        </div>
                    </div>

                    {/* BRANCHE OPT */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)'}}></div>
                        <div className="schema-box" style={{width: '100%'}}>
                            <span className="schema-label">/opt</span>
                            <span className="schema-sub">Optionnel</span>
                        </div>
                        <div style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4'}}>
                            Logiciels tiers.<br/>
                            (Ex: Chrome, outils propriétaires).
                        </div>
                    </div>
                </div>
                </div>

                <div className="grid" style={{marginTop: '2rem'}}>
                    <div className="card" style={{background: 'rgba(255,255,255,0.03)', border: 'none', padding: '1.5rem'}}>
                        <h4 style={{marginTop:0, color: '#f59e0b'}}>💡 DevOps Insight : /etc</h4>
                        <p style={{fontSize: '0.9rem', marginBottom: 0}}>
                            En tant que DevOps, vous passerez 50% de votre temps ici. C'est là que vous configurez les services.
                            <br/><br/>
                            <strong>Fichiers clés :</strong>
                        </p>
                        <ul style={{marginTop: '0.5rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                            <li><code>/etc/passwd</code> : Liste des utilisateurs</li>
                            <li><code>/etc/ssh/sshd_config</code> : Config serveur SSH</li>
                            <li><code>/etc/systemd/system/</code> : Services personnalisés</li>
                        </ul>
                    </div>
                    <div className="card" style={{background: 'rgba(255,255,255,0.03)', border: 'none', padding: '1.5rem'}}>
                        <h4 style={{marginTop:0, color: '#ef4444'}}>⚠️ DevOps Alert : /var</h4>
                        <p style={{fontSize: '0.9rem', marginBottom: 0}}>
                            La cause #1 de plantage serveur ? Partition pleine à cause de <code>/var/log</code>.
                            <br/><br/>
                            <strong>À surveiller :</strong>
                        </p>
                        <ul style={{marginTop: '0.5rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                            <li><code>/var/log/syslog</code> : Logs système</li>
                            <li><code>/var/log/nginx/</code> : Logs serveur web</li>
                            <li><code>/var/lib/docker/</code> : Images et conteneurs Docker</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3>👥 Gestion Utilisateurs & Permissions</h3>
                <p>La sécurité commence ici. Comprendre UID, GID et Sudo.</p>

                <div className="grid">
                    <div className="code-block" style={{margin: 0}}>
                        <div style={{color: '#888', marginBottom: '0.5rem'}}># Créer un utilisateur</div>
                        <code>useradd -m -s /bin/bash devops_user</code>
                        <code>passwd devops_user</code>
                        
                        <div style={{color: '#888', margin: '1rem 0 0.5rem'}}># Gestion de groupe</div>
                        <code>usermod -aG docker devops_user</code>
                        <code>groups devops_user</code>
                    </div>
                    <div className="code-block" style={{margin: 0}}>
                        <div style={{color: '#888', marginBottom: '0.5rem'}}># Permissions (chmod)</div>
                        <code>chmod 755 script.sh</code>
                        <code>chown user:group file.txt</code>
                        
                        <div style={{color: '#888', margin: '1rem 0 0.5rem'}}># Sudoers</div>
                        <code>visudo</code>
                        <div style={{fontSize: '0.8rem', color: '#666', marginTop: '0.5rem'}}>
                            Permet d'éditer /etc/sudoers en toute sécurité
                        </div>
                    </div>
                </div>

                <div className="diagram-container" style={{marginTop: '2rem'}}>
                    <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#10b981'}}>r (4)</div>
                            <div style={{color: '#888'}}>Lecture</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b'}}>w (2)</div>
                            <div style={{color: '#888'}}>Écriture</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6'}}>x (1)</div>
                            <div style={{color: '#888'}}>Exécution</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'process' && (
          <div className="animate-fade-in">
            <div className="card">
                <h3>⚙️ Systemd & Services</h3>
                <p>Systemd est le système d'init standard. Il gère le démarrage des services (Docker, Nginx, etc.).</p>
                
                <div className="code-block">
                    <code>systemctl status docker</code> <span style={{color: '#666'}}># Vérifier l'état</span><br/>
                    <code>systemctl start docker</code> <span style={{color: '#666'}}># Démarrer</span><br/>
                    <code>systemctl enable docker</code> <span style={{color: '#666'}}># Activer au démarrage</span><br/>
                    <code>journalctl -u docker -f</code> <span style={{color: '#666'}}># Logs en temps réel</span>
                </div>
            </div>

            <div className="card">
                <h3>🔄 Gestion des Processus</h3>
                <div className="grid">
                    <div>
                        <h4>Surveillance</h4>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">htop</span> : Moniteur interactif (CPU/RAM)</li>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">top</span> : Version standard</li>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">free -h</span> : Utilisation Mémoire</li>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">df -h</span> : Espace Disque</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Manipulation</h4>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">ps aux</span> : Lister tous les processus</li>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">kill [PID]</span> : Arrêter un processus</li>
                            <li style={{marginBottom: '0.5rem'}}><span className="code-inline">kill -9 [PID]</span> : Forcer l'arrêt</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
      )}

      {activeTab === 'network' && (
          <div className="animate-fade-in">
            <div className="card">
                <h3>🌐 Réseau & Connectivité</h3>
                <p>Déboguer la connectivité est une tâche quotidienne.</p>

                <div className="grid">
                    <div className="code-block" style={{margin: 0}}>
                        <div style={{color: '#888', marginBottom: '0.5rem'}}># Voir les IP / Interfaces</div>
                        <code>ip addr show</code>
                        
                        <div style={{color: '#888', margin: '1rem 0 0.5rem'}}># Voir les ports ouverts</div>
                        <code>ss -tulnp</code>
                        <div style={{fontSize: '0.8rem', color: '#666'}}>
                            (t=tcp, u=udp, l=listening, n=numeric, p=process)
                        </div>
                    </div>
                    <div className="code-block" style={{margin: 0}}>
                        <div style={{color: '#888', marginBottom: '0.5rem'}}># Tester la connectivité</div>
                        <code>curl -v google.com</code>
                        <code>ping 8.8.8.8</code>
                        <code>nc -zv localhost 8080</code>
                        
                        <div style={{color: '#888', margin: '1rem 0 0.5rem'}}># DNS Dig</div>
                        <code>dig google.com +short</code>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3>🔒 SSH (Secure Shell)</h3>
                <p>L'outil principal pour se connecter aux serveurs distants.</p>
                <div className="code-block">
                    <code>ssh-keygen -t ed25519</code> <span style={{color: '#666'}}># Générer une clé moderne</span><br/>
                    <code>ssh-copy-id user@host</code> <span style={{color: '#666'}}># Copier la clé publique</span><br/>
                    <code>ssh -i mykey.pem user@host</code> <span style={{color: '#666'}}># Connexion avec clé spécifique</span>
                </div>
            </div>
          </div>
      )}

      {activeTab === 'scripting' && (
          <div className="animate-fade-in">
            <div className="card">
                <h3>📜 Bash Scripting Basics</h3>
                <p>Automatiser les tâches répétitives est le cœur du métier DevOps.</p>
                
                <div className="code-block">
<pre>{`#!/bin/bash

# Variables
APP_NAME="myapp"
DATE=$(date +%F)

echo "Déploiement de $APP_NAME le $DATE..."

# Condition
if [ -d "./build" ]; then
    echo "Dossier build trouvé."
else
    echo "Erreur : Dossier build manquant !"
    exit 1
fi

# Boucle
for file in *.log; do
    echo "Archivage de $file"
    gzip $file
done

echo "Terminé !"`}</pre>
                </div>
            </div>
            
            <div className="card">
                <h3>flux de Redirection (Pipes)</h3>
                <p>La puissance de Linux réside dans la combinaison de petites commandes.</p>
                <div className="diagram-container" style={{flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                     <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <span className="code-inline">commande 1</span>
                        <span style={{fontSize: '1.5rem', color: '#38bdf8'}}>|</span>
                        <span className="code-inline">commande 2</span>
                        <span style={{fontSize: '1.5rem', color: '#38bdf8'}}>|</span>
                        <span className="code-inline">commande 3</span>
                     </div>
                     <p style={{textAlign: 'center', fontSize: '0.9rem', color: '#888'}}>
                         La sortie (stdout) de gauche devient l'entrée (stdin) de droite.
                     </p>
                </div>
                <div className="code-block">
                    <code>cat access.log | grep "404" | wc -l</code>
                    <div style={{color: '#666', marginTop: '0.5rem'}}>Compte le nombre d'erreurs 404 dans le fichier de log.</div>
                </div>
            </div>
          </div>
      )}
    </div>
  )
}

export default Linux
