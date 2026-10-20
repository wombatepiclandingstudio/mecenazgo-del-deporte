# Verificación legal

Comprobación de las afirmaciones sobre mecenazgo que hace la aplicación (y el documento
`docs/informe-mecenazgo.md` que las respalda) contra fuentes primarias: BOE (textos
consolidados), Agencia Tributaria y normativa foral de Navarra.

**Fecha de consulta de todas las fuentes: 20/10/2026.** No hubo bloqueos: el BOE sirvió
el texto consolidado de la Ley 49/2002 (BOE-A-2002-25039), del DFL 2/2023 de Navarra
(BOE-A-2023-16401), de la Ley 28/1990 del Convenio Económico (BOE-A-1990-31117), de la
LIRPF (BOE-A-2006-20764) y de la Ley 31/2022 de PGE 2023 (BOE-A-2022-22128). La Agencia
Tributaria se usó como fuente oficial complementaria (manuales prácticos de IRPF e IS).

| Resultado | Nº |
|---|---|
| CONFIRMED | 6 |
| WRONG | 4 |
| UNVERIFIABLE | 0 |

---

## 1. Fecha oficial de la Ley 49/2002

**Reclamación.** La app (README.md, línea 82, y `components/mecenazgo/PanelAportante.tsx`,
línea 168) la llama «Ley 49/2002, de 27 de diciembre, de Mecenazgo y deducciones fiscales
por donativos a entidades sin fines lucrativos». El enunciado de la tarea reproduce esa
fórmula: «BOE Ley 49/2002 de 27 de diciembre, de Incentivos fiscales al mecenazgo y al
patrocinio».

**Veredicto: WRONG.**

**Valor correcto.** «Ley 49/2002, de **23 de diciembre** de 2002, de régimen fiscal de las
entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo». Publicada en el
«BOE» núm. 307, de 24/12/2002; entrada en vigor 25/12/2002.

> Ley 49/2002, de 23 de diciembre, de régimen fiscal de las entidades sin fines lucrativos y
> de los incentivos fiscales al mecenazgo.
> «BOE» núm. 307, de 24/12/2002. Entrada en vigor: 25/12/2002. Referencia: BOE-A-2002-25039.

**Cita literal (firma del texto consolidado).**

> Madrid, 23 de diciembre de 2002.
> JUAN CARLOS R.

**Nota.** La app es incoherente consigo misma: `lib/mecenazgo.ts` (línea 2),
`app/layout.tsx` (línea 30), `lib/certificado.tsx` (línea 88) y
`components/mecenazgo/PanelCertificado.tsx` (línea 255) sí escriben «de 23 de diciembre».
El error queda en `README.md:82` y `PanelAportante.tsx:168`, que además da un título
inventado («de Mecenazgo y deducciones fiscales por donativos a entidades sin fines
lucrativos») y omite «régimen fiscal de las entidades sin fines lucrativos». Tampoco
aparece el vocablo «patrocinio» en el título oficial: el patrocinio publicitario se rige
por la Ley 34/1988, de 11 de noviembre, General de Publicidad.

**Fuente.** BOE, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039
(última actualización publicada el 20/12/2023). ELI:
https://www.boe.es/eli/es/l/2002/12/23/49/con. Consultado el 20/10/2026.

---

## 2. Disposición adicional del deporte: ¿«DA 12a» o «decimosegunda»?

**Reclamación.** La app etiqueta la norma deportiva «DA 12a.1» y «DA 12a.2»
(`lib/estado.ts`, `DEPORTE_LEY`); el README dice «disposición adicional decimosegunda».

**Veredicto: CONFIRMED** (el ordinal 12 y la forma «decimosegunda» son la misma
disposición; el único defecto es la grafía «DA 12a», que debe escribirse «DA 12ª»).

**Valor correcto.** Se trata de la **disposición adicional decimosegunda** (DA 12ª) de la
Ley 49/2002. Su título literal es «Federaciones deportivas, Comité Olímpico Español y
Comité Paralímpico Español» y regula dos cosas: (1) que los ingresos de los espectáculos
deportivos no computen en el 40 % de ingresos de explotaciones no exentas del art. 3.3.º, y
(2) la exención en el Impuesto sobre Sociedades de las rentas por celebración,
retransmisión o difusión de competiciones en las que participen selecciones nacionales o
autonómicas, cuando la organización sea de «exclusiva competencia».

**Cita literal (texto consolidado, DA decimosegunda).**

> Disposición adicional decimosegunda. Federaciones deportivas, Comité Olímpico Español y
> Comité Paralímpico Español.
> 1. Los ingresos de los espectáculos deportivos obtenidos por las entidades relacionadas
> en el párrafo e) del artículo 2 de esta Ley no se incluirán en el cómputo del 40 por
> ciento de los ingresos de explotaciones económicas no exentas a que se refiere el
> requisito del número 3.º de su artículo 3.
> 2. Están exentas del Impuesto sobre Sociedades las rentas obtenidas por las entidades
> relacionadas en el párrafo e) del artículo 2 de esta Ley que procedan de la celebración,
> retransmisión o difusión por cualquier medio de las competiciones amistosas u oficiales en
> las que participen las selecciones nacionales o autonómicas, siempre que la organización de
> dichas competiciones sea de su exclusiva competencia.

**Orden de las disposiciones adicionales (índice del texto consolidado).** primera,
segunda, tercera, cuarta, quinta, sexta, séptima, octava, novena, décima, decimoprimera,
**decimosegunda**, decimotercera, decimocuarta, decimoquinta, decimosexta, decimoséptima,
decimoctava, decimonovena. Corrobora el ordinal la disposición derogatoria única:

> ... y, en particular, el Título II y las disposiciones adicionales cuarta a séptima,
> novena a duodécima y decimoquinta y decimosexta de la Ley 30/1994 ...

