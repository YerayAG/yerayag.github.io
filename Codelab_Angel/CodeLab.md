author: Ángel Alberto Martínez Sánchez
summary: Resumen del CodeLab
id:Proyecto 1.1
categories: codelab,markdown
environments: Web
status: Published


# ÍNDICE

[Introducción](#Introducción)

[Guía para Bastionar la BIOS/UEFI de mi ordenador.](#guía-para-bastionar-la-biosuefi-de-mi-ordenador)
1. [Configuración de la contraseña de usuario o de encendido (Power-On-Password).](#configuración-de-la-contraseña-de-usuario-o-de-encendido-power-on-password)
2. [Configuración de la Contraseña de Administrador (Supervisor Password).](#configuración-de-la-contraseña-de-administrador-supervisor-password)
3. [Restricción del Arranque desde Dispositivos Externos.](#restricción-del-arranque-desde-dispositivos-externos)	
4. [Configuración de un Orden de Arranque Seguro.](#configuración-de-un-orden-de-arranque-seguro)	
5. [Configuración de Otras Opciones de Seguridad.](#configuración-de-otras-opciones-de-seguridad)

[Conclusión](#conclusión)


## Introducción
La seguridad de un equipo informático no solo depende de las configuraciones dentro del sistema operativo, sino que comienza en el momento en que el ordenador se enciende. La BIOS (Basic Input/Output System) o su versión moderna, la UEFI, es el software de nivel más bajo que controla el hardware de un ordenador antes de que el sistema operativo se inicie. Una BIOS/UEFI sin protección deja al dispositivo vulnerable a ataques físicos y de software que podrían comprometer la información almacenada en él.

Asegurar la BIOS/UEFI es un paso esencial para proteger la integridad del sistema y los datos personales. En este documento, se detallan los pasos necesarios para configurar una BIOS/UEFI segura en un ordenador HP con procesador Intel Core i7 de 8ª generación. Cada paso está diseñado para reforzar la seguridad contra accesos no autorizados y minimizar los riesgos de exposición ante posibles ataques.


## Guía para Bastionar la BIOS/UEFI de mi ordenador.

La seguridad de un ordenador comienza antes de que el sistema operativo siquiera haya iniciado. Para asegurar el ordenador desde el primer momento de encendido, es importante configurar adecuadamente la BIOS o UEFI. Esta configuración limita el acceso a la configuración avanzada de hardware y reduce las posibilidades de que personas no autorizadas puedan manipular el equipo o extraer información sensible. A continuación, explicaré cómo realizar cada paso necesario para aumentar la seguridad de tu dispositivo HP con procesador Intel Core i7 de octava generación.

## Configuración de la contraseña de usuario o de encendido (Power-On-Password).

**Propósito**: La contraseña de encendido se establece para proteger el acceso al equipo desde el momento en que se inicia. Esto significa que cualquiera que intente acceder al ordenador, ya sea encendiéndose o después de un reinicio, necesitará ingresar una contraseña específica. En caso de robo o pérdida del dispositivo, esta medida es una primera línea de defensa que impide el acceso a datos sensibles sin la autorización adecuada.

Para configurar dicha contraseña, se accede al menú de la BIOS (en HP suele ser la tecla F1O o ESC al encender el dispositivo). Una vez dentro, se puede navegar a la sección de Seguridad donde aparece la opción de Establecer Contraseña de Encendido o Power-On Password. La BIOS solicitará que ingreses y confirmes una contraseña. Para una mayor seguridad, la contraseña debe ser compleja, utilizando combinaciones de letras, números y caracteres especiales, evitando combinaciones fáciles de adivinar como fechas personales. Este paso es clave, ya que protege el acceso básico al sistema.


## Configuración de la Contraseña de Administrador (Supervisor Password).

**Propósito:** La contraseña de administrador tiene un nivel de importancia aún mayor, ya que protege el acceso a la configuración de la BIOS en sí. Con esta contraseña, cualquier intento de modificar configuraciones críticas del sistema queda restringido. Esta medida es esencial para evitar que personas no autorizadas puedan cambiar configuraciones de arranque o de seguridad que protegen al equipo de ataques de malware, modificación no autorizada del sistema o del hardware.



Para configurarla, también se ingresa al menú de la BIOS y, en la sección de Seguridad, se busca la opción de Contraseña de Administrador o Supervisor Password. Al igual que la contraseña de encendido, esta debe ser segura y se debe tener cuidado de no perderla, ya que para restablecerla puede ser necesario acudir al servicio técnico de HP. Es aconsejable que esta contraseña sea distinta de la de encendido para añadir un nivel adicional de seguridad.


## Restricción del Arranque desde Dispositivos Externos.

**Propósito:** Limitar el arranque desde dispositivos externos como USBs o discos ópticos reduce significativamente el riesgo de que alguien pueda ejecutar software malicioso o sistemas operativos alternativos que ignoren las protecciones de tu sistema operativo principal. Esta restricción es particularmente útil para proteger contra ataques que se aprovechan del arranque desde dispositivos externos para manipular o extraer información del sistema.

En la configuración de la BIOS, usualmente bajo las opciones de Arranque o Seguridad, se encuentra la posibilidad de deshabilitar el arranque desde unidades externas. En algunos sistemas, esto puede configurarse directamente como una opción de “Arranque Seguro” (Secure Boot), la cual impide que el ordenador cargue cualquier sistema operativo que no esté firmado y autorizado. Esto significa que, al habilitar el arranque seguro, solo se podrá iniciar el sistema operativo original del equipo, evitando que se utilicen USBs o CDs para instalar o ejecutar programas sin autorización.


## Configuración de un Orden de Arranque Seguro.

**Propósito.** El orden de arranque establece qué dispositivos serán consultados y en qué secuencia al iniciar el equipo. Por defecto, muchos ordenadores buscan primero en unidades externas, lo cual podría facilitar un ataque si alguien conecta primero en unidades externas, lo cual podría facilitar un ataque si alguien conecta un dispositivo externo para modificar o espiar el sistema. Al configurar el disco duro interno como primera opción, estamos asegurándonos de que, incluso si se conecta un dispositivo externo, el equipo no intentará cargarlo en el arranque.

Para establecer un orden de arranque seguro, en la BIOS se puede acceder a la sección de Arranque (Boot), donde se muestra una lista con las posibles opciones de arranque. Configurar el disco duro como la primera opción y las unidades USB o CD/DVD al final –o desactivarlas si es posible— asegura que el equipo siempre arranque desde el sistema operativo interno, bloqueando la posibilidad de que dispositivos externos inicien el sistema sin autorización. Al finalizar, es importante guardar los cambios.


## Configuración de Otras Opciones de Seguridad.

Además de las medidas anteriores, existen otras opciones que pueden reforzar la seguridad del sistema desde la BIOS, especialmente en equipos modernos como el tuyo.
- **Arranque Seguro (Secure Boot):** Esta función es una de las protecciones avanzadas más importantes en BIOS/UEFI modernas. Activar Secure Boot garantiza que solo sistemas operativos firmados y autorizados puedan iniciar en el equipo. Esta configuración se encuentra en la sección de Seguridad o Arranque. Activar el Arranque Seguro proporciona una capa de autenticidad para el software, protegiéndolo contra programas no autorizados.


- **Desactivación del puerto USB en arranque:** En algunos sistemas HP, es posible deshabilitar el arranque desde puertos USB. Esta medida es útil para protegerse contra ataques mediante dispositivos de almacenamiento extraíble que podrían ser utilizados para iniciar sistemas operativos alternativos o cargar malware. Si esta opción está disponible, se encuentra en la sección de Arranque o Seguridad.


- **Módulo de Plataforma Confiable (TPM):** TPM es un chip de seguridad que permite almacenar datos críticos como contraseñas y claves de cifrado de forma segura. Activar el TPM desde la BIOS protege y cifra datos importantes en el proceso de arranque y durante el uso del sistema, lo que añade una capa de protección importante en caso de pérdida o robo.


- **Intel® Anti-Theft Technology:** En caso de que tu equipo y procesador sean compatibles, esta tecnología permite rastrear y bloquear el dispositivo de forma remota, siendo muy útil en casos de pérdida o robo. La configuración de esta opción depende de que el equipo tenga este soporte y de la activación de la función en el menú de seguridad de la BIOS.

## Conclusión

Estas configuraciones en la BIOS/UEFI son cruciales para asegurar el dispositivo contra posibles accesos no autorizados y proteger tus datos desde el primer momento de encendido. Cada medida —desde las contraseñas de encendido y administrador hasta el arranque seguro y la desactivación de arranque desde puertos USB— fortalece la seguridad de tu equipo HP con procesador Intel Core i7, minimizando la exposición a amenazas y ataques que podrían comprometer la información almacenada.
Recuerda guardar siempre los cambios al finalizar cada configuración para asegurar que todas estas medidas entren en vigor correctamente al reiniciar el sistema.
