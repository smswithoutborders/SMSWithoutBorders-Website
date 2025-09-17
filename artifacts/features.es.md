# Acerca de RelaySMS

## Tabla de contenidos

- [Historia y casos de uso](#historia-y-casos-de-uso)
  - [Historia](#historia)
  - [Casos de uso](#casos-de-uso)
- [Desglose tecnológico](#desglose-tecnologico)
  - [Componentes clave del software](#componentes-clave-del-software)
- [Caminos por explorar](#caminos-por-explorar)
- [Plataformas](#plataformas)
- [Puentes](#puentes)
- [Clientes](#clientes)
- [Clientes de pasarela](#clientes-de-pasarela)
- [Autoalojamiento](#autoalojamiento)
- [Lecciones aprendidas](#lecciones-aprendidas)

---

## Historia y casos de uso

### Historia

El proyecto SMSWithoutBorders comenzó en 2021 y más tarde se convirtió en una herramienta para combatir los cortes de Internet en 2022 gracias a una subvención de Internews y financiamiento posterior del Open Technology Fund (OTF).

SMSWithoutBorders comenzó con un único cliente Android llamado SWOB (por SMSWithoutBorders), que más tarde se renombró a RelaySMS. A partir de 2023, comenzamos a desarrollar DekuSMS, una aplicación de mensajería SMS con soporte para cifrado de extremo a extremo.

En ese momento, utilizábamos Raspberry Pi y llaves USB para el reenvío de SMS de RelaySMS; esto era ineficiente debido a problemas de energía y logísticos. El tiempo de inactividad del servicio era extremadamente alto, lo que provocaba una adopción baja y lenta.

Posteriormente trasladamos el reenvío a DekuSMS, que ofrecía un mejor rendimiento y reducía el tiempo de inactividad en más del 90 %. Esto mejoró la experiencia para los nuevos usuarios y aumentó la adopción del servicio.

Nuestra experiencia en el desarrollo de RelaySMS proviene de haber vivido en un entorno con cortes de Internet por razones políticas. El apagón duró más de 90 días en 2 regiones del país, estableciendo un récord africano. Esto fue en Camerún en 2016.

### Casos de uso

RelaySMS es una plataforma de comunicación de código abierto que permite enviar mensajes a través de Internet usando SMS. Esto es especialmente útil en áreas sin conexión activa a Internet; común en zonas remotas y durante periodos de conflictos.

Está bien establecido que los gobiernos utilizan Internet como arma contra su población, apagándolo completamente (parcialmente en algunos casos). Esto dificulta que las personas accedan a noticias e información vital. También limita el comercio y las comunicaciones seguras. En estas circunstancias, herramientas como VPNs y algunas técnicas de evasión importantes no funcionan, porque requieren acceso a Internet para operar.

Es en estas circunstancias que desarrollamos RelaySMS. Aunque sabemos que los SMS a veces se bloquean durante periodos de conflictos, generalmente se desbloquean más rápido que las conexiones a Internet; esto puede deberse a que los adversarios aún no consideran los SMS como un modelo de amenaza (más allá de la comunicación persona a persona local).

---

## Desglose tecnológico

RelaySMS se puede utilizar de 2 formas: a través de puentes (bridges) o plataformas (más detalles abajo). Independientemente del modo utilizado:

- El contenido del mensaje del usuario se cifra en el dispositivo del usuario, utilizando el algoritmo Double Ratchet de Signal para garantizar la confidencialidad futura.
- Los mensajes se envían a un cliente Gateway (probablemente un dispositivo Android ejecutando DekuSMS). Este dispositivo luego reenvía el mensaje entrante (todavía cifrado) a una instancia en la nube que ejecuta un servidor Gateway.
- El servidor Gateway determina a qué modo está destinado el mensaje y lo envía a un servidor puente o de plataforma para su publicación.
- El mensaje se descifra con claves obtenidas desde el Vault (software del servidor responsable de asegurar y almacenar las credenciales del usuario). El mensaje descifrado se publica a continuación.
- En casos de publicación en plataformas en línea como Gmail, el usuario recibe un SMS confirmando el estado de la solicitud – ya sea publicada con éxito o fallida.

**Nota:** Los mensajes recibidos provienen de las respuestas del Bridge a un mensaje inicial enviado desde un cliente. Esto completa las sesiones Double Ratchet, lo que significa que se generan un nuevo conjunto de claves (Ratcheting).

### Componentes de software clave

- Clientes (aplicaciones Android o iOS)
- Clientes Gateway: dispositivos Android ejecutando DekuSMS
- Servidor Gateway: software que determina a quién publicar los mensajes
- Bridges – más detalles abajo
- Platforms – más detalles abajo
- Vault – software seguro que almacena datos sensibles en nombre del usuario, incluyendo claves de seguridad y tokens para publicación en línea (más detalles sobre plataformas)

---

## Caminos a explorar

A corto plazo, herramientas como RelaySMS podrían usarse para comunicarse con plataformas en línea preparadas para transmitir información entrante a los suscriptores. Esto podría realizarse a través de canales de mensajería como grupos de WhatsApp, Signal o Telegram.

---

## Plataformas

Este es el primer y original modo de comunicación de RelaySMS. Esta funcionalidad requiere que el usuario guarde el acceso a sus plataformas en línea en una instancia en la nube ejecutando los Vaults de RelaySMS. Los tipos de acceso que se guardan son Tokens OAuth2.0 (con scopes de solo publicación) y tokens de cuenta (para plataformas como Telegram). Estos tokens están diseñados para permitir que un tercero actúe en nombre del usuario, y los scopes determinan en qué medida el tercero puede actuar.

El usuario debe confiar en el tercero para otorgar estos tokens; existe el riesgo de que el tercero actúe en nombre del usuario sin su consentimiento.

RelaySMS educa a los usuarios sobre cómo verificar si un tercero ha actuado en su nombre más allá de cualquier solicitud realizada por ellos. Esto es estándar en casi todas las plataformas, ya que los scopes otorgados por el usuario no permiten al servicio modificar (eliminar o cambiar) los registros de cualquier acción realizada.

Los beneficios de usar sus plataformas en línea de esta manera incluyen factores como la consistencia, lo que aumenta la confianza; el receptor sabe quién es el remitente. En casos como redes sociales, el usuario puede tener un gran seguimiento que se beneficiaría de recibir actualizaciones en tiempo real mientras el usuario está desconectado. Los seguidores no pueden transferirse a otra cuenta y el mensaje debe ser recibido. Esto también se aplica a los grupos de los que el usuario forma parte.

Se requiere que el usuario realice estos pasos mientras tenga acceso a una conexión a Internet. Se recomienda encarecidamente que esto se incluya en las primeras etapas de preparación para un corte de Internet. Tenemos algunas guías aquí sobre cómo prepararse para un corte de Internet con más recursos a continuación.

Las plataformas actualmente soportadas son:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Bridges

Este modo de publicación con RelaySMS se considera secundario pero crucial. En casos donde el usuario no tiene acceso a Internet para guardar sus plataformas en línea, o desea enviar información sin usar sus cuentas principales, utiliza bridges.

Los bridges funcionan transformando el número de teléfono del usuario en un alias de correo electrónico permanente que puede enviar y recibir mensajes. Un ejemplo de escenario:

Un usuario con el número: +237123456789 usa uno de los clientes (Android o iOS) para redactar y enviar un mensaje. El mensaje se cifra en el dispositivo y se envía a un cliente Gateway que lo remite al servidor Gateway. El servidor Gateway determina que se trata de un mensaje de bridge y lo envía al servidor bridge. El servidor bridge crea entonces un alias a partir del número de teléfono del usuario y almacena de forma segura las claves públicas correspondientes en el Vault. Un ejemplo de alias para este número sería: 237123456789@relaysms.me.

El mensaje del usuario se envía a los destinatarios previstos usando ese alias. Esto es muy útil si el número del usuario ya era conocido por el destinatario, ya que genera confianza en el origen del mensaje.

En casos donde el destinatario responde al mensaje del usuario, la respuesta se cifra y se reenvía al usuario vía SMS. El usuario puede descifrar el mensaje desde su cliente RelaySMS (app).

Este modo permite comunicación bidireccional entre el remitente y el destinatario. Una vez creado el alias, cualquier mensaje enviado al alias se cifra y se reenvía al usuario por SMS.

[Se debería incluir más información sobre la bandeja de entrada del alias y cómo se asegura hasta que el mensaje se reenvíe al usuario]

---

## Clientes

Los clientes más compatibles para RelaySMS son los clientes Android y iOS. Ambos ofrecen funcionalidades diferentes, con el cliente Android recibiendo actualizaciones más rápido que el iOS.

Todos los clientes integran los mismos protocolos estandarizados desarrollados para la comunicación con el Vault y la publicación de mensajes. Los estándares que cada cliente debe integrar son:

- Crear una cuenta en el Vault
- Iniciar sesión en una cuenta del Vault
- Guardar cuentas en el Vault para los siguientes protocolos:
  - OAuth2.0, ej. Bluesky
  - Autenticación basada en número de teléfono, ej. Telegram
  - Publicar los primeros mensajes con Bridges
  - Publicar mensajes posteriores con Bridges
  - Publicar mensajes desde plataformas guardadas
  - Publicar mensajes desde plataformas guardadas usando un Device ID
  - Almacenar tokens en el dispositivo
  - Publicar con tokens almacenados en el dispositivo

Conceptos introducidos aquí:

- **Device ID:** Es un identificador derivado y almacenado tanto en el Vault como en el cliente. Esto permite al usuario publicar mensajes a través de sus plataformas guardadas sin usar su número de teléfono como principal medio de identificación. Útil en teléfonos dual-sim donde el número usado para enviar SMS podría cambiar, pero todos los detalles necesarios aún están disponibles en el dispositivo. Es un interruptor opcional y no debe estar activado por defecto.

- **Almacenamiento de tokens en el dispositivo:** Los tokens del usuario (OAuth2.0 o basados en número de teléfono) se almacenan principalmente de manera segura en el Vault. Los clientes pueden solicitar que estos tokens se migren del Vault al dispositivo. Los tokens se agregan al mensaje durante la publicación. En caso de un refresh token (mecanismo común con OAuth2.0), el nuevo token se envía de nuevo al dispositivo por SMS.

Los clientes son libres de implementar cualquier método de publicación que necesiten para su proyecto.

Los clientes predeterminados permiten al usuario apuntarlos a la instancia de Vault que prefiera – más detalles sobre autoalojamiento. Esto requiere que el cliente Gateway que usan para publicar también apunte a esa instancia del Vault, de lo contrario los mensajes no se descifrarán en el servidor.

Dado que cada cliente puede ser diferente, cada cliente debe ofrecer sus propios clientes. Para los tutoriales predeterminados proporcionados por el equipo de RelaySMS, se pueden encontrar aquí [insertar tutoriales de RelaySMS].

---

## Clientes Gateway

Los clientes Gateway son dispositivos capaces de recibir mensajes SMS entrantes desde los clientes de RelaySMS. Los clientes Gateway pueden ejecutarse en dispositivos Android o Linux con módems USB. Las instancias predeterminadas de RelaySMS usan dispositivos Android ejecutando DekuSMS como clientes Gateway predeterminados. Sin embargo, los protocolos para transformar cualquier receptor en un cliente Gateway consisten en enviar una carga útil en formato JSON [insertar referencia] a una instancia cloud ejecutando un servidor Gateway.

Como los clientes Gateway no comparten claves con los clientes (ni conocen a los clientes de antemano), no pueden descifrar los mensajes entrantes. Los mensajes enviados también soportan forward secrecy; cada mensaje se cifra con una clave diferente, por lo que derivar la clave de un mensaje no permite derivar la de los mensajes siguientes.

---

## Autoalojamiento (para redactar según el autoalojamiento real)

- Requisitos
- Añadir plataformas
- Clientes
- Clientes Gateway
- Soporte
- Bitcoin
- Donaciones OSS
- Paypal
- Posibles avenidas
- Internet por SMS
- Todos los mensajes por SMS

---

## Lecciones aprendidas

- **Comenzar fuerte:** Publicar demasiado pronto las necesidades técnicas de la plataforma puede llevar a los usuarios a formarse una opinión negativa sobre el software. Esto puede ser muy difícil de revertir, ya que la tracción inicial influye mucho en la formación de opiniones. Saber qué significa “demasiado pronto” también es muy difícil y generalmente seguimos adelante cuando “parece” listo.
- **Crear una comunidad temprano:** Comunicar el desarrollo mientras ocurre a los miembros mantiene a todos comprometidos y más comprensivos con los problemas que enfrentan. Experimentamos esto con DekuSMS, que creó un canal de Telegram temprano y comenzó a comunicar a los miembros sobre el desarrollo y las funcionalidades próximas. Los usuarios compartían sus problemas y buscaban actualizaciones – pero incluso si el software no estaba listo o tenía errores, la gente se unía a la comunidad.