**Matiz de precisión (no veredicto, pero afecta a la redacción de la app).** El título
menciona «Federaciones deportivas, Comité Olímpico Español y Comité Paralímpico Español», pero
el texto dispositivo se refiere a «las entidades relacionadas en el párrafo e) del artículo 2»,
y esa letra e) es «Las federaciones y asociaciones de las entidades sin fines lucrativos a que
se refieren las letras anteriores»; las federaciones deportivas españolas, las territoriales
integradas en ellas, el Comité Olímpico Español y el Comité Paralímpico Español son los de la
letra d) («Las federaciones deportivas españolas, las federaciones deportivas territoriales de
ámbito autonómico integradas en aquellas, el Comité Olímpico Español y el Comité Paralímpico
Español»). La DA vigila, por tanto, al nivel de federaciones y asociaciones de esas
entidades, no directamente a las del art. 2.d). La app reproduce el resumen del título sin
esta precisión.

**Fuente.** BOE, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039
(última actualización 20/12/2023). Consultado el 20/10/2026.

---

## 3. Art. 17: los «siete datos» del certificado

**Reclamación.** `PanelCertificado.tsx` (línea 80): «Los siete datos que exige el artículo 17
de la Ley 49/2002»; `PanelLey.tsx` (línea 150): «Artículo 17: datos que debe recoger»;
`lib/certificado.tsx` (línea 140, pie del PDF): «Ley 49/2002, artículo 17»; `lib/mecenazgo.ts`
(línea 49) y `lib/estado.ts` (`DEPORTE_LEY`, ficha «Art. 16»): «el certificado con los datos
del artículo 17». `CERTIFICACION_DATOS` enumera 7 ítems.

**Veredicto: WRONG.** El artículo 17 no regula la certificación, y la lista legal tiene seis
apartados, no siete.

**Valor correcto.**

1. El contenido de la certificación lo exige el **artículo 24.3** («Justificación de los
   donativos, donaciones y aportaciones deducibles»), con **seis** extremos a)–f).
2. El **artículo 17** («Donativos, donaciones y aportaciones deducibles») tiene una lista
   propia de **seis** letras a)–f) en su apartado 1, y su apartado 2 es el del límite
   simbólico.

**Cita literal (art. 24.3).**

> 3. La certificación a la que se hace referencia en los apartados anteriores deberá
> contener, al menos, los siguientes extremos:
> a) El número de identificación fiscal y los datos de identificación personal del donante y
> de la entidad donataria.
> b) Mención expresa de que la entidad donataria se encuentra incluida en las reguladas en el
> artículo 16 de esta Ley.
> c) Fecha e importe del donativo cuando éste sea dinerario.
> d) Documento público u otro documento auténtico que acredite la entrega del bien donado
> cuando no se trate de donativos en dinero.
> e) Destino que la entidad donataria dará al objeto donado en el cumplimiento de su
> finalidad específica.
> f) Mención expresa del carácter irrevocable de la donación, sin perjuicio de lo establecido
> en las normas imperativas civiles que regulan la revocación de donaciones.

**Cita literal (art. 17.1).**

> 1. Darán derecho a practicar las deducciones previstas en este Título los siguientes
> donativos, donaciones y aportaciones irrevocables, puros y simples, realizados en favor de
> las entidades a las que se refiere el artículo anterior:
> a) Donativos y donaciones dinerarias, de bienes o de derechos.
> b) Cuotas de afiliación a asociaciones que no se correspondan con el derecho a percibir una
> prestación presente o futura.
> c) La constitución de un derecho real de usufructo sobre bienes, derechos o valores,
> realizada sin contraprestación.
> d) Donativos o donaciones de bienes que formen parte del Patrimonio Histórico Español, que
> estén inscritos en el Registro general de bienes de interés cultural o incluidos en el
> Inventario general a que se refiere la Ley 16/1985, de 25 de junio, del Patrimonio Histórico
> Español.
> e) Donativos o donaciones de bienes culturales de calidad garantizada en favor de entidades
> que persigan entre sus fines la realización de actividades museísticas y el fomento y
> difusión del patrimonio histórico artístico.
> f) La cesión de uso de un bien mueble o inmueble, por un tiempo determinado, realizada sin
> contraprestación.

**Sobre el número «siete».** Los 7 ítems de la app salen de desdoblar la letra a) del
artículo 24.3 en dos («NIF y datos de identificación del donante» / «NIF y datos de
identificación de la entidad donataria»). Es exactamente lo que hace la Agencia Tributaria
en su manual de ayuda al modelo 100 (apartado 9.4.1.2), que lista 7 bullets, pero la ley
tiene 6 letras. Además la app **omite** el extremo d) del artículo (documento público que
acredite la entrega del bien donado cuando el donativo no es en dinero) en el certificado
PDF: el documento generado (`lib/certificado.tsx`) no lo contempla.

**Fuente.** BOE, texto consolidado, arts. 17 y 24,
https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039. Complementario oficial: Agencia
Tributaria, Manual de ayuda modelo 100, apartado 9.4.1.2,
https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/9-cumplimentacion-irpf-anexos/9_4-deducciones-donativos-otras-aportaciones/9_4_1-donativos-realizados-entidades-ley-492002/9_4_1_2-aportaciones-entidades-beneficiarias-mecenazgo.html.
Consultados el 20/10/2026.

---

## 4. Periodo de reiteración y tabla de tipos

**Reclamación.** La app (`lib/estado.ts`, `ESCALA_IS`, `ESCALA_IRPF`, `PRIORITARIAS`;
`lib/mecenazgo.ts`, `EJERCICIOS_REITERACION = 3`) afirma «tres ejercicios a la misma entidad,
importe igual o superior» y ofrece IS 40/50/45/55 e IRPF 80/40/45 (prioritarias 85/45/50;
límites 15 % IRPF y 20 % IS).

