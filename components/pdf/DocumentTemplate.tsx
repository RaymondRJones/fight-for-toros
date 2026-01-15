'use client';

import { Document, Page, Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';
import { UserFormData } from '@/lib/types';

// Register a font (using default for now)
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addressee: {
    marginBottom: 15,
  },
  addresseeName: {
    fontWeight: 'bold',
  },
  reference: {
    marginBottom: 20,
  },
  referenceRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  referenceLabel: {
    fontWeight: 'bold',
    width: 80,
  },
  referenceValue: {
    flex: 1,
  },
  salutation: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: 12,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  quote: {
    fontStyle: 'italic',
    marginLeft: 20,
    marginRight: 20,
  },
  closing: {
    marginTop: 20,
  },
  signatureSection: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 200,
    marginBottom: 5,
  },
  signatureImage: {
    width: 150,
    height: 60,
    marginBottom: 5,
  },
  signatureText: {
    marginBottom: 2,
  },
});

interface DocumentTemplateProps {
  data: UserFormData;
}

export default function DocumentTemplate({ data }: DocumentTemplateProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>INTERVENCIÓN CIUDADANA</Text>
          <Text style={styles.subtitle}>LEY 2385 DE 2024</Text>
        </View>

        {/* Addressee */}
        <View style={styles.addressee}>
          <Text style={styles.addresseeName}>Honorables Magistradas y Magistrados</Text>
          <Text>CORTE CONSTITUCIONAL DE COLOMBIA</Text>
        </View>

        {/* Reference */}
        <View style={styles.reference}>
          <View style={styles.referenceRow}>
            <Text style={styles.referenceLabel}>Referencia:</Text>
            <Text style={styles.referenceValue}>Intervención ciudadana – Ley 2385 de 2024</Text>
          </View>
          <View style={styles.referenceRow}>
            <Text style={styles.referenceLabel}>Expedientes:</Text>
            <Text style={styles.referenceValue}>D-0016158, D-0016172 y D-0016193</Text>
          </View>
          <View style={styles.referenceRow}>
            <Text style={styles.referenceLabel}>Asunto:</Text>
            <Text style={styles.referenceValue}>Solicitud de declaratoria de exequibilidad de la Ley 2385 de 2024</Text>
          </View>
        </View>

        {/* Salutation */}
        <Text style={styles.salutation}>Respetados(as) Magistrados(as):</Text>

        {/* Introduction */}
        <Text style={styles.paragraph}>
          Yo, {data.nombreCompleto}, mayor de edad, identificada con cédula de ciudadanía No. {data.numeroIdentidad}, actuando en ejercicio del derecho consagrado en el artículo 242 de la Constitución Política, presento intervención ciudadana dentro de los procesos de la referencia.
        </Text>

        <Text style={styles.paragraph}>
          Solicito a la Honorable Corte Constitucional declarar la EXEQUIBILIDAD de la Ley 2385 de 2024, con fundamento en las siguientes consideraciones:
        </Text>

        {/* Section 1 */}
        <Text style={styles.sectionTitle}>1. Alcance del derecho al trabajo</Text>
        <Text style={styles.paragraph}>
          La Ley 2385 de 2024 no regula el derecho al trabajo en general, sino que prohíbe una actividad específica que implica sufrimiento y muerte deliberada de animales. Como lo señaló esta Corporación, "el derecho al trabajo no es absoluto y admite restricciones razonables cuando entra en tensión con otros valores constitucionales" (Sentencia C-374 de 2025).
        </Text>

        {/* Section 2 */}
        <Text style={styles.sectionTitle}>2. Competencia del Congreso y protección animal</Text>
        <Text style={styles.paragraph}>
          El Congreso de la República tiene potestad para adecuar el ordenamiento jurídico a la evolución social. En la Sentencia C-429 de 2025, la Corte indicó que "la protección de los animales como seres sintientes constituye un interés constitucional relevante que habilita al Legislador para restringir prácticas que les ocasionen sufrimiento grave e innecesario".
        </Text>

        {/* Section 3 */}
        <Text style={styles.sectionTitle}>3. Límites constitucionales de la cultura</Text>
        <Text style={styles.paragraph}>
          La tradición no legitima el maltrato animal. Esta Corporación ha sostenido que "ninguna manifestación cultural puede erigirse en un espacio exento del control constitucional cuando desconoce principios superiores del ordenamiento" (Sentencia C-374 de 2025).
        </Text>

        {/* Section 4 */}
        <Text style={styles.sectionTitle}>4. Precedente constitucional</Text>
        <Text style={styles.paragraph}>
          Las sentencias C-374 de 2025 y C-429 de 2025 respaldaron la constitucionalidad de la Ley 2385 de 2024, fortaleciendo la coherencia jurisprudencial y la seguridad jurídica.
        </Text>

        {/* Closing */}
        <View style={styles.closing}>
          <Text style={styles.paragraph}>
            En mérito de lo expuesto, solicito respetuosamente declarar la EXEQUIBILIDAD de la Ley 2385 de 2024.
          </Text>
          <Text style={{ marginTop: 10 }}>Atentamente,</Text>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          {data.firma && (
            <Image src={data.firma} style={styles.signatureImage} />
          )}
          <View style={styles.signatureLine} />
          <Text style={styles.signatureText}>{data.nombreCompleto}</Text>
          <Text style={styles.signatureText}>C.C. No. {data.numeroIdentidad}</Text>
          <Text style={styles.signatureText}>{data.ciudad}</Text>
          <Text style={styles.signatureText}>{data.correo}</Text>
          <Text style={styles.signatureText}>Tel. {data.celular}</Text>
          <Text style={styles.signatureText}>Fecha: {data.fecha}</Text>
        </View>
      </Page>
    </Document>
  );
}
