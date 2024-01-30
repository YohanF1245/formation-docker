# Formation Docker

## Module 1.0 : Introduction à Docker
### [1.1. Quelle est la différence entre `Bare Metal`, `Virtual Machine` et `Container` ?](./bare-metal-virtual-machine-container.md)
### [1.2. Qu'est-ce que Docker ?](./intro-docker.md)
### [1.3. Pourquoi utiliser Docker ? Quels problèmes résout-il et quels sont ses avantages ?](./pourquoi-docker.md)

---

## Module 2.0 : Installation de Docker
### [2.1. Comment installer Docker sur Windows ?](./comment-installer-docker-windows10.md)
### [2.2. Comment installer Docker sur MacOS ?](./comment-installer-docker-mac.md)
### [2.3. Comment installer Docker sur Linux ?](./comment-installer-docker-linux.md)

---

## Module 3.0 : Fondamentaux des Conteneurs et des Images
### [3.1. Quelle est la différence entre un conteneur Docker et une image Docker ?](./conteneur-vs-image-docker.md)
### [3.2. Registres Docker et Docker Hub](./docker-hub.md)
### 3.3. Comment gérer les images Docker ?
### 3.4. Comment exécuter des commandes à l'intérieur d'un conteneur Docker ?
#### 3.4.1. Comment accéder au shell d'un conteneur Docker ?
- `docker exec -it [CONTENEUR] bash`
### 3.5. Comment surveiller et dépanner un conteneur Docker ?
#### 3.5.1. Comment consulter les logs d'un conteneur Docker ?
- `docker logs [CONTENEUR]`
#### 3.5.2. Comment inspecter les détails d'un conteneur Docker ?
- `docker inspect [CONTENEUR]`

---

## Module 4.0 : Gestion Avancée des Images
### 4.1. Comment construire une image Docker personnalisée ?
#### 4.1.1. Comment créer une image à partir d'un Dockerfile ?
- `docker build -t [nom_image] .`
### 4.2. Comment optimiser les images Docker ?

---

## Module 5.0 : Stockage dans Docker
### 5.1. Comment utiliser les volumes Docker ?
#### 5.1.1. Comment créer et gérer un volume Docker ?
- `docker volume create [nom_volume]`
#### 5.1.2. Comment monter un volume dans un conteneur Docker ?
- `docker run -v [nom_volume]:[chemin_dans_conteneur]`

---

## Module 6.0 : Réseautage dans Docker
### 6.1. Quels sont les concepts de base du réseau dans Docker ?
#### 6.1.1. Comment afficher les réseaux Docker disponibles ?
- `docker network ls`
#### 6.1.2. Comment créer un réseau Docker ?
- `docker network create [nom_reseau]`
### 6.2. Comment connecter des conteneurs à des réseaux Docker ?
#### 6.2.1. Comment connecter un conteneur à un réseau spécifique ?
- `docker run --network=[nom_reseau] [IMAGE]`

---

## Module 7.0 : Docker Compose et Orchestration
### 7.1. Qu'est-ce que Docker Compose et comment l'utiliser ?
#### 7.1.1. Comment démarrer et arrêter des services avec Docker Compose ?
- `docker-compose up`
- `docker-compose down`