**Veredicto: CONFIRMED.** El periodo es de **tres ejercicios consecutivos** (la ley mira
los «dos períodos impositivos inmediatos anteriores», pero exige además donativo en el
ejercicio en curso, y la cantidad de este y del anterior ha de ser igual o superior a la del
ejercicio inmediato anterior). Toda la tabla de tipos de la app es correcta.

**Cita literal (art. 20.1, segundo párrafo, IS).**

> Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos,
> donaciones o aportaciones con derecho a deducción en favor de una misma entidad, siendo
> el importe del donativo, donación o aportación de este período impositivo y el del período
> impositivo anterior, por importe igual o superior, en cada uno de ellos, al del período
> impositivo inmediato anterior, el porcentaje de deducción aplicable a la base de la
> deducción en favor de esa misma entidad será el 50 %.

**Cita literal (art. 19.1, segundo párrafo, IRPF).**

> Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos,
> donaciones o aportaciones con derecho a deducción en favor de una misma entidad, siendo
> el importe del donativo, donación o aportación de este ejercicio y el del período impositivo
> anterior, igual o superior, en cada uno de ellos, al del ejercicio inmediato anterior, el
> porcentaje de deducción aplicable a la base de la deducción en favor de esa misma entidad
> que exceda de 250 euros, será el 45 por ciento.

**Confirmación administrativa del «tres años».** Agencia Tributaria, Manual práctico de
IRPF 2025, «3. Porcentajes de deducción»:

> Importante: la aplicación del porcentaje de deducción por donativos a una misma entidad
> exige la realización de donativos durante, al menos, tres años consecutivos. Por tanto,
> desde 2024 se reduce de 4 a 3 años el número de ejercicios en que se han de realizar los
> donativos a una misma entidad por importe igual o superior a los del ejercicio anterior...

**Tablas correctas (a 2025, PGE 2023 prorrogados).**

| Concepto | IRPF (art. 19 + DA 57ª Ley 31/2022) | IS (art. 20 + DA 57ª Ley 31/2022) |
|---|---|---|
| General | 80 % hasta 250 €; 40 % resto | 40 % |
| Donativo reiterado (3 ejercicios) | 45 % sobre lo que exceda de 250 € | 50 % |
| Actividad prioritaria | 85 % / 45 % / 50 % | 45 % / 55 % |
| Límite de la base de deducción | 10 % de la base liquidable (15 % prioritaria) | 15 % de la base imponible (20 % prioritaria) |

**Cita literal (Ley 31/2022, DA 57ª, apartado Dos).**

> Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21
> de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en
> relación con las actividades incluidas en el apartado anterior.

**Fuente.** BOE, texto consolidado Ley 49/2002, arts. 19, 20, 22
(https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039); BOE, Ley 31/2022, DA 57ª
(https://www.boe.es/buscar/act.php?id=BOE-A-2022-22128); BOE, Ley 35/2006, art. 69.1
(https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764); AEAT, Manual práctico de IRPF 2025
«3. Porcentajes de deducción» y «1. Porcentajes aplicables» (actividades prioritarias);
AEAT, Manual práctico de IS 2025 «Porcentajes». Consultados el 20/10/2026.

---

## 5. Arts. 25, 26 y 27: las tres modalidades de mecenazgo

**Reclamación.** `lib/estado.ts` (`MODALIDADES`) presenta los arts. 25, 26 y 27 como las tres
modalidades: convenio de colaboración empresarial, gastos en actividades de interés general
y programas de apoyo a acontecimientos.

**Veredicto: CONFIRMED.** Los tres artículos existen, con esos títulos, y están en el
Capítulo III («Régimen fiscal de otras formas de mecenazgo») del Título III.

**Cita literal (encabezados).**

> Artículo 25. Convenios de colaboración empresarial en actividades de interés general.
> Artículo 26. Gastos en actividades de interés general.
> Artículo 27. Programas de apoyo a acontecimientos de excepcional interés público.

**Cita literal (art. 25.1–2, en lo esencial).**

> Se entenderá por convenio de colaboración empresarial en actividades de interés general, a
> los efectos previstos en esta Ley, aquel por el cual las entidades a que se refiere el
> artículo 16, a cambio de una ayuda económica para la realización de las actividades que
> efectúen en cumplimiento del objeto o finalidad específica de la entidad [...] se
> comprometen por escrito a difundir, por cualquier medio, la participación del colaborador en
> dichas actividades.
> La difusión a que se refiere el párrafo anterior, en el marco de los convenios de colaboración
> definidos en este artículo no constituye una prestación de servicios.
> 2. Las cantidades satisfechas o los gastos realizados tendrán la consideración de gastos
> deducibles para determinar la base imponible del Impuesto sobre Sociedades de la entidad
> colaboradora [...]
> 3. El régimen fiscal aplicable a las ayudas económicas en cumplimiento de estos convenios de
> colaboración será incompatible con los demás incentivos fiscales previstos en esta Ley.

**Cita literal (art. 26).**

> 1. [...] tendrán la consideración de deducibles los gastos realizados para los fines de
> interés general a que se refiere el número 1.º del artículo 3 de esta Ley.
> 2. La deducción de los gastos en actividades de interés general a que se refiere el apartado
> anterior será incompatible con los demás incentivos fiscales previstos en esta Ley.

**Advertencia al uso de la app.** La ficha `DEPORTE_LEY` de `lib/estado.ts` y la nota de
`PanelLey.tsx` (línea 247-249) dicen que «el patrocinio publicitario [...] se regula en los
artículos 25 a 27». Eso es **incorrecto**: los arts. 25 a 27 son las tres modalidades de
mecenazgo, y el patrocinio publicitario se rige por la Ley 34/1988, de 11 de noviembre,
General de Publicidad, apareciendo en la Ley 49/2002 solo como mención en el art. 6.1.a).
El límite simbólico del 15 % y los 25.000 € tampoco está en los arts. 25 a 27, sino en el
art. 17.2.

