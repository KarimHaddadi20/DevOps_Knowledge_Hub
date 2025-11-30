import { useState } from 'react';

function Linux() {
    const [activeTab, setActiveTab] = useState('sysadmin');

    return (
        <div>
            <div className="card">
                <h2>🐧 Linux pour DevOps</h2>
                <p>
                    Maîtriser Linux est non-négociable pour un ingénieur DevOps. C'est le socle de l'infrastructure,
                    des conteneurs et du cloud. Voici l'essentiel à connaître.
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
                    {[
                        { id: 'sysadmin', label: 'Système & Packages' },
                        { id: 'permissions', label: 'Utilisateurs & Droits' },
                        { id: 'process', label: 'Processus & Services' },
                        { id: 'network', label: 'Réseau & Sécurité' },
                        { id: 'scripting', label: 'Automation & Scripting' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeTab === tab.id ? '#38bdf8' : 'var(--text-secondary)',
                                borderBottom: activeTab === tab.id ? '2px solid #38bdf8' : '2px solid transparent',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 'sysadmin' && (
                <div className="animate-fade-in">
                    {/* DIAGRAMME FHS (Détaillé) */}
                    <div className="card">
                        <h3>📍 Architecture FHS (Filesystem Hierarchy Standard)</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            En DevOps, savoir où chercher est crucial.
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
                                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginBottom: '2rem', position: 'relative' }}>
                                    <div className="schema-box" style={{ borderColor: '#38bdf8', boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)', padding: '1rem 2rem' }}>
                                        <span className="schema-label" style={{ color: '#38bdf8', fontSize: '1.2rem' }}>/ (Root)</span>
                                        <span className="schema-sub">Point de départ unique</span>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '-2.5rem', left: '50%', width: '1px', height: '2.5rem', background: 'var(--border-highlight)' }}></div>
                                    <div style={{ position: 'absolute', bottom: '-2.5rem', left: '10%', right: '10%', height: '1px', background: 'var(--border-highlight)' }}></div>
                                </div>

                                {/* BRANCHE BIN */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)' }}></div>
                                    <div className="schema-box" style={{ width: '100%' }}>
                                        <span className="schema-label">/bin</span>
                                        <span className="schema-sub">Binaires (ls, cp)</span>
                                    </div>
                                </div>

                                {/* BRANCHE ETC */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)' }}></div>
                                    <div className="schema-box" style={{ width: '100%', borderColor: '#f59e0b' }}>
                                        <span className="schema-label" style={{ color: '#f59e0b' }}>/etc</span>
                                        <span className="schema-sub">Configuration</span>
                                    </div>
                                </div>

                                {/* BRANCHE VAR */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)' }}></div>
                                    <div className="schema-box" style={{ width: '100%', borderColor: '#ef4444' }}>
                                        <span className="schema-label" style={{ color: '#ef4444' }}>/var</span>
                                        <span className="schema-sub">Logs & Data</span>
                                    </div>
                                </div>

                                {/* BRANCHE HOME */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-2.5rem', left: '50%', height: '2.5rem', width: '1px', background: 'var(--border-highlight)' }}></div>
                                    <div className="schema-box" style={{ width: '100%' }}>
                                        <span className="schema-label">/home</span>
                                        <span className="schema-sub">Utilisateurs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <h3>📦 Gestion de Paquets</h3>
                            <p>Installer et mettre à jour les outils.</p>
                            <div className="code-block">
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Debian/Ubuntu (apt)</div>
                                <code>apt update && apt upgrade</code>
                                <code>apt install nginx git curl</code>

                                <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># RedHat/CentOS (dnf/yum)</div>
                                <code>dnf install nginx</code>
                            </div>
                        </div>

                        <div className="card">
                            <h3>💾 Stockage & Archives</h3>
                            <p>Gérer l'espace disque et les fichiers.</p>
                            <div className="code-block">
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Espace Disque</div>
                                <code>df -h</code> <span style={{ color: '#666' }}># Partitions</span><br />
                                <code>du -sh folder/</code> <span style={{ color: '#666' }}># Taille dossier</span>

                                <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Archivage (Tar)</div>
                                <code>tar -czvf backup.tar.gz /data</code>
                                <code>tar -xzvf backup.tar.gz</code>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'permissions' && (
                <div className="animate-fade-in">
                    <div className="card">
                        <h3>👥 Gestion Utilisateurs & Permissions</h3>
                        <p>La sécurité commence ici. Comprendre UID, GID et Sudo.</p>

                        <div className="grid">
                            <div className="code-block" style={{ margin: 0 }}>
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Créer un utilisateur</div>
                                <code>useradd -m -s /bin/bash devops</code>
                                <code>passwd devops</code>

                                <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Gestion de groupe</div>
                                <code>usermod -aG docker devops</code>
                                <code>groups devops</code>
                            </div>
                            <div className="code-block" style={{ margin: 0 }}>
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Permissions (chmod)</div>
                                <code>chmod 755 script.sh</code>
                                <code>chown user:group file.txt</code>

                                <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Sudoers</div>
                                <code>visudo</code>
                                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                                    Permet d'éditer /etc/sudoers en toute sécurité
                                </div>
                            </div>
                        </div>

                        <div className="diagram-container" style={{ marginTop: '2rem' }}>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>r (4)</div>
                                    <div style={{ color: '#888' }}>Lecture</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>w (2)</div>
                                    <div style={{ color: '#888' }}>Écriture</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>x (1)</div>
                                    <div style={{ color: '#888' }}>Exécution</div>
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
                        <p>Systemd est le standard pour gérer les services (Docker, Nginx, etc.).</p>

                        <div className="code-block">
                            <code>systemctl status docker</code> <span style={{ color: '#666' }}># Vérifier l'état</span><br />
                            <code>systemctl start docker</code> <span style={{ color: '#666' }}># Démarrer</span><br />
                            <code>systemctl enable docker</code> <span style={{ color: '#666' }}># Activer au boot</span><br />
                            <code>journalctl -u docker -f</code> <span style={{ color: '#666' }}># Logs en temps réel</span>
                        </div>
                    </div>

                    <div className="card">
                        <h3>🔄 Surveillance & Processus</h3>
                        <div className="grid">
                            <div>
                                <h4>Monitoring</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">htop</span> : CPU/RAM interactif</li>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">free -h</span> : Mémoire RAM</li>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">iostat</span> : E/S Disque</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Commandes</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">ps aux | grep nginx</span> : Trouver un PID</li>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">kill [PID]</span> : Arrêter proprement</li>
                                    <li style={{ marginBottom: '0.5rem' }}><span className="code-inline">kill -9 [PID]</span> : Forcer l'arrêt</li>
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
                            <div className="code-block" style={{ margin: 0 }}>
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Infos Réseau</div>
                                <code>ip a</code> <span style={{ color: '#666' }}># Interfaces IP</span><br />
                                <code>ss -tulnp</code> <span style={{ color: '#666' }}># Ports ouverts</span>
                            </div>
                            <div className="code-block" style={{ margin: 0 }}>
                                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Tests</div>
                                <code>curl -I google.com</code> <span style={{ color: '#666' }}># Headers HTTP</span><br />
                                <code>ping 8.8.8.8</code> <span style={{ color: '#666' }}># Latence</span><br />
                                <code>nc -zv localhost 8080</code> <span style={{ color: '#666' }}># Test Port</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>🔒 SSH (Secure Shell)</h3>
                        <p>L'outil principal pour se connecter aux serveurs distants.</p>
                        <div className="code-block">
                            <code>ssh-keygen -t ed25519</code> <span style={{ color: '#666' }}># Générer clé</span><br />
                            <code>ssh-copy-id user@host</code> <span style={{ color: '#666' }}># Envoyer clé</span><br />
                            <code>ssh user@host</code> <span style={{ color: '#666' }}># Connexion</span>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'scripting' && (
                <div className="animate-fade-in">
                    <div className="grid">
                        <div className="card">
                            <h3>📜 Bash Scripting</h3>
                            <p>Automatiser les tâches répétitives.</p>
                            <div className="code-block">
                                <pre>{`#!/bin/bash
# Backup Script

DATE=$(date +%F)
BACKUP_DIR="/backup/$DATE"

mkdir -p $BACKUP_DIR

if [ -d "/var/www/html" ]; then
    echo "Backing up site..."
    tar -czf $BACKUP_DIR/site.tar.gz /var/www/html
else
    echo "Error: Site not found"
    exit 1
fi`}</pre>
                            </div>
                        </div>

                        <div className="card">
                            <h3>⏰ Cron Jobs (Planification)</h3>
                            <p>Exécuter des tâches automatiquement.</p>
                            <div className="code-block">
                                <code>crontab -e</code> <span style={{ color: '#666' }}># Éditer</span>
                                <div style={{ marginTop: '1rem', borderLeft: '2px solid #38bdf8', paddingLeft: '1rem' }}>
                                    <div style={{ color: '#f59e0b' }}>* * * * * commande</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888' }}>
                                        min heur jour mois jour_semaine
                                    </div>
                                </div>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                    <code>0 3 * * * /scripts/backup.sh</code><br />
                                    <span style={{ color: '#666' }}>Tous les jours à 3h00 du matin.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>🔍 Traitement de Texte (Sed, Awk, Grep)</h3>
                        <p>Manipuler les logs et les fichiers de config.</p>
                        <div className="code-block">
                            <div style={{ color: '#888', marginBottom: '0.5rem' }}># Grep (Recherche)</div>
                            <code>grep -r "error" /var/log/nginx/</code>

                            <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Awk (Colonnes)</div>
                            <code>ps aux | awk '{print $1, $11}'</code>
                            <span style={{ color: '#666', fontSize: '0.8rem' }}>Affiche seulement l'utilisateur et la commande.</span>

                            <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Sed (Remplacement)</div>
                            <code>sed -i 's/DEBUG=true/DEBUG=false/' config.env</code>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Linux
