import { UserFormData } from './types';
import { EMAIL_CONFIG } from './constants';

export function getDocumentContent(data: UserFormData): string {
  return `INTERVENCIÓN CIUDADANA
LEY 2385 DE 2024

Honorables Magistradas y Magistrados
CORTE CONSTITUCIONAL DE COLOMBIA

Referencia: Intervención ciudadana – Ley 2385 de 2024
Expedientes: D-0016158, D-0016172 y D-0016193
Asunto: Solicitud de declaratoria de exequibilidad de la Ley 2385 de 2024

Respetados(as) Magistrados(as):

Yo, ${data.nombreCompleto}, mayor de edad, identificada con cédula de ciudadanía No. ${data.numeroIdentidad}, actuando en ejercicio del derecho consagrado en el artículo 242 de la Constitución Política, presento intervención ciudadana dentro de los procesos de la referencia.

Solicito a la Honorable Corte Constitucional declarar la EXEQUIBILIDAD de la Ley 2385 de 2024, con fundamento en las siguientes consideraciones:

1. Alcance del derecho al trabajo

La Ley 2385 de 2024 no regula el derecho al trabajo en general, sino que prohíbe una actividad específica que implica sufrimiento y muerte deliberada de animales. Como lo señaló esta Corporación, "el derecho al trabajo no es absoluto y admite restricciones razonables cuando entra en tensión con otros valores constitucionales" (Sentencia C-374 de 2025).

2. Competencia del Congreso y protección animal

El Congreso de la República tiene potestad para adecuar el ordenamiento jurídico a la evolución social. En la Sentencia C-429 de 2025, la Corte indicó que "la protección de los animales como seres sintientes constituye un interés constitucional relevante que habilita al Legislador para restringir prácticas que les ocasionen sufrimiento grave e innecesario".

3. Límites constitucionales de la cultura

La tradición no legitima el maltrato animal. Esta Corporación ha sostenido que "ninguna manifestación cultural puede erigirse en un espacio exento del control constitucional cuando desconoce principios superiores del ordenamiento" (Sentencia C-374 de 2025).

4. Precedente constitucional

Las sentencias C-374 de 2025 y C-429 de 2025 respaldaron la constitucionalidad de la Ley 2385 de 2024, fortaleciendo la coherencia jurisprudencial y la seguridad jurídica.

En mérito de lo expuesto, solicito respetuosamente declarar la EXEQUIBILIDAD de la Ley 2385 de 2024.

Atentamente,

________________________________
${data.nombreCompleto}
C.C. No. ${data.numeroIdentidad}
${data.ciudad}
${data.correo}
Tel. ${data.celular}
Fecha: ${data.fecha}`;
}

export function getEmailBody(): string {
  return `Respetados(as) señores(as)
Secretaría General
Corte Constitucional de Colombia

Cordial saludo,

En ejercicio del derecho consagrado en el artículo 242 de la Constitución Política, me permito remitir intervención ciudadana individual dentro de los procesos identificados con los expedientes D-0016158, D-0016172 y D-0016193, mediante los cuales se demanda la constitucionalidad de la Ley 2385 de 2024.

Adjunto a este mensaje el memorial de intervención ciudadana, debidamente fechado y firmado, en el cual solicito respetuosamente a la Honorable Corte Constitucional declarar la exequibilidad de la Ley 2385 de 2024, con fundamento en los argumentos allí expuestos y en el precedente jurisprudencial aplicable.

Agradezco de manera atenta la recepción del documento y solicito, respetuosamente, que esta intervención sea incorporada al expediente correspondiente para los fines constitucionales pertinentes.

Quedo atenta a cualquier información adicional que se requiera.

Atentamente,`;
}

export function getMailtoLink(data: UserFormData): string {
  const body = encodeURIComponent(getEmailBody());
  const subject = encodeURIComponent(EMAIL_CONFIG.subject);
  return `mailto:${EMAIL_CONFIG.to}?subject=${subject}&body=${body}`;
}