**Fuente.** BOE, texto consolidado, arts. 25 a 27,
https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039. Consultado el 20/10/2026.

---

## 6. Navarra: DFL 2/2023, de 24 de mayo

**Reclamación.** «Decreto Foral Legislativo 2/2023, de 24 de mayo» que «dedica los artículos
39 a 43 al mecenazgo deportivo»; limite de interés social en las competición federadas;
empresa: partida deducible con tope max(30 % base, 3 ‰ cifra de negocios) + deducción 30 %
sobre cuota líquida primeros 300 € y 20 % resto; persona física: 80 % primeros 250 €, 40 %
resto, + 30 %/20 % sobre cuota líquida para cultural; régimen llamado «Decreto Foral
Legislativo» con reconocimiento previo ante el departamento competente.

**Veredicto: WRONG** (mixto: el título, la fecha, el límite deportivo y el reconocimiento
previo son correctos; el rango de artículos y el reparto de los tipos de deducción en
cuota líquida no lo son).

**Valor correcto.**

- **Título y fecha (correctos).** «Decreto Foral Legislativo 2/2023, de 24 de mayo, por el
  que se aprueba el texto refundido de las disposiciones del régimen tributario especial de
  las fundaciones y otras entidades sin fines lucrativos y de los incentivos fiscales al
  mecenazgo». «BON» núm. 124, de 13/06/2023; «BOE» núm. 168, de 15/07/2023. Entrada en vigor
  14/06/2023. Última actualización publicada el 31/12/2024 (Ley Foral 20/2024, de 26 de
  diciembre, y Ley Foral 22/2023, de 26 de diciembre).
- **(a) Rango de artículos del mecenazgo deportivo: WRONG.** La Sección 4.ª «Mecenazgo
  deportivo» comprende los artículos **39 a 42**, no 39 a 43:
  - Art. 39. Concepto y modalidades de mecenazgo deportivo.
  - Art. 40. Personas y entidades beneficiarias del mecenazgo deportivo.
  - Art. 41. Concepto de actividad deportiva declarada de interés social.
  - Art. 42. Solicitud de declaración de interés social.
  El art. 43 («Impuesto sobre la Renta de las Personas Físicas»), el 44 («Impuesto sobre
  Sociedades») y el 45 («Otros incentivos fiscales») están en la Sección 5.ª, «Incentivos
  fiscales al mecenazgo social, medioambiental y deportivo», y se aplican a los tres tipos.
- **(b) Límite de interés social: CONFIRMED.** Es el art. 41.3.
- **(c) Tipos: PARTIMENTE WRONG.**
  - *Mecenazgo cultural* (empresa, art. 31.1): partida deducible con tope del mayor entre
    30 % de la base imponible y 3 ‰ del importe neto de la cifra de negocios, **más**
    deducción de la cuota líquida del 30 % de los primeros 300 € y 20 % del exceso. ✔ es lo
    que dice la app.
  - *Mecenazgo social, medioambiental y deportivo* (empresa, art. 44.1): misma partida
    deducible y mismo tope, pero la deducción sobre la cuota líquida es **del 20 % del
    importe, en plano, sin tramo de 300 €**. La app aplica 30 %/20 % a todos los destinos.
  - *Persona física*: solo 80 % de los primeros 250 € y 40 % del resto (arts. 30.1 para
    cultural y 43.1 para social, medioambiental y deportivo). **No existe** una deducción
    adicional del 30 %/20 % sobre la cuota líquida para las personas físicas: el 30 %/20 %
    sobre cuota líquida es del Impuesto sobre Sociedades (art. 31.1.b). La app
    (`lib/mecenazgo.ts`, rama IRPF y destino «cultural») y `docs/informe-mecenazgo.md`
    (tabla de personas físicas) afirman lo contrario.
- **(d) Nombre y reconocimiento previo: CONFIRMED.** La norma es un «Decreto Foral
  Legislativo» y el reconocimiento previo existe, aunque con un matiz por tipo de mecenazgo:
  el reconocimiento del régimen lo pide la entidad al departamento competente en mecenazgo
  **social** (arts. 33.1 y 35) o **medioambiental** (arts. 36.1 y 38); en **cultural** y
  **deportivo** lo que se declara es el proyecto o la actividad como «de interés social»
  (arts. 27 y 28, y art. 42), mientras que el acceso de la entidad al régimen tributario
  especial del Título I es por opción (art. 3).

**Cita literal (art. 41.3).**

> 3. En ningún caso podrán ser declaradas de interés social, a los efectos del mecenazgo
> deportivo, las actividades deportivas consistentes en la participación en competiciones
> federadas.

**Cita literal (arts. 39.1 y 42.3, en lo esencial).**

> 1. Se entiende por mecenazgo deportivo la participación privada en la financiación de
> actividades deportivas de duración determinada que sean declaradas de interés social por
> la Administración Deportiva de la Comunidad Foral de Navarra.

> 3. La persona titular de la dirección gerencia de la Administración Deportiva de la
> Comunidad Foral de Navarra resolverá las solicitudes, previo informe preceptivo del
> Consejo Navarro del Deporte, así como, en su caso, la revocación de la declaración de
> beneficiaria del mecenazgo deportivo, cuando se compruebe que no se reúne alguno de los
> requisitos.

**Cita literal (art. 44.1, empresas, mecenazgo social, medioambiental y deportivo).**

