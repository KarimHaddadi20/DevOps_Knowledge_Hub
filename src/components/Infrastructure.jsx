import { useState } from 'react';

function Infrastructure() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div>
      <div className="card">
        <h2>🏗️ Infrastructure as Code</h2>
        <p>
          Définir et gérer l'infrastructure via du code versionné. Reproductible, auditable,
          et évite les erreurs manuelles.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          {[
            { id: 'concepts', label: 'Concepts IaC' },
            { id: 'terraform', label: 'Terraform' },
            { id: 'ansible', label: 'Ansible' }
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

      {activeTab === 'concepts' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🎯 Qu'est-ce que l'IaC ?</h3>
            <p>
              Infrastructure as Code = décrire l'infrastructure (serveurs, réseau, stockage) dans des fichiers
              de configuration versionnés et exécutables.
            </p>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Avantages</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Reproductibilité</li>
                  <li>Versionnement (Git)</li>
                  <li>Documentation vivante</li>
                  <li>Tests automatisés</li>
                  <li>Désastre recovery</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Outils</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li><strong>Terraform</strong> : Provisioning déclaratif</li>
                  <li><strong>Ansible</strong> : Configuration (imperatif)</li>
                  <li><strong>Pulumi</strong> : IaC en langages de programmation</li>
                  <li><strong>CloudFormation</strong> : AWS natif</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'terraform' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🟣 Terraform - Provisioning Déclaratif</h3>
            <p>
              HashiCorp Terraform utilise HCL (HashiCorp Configuration Language). Il gère le cycle de vie
              des ressources cloud (AWS, Azure, GCP, etc.) via des providers.
            </p>

            <div className="code-block">
              <pre>{`# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "DevOpsServer"
  }
}

resource "aws_s3_bucket" "data" {
  bucket = "my-devops-bucket"

  tags = {
    Environment = "production"
  }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Commandes Terraform</h3>
            <div className="code-block">
              <code>terraform init</code> <span style={{ color: '#666' }}># Télécharger providers</span><br />
              <code>terraform plan</code> <span style={{ color: '#666' }}># Prévisualiser les changements</span><br />
              <code>terraform apply</code> <span style={{ color: '#666' }}># Appliquer (créer/modifier)</span><br />
              <code>terraform destroy</code> <span style={{ color: '#666' }}># Détruire les ressources</span><br />
              <code>terraform state list</code> <span style={{ color: '#666' }}># Lister l'état</span>
            </div>
          </div>

          <div className="card">
            <h3>📁 Structure des Variables</h3>
            <div className="code-block">
              <pre>{`# variables.tf
variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

# terraform.tfvars (ou variables d'environnement)
region         = "eu-west-1"
instance_type  = "t3.small"`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📦 Terraform State & Backend</h3>
            <p>Le state stocke l'état des ressources. En équipe, utiliser un backend distant (S3, Azure Blob).</p>
            <div className="code-block">
              <pre>{`# backend S3 (à mettre dans terraform { })
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🧩 Modules Terraform</h3>
            <div className="code-block">
              <pre>{`# Utiliser un module
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "my-vpc"
  cidr = "10.0.0.0/16"
  azs  = ["eu-west-1a", "eu-west-1b"]
  public_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
}`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ansible' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔴 Ansible - Configuration & Automatisation</h3>
            <p>
              Ansible est agentless (pas d'agent sur les serveurs). Utilise SSH et des playbooks YAML
              pour configurer des serveurs, installer des logiciels, déployer des applications.
            </p>

            <div className="code-block">
              <pre>{`# inventory.yml
all:
  web_servers:
    hosts:
      web1:
        ansible_host: 192.168.1.10
      web2:
        ansible_host: 192.168.1.11
    vars:
      ansible_user: ubuntu
      ansible_ssh_private_key_file: ~/.ssh/id_rsa`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📝 Playbook exemple</h3>
            <div className="code-block">
              <pre>{`# playbook.yml
---
- name: Install and configure Nginx
  hosts: web_servers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Start Nginx
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Copy custom config
      copy:
        src: nginx.conf
        dest: /etc/nginx/sites-available/default
      notify: Restart Nginx

  handlers:
    - name: Restart Nginx
      service:
        name: nginx
        state: restarted`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Commandes Ansible</h3>
            <div className="code-block">
              <code>ansible all -m ping</code> <span style={{ color: '#666' }}># Tester la connectivité</span><br />
              <code>ansible-playbook playbook.yml</code> <span style={{ color: '#666' }}># Exécuter</span><br />
              <code>ansible-playbook playbook.yml --check</code> <span style={{ color: '#666' }}># Mode dry-run</span><br />
              <code>ansible-playbook playbook.yml -l web1</code> <span style={{ color: '#666' }}># Limiter à un host</span>
            </div>
          </div>

          <div className="card">
            <h3>📦 Rôles Ansible</h3>
            <p>Structurer les playbooks en rôles réutilisables.</p>
            <div className="code-block">
              <pre>{`# Structure d'un rôle
roles/
  nginx/
    tasks/main.yml
    handlers/main.yml
    templates/nginx.conf.j2
    vars/main.yml

# playbook.yml
- hosts: web_servers
  roles:
    - nginx
    - { role: docker, tags: ['docker'] }`}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Infrastructure;
