# À propos de RelaySMS

## Table des matières

- [Historique et cas d'utilisation](#historique-et-cas-dutilisation)
  - [Historique](#historique)
  - [Cas d'utilisation](#cas-dutilisation)
- [Décomposition technologique](#decomposition-technologique)
  - [Composants logiciels clés](#composants-logiciels-cles)
- [Pistes à explorer](#pistes-a-explorer)
- [Plateformes](#plateformes)
- [Passerelles](#passerelles)
- [Clients](#clients)
- [Clients passerelle](#clients-passerelle)
- [Auto-hébergement](#auto-hebergement)
- [Leçons apprises](#lecons-apprises)

---

## Histoire et cas d'utilisation

### Histoire

Le projet SMSWithoutBorders a commencé en 2021 et est devenu plus tard un outil pour lutter contre les coupures d'Internet en 2022 grâce à une subvention d'Internews et un financement ultérieur du Open Technology Fund (OTF).

SMSWithoutBorders a commencé avec un seul client Android appelé SWOB (pour SMSWithoutBorders), qui a ensuite été renommé RelaySMS. À partir de 2023, nous avons commencé à développer DekuSMS - une application de messagerie SMS avec prise en charge du chiffrement de bout en bout.

À ce moment-là, nous utilisions des Raspberry Pi et des clés USB pour le transfert de SMS pour RelaySMS ; cela était inefficace en raison de problèmes d'alimentation et logistiques. Le temps d'arrêt du service était extrêmement élevé, entraînant une adoption faible et continue.

Nous avons ensuite transféré le relais vers DekuSMS, qui offrait de meilleures performances et réduisait le temps d'arrêt de plus de 90 %. Cela a permis une meilleure expérience pour les nouveaux utilisateurs et une certaine adoption du service.

Notre expérience dans le développement de RelaySMS provient du fait que nous avons vécu dans un environnement soumis à des coupures d'Internet pour des raisons politiques. La coupure a duré plus de 90 jours dans 2 régions du pays, établissant un record africain. Il s'agissait du Cameroun en 2016.

### Cas d'utilisation

RelaySMS est une plateforme de communication open source visant à permettre l'envoi de messages via Internet en utilisant des SMS. Cela est particulièrement utile dans les zones sans connexion Internet active ; généralement dans les zones reculées et pendant les périodes de troubles.

Il est bien établi que les gouvernements utilisent Internet comme une arme contre leur population en le coupant complètement (ou partiellement dans certains cas). Cela entrave l'accès des gens aux informations vitales et aux nouvelles. Cela limite également le commerce et les communications sûres et sécurisées. Dans ces circonstances, les outils comme les VPN et certaines techniques de contournement majeures ne fonctionnent pas, car ils nécessitent un accès à Internet pour fonctionner.

C’est dans ces circonstances que nous développons RelaySMS. Bien que nous sachions que les SMS sont parfois bloqués pendant les périodes de troubles, ils sont généralement débloqués plus rapidement que les connexions Internet ; cela peut être dû au fait que les adversaires ne considèrent pas encore les SMS comme un vecteur de menace (au-delà de la communication locale de personne à personne).

---

## Analyse technologique

RelaySMS peut être utilisé de deux manières : via des ponts (bridges) ou des plateformes (plus de détails ci-dessous). Quel que soit le mode utilisé :

- Le contenu du message de l'utilisateur est chiffré sur l'appareil de l'utilisateur, en utilisant l'algorithme Double Ratchet de Signal pour la confidentialité persistante.
- Les messages sont envoyés à un client Gateway (probablement un appareil Android exécutant DekuSMS). Cet appareil transmet ensuite le message entrant (toujours chiffré) à une instance cloud exécutant un serveur Gateway.
- Le serveur Gateway détermine à quel mode le message est destiné et le transfère soit à un serveur de pont, soit à un serveur de plateforme pour publication.
- Le message est ensuite déchiffré à l'aide de clés obtenues depuis le Vault (logiciel serveur responsable de sécuriser et stocker les identifiants de l'utilisateur). Le message déchiffré est ensuite publié.
- Dans le cas de publications sur des plateformes en ligne telles que Gmail, l'utilisateur reçoit un SMS confirmant le statut de la requête – publication réussie ou échec.

**Remarque :** Les messages reçus proviennent des réponses du Bridge à un message initial envoyé depuis un client. Cela complète les sessions Double Ratchet, ce qui signifie qu’un nouvel ensemble de clés est généré (Ratcheting).

### Composants logiciels clés

- Clients (applications Android ou iOS)
- Clients Gateway : appareils Android exécutant DekuSMS
- Serveur Gateway : logiciel qui détermine à qui publier les messages
- Bridges – plus de détails ci-dessous
- Platforms – plus de détails ci-dessous
- Vault – logiciel sécurisé qui stocke des données sensibles pour le compte de l’utilisateur, incluant les clés de sécurité et les tokens pour la publication en ligne (plus de détails sur les plateformes)

---

## Voies à explorer

À court terme, des outils comme RelaySMS pourraient être utilisés pour communiquer avec des plateformes en ligne préparées à diffuser les informations entrantes à des abonnés. Cela peut se faire via des canaux de messagerie tels que des groupes WhatsApp, Signal ou Telegram.

---

## Plateformes

Ceci est le premier et original mode de communication pour RelaySMS. Cette fonctionnalité nécessite que l'utilisateur enregistre l'accès à ses plateformes en ligne sur une instance cloud exécutant les Vaults de RelaySMS. Les types d'accès enregistrés sont des jetons OAuth2.0 (avec des scopes « publish only ») et des jetons de compte (pour des plateformes comme Telegram). Ces jetons sont conçus pour permettre à un tiers d’agir au nom de l’utilisateur et les scopes déterminent dans quelle mesure le tiers peut agir.

L'utilisateur doit faire confiance au tiers pour accorder ces jetons ; il existe un risque que le tiers agisse au nom de l’utilisateur sans son consentement.

RelaySMS informe les utilisateurs sur la façon de vérifier si un tiers a agi en leur nom au-delà de toute demande faite par eux. Cela est standard pour presque toutes les plateformes, car le scope accordé par l’utilisateur ne permet pas au service de modifier (supprimer ou changer) les enregistrements de ses actions.

Les avantages d’utiliser ses plateformes en ligne de cette manière incluent la cohérence, qui augmente la confiance ; le destinataire sait qui est l’expéditeur. Dans le cas des réseaux sociaux, l’utilisateur peut avoir un large public qui bénéficierait d’une mise à jour en direct des événements pendant que l’utilisateur est hors ligne. Les abonnés ne peuvent pas être transférés vers un autre compte et le message doit être reçu. Cela s’applique également aux groupes dont l’utilisateur fait partie.

L’utilisateur doit effectuer ces étapes lorsqu’il a accès à une connexion Internet. Il est fortement recommandé d’inclure ces étapes dès les premières phases de préparation à une coupure Internet. Nous avons des guides ici pour préparer une coupure Internet avec des ressources supplémentaires ci-dessous.

Les plateformes actuellement prises en charge sont :

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Bridges

Ce mode de publication avec RelaySMS est considéré comme secondaire mais néanmoins crucial. Dans les cas où l’utilisateur n’a pas accès à Internet pour enregistrer ses plateformes en ligne, ou souhaite envoyer des informations sans utiliser ses comptes principaux, il utilise les bridges.

Les bridges fonctionnent en transformant le numéro de téléphone de l’utilisateur en un alias e-mail permanent capable d’envoyer et de recevoir des messages. Un exemple de scénario :

Un utilisateur avec le numéro : +237123456789 utilise l’un des clients (Android ou iOS) pour composer et envoyer un message. Le message est chiffré sur l’appareil et envoyé à un client Gateway qui l’envoie au serveur Gateway. Le serveur Gateway détermine qu’il s’agit d’un message bridge et le transfère au serveur bridge. Le serveur bridge crée alors un alias à partir du numéro de téléphone de l’utilisateur et stocke en toute sécurité les clés publiques correspondantes dans le Vault. Un exemple d’alias pour ce numéro serait : 237123456789@relaysms.me.

Le message de l’utilisateur est envoyé aux destinataires prévus en utilisant cet alias. Cela est un grand avantage si le numéro de téléphone de l’utilisateur est déjà connu du destinataire – cela renforce la confiance dans l’origine du message.

Lorsque le destinataire répond au message de l’utilisateur, la réponse est chiffrée et renvoyée à l’utilisateur via SMS. L’utilisateur peut alors déchiffrer le message depuis son client RelaySMS (application).

Ce mode permet une communication bidirectionnelle entre l’expéditeur et le destinataire. Une fois l’alias créé, tout message envoyé à cet alias est chiffré et transmis à l’utilisateur par SMS.

[Il faudrait inclure plus d’informations sur la boîte de réception de l’alias et sur la manière dont elle est sécurisée jusqu’à ce que le message soit transmis à l’utilisateur]

---

## Clients

Les clients les plus supportés pour RelaySMS sont les clients Android et iOS. Ils offrent tous deux des fonctionnalités différentes, le client Android recevant les mises à jour plus rapidement que le client iOS.

Tous les clients intègrent les mêmes protocoles standardisés développés pour la communication avec le Vault et pour la publication de messages. Les standards que chaque client doit intégrer sont :

- Création d’un compte sur le Vault
- Connexion à un compte sur le Vault
- Sauvegarde des comptes sur le Vault pour les protocoles suivants :
  - OAuth2.0, ex. Bluesky
  - Authentification basée sur le numéro de téléphone, ex. Telegram
  - Publication des premiers messages avec Bridges
  - Publication des messages suivants avec Bridges
  - Publication de messages depuis des plateformes sauvegardées
  - Publication de messages depuis des plateformes sauvegardées en utilisant un Device ID
  - Stockage des tokens sur l’appareil
  - Publication avec les tokens stockés sur l’appareil

Concepts introduits ici :

- **Device ID :** C’est un identifiant dérivé et stocké à la fois sur le Vault et sur le client. Cela permet à l’utilisateur de publier des messages via ses plateformes sauvegardées sans utiliser son numéro de téléphone comme principal moyen d’identification. Utile dans le cas d’un téléphone dual-sim où le numéro utilisé pour envoyer le SMS pourrait changer, mais toutes les informations nécessaires restent disponibles sur l’appareil. C’est une option facultative et ne doit pas être activée par défaut.

- **Stockage des tokens sur l’appareil :** Les tokens de l’utilisateur (OAuth2.0 ou basés sur le numéro) sont principalement stockés en toute sécurité sur le Vault. Les clients peuvent demander que ces tokens soient migrés du Vault vers l’appareil. Les tokens sont alors ajoutés au message lors de la publication. En cas de refresh token (mécanisme courant avec OAuth2.0), le nouveau token est renvoyé par SMS à l’appareil.

Les clients sont libres d’implémenter les méthodes de publication nécessaires pour leur projet.

Les clients par défaut permettent à l’utilisateur de les pointer vers l’instance de Vault de son choix – plus de détails sur l’auto-hébergement. Cela nécessite que le client Gateway utilisé pour la publication pointe également vers cette instance du Vault, sinon les messages ne pourraient pas être décryptés côté serveur.

Puisque chaque client peut être différent, chaque client doit proposer ses propres clients. Pour les tutoriels par défaut fournis par l’équipe RelaySMS, vous pouvez les trouver ici [insérer tutoriels RelaySMS].

---

## Clients Gateway

Les clients Gateway sont des dispositifs capables de recevoir des SMS entrants depuis les clients RelaySMS. Les clients Gateway peuvent fonctionner sur des appareils Android ou Linux avec modems USB. Les instances par défaut de RelaySMS utilisent des appareils Android exécutant DekuSMS comme clients Gateway par défaut. Cependant, les protocoles pour transformer tout récepteur en client Gateway consistent à transférer une charge utile au format JSON [insérer référence] vers une instance cloud exécutant un serveur Gateway.

Comme les clients Gateway ne partagent pas de clés avec les clients (et ne connaissent pas les clients à l’avance), ils ne peuvent pas déchiffrer les messages entrants. Les messages envoyés supportent également la confidentialité persistante (forward secrecy) ; chaque message est chiffré avec une clé différente – donc dériver la clé pour un message ne permet pas de dériver celle des messages suivants.

---

## Auto-hébergement (à rédiger selon l’auto-hébergement réel)

- Exigences
- Ajout de plateformes
- Clients
- Clients Gateway
- Support
- Bitcoin
- Donations OSS
- Paypal
- Possibles avenues
- Internet par SMS
- Tous les messages par SMS

---

## Leçons apprises

- **Bien commencer :** Publier trop tôt les besoins techniques de la plateforme peut amener les utilisateurs à se forger une opinion négative sur le logiciel. Cela peut être très difficile à corriger, car l’adhésion initiale joue un rôle important dans la formation des opinions. Savoir ce que signifie « trop tôt » est également très difficile et généralement nous avançons simplement lorsque cela « semble » prêt.
- **Créer une communauté tôt :** Communiquer le développement au fur et à mesure avec les membres maintient tout le monde engagé et plus tolérant vis-à-vis des problèmes rencontrés. Nous avons expérimenté cela avec DekuSMS qui a créé un canal Telegram tôt et a commencé à communiquer avec les membres sur le développement et les fonctionnalités à venir. Les utilisateurs partageaient leurs problèmes et cherchaient des mises à jour – mais même si le logiciel n’était pas prêt ou bogué, les gens rejoignaient la communauté.