> 1. Los contribuyentes del Impuesto sobre Sociedades gozarán de los siguientes incentivos
> fiscales:
> a) Para la determinación de la base imponible, el importe en que se valoren las modalidades
> de cada tipo de mecenazgo tendrá la consideración de partida deducible. El importe de la
> partida deducible en la base imponible no podrá exceder del mayor de los siguientes límites:
> 1.º El 30 por ciento de la base imponible conforme a lo establecido en el artículo 49.1.
> 2.º El 3 por mil del importe neto de la cifra de negocios.
> De la aplicación de lo dispuesto en este ordinal no podrá resultar una base imponible
> negativa.
> b) Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del
> 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.

**Cita literal (art. 31.1.b, empresas, mecenazgo cultural).**

> b) Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del
> 30 por ciento de los primeros 300 euros en que se valoren las modalidades de mecenazgo
> cultural a que se refiere el artículo 24. Los importes superiores a 300 euros tendrán
> derecho a una deducción de la cuota líquida del 20 por ciento. El límite de 300 euros
> operará por contribuyente y en cada periodo impositivo.

**Cita literal (arts. 30.1 y 43.1, personas físicas).**

> [Art. 30.1] Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán
> derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en
> que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los
> importes superiores a 250 euros tendrán derecho a una deducción del 40 por ciento.

> [Art. 43.1] Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán
> derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en
> que se valoren las modalidades de cada tipo de mecenazgo. Los importes superiores a 250
> euros tendrán derecho a una deducción del 40 por ciento. El límite de 250 euros operará por
> contribuyente y en cada periodo impositivo.

**Cita literal (arts. 33.1 y 35.1, reconocimiento previo en mecenazgo social).**

> [Art. 33.1] Se entenderá por mecenazgo social la participación privada en la financiación de
> las entidades a que se refiere el artículo 34, que hayan obtenido por parte del departamento
> competente en materia de derechos sociales o del Instituto Navarro para la Igualdad el
> preceptivo reconocimiento del régimen de acuerdo con lo previsto en el artículo 35.

> [Art. 35.1] Las entidades interesadas deberán solicitar al departamento competente en
> materia de derechos sociales o al Instituto Navarro para la Igualdad, conforme al modelo que
> aprueben las personas titulares de dichos departamento u organismo, el acceso a los
> incentivos fiscales previstos en la sección quinta...

**Cita literal (art. 19.2, investigación y tecnología, empresas).**

> 2. Además, las donaciones dinerarias efectuadas a las entidades sin fines lucrativos que
> realicen actividades similares a las de los organismos públicos de investigación o a las
> de los centros tecnológicos, darán derecho a practicar una deducción en la cuota íntegra
> del 40 por ciento del importe de las mismas.

**Aviso adicional (no presente en la app).** El DFL tiene un primer régimen de donaciones
distinto del de mecenazgo: Capítulo I del Título II, arts. 15 a 23, para donaciones a
entidades que apliquen el régimen tributario especial del Título I (art. 1.3 exige, además,
que la entidad «deba aplicar normativa foral navarra»). Allí el IRPF deducce el 25 %
(art. 16.1) y el IS lo trata como partida deducible con topes del 30 %/3 ‰ para bienes de
interés cultural y obras de arte y del 10 %/1 ‰ en el resto (art. 20.1–2), todo ello con
«3 por mil del volumen de ingresos» (no de la cifra de negocios). Una federación o club
navarro que haya accedido al régimen tributario especial foral cae en este capítulo, no en
el de mecenazgo deportivo. La app no modela este régimen.

**Fuente.** BOE, texto consolidado DFL 2/2023 (BOE-A-2023-16401),
https://www.boe.es/buscar/act.php?id=BOE-A-2023-16401 (última actualización 31/12/2024). ELI:
https://www.boe.es/eli/es-nc/dflg/2023/05/24/2/con. Consultado el 20/10/2026.

---

## 7. Art. 20: ¿tope por la cuota íntegra?

**Reclamación.** `lib/mecenazgo.ts` calcula `deduccion = min(deduccion, cuota)` con `cuota =
tipoImpositivo × base`, y avisa: «La deducción calculada supera tu cuota íntegra del
ejercicio: ahora aplicas X y el resto se traslada».

**Veredicto: CONFIRMED** en su sustancia (la deducción se practica sobre la cuota íntegra y
el exceso no deducido se traslada 10 ejercicios), con dos precisiones: el artículo no
contiene un «tope» literal, y la cuota que la app calcula es aproximada.

**Valor correcto.** No hay un tope exprés: la deducción se practica *de* la cuota íntegra
(minorada en las deducciones y bonificaciones de los capítulos II, III y IV del Título VI
de la Ley 43/1995), y el art. 20.1 permite arrastrar a los 10 ejercicios siguientes las
«cantidades correspondientes al período impositivo no deducidas». El límite legal expreso
está en el art. 20.2: la base de la deducción no puede exceder del 15 % de la base imponible
—y su exceso también se aplica en los diez años siguientes—.

**Cita literal (art. 20.1).**

> 1. Los sujetos pasivos del Impuesto sobre Sociedades tendrán derecho a deducir de la cuota
> íntegra, minorada en las deducciones y bonificaciones previstas en los Capítulos II, III y
> IV del Título VI de la Ley 43/1995, de 27 de diciembre, del Impuesto sobre Sociedades, el
> 40 % de la base de la deducción determinada según lo dispuesto en el artículo 18. Las
> cantidades correspondientes al período impositivo no deducidas podrán aplicarse en las
> liquidaciones de los períodos impositivos que concluyan en los 10 años inmediatos y
> sucesivos.

**Cita literal (art. 20.2).**

> 2. La base de esta deducción no podrá exceder del 15 % de la base imponible del período
> impositivo. Las cantidades que excedan de este límite se podrán aplicar en los períodos
> impositivos que concluyan en los diez años inmediatos y sucesivos.

**Precisiones.** (a) La cuota que la app usa es `tipo × base imponible`: la cuota íntegra
real es la que resulta tras deducir las deducciones y bonificaciones del Título VI, Capítulos
II a IV, de la Ley 43/1995 y tras compensaciones, de modo que la estimación puede diferir.
(b) El «traslado» del exceso sobre la cuota íntegra tiene base en el art. 20.1 (cantidades no
deducidas), y el del exceso sobre el 15 % en el art. 20.2; la app solo anuncia el primero.

**Fuente.** BOE, texto consolidado, art. 20,
https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039. Complementario oficial: AEAT, Manual
práctico de IS 2025, «Importe de la deducción» («Dicha deducción se aplicó o no en este
período en función de la cuota líquida del periodo, siendo el exceso sobre la cuota líquida
aplicable en los 10 períodos impositivos inmediatos y sucesivos»). Consultados el 20/10/2026.

---

## 8. IRPF: art. 19, la escala y el tope de la base

**Reclamación.** 80 % hasta 250 €, 40 % resto, 45 % con donativo reiterado; tope del 10 % de
la base liquidable (15 % para actividades prioritarias) y los 250 € como «primer tramo»
único.

**Veredicto: CONFIRMED.**

**Valor correcto.** La escala del art. 19.1 es 80 % (hasta 250 €) y 40 % (resto), con el 45 %
para lo que exceda de 250 € en donativo reiterado; el límite de la base de deducción no está
en el art. 19 sino en el art. 69.1 LIRPF, al que remite el art. 19.2, y es del 10 % de la
base liquidable, elevado al 15 % para actividades prioritarias por la DA 57ª de la Ley
31/2022. El «primer tramo» de 250 € se aplica a la base de deducción del conjunto de
donativos, donaciones y aportaciones con derecho a deducción; la ley no dice expresamente
que el contribuyente elige qué aportaciones consumen el tramo (véase el matiz final).

**Cita literal (art. 19.1, escala y reiteración).**

> 1. Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a
> deducir de la cuota íntegra el resultado de aplicar a la base de la deducción correspondiente
> al conjunto de donativos, donaciones y aportaciones con derecho a deducción, determinada
> según lo dispuesto en el artículo 18 de esta Ley, la siguiente escala:
> Base de deducción Importe hasta | Porcentaje de deducción
> 250 euros. | 80
> Resto base de deducción. | 40

**Cita literal (art. 19.2, remisión al tope).**

> 2. La base de esta deducción se computará a efectos del límite previsto en el apartado 1 del
> artículo 69 de la Ley 35/2006, de 28 de noviembre, del Impuesto sobre la Renta de las
> Personas Físicas y de modificación parcial de las leyes de los Impuestos sobre Sociedades,
> sobre la Renta de no Residentes y sobre el Patrimonio.

**Cita literal (art. 69.1 LIRPF).**

> 1. La base de las deducciones a que se refieren los apartados 3 y 5 del artículo 68 de esta
> Ley, no podrá exceder para cada una de ellas del 10 por ciento de la base liquidable del
> contribuyente.

**Matiz sobre el «cubo único de 250 €».** El art. 19.1 aplica la escala «al conjunto de
donativos, donaciones y aportaciones con derecho a deducción», lo que respalda la lectura de
que los 250 € son un único tramo por contribuyente y ejercicio (como hace la app), pero la
ley no dice expresamente que el contribuyente elige qué aportaciones consumen el tramo. La
consulta vinculante V1565-26 citada en el informe no es fuente primaria y no se ha
verificado aquí.

**Fuente.** BOE, texto consolidado Ley 49/2002, art. 19
(https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039); BOE, texto consolidado Ley 35/2006,
art. 69.1 (https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764); BOE, Ley 31/2022, DA 57ª
(https://www.boe.es/buscar/act.php?id=BOE-A-2022-22128); AEAT, Manual práctico de IRPF 2025,
«3. Porcentajes de deducción» y «1. Porcentajes aplicables». Consultados el 20/10/2026.

---

## 9. Límite simbólico: 15 % y 25.000 €

**Reclamación.** La app (`lib/mecenazgo.ts`, `LIMITE_SIMBOLICO_PORCENTAJE = 0.15`,
`LIMITE_SIMBOLICO_EUROS = 25000`; `PanelAportante.tsx`, línea 451) y el informe: entrega
simbólica que no supere el 15 % del valor de la aportación ni los 25.000 €.

**Veredicto: CONFIRMED** en los valores; el artículo es el **17.2**, no el 20 (la ficha de
`DEPORTE_LEY` que lo sitúa en los arts. 25 a 27 está equivocada, véase el punto 5).

**Cita literal (art. 17.2).**

> 2. También darán derecho a deducción los donativos, donaciones y aportaciones aun cuando
> el donante o aportante pudiera recibir bienes o servicios, entregados o prestados por el
> donatario o beneficiario, de carácter simbólico, siempre y cuando el valor de los bienes o
> servicios recibidos no represente más del 15 % del valor del donativo, donación o aportación
> y, en todo caso, no supere el importe de 25.000 euros.

**Fuente.** BOE, texto consolidado, art. 17.2,
https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039. Complementario: AEAT, Manual práctico
de IRPF 2025, «2. Conceptos deducibles y base de la deducción» («Regla especial: derecho a
deducción en el caso de contraprestaciones meramente simbólicas»). Consultados el 20/10/2026.

---

## 10. Navarra: el umbral del 75 % de operaciones

**Reclamación.** README (línea 95) e informe: «Una empresa cuyo volumen de operaciones fuera
de Navarra supere el 75 % queda en el régimen común y le aplica la Ley 49/2002».

**Veredicto: WRONG (parcial).** El umbral del 75 % **existe** y es real, pero la regla está
mal formulada en la app: no es automática ni general, y el porcentaje mide las operaciones del
ejercicio anterior, no un volumen corrente.

**Valor correcto.** El 75 % es el criterio del **artículo 18.2 del Convenio Económico** (Ley
28/1990) para decidir qué normativa del IS se aplica a los sujetos pasivos que **tributan
conjuntamente a ambas Administraciones**:

- Domiciliados en Navarra con **75 % o más** de sus operaciones totales del ejercicio anterior
  en territorio común → quedanCONSTITUTOS a la **normativa de territorio común** (la Ley
  27/2014 del IS, con el régimen de mecenazgo de la Ley 49/2002).
- Domiciliados en territorio común con **75 % o más** de sus operaciones totales del ejercicio
  anterior en Navarra → aplican la **normativa foral navarra**, salvo entidades de grupo
  fiscal (en las que se exige el 100 %).

Condiciones que la app omite: (i) solo es aplicable a quienes tributan conjuntamente, es
decir, a los que operan en ambos territorios y cuyo **volumen total de operaciones del
ejercicio anterior excede de 12.000.000 €** (art. 19.2, en la redacción dada por la Ley
4/2025, de 24 de julio); por debajo de ese umbral rige el art. 19.1 (domicilio en Navarra →
exacción navarra, con independencia de dónde se operen); (ii) el cómputo se hace con los
puntos de conexión de los arts. 19 a 21; (iii) se refiere al **ejercicio anterior**.

**Cita literal (Convenio Económico, art. 18.2).**

> 2. Los sujetos pasivos que tributen conjuntamente a ambas Administraciones aplicarán la
> normativa correspondiente a la Administración de su domicilio fiscal. No obstante lo dispuesto
> en el apartado anterior, los sujetos pasivos que tributando conjuntamente a ambas
> Administraciones y teniendo su domicilio fiscal en Navarra hubieran realizado en el
> ejercicio anterior en territorio común el 75 por ciento o más de sus operaciones totales, de
> acuerdo con los puntos de conexión que se establecen en los artículos 19, 20 y 21 siguientes,
> quedarán sometidos a la normativa de territorio común.
> Los sujetos pasivos que tributen conjuntamente a ambas Administraciones y, teniendo su
> domicilio fiscal en territorio común, hayan realizado en el ejercicio anterior en Navarra el
> 75 por ciento o más de sus operaciones totales, aplicarán la normativa foral navarra salvo
> que se trate de entidades que formen parte de un grupo fiscal.

**Cita literal (Convenio Económico, art. 19.1–2, umbral de tributación conjunta).**

> 1. Corresponde a la Comunidad Foral de Navarra la exacción del Impuesto sobre Sociedades de
> los siguientes sujetos pasivos:
> a) Los que tengan su domicilio fiscal en Navarra y su volumen total de operaciones en el
> ejercicio anterior no hubiere excedido de doce millones de euros.
> b) Los que operen exclusivamente en territorio navarro y su volumen total de operaciones en
> el ejercicio anterior hubiere excedido de doce millones de euros, cualquiera que sea el lugar
> en que tengan su domicilio fiscal.
> 2. Los sujetos pasivos que operen en ambos territorios y cuyo volumen total de operaciones
> en el ejercicio anterior hubiere excedido de doce millones de euros, tributarán conjuntamente
> a ambas Administraciones, cualquiera que sea el lugar en que tengan su domicilio fiscal.

**Nota sobre la cifra umbral.** La información de la AEAT («Información sobre Haciendas
forales — Navarra») menciona 10 millones de euros, cifra de la Ley 22/2022, de 19 de octubre;
la redacción vigente del art. 19 del Convenio Económico, tras la Ley 4/2025, de 24 de julio
(BOE-A-2025-15423), la sitúa de nuevo en **doce millones de euros**. Prevalece el BOE.

**Fuente.** BOE, texto consolidado Ley 28/1990, arts. 18 a 21
(https://www.boe.es/buscar/act.php?id=BOE-A-1990-31117, última actualización 25/07/2025).
Consultado el 20/10/2026.

---

## Discrepancias detectadas

Resumen de todo lo que la app (código, README y `docs/informe-mecenazgo.md`) afirma y queda
desmentido por las fuentes primarias.

| # | Claim en la app | Valor correcto | Fuente |
|---|---|---|---|
| 1 | «Ley 49/2002, **de 27 de diciembre**, de Mecenazgo y deducciones fiscales por donativos a entidades sin fines lucrativos» (README.md:82; `PanelAportante.tsx`:168) | Ley 49/2002, **de 23 de diciembre** de 2002, de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo. «BOE» núm. 307, de 24/12/2002; vigor 25/12/2002 | BOE-A-2002-25039 |
| 2 | «Los **siete** datos que exige el **artículo 17**» (PanelCertificado.tsx:80; PanelLey.tsx:150; pie del PDF en `certificado.tsx`:140; `mecenazgo.ts`:49; `estado.ts`) | El contenido de la certificación lo exige el **art. 24.3** y son **seis** extremos (a–f). El art. 17 regula qué donativos son deducibles (seis letras a–f) y, en su apartado 2, el límite simbólico | BOE-A-2002-25039, arts. 17 y 24 |
| 3 | Certificado PDF de 5 puntos que no incluye el documento acreditativo de la entrega de bienes no dinerarios | El art. 24.3.d) exige «Documento público u otro documento auténtico que acredite la entrega del bien donado cuando no se trate de donativos en dinero» | BOE-A-2002-25039, art. 24.3.d) |
| 4 | «Art. 9 — Exenciones en tributos locales» (`estado.ts`, `ARTICULOS`) | **Art. 15. Tributos locales**. El art. 9 es «Normas de valoración» | BOE-A-2002-25039 |
| 5 | «El patrocinio publicitario [...] se regula en los artículos 25 a 27» (`estado.ts`, `DEPORTE_LEY`; PanelLey.tsx:248) y «la entrega simbólica se rige por los arts. 25 a 27» | Arts. 25/26/27 = convenio de colaboración empresarial, gastos en actividades de interés general y programas de apoyo a acontecimientos. El patrocinio publicitario se rige por la **Ley 34/1988, General de Publicidad** (art. 6.1.a de la Ley 49/2002). El límite 15 %/25.000 € está en el **art. 17.2** | BOE-A-2002-25039, arts. 6, 17.2, 25-27 |
| 6 | «Artículos **39 a 43**» del DFL 2/2023 reservados al mecenazgo deportivo (README.md:98; `PanelAportante.tsx`:236; PanelLey.tsx:223; informe:195) | La Sección 4.ª «Mecenazgo deportivo» = arts. **39 a 42** (concepto, beneficiarios, actividad de interés social, solicitud). Los incentivos del mecenazgo deportivo están en los arts. 43 (IRPF) y 44 (IS) de la Sección 5.ª | BOE-A-2023-16401 |
| 7 | Navarra, mecenazgo social / medioambiental / **deportivo** para empresas: «30 % de los primeros 300 € y 20 % de los siguientes» sobre cuota líquida (`mecenazgo.ts` `calcularNavarra`; PanelAportante.tsx:254; `estado.ts` `ESCALA_NAVARRA`) | Para social, medioambiental y deportivo la deducción de la cuota líquida es del **20 % del importe, en plano** (art. 44.1.b). El tramo 30 %/20 % con 300 € es del mecenazgo **cultural** (art. 31.1.b) | BOE-A-2023-16401, arts. 31.1.b y 44.1.b |
| 8 | Navarra, persona física: «+ 30 %/20 % sobre cuota líquida para cultural» (informe, tabla de personas físicas; `mecenazgo.ts`, rama IRPF cultural) | En Navarra las personas físicas solo deducen **80 % (primeros 250 €) y 40 %** (arts. 30.1 y 43.1). No hay deducción adicional sobre la cuota líquida: el 30 %/20 % es del IS (art. 31.1.b) | BOE-A-2023-16401, arts. 30.1, 31.1.b, 43.1 |
| 9 | «3 por mil de la **cifra de negocios**» (`estado.ts` `ESCALA_NAVARRA`; `mecenazgo.ts`:157) | «3 por mil del **importe neto de la cifra de negocios**» (arts. 31.1.a.2º y 44.1.a.2º). En el régimen del Capítulo I (arts. 15-23) el límite es del 3 ‰/1 ‰ del **volumen de ingresos** (art. 20) | BOE-A-2023-16401, arts. 20, 31.1.a, 44.1.a |
| 10 | «Una empresa cuyo volumen de operaciones fuera de Navarra **supere el 75 %** queda en el régimen común» (README.md:95; informe:144) | El 75 % es el criterio del art. 18.2 del **Convenio Económico**, y solo opera para sujetos pasivos que **tributan conjuntamente** (volumen total de operaciones del ejercicio anterior **> 12.000.000 €**, art. 19.2), referido al **ejercicio anterior** y con los puntos de conexión de los arts. 19-21 | BOE-A-1990-31117, arts. 18.2 y 19 |
| 11 | «El tope por la cuota íntegra» presentado como regla del art. 20 y calculado como `tipo impositivo × base imponible` (`mecenazgo.ts`:319-323) | El art. 20 no fija un tope: la deducción se practica *de* la cuota íntegra «minorada en las deducciones y bonificaciones previstas en los Capítulos II, III y IV del Título VI de la Ley 43/1995»; el exceso no deducido se traslada 10 años (art. 20.1) y el exceso sobre el 15 % de base imponible también (art. 20.2). La cuota real no es `tipo × base` | BOE-A-2002-25039, art. 20 |
| 12 | «Art. 21 — Deduccion en el IRNR con establecimiento permanente» (`estado.ts`, `ARTICULOS`) | El art. 21 regula el IRNR **sin** establecimiento permanente (apartado 1, escala del art. 19 y tope del 15 %) **y con** establecimiento permanente (apartado 2, que remite al art. 20) | BOE-A-2002-25039, art. 21 |
| 13 | «Instituto de España y las Reales Academias integradas en el» (texto truncado en `estado.ts`, `ACREEDORAS`) | «...integradas en el mismo» (DA décima de la Ley 49/2002) | BOE-A-2002-25039, DA décima |

### Discrepancias no verificadas (fuera del alcance)

- `docs/informe-mecenazgo.md` cita una consulta vinculante de la DGT (V1565-26, de 15 de
  junio de 2026) a través de un tercero (bm.consulting). No se ha verificado en fuente
  primaria; la afirmación de que el tramo de 250 € del IRPF es un cubo único por contribuyente
  y ejercicio se apoya solo en ella.
- La lista de entidades acreedoras que la app llama «dieciséis supuestos» (informe) frente a
  los 19 elementos de `ACREEDORAS` y los 18 bullets de la relación operativa de la AEAT: el
  recuento depende de si se computan por separado las letras del art. 16 y las entidades
  añadidas por disposiciones adicionales (DA 5, 6, 7, 8, 9, 10, 18 y 19) y las del art. 2.
- El informe afirma que no hay PGE aprobados para 2024, 2025 y 2026 y mantiene vigente la Ley
  31/2022. Los manuales de la AEAT consultados (páginas de marzo y junio de 2026) confirman
  la prórroga de los PGE 2023, pero la fuente primaria concreta (Real Decreto-ley 3/2026)
  no se ha descargado en esta verificación.
